import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
`;

export const HeroInfo = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);

  padding: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const MainTitle = styled.h1`
  font-size: 44px;
  color: #f7f7f7;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 20px;

  color: #f7f7f7;
  width: 50%;
`;

export const CtaButton = styled(NavLink)`
  padding: 16px;
  width: 180px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: none;
  color: #f7f7f7;
  background: #e44848;

  &:hover {
    cursor: pointer;
    background: #d84343;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  min-height: 725px;
`;
