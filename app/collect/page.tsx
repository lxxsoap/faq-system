import QuestionListContainer from "@/components/question/list/QuestionListContainer";
import NavigationBar from "@/components/common/nav/NavigationBar";
export default function Home() {
  const username = 'li'; // 替换为实际的用户名
  
  return (
    <div>
    <h1>收藏</h1>
   

<QuestionListContainer url={`/api/user/${username}/collects`} />
<NavigationBar />
  </div>
  );
}
