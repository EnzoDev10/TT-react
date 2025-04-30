import '../styles/Carrito.css';

function CarritoCard({ producto, funcionCarrito }) {
	function agregarAlCarrito() {
		console.log('Paso 1');
		funcionCarrito(producto);
	}

	return (
		<div className='carrito-card'>
			<h3 className='carrito-titulo' style={{ color: 'black' }}>
				{producto.name}
			</h3>
			{
				<p className='descripcion-carrito' style={{ color: 'black' }}>
					{producto.description}
				</p>
			}
			<img className='carrito-image' src={producto.imagen}></img>
			<p style={{ color: 'black' }}>{producto.price} $</p>
			<button
				className='boton-carrito'
				onClick={agregarAlCarrito}
				style={{ backgroundColor: 'red', color: 'black' }}
			>
				X
			</button>
		</div>
	);
}

export default CarritoCard;
