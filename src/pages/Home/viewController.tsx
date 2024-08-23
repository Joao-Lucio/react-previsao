import { useRef, useState } from "react";
import { getForecastRequest, getWeatherRequest } from "../../services/request";
import { AxiosError } from "axios";

export const useViewControllerApp = () => {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function verifyCity(city: string | undefined) {
    if (city && city.length < 3) {
      setError("Por favor, digite pelo menos 3 letras");
      return false;
    }
    return true;
  }

  async function searchCity() {
    setError("");
    const city = inputRef?.current?.value;
    const verify = verifyCity(city);
    if (!verify) {
      return;
    }
    setLoading(true);
    try {
      const [apiInfo, apiInfo5Days] = await Promise.all([
        getWeatherRequest(city!),
        getForecastRequest(city!),
      ]);
      if (typeof apiInfo !== "string") {
        setWeather(apiInfo);
      } else {
        setError(apiInfo);
        return;
      }
      if (typeof apiInfo5Days !== "string") {
        console.log(apiInfo5Days);
        setWeather5Days(apiInfo5Days);
      } else {
        setError((preventState) => preventState + "\n" + apiInfo);
      }
    } catch (e: AxiosError | any) {
      setError(
        e?.response?.data?.message ?? "Error ao buscar a previsão do tempo"
      );
    } finally {
      setLoading(false);
    }
  }
  return {
    inputRef,
    searchCity,
    weather,
    weather5Days,
    error,
    loading,
  };
};
