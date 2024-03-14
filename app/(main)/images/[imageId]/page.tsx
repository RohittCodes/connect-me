import { getImage } from "@/actions/images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bookmark, Download, Heart, Share } from "lucide-react";
import Image from "next/image";

type Params = {
  params: {
    imageId: string;
  };
};

const ImagePage = async ({ params: { imageId } }: Params) => {
  const getData = getImage(imageId);

  const data = await getData;

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle className="text-xl flex">
            {data.title}
            <p className="text-xs">{data.id}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={data.url} alt={data.title} width={450} height={450} />
        </CardContent>
        <CardFooter className="flex flex-col">
          <CardDescription></CardDescription>
          <div className="flex justify-end gap-2">
            <Button size="icon">
              <Heart />
            </Button>
            <Button size="icon">
              <Bookmark />
            </Button>
            <Button size="icon">
              <Share />
            </Button>
            <Button size="icon">
              <Download />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ImagePage;
