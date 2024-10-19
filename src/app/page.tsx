import Achievement from "@/components/landing/achievement";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/hero";
import Rewards from "@/components/landing/rewards";
import Trending from "@/components/landing/trending";
import Activities from "./(admin)/activities";

export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <main className="bg-white grow flex flex-col">
        <Hero />
        <Trending />
        <Rewards />
        <Achievement />
        <Activities />

        {/* <div
					className="fixed inset-0 flex z-50 modal overflow-y-auto p-10"
					id="modal-one">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity modal-exit"></div>
					<div className="flex flex-col m-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:p-6">
						<div className="absolute top-0 right-0 pt-2 pr-2">
							<button
								type="button"
								className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 modal-exit">
								<span className="sr-only">Close</span>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="bg-white">
							<div className="mx-auto py-8 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8">
								<div className="lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8">
									<div className="w-full h-[400px] swiper mySwiper">
										<div
											id="swiper-images"
											className="swiper-wrapper"></div>
										<div className="swiper-button-next"></div>
										<div className="swiper-button-prev"></div>
										<div className="swiper-pagination"></div>
									</div>
									<div className="mt-10">
										<h2 className="text-sm font-medium text-gray-900">
											Details
										</h2>
										<div className="mt-4 space-y-6">
											<p
												id="description"
												className="text-sm text-gray-600"></p>
										</div>
									</div>
								</div>
								<div className="mt-4 lg:row-span-3 lg:mt-0">
									<h1
										id="product_name"
										className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4"></h1>
									<h2 className="sr-only">
										Product information
									</h2>
									<p
										id="category"
										className="text-lg tracking-tight text-gray-600"></p>
									<div className="mt-6">
										<p
											id="price"
											className="text-lg tracking-tight text-gray-600"></p>
									</div>
									<div className="mt-6">
										<h3
											id="referral_commission"
											className="text-lg text-gray-600"></h3>
									</div>
									<div className="mt-6">
										<h1 className="text-lg text-gray-600 mb-1 font-bold">
											Video
										</h1>
										<iframe
											className="w-full aspect-video"
											id="vedio_link"
											frameBorder="0"></iframe>
									</div>
									<div className="pt-4">
										<a
											className="btn btn-primary"
											id="checkout_button">
											Checkout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
      </main>

      <Footer />
    </>
  );
}
