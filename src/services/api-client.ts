import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1155da42c371443c8bfeca9d9f59884b",
  },
});
