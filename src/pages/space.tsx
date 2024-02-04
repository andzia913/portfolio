import React, { useState, useEffect } from "react";
import axios from "axios";

const Space: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.GATSBY_NASA_API_KEY}`
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>NASA picture</h1>
      <img src={`${data.url}`} alt="" />
      <p>{data.title}</p>
      <p>Picture of the day {data.date}</p>
      <p>{data.explanation}</p>
    </div>
  );
};

export default Space;
