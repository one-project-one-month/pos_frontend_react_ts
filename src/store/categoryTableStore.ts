import {ColumnFiltersState} from "@tanstack/react-table";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type CategoryTableState = {
    columnFilters : ColumnFiltersState,
}

type CategoryTableAction = {
    setColumnFilters : (payload: ColumnFiltersState) => void
}

type CategoryTableStore = CategoryTableState & CategoryTableAction;

const useCategoryTableStore = create<CategoryTableStore>()(
    immer((set) => ({
        columnFilters: [],
        setColumnFilters: (payload) => (set(state => {state.columnFilters = payload}))
    }))
)