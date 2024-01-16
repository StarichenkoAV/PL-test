import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import { useAppDispatch } from "./store";
import { itemsCollectionActions } from "./store/itemsCollection";
import "./App.module.scss";
import { Preloader } from "./components/common/Preloader";

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

  const dispatch = useAppDispatch()

  const { startLoad } = itemsCollectionActions

  useEffect(() => {
    dispatch(startLoad())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Suspense fallback={<Preloader />}><HomePage /></Suspense>} />
        <Route path="*" element={ <Suspense fallback={<Preloader />}><NotFoundPage /></Suspense>}/>
      </Route>
    </Routes>
  );
}

export default App;
