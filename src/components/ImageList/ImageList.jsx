import ImageCard from '../ImageCard';
import './ImageList.css';

export default function ImageList({ items, openModal }) {
	return (
		<ul className='image-list'>
			{items.map(item => (
				<li
					className='image-item'
					key={item.id}
					onClick={e => {
						console.log(e);
						openModal;
					}}
				>
					<ImageCard item={item} />
				</li>
			))}
		</ul>
	);
}
