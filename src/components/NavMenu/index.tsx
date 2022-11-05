import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import { Container, Wrapper, NavMenu } from './styles';

import resume from '../../assets/files/cv-luisa-barros.pdf';

const style = { borderBottom: '4px solid #88c6dd' };

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <NavMenu>
            <li>
              <NavLink exact to="/" activeStyle={style}>home</NavLink>
            </li>
            <li>
              <NavLink to="/sobre" activeStyle={style}>sobre mim</NavLink>
            </li>
            {/* <li>
              <NavLink to="/blog" activeStyle={style}>blog</NavLink>
            </li> */}
            <li>
              <Link to={resume} target="_blank">currículo</Link>
            </li>
            <li>
              <HashLink to="/#contact">contato</HashLink>
            </li>
          </NavMenu>
        </Wrapper>
      </Container>
    );
  }
}
