import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ColumnPage, ErrorPage, MyRecord, TopPage } from "./pages";
import { Footer, Header } from "./components";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const ErrorLayout = () => (
  <>
    <Header />
    <ErrorPage />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <TopPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-record",
        element: <MyRecord />,
      },
      {
        path: "/column-page",
        element: <ColumnPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
