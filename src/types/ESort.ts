export enum EOrder {
    DESC = "desc",
    ASC = "asc"
}

export enum ESortBy {
    PRICE = "price",
    TITLE = "title",
}

export interface ISort {
    sortBy: ESortBy;
    order: EOrder;
}