import React, { useState, useEffect, StrictMode } from "react";
import SpaceGallery from "../components/SpaceGallery";
import ApiService from "../services/spaceApiService";
import { PictureAPIData } from "../types/PictureApiData";
import SpaceOneElement from "../components/SpaceOneElement";

const Space: React.FC = () => {
  const [data, setData] = useState<PictureAPIData[] | null>(null);
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [countOfRandomImages, setCountOfRandomImages] = useState<number>(10);
  const [oneItemDisplay, setOneItemDisplay] = useState<PictureAPIData | null>(
    null
  );

  useEffect(() => {
    setLoading(true);
    const fetchData = async (countOfRandomImages: number, date: string) => {
      try {
        const response = await ApiService(countOfRandomImages, date);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData(countOfRandomImages, date);
  }, [countOfRandomImages, date]);
  console.log(countOfRandomImages, "countOfRandomImages");

  const handleChangeCount = (count: number) => {
    setCountOfRandomImages(count);
  };
  const handlePictureClick = (item: PictureAPIData) => {
    setOneItemDisplay(item);
  };
  const handleDateChange = (date: string) => {
    setDate(date);
  };
  const handleCloseOnePicture = () => {
    setDate("");
    setOneItemDisplay(null);
  };

  return (
    <div>
      <h1>NASA picture of the day</h1>
      <p>
        This is a small application which retrieves data from the NASA REST API.
      </p>
      <p>Click on picture to see its explanation</p>
      {oneItemDisplay ? (
        <SpaceOneElement
          pictureData={oneItemDisplay}
          handleDateChange={handleDateChange}
          handleCloseOnePicture={handleCloseOnePicture}
        />
      ) : (
        <SpaceGallery
          handleChangeCount={handleChangeCount}
          handlePictureClick={handlePictureClick}
          data={data}
        />
      )}
    </div>
  );
};

export default Space;
