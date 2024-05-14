import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import CreateContentType from "./components/CreateContentType";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import MainPage from "./components/MainPage";
import PDFAssetPage from "./components/PDFAssetPage";

const appRouter = createBrowserRouter([
  {
    path: "/Condenast/hackathon-VFeatures/",
    element: <Homepage isCopilotPage={true}/>,
    children: [
      {
        path: "/Condenast/hackathon-VFeatures/create/:contentType",
        element: <CreateContentType  isCopilotPage={true}/>,
      },
      {
        path: "/Condenast/hackathon-VFeatures/allure/preview/:type",
        element: <MainPage  isCopilotPage={false} />,
      },
      {
        path: "/Condenast/hackathon-VFeatures/edit/pdf",
        element: <PDFAssetPage />
      },
      {
        path: "/Condenast/hackathon-VFeatures/edit/pdf/:id",
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

