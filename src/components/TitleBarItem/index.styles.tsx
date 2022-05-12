import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    @media screen and (min-width: 885px) {
        width: auto;
        position: relative;
    }
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    @media screen and (min-width: 885px) {
        /* width: 115px; */
        padding: 10px 25px;
    }
`;

export const DownArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 3px;
`;

export const UpArrowIcon = styled(DownArrowIcon)`
    transform: rotate(180deg);
`;

export const DropDown = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.secondary};
    @media screen and (min-width: 885px) {
        position: absolute;
        z-index: 1;
        width: 300px;
    }
`;
