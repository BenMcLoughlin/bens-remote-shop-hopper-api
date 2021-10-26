/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { startCase } from '../../utils/strings';

export const Styles = ({ styles }) => {
    const { handleChange, selectedValues } = styles;

    return (
        <Wrapper>
            <Question>{styles.question}</Question>
            <Options>
                {styles.options.map((option) => (
                    <Option
                        key={option}
                        onClick={() => handleChange(option)}
                        selected={selectedValues.includes(option)}
                    >
                        <OptionImage>
                            <Image
                                src={`/../public/assets/onboard/styles/${ option }.jpg`}
                                layout="fill"
                            />
                        </OptionImage>
                        <OptionTitle>{option}</OptionTitle>
                    </Option>
                ))}
            </Options>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin: 0 auto;
    gap: 2rem;

`;

const Options = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 2rem;
    justify-content: space-around;
    z-index: 1;
    opacity: 0.8;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Option = styled.div`
    height: 25rem;
    width: 20%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: ${ (p) => p.selected && '4px solid #14C691' };
    transition: all 0.2s ease;
    border-radius: 5px;
    @media (max-width: 600px) {
        width: 40%;
    }
`;
const OptionImage = styled.div`
    height: 80%;
    width: 100%;
    position: relative;
`;
const OptionTitle = styled.div`
    height: 20%;
    font-size: ${ (p) => p.theme.font.medium };
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Question = styled.div`
    font-size: ${ (p) => p.theme.font.mediumLarge };
    font-family: 'Poppins', sans-serif;
    color: #12142d;
    height: 8rem;
    text-align: center;
    @media (max-width: 600px) {
        width: 80%;
    }
`;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import { startCase } from '../../utils/strings';

// export const FavStyles = ({ favStyles }) => {
//     const { handleChange, selectedValues } = favStyles;

//     return (
//         <Wrapper>
//             <Question>{favStyles.question}</Question>
//             <Options>
//                 {favStyles.options.map((option) => (
//                     <Option
//                         onClick={() => handleChange(option)}
//                         selected={selectedValues.includes(option)}
//                     >
//                         <OptionImage>
//                             {/* <Image
//                                 src={`/../public/assets/onboard/styles/${option}.jpg`}
//                                 layout="fill"
//                             /> */}
//                         </OptionImage>
//                         <OptionTitle>{startCase(option)}</OptionTitle>
//                     </Option>
//                 ))}
//             </Options>
//         </Wrapper>
//     );
// };

// //---------------------------STYLES-------------------------------------------//

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     position: relative;
//     margin: 0 auto;
//     gap: 2rem;
//     height: 100%;
// `;

// const Options = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     height: 100%;
//     width: 80%;
// `;

// const Option = styled.div`
//     width: 30%;
//     margin-bottom: 2%;
//     background: yellow;
// `;
// const OptionImage = styled.div`
//     fill: 1;
//     background: blue;
//     position: relative;
// `;
// const OptionTitle = styled.div`
//     fill: 1;
//     font-size: ${(p) => p.theme.font.medium};
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Question = styled.div`
//     font-size: ${(p) => p.theme.font.mediumLarge};
//     font-family: 'Poppins', sans-serif;
//     color: #12142d;
//     fill: 1;
// `;