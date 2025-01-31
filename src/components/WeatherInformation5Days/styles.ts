import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const WetherList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const WetherItem = styled.div`
  text-align: center;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;
`;

export const TextInfo = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
`;
