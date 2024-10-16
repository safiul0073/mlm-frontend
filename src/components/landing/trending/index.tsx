const Trending = () => {
  return (
    <div className="bg-gray-800 py-10 md:py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl mb-10 md:mb-12 lg:mb-20 text-center">
          <span className="block">Some of Our</span>
          <span className="block text-indigo-500">Trending Packages</span>
        </h1>
        <div className="bg-indigo-600/20 rounded-xl">
          <div className="mx-auto p-4 sm:p-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <div className="shadow-lg transition-all duration-700 hover:scale-110">
                <div className="flex items-center h-full bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-md hover:from-indigo-600 hover:to-indigo-700 shadow">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center mb-3 text-lg font-bold text-white uppercase">
                        Lorem ipsum dolor sit.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-white p-3 text-center">
                        <h1 className="text-center text-white font-black text-3xl">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, amet?
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm text-white capitalize mt-2">
                        Profit for every
                      </p>
                      <div className="rounded-md bg-white p-3 text-center flex flex-col gap-1 my-2 shadow">
                        <p className="text-gray-700">Fixed Invest</p>
                        <p className="text-gray-700">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="flex justify-center mt-8">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-white hover:bg-gray-100 text-gray-700 text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110">
                <div className="flex items-center h-full bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-md hover:from-indigo-600 hover:to-indigo-700 shadow">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center mb-3 text-lg font-bold text-white uppercase">
                        Lorem ipsum dolor sit.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-white p-3 text-center">
                        <h1 className="text-center text-white font-black text-3xl">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum, amet?
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm text-white capitalize mt-2">
                        Profit for every
                      </p>
                      <div className="rounded-md bg-white p-3 text-center flex flex-col gap-1 my-2 shadow">
                        <p className="text-gray-700">Fixed Invest</p>
                        <p className="text-gray-700">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="flex justify-center mt-8">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-white hover:bg-gray-100 text-gray-700 text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-lg transition-all duration-700 hover:scale-110 ">
                <div className="flex justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                  <div className="w-full py-8 ">
                    <div className="w-full px-4">
                      <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <div className="rounded-md mt-2 border border-dotted border-indigo-600 p-3 text-center">
                        <h1 className="text-center text-gray-800 font-black text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h1>
                      </div>
                      <p className="text-center font-normal text-sm capitalize mt-2">
                        Profit for Every
                      </p>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center my-2">
                        <p className="text-white">Fixed Invest</p>
                        <p className="text-white">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                        <div>
                          <p className="text-white">Min Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className=" h-12 w-[2px] bg-white"></div>
                        <div>
                          <p className="text-white">Max Invest</p>
                          <p className="text-white">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>

                      <div className="my-2 flex flex-col gap-1 p-1 text-[12px] items-center font-normal capitalize">
                        <p>Number Of Period Times</p>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis, pariatur?
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <a
                          href="{{ route('register.set.sponsor.user', ['slug' => $package->slug]) }}"
                          className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 ">
              <div className="w-full flex justify-center">
                <a
                  href="{{ route('package.page') }}"
                  className="text-center text-sm text-indigo-200 hover:text-white"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
