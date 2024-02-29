import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export default function ImageCard({ item }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { alt_description, created_at, urls, user } = item;
	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	return (
		<div className={css.Image__Card} onClick={openModal}>
			<img
				className={css.Image}
				src={urls.small}
				alt={alt_description}
				width={200}
			/>
			<p className={css.Image__Card__Username}>{user.name}</p>
			<p className={css.Image__Card__Date}>{created_at.split('T')[0]}</p>

			<ImageModal
				isOpenModal={isOpenModal}
				closeModal={closeModal}
				item={item}
			/>
		</div>
	);
}
