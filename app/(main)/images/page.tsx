"use client";

import { Container, ContainerSkeleton } from "./_components/container";
import { getImages } from "@/actions/images";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

const ImagesPage = () => {
  const [data, setData] = useState<Images[]>([]);
  const items = 20;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(items);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await getImages();
    setIsLoading(false);
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="grid grid-cols-3 gap-4">
        {!isLoading
          ? data
              ?.slice(first, last)
              .map((image) => (
                <Container
                  key={image.id}
                  id={image.id}
                  title={image.title}
                  imageUrl={image.thumbnailUrl}
                />
              ))
          : Array.from({ length: 20 }).map((_, index) => (
              <ContainerSkeleton key={index} />
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

export default ImagesPage;
