import NewsDetails from "@/components/pages/news/NewsDetails";
import Link from "next/link";

export default function DynamicPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  switch (params.slug) {
    case "news":
      return <NewsDetails slug={params.id} />;
    default:
      return (
        <>
          <Link href="/news">Go Back</Link>
        </>
      );
  }
}
