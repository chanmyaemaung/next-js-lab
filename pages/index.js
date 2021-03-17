import TwoD from '../components/TwoD';

// TODO: Declare Variables
let _corsUrl = 'https://cors.chanlay.workers.dev?u=';
let _liveResult = 'https://livechannelmm.com/3318/include/live-data.php';
let _localTxt = 'https://livechannelmm.com/3318/local-data.txt';

export default function Home({ twoDApi, retrieveData }) {
	console.log(twoDApi);

	return (
		<main className='text-center mt-1 border border-white shadow-sm rounded bg-light'>
			<TwoD twoDApi={twoDApi} saveApi={retrieveData} />
		</main>
	);
}

// TODO: 2D Live API
export async function getServerSideProps() {
	const [twoDApiRes, saveApiRes] = await Promise.all([
		fetch(_liveResult),
		fetch(_localTxt),
	]);

	const [twoDApi, saveApi] = await Promise.all([
		twoDApiRes.json(),
		saveApiRes.text(),
	]);

	// Regex
	let csv_data = saveApi.split(/\r?\n|\r/);

	// Loop through
	const retrieveData = csv_data.map((el) => {
		let cell_data = el.split(',');

		return cell_data;
	});

	return { props: { twoDApi, retrieveData }, revalidate: 1 };
}
