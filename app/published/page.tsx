
import Homesearch from "@/components/home/search/Homesearch";
import QuestionItem from "@/components/question/list/QuestionItem";
import QuestionListContainer from "@/components/question/list/QuestionListContainer";
export default function Home() {
  const username = 'li'; // 替换为实际的用户名
  return (
    <div>
    <h1>已发布</h1>
 
    <QuestionListContainer url={`/api/user/${username}/topics`} />
  </div>
  );
}
