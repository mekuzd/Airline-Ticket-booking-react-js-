import axios from "axios";

// const Http = axios.create({
//   baseURL: "https://airport-info.p.rapidapi.com/airport",
//   headers: {
//     "X-RapidAPI-Key": "2dffe9ac03msh31126f98f89fdefp169feejsnabb49c40ce01",
//     "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
//   },
// });

// Http.interceptors.request.use(
//   (config) => {
//     config.headers["X-RapidAPI-Key"] =
//       "2dffe9ac03msh31126f98f89fdefp169feejsnabb49c40ce01";
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
// export default Http;

const options = {
  method: "GET",
  url: "https://airport-info.p.rapidapi.com/airport",
  headers: {
    "X-RapidAPI-Key": "2dffe9ac03msh31126f98f89fdefp169feejsnabb49c40ce01",
    "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
