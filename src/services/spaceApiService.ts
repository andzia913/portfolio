import axios from "axios";

class ApiService {
  static async fetchData(countOfRandomImages?: number, date?: string) {
    const apiKey = process.env.GATSBY_NASA_API_KEY;
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (countOfRandomImages) {
      url += `&count=${countOfRandomImages}`;
    }

    if (date) {
      url += `&date=${date}`;
    }

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }
}

export default ApiService;
