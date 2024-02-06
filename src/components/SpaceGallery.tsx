import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/spaceGallery.scss";

interface Picture {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
type DataGallery = Picture[];

interface SpaceGalleryProps {
  handleChangeCount: (count: number) => void;
}

const SpaceGallery: React.FC<SpaceGalleryProps> = ({ handleChangeCount }) => {
  const [dataGallery, setDataGallery] = useState<DataGallery | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [countOfRandomImage, setCountOfRandomImage] = useState<number>(10);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_NASA_API_KEY}&count=10`
      )
      .then((response) => {
        setDataGallery(response.data);
        setLoading(false);
        console.log(dataGallery);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Space Gallery</h1>
      <button>Refresh to see another 10 pictures</button>
      <label htmlFor="">
        Choose how many pictures, you want to see
        <input
          onChange={(e) => handleChangeCount(Number(e.target.value))}
          type="number"
        />
      </label>
      {dataGallery?.map((item: Picture) => (
        <div className="gallery__card" key={item.date}>
          <img src={`${item.url}`} alt={`${item.title}`} />
          <p>{item.title}</p>
          <p>Picture of the day {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default SpaceGallery;
