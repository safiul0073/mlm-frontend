import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsList = () => {
  const news: any = [];
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="text-indigo-600 mb-2 block text-lg font-semibold">
                Our News
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.length > 0 ? (
            news.map((row: any) => (
              <div key={row.id} className="mx-auto mb-10 w-full rounded-md">
                <div className="mb-8 overflow-hidden rounded">
                  <Image
                    src={row.image ? row.image.url : "/placeholder.png"}
                    alt="image"
                    className="w-full h-64"
                    width={400}
                    height={256}
                  />
                </div>
                <div>
                  <span className="bg-indigo-600 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    {new Date(row.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <h3>
                    <Link
                      href={`/news/${row.slug}`}
                      className="text-dark hover:text-indigo-600 mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      {row.title}
                    </Link>
                  </h3>
                  <p className="text-body-color text-base">
                    {row.content.length > 180
                      ? `${row.content.slice(0, 180)}.....`
                      : row.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
