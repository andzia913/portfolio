import React, { useState, useEffect } from "react";
import { PictureAPIData } from "../types/PictureApiData";
import { IoMdArrowBack } from "react-icons/io";
import "../styles/spaceOneElement.scss";
interface SpaceOneElementProps {
  pictureData: PictureAPIData | null;
  handleDateChange: (date: string) => void;
  handleCloseOnePicture: () => void;
}

const SpaceOneElement: React.FC<SpaceOneElementProps> = ({
  pictureData,
  handleDateChange,
  handleCloseOnePicture,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [dateFromInput, setDateFromInput] = useState<string>("");
  const [data, setData] = useState<any>(pictureData);

  const handleOpenHDImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(data.hdurl, "_blank");
  };

  return (
    <div className="space-one-element">
      <div className="space-one-element__container">
        <button
          className="space-one-element__close-button space-button"
          onClick={() => handleCloseOnePicture()}
        >
          <IoMdArrowBack />
          Back
        </button>
        <img
          className="space-one-element__img"
          src={`${data.url}`}
          alt={`${data.title}`}
        />
        <button
          className="space-one-element__hd-button space-button"
          type="button"
          onClick={(e) => handleOpenHDImg(e)}
        >
          See in HD quality
        </button>
        <p className="space-one-element__title">{data.title}</p>

        <p className="space-one-element__explanation">{data.explanation}</p>
        <p className="space-one-element__date">
          Picture of the day {data.date}
        </p>
        <form
          className="space-one-element__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSelectedDate(dateFromInput);
          }}
        >
          <label htmlFor="date" className="space-one-element__label">
            Select another date{" "}
            <input
              className="space-one-element__input"
              type="date"
              id="date"
              onChange={(e) => {
                handleDateChange(e.target.value);
              }}
            />
          </label>
          <button
            className="space-one-element__submit-button space-button"
            type="submit"
          >
            Ok
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpaceOneElement;
