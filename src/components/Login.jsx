function Login() {
	return (
		<div className="flex items-center justify-center h-svh md:h-[100vh] md:pl-24 bg-[#f8f8ec] pt-24">
			<div className="flex flex-col justify-center xl:w-3/12 md:w-8/12 w-12/12 h-96 p-5 md:p-10 bg-[#f4f4f4] rounded-2xl shadow-xl shadow-blueBg">
				<form
					className="flex flex-col items-center gap-2"
					encType="multipart/form-data"
				>
					<img
						src="public/assets/AD definitivo negro sin letras.png"
						alt=""
						className="w-32 md:w-36 xl:w-40"
					/>
					<input
						type="text"
						name="title"
						id="name"
						placeholder="User"
						value=""
						className="w-full h-12 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
					/>
					<input
						type="password"
						name="passw"
						id="passw"
						placeholder="Password"
						className="w-full h-12 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
					/>
					<button
						type="submit"
						className="w-32 h-12 text-white text-2xl font-bold rounded-xl shadow-lg shadow-gray-500 bg-blueBg hover:bg-blueBgH hover:shadow-orange-300"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}

export { Login };
