import styled from 'styled-components'
import { Color } from '../styles/variables'
import { useEffect, useRef, useState } from 'react'
import breakpoints from '../styles/breakpoints'
import { useIsVisible } from '../hooks/useIsVisibleHook'

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	background-color: ${Color.backgroundColor.PRIMARY};
	color: ${Color.fontColor.PRIMARY};
	transition:
		top 0.3s,
		background-color 0.5s;

	display: grid;
	grid-template-rows: 10vh 1fr;
	place-items: center;
	padding: 1rem;

	.logo-wrapper {
		h1 a {
			font-size: clamp(3.2rem, 4rem, 4.8rem);
		}
	}

	a {
		color: inherit;
		text-decoration: none;
		text-underline-offset: 0.2rem;
	}

	& > div {
		display: flex;
		justify-content: space-between;
		padding: 0.25vw 5vw;
		gap: 5vw;
		width: 100%;
	}

	.navbar-menu-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		ul {
			width: inherit;
			display: flex;
			list-style: none;
			justify-content: space-evenly;
		}
		a {
			text-transform: uppercase;
			font-size: 1.6rem;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.btn-menu-mobile,
	.navbar-menu-mobile-wrapper {
		display: none;
	}

	.btn-menu-mobile {
		background-color: transparent;
		border: none;
		outline: none;
		img {
			display: block;
			width: 100%;
			max-height: 100%;
		}
	}

	@media ${breakpoints.sm} {
		.navbar-menu-wrapper {
			display: none;
		}
		.btn-menu-mobile {
			display: block;
			width: 100%;
			max-width: 4.8rem;
		}
		.navbar-menu-mobile-wrapper {
			display: grid;
			font-size: 4.8rem;
			width: 100%;
			min-height: 50vh;
			li {
				list-style: none;
				a {
					display: grid;
					place-items: center;
					padding: 1rem 0;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
`

const Header = () => {
	const [backgroundOpacity, setbackgroundOpacity] = useState(window.scrollY)
	const [menuVisible, setMenuVisible] = useState(false)
	const toggleMenu = () => setMenuVisible(!menuVisible)
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const headerRef = useRef<HTMLElement>(null)
	const btnMenuRef = useRef<HTMLButtonElement>(null)
	const menu = [
		{ href: '#about', item: 'Sobre' },
		{ href: '#skill', item: 'Habilidades' },
		{ href: '#project', item: 'Projetos' },
		{ href: '#contact', item: 'Contatos' }
	]

	useEffect(() => {
		const listener = () => {
			setbackgroundOpacity(parseFloat((window.scrollY / (window.innerHeight * 0.1)).toFixed(1)))
		}
		window.addEventListener('scroll', listener)
		return () => window.removeEventListener('scroll', listener)
	}, [])

	useEffect(() => {
		const currScrollPos = window.scrollY
		if (prevScrollPos > currScrollPos || currScrollPos == 0) {
			headerRef.current!.style.top = '0'
		} else if (!menuVisible) {
			headerRef.current!.style.top = '-20vh'
		}
		setPrevScrollPos(window.scrollY)
	}, [window.scrollY])

	return (
		<StyledHeader
			ref={headerRef}
			style={{
				backgroundColor: menuVisible ? `${Color.backgroundColor.PRIMARY}` : `rgba(0, 0, 25, ${backgroundOpacity})`
			}}>
			<div>
				<div className="logo-wrapper">
					<h1>
						<a href="#">JP</a>
					</h1>
				</div>
				<nav className="navbar-menu-wrapper">
					<ul>
						{menu.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.href}>{item.item}</a>
								</li>
							)
						})}
					</ul>
				</nav>
				<button ref={btnMenuRef} className="btn-menu-mobile" onClick={toggleMenu}>
					<img src="icons/menu.svg" alt="Menu icon" />
				</button>
			</div>
			{useIsVisible(btnMenuRef) && menuVisible && (
				<nav className="navbar-menu-mobile-wrapper">
					{menu.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.href} onClick={toggleMenu}>
									{item.item}
								</a>
							</li>
						)
					})}
				</nav>
			)}
		</StyledHeader>
	)
}

export default Header
