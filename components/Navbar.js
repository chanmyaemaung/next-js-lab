/*
 * Date & Times
 */
const date = new Date();

const currentDate = new Intl.DateTimeFormat('en-MM', {
	timeZone: 'Asia/Rangoon',
	day: '2-digit',
	month: 'short',
	year: 'numeric',
});

const currentTime = new Intl.DateTimeFormat('en-MM', {
	hour: '2-digit',
	minute: '2-digit',
	hour12: true,
});

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light sticky-top bg-light border border-white border-2'>
			<div className='container-fluid d-flex justify-content-between my-text'>
				<div className=''>{currentDate.format()}</div>
				<div className=''>2D3D</div>
				<div className=''>{currentTime.format(date)}</div>
			</div>
		</nav>
	);
}
