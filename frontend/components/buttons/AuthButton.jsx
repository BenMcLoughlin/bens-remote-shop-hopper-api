import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { startCase } from 'frontend/utils/strings';
import { Spinner } from 'frontend/components/icons';

export const AuthButton = ({ title = 'sign up', gradient = 'primary' }) => {
    const { loginWithRedirect, logout, user, loading } = useAuth0();
    console.log(useAuth0());
    const onClick = () => {
        user ? logout() : loginWithRedirect();
    };

    return (
        <Wrapper gradient={gradient} title={title} onClick={onClick}>
            {loading ? <Spinner /> : <Title>{user ? 'Log Out' : startCase(title)}</Title>}
        </Wrapper>
    );
};

const Wrapper = styled.button`
    height: 5rem;
    min-width: 11rem;
    max-width: ${(p) => `${p.title.length * 2}rem`};
    cursor: pointer;
    display: flex;
    align-content: center;
    border-radius: 40px;
    padding: 0 2rem 0 2rem;
    justify-content: center;
    align-items: center;
    ${(p) => p.theme.gradient[p.gradient]};
    border: ${(p) => p.gradient === 'none' && '1px solid white'};
    opacity: 1;
    &:hover {
        background: ${(props) => props.theme.color.dark};
    }
    transition: all 0.6s ease;
    border: none;
`;
const Title = styled.div`
    font-size: 1.8rem;
    color: white;
    ${(props) => props.theme.flex.vertical.center};
`;
const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    fill: white;
    margin-right: 1.5rem;
`;
