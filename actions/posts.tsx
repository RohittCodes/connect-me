import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async (userId: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (postId: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
