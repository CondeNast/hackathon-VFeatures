import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import CreateContentType from "./components/CreateContentType";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import MainPage from "./components/MainPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/create/:contentType",
        element: <CreateContentType  />,
      },
      {
        path: "/allure/:type",
        element: <MainPage />,
      }
    ],
  },
]);

function App() { 
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

