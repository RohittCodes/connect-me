import axios from "axios";

export const getUser = async (userId: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
