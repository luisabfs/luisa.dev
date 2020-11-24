/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FiMenu } from 'react-icons/fi';
import {
  Container,
  Wrapper,
  NavMenu,
  NavItem,
  WrapMenu,
} from './styles';

import resume from '../../assets/luisa-cv.pdf';

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
              <NavLink exact to="/">luisa.<span>dev</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/" activeStyle={style}>home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sobre" activeStyle={style}>sobre mim</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/projetos" activeStyle={style}>projetos</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink to="/blog" activeStyle={style}>blog</NavLink>
            </NavItem> */}
            <NavItem>
              <a href={resume} target="_blank" rel="noopener noreferrer">currículo</a>
            </NavItem>
            <NavItem>
              <HashLink to="/#contact">contato</HashLink>
            </NavItem>
            <NavItem>
              <WrapMenu>
                <Link onClick={this.handleMenuShow}>
                  <FiMenu />
                  {
                    showMenu ? <Menu /> : null
                  }
                </Link>
              </WrapMenu>
            </NavItem>
          </NavMenu>
        </Wrapper>
      </Container>
    );
  }
}
