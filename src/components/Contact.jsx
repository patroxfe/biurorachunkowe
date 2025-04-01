import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import phoneIcon from '../assets/icons/phoneIcon.svg';
import mailIcon from '../assets/icons/mailIcon.svg';
import locationIcon from '../assets/icons/locationIcon.svg';
import timeIcon from '../assets/icons/timeIcon.svg';
import fbIcon from '../assets/icons/fbIcon.svg';
import axios from 'axios';

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
};

export default function Contact() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');
	const [showPopup, setShowPopup] = useState({ show: false, message: '' });
	// const [recap, setRecap] = useState(null);
	const [countdown, setCountdown] = useState(3);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let timer;
		if (showPopup.show) {
			setCountdown(3); // Reset countdown
			timer = setInterval(() => {
				setCountdown((prevCountdown) => {
					if (prevCountdown <= 1) {
						clearInterval(timer);
						setShowPopup({ show: false, message: '' });
						return 0;
					}
					return prevCountdown - 1;
				});
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [showPopup.show]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log('działa');

		if (!validateName(firstName)) {
			setShowPopup({ show: true, message: 'Nieprawidłowe imię i nazwisko.' });
			return;
		}
		if (!validateEmail(email)) {
			setShowPopup({
				show: true,
				message: 'Nieprawidłowy adres e-mail. Spróbuj ponownie.',
			});
			return;
		}

		try {
			setIsLoading(true);
			const formData = new FormData();
			formData.append('firstName', firstName);
			formData.append('email', email);
			formData.append('phone', phone);
			formData.append('description', description);

			await axios.post('/form-handler.php', formData);

			setTimeout(() => {
				setIsLoading(false);
				setShowPopup({
					show: true,
					message: 'Dane zostały wysłane pomyślnie!',
				});
			}, 1000);

			// Resetowanie stanu
			setFirstName('');
			setEmail('');
			setPhone('');
			setDescription('');

			// // Resetowanie reCAPTCHA
			// if (window.grecaptcha) {
			// 	window.grecaptcha.reset();
			// }
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			console.log(`wystąpił błąd: ${error}`);
			setIsLoading(false);
			setShowPopup({
				show: true,
				message:
					'Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie później.',
			});
		}
	};

	const validateName = (name) => /[a-zA-Z]/.test(name);
	const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

	return (
		<section id='kontakt' className='bg-secondBg py-16'>
			<div className='wrapper px-4'>
				<p className='text-sm text-brownMain text-center'>Dane kontaktowe</p>
				<h2 className='text-3xl font-semibold text-brownMain text-center mb-8'>
					Skontaktuj się
				</h2>

				<div className='flex flex-col lg:flex-row gap-8'>
					<div className='lg:w-1/2 order-2 xl:order-1'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
							{contactData.contactInfo.map((info, index) => (
								<div
									key={index}
									className='bg-secondBg rounded-xs shadow-normal p-6 flex flex-col items-center text-center'
								>
									<div className='mb-4'>
										<img src={info.icon} alt={info.title} className='w-8 h-8' />
									</div>
									<h3 className='text-brownMain font-semibold mb-1 text-lg'>
										{info.title}
									</h3>
									<p className='text-grayishSecondary text-sm'>{info.value}</p>
								</div>
							))}
						</div>

						<div className='mt-8 '>
							<p className='text-grayishSecondary text-base mb-3'>
								Znajdziesz mnie również:
							</p>
							<a
								href='https://www.facebook.com/profile.php?id=61571016414548'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-block'
							>
								<img src={fbIcon} alt='Facebook' className='w-8 h-8' />
							</a>
						</div>
					</div>

					<div className='lg:w-1/2 order-1 xl:order-2'>
						<div className='bg-secondBg rounded-xs shadow-normal px-4 py-8 xl:px-8'>
							<h3 className='text-brownMain text-xl lg:text-2xl font-semibold text-center mb-6'>
								Wyślij wiadomość
							</h3>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div>
									<label
										htmlFor='name'
										className='text-grayish text-sm mb-1 block'
									>
										Imię i nazwisko / Nazwa firmy:
									</label>
									<input
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										id='name'
										name='name'
										type='text'
										required
										className='w-full p-3 border border-gray-300 rounded bg-secondBg'
										maxLength={50}
										aria-label='Imię i nazwisko lub nazwa firmy'
										placeholder='Imię i nazwisko lub nazwa firmy'
									/>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<label
											htmlFor='email'
											className='text-grayish text-sm mb-1 block'
										>
											Adres e-mail:
										</label>
										<input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											id='email'
											name='email'
											type='email'
											required
											className='w-full p-3 border border-gray-300 rounded bg-secondBg'
											maxLength={50}
											aria-label='Adres email'
											placeholder='example@gmail.com'
										/>
									</div>
									<div>
										<label
											htmlFor='phone'
											className='text-grayish text-sm mb-1 block'
										>
											Numer telefonu:
										</label>
										<div className='flex items-center border border-gray-300 rounded bg-secondBg'>
											<span className='px-3 py-3 font-medium text-grayish border-r border-gray-300'>
												+48
											</span>
											<input
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												id='phone'
												name='phone'
												type='text'
												className='w-full p-3 bg-secondBg focus:outline-none'
												maxLength={9}
												pattern='[0-9]*'
												aria-label='Numer telefonu'
												placeholder='123456789'
												onInput={(e) => {
													e.target.value = e.target.value.replace(
														/[^0-9]/g,
														''
													);
												}}
											/>
										</div>
									</div>
								</div>
								<div>
									<label
										htmlFor='message'
										className='text-grayish text-sm mb-1 block'
									>
										Treść wiadomości:
									</label>
									<textarea
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										id='description'
										name='description'
										rows='6'
										className='w-full p-3 border border-gray-300 rounded bg-secondBg max-h-[300px] min-h-[120px]'
										maxLength={800}
										aria-label='Treść wiadomości'
										placeholder='Treść wiadomości...'
										required
										onInput={(e) => {
											const messageLength =
												document.getElementById('messageLength');
											if (messageLength) {
												messageLength.textContent = e.target.value.length;
											}
										}}
									></textarea>
									<div className='text-xs text-grayish mt-1 text-right'>
										<span id='messageLength'>0</span>/800
									</div>
								</div>
								{/* ReCaptcha tutej */}
								<button
									// disabled={!recap} do ReCaptchy
									type='submit'
									className='w-full bg-gold text-grayish py-3 rounded hover:bg-opacity-90 transition-colors'
									aria-label='Wyślij wiadomość'
								>
									Wyślij wiadomość
								</button>
							</form>
							{isLoading ? (
								<div className='fixed top-0 left-0 bg-black bg-opacity-1/2 w-screen h-screen flex items-center justify-center'>
									<RingLoader
										color='#00b2ff'
										loading
										size={200}
										speedMultiplier={1}
									/>
								</div>
							) : (
								''
							)}
							{showPopup.show && (
								<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
									<div className='bg-white p-6 rounded-lg shadow-lg text-center'>
										<p className='mb-4 text-black text-xl'>
											{showPopup.message}
										</p>
										<p className='text-black'>
											Okno zamknie się za: {countdown} sekund
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
