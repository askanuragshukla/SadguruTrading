import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f1f4f5;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  alignitems: top;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    height: 1700px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 90px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 460px) {
    height: auto;
    padding-top: 90px;
  }
`;
export const LinkR = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    width: 80%;
  }
`;

export const ServicesCard = styled.div`
  background: #0f4c75;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 420px;
  min-height: 420px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    height: 380px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    min-height: 460px;
    padding: 10px;
  }
`;

export const ServicesIcon = styled.img`
  min-height: 150px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  color: #1b262c;
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #f1f4f5;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ServicesP = styled.p`
  color: #f1f4f5;
  font-size: 1rem;
  text-align: center;
  line-height: 32px;
  letter-spacing: 1.2px;
`;
