import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./components/productsData/ProductsData";
import ProductDetail from "./components/productsOverview/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-bodyColor">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
