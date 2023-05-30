import React, { useState, useMemo } from 'react';
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

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = useMemo(() => [
    {
      ref: '/',
      label: `home`,
    },
    {
      ref: '/about',
      label: `sobre mim`,
    }, {
      ref: '/assets/files/CV-LUISA-BARROS-PT.pdf',
      label: `currículo`,
      newTab: true,
    },
  ], []);

  const handleMenuShow = () => {
    setShowMenu(!showMenu);
    document.addEventListener('click', handleMenuClose);
  }

  const handleMenuClose = () => {
    setShowMenu(false);
    document.removeEventListener('click', handleMenuClose);
  }

  return (
    <Container>
      <Wrapper>
        <NavMenu menu={showMenu}>
          <NavItem>
            <Link href="/">luisa.<span>dev</span></Link>
          </NavItem>

          {navItems.map(item => (
            <NavItem>
              <Link href={item.ref} target={item.newTab ? '_blank' : undefined} rel={item.newTab ? "noopener noreferrer" : undefined}>{item.label}</Link>
            </NavItem>
          ))}

          <NavItem>
            <WrapMenu>
              <button tabIndex={0} onKeyDown={handleMenuShow} onClick={handleMenuShow}>
                <FiMenu />
                {
                  showMenu ? <Menu /> : null
                }
              </button>
            </WrapMenu>
          </NavItem>
        </NavMenu>
      </Wrapper>
    </Container>
  );
}

