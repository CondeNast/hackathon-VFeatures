import Homepage from "./components/homepage";
import CreateContentType from "./components/CreateContentType";
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import PDFAssetPage from "./components/PDFAssetPage";

const pages = [
  {
    pageLink: '/create/:contentType',
    view: <CreateContentType isCopilotPage={true}/>,
    displayName: 'Create Content'
  },
  {
    pageLink: '/create/:contentType/',
    view: <CreateContentType isCopilotPage={true}/>,
    displayName: 'Create Content Page'
  },
  {
    pageLink: '/self/preview/:type/',
    view: <MainPage isCopilotPage={false} />,
    displayName: 'Main Page'
  },
  {
    pageLink: '/edit/pdf/',
    view: <PDFAssetPage />,
    displayName: 'PDF Asset Page'
  },
  {
    pageLink: "/edit/pdf/:id",
    view: <PDFAssetPage />,
    displayName: 'PDF Asset Page'
  }
];

function App() {
  return (
    <Provider store={appStore}>
      <Homepage isCopilotPage={true}/>
      <Routes location={useLocation()}>
        {pages.map((page, index) => {
          return (
            <Route
              exact
              path={page.pageLink}
              element={page.view}
              key={index}
            />
          );
        })}
      </Routes>
    </Provider>
  );
}

export default App;
