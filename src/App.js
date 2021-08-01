import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ViewPage from "./pages/ViewPage";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import SearchResultPage from "./pages/SearchResultPage";
import NotFound from "./pages/NotFound";
import FootNav from "./components/FootNav";

function App() {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cari" component={SearchPage} exact />
          <Route path="/cari/:keyword" component={SearchResultPage} />
          <Route path="/categories/:key" component={CategoriesPage} />
          <Route path="/view/:key" component={ViewPage} exact />
          <Route component={NotFound} />
        </Switch>
        <FootNav />
      </Router>
    </div>
  );
}

export default App;
