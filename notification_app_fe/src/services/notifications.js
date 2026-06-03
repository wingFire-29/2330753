// src/services/notifications.js

import axios from "axios";
import { ACCESS_TOKEN } from "../config/token";
import { Log } from "../logger/logger";

export const fetchNotifications = async () => {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications from API"
    );

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    await Log(
      "frontend",
      "info",
      "api",
      `Fetched ${response.data.notifications.length} notifications`
    );

    return response.data.notifications;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    throw error;
  }
};