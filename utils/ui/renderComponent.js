import * as components from '../../components/onboard';
import { startCase } from '../../utils/strings';

export const renderComponent = (query, props) => {
    const Component = components[startCase(query)];
    return <Component {...props} />;
};
