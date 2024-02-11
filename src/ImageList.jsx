import Modal from 'react-modal';
import { useState } from 'react';
import ImageCard from './ImageCard';
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

export default function ImageList({ item }) {

  let subtitle
  const [isOpenModal, setIsOpenModal] = useState(false)

  function openModal() {
    setIsOpenModal(true)
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpenModal(false)
  }


  return (
		<ul>
			<Modal
				isOpen={isOpenModal}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			></Modal>
			{item.map(el => (
				<li key={el.id}>
					<ImageCard item={el} />
				</li>
			))}
		</ul>
	);
}
