import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
	return (
		<>
			<div className='container-sm'>
				<div className='row'>
					<div className='col-md-6 offset-md-3 d-flex flex-column'>
						<Navbar />
						<Banner />
						{children}
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
