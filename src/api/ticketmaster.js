

import axios from "axios";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2";
const API_KEY = "1oBrAhjEZm6AvKXiD5iXQWAeZ48OM7U8";

export const fetchEvents = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/events.json`, {
      params: { ...params, apikey: API_KEY },
    });

    return response.data._embedded?.events || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
export const fetchEventById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${id}.json`, {
      params: { apikey: API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    return null;
  }
};
