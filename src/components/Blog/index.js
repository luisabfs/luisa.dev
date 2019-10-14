import React from 'react';

import { Container, Wrapper, Card, CardDetails } from './styles';

import thumbnail from '../../assets/images/thumbnail.png';

const Blog = () => (
  <Container>
    <h1>últimos posts no blog</h1>
    <Wrapper>
      <Card>
        <img src={thumbnail} alt=""/>
        <CardDetails>
          <span>web</span>
          <h1>VER MAIS</h1>
          <span>2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt=""/>
        <CardDetails>
          <span>web</span>
          <h1>VER MAIS</h1>
          <span>2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt=""/>
        <CardDetails>
          <span>web</span>
          <h1>VER MAIS</h1>
          <span>2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt=""/>
        <CardDetails>
          <span>web</span>
          <h1>VER MAIS</h1>
          <span>2 dias</span>
        </CardDetails>
      </Card>
    </Wrapper>
  </Container>
);

export default Blog;
