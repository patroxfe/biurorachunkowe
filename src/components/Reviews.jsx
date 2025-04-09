import { useState, useEffect, useRef } from 'react'

const GoogleReviews = () => {
	const [reviews, setReviews] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const [loading, setLoading] = useState(true)
	const containerRef = useRef(null)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

	const getProxiedImageUrl = originalUrl => {
		return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl)}`
	}

	useEffect(() => {
		// Dodaj listener na zmianę rozmiaru okna
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		setLoading(true)
		fetch(import.meta.env.VITE_GOOGLE_SCRIPT_REVIEWS_URL)
			.then(response => {
				return response.json()
			})
			.then(data => {
				if (data.result.reviews) {
					setReviews(data.result.reviews)
				}
				setLoading(false)
			})
			.catch(error => {
				console.error('Błąd:', error)
				setLoading(false)
			})
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
		}, 5000)

		return () => clearInterval(interval)
	}, [reviews.length])

	const renderStars = rating => {
		return [...Array(5)].map((_, index) => (
			<span key={index} className={`text-lg mr-0.5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
				★
			</span>
		))
	}

	// Oblicz wartość przesunięcia w zależności od szerokości ekranu
	const trackStyle = {
		transform: isMobile ? `translateX(-${currentIndex * 104}%)` : `translateX(-${currentIndex * (103 / 3)}%)`,
		transition: 'transform 1s ease-in-out',
	}

	const duplicatedReviews = [...reviews, ...reviews.slice(0, 3)]

	const Loader = () => (
		<div className='flex flex-col items-center justify-center py-12'>
			<div className='relative w-20 h-20'>
				<div className='absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full'></div>
				<div className='absolute top-0 left-0 w-full h-full border-4 border-brownMain rounded-full animate-spin border-t-transparent'></div>
			</div>
			<p className='mt-4 text-brownMain font-medium'>Ładowanie opinii...</p>
		</div>
	)

	return (
		<section className='bg-mainBg py-16 px-4 md:px-8 overflow-hidden'>
			<p className='text-sm text-brownMain text-center'>Opinie</p>
			<h2 className='text-3xl font-semibold text-brownMain text-center mb-8'>Opinie naszych klientów</h2>
			<div className='max-w-6xl mx-auto relative overflow-hidden' ref={containerRef}>
				{loading ? (
					<Loader />
				) : reviews.length > 0 ? (
					<div
						className='flex gap-4 md:gap-8 w-full [backface-visibility:hidden] [transform-style:preserve-3d] pt-4'
						style={trackStyle}>
						{duplicatedReviews.map((review, index) => {
							return (
								<div
									key={index}
									className='flex-none w-full md:w-[calc(33.333%-1.33rem)] bg-secondBg rounded-xl p-4 md:p-8 shadow-md transition-transform duration-300 opacity-80 scale-95 hover:translate-y-[-5px] hover:scale-100 hover:opacity-100'>
									<div className='flex justify-between items-start mb-4 md:mb-6'>
										<div className='flex items-center gap-3 md:gap-4'>
											<img
												src={getProxiedImageUrl(review.profile_photo_url)}
												alt={review.author_name}
												className='w-10 h-10 md:w-[50px] md:h-[50px] rounded-full object-cover [backface-visibility:hidden]'
												loading='lazy'
											/>
											<div>
												<h3 className='m-0 text-base md:text-lg text-gray-800'>{review.author_name}</h3>
												<div className='mt-1 md:mt-2'>{renderStars(review.rating)}</div>
											</div>
										</div>
										<div className='text-gray-500 text-xs md:text-sm'>
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
			{!loading && reviews.length > 0 && (
				<div className='flex justify-center gap-2 mt-8'>
					{reviews.map((_, index) => (
						<button
							key={index}
							className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer p-0 transition-colors duration-300 ${
								index === currentIndex ? 'bg-brownMain' : 'bg-secondBg'
							}`}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Przejdź do opinii ${index + 1}`}
						/>
					))}
				</div>
			)}
		</section>
	)
}

export default GoogleReviews
