import { CreatePost } from './components/CreatePost';
import { Header } from './components/shared/Header';
import { SearchBlog } from './components/SearchBlog';
import { Login } from './components/Login';
import { Home } from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlockTop } from './components/shared/BlockTop';

function App() {
	//obtenemos los datos del formulario y manejamos el estado para ser renderizados en el Div del Home

	return (
		<BrowserRouter>
			<Header />
			<BlockTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/CreatePost" element={<CreatePost />} />
				<Route path="/SearchBlog" element={<SearchBlog />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export { App };
