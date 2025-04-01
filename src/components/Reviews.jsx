import { useState, useEffect, useRef } from 'react';
import './Reviews.css';

const GoogleReviews = () => {
	const [reviews, setReviews] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef(null);

	const getProxiedImageUrl = (originalUrl) => {
		return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl)}`;
	};

	useEffect(() => {
		fetch(import.meta.env.VITE_GOOGLE_SCRIPT_REVIEWS_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.result.reviews) {
					setReviews(data.result.reviews);
				}
			})
			.catch((error) => console.error('Błąd:', error));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => {
				const nextIndex = prevIndex + 1;
				if (nextIndex >= reviews.length) {
					return 0;
				}
				return nextIndex;
			});
		}, 8000);

		return () => clearInterval(interval);
	}, [reviews.length]);

	const renderStars = (rating) => {
		return [...Array(5)].map((_, index) => (
			<span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
				★
			</span>
		));
	};

	const trackStyle = {
		transform: `translateX(-${currentIndex * (100 / 3)}%)`,
		transition: 'transform 1s ease-in-out',
	};

	const duplicatedReviews = [...reviews, ...reviews.slice(0, 3)];

	return (
		<section className='reviews-section'>
			<h2 className='reviews-title'>Opinie naszych klientów</h2>
			<div className='reviews-container' ref={containerRef}>
				{reviews.length > 0 ? (
					<div className='reviews-track' style={trackStyle}>
						{duplicatedReviews.map((review, index) => {
							return (
								<div key={index} className='review-card'>
									<div className='review-header'>
										<div className='review-author'>
											<img
												src={getProxiedImageUrl(review.profile_photo_url)}
												alt={review.author_name}
												className='author-avatar'
												loading='lazy'
											/>
											<div className='author-info'>
												<h3>{review.author_name}</h3>
												<div className='rating'>
													{renderStars(review.rating)}
												</div>
											</div>
										</div>
										<div className='review-date'>
											{new Date(review.time * 1000).toLocaleDateString('pl-PL')}
										</div>
									</div>
									<p className='review-text'>{review.text}</p>
								</div>
							);
						})}
					</div>
				) : (
					<p className='no-reviews'>Brak opinii</p>
				)}
			</div>
			<div className='reviews-dots'>
				{reviews.map((_, index) => (
					<button
						key={index}
						className={`dot ${index === currentIndex ? 'active' : ''}`}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Przejdź do opinii ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default GoogleReviews;
