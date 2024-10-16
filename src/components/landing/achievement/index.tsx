"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Achievement = () => {
  return (
    <div className="relative bg-gray-900 py-10 md:py-12 lg:py-20">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
              height={200}
              width={200}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            ></div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative pb-0 sm:pb-6 xl:col-start-1 xl:pb-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl mb-10 md:mb-12 lg:mb-20 text-center">
            <span className="block text-indigo-500">Reward Achievements</span>
          </h1>
          <div className="w-full bg-indigo-300/10 border rounded-lg shadow-md border-indigo-900/20">
            <div className="p-4 rounded-lg md:p-8">
              <Carousel responsive={responsive}>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="text-center text-gray-400">
                  <Image
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt="Bonnie Avatar"
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    <p>Lorem ipsum dolor sit.</p>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Carousel>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
