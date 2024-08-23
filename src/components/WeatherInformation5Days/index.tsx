import { Weather5Days, List } from "../../models/weather5Days";
import { baseImageUrl, imageType } from "../../pages/Home/App";
import * as S from "./styles";

export const WeatherInformation5Days = ({
  weather5Days,
}: {
  weather5Days: Weather5Days;
}) => {
  let dailyForecast: { [key: string]: any } = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6) as List[];

  function convertDate(date: any) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <S.Container>
      <h3>Previssão Próximos 5 Dias</h3>
      <S.WetherList>
        {next5DaysForecast.map((forecast) => (
          <S.WetherItem key={forecast.dt}>
            <S.TextInfo>{convertDate(forecast)}</S.TextInfo>
            <img
              src={`${baseImageUrl}/${forecast.weather[0].icon}${imageType}`}
            />
            <S.TextInfo>{forecast.weather[0].description}</S.TextInfo>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C máx
            </p>
          </S.WetherItem>
        ))}
      </S.WetherList>
    </S.Container>
  );
};
