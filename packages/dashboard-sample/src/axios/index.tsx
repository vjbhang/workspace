import axios from "axios";

export function getUserTelemetry() {
  return axios.get("http://localhost:8080/hello");
}

export function getAuthentication() {
  return axios.get("http://localhost:8080/hello");
}
