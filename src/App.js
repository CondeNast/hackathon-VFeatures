import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage";
import CreateContentType from "./components/CreateContentType";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/create/:contentType",
        element: <CreateContentType  />,
      },
    ],
  },
]);

function App() { 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

