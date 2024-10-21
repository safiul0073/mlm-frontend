import Link from "next/link";

export default function Packages() {
  return (
    <div className=" w-full min-h-screen bg-white py-5 md:py-6 lg:py-10">
      <div className="container mx-auto">
        <h1 className="text-lg font-bold tracking-tight text-gray-600 sm:text-2xl md:text-4xl text-center mb-5 md:mb-6 lg:mb-10">
          <span className="block">Our Packages</span>
        </h1>
        <div className="w-full bg-indigo-200/20 rounded-xl p-5">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array(10)
              .fill(1)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-lg transition-all duration-700 hover:scale-105"
                  >
                    <div className="flex flex-nowrap justify-center items-center rounded-md h-full bg-white hover:bg-indigo-50">
                      <div className="w-full py-8 px-4">
                        <h1 className="text-center my-2 text-lg font-bold text-gray-800 uppercase">
                          basic
                        </h1>
                        <div className="rounded-md font-normal text-sm bg-gradient-to-r from-indigo-400 to-indigo-700 p-3 text-center flex justify-between items-center my-2">
                          <div className="flex flex-col text-white">
                            <span>Min Invest</span>
                            <span>$50</span>
                          </div>
                          <hr className="w-10 text-white rotate-90"></hr>
                          <div className="flex flex-col text-white">
                            <span>Max Invest</span>
                            <span>$50</span>
                          </div>
                        </div>
                        <div className="w-full flex flex-col item-center text-xsm gap-1 p-1 uppercase">
                          {[1, 2, 3, 4, 5, 6].map((item, i) => (
                            <span key={i} className="text-center ">
                              Number Of Period 200 Times
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center item-center mt-4">
                          <Link
                            className="px-6 py-1 bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-700 text-white text-center rounded-md "
                            href="https://sinvestingsolutions.com/register/set-sponsor?slug=basic"
                          >
                            Invest Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
