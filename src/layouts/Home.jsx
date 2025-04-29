import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import ProductsContainer from '../components/ProductsContainer';
/*
 */
function Home() {
	const productos = [
		{
			id: 1,
			nombre: 'Essence Mascara Lash Princess1',
			descripcion:
				'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
			precio: 9.99,
			imagen:
				'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
		},
		{
			id: 2,
			nombre: 'Eyeshadow Palette with Mirror1',
			descripcion:
				"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
			precio: 19.99,
			imagen:
				'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
		},
		{
			id: 3,
			nombre: 'Essence Mascara Lash Princess',
			descripcion:
				'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
			precio: 9.99,
			imagen:
				'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
		},
		{
			id: 4,
			nombre: 'Eyeshadow Palette with Mirror',
			descripcion:
				"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
			precio: 19.99,
			imagen:
				'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
		},
	];

	return (
		<div>
			<div>
				<Header />
				<Main />
			</div>
			<div>
				<ProductsContainer productos={productos} />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
