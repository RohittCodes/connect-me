"use client";

import { getArrayPosts } from "@/actions/posts";
import PostsContainer, {
  PostsContainerSkeleton,
} from "@/app/(main)/posts/_components/container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PostsHolder = () => {
  const savedPosts = useSelector((state: any) => state?.savedPosts?.posts);

  const [posts, setPosts] = useState([]) as any;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await getArrayPosts(savedPosts);
    setLoading(false);
    setPosts(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (posts.length === 0) return <div>No saved posts</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {!loading
        ? posts.map((post: any) => (
            <PostsContainer
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        : Array.from({ length: 20 }).map((_, index) => (
            <PostsContainerSkeleton key={index} />
          ))}
    </div>
  );
};

export default PostsHolder;
