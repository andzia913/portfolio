import React, { useState, useEffect } from "react";
import SpaceGallery from "../components/SpaceGallery";
import ApiService from "../services/spaceApiService";
import { PictureAPIData } from "../types/PictureApiData";
import SpaceOneElement from "../components/SpaceOneElement";
import "../styles/space.scss";

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
    const fetchData = async (countOfRandomImages: number) => {
      try {
        const response = await ApiService(countOfRandomImages);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData(countOfRandomImages);
  }, [countOfRandomImages]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async (date: string) => {
      try {
        const response = await ApiService(undefined, date);
        data && setOneItemDisplay(response);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    fetchData(date);
  }, [date]);
  console.log(countOfRandomImages, "countOfRandomImages");

  const handleChangeCount = (count: number) => setCountOfRandomImages(count);
  const handlePictureClick = (item: PictureAPIData) => setOneItemDisplay(item);
  const handleDateChange = (date: string) => setDate(date);
  const handleCloseOnePicture = () => setOneItemDisplay(null);

  return (
    <div className="space">
      <h1 className="space__title">NASA picture of the day</h1>
      <p className="space__description">
        This is a small application which retrieves data from the NASA REST API.
        <br />
        Click on picture to see its explanation
      </p>

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
