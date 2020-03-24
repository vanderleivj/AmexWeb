import React from 'react';

import { Content, ContainerForm,ButtonForm } from '../../components/styles';
import { Container } from './styles';

import Header from '../../components/Header';

import BackgroundSlider from 'react-background-slider';

import imagem1 from '../../assets/imagem.jpg';
import imagem2 from '../../assets/imagem2.jpg';


export default function Login() {
  return (
    <>
      <Container>
          <Header/>
          <Content>
          <BackgroundSlider images={[imagem1, imagem2]} duration={10} transition={2} />
            <ContainerForm>
              <form>
                <h1>Acesso do Cliente</h1>
                <p>CPF do Cliente</p>
                <input type = "number" placeholder = "000.000.000-00" />
                <p>Senha</p>
                <input type = "password" placeholder  = "*********" />

              </form>
              <ButtonForm>
                  <button style={{color: '#fff'}} type = "submit">Login do Cliente</button>
                  <button style={{background: '#DEEAF6', color: '#828A92'}} type = "submit">Esqueceu a Senha</button>
              </ButtonForm>
            </ContainerForm>
          </Content>
      </Container>
    </>
  );
}
