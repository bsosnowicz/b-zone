import axios from "axios";

const fetchImages = async () => {
  try {
    const response = await axios.get("http://localhost:3001/images");
    return response.data.data.images;
  } catch (e) {
    console.log(e.message);
  }
};

export default fetchImages;
