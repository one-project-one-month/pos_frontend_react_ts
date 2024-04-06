import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface TInputProvider {
    input: string,
    setInput: Dispatch<SetStateAction<string>>
}

const InputContext = createContext<TInputProvider | null>({input: "", setInput: () => null});

export default function InputProvider({children}: { children: ReactNode }) {
    const [input, setInput] = useState("");

    return (
        <InputContext.Provider value={{input, setInput}}>
            {children}
        </InputContext.Provider>
    );
}

export const useInputContext = () => {
    const context = useContext(InputContext);

    if (!context) {
        throw new Error("useInputContext must be only used inside the InputProvider");
    }

    return context;
};