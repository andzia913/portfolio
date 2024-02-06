import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceGallery from "../components/SpaceGallery";
import ApiService from "../services/spaceApiService";

const Space: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [countOfRandomImages, setCountOfRandomImages] = useState<number>(10);

  useEffect(() => {
    setLoading(true);
    ApiService.fetchData(countOfRandomImages);
  }, [countOfRandomImages]);

  const handleChangeCount = (count: number) => {
    setCountOfRandomImages(count);
  };

  return (
    <div>
      <h1>NASA picture of the day</h1>

      <SpaceGallery handleChangeCount={handleChangeCount} />
    </div>
  );
};

export default Space;
