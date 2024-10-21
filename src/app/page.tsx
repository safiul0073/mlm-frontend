import Achievement from "@/components/landing/achievement";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/hero";
import Rewards from "@/components/landing/rewards";
import Trending from "@/components/landing/trending";
import Activities from "./(admin)/activities";
import { getHomePageData } from "@/hooks/server";

export default async function Home() {
  const homePageDAta = await getHomePageData();

  return (
    <>
      {/* <Header /> */}

      <main className="bg-white grow flex flex-col">
        <Hero />
        <Trending />
        <Rewards />
        <Achievement />
        <Activities />
      </main>

      <Footer />
    </>
  );
}
