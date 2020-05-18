import React, { Component } from 'react';
import api from '../../services/api';

import {
  Bottom, Wrapper, ContactWrap, InstaWrap,
} from './styles';

import Header from '../../components/Header';
import About from '../../components/About';
import Slider from '../../components/Slider';
import Contact from '../../components/Contact';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';

export default class Home extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const token = '13066341700.0243229.dc58665d3bde4286b7dd1adf8977e0e0';
    const count = 6;

    const { data: allImages } = await api.get(
      `v1/users/self/media/recent/?access_token=${token}&count=${count}`,
    );
    this.setState({ images: allImages.data });
  }

  render() {
    const { images } = this.state;

    return (
      <>
        <Header />
        <About />
        <Slider />
        <Bottom>
          <Wrapper>
            <ContactWrap id="contact">
              <Contact />
            </ContactWrap>
            <InstaWrap>
              <Instagram images={images} />
            </InstaWrap>
          </Wrapper>
        </Bottom>
        <Footer />
      </>
    );
  }
}
