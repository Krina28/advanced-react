import axios from "axios";

axios.defaults.headers.common["Authorization"] = "token is ";

export const axiosAPI = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    parse: true,
});

// const getAccessToken = async () => {
//     await axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(function (response) {
//             // handle success
//             console.log(response);
//             return response.data;
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .finally(function () {
//             // always executed
//         });
// }

axiosAPI.interceptors.request.use(
    async (config) => {
        console.log("config", config);
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                // handle success
                console.log(">>response", response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
