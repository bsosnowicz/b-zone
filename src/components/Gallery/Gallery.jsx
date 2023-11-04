import axios from "axios";
import { useEffect, useState } from "react";
import fetchImages from "../../utils/fetchImages";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/images");
        const items = response.data.data.images;
        setImages(items);
        // console.log(images.id);
        // const imagesData = await fetchImages();
        // setImages(imagesData);
      } catch (e) {
        console.log(e.message);
      }
    };
    getImages();
  }, []);

  console.log(images);

  return (
    <div>
      {images.length > 0 ? (
        images.map((image) => (
          <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Gallery;
