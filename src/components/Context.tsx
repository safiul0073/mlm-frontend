'use client';
import { createContext, useContext, useState } from 'react';

const defaultContextValue = {
	isHamburgerOpen: true,
	setIsHamburgerOpen: (value: boolean) => false,
};

const context = createContext<{
	isHamburgerOpen: boolean;
	setIsHamburgerOpen: (value: boolean) => any;
}>(defaultContextValue);

export const ContextProvider: React.FC<{
	children?: React.ReactNode;
}> = ({ children }) => {
	const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(true);

	return (
		<context.Provider
			value={{
				isHamburgerOpen,
				setIsHamburgerOpen,
			}}>
			{children}
		</context.Provider>
	);
};

export const useProviderContext = () => useContext(context);
