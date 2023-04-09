import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ColumnPage, ErrorPage, MyRecord, TopPage } from "./pages";
import { Footer, Header } from "./components";

const router = createBrowserRouter([
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
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
