import Image from "next/image";
import React from "react";

const GallerySection = () => {
  const showImageSlider = (images: string[]) => {
    console.log("Open image slider with images:", images);
    // Implement your modal logic here
  };
  const galleries: any = [];
  return (
    <section className="overflow-hidden text-gray-700 py-6 sm:py-10 lg:py-20">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 -m-1 md:-m-2">
          {galleries && galleries.length > 0 ? (
            galleries.map((gallery: any, index: number) => (
              <div key={index} className="w-full p-1 md:p-2">
                <button
                  data-modal="modal-view-user"
                  onClick={() => showImageSlider(gallery.images)}
                >
                  <Image
                    alt="gallery"
                    className="block object-cover object-center w-full h-[300px] rounded-lg"
                    src={gallery.images[0]?.url || "/placeholder.png"}
                  />
                </button>
                <h1 className="text-center text-gray-800 bg-gray-300 rounded-md">
                  {gallery.title}
                </h1>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No galleries available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
