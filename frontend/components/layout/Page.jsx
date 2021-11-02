import styled from 'styled-components';

import { sizes } from 'frontend/styles/theme';
const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 0;

export const Page = styled.div`
    padding: 50px 0 50px ${paddingLeft}px;
    @media (max-width: 999px) {
        padding-left: ${paddingLeft - sizes.secondarySideBarWidth}px;
    }
`;