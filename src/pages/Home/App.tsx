import { WeatherInformation } from "../../components/WeatherInformation";
import * as S from "./styles";
import { WeatherInformation5Days } from "../../components/WeatherInformation5Days";
import { useViewControllerApp } from "./viewController";
import { ErrorRequest } from "../../components/ErrorRequest";

export const baseImageUrl = "http://openweathermap.org/img/wn";
export const imageType = "@2x.png";

function App() {
  const { inputRef, searchCity, weather, weather5Days, error, loading } =
    useViewControllerApp();

  return (
    <S.Container>
      <S.Tittle>DevClub Previsão do Tempo</S.Tittle>
      <S.InputStyle
        ref={inputRef}
        type="text"
        placeholder="Digite o nome da cidade!"
      />
      <S.ButtonStyle onClick={searchCity} disabled={loading}>
        Buscar
      </S.ButtonStyle>

      {error?.length ? <ErrorRequest error={error} /> : null}
      {weather && !error?.length ? (
        <WeatherInformation weather={weather} />
      ) : null}
      {weather5Days && !error?.length ? (
        <WeatherInformation5Days weather5Days={weather5Days} />
      ) : null}
    </S.Container>
  );
}

export default App;
