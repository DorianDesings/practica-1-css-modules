import style from './card.module.css';
const Card = ({ src, alt, color, name, text }) => {
	return (
		<div className={`${style.card} ${style[color]}`}>
			<img className={style['card-image']} src={src} alt={alt} />
			<h2 className={style['card-title']}>{name}</h2>
			<p className={style['card-text']}>{text}</p>
			<button className={`${style.button} ${style[color]}`}>Learn More</button>
		</div>
	);
};

export default Card;
