import { ECategory } from "./ECategory";
import { IItem } from "./IItem";

export interface IItemsCollectionFilter {
 category: ECategory,
 page: number,
 limit: number,
 sortBy: string,
 order: string,
}

export interface IItemsCollectionState extends IItemsCollectionFilter {
    items: Array<IItem>,
    isLoading: boolean,
}
