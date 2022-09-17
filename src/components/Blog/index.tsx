import React from 'react';

import Title from '../Title';

import {
  Container, Wrapper, Card, CardDetails,
} from './styles';

import thumbnail from '../../assets/images/blog/thumbnail.png';
import thumbnail2 from '../../assets/images/blog/thumbnail2.png';

const Blog = () => (
  <Container>
    <Title>últimos posts no blog</Title>
    <Wrapper>
      <Card>
        <img src={thumbnail2} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail2} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail2} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt="" />
        <CardDetails>
          <span>#web</span>
          <a href="">
            <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
    </Wrapper>
  </Container>
);

export default Blog;
