import { useState } from 'react';
import ImageModal from '../components/ImageModal';

export default function ImageCard({
	item: { alt_description, created_at, description, urls },
}) {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	return (
		<div className='ImageCard'>
			<img
				src={urls.small}
				alt={alt_description}
				width={200}
				onClick={openModal}
			/>
			<p>{created_at}</p>

			<ImageModal
				isOpenModal={isOpenModal}
				closeModal={closeModal}
				item={urls}
				caption={description}
			/>
		</div>
	);
}
