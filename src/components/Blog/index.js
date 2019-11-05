import React from 'react';

import { Container, WrapCaption, Wrapper, Card, CardDetails } from './styles';

import layer from '../../assets/images/layer.png';
import thumbnail from '../../assets/images/thumbnail.png';
import thumbnail2 from '../../assets/images/thumbnail2.png';

const Blog = () => (
  <Container>
    <WrapCaption>
      <h1>últimos posts no blog</h1>
      <img src={layer} alt="" />
    </WrapCaption>
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
