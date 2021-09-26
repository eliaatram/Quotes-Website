import './CommentItem.css';

const CommentItem = (props) => {
  return (
    <li>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
