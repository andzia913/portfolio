import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/spaceGallery.scss";
import { PictureAPIData } from "../types/PictureApiData";

interface SpaceGalleryProps {
  handleChangeCount: (count: number) => void;
  handlePictureClick: (item: PictureAPIData) => void;
  data: PictureAPIData[] | null;
}

const SpaceGallery: React.FC<SpaceGalleryProps> = ({
  handleChangeCount,
  handlePictureClick,
  data,
}) => {
  const [dataGallery, setDataGallery] = useState<PictureAPIData[] | null>(data);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  return (
    <div>
      <h1>A gallery of space photos.</h1>
      <button>Refresh to see another 10 pictures</button>
      <label htmlFor="">
        Choose how many pictures, you want to see
        <input
          onChange={(e) => handleChangeCount(Number(e.target.value))}
          type="number"
          max={100}
        />
      </label>
      {dataGallery?.map((item: PictureAPIData) => (
        <div
          onClick={() => handlePictureClick(item)}
          className="gallery__card"
          key={item.date}
        >
          <img src={`${item.url}`} alt={`${item.title}`} />
          <p>{item.title}</p>
          <p>Picture of the day {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default SpaceGallery;
