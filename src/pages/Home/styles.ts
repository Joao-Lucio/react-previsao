import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`;

export const Tittle = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

export const InputStyle = styled.input`
  padding: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  width: 60%;
  max-width: 300px;
  outline: none;
  margin-top: 30px;
`;

export const ButtonStyle = styled.button`
  background-color: #ff9800;
  border: 0;
  padding: 10px;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #f57c00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
