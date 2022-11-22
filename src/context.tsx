import React, { useState, useContext, FC } from 'react';
import sublinks, { Sublink } from './data';


export interface Coordinates {
    center: number,
    bottom: number
}

interface Props {
    children: React.ReactNode
}

interface ContextState {
    isSubmenuOpen?: boolean
    location?: Coordinates
    site?: Sublink
    openSubmenu?: (text: string, coodinates: Coordinates) => void
    closeSubmenu?: () => void
}

const AppContext = React.createContext<ContextState>({});

const AppProvider: FC<Props> = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [site, setSite] = useState<Sublink>();
    const [location, setLocation] = useState<Coordinates>({ center: 500, bottom: 200 });

    const openSubmenu = (text: string, coordinates: Coordinates) => {
        const current = sublinks.find((link) => link.page === text);
        setSite(current);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const state: ContextState = {
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        site: site,
        location,
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
