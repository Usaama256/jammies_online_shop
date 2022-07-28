import axios from "axios";

const BASE_URL = "http://localhost:4509/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzVjYWI5ZWE0NDZjNmFjNzA1ZjVjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTIzODY1OSwiZXhwIjoxNjQ5NDk3ODU5fQ.yu-9JSVeG7ucDVJwPS2NMQJFbG_xuGU0pkgy7hnsVUM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
