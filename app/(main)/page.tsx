"use client";

import { useEffect, useState } from "react";
import PostsContainer, {
  PostsContainerSkeleton,
} from "./posts/_components/container";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Container, ContainerSkeleton } from "./images/_components/container";

const MainPage = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [images, setImages] = useState<Images[]>([]);
  const [postsLoading, setPostsLoading] = useState<boolean>(true);
  const [imagesLoading, setImagesLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleNavigate = (item: string) => {
    router.push(item);
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.data;
      setPostsLoading(false);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=5"
      );
      const data = await response.data;
      setImagesLoading(false);
      setImages(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getPosts();
    getImages();
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between w-full">
          <h1 className="inline-flex justify-start text-3xl font-bold text-center">
            Posts
          </h1>
          <Button onClick={() => handleNavigate("/posts")}>Read more</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {!postsLoading
            ? posts.map((post) => (
                <PostsContainer
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                  title={post.title}
                  body={post.body}
                />
              ))
            : Array.from({ length: 5 }).map((_, index) => (
                <PostsContainerSkeleton key={index} />
              ))}
        </div>
      </div>
      <div className="flex justify-between w-full">
        <h1 className="inline-flex justify-start text-3xl font-bold text-center">
          Images
        </h1>
        <Button onClick={() => handleNavigate("/images")}>Visit more</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {!imagesLoading
          ? images.map((image) => (
              <Container
                id={image.id}
                title={image.title}
                imageUrl={image.thumbnailUrl}
                key={image.id}
              />
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <ContainerSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};

export default MainPage;
