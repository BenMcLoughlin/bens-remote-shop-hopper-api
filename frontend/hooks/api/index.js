import useQuery from './query';
import useMutation from './mutation';

export default {
    get: (...args) => useQuery(...args),
    post: (...args) => useMutation('post', ...args),
    put: (...args) => useMutation('put', ...args),
    patch: (...args) => useMutation('patch', ...args),
    delete: (...args) => useMutation('delete', ...args)
};