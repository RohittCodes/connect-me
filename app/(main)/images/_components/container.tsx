"use client";

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
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardHeaderProps {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  loading?: boolean;
}

export const Container = ({
  title,
  id,
  description,
  imageUrl,
  loading,
}: CardHeaderProps) => {
  const router = useRouter();

  const imageId = id.toString();

  const handleRouter = (href: string) => {
    router.push(`images/${href}`);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={imageUrl} alt={title} width={150} height={150} />
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleRouter(imageId)}>View</Button>
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
