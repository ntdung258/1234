import React, { useState } from 'react';
import { TComment } from '../../../types';
import { format } from 'date-fns';

export type CommentsProps = {
  comments: TComment[];
};

const Comments: React.FC<CommentsProps> = ({ comments }: CommentsProps) => {
  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const handleToggleExpand = (index: number) => {
    if (expandedComments.includes(index)) {
      setExpandedComments(expandedComments.filter((item) => item !== index));
    } else {
      setExpandedComments([...expandedComments, index]);
    }
  };

  return (
    <div className="row">
      <h3 className="mb-5">Comments</h3>
      {comments.slice(0, 4).map((comment, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-2 mb-3">
            <img
              src={`https://image.tmdb.org/t/p/w500${comment.author_details.avatar_path}`}
              alt=""
              className="rounded-circle"
              style={{ width: '128px', height: '128px' }}
            />
          </div>
          <div className="col-md-10 mb-3">
            <h5>{comment.author}</h5>
            {/* Chuyển đổi định dạng ngày tháng */}
            <p>{format(new Date(comment.created_at), 'dd/MM/yyyy')}</p>
            <span>
              {expandedComments.includes(index)
                ? comment.content
                : comment.content.slice(0, 200) + '...'}
            </span>
            <br></br>
            <button className="btn btn-info mt-2" onClick={() => handleToggleExpand(index)}>
              {expandedComments.includes(index) ? 'Collapse' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;