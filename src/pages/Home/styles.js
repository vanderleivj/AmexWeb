import styled from 'styled-components';
import { darken } from  'polished';


export const ContainerForm = styled.div`
  height:100%;
  width:100%;


`;

export const ContainerAll = styled.div`
  height:100%;
  width:100%;

`;

export const AccessButton = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;

    button {
      height: 70px;
      width:100%;
      background: #66A7E3;
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
