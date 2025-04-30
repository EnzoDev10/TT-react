import '../styles/Carrito.css';
import CarritoCard from './CarritoCard';
/* 
Muestra los productos que fueron agregados al carrito.
Requiere de un valor "productos" que debe ser de tipo array, es decir, una lista de valores, en este caso deben ser de tipo object.
Solo se muestran los productos si hay al menos 1, en caso contrario, muestra un mensaje. Para esto usa el ternary operator.
Para una explicación sobre el ternary operator: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/

export default function Carrito({ productos }) {
	return (
		<div className='carrito-conteiner'>
			{productos.length > 0 ? (
				// el segundo parametro dentro de map (index) siempre deberia contener la posición del producto dentro del array productos, este valor es unico(en este componente) asi que puede ser utilizado para la key.
				productos.map((producto, index) => (
					<CarritoCard producto={producto} key={index} />
				))
			) : (
				<p>Carrito vacio</p>
			)}
		</div>
	);
}
