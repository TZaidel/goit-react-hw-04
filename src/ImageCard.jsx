export default function ImageCard({
	item: { alt_description, created_at, description, likes, urls },
  }) {
	return (
		<div className='ImageCard'>
			<img src={urls.regular} alt={alt_description} />
			<p>{description}</p>
			<p>{created_at}</p>
			<p>{likes}</p>
		</div>
	);
}
