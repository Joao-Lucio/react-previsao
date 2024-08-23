import axios from "axios";
import { API_KEY } from "../env";

const baseURL = "https://api.openweathermap.org/data/2.5";
const dataPattern = "lang=pt_br&units=metric";

export async function getWeatherRequest(city: string) {
  try {
    const response = await axios.get(
      `${baseURL}/weather?q=${city}&appid=${API_KEY}&${dataPattern}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        response?.data?.message ?? "Error ao buscar a previsão do tempo"
      );
    }
  } catch (error: any) {
    return (
      error?.response?.data?.message ?? "Error ao buscar a previsão do tempo"
    );
  }
}

export async function getForecastRequest(city: string) {
  try {
    const response = await axios.get(
      `${baseURL}/forecast?q=${city}&appid=${API_KEY}&${dataPattern}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        response?.data?.message ?? "Error ao buscar previssão dos próximos dias"
      );
    }
  } catch (error: any) {
    return (
      error?.response?.data?.message ??
      "Error ao buscar previssão dos próximos dias"
    );
  }
}
