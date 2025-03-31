import React from 'react'
import heroImage from '../assets/images/hero-img-bro.webp'
import Button from './Button'

export default function Header() {
	return (
		<header className='bg-mainBg pt-48 lg:pt-32 relative'>
			<div className='wrapper px-4'>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div className='space-y-6 text-center lg:text-start'>
						<h1 className='text-4xl md:text-5xl text-brownMain  tracking-tight'>
							Kompleksowa obsługa <span className='font-semibold'>księgowa i podatkowa</span>
						</h1>
						<p className='text-grayish text-lg leading-5'>
							Moje Biuro Rachunkowe OnLine jest członkiem Stowarzyszenia Księgowych w Polsce!
						</p>
						<Button>Skontaktuj się</Button>
					</div>
					<div className='relative overflow-x-hidden'>
						<img src={heroImage} alt='Księgowa' className='rounded-lg  lg:ml-16' />
					</div>
				</div>
			</div>
		</header>
	)
}
