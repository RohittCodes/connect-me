import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bookmark, Heart, Share } from "lucide-react";
import Link from "next/link";

interface PostsContainerProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsContainer = ({ userId, id, title, body }: PostsContainerProps) => {
  return (
    <Card className="h-76 py-2 px-2">
      <CardHeader className="px-0 py-2">
        <CardTitle className="text-wrap line-clamp-1 text-ellipsis">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 py-0 line-clamp-2">{body}</CardContent>
      <CardFooter className="flex gap-2 h-fit py-2 px-2 justify-end">
        <Button size="icon">
          <Share />
        </Button>
        <Button onClick={() => {}} size="icon">
          <Heart className="" />
        </Button>
        <Button onClick={() => {}} size="icon">
          <Bookmark className="" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostsContainer;
