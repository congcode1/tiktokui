import { gapi } from "gapi-script";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DefaultLayout } from "~/components/Layout";
import { publicRoutes } from "~/routes";
import LoginGoogle from '~/components/LoginGoogle';

function App() {

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: "970775754411-trpfcsos0eom5fs9ssav274jo6vifoqh.apps.googleusercontent.com",
        scope: "",
        plugin_name: "login"
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  return (
    <BrowserRouter>
      <LoginGoogle />
      <div className="App">
        <Routes>
          {publicRoutes.map(item => {
            const Layout = item.layout || DefaultLayout;
            const Page = item.component;

            return <Route
              key={item.path}
              path={item.path}
              element={<Layout><Page /></Layout>}
            />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
