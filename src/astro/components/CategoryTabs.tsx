import type { Category, Post } from "../utils/sanity";
import { Card } from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function CategoryTabs({
  categories,
  posts,
}: {
  categories: Category[];
  posts: Post[];
}) {
  const postsByCategory: Record<string, Post[]> = Object.fromEntries(
    categories.map((category) => [
      category.slug.current,
      posts.filter((post) =>
        post.tags.map((t) => t._ref).includes(category._id),
      ),
    ]),
  );

  return (
    <Tabs defaultValue="origami" className="">
      <TabsList>
        {categories.map((category) => (
          <TabsTrigger key={category._id} value={category.slug.current}>
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category._id} value={category.slug.current}>
          <section className="flex flex-col gap-6">
            {postsByCategory[category.slug.current].map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </section>
        </TabsContent>
      ))}
    </Tabs>
  );
}
