import { Link } from 'react-router-dom';
import './NoQuotesFound.css';

const NoQuotesFound = () => {
  return (
    <div className='noquotes'>
      <p>No quotes found!</p>
      <Link className='btn' to='/quote/create'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
