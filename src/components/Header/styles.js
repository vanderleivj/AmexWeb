import styled from 'styled-components';

export const Container = styled.div`
  background: #006BB9;

`;

export const Content = styled.div`
    height: 80px;
    margin: 0 auto;
    max-height: 900px;
    display:flex;
    justify-content: space-between;
    align-items:center;

    nav {
      display: flex;
      align-items: center;


      img {
        margin-left:100px;
        margin-right:100px;
        display: flex;
      }

    }

    aside {
      display: flex;
      align-items: center;
    }

`;

export const Profile = styled.button`
    display: flex;

    strong {
      display: block;
      color: #FFF;
    }

    div {
      align-items: center;
      display: flex;

      a {
      margin-right:30px;
      margin-left:50px;
      font-size: 16px;
      color: #Fff;
      font-weight:200;

      }
    }
    @media screen and (max-width: 1024px){
        margin-right:10px;
      }

`;
