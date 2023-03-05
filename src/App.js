import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes';
import { DefaultLayout} from './components/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            // if layout is null, use Default Layout
            // if layout is specified, use that particular layout else use Fragment
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
              console.log(Layout)
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>} >
              </Route>
            )
          })}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
