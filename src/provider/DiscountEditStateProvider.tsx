import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

interface TDiscountInputState {
    isEdit: boolean,
    setIsEdit: Dispatch<SetStateAction<boolean>>
}

const InputContext = createContext<TDiscountInputState | null>({isEdit: false, setIsEdit: () => null});

export default function DiscountEditStateProvider({children}: { children: ReactNode }) {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <InputContext.Provider value={{isEdit, setIsEdit}}>
            {children}
        </InputContext.Provider>
    );
}

export const useDiscountInputState = () => {
    const context = useContext(InputContext);

    if (!context) {
        throw new Error("useInputContext must be only used inside the InputProvider");
    }

    return context;
};