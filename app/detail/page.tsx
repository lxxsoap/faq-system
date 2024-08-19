
"use client";
import { useSearchParams } from 'next/navigation';
import QuestionDetail from '@/components/question/detail/QuestionDetail';
import { useEffect, useState } from 'react';
export default function Home() {
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setId(id);
    }
  }, [searchParams]);
  
  const apiUrl = id ? `/api/topic/${id}` : null;

  return (
    <div>
      <h1>问题详情</h1>
      {apiUrl && <QuestionDetail apiUrl={apiUrl} />}
    </div>
  );
}
