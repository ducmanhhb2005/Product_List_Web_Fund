import React from 'react';
import './App.css';
import Layout from './components/Layout';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<ProductListPage/>}/>
        <Route path="product/:productID" element={<ProductDetailPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
