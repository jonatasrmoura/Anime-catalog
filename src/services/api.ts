import axios from "axios";

const API_URL = `https://kitsu.io/api/edge`;

export const api = axios.create({
  baseURL: API_URL
});
