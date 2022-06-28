import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart"));
const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */ "./pages/NotFoundPage"));
const PizzaPage = React.lazy(() => import(/* webpackChunkName: "PizzaPage" */ "./pages/PizzaPage"));




function App() {

  return (
         <Routes>
             <Route path='/' element={<MainLayout />}>
                 <Route path='' element={<Home />} />
                 <Route path='cart' element={
                     <React.Suspense fallback={'Загрузка компонента Cart...'}>
                         <Cart />
                     </React.Suspense>
                 } />
                 <Route path='*' element={
                     <React.Suspense fallback={'Загрузка компонента NotFoundPage...'}>
                         <NotFoundPage />
                     </React.Suspense>
                 } />
                 <Route path='pizzas/:id' element={
                     <React.Suspense>
                         <PizzaPage />
                     </React.Suspense>
                 } />
             </Route>
         </Routes>
  );
}

export default App;
