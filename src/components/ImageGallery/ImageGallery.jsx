import ImageCard from '../ImageCard';
import css from './ImageGallery.module.css';

export default function ImageList({ items, openModal }) {
	return (
		<ul className={css.Image__List}>
			{items.map(item => (
				<li
					className={css.Image__Item}
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
