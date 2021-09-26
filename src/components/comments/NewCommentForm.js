import { useRef } from 'react';
import './NewCommentForm.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useEffect } from 'react';

const NewCommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(addComment);

  const commentTextRef = useRef();

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const text = commentTextRef.current.value;

    // optional: Could validate here

    sendRequest({ commentData: { text: text }, quoteID: props.quoteID });
  };


  return (
    <form onSubmit={submitFormHandler}>
      {status === 'pending' &&
        <div className="centered">
          <LoadingSpinner />
        </div>}
      <div className='control' onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className='actions'>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
