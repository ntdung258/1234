import React from 'react';
import { TComment } from '../../../types';
import styles from './Detail.module.scss';

export type Comments = {
    comments: TComment[];
};

const Comments: React.FC<Comments> = ({ comments }: Comments) => {
    return (
        <div className="row">
            <h3 className='mb-5'>Comments</h3>    
            {comments.slice(0, 4).map((comment) => (
                <>
                    <div className="col-md-2 mb-3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${comment.author_details.avatar_path}`}
                            alt=""
                            className="rounded-circle"
                            style={{ width: '128px', height: '128px' }}
                        />
                    </div><div className="col-md-10 mb-3">
                        <h5>{comment.author}</h5>
                        <span className={`${styles.commentContent}`}>{comment.content}</span>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Comments;
