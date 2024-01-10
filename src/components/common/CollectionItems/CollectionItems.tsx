import { FC } from "react";
import { Item } from "./Item";

import css from "./CollectionItems.module.scss";
import { Pagination } from "../Pagination";

export const CollectionItems: FC = () => {
  const items = [
    {
      id: "001",
      title: `Эскимо`,
      imageUrl: "https://cdn1.ozone.ru/s3/multimedia-0/6531615852.jpg",
      price: 125,
      category: "food",
    },
    {
      id: "002",
      title: "Пломбир",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 99,
      category: "food",
    },
    {
      id: "003",
      title: "Еда",
      imageUrl:
        "https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI=",
      price: 200,
      category: "food",
    },
    {
      id: "004",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 205,
      category: "food",
    },
    {
      id: "005",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 500,
      category: "food",
    },
    {
      id: "006",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 550,
      category: "food",
    },
    {
      id: "007",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 205,
      category: "food",
    },
    {
      id: "008",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 205,
      category: "food",
    },
    {
      id: "009",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 25,
      category: "food",
    },
    {
      id: "010",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 1200,
      category: "food",
    },
    {
      id: "011",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 205,
      category: "food",
    },
    {
      id: "012",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 510,
      category: "food",
    },
    {
      id: "013",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 100,
      category: "food",
    },
    {
      id: "014",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 100,
      category: "food",
    },
    {
      id: "015",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 100,
      category: "food",
    },
    {
      id: "016",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 500,
      category: "food",
    },
    {
      id: "017",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 500,
      category: "food",
    },
    {
      id: "018",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 500,
      category: "food",
    },
    {
      id: "019",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 500,
      category: "food",
    },
    {
      id: "020",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 55,
      category: "food",
    },
    {
      id: "021",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 100,
      category: "food",
    },
    {
      id: "022",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 1200,
      category: "food",
    },
    {
      id: "023",
      title: "Еда",
      imageUrl:
        "https://www.auchan.ru/f/c/insecure/w:620/plain/https://www.auchan.ru/files/original/2153102",
      price: 1000,
      category: "food",
    },
    {
      id: "024",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "025",
      title: "Футболка",
      imageUrl:
        "https://4kraski.ru/assets/images/products/35386/100.31.1-max.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "026",
      title: "Футболка",
      imageUrl:
        "https://storage.vsemayki.ru/images/0/3/3157/3157673/previews/people_4_manshort_back_black_500.jpg",
      price: 1999,
      category: "clothing",
    },
    {
      id: "027",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "028",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "029",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "030",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "031",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "032",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
    {
      id: "033",
      title: "Футболка",
      imageUrl:
        "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg",
      price: 2999,
      category: "clothing",
    },
  ];

  return (
    <div className={css.component}>
      <div className={css.content}>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      {/* <Pagination currentPage={1} onChangePage={() => {}}/> */}
    </div>
  );
};
