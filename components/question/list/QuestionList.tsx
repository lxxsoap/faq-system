"use client";  // 将组件标记为客户端组件
import React from 'react';
import QuestionItem from "@/components/question/list/QuestionItem";
import { Question } from '@/types/Question';

interface QuestionListProps {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, loading, error }) => {
  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error}</div>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;