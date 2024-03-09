import { useState } from 'react';
import { firestore, storage } from './Firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';

function CreatePost() {
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
		const { name, value, files } = e.target;
		if (files && files.length > 0) {
			const imageFile = files[0];
			// Asignar el archivo de imagen al estado
			setPostData((prevData) => ({
				...prevData,
				imag: imageFile,
			}));
		} else {
			setPostData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Subir el archivo de imagen a Firebase Storage
			const imageRef = ref(storage, `images/${postData.imag.name}`);
			await uploadBytes(imageRef, postData.imag);
			// Obtener la URL de la imagen subida
			const imageURL = await getDownloadURL(imageRef);
			// Guardar los datos en Firestore con la URL de la imagen
			await addDoc(collection(firestore, 'posts'), {
				...postData,
				imag: imageURL,
			});
			setPostData({
				title: '',
				date: '',
				author: '',
				imag: '',
				extract: '',
				descrip: '',
			});

			Swal.fire({
				position: 'top',
				icon: 'success',
				title: 'Información enviada',
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			console.error('Error al enviar los datos a Firebase', error);
			Swal.fire({
				icon: 'error',
				title: 'Error al enviar los datos',
				text: 'Ocurrió un error al enviar los datos a Firebase. Por favor, inténtalo de nuevo más tarde.',
			});
		}
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
						accept="image/*"
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
