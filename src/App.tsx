import React, { ReactNode, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import { useAppDispatch } from "./store";
import { mainCollectionActions } from "./store/mainSlice";
import "./App.module.scss";
import { Preloader } from "./components/common/Preloader";

const HomePage = React.lazy(() =>
  import("./components/pages/HomePage").then(({ HomePage }) => ({
    default: HomePage,
  }))
);
const FoodPage = React.lazy(() =>
  import("./components/pages/FoodPage").then(({ FoodPage }) => ({
    default: FoodPage,
  }))
);
const ClothesPage = React.lazy(() =>
  import("./components/pages/ClothesPage").then(({ ClothesPage }) => ({
    default: ClothesPage,
  }))
);
const ElectronicsPage = React.lazy(() =>
  import("./components/pages/ElectronicsPage").then(({ ElectronicsPage }) => ({
    default: ElectronicsPage,
  }))
);
const NotFoundPage = React.lazy(() =>
  import("./components/pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);

function App() {

  const dispatch = useAppDispatch()

  const { startLoad } = mainCollectionActions

  useEffect(() => {
    dispatch(startLoad())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSuspense = (component: ReactNode) => {
    return (
      <Suspense fallback={<div>Идёт загрузка...</div>}>{component}</Suspense>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={getSuspense(<HomePage />)} />
        <Route path="/food" element={getSuspense(<FoodPage />)} />
        <Route path="/clothing" element={getSuspense(<ClothesPage />)} />
        <Route path="/electronics" element={getSuspense(<ElectronicsPage />)} />
        <Route path="*" element={getSuspense(<NotFoundPage />)} />
      </Route>
    </Routes>
  );
}

export default App;
