import React, { useState, useEffect } from "react";
import axios from "axios";

const Space: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [dateFromInput, setDateFromInput] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_NASA_API_KEY}&date=${selectedDate}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [selectedDate]);

  const handleOpenHDImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(data.hdurl, "_blank");
  };
  return (
    <div>
      <h1>NASA picture of the day</h1>
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
  );
};

export default Space;
