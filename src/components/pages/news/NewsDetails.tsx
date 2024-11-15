import React from "react";
import Image from "next/image";

const NewsDetails = ({ slug }: any) => {
  console.log(slug);
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <figure className="flex justify-center items-center">
                  {/* <Image
                    src={news.image?.url || "/placeholder.png"}
                    className="rounded-md"
                    height={400}
                    width={600}
                    alt="News Image"
                  /> */}
                </figure>
                <h1 className="mb-2 mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {/* {news.title} */}
                </h1>
                <p>
                  {/* {new Date(news.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
                </p>
              </header>
              {/* <div dangerouslySetInnerHTML={{ __html: news.content }} /> */}
            </article>
          </div>
        </main>
      </div>
    </section>
  );
};

export default NewsDetails;
