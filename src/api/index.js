import { ENDPOINTS } from "@config/constants";
import { METHODS } from "@config/constants";

const apiUrl = "http://localhost:3004";

const api = {
  [ENDPOINTS.PLANETS]: {
    [METHODS.GET]: (id = "") => (
      fetch(`${apiUrl}/planets/${id}`)
    ),
    [METHODS.DELETE]: (id) => (
      fetch(`${apiUrl}/planets/${id}`, {
        method: METHODS.DELETE
      })
    ),
    [METHODS.POST]: (data) => (
      fetch(`${apiUrl}/planets`, {
        method: METHODS.POST,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
    )
  },
  [ENDPOINTS.SUN]: {
    [METHODS.GET]: () => fetch(`${apiUrl}/sun`)
  }
};

export default api;