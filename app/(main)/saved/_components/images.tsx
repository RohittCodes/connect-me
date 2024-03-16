"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getArrayImages } from "@/actions/images";
import {
  Container,
  ContainerSkeleton,
} from "@/app/(main)/images/_components/container";

const ImagesHolder = () => {
  const savedImages = useSelector((state: any) => state?.savedImages?.images);
  const [images, setImages] = useState([]) as any;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await getArrayImages(savedImages);
    setLoading(false);
    setImages(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (images.length === 0)
    return (
      <div className="h-[calc(100vh-256px)] flex items-center justify-center">
        No saved images
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {!loading
        ? images.map((image: any) => (
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
  );
};

export default ImagesHolder;
