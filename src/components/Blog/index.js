import React from 'react';

import { Container, Wrapper, Card, CardDetails } from './styles';

import thumbnail from '../../assets/images/thumbnail.png';
import thumbnail2 from '../../assets/images/thumbnail2.png';

const Blog = () => (
  <Container>
    <h1>últimos posts no blog</h1>
    <Wrapper>
      <Card>
        <img src={thumbnail} alt=""/>
        <CardDetails>
          <span>#web</span>
          <a href="">
             <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail2} alt=""/>
        <CardDetails>
          <span>#web</span>
          <a href="">
             <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail2} alt=""/>
        <CardDetails>
          <span>#web</span>
          <a href="">
             <h2>VER MAIS</h2>
          </a>
          <span>há 2 dias</span>
        </CardDetails>
      </Card>
      <Card>
        <img src={thumbnail} alt=""/>
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
