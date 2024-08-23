import * as S from "./styles";

export const ErrorRequest = ({ error }: { error: string }) => {
  return (
    <S.Container>
      <S.CityName>Error ao buscar previsão do tempo</S.CityName>
      <S.Description>{error}</S.Description>
    </S.Container>
  );
};
