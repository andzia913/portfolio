import React, { useEffect } from "react";
import { useState } from "react";
import { PictureAPIData } from "../types/PictureApiData";
import "../styles/SpaceGallery.scss";

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
  console.log("dataGallery", dataGallery);

  useEffect(() => {
    if (data) {
      setDataGallery(data);
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="gallery">
      <label htmlFor="pictureCount" className="gallery__label">
        Choose how many pictures you want to see:
        <input
          id="pictureCount"
          onChange={(e) => handleChangeCount(Number(e.target.value))}
          type="number"
          max={100}
          min={1}
          placeholder="10"
          className="gallery__input"
        />
      </label>
      <button
        className="gallery__button"
        onClick={(e) => {
          handleChangeCount(11 - 1);
          e.preventDefault();
        }}
      >
        Refresh to see another pictures
      </button>

      {dataGallery &&
        dataGallery.map((item: PictureAPIData) => (
          <div
            onClick={() => handlePictureClick(item)}
            className="gallery__card"
            key={item.date}
          >
            <img
              className="gallery__img"
              src={`${item.url}`}
              alt={`${item.title}`}
            />
            <p className="gallery__img-title">{item.title}</p>
            <p className="gallery__img-description">
              Picture of the day {item.date}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SpaceGallery;
