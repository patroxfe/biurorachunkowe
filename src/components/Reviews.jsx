import { useState, useEffect, useRef } from 'react'

const GoogleReviews = () => {
	const [reviews, setReviews] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const containerRef = useRef(null)

	const getProxiedImageUrl = originalUrl => {
		return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl)}`
	}

	useEffect(() => {
		fetch(import.meta.env.VITE_GOOGLE_SCRIPT_REVIEWS_URL)
			.then(response => {
				return response.json()
			})
			.then(data => {
				if (data.result.reviews) {
					setReviews(data.result.reviews)
				}
			})
			.catch(error => console.error('Błąd:', error))
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => {
				const nextIndex = prevIndex + 1
				if (nextIndex >= reviews.length) {
					return 0
				}
				return nextIndex
			})
		}, 8000)

		return () => clearInterval(interval)
	}, [reviews.length])

	const renderStars = rating => {
		return [...Array(5)].map((_, index) => (
			<span key={index} className={`text-lg mr-0.5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
				★
			</span>
		))
	}

	const trackStyle = {
		transform: `translateX(-${currentIndex * (100 / 3)}%)`,
		transition: 'transform 1s ease-in-out',
	}

	const duplicatedReviews = [...reviews, ...reviews.slice(0, 3)]

	return (
		<section className='bg-secondBg py-16 px-8 overflow-hidden'>
			<p className='text-sm text-brownMain text-center'>Opinie</p>
			<h2 className='text-3xl font-semibold text-brownMain text-center mb-8'>Opinie naszych klientów</h2>
			<div className='wrapper mx-auto relative overflow-hidden' ref={containerRef}>
				{reviews.length > 0 ? (
					<div
						className='flex gap-8 w-full [backface-visibility:hidden] [transform-style:preserve-3d]'
						style={trackStyle}>
						{duplicatedReviews.map((review, index) => {
							return (
								<div
									key={index}
									className='flex-none w-[calc(33.333%-1.33rem)] bg-white rounded-xl p-8 shadow-md transition-transform duration-300 opacity-80 scale-95 hover:translate-y-[-5px] hover:scale-100 hover:opacity-100'>
									<div className='flex justify-between items-start mb-6'>
										<div className='flex items-center gap-4'>
											<img
												src={getProxiedImageUrl(review.profile_photo_url)}
												alt={review.author_name}
												className='w-[50px] h-[50px] rounded-full object-cover [backface-visibility:hidden]'
												loading='lazy'
											/>
											<div>
												<h3 className='m-0 text-lg text-gray-800'>{review.author_name}</h3>
												<div className='mt-2'>{renderStars(review.rating)}</div>
											</div>
										</div>
										<div className='text-gray-500 text-sm'>
											{new Date(review.time * 1000).toLocaleDateString('pl-PL')}
										</div>
									</div>
									<p className='text-sm leading-relaxed text-gray-700 m-0'>{review.text}</p>
								</div>
							)
						})}
					</div>
				) : (
					<p className='text-center text-gray-500 text-lg'>Brak opinii</p>
				)}
			</div>
			<div className='flex justify-center gap-2 mt-8'>
				{reviews.map((_, index) => (
					<button
						key={index}
						className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer p-0 transition-colors duration-300 ${
							index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
						}`}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Przejdź do opinii ${index + 1}`}
					/>
				))}
			</div>
		</section>
	)
}

export default GoogleReviews
