import React from 'react';

// Components
import Navbar from '../../components/Navbar';
import Card from '../../components/LinkCard';
import Footer from '../../components/Footer';

// Assets
import Logbook from '../../assets/images/logbook.png';
import layer from '../../assets/images/layer.png';

// Styles
import { Container, Title } from './styles';

function Links() {
  return (
    <Container>
      <Navbar />
      <Title>
        <h1>links úteis</h1>
        <img src={layer} alt="" />
      </Title>

      <Card
        title="On Logbooks"
        src={Logbook}
        link="https://bit.ly/OnLogbooks"
      />

      <Footer />
    </Container>
  );
}

export default Links;
