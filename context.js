import { createContext, useState } from 'react';

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
	const [state, setState] = useState(['Wash the dishes']);
	return (
		<ApiContext.Provider value={{ state, setState }}>
			{children}
		</ApiContext.Provider>
	);
};

export default ApiContextProvider;
