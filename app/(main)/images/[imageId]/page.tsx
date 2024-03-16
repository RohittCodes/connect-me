"use client";

import { getImage } from "@/actions/images";
import { likeImage, unlikeImage } from "@/app/store/likes/imageSlice";
import { removeImage, saveImage } from "@/app/store/saves/imageSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bookmark, Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

interface Params {
  params: {
    imageId: string;
  };
}

const ImagePage = ({ params: { imageId } }: Params) => {
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const likedImages = useSelector((state: any) => state?.likedImages?.images);
  const savedImages = useSelector((state: any) => state?.savedImages?.images);

  const getSingleImage = async () => {
    const response = await getImage(imageId);
    setLoading(false);
    setImage(response);
  };

  useEffect(() => {
    getSingleImage();
  }, []);

  const handleLike = () => {
    if (likedImages.includes(parseInt(imageId))) {
      dispatch(unlikeImage({ id: parseInt(imageId) }));
    } else {
      dispatch(likeImage({ id: parseInt(imageId) }));
    }
  };

  const handleSave = () => {
    if (savedImages.includes(parseInt(imageId))) {
      dispatch(removeImage({ id: parseInt(imageId) }));
    } else {
      dispatch(saveImage({ id: parseInt(imageId) }));
    }
  };
  const displayImageId = parseInt(imageId);

  const handleTweet = () => {
    const url = `https://jsonplaceholder.typicode.com/photos/${imageId}`;
    const text = `Check out this image on Images!`;
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-260px)] md:h-[calc(100vh-128px)]">
      {loading ? (
        <div className="h-76 py-2 px-2 w-1/3">
          <CardContent className="flex items-center justify-center px-0 py-0">
            <Skeleton className="w-[424px] h-[424px] rounded-md" />
          </CardContent>
          <CardHeader className="px-0 py-2">
            <Skeleton className="w-3/4 h-4 rounded-md" />
          </CardHeader>
          <CardFooter className="flex gap-2 h-fit py-2 px-2 justify-end">
            <Skeleton className="w-6 h-6 rounded-md" />
            <Skeleton className="w-6 h-6 rounded-md" />
            <Skeleton className="w-6 h-6 rounded-md" />
          </CardFooter>
        </div>
      ) : (
        <Card className="h-76 py-2 px-2">
          <CardContent className="px-0 py-0 flex items-center justify-center">
            <Image
              src={image?.url}
              alt={image?.title}
              width={150}
              height={150}
              className="w-full h-full object-cover rounded-md"
            />
          </CardContent>
          <CardHeader className="px-0 py-2">
            <CardTitle className="text-xl flex">{image.title}</CardTitle>
          </CardHeader>
          <CardFooter className="flex gap-2 h-fit py-2 px-2 justify-end">
            <Button onClick={handleTweet} size="icon">
              <BsTwitterX size="20" />
            </Button>
            <Button onClick={handleLike} size="icon">
              <Heart
                className={cn(
                  likedImages.includes(displayImageId) ? "fill-white" : ""
                )}
              />
            </Button>
            <Button onClick={handleSave} size="icon">
              <Bookmark
                className={cn(
                  savedImages.includes(displayImageId) ? "fill-white" : ""
                )}
              />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ImagePage;
