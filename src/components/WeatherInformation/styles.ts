import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;

export const CityName = styled.h2`
  font-size: 2rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
  }
`;

export const Temperature = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
`;

export const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-around;
`;
