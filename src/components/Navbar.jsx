import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	// Funkcja do przewijania na górę
	const scrollToTop = path => {
		if (location.pathname === path) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else {
			navigate(path)
		}
		setIsOpen(false) // Zamknij menu po kliknięciu
	}

	// Funkcja zamykająca menu
	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<nav className='bg-secondBg py-4 shadow-normal fixed w-full z-1000'>
			<div className='wrapper px-4'>
				<div className='flex items-center justify-between'>
					<button
						onClick={() => scrollToTop('/')}
						className='flex items-center tracking-tight space-x-2 cursor-pointer'>
						<img src={Logo} alt='Biuro Rachunkowe' className='h-12' />
						<div className='text-brownMain'>
							<p className='text-xl font-semibold '>Biuro rachunkowe</p>
							<p className='font-semibold text-left'>
								OnLine <span className='font-normal'>| Ewa Reluga</span>
							</p>
						</div>
					</button>

					<div className='hidden md:flex items-center space-x-8 text-sm lg:text-base'>
						<button
							onClick={() => scrollToTop('/')}
							className='text-brownMain hover:text-brownMain transition-colors font-medium cursor-pointer'>
							Strona główna
						</button>
						<Link to='/#o-mnie' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							O mnie
						</Link>
						<Link to='/#oferta' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							Oferta
						</Link>
						<Link to='/cennik' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							Cennik
						</Link>
						<Link to='/#kontakt'>
							<button className='bg-brownMain text-white px-6 py-2 rounded-xs hover:bg-gold hover:text-grayish transition-all cursor-pointer duration-300'>
								Skontaktuj się
							</button>
						</Link>
					</div>

					<button className='md:hidden text-grayish px-2' onClick={() => setIsOpen(!isOpen)}>
						<svg
							className='w-6 h-6'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							{isOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
						</svg>
					</button>
				</div>

				{isOpen && (
					<div className='md:hidden mt-4 space-y-4'>
						<button
							onClick={() => scrollToTop('/')}
							className='block text-grayish hover:text-brownMain transition-colors'>
							Strona główna
						</button>
						<Link
							to='/#o-mnie'
							className='block text-grayish hover:text-brownMain transition-colors'
							onClick={closeMenu}>
							O mnie
						</Link>
						<Link
							to='/#oferta'
							className='block text-grayish hover:text-brownMain transition-colors'
							onClick={closeMenu}>
							Oferta
						</Link>
						<Link
							to='/cennik'
							className='block text-grayish hover:text-brownMain transition-colors'
							onClick={closeMenu}>
							Cennik
						</Link>
						<Link to='/#kontakt' onClick={closeMenu}>
							<button className='w-full bg-brownMain text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors'>
								Skontaktuj się
							</button>
						</Link>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
