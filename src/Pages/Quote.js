import React from 'react';
import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const Quote = () => {
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    const match = useRouteMatch();
    const params = useParams();

    useEffect(() => {
        sendRequest(params.quoteID);
    }, [params.quoteID, sendRequest]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (!loadedQuote.text) {
        return <NoQuotesFound />
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
