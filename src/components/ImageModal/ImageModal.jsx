import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
	overlay: {
		position: 'fixed',
		backgroundColor: 'rgba(255, 255, 255, 1)',
	},
	content: {
		border: '1px solid #ccc',
		background: '#fff',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#0505057d',
		// width: 'auto',
	},
};

Modal.setAppElement('#root');

export default function ImageModal({ isOpenModal, closeModal, item }) {
	const { alt_description, description, urls } = item;

	return (
		<Modal
			isOpen={isOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Example Modal'
			shouldCloseOnOverlayClick={true}
		>
			<div className={css.ImageCard}>
				<img
					src={urls.regular}
					width={400}
					alt={alt_description}
					className={css.Modal__Image}
				/>

				<p className={css.ImageCard__Description}>{description}</p>
			</div>
		</Modal>
	);
}
