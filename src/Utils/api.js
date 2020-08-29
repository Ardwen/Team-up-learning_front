import axios from "axios";

export default axios.create({
  baseURL: `http://ec2-18-188-26-202.us-east-2.compute.amazonaws.com:5000/`
});
