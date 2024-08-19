import { FunctionComponent } from 'react';
import styles from './Reply.module.css';
import { Question } from '@/types/Question';
interface ReplyProps {
    question: Question;
  }

const Reply:React.FC<ReplyProps> = ({ question }) => {
  	return (
    		<div className={styles.reply}>
      			<div className={styles.textField}>
        				<div className={styles.textField1}>
          					<div className={styles.stateLayer}>
            						<div className={styles.leadingIcon}>
              							<div className={styles.container}>
                								<div className={styles.stateLayer1}>
                  									<img className={styles.icon} alt="" src="/reply/pen.png" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.content}>
              							<div className={styles.labelText}>
                								<div className={styles.labelText1}>回答该提问</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.starParent}>
        				<img className={styles.starIcon} alt="" src="/reply/star.png" />
        				<div className={styles.subhead}>{question.collectCount}</div>
      			</div>
    		</div>);
};

export default Reply;
