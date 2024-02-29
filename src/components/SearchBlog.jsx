import { IoSearch } from 'react-icons/io5';

function SearchBlog() {
	return (
		<div className="h-svh md:h-[100vh] md:pl-24 bg-[#f8f8ec] pt-24">
			<div className="flex items-center justify-center ">
				<div className="flex w-10/12 xl:w-4/12 m-10  items-stretch">
					<input
						type="search"
						className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l-xl border border-[#929292] bg-white px-3 py-2 text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primar focus:outline-none dark:placeholder:text-neutral-200 dark:focus:border-primary"
						placeholder="Search"
					/>

					<button
						className=" rounded-r-xl bg-blueBg px-6 text-center  text-xl text-white shadow-md transition duration-150 ease-in-out hover:bg-blueBgH hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
						type="button"
						id="button-addon1"
					>
						<IoSearch />
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center  "></div>
		</div>
	);
}

export { SearchBlog };
