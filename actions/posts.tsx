import axios from "axios";

// axios call to get a list of posts from the API
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

// axios call to get a single post from the API
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

// axios call to get a particular array of posts from the API
export const getArrayPosts = async (postIds: number[]) => {
  try {
    const response = postIds.map((id) => getPost(id));
    const responseArray = await Promise.all(response);
    return responseArray;
  } catch (error) {
    console.error(error);
  }
};
