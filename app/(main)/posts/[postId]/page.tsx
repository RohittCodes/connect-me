"use client";

import { getPost } from "@/actions/posts";
import { getUser } from "@/actions/user";
import { likePost, unlikePost } from "@/app/store/likes/postSlice";
import { addPost, removePost } from "@/app/store/saves/postSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Share, Heart, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

interface Params {
  params: {
    postId: string;
  };
}

const PostPage = ({ params: { postId } }: Params) => {
  const postIdNumber = parseInt(postId);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData>();

  const dispatch = useDispatch();
  const likedPosts = useSelector((state: any) => state?.likedPosts?.posts);
  const savedPosts = useSelector((state: any) => state?.savedPosts?.posts);

  const getData = async (postId: number) => {
    const response = await getPost(postId);
    setData(response);
    setIsLoading(false);
    return response;
  };

  const getUserData = async (userId: number) => {
    const response = await getUser(userId);
    setUser(response);
    return response;
  };

  useEffect(() => {
    getData(postIdNumber);
  }, []);

  useEffect(() => {
    if (data.userId) {
      getUserData(data.userId);
    }
  }, [data]);

  const handleLike = () => {
    if (likedPosts.includes(postIdNumber)) {
      dispatch(unlikePost({ id: postIdNumber }));
    } else {
      dispatch(likePost({ id: postIdNumber }));
    }
  };

  const handleSave = () => {
    if (savedPosts.includes(postIdNumber)) {
      dispatch(removePost({ id: postIdNumber }));
    } else {
      dispatch(addPost({ id: postIdNumber }));
    }
  };

  const handleTweet = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${data.title}&text=${data.body}&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-256px)] md:h-[calc(100vh-128px)]">
      {isLoading ? (
        <Skeleton className="w-1/3" />
      ) : (
        <Card className="w-full md:w-2/3 px-4 py-4">
          <CardHeader className="px-2">
            <CardTitle className="text-xl flex justify-between">
              {data.title}
              <p className="text-xs w-1/6 md:w-1/3 text-right">{data.id}</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-gray-100 h-full px-4 py-4 rounded-md flex flex-col w-full items-center justify-center">
            <p>{data.body}</p>
          </CardContent>
          <CardFooter className="flex w-full justify-between h-fit px-2 py-4">
            {isLoading ? (
              <Skeleton className="h-4 w-32" />
            ) : (
              <CardDescription>By, {user?.name}</CardDescription>
            )}
            <div className="flex gap-2 justify-end">
              <Button onClick={handleTweet} className="h-8 w-8 px-1 py-1">
                <BsTwitterX />
              </Button>
              <Button onClick={handleLike} className="h-8 w-8 px-1 py-1">
                <Heart
                  className={cn(
                    likedPosts.includes(postIdNumber) ? "fill-white" : ""
                  )}
                />
              </Button>
              <Button onClick={handleSave} className="h-8 w-8 px-1 py-1">
                <Bookmark
                  className={cn(
                    savedPosts.includes(postIdNumber) ? "fill-white" : ""
                  )}
                />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default PostPage;
