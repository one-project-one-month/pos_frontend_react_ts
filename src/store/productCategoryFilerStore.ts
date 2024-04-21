import {create} from "zustand";
import {produce} from "immer";


type CategoryFilterState = {
    currCategory: string[];
}

type CategoryFilterAction = {
    addCategory: (category: string) => void;
    removeCategory: (category: string) => void;
    emptyCategory: () => void;
}

type TCategoryFilter = CategoryFilterState & CategoryFilterAction;

export const useProductCategoryFilterState = create<TCategoryFilter>()(

        (set) => ({
            currCategory: [],
            addCategory: (category: string) => set(produce(state => {
                state.currCategory.push(category);
            })),
            removeCategory: (category: string) => set(produce(state => {
                state.currCategory = state.currCategory.filter((item: string) => item !== category);
            })),
            emptyCategory: () => set(produce(state => {
                state.currCategory = []
            }))
        })
);