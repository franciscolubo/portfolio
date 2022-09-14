import styled from "styled-components";

export const CONTAINER_ABOUT = styled.div`
    width: 90%;
    margin: 20px auto;
    padding-top: 5px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 20px;

    h4 {
        font-weight: 500;
        letter-spacing: 1.7px;
        color: #212121;
        font-size: 18px;
        margin-bottom: 10px;
    }

    h1 {
        font-weight: 700;
        letter-spacing: 2px;
        color: #212121;
        margin: 10px 0;
        strong {
            color: #000;
        }
    }

    p {
        color: #212121;
        letter-spacing: 1px;
        padding: 20px 0;
    }

    @media screen and (min-width: 500px) {
        h4 {
            font-weight: 600;
            letter-spacing: 2px;
            font-size: 22px;
            margin: 20px 0;
        }

        h1 {
            font-weight: 800;
            letter-spacing: 2.5px;
            font-size: 42px;
        }

        p {
            font-size: 18px;
            margin: 20px 0;
        }
    }

    @media screen and (min-width: 700px) {
        div {
            width: 70%;
            margin: auto;
            h4 {
                margin-left: 35px;
            }
        }
    }

    @media screen and (min-width: 850px) {
        div {
            margin: 50px auto;
            h4 {
                margin-left: 60px
            }
        }
    }
`;