import styled from 'styled-components';

export const Container = styled.div``;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    @media screen and (min-width: 885px) {
        width: 95%;
        flex-direction: row;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    padding: 12px;
    justify-content: flex-end;
`;
