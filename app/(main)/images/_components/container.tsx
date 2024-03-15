"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Bookmark, Download, Heart, HeartOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { likeImage, unlikeImage } from "@/app/store/likes/imageSlice";
import { saveImage, removeImage } from "@/app/store/saves/imageSlice";
import { cn } from "@/lib/utils";

interface CardHeaderProps {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  loading?: boolean;
}

export const Container = ({ title, id, imageUrl }: CardHeaderProps) => {
  const imageId = id.toString();
  const dispatch = useDispatch();

  const likedImages = useSelector((state: any) => state?.likedImages?.images);
  const savedImages = useSelector((state: any) => state?.savedImages?.images);

  const handleLike = () => {
    if (likedImages.includes(id)) {
      dispatch(unlikeImage({ id }));
    } else {
      dispatch(likeImage({ id }));
    }
  };

  const handleSave = () => {
    if (savedImages.includes(id)) {
      dispatch(removeImage({ id }));
    } else {
      dispatch(saveImage({ id }));
    }
  };

  return (
    <Card className="h-76 py-2 px-2">
      <Link href={`/images/${imageId}`}>
        <CardContent className="px-0 py-0 cursor-pointer">
          <Image
            src={imageUrl}
            alt={title}
            width={150}
            height={150}
            className="w-full h-52 object-cover rounded-md"
          />
        </CardContent>
      </Link>
      <CardHeader className="px-0 py-2">
        <CardTitle className="text-wrap line-clamp-1 text-ellipsis">
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-2 h-fit py-2 px-2 justify-end">
        <Button size="icon">
          <Download />
        </Button>
        <Button onClick={handleLike} size="icon">
          <Heart className={cn(likedImages.includes(id) ? "fill-white" : "")} />
        </Button>
        <Button onClick={handleSave} size="icon">
          <Bookmark
            className={cn(savedImages.includes(id) ? "fill-white" : "")}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ContainerSkeleton = () => {
  return (
    <Card>
      <Skeleton className="h-40" />
      <CardContent>
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4" />
      </CardFooter>
    </Card>
  );
};
