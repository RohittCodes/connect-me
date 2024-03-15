"use client";

import { getPosts } from "@/actions/posts";
import { useEffect, useState } from "react";
import PostsContainer from "./_components/container";

const PostsPage = () => {
  const [data, setData] = useState<Posts[]>([]);
  const items = 20;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(items);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await getPosts();
    setIsLoading(false);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="grid grid-rows-3 gap-4">
        {!isLoading
          ? data
              ?.slice(first, last)
              .map((post) => (
                <PostsContainer
                  key={post.id}
                  userId={post.userId}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))
          : Array.from({ length: 20 }).map((_, index) => (
              <div key={index}>
                <h1>Loading...</h1>
                <p>Loading...</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PostsPage;
