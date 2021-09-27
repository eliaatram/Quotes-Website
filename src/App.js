import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import QuotesPage from "./Pages/QuotesPage";

const NewQuote = React.lazy(() => import('./Pages/NewQuote'));
const Quote = React.lazy(() => import('./Pages/Quote'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));

function App(props) {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" component={QuotesPage} exact />
          <Route path="/quotes/:quoteID" component={Quote} />
          <Route path='/quote/create' component={NewQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
