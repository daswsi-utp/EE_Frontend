import CommentItem from './CommentItem';

const CommentList = ({ reviews }) => {
  return (
    <div className="space-y-6">
      <div className="divide-y divide-gray-200 px-5 h-[50vh] overflow-hidden overflow-y-auto">
        {reviews.map((review, index) => (
          <CommentItem key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
