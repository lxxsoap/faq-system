import NavigationBar from "@/components/common/nav/NavigationBar";
import Homesearch from "@/components/home/search/Homesearch";
import QuestionListContainer from "@/components/question/list/QuestionListContainer";
export default function Home() {

  return (
    <div>
    <h1>互助平台</h1>
    <Homesearch />
    
    <QuestionListContainer url="/api/topic/list" />
    <NavigationBar />
  </div>
  );
}
