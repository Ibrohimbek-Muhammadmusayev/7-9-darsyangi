import { Route, Routes } from "react-router-dom";
import Proudcts from "../pages/products";
import Cart from "../pages/cart";

export function Routers(){
    return [
        <>
            <Routes>
                <Route path="/" element={<Proudcts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<h1>404 page not fount</h1>}/>
            </Routes>
        </>
    ]
}

export default Routers;