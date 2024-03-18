import axios from "axios";

// axios call to get a list of users from the API
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
