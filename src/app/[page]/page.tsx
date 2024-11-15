import AboutUs from "@/components/pages/AbountUs";
import ContactUs from "@/components/pages/ContactUs";
import FaqList from "@/components/pages/FaqList";
import GalleryList from "@/components/pages/gellery/GalleryList";
import NewsList from "@/components/pages/news/NewsList";
import NotFoundPage from "@/components/pages/NotFoundPage";
import Link from "next/link";

export default function DynamicPage({ params }: { params: { page: string } }) {
  switch (params.page) {
    case "news":
      return <NewsList />;
    case "gallery":
      return <GalleryList />;
    case "about-us":
      return <AboutUs />;
    case "faq":
      return <FaqList />;
    case "contact":
      return <ContactUs />;
    default:
      return <NotFoundPage />;
  }
}
