import { Separator } from "@radix-ui/react-separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import PostSearch from "~/components/posts-search";

export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const query = searchParams.get("query");
  return json({ query });
}

export default function GitPosts() {
  const { query } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  // mean i am typing something in search field and the page is reloading
  const isSearching = Boolean(
    navigation.location &&
      new URLSearchParams(navigation.location.search).has("query")
  );
  return (
    <div className="w-full max-w-xl px-4 flex flex-col">
      {" "}
      <Tabs defaultValue="view-posts" className="my-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="view-posts">View Posts</TabsTrigger>{" "}
          <TabsTrigger value="write-post">Write Post</TabsTrigger>{" "}
        </TabsList>
        <TabsContent value="view-posts">
          <Separator />
          <PostSearch isSearching={isSearching} searchQuery={query} />
          {/* <Post>
            <ViewLikes />
            <ViewComments />
          </Post> */}
        </TabsContent>
        <TabsContent value="write-posts">{/* <WritePost /> */}</TabsContent>
      </Tabs>
    </div>
  );
}
