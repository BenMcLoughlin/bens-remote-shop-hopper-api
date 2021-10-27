import styled, { css } from 'styled-components';

import { color, font, mixin, zIndexValues } from 'styles/theme';

export const StyledDatePicker = styled.div`
    position: relative;
`;

export const Dropdown = styled.div`
    z-index: ${zIndexValues.dropdown};
    position: absolute;
    top: 130%;
    right: 0;
    width: 270px;
    border-radius: 3px;
    background: #fff;
    ${mixin.boxShadowDropdown}
    ${(props) =>
        props.withTime &&
        css`
            width: 360px;
            padding-right: 90px;
        `}
`;

export const DateSection = styled.div`
    position: relative;
    padding: 0.2rem;
`;

export const SelectedMonthYear = styled.div`
    display: inline-block;
    padding-left: 7px;
    ${font.bold}
    ${font.size(16)}
`;

export const YearSelect = styled.select`
    margin-left: 0.05rem;
    width: 60px;
    height: 22px;
    ${font.size(13)}
`;

export const PrevNextIcons = styled.div`
    position: absolute;
    top: 12px;
    right: 19px;
    i {
        padding: 7px 0.05rem 4px;
        font-size: 22px;
        color: ${color.textLight};
        ${mixin.clickable}
        &:hover {
            color: ${color.textDarkest};
        }
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 10.05rem;
    text-align: center;
`;

export const DayName = styled.div`
    width: 14.28%;
    height: 30px;
    line-height: 30px;
    color: ${color.textLight};
    ${font.size(13)}
`;

export const Day = styled.div`
    width: 14.28%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    ${font.size(15)}
    ${(props) => !props.isFiller && hoverStyles}
  ${(props) => props.isToday && font.bold}
  ${(props) => props.isSelected && selectedStyles}
`;

export const TimeSection = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 90px;
    padding: 0.05rem 0;
    border-left: 1px solid ${color.borderLight};
    ${mixin.scrollableY}
`;

export const Time = styled.div`
    padding: 0.05rem 0 0.05rem 0.2rem;
    ${font.size(14)}
    ${(props) => !props.isFiller && hoverStyles}
  ${(props) => props.isSelected && selectedStyles}
`;

const hoverStyles = css`
    ${mixin.clickable}
    &:hover {
        background: ${color.backgroundMedium};
    }
`;

const selectedStyles = css`
    color: #fff;
    &:hover,
    & {
        background: ${color.primary};
    }
`;
