import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import CreateContentType from "./components/CreateContentType";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import MainPage from "./components/MainPage";
import PDFAssetPage from "./components/PDFAssetPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage isCopilotPage={true}/>,
    children: [
      {
        path: "/create/:contentType",
        element: <CreateContentType  isCopilotPage={true}/>,
      },
      {
        path: "/allure/:type",
        element: <MainPage  isCopilotPage={false} />,
      },
      {
        path: "/edit/pdf/:id",
        element: <PDFAssetPage />
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

