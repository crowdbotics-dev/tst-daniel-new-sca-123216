import axios from "axios"
import {
  DANIEL_SHAREABLE_PASSWORD,
  DANIEL_SHAREABLE_USERNAME
} from "react-native-dotenv"
const danielShareable = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: DANIEL_SHAREABLE_PASSWORD,
    password: DANIEL_SHAREABLE_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function danielshareable_get_some_read(payload) {
  return danielShareable.get(`/some`)
}
export const apiService = { danielshareable_get_some_read }
