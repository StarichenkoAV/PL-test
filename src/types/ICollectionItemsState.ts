import { IItem } from "./IItem";

export interface ICollectionItemsState {
    items: Array<IItem>,
    isLoading: boolean,
    page: number,
    // filterParams: {}
}
