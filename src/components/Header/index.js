import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo.svg'

import { MdCreditCard, MdMonetizationOn } from 'react-icons/md'

class LinkButton extends Component {
  render () {
    return <Link>{this.props.tittle}</Link>
  }
}

export default function Home() {
  return (
    <Container>
      <Content>
        <nav>
          <img style={{height:40}} src={logo} alt="Amex" />
        </nav>

        <aside>
          <Profile>
            <div>
              <MdMonetizationOn color="#FFF" size={20} />
              <LinkButton tittle="Abra sua conta" to ="#"/>
              <MdCreditCard color="#FFF" size={20} />
              <LinkButton tittle="Peça o seu cartão" to ="#"/>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
