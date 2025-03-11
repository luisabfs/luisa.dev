import React, { useMemo } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import Footer from '../components/Footer';
import Title from '../components/Title';

import {
  Container,
  Thumb,
  Link,
  LinkContainer,
  WrapCaption,
  InfoIcon,
  Tooltip,
} from '../styles/lista-de-presentes';
import WeddingLogoSvg from '../components/Wedding/WeddingLogoSvg';

function Links() {
  const presents = useMemo(() => [
    {
      name: 'Cota do “só pra não dizer que não dei nada”',
      description: 'A clássica vaquinha da obrigação social. Te faz parecer generoso sem muito esforço!',
      price: 'R$ 20,00',
      thumbnail: '/assets/images/presents-list/julius.gif',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'O café da manhã depois do casamento',
      description: 'Porque casamento é lindo, mas ninguém quer ver a gente mal-humorado sem café.',
      price: 'R$ 50,00',
      thumbnail: '/assets/images/presents-list/pao-com-salame.jpeg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Noite de intrigas (quer dizer, jogos!)',
      description: 'Ajude a financiar um novo jogo pra nossa coleção! Prometemos não prejudicar nenhuma relação depois de uma partida intensa.',
      price: 'R$ 100,00',
      thumbnail: '/assets/images/presents-list/uno.jpg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Se Deus tocar seu coração...',
      description: 'Uma humilde contribuição para garantir que este casamento seja tão abençoado quanto financiado!',
      price: 'R$ 1.000,00',
      thumbnail: '/assets/images/presents-list/intervention.jpg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Fundo de recuperação da noiva pós socialização intensa',
      description: 'Luísa precisa de um dia de silêncio depois de interagir com tantos humanos no casamento.',
      price: 'R$ 80,00',
      thumbnail: '/assets/images/presents-list/introvert.jpg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Kit pra Vitor lavar o (futuro) carro novo 🙏',
      description: 'Porque todo dono de carro jura que vai lavar toda semana… e acaba no lava-rápido mesmo.',
      price: 'R$ 120,00',
      thumbnail: '/assets/images/presents-list/vitor-car.png',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',
    },
    {
      name: 'Arranhadores para os gatos não destruírem nossos móveis',
      description: 'Vai funcionar? Provavelmente não. Mas pelo menos tentamos.',
      price: 'R$ 300,00',
      thumbnail: '/assets/images/presents-list/gato.webp',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Projeto Noiva Fit',
      description: 'A missão: entrar no vestido sem precisar prender a respiração. Patrocine um pré-treino e um empurrão moral!',
      price: 'R$ 200,00',
      thumbnail: '/assets/images/presents-list/noiva-fitness.png',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
    {
      name: 'Assinatura de streaming para noites de filmes',
      description: 'Para aquelas noites preguiçosas com pipoca e cobertor.',
      price: 'R$ 90,00',
      thumbnail: 'https://images.pexels.com/photos/4009407/pexels-photo-4009407.jpeg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',
    },
    {
      name: 'Vitor não quer saber quanto custou o casamento',
      description: 'Ajude a manter a paz e evite que ele descubra os números reais.',
      price: 'R$ ???,??',
      thumbnail: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      url: 'https://nubank.com.br/cobrar/2jhtx/67cf3908-cf73-4545-b764-adc1abb261d8',

    },
  ], []);

  return (
    <Container>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <WeddingLogoSvg style={{ width: 200, overflow: 'visible', maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <Title showImage={false}>nossa lista de presentes</Title>
      <InfoIcon>
        <div style={{display: 'flex', alignItems: 'center', gap: 8 }}>
        <a
          target='_blank'
          href="https://www.amazon.com.br/hz/wishlist/ls/257FJD6NBUN2Z?ref_=wl_share"
          style={{ color: 'white' }}

          >
          Lista da Amazon
        </a>
        <FaInfoCircle color="#9f9e9e" width={24} height={24} />
          </div>
        <Tooltip className="tooltip">
          ✨ Oi, gente! Um recadinho sobre nossa lista de presentes:<br />
          Muitas pessoas têm nos perguntado, então resolvemos criar essa versão simbólica e divertida para quem quiser nos ajudar financeiramente.<br /><br />
          Como já moramos juntos há um ano, nosso enxoval está praticamente completo, então o que mais precisamos agora é um empurrãozinho para a nossa lua de mel e para cobrir alguns custos do grande dia.<br /><br />
          Se preferirem presentear com algo físico, incluímos também algumas opções na Amazon. Mas, de verdade, o maior presente será ter vocês celebrando esse momento tão especial conosco! 💖<br /><br />
          Obrigada de coração! 🥰💍
        </Tooltip>
      </InfoIcon>
      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
        {presents.map((present) => (
          <Link href={present.url} target="_blank" rel="noopener noreferrer">
            <LinkContainer>
              <div style={{ width: '100%', height: 250, position: 'relative' }}>
                <Thumb fill src={present.thumbnail} alt='Thumb' style={{
                  objectFit: 'cover', // cover, contain, none
                }} />

              </div>
              <WrapCaption>
                <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: 10 }}>{present.name}</h2>
                <p style={{ textAlign: 'center' }}>{present.description}</p>
                <span style={{ fontSize: 18, fontWeight: 'bold', marginTop: 'auto' }}>{present.price}</span>
              </WrapCaption>
            </LinkContainer>
          </Link>
        ))}
      </div>
      <Footer />
    </Container>
  );
}

export default Links;
