import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const createDocument = (data) => {
  return axios({ url: `${baseUrl}/encuestas`, method: "POST", data });
};

export const getStatistics = () => {
  return axios({ url: `${baseUrl}/encuestas` });
};
