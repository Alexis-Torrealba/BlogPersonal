import { CreatePost } from './components/CreatePost';
import { Header } from './components/shared/Header';
import { SearchBlog } from './components/SearchBlog';
import { Login } from './components/Login';
import { Home } from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlockTop } from './components/shared/BlockTop';
import { useState } from 'react';

function App() {
	//obtenemos los datos del formulario y manejamos el estado para ser renderizados en el Div del Home
	const [postData, setPostData] = useState([]);
	//Nos traemos todos los datos y creamos el PrevData para poder crear más de un post
	const handleFormSubmit = (data) => {
		setPostData((prevData) => [...prevData, data]);
	};

	return (
		<BrowserRouter>
			<Header />
			<BlockTop />
			<Routes>
				<Route
					path="/"
					//utilizamos el metodo Map para recorrer el array de objetos cada vez que este reciba datos del formulaio le colocamos una key para evitar los datos repetidos y no tener problemas con los nuevos post que se creen
					element={postData.map((postData, index) => (
						<Home key={index} postData={postData} />
					))}
				/>
				<Route
					path="/CreatePost"
					//mediatne props revibimos los datos enviados desde el formualirio
					element={<CreatePost onFormSubmit={handleFormSubmit} />}
				/>
				<Route path="/SearchBlog" element={<SearchBlog />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export { App };
