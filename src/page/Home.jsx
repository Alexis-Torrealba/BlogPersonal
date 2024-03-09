import { useState, useEffect } from 'react';
import { firestore } from '../components/Firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

function Home() {
	const [post, setPost] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const postsRef = collection(firestore, 'posts');
				const q = query(postsRef, orderBy('date', 'desc')); // Ordenar por fecha en orden descendente
				const snapshot = await getDocs(q);
				const postsData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setPost(postsData);
			} catch (error) {
				console.log('Error al obtener los datos del Firebase', error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center  h-svh md:h-[50%] md:pl-24 bg-[#f8f8ec] pt-80 md:pt-32  ">
			{post.map((post) => (
				<div
					key={post.id}
					className="my-9 md:my-9 xl:my-9 w-10/12 md:w-9/12 xl:w-3/6 gap-5 p-5 bg-[#f4f4f4] rounded-2xl  shadow-xl shadow-[#152b3c]"
				>
					<div className="flex justify-between  pt-4 xl:px-20	">
						<p className="text-right text-blueBg font-bold">{post.author}</p>
						<p className="text-left  text-date text-lg">{post.date}</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-center text-title font-bold text-4xl capitalize leading-normal pb-5">
							{post.title}
						</h1>

						{post.imag && (
							<img
								className=" w-[50%] object-cover aspect-video"
								src={post.imag}
								alt=""
							/>
						)}

						<p className="text-md text-[#000] leading-normal pt-5 pb-10 w-[50%]">
							{post.extract}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export { Home };
