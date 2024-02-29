function Home({ postData }) {
	//recibimos los datos mediandte Props
	const { date, title, imag, extract, author } = postData;
	console.log(postData);
	return (
		//Le pasamos a los datos a los elementos segun el nombre de cada props
		<div className="flex  items-center justify-center h-svh md:h-[50%] md:pl-24 bg-[#f8f8ec] md:pt-32 ">
			<div className="flex flex-col justify-center items-center w-10/12 md:w-9/12 xl:w-7/12 gap-5 p-5 bg-[#f4f4f4] rounded-2xl  shadow-xl shadow-[#152b3c]">
				<p className="w-full text-right text-[#b4b4b4] text-lg">{date}</p>
				<h1 className="text-center font-bold text-4xl capitalize leading-normal">
					{title}
				</h1>

				{imag && (
					<img
						className=" w-[60%] object-cover aspect-video"
						src={typeof imag === 'string' ? imag : URL.createObjectURL(imag)}
						alt=""
					/>
				)}

				<div className="text-left">
					<p className="text-md text-[#000] leading-normal ">{extract}</p>
					<p className="pt-2 text-[#444] font-bold">{author}</p>
				</div>
			</div>
		</div>
	);
}

export { Home };
