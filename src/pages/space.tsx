import React, { useState, useEffect } from "react";
import axios from "axios";
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
    ApiService.fetchData(countOfRandomImages)
      .then((response: PictureAPIData[]) => {
        setData(response);
        setLoading(false);
      })
      .catch((error: string) => {
        setError(error);
        setLoading(false);
      });
  }, [countOfRandomImages]);

  useEffect(() => {
    setLoading(true);
    ApiService.fetchData(countOfRandomImages)
      .then((response: PictureAPIData[]) => {
        setData(response);
        setLoading(false);
        console.log(data, "jako data");
      })
      .catch((error: string) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    ApiService.fetchData(countOfRandomImages)
      .then((response: PictureAPIData[]) => {
        setData(response);
        setLoading(false);
      })
      .catch((error: string) => {
        setError(error);
        setLoading(false);
      });
  }, []);
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
      {oneItemDisplay ? <SpaceOneElement pictureData={oneItemDisplay} /> : ""}
      <SpaceGallery
        handleChangeCount={handleChangeCount}
        handlePictureClick={handlePictureClick}
        data={data}
      />
    </div>
  );
};

export default Space;
