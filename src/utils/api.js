import axios from "axios";
const headers = {
  accept: "application/json",
  Authorization:
    "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzcxMGQxZDI0MTA1MjY4ZDQwODIyMzA1Zjg3NGRmZSIsInN1YiI6IjY0ZmVmNTRlNmEyMjI3MDBhYmE4MDUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-V786m-A0ylR-cwAJrSbNwL6jdXcyvbJi4g2oWvQLeA",
};
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchDataFromTMDb = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// export async function fetchDataFromTMDb(url, params) {
//   try {
//     const response = await fetch(BASE_URL + url, { headers, params });

//     if (!response.ok) {
//       throw new Error("Request failed with status " + response.status);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
