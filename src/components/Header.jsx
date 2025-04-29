function Header() {
	return (
		<header
			style={{
				backgroundColor: '#4CAF50',
				padding: '10px',
				textAlign: 'center',
				color: 'white',
			}}
		>
			{/* Todo el contenido de este nav y el mismo correspondia al componente llamado Nav.jsx, lo pase aca por que me parecia que tenia mas sentido a futuro. */}
			<nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
				<ul
					style={{
						listStyle: 'none',
						display: 'flex',
						justifyContent: 'space-around',
						margin: 0,
					}}
				>
					<li>
						<a href='#' style={{ color: 'white', textDecoration: 'none' }}>
							Inicio
						</a>
					</li>
					<li>
						<a href='#' style={{ color: 'white', textDecoration: 'none' }}>
							Acerca de
						</a>
					</li>
					<li>
						<a href='#' style={{ color: 'white', textDecoration: 'none' }}>
							Contacto
						</a>
					</li>
				</ul>
			</nav>

			<h1>Bienvenidos a mi App React</h1>
		</header>
	);
}

export default Header;
