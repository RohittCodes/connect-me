"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getArrayImages } from "@/actions/images";
import {
  Container,
  ContainerSkeleton,
} from "@/app/(main)/images/_components/container";

const ImagesHolder = () => {
  const likedImages = useSelector((state: any) => state?.likedImages?.images);
  const [images, setImages] = useState([]) as any;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await getArrayImages(likedImages);
    setLoading(false);
    setImages(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (images.length === 0) return <div>No saved images</div>;

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
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
