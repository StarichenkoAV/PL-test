import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/layouts/MainLayout";
import "./App.module.scss";
import { FoodPage } from "./components/pages/FoodPage";
import { ClothesPage } from "./components/pages/ClothesPage";
import { ElectronicsPage } from "./components/pages/ElectronicsPage";

const HomePage = React.lazy(() =>
  import("./components/pages/HomePage").then(({ HomePage }) => ({
    default: HomePage,
  }))
);
const NotFoundPage = React.lazy(() =>
  import("./components/pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
