"use client";  // 将组件标记为客户端组件
import React, { useEffect, useReducer } from 'react';
import { getQuestions } from '../../../services/QuestionAPI';
import QuestionList from '@/components/question/list/QuestionList';
import { Question } from '../../../types/Question';


interface State {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'FETCH_SUCCESS'; payload: Question[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_START' };

const initialState: State = {
  questions: [],
  loading: true,
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, questions: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

interface QuestionListContainerProps {
  url: string;
}

const QuestionListContainer: React.FC<QuestionListContainerProps> = ({ url }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await getQuestions(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        if (err instanceof Error) {
          dispatch({ type: 'FETCH_ERROR', payload: err.message });
        } else {
          dispatch({ type: 'FETCH_ERROR', payload: '未知错误' });
        }
      }
    };

    fetchQuestions();
  }, [url]);

  return (
    <QuestionList
      questions={state.questions}
      loading={state.loading}
      error={state.error}
    />
  );
};

export default QuestionListContainer;