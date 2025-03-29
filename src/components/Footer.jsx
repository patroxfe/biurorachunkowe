import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Footer = () => {
	return (
		<footer className='bg-mainBg'>
			<div className='wrapper px-4 py-12'>
				<div className='grid md:grid-cols-4 gap-8'>
					<div>
						<Link to='/' className='block mb-4'>
							<img src={Logo} alt='Biuro Rachunkowe' className='h-12' />
						</Link>
						<p className='text-sm text-grayish'>Ewa Reluga</p>
						<p className='text-sm text-grayish'>NIP: 9471946862</p>
					</div>

					<div>
						<h3 className='text-lg font-semibold text-brownMain mb-4'>Menu</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/' className='text-grayish hover:text-brownMain transition-colors'>
									Strona główna
								</Link>
							</li>
							<li>
								<Link to='/o-nas' className='text-grayish hover:text-brownMain transition-colors'>
									O nas
								</Link>
							</li>
							<li>
								<Link to='/oferta' className='text-grayish hover:text-brownMain transition-colors'>
									Oferta
								</Link>
							</li>
							<li>
								<Link to='/cennik' className='text-grayish hover:text-brownMain transition-colors'>
									Cennik
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold text-brownMain mb-4'>Kontakt</h3>
						<ul className='space-y-2'>
							<li className='text-grayish'>Wybickiego 4/42, Grójec</li>
							<li className='text-grayish'>+48 605 541 681</li>
							<li className='text-grayish'>ewa.reluga@outlook.com</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold text-brownMain mb-4'>Dokumenty</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/polityka-prywatnosci'
									className='text-grayish hover:text-brownMain transition-colors'>
									Polityka prywatności
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-12 pt-8 border-t border-stone-400'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-sm text-grayish'>
							© {new Date().getFullYear()} Biuro Rachunkowe. Wszelkie prawa zastrzeżone.
						</p>
						<p className='text-sm text-grayish mt-4 md:mt-0'>
							Strona wykonana przez{' '}
							<a href='https://emetrica.pl' target='_blank' className='text-brownMain font-semibold hover:underline'>
								emarika.pl
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
