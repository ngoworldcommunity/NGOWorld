import axios from "axios";

const PatchFetcher = async (url) => {
  const data = await axios
    .patch(url, {
      withCredentials: true,
    })
    .then((res) => res.data);
  return data;
};

export default PatchFetcher;
