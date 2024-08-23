import { WeatherData } from "../../models/weather";
import { baseImageUrl, imageType } from "../../pages/Home/App";
import * as S from "./styles";

export const WeatherInformation = ({ weather }: { weather: WeatherData }) => {
  const imageUrl = `${baseImageUrl}/${weather.weather[0].icon}${imageType}`;
  return (
    <S.Container>
      <S.CityName>{weather?.name}</S.CityName>
      <S.BoxInfo>
        <img src={imageUrl} />
        <p>{Math.round(weather?.main?.temp || 0)}°C</p>
      </S.BoxInfo>
      <S.Description>{weather?.weather[0].description}</S.Description>
      <S.Details>
        <p>Sensação térmica: {Math.round(weather?.main?.feels_like || 0)}°C</p>
        <p>Umidade: {weather?.main?.humidity}%</p>
        <p>Pressão: {weather?.main.pressure}</p>
      </S.Details>
    </S.Container>
  );
};
