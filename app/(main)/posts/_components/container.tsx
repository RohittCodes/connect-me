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
import { Bookmark, Heart, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PostsContainerProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsContainer = ({ userId, id, title, body }: PostsContainerProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const likedPosts = useSelector((state: any) => state?.likedPosts?.posts);
  const savedPosts = useSelector((state: any) => state?.savedPosts?.posts);

  const getData = async (userId: number) => {
    const response = await getUser(userId);
    setUser(response);
    setIsLoading(false);
    return response;
  };

  useEffect(() => {
    getData(userId);
  }, []);

  const handleLike = () => {
    if (likedPosts.includes(id)) {
      dispatch(unlikePost({ id }));
    } else {
      dispatch(likePost({ id }));
    }
  };

  const handleSave = () => {
    if (savedPosts.includes(id)) {
      dispatch(removePost({ id }));
    } else {
      dispatch(addPost({ id }));
    }
  };

  return (
    <Card className="h-76 py-2 px-2">
      <CardHeader className="px-0 py-2">
        <CardTitle className="text-wrap line-clamp-1 text-ellipsis">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 py-0 line-clamp-2">{body}</CardContent>
      <CardFooter className="flex w-full justify-between h-fit px-2 py-2">
        {/* Apply parallel loading */}
        {isLoading ? (
          <Skeleton className="h-4 w-32" />
        ) : (
          <CardDescription>{user?.name}</CardDescription>
        )}
        <div className="flex gap-2 justify-end">
          <Button size="icon" className="h-8 w-8 px-1 py-1">
            <Share size="20" />
          </Button>
          <Button onClick={handleLike} className="h-8 w-8 px-1 py-1">
            <Heart
              className={cn(likedPosts.includes(id) ? "fill-white" : "")}
            />
          </Button>
          <Button onClick={handleSave} className="h-8 w-8 px-1 py-1">
            <Bookmark
              className={cn(savedPosts.includes(id) ? "fill-white" : "")}
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export const PostsContainerSkeleton = () => {
  return (
    <Card className="h-76 py-2 px-2">
      <CardHeader className="px-0 py-2">
        <CardTitle className="text-wrap line-clamp-1 text-ellipsis">
          <Skeleton className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 py-0 line-clamp-2">
        <Skeleton className="h-32 w-full rounded-md" />
      </CardContent>
      <CardFooter className="flex gap-2 h-fit py-2 px-2 justify-end">
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8" />
      </CardFooter>
    </Card>
  );
};

export default PostsContainer;
