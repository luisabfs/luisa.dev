import Link from 'next/link';

import { Container, Inner, Brand, FooterNav, Note } from './styles';

const Footer = () => (
  <Container>
    <Inner>
      <div className="footer-brand">
        <Link href="/" passHref legacyBehavior>
          <Brand>luisa<span>.dev</span></Brand>
        </Link>
        <Note>Built with care, curiosity &amp; a little pink.</Note>
      </div>
      <FooterNav aria-label="Footer navigation">
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
        <a href="https://linkedin.com/in/luisabfs" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/luisabfs" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="/assets/files/CV-LUISA-BARROS-EN.pdf" target="_blank" rel="noopener noreferrer">Résumé (EN)</a>
      </FooterNav>
    </Inner>
  </Container>
);

export default Footer;
