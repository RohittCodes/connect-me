import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImagesHolder from "./_components/images";
import PostsHolder from "./_components/posts";

const SavesPage = () => {
  return (
    <div className="h-full w-full">
      <Tabs defaultValue="images" className="w-full">
        <TabsList className="w-full h-10">
          <TabsTrigger value="images" className="w-1/2 h-8">
            Images
          </TabsTrigger>
          <TabsTrigger value="posts" className="w-1/2">
            Posts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="images" className="w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <ImagesHolder />
          </div>
        </TabsContent>
        <TabsContent value="posts" className="w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <PostsHolder />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SavesPage;
