import React from 'react'
import heroImage from '../assets/images/hero-img-bro.png'
import Button from './Button'

export default function Header() {
	return (
		<header className='bg-mainBg pt-24 md:pt-32 relative'>
			<div className='wrapper px-4'>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div className='space-y-6'>
						<h1 className='text-4xl md:text-5xl text-brownMain  tracking-tight'>
							Kompleksowa obsługa <span className='font-semibold'>księgowa i podatkowa</span>
						</h1>
						<p className='text-grayish text-lg leading-5'>
							Moje Biuro Rachunkowe OnLine jest członkiem Stowarzyszenia Księgowych w Polsce!
						</p>
						<Button>Skontaktuj się</Button>
					</div>
					<div className='relative'>
						<img src={heroImage} alt='Księgowa' className='rounded-lg  ml-16' />
					</div>
				</div>
			</div>
		</header>
	)
}
