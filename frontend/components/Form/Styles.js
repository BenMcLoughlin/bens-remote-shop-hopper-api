import styled from 'styled-components';

import { color, font } from 'frontend/styles/theme';

export const StyledField = styled.div`
    margin-top: 0.2rem;
`;

export const FieldLabel = styled.label`
    display: block;
    padding-bottom: 0.05rem;
    color: ${color.textMedium};
    ${font.medium}
    ${font.size(13)}
`;

export const FieldTip = styled.div`
    padding-top: 6px;
    color: ${color.textMedium};
    ${font.size(12.5)}
`;

export const FieldError = styled.div`
    margin-top: 6px;
    line-height: 1;
    color: ${color.danger};
    ${font.medium}
    ${font.size(12.5)}
`;
