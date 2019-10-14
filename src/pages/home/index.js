import React, { Component } from 'react';
import api from '../../services/api';

import { Bottom, Wrapper } from './styles';

import Header from '../../components/Header';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Blog from '../../components/Blog';
import Instagram from '../../components/Instagram';

export default class Home extends Component {
  state = {
    images: [],
  }

  async componentDidMount() {
    let token = '13066341700.0243229.dc58665d3bde4286b7dd1adf8977e0e0';
    let count = 6;

    const { data: allImages } = await api.get(`v1/users/self/media/recent/?access_token=${token}&count=${count}`);
    this.setState({ images: allImages.data });
  }

  render() {
    const { images } = this.state;

    console.log(images);

    return (
      <>
        <Header />
        <About />
        <Projects />
        <Bottom>
          <Wrapper>
            <Blog />
            <Instagram images={images} />
          </Wrapper>
        </Bottom>
      </>
    );
  }
}
