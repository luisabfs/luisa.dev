'use client'
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
  MapContainer,
  Details,
  DetailItem,
} from '../styles/lista-de-presentes';
import WeddingLogoSvg from '../components/Wedding/WeddingLogoSvg';
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const LINK_NUBANK = "https://nubank.com.br/cobrar/2jhtx/67d0d315-1891-4311-a212-943d8054edc7";

function Links() {
  const presents = useMemo(() => [
    {
      name: 'Cota do “só pra não dizer que não dei nada”',
      description: 'A clássica vaquinha da obrigação social. Te faz parecer generoso sem muito esforço!',
      price: 'R$ 20,00',
      thumbnail: '/assets/images/presents-list/julius.gif',

    },
    {
      name: 'O café da manhã depois do casamento',
      description: 'Porque casamento é lindo, mas ninguém quer ver a gente mal-humorado sem café.',
      price: 'R$ 50,00',
      thumbnail: '/assets/images/presents-list/pao-com-salame.jpeg',

    },
    {
      name: 'Noite de intrigas (quer dizer, jogos!)',
      description: 'Ajude a financiar um novo jogo pra nossa coleção! Prometemos não prejudicar nenhuma relação depois de uma partida intensa.',
      price: 'R$ 100,00',
      thumbnail: '/assets/images/presents-list/uno.jpg',

    },
    {
      name: 'Se Deus tocar seu coração...',
      description: 'Uma humilde contribuição para garantir que este casamento seja tão abençoado quanto financiado!',
      price: 'R$ 1.000,00',
      thumbnail: '/assets/images/presents-list/intervention.jpg',

    },
    {
      name: 'Fundo de recuperação da noiva pós socialização intensa',
      description: 'Luísa precisa de um dia de silêncio depois de interagir com tantos humanos no casamento.',
      price: 'R$ 80,00',
      thumbnail: '/assets/images/presents-list/introvert.jpg',

    },
    {
      name: 'Kit pro noivo lavar o (futuro) carro novo 🙏',
      description: 'Porque todo dono de carro jura que vai lavar toda semana… e acaba no lava-rápido mesmo.',
      price: 'R$ 120,00',
      thumbnail: '/assets/images/presents-list/vitor-car.png',
    },
    {
      name: 'Arranhadores para os gatos não destruírem nossos móveis',
      description: 'Vai funcionar? Provavelmente não. Mas pelo menos tentamos.',
      price: 'R$ 300,00',
      thumbnail: '/assets/images/presents-list/take-confuso.jpeg',

    },
    {
      name: 'Projeto Noiva Fit',
      description: 'A missão: entrar no vestido sem precisar prender a respiração. Patrocine um pré-treino e um empurrão moral!',
      price: 'R$ 200,00',
      thumbnail: '/assets/images/presents-list/noiva-fitness.png',

    },
    {
      name: 'Assinatura de streaming para noites de filmes',
      description: 'Para aquelas noites preguiçosas com pipoca e cobertor.',
      price: 'R$ 90,00',
      thumbnail: 'https://images.pexels.com/photos/4009407/pexels-photo-4009407.jpeg',
    },
    {
      name: 'Lua de Mel em 📌 Xique Xique - Bahia ',
      description: 'Depois da farra, nada melhor do que relaxar. Ajude esse casal a aproveitar o merecido descanso!',
      price: 'R$ ????,??',
      thumbnail: '/assets/images/presents-list/lua-de-mel.jpg',

    },
  ], []);

  return (
    <Container>
      <section
        id="header"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          backgroundImage: `url('/assets/images/presents-list/background-casamento.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Dark tint (optional)
          backdropFilter: 'blur(0.3px)',
          zIndex: 1, // Keep it behind the content
        }} />
        <div style={{
          position: 'relative', // Ensures it stays above the blur
          zIndex: 2, // Higher than the overlay
          padding: '20px',
          textAlign: 'center',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <WeddingLogoSvg style={{ width: 200, overflow: 'visible', maxWidth: '100%', maxHeight: '100%' }} />
          </div>

          <div style={{ textAlign: "center", display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', gap: 12, marginTop: 'auto', height: '100%' }}>
            <img src="/assets/images/presents-list/bem-vindos.svg" alt='Thumb' style={{
              objectFit: 'cover',
            }} />
            <h2 color="#f2f2f2">⏳ Falta pouco!</h2>
            <FlipClockCountdown
              to={new Date("2025-04-05T12:00:00").getTime()} // Convert date to UNIX timestamp
              labels={["Dias", "Horas", "Minutos", "Segundos"]}
              hideOnComplete={false}
              digitBlockStyle={{ width: 35, height: 60, fontSize: 30 }}
            />
          </div>
        </div>
      </section>
      <section id="details" style={{
        // backgroundColor: '#e6e1da',
        display: 'flex', gap: 16, minHeight: '100vh', flexDirection: 'column', width: '100%', padding: 30, alignItems: 'center', textAlign: 'center'
      }}>
        <Title color="#f2f2f2" showImage={false}>💍 Detalhes</Title>
        <Details>
          <DetailItem>
            <span>Sábado</span>•
            <strong>05</strong>
            <span>de Abril</span>•
            <span>12h</span>
          </DetailItem>
          <div>
            <p>
              Temos o prazer de convidá-lo para celebrar nosso casamento de um jeito leve, divertido e descontraído!
              Vista-se com conforto e, se quiser, traga roupa de banho para aproveitar a piscina ou a praia bem em frente.
              Ah, e venha com fome – teremos muito churrasco! 🥩🔥
            </p>
            <p><strong>🎩 Dress Code:</strong> Sem formalidades, venha à vontade! Só capricha no look para as fotos 📸</p>
            <p>
              📍 <strong>Local:</strong> Av. Inácio Barbosa, 9940 – Mosqueiro
              🔗 <a href="https://maps.app.goo.gl/XmfTBbK4cHDHyPfF8" target="_blank">Ver no Google Maps</a>
            </p>
          </div>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5100340984216!2d-37.093920024147886!3d-10.967574889195665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70ff95b680f91a3%3A0x78f6c7b1c2d18672!2sAv.%20In%C3%A1cio%20Barbosa%2C%209940%20-%20Mosqueiro%2C%20Aracaju%20-%20SE%2C%2049045-285!5e0!3m2!1sen!2sbr!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
            />
          </MapContainer>
        </Details>
      </section>
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WeddingLogoSvg style={{ width: 200, overflow: 'visible', maxWidth: '100%', maxHeight: '100%' }} />
      </div> */}
      <div style={{
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
      }}>
        <hr style={{
          width: '100%',
          border: '0.5px solid rgba(255,255,255,0.2)',
          position: 'absolute'
        }} />
        <span style={{
          background: '#222',
          padding: '0 16px',
          fontWeight: 'bold',
          color: '#fff',
          position: 'relative'
        }}>
          <h2 color="#f2f2f2">🎁 Nossa Lista de Presentes 🎁</h2>
        </span>
      </div>
      <InfoIcon>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 5 }}>
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
            ✨ Muitas pessoas têm nos perguntado, então resolvemos criar essa versão simbólica e divertida para quem quiser nos ajudar financeiramente.
            Já moramos juntos há um ano e nosso enxoval está completo, então o que mais precisamos é um empurrãozinho para a lua de mel e alguns custos do grande dia.
            Se preferirem presentear com algo físico, temos algumas opções na Amazon. Mas, de coração, o maior presente será ter vocês comemorando com a gente! 💖
          </Tooltip>
        </InfoIcon>
      <section style={{ display: 'flex', flexDirection: 'column', padding: 30, alignItems: 'center', justifyContent: 'center', gap: 8 }}>

        <div style={{ display: 'flex', width: '100%', maxWidth: '1500px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
          {presents.map((present) => (
            <Link href={LINK_NUBANK} target="_blank" rel="noopener noreferrer">
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
      </section>
      <Footer />
    </Container>
  );
}

export default Links;
