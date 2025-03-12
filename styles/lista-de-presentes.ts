import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  height: 100vh;
  padding: 30px;
  gap: 16px;
  overflow-x: hidden;
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
  display: inline-block;
  font-size: 1rem;
  color: #888;
  cursor: help;

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
  font-size: 0.8rem;
  line-height: 1.2;
  white-space: normal;
  z-index: 10;

  @media (max-width: 768px) {
    width: 300px;
  }
`;
