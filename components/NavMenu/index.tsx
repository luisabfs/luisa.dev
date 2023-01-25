import React, { Component } from 'react';
import Link from 'next/link'

import { Container, Wrapper, NavMenu } from './styles';

// import resume from '../../assets/files/cv-luisa-barros.pdf';

const style = { borderBottom: '4px solid #88c6dd' };

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <NavMenu>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/sobre">sobre mim</Link>
            </li>
            {/* <li>
              <NavLink to="/projetos" activeStyle={style}>projetos</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/blog" activeStyle={style}>blog</NavLink>
            </li> */}
            {/* <li>
              <Link href={resume} target="_blank">currículo</Link>
            </li> */}
            {/* <li>
              <HashLink to="/#contact">contato</HashLink>
            </li> */}
          </NavMenu>
        </Wrapper>
      </Container>
    );
  }
}
