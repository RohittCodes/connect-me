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

export const getArrayPosts = async (postIds: number[]) => {
  try {
    const response = postIds.map((id) => getPost(id));
    const responseArray = await Promise.all(response);
    return responseArray;
  } catch (error) {
    console.error(error);
  }
};
