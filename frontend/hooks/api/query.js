import { useRef, useCallback, useEffect } from 'react';
import { isEqual } from 'lodash';

import api from 'frontend/utils/api';
import useMergeState from '../mergeState';
import useDeepCompareMemoize from '../deepCompareMemoize';

const useQuery = (url, propsVariables = {}, options = {}) => {
    const { lazy = false, cachePolicy = 'cache-first' } = options;

    const wasCalled = useRef(false);
    const propsVariablesMemoized = useDeepCompareMemoize(propsVariables);

    const isSleeping = lazy && !wasCalled.current;
    const isCacheAvailable = cache[url] && isEqual(cache[url].apiVariables, propsVariables);
    const canUseCache = isCacheAvailable && cachePolicy !== 'no-cache' && !wasCalled.current;

    const [state, mergeState] = useMergeState({
        data: canUseCache ? cache[url].data : null,
        error: null,
        loading: !lazy && !canUseCache,
        variables: {}
    });

    const makeRequest = useCallback(
        (newVariables) => {
            const variables = { ...state.variables, ...(newVariables || {}) };
            const apiVariables = { ...propsVariablesMemoized, ...variables };

            const skipLoading = canUseCache && cachePolicy === 'cache-first';

            if (!skipLoading) {
                mergeState({ loading: true, variables });
            } else if (newVariables) {
                mergeState({ variables });
            }

            api.get(url, apiVariables).then(
                (data) => {
                    cache[url] = { data, apiVariables };
                    mergeState({ data, error: null, loading: false });
                },
                (error) => {
                    mergeState({ error, data: null, loading: false });
                }
            );

            wasCalled.current = true;
        },
        [propsVariablesMemoized]
    );

    useEffect(() => {
        if (isSleeping) {
            return;
        }

        if (canUseCache && cachePolicy === 'cache-only') {
            return;
        }

        makeRequest();
    }, [makeRequest]);

    const setLocalData = useCallback(
        (getUpdatedData) =>
            mergeState(({ data }) => {
                const updatedData = getUpdatedData(data);
                cache[url] = { ...(cache[url] || {}), data: updatedData };
                return { data: updatedData };
            }),
        [mergeState, url]
    );

    return [
        {
            ...state,
            variables: { ...propsVariablesMemoized, ...state.variables },
            setLocalData
        },
        makeRequest
    ];
};

const cache = {};

export default useQuery;
