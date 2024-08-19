import styles from './Header.module.css';
import { Question } from '@/types/Question';
import { useRouter } from 'next/navigation';
interface HeaderProps {
  question: Question;
}


const Header:React.FC<HeaderProps> = ({ question }) => {
	const router = useRouter();

	const handleBackClick = () => {
	  router.back(); // 回退到上一个页面
	};
  	return (
    		<div className={styles.header}>
      			<div className={styles.backAffordance} onClick={handleBackClick}>
        				<div className={styles.container}>
          					<div className={styles.stateLayer}>
            						<img className={styles.iconsarrowBack24px} alt="" src="back_button.png" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.content}>
        				<div className={styles.buildingBlocksmonogram}>
          					<div className={styles.initial}>A</div>
        				</div>
        				<div className={styles.text}>
          					<div className={styles.header1}>{question.username}</div>
        				</div>
      			</div>
    		</div>);
};

export default Header;
