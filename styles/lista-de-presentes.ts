import styled, { keyframes } from "styled-components";
import Image from 'next/image'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  height: 100vh;
  /* padding: 30px; */
  /* gap: 16px; */
  overflow-x: hidden;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-image: url('/assets/images/presents-list/background-casamento.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* Blur Overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
    backdrop-filter: blur(10px); /* Blur effect */
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 280px;
  min-height: 100%;
  height: auto;
  border-radius: 8px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: transform .2s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 10px;
  color: #000;
`;

export const WrapCaption = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 14px;
  height: 100%;
  gap: 16px;
`;

export const Thumb = styled(Image)`
  border-radius: 8px;
`;

export const InfoIcon = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  cursor: help;
  padding: 30px 30px 0 30px;
  gap: 20px;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.p`
  visibility: hidden;
  width: 400px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  font-size: 14px;
  line-height: 1.2;
  white-space: normal;
  z-index: 10;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Details = styled.div`
  font-size: 18px;
  color: #f2f2f2;
  line-height: 1.6;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  height: 100%;

  p {
    margin: 10px 0;
  }

  a {
    color: #c96f3e;
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;

  strong {
    font-size: 28px;
    color: #c96f3e;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

export const BouncingLink = styled.a`
  display: inline-block; /* Ensures transform works properly */
  text-decoration: none;
  font-size: 20px;
  color: #333;
  animation: ${bounce} 0.8s ease-in-out infinite; /* Infinite loop */
`;