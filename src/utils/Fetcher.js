import axios from "axios";

const fetcher = async (url) => {
  const data = await axios.get(url).then((res) => res.data);
  return data;
};

export default fetcher;
