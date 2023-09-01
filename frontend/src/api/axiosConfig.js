import axios from 'axios';

// baseURL provides the base url to our endpoints which our client react application will be calling.
// The second needs to be set to true so that the client http requests will not be blocked by CORS(Cross origin resource sharing). There are certain restrictions imposed by the remote api to access the data from any client. Hence, we need to overcome the restrictions by setting the second property to true.
export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "ngrok-skip-browser-warning": "true"
    }
})