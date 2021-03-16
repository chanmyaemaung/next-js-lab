import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/custom.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
