import {create} from "zustand";
import {immer} from "zustand/middleware/immer";


type FilterState = {
    currCategory: string[];
    searchString: string;
}

type FilterAction = {
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    emptyCategory: () => void;
    setSearchString: (input: string) => void
}

type FilterStore = FilterState & FilterAction;
export const useProductFilterStore = create<FilterStore>()(
    immer((set) => ({
        currCategory: [],
        searchString: "",
        addCategory: (category: string) => (set(state => {
            state.currCategory.push(category);
        })),
        removeCategory: (category) => set(state => {
            state.currCategory = state.currCategory.filter(item => item !== category);
        }),
        emptyCategory: () => set(state => {
            state.currCategory = [];
        }),
        setSearchString: (input) => set(state => {
            state.searchString = input;
        })
    }))
);