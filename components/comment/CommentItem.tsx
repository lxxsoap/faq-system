import styles from './CommentItem.module.css';
import { Comment } from '@/types/Question';
import { format } from 'date-fns';
interface ReplyProps {
    comment: Comment;
  }
const CommentItem:React.FC<ReplyProps> = ({ comment }) => {
	const formattedDate = format(new Date(comment.inTime), 'yyyy-MM-dd');
  	return (
    		<div className={styles.listItemreply}>
      			<div className={styles.leadingElement}>
        				<div className={styles.buildingBlocksmonogram}>
          					<div className={styles.initial}>A</div>
        				</div>
      			</div>
      			<div className={styles.contentParent}>
        				<div className={styles.content}>
          					<div className={styles.headline}>{comment.username}</div>
          					<div className={styles.supportingText}>{comment.content}</div>
        				</div>
        				<div className={styles.subheadParent}>
          					<div className={styles.subhead}>{formattedDate}</div>
          					<div className={styles.heartParent}>
            						<img className={styles.heartIcon} alt="" src="heart.png" />
            						<div className={styles.subhead1}>{comment.likeCount}</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default CommentItem;
