function BlockTop() {
	return (
		<div className="md:fixed md:w-full md:flex  md:justify-center md:items-center md:pl-24 md:h-24  md:bg-[#152b3c]">
			<div className="hidden md:w-24 md:flex">
				<img src="./assets/AD definitivo blanco sin letras.png" alt="" />
			</div>
			<div>
				<h1 className=" hidden lg:flex text-5xl font-bold text-white ">
					Hello, {"I'm"}
					<span className="text-hover pl-3"> AlexisDev </span>
				</h1>
			</div>
		</div>
	);
}

export { BlockTop };
