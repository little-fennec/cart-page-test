import React from 'react';

interface ContextState {
    name: string | null;
}

const StoreServiceContext = React.createContext<any>({} as ContextState);

export default StoreServiceContext;