import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import { Brand, Container, NavMenu, NavToggle, Wrapper } from './styles';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Container>
      <Wrapper>
        <Link href="/" passHref legacyBehavior>
          <Brand aria-label="Luisa.dev home">luisa<span>.dev</span></Brand>
        </Link>

        <NavToggle
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          Menu
        </NavToggle>

        <NavMenu id="primary-navigation" aria-label="Primary navigation" $open={menuOpen}>
          <Link href="/#projects" onClick={closeMenu}>Projects</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
          <a className="resume-link" href="/assets/files/CV-LUISA-BARROS-EN.pdf" target="_blank" rel="noopener noreferrer">Résumé (EN)</a>
        </NavMenu>
      </Wrapper>
    </Container>
  );
}
