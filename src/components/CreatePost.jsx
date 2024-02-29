import { useState } from 'react';

function CreatePost({ onFormSubmit }) {
	//Manejamos el estado de los datos del form
	const [postData, setPostData] = useState({
		title: '',
		date: '',
		author: '',
		imag: '',
		extract: '',
		descrip: '',
	});

	const handleChange = (e) => {
		const { name, type } = e.target;
		//obtengo el valor y el tipo de dato del input
		if (type === 'file') {
			const file = e.target.files[0];
			setPostData((prevData) => ({
				...prevData,
				[name]: file,
			}));
		} else {
			const { value } = e.target;
			setPostData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(postData);
		//limpio el formulario
		setPostData({
			title: '',
			date: '',
			author: '',
			imag: '',
			extract: '',
			descrip: '',
		});
	};

	return (
		<div className="flex items-center justify-center h-svh md:h-[100vh] md:pl-24 bg-[#f8f8ec] pt-24 ">
			<div className="flex flex-col w-4/6 h-8/6 gap-5 p-10 bg-[#f4f4f4] rounded-2xl shadow-xl shadow-blueBg">
				{/* Creamos el formulario */}
				<form
					className="flex flex-col items-center gap-2"
					encType="multipart/form-data"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="title"
						id="name"
						value={postData.title}
						placeholder="Type your title"
						className="w-full h-12 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
						onChange={handleChange}
					/>
					<input
						type="date"
						name="date"
						id="date"
						value={postData.date}
						className="w-full h-12 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="author"
						id="author"
						value={postData.author}
						placeholder="Type what author is writing"
						className="w-full h-12 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
						onChange={handleChange}
					/>
					<input
						type="file"
						name="imag"
						id="imag"
						className="w-full text-md text-[#444] border-2 p-2 border-[#929292] rounded-lg cursor-pointer dark:text-[#444] focus:outline-none"
						onChange={handleChange}
					/>
					<textarea
						name="extract"
						id="extract"
						value={postData.extract}
						placeholder="Type the extract of the description"
						className="w-full h-16 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
						onChange={handleChange}
					></textarea>
					<textarea
						name="descrip"
						id="descrip"
						value={postData.descrip}
						placeholder="Type your description of the publication"
						className="w-full h-80 text-md text-[#444] rounded-lg p-4 border-2 border-[#929292] transition-colors duration-300 hover:ring-2 hover:ring-orange-400"
						onChange={handleChange}
					></textarea>
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

export { CreatePost };
