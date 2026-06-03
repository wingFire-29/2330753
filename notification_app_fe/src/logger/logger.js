import axios from "axios";
import { ACCESS_TOKEN } from "../config/token";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
    catch (error) {
    return error.response?.data || error.message;
  }
};