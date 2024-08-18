
import TopAppBar from "@/components/question/ask/TopAppBar";
import Title from "@/components/question/ask/Title";
import ABCFrame from "@/components/question/ask/ABCFrame";
import Context from "@/components/question/ask/Context";
import PostButton from "@/components/question/ask/PostButton";
const placeholders = [
    '前事（A) 描述问题行为/目标行为发生前您的孩子/学生正在做什么？周围环境中发生了什么（包括周围人对孩子/学生有影响的行为）？',
    '行为 (B) 描述您的孩子/学生的问题行为/目标行为',
    '结果(C) 描述行为发生后周围环境的变化、周围人的反应/处理方式（注意：无任何反应或干预也是一种结果）。'
];

export default function Home() {

  return (
    <div>
<TopAppBar />
<Title />
<ABCFrame />
{placeholders.map((placeholder, index) => (
                <Context key={index} placeholder={placeholder} />
            ))}
<PostButton />
  </div>
  );
}
