import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
    padding: 70px 45px;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    max-width: 670px;

    &:first-of-type {
        margin-top: 3rem;
    }
`;

export const Header = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 26px;
    background: #303030;
    padding: .8rem 1.2rem;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }

`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height .25s cubic-bezier(.5, 0, .1, 1);
    font-size: 20px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8rem 2.2rem;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }

`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;


export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;