import React, { Component } from 'react';
import Link from 'next/link'

import { FiMenu } from 'react-icons/fi';
import {
  Container,
  Wrapper,
  NavMenu,
  NavItem,
  WrapMenu,
} from './styles';

import Menu from '../NavMenu';

export default class Navbar extends Component {
  state = {
    showMenu: false,
    style: {
      borderBottom: '4px solid #88c6dd',
    },
  }

  handleMenuShow = () => {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    }, () => {
      document.addEventListener('click', this.handleMenuClose);
    });
  }

  handleMenuClose = () => {
    this.setState({
      showMenu: false,
    }, () => {
      document.removeEventListener('click', this.handleMenuClose);
    });
  }

  render() {
    const { style, showMenu } = this.state;
    return (
      <Container>
        <Wrapper>
          <NavMenu menu={showMenu}>
            <NavItem>
              <Link href="/">luisa.<span>dev</span></Link>
            </NavItem>
            <NavItem>
              <Link href="/" >home</Link>
            </NavItem>
            <NavItem>
              <Link href="/about">sobre mim</Link>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/projetos" activeStyle={style}>projetos</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink to="/blog" activeStyle={style}>blog</NavLink>
            </NavItem> */}
            <NavItem>
              <a href="/assets/files/cv-luisa-barros.pdf" target="_blank" rel="noopener noreferrer">currículo</a>
            </NavItem>
            <NavItem>
              <WrapMenu>
                <a role="button" tabIndex={0} onKeyDown={this.handleMenuShow} onClick={this.handleMenuShow}>
                  <FiMenu />
                  {
                    showMenu ? <Menu /> : null
                  }
                </a>
              </WrapMenu>
            </NavItem>
          </NavMenu>
        </Wrapper>
      </Container>
    );
  }
}
