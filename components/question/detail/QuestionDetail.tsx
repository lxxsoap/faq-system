import React, { useEffect, useState } from 'react';
import Header from './Header';
import QuestionItem from '../list/QuestionItem';
import Reply from './Reply';
import CommentItem from '@/components/comment/CommentItem';
import { getQuestionDetail } from '@/services/QuestionAPI';
import { Question } from '@/types/Question';
import styles from './QuestionDetail.module.css';

interface QuestionDetailProps {
  apiUrl: string;
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({ apiUrl }) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data = await getQuestionDetail(apiUrl);
        setQuestion(data);
      } catch (err) {
        setError('Failed to fetch question details');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.questionDetail}>
      {question && (
        <>
          <Header question={question} />
          <QuestionItem question={question} showFullContent={true} />
          <div className={styles.commentsSection}>
            {question.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
          <Reply question={question} />
        </>
      )}
    </div>
  );
};

export default QuestionDetail;