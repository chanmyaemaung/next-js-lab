import useSWR from 'swr';
import Head from 'next/head';

let _api =
	'https://cors.chanlay.workers.dev?u=https://livechannelmm.com/3318/include/live-data.php';

// TODO: Declare Variables
let morningModern,
	morningInternet,
	morningApk,
	eveningModern,
	eveningInternet,
	eveningApk,
	afternoon,
	afternoonApk,
	evening,
	eveningApkResult;

// TODO: Updated time:
const now = new Date();
const updateTime = now.toISOString().split('T')[0];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TwoD({ twoDApi, saveApi }) {
	const { data, error } = useSWR(_api, fetcher);

	if (!data) return 'Loading...';
	if (error) return 'There is an error...';

	console.log(`${data.mm2d1}${data.mm2d2}`);

	// TODO: Destructuring Api as custom Alias
	const { set, val, mm2d1: one, mm2d2: two } = twoDApi;

	// Set Api Values - 09:30 AM
	morningModern = saveApi[5][2];
	morningInternet = saveApi[5][3];
	morningApk = saveApi[5][4];
	evening = saveApi[2][1];

	// 02:00 PM
	eveningModern = saveApi[6][2];
	eveningInternet = saveApi[6][3];
	eveningApk = saveApi[6][4];

	// 12:01 PM
	afternoon = saveApi[3][1];
	afternoonApk = saveApi[3][4];

	// 04:31 PM
	evening = saveApi[4][1];
	eveningApkResult = saveApi[4][4];

	console.log(saveApi);
	return (
		<>
			<Head>
				<title>Lottery</title>
			</Head>
			<div className='d-flex flex-row justify-content-between text-center'>
				<div className='align-items-start'>
					SET <span className='d-block'>{set}</span>
				</div>
				<div className='align-items-end'>
					VAL <span className='d-block'>{val}</span>
				</div>
			</div>
			{/* 2D RESULT */}
			<div className='mb-3'>
				<h3 className='text-info result__digit'>
					{one}
					{two}
				</h3>
				<small className='d-block text-center my-1'>
					Last Updated: {updateTime}
				</small>
			</div>
			<div className='my-1'>
				<div className='row'>
					{/* 12:01 PM */}
					<div className='col-6'>
						<div className='card card-body rounded-4 border-white border-2 shadow-sm bgGrey text-light p-1 m-0'>
							<div className='bg-light text-dark rounded'>
								<h5 className='fs-6 fw-bolder'>12:01 PM</h5>
							</div>
							<div className='d-flex p-1 flex-row justify-content-around'>
								<div className='justify-content-start'>
									<small className='fw-bold'>2D</small>
									<span className='d-block text-yellow fs-5 fw-bolder'>
										{afternoon}
									</span>
								</div>
								<div
									className='border border-1 border-right border-white'
									style={{ height: '70px' }}
								></div>
								<div className='justify-content-start'>
									<small className='fw-bold'>#APK</small>
									<span className='d-block text-yellow fs-5 fw-bolder'>
										{afternoonApk}
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* 04:31 PM */}
					<div className='col-6'>
						<div className='card card-body rounded-4 border-white border-2 shadow-sm bgGrey text-light p-1 m-0'>
							<div className='bg-light text-dark rounded'>
								<h5 className='fs-6 fw-bolder'>04:31 PM</h5>
							</div>
							<div className='d-flex p-1 flex-row justify-content-around'>
								<div className='justify-content-start'>
									<small className='fw-bold'>2D</small>
									<span className='d-block text-yellow fs-5 fw-bolder'>
										{evening}
									</span>
								</div>
								<div
									className='border border-1 border-right border-white'
									style={{ height: '70px' }}
								></div>
								<div className='justify-content-start'>
									<small className='fw-bold'>#APK</small>
									<span className='d-block text-yellow fs-5 fw-bolder'>
										{eveningApkResult}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					{/* 9:30 AM */}
					<div className='col-12 my-2'>
						<div className='d-flex flex-row justify-content-around card card-body rounded-4 border-2 border-white shadow-sm bgGrey text-light'>
							<div className='justify-content-start align-self-center'>
								9:30 AM
							</div>
							<div className='justify-content-center align-items-center'>
								<small>MODERN</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{morningModern}
								</span>
							</div>
							<div className='justify-content-center align-items-center'>
								<small>INTERNET</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{morningInternet}
								</span>
							</div>
							<div className='justify-content-center align-items-center'>
								<small>#APK</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{morningApk}
								</span>
							</div>
						</div>
					</div>
					{/* 2:00 PM */}
					<div className='col-12 my-2'>
						<div className='d-flex flex-row justify-content-around card card-body rounded-4 border-2 border-white shadow-sm bgGrey text-light'>
							<div className='justify-content-start align-self-center'>
								2:00 PM
							</div>
							<div className='justify-content-center align-items-center'>
								<small>MODERN</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{eveningModern}
								</span>
							</div>
							<div className='justify-content-center align-items-center'>
								<small>INTERNET</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{eveningInternet}
								</span>
							</div>
							<div className='justify-content-center align-items-center'>
								<small>#APK</small>
								<span className='text-center fs-5 d-block fw-bolder text-yellow'>
									{eveningApk}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
