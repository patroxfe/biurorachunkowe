import React from 'react'
import certyfikat1 from '../assets/images/certyfikat1.webp'
import certyfikat2 from '../assets/images/certyfikat2.webp'
import Button from './Button'

export default function AboutMe() {
	return (
		<section id='o-mnie' className='bg-secondBg py-16'>
			<div className='wrapper px-4 flex flex-col md:flex-row justify-between'>
				<div className='mb-12 md:max-w-1/2 text-center md:text-start'>
					<p className='text-sm text-brownMain'>Witaj na stronie mojego biura...</p>
					<div className='space-y-5'>
						<h2 className='text-3xl font-semibold text-grayish'>Kim jestem?</h2>
						<p className='text-grayishSecondary md:max-w-4/5'>
							Jestem Magistrem Prawa Finansowego I Skarbowości. Ukończyłam certyfikację 1 i 2 stopnia w Stowarzyszeniu
							Księgowych w Polsce. Księgowością zajmuję się od 7 lat. Specjalizuję się w Podatku dochodowym od osób
							fizycznych, Jednoosobowych działalnościach gospodarczych oraz Spółkach cywilnych. Rozliczam ulgę IP BOX.
						</p>
						<Button>Sprawdź ofertę</Button>
					</div>
				</div>
				<div className='flex justify-between sm:justify-baseline sm:space-x-10 overflow-x-hidden'>
					<img src={certyfikat1} alt='Księgowa' className='max-w-[45%] object-contain' />
					<img src={certyfikat2} alt='Księgowa' className='max-w-[45%] object-contain' />
				</div>
			</div>
			<div></div>
		</section>
	)
}
