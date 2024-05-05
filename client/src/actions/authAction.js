import axios from "axios";

export const register = async (user) =>
  await axios.post(`http://localhost:8000/api/register`, user);
