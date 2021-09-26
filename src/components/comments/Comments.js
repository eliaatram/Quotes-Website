import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useCallback } from 'react';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const params = useParams();

  const { quoteID } = params;

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleAddedComment = useCallback(() => {
    sendRequest(quoteID);
  }, [quoteID, sendRequest])

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet</p>
  }

  return (
    <section className='comments'>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteID={quoteID} onAddedComment={handleAddedComment} />}
      {comments}
    </section>
  );
};

export default Comments;
