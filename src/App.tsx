import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "virtual:generated-pages-react";

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
