import React from 'react'
import phoneIcon from '../assets/icons/phoneIcon.svg'
import mailIcon from '../assets/icons/mailIcon.svg'
import locationIcon from '../assets/icons/locationIcon.svg'
import timeIcon from '../assets/icons/timeIcon.svg'
import fbIcon from '../assets/icons/fbIcon.svg'

const contactData = {
	contactInfo: [
		{
			icon: phoneIcon,
			title: 'Numer kontaktowy',
			value: '+48 605 541 681',
		},
		{
			icon: mailIcon,
			title: 'Adres e-mail',
			value: 'ewa.reluga@outlook.com',
		},
		{
			icon: locationIcon,
			title: 'Lokalizacja biura',
			value: 'Wybickiego 4/42, Grójec',
		},
		{
			icon: timeIcon,
			title: 'Godziny pracy',
			value: 'Pon-Czw: 7:00-15:00',
		},
	],
}

export default function Contact() {
	return (
		<section id='kontakt' className='bg-secondBg py-16'>
			<div className='wrapper px-4'>
				<p className='text-sm text-brownMain text-center'>Dane kontaktowe</p>
				<h2 className='text-3xl font-semibold text-brownMain text-center mb-8'>Skontaktuj się</h2>

				<div className='flex flex-col lg:flex-row gap-8'>
					<div className='lg:w-1/2 order-2 xl:order-1'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
							{contactData.contactInfo.map((info, index) => (
								<div
									key={index}
									className='bg-secondBg rounded-xs shadow-normal p-6 flex flex-col items-center text-center'>
									<div className='mb-4'>
										<img src={info.icon} alt={info.title} className='w-8 h-8' />
									</div>
									<h3 className='text-brownMain font-semibold mb-1 text-lg'>{info.title}</h3>
									<p className='text-grayishSecondary text-sm'>{info.value}</p>
								</div>
							))}
						</div>

						<div className='mt-8 '>
							<p className='text-grayishSecondary text-base mb-3'>Znajdziesz mnie również:</p>
							<a href='https://www.facebook.com/profile.php?id=61571016414548' target='_blank' className='inline-block'>
								<img src={fbIcon} alt='Facebook' className='w-8 h-8' />
							</a>
						</div>
					</div>

					<div className='lg:w-1/2 order-1 xl:order-2'>
						<div className='bg-secondBg rounded-xs shadow-normal px-4 py-8 xl:px-8'>
							<h3 className='text-brownMain text-xl lg:text-2xl font-semibold text-center mb-6'>Wyślij wiadomość</h3>
							<form className='space-y-4'>
								<div>
									<label className='text-grayish text-sm mb-1 block'>Imię i nazwisko / Nazwa firmy:</label>
									<input type='text' className='w-full p-3 border border-gray-300 rounded bg-secondBg' maxLength={50} />
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<label className='text-grayish text-sm mb-1 block'>Adres e-mail:</label>
										<input
											type='email'
											className='w-full p-3 border border-gray-300 rounded bg-secondBg'
											maxLength={50}
										/>
									</div>
									<div>
										<label className='text-grayish text-sm mb-1 block'>Numer telefonu:</label>
										<div className='flex items-center border border-gray-300 rounded bg-secondBg'>
											<span className='px-3 py-3 font-medium text-grayish border-r border-gray-300'>+48</span>
											<input
												type='tel'
												className='w-full p-3 bg-secondBg focus:outline-none'
												maxLength={9}
												pattern='[0-9]*'
												onInput={e => {
													e.target.value = e.target.value.replace(/[^0-9]/g, '')
												}}
											/>
										</div>
									</div>
								</div>
								<div>
									<label className='text-grayish text-sm mb-1 block'>Treść wiadomości:</label>
									<textarea
										rows='6'
										className='w-full p-3 border border-gray-300 rounded bg-secondBg max-h-[300px] min-h-[120px]'
										maxLength={800}
										onInput={e => {
											const messageLength = document.getElementById('messageLength')
											if (messageLength) {
												messageLength.textContent = e.target.value.length
											}
										}}></textarea>
									<div className='text-xs text-grayish mt-1 text-right'>
										<span id='messageLength'>0</span>/800
									</div>
								</div>
								<button className='w-full bg-gold text-grayish py-3 rounded hover:bg-opacity-90 transition-colors'>
									Wyślij wiadomość
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
