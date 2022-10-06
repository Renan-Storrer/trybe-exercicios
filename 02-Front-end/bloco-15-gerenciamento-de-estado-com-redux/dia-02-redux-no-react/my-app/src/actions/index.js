import { LOGIN, REGISTER_COSTUMER } from "./types";

export const registerCostumer = (costumerData) => ({
  type: REGISTER_COSTUMER,
  payload: { costumerData }
});

export const login = (userData) => ({
  type: LOGIN,
  payload: { userData }
});
