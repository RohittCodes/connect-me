"use client";

import { Container, ContainerSkeleton } from "./_components/container";
import { getImages } from "@/actions/images";
import { Button } from "@/components/ui/button";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <Button
              onClick={() => {
                setFirst(first - items);
                setLast(last - items);
              }}
              disabled={first <= 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                setFirst(first + items);
                setLast(last + items);
              }}
              disabled={last >= data?.length}
            >
              Next
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ImagesPage;
