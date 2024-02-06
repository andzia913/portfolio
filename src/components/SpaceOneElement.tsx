import React, { useState, useEffect } from "react";
import axios from "axios";

const SpaceOneElement: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [dateFromInput, setDateFromInput] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const handleOpenHDImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(data.hdurl, "_blank");
  };

  return (
    <>
      <div>
        <img src={`${data.url}`} alt={`${data.title}`} />
        <button type="button" onClick={(e) => handleOpenHDImg(e)}>
          See in HD quality
        </button>
        <p>{data.title}</p>
        <p>Picture of the day {data.date}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSelectedDate(dateFromInput);
          }}
        >
          <label htmlFor="date">
            Select another date{" "}
            <input
              type="date"
              id="date"
              onChange={(e) => {
                setDateFromInput(e.target.value);
              }}
            />
          </label>
          <button type="submit">Ok</button>
        </form>
        <p>{data.explanation}</p>
      </div>
    </>
  );
};

export default SpaceOneElement;
