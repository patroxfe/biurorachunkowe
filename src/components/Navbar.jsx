import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className='bg-secondBg py-4 shadow- fixed w-full z-1000'>
			<div className='wrapper px-4'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='flex items-center tracking-tight space-x-2'>
						<img src={Logo} alt='Biuro Rachunkowe' className='h-12' />
						<div className='text-brownMain'>
							<p className='text-xl font-semibold '>Biuro rachunkowe</p>
							<p className='font-semibold'>
								OnLine <span className='font-normal'>| Ewa Reluga</span>
							</p>
						</div>
					</Link>

					{/* Desktop Menu */}
					<div className='hidden md:flex items-center space-x-8'>
						<Link to='/' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							Strona główna
						</Link>
						<Link to='/o-nas' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							O mnie
						</Link>
						<Link to='/oferta' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							Oferta
						</Link>
						<Link to='/cennik' className='text-brownMain hover:text-brownMain transition-colors font-medium'>
							Cennik
						</Link>
						<button className='bg-brownMain text-white px-6 py-2 rounded-xs hover:bg-gold hover:text-grayish transition-all cursor-pointer duration-300'>
							Skontaktuj się
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button className='md:hidden text-grayish' onClick={() => setIsOpen(!isOpen)}>
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

				{/* Mobile Menu */}
				{isOpen && (
					<div className='md:hidden mt-4 space-y-4'>
						<Link to='/' className='block text-grayish hover:text-brownMain transition-colors'>
							Strona główna
						</Link>
						<Link to='/o-nas' className='block text-grayish hover:text-brownMain transition-colors'>
							O mnie
						</Link>
						<Link to='/oferta' className='block text-grayish hover:text-brownMain transition-colors'>
							Oferta
						</Link>
						<Link to='/cennik' className='block text-grayish hover:text-brownMain transition-colors'>
							Cennik
						</Link>
						<button className='w-full bg-brownMain text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors'>
							Skontaktuj się
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
