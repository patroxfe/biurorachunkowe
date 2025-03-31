import { useState } from 'react'

const Newsletter = () => {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState(null) // null, 'success', 'error'

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setMessage('')

		try {
			// Tutaj normalnie byłoby połączenie z API lub serwisem mailowym
			// Dla demonstracji symulujemy opóźnienie i sukces
			await new Promise(resolve => setTimeout(resolve, 1000))

			setStatus('success')
			setMessage('Dziękujemy za zapisanie się do newslettera!')
			setEmail('')
		} catch (error) {
			setStatus(error)
			setMessage('Wystąpił błąd. Spróbuj ponownie później.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<section className='bg-mainBg py-16'>
			<div className='wrapper px-4'>
				<div className='max-w-3xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl md:text-4xl text-brownMain tracking-tight'>
						Bądź na bieżąco z <span className='font-semibold'>aktualnościami podatkowymi</span>
					</h2>
					<p className='text-grayish text-lg'>
						Zapisz się do naszego newslettera i otrzymuj najważniejsze informacje prosto na Twoją skrzynkę.
					</p>

					<form onSubmit={handleSubmit} className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
						<div className='flex-grow max-w-md'>
							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Twój adres e-mail'
								required
								className='w-full px-4 py-3 rounded-xs border border-stone-300 focus:outline-none focus:ring-2 focus:ring-gold'
							/>
						</div>
						<button
							type='submit'
							disabled={loading}
							className='bg-gold text-grayish px-6 py-3 rounded-xs hover:bg-brownMain hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed'>
							{loading ? 'Zapisywanie...' : 'Zapisz się'}
						</button>
					</form>

					{message && (
						<div className={`mt-4 text-center ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
							{message}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Newsletter
