import React, { useState, useEffect } from "react";
import SpaceGallery from "../components/SpaceGallery";
import ApiService from "../services/spaceApiService";
import { PictureAPIData } from "../types/PictureApiData";
import SpaceOneElement from "../components/SpaceOneElement";

const Space: React.FC = () => {
  const [data, setData] = useState<PictureAPIData[] | null>(null);
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

  const handleChangeCount = (count: number) => {
    setCountOfRandomImages(count);
  };
  const handlePictureClick = (item: PictureAPIData) => {
    setOneItemDisplay(item);
  };

  return (
    <div>
      <h1>NASA picture of the day</h1>
      <p>
        This is a small application which retrieves data from the NASA REST API.
      </p>
      {oneItemDisplay && <SpaceOneElement pictureData={oneItemDisplay} />}
      {data && (
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
