import CommentItem from './CommentItem';
import './CommentsList.css';

const CommentsList = (props) => {
  return (
    <ul className='comments'>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
