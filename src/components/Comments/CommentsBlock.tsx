import { useState } from 'react';
import Comment, { CommentType } from './Comment';

type Props = {
  onCommentSend: (comment: string) => void;
  comments: CommentType[];
};

export default function Comments(props: Props) {
  const { comments } = props;

  const [comment, setComment] = useState('');

  const commentsMap = comments.map((comment) => {
    return (
      <>
        <Comment comment={comment} />
      </>
    );
  });

  return (
    <>
      <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>Comments</p>
        </header>
        <div className='card-content'>
          <div className='content'>
            {commentsMap}

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder={comment}
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
              </div>
            </div>

            <div className='field is-grouped'>
              <div className='control'>
                <button
                  className='button is-info'
                  onClick={() => {
                    props.onCommentSend(comment);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
