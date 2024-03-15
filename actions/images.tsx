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

export const getArrayImages = async (imageIds: string[]) => {
  try {
    const response = imageIds.map((id) => getImage(id));
    const responseArray = await Promise.all(response);
    return responseArray;
  } catch (error) {
    console.error(error);
  }
};

export const searchListWithTitle = async (title: string) => {
  try {
    const responseList = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?title=${title}`
    );
    return responseList.data;
  } catch (error) {
    console.error(error);
  }
};
