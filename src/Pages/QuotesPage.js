import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
import { quotesData } from '../data/quotesData'

const QuotesPage = () => {
    return (
        <QuoteList quotes={quotesData} />
    )
}

export default QuotesPage
