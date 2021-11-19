import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'frontend/components';
import { color, font } from 'frontend/styles/theme';
import useGlobal from 'frontend/globalState/store';
import { EmailCards } from '../EmailCards';

const propTypes = {
    templateClass: PropTypes.object,
    products: PropTypes.array.isRequired
};

const defaultProps = {
    products: [],
    pid: 'Athletic'
};

export const ClassBlock = ({ templateClass }) => {
    const [globalState, globalActions] = useGlobal();
    const [currentClass, setCurrentClass] = useState([]);

    useEffect(() => {
        _getClass(templateClass.class_name);
    }, []);

    const _getClass = async (name) => {
        const result = await globalActions.apiRequests.getTemplateClass(name);

        if (result) {
            setCurrentClass(result);
        }
    };

    const _set = async (className) => {
        await globalActions.apiRequests.toggleTemplateClassSet(className);
    };

    return (
        <>
            <Title>
                {!templateClass.isSet ?
                    <Button
                        title={`Set ${templateClass.class_name} for deployment?`}
                        onClick={() => _set(templateClass.class_name)}
                        gradient="secondary"
                    />
                    : `${templateClass.class_name} is Set`
                }
            </Title>
            <EmailCards pid={templateClass.class_name} items={currentClass.items} />
        </>
    );
};

export const Title = styled.div`
    padding: 13px 0.1rem 17px;
    text-transform: uppercase;
    color: ${color.textMedium};
    ${font.size(`18.5px`)};
`;

ClassBlock.propTypes = propTypes;
ClassBlock.defaultProps = defaultProps;
