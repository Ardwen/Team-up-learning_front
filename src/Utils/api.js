import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-3-17-9-85.us-east-2.compute.amazonaws.com:5000/`
});
