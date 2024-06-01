import styled from 'styled-components';

const breakPoint = '600px';

const mobile = `@media screen and (max-width: ${breakPoint})`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;

    ${mobile} {
        flex-direction: column;
        align-items: center;
    }

`;
