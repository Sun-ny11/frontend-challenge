import axios from "axios";
import { Base } from "../enums/enums";

export const instance = axios.create({
    baseURL: Base.Url,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': Base.ApiKey
    },
  })