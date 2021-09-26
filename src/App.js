import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./Pages/NewQuote";
import Quote from "./Pages/Quote";
import QuotesPage from "./Pages/QuotesPage";
import NotFound from "./Pages/NotFound";

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" component={QuotesPage} exact />
        <Route path="/quotes/:quoteID" component={Quote} />
        <Route path='/quote/create' component={NewQuote} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
