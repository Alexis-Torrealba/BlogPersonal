import { IoHomeOutline, IoCreateOutline, IoSearch } from 'react-icons/io5';
import { SlUserFollow } from 'react-icons/sl';

import { Link } from 'react-router-dom';

const Header = () => {
	const linkStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: '35px',
		color: 'white',
		cursor: 'pointer',
	};

	return (
		<div className="fixed flex items-center justify-center  md:left-0 md:top-0 w-full md:w-24 h-24 md:h-full bg-[#152b3c]  hover:text-hover">
			<nav className="flex flex-wrap md:flex-col gap-16 md:gap-24">
				<Link to="/" style={linkStyle} title="Home">
					{<IoHomeOutline className=" hover:text-hover" />}
				</Link>
				<Link to="/CreatePost" style={linkStyle} title="Crear Post">
					<IoCreateOutline className=" hover:text-hover" />
				</Link>
				<Link to="/SearchBlog" style={linkStyle} title="Buscar post">
					<IoSearch className=" hover:text-hover" />
				</Link>
				<div className="">
					<Link to="/Login" style={linkStyle}>
						<SlUserFollow className=" hover:text-hover" />
					</Link>
				</div>
			</nav>
		</div>
	);
};

export { Header };
