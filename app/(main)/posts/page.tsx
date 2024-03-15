"use client";

import { getPosts } from "@/actions/posts";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PostsContainer, {
  PostsContainerSkeleton,
} from "./_components/container";

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
      <div className="grid grid-cols-2 gap-4">
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
              <PostsContainerSkeleton key={index} />
            ))}
      </div>
      {!isLoading && (
        <Pagination className="">
          <PaginationContent>
            <PaginationPrevious
              onClick={() => {
                setFirst(first - items);
                setLast(last - items);
              }}
              className={first <= 1 ? "cursor-not-allowed" : "cursor-pointer"}
            >
              Previous
            </PaginationPrevious>
            <PaginationNext
              onClick={() => {
                setFirst(first + items);
                setLast(last + items);
              }}
              className={
                last >= data?.length ? "cursor-not-allowed" : "cursor-pointer"
              }
            >
              Next
            </PaginationNext>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PostsPage;
