import { createContext, useContext, useState, ReactNode } from "react";

interface DataContextProps {
    children: ReactNode;
}

interface DataContextValue {
    data: object | null;
    setData: (data: object | null) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export function DataProvider({ children }: DataContextProps) {
    const [data, setData] = useState<object | null>(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData(): DataContextValue {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
