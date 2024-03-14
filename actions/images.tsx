import axios from "axios";

export const getImages = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getImage = async (imageId: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${imageId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
