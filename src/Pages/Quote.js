import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { quotesData } from '../data/quotesData';

const Quote = () => {
    const match = useRouteMatch();

    const params = useParams();

    const quote = quotesData.find(quote => quote.id === params.quoteID);

    if (!quote) {
        return <NoQuotesFound />
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`} component={Comments}></Route>
        </>
    )
}

export default Quote
