import { ECategory } from "./ECategory";
import { ISort } from "./ESort";
import { IItem } from "./IItem";

export interface IItemsCollectionFilter {
 category: ECategory,
 page: number,
 limit: number,
 sort: ISort
}

export interface IItemsCollectionState extends IItemsCollectionFilter {
    items: Array<IItem>,
    isLoading: boolean,
}
