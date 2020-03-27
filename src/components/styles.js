import styled from 'styled-components';
import { darken } from  'polished';

export const Header = styled.div`
    height: 100px;
    background:#006BB9;
    display: flex;
    justify-content: flex;
    align-content: center;
    padding-left: 140px;
    margin-bottom:100px;

`;



export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding-right: 180px;
    padding-top:2%;

`;

export const ContainerForm = styled.div`
    background: #FFFFFF;
    height: 500px;
    width: 450px;
    box-shadow: 5px 5px 5px black 0.15;


    form {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      margin-left: 40px;
    }
    input {
      height: 40px;
      padding-left: 20px;
      margin-right: 45px;
      margin-bottom: 60px;
    }
    p {
      margin-bottom: 10px;

    }

    h1 {
      margin-bottom: 60px;
      padding-bottom: 10px;

    }
    @media screen and (max-width: 1024px){
        height: 400px;
        width: 400px;

        h1 {
          margin-bottom: 40px;
        }

    }

    @media screen and (max-width: 768px){
        margin-top: 30%;

      }

`;

export const ButtonForm = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top:10%;

    button {
      height: 70px;
      width:50%;
      background: #006BB9;
      border: 0;
      font-size: 16px;
      transition: background 0.3s;
      @media screen and (max-width: 1024px){
        height: 80px;
      }
      &:hover {
        background: ${darken(0.10, '#006BB9')}
      }

    }
`;
