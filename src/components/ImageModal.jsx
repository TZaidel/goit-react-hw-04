import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

export default function ImageModal({
	isOpenModal,
	closeModal,
	item,
	caption,
	alt,
}) {
	return (
		<Modal
			isOpen={isOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Example Modal'
		>
			<div className='ImageCard'>
				<img src={item.regular} width={200} alt={alt} />
				<p style={{ color: 'black' }}>{caption}</p>
			</div>
		</Modal>
	);
}
