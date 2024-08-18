import { FunctionComponent } from 'react';
import styles from './CommentItem.module.css';


const CommentItem:FunctionComponent = () => {
  	return (
    		<div className={styles.listItemreply}>
      			<div className={styles.leadingElement}>
        				<div className={styles.buildingBlocksmonogram}>
          					<div className={styles.initial}>A</div>
        				</div>
      			</div>
      			<div className={styles.contentParent}>
        				<div className={styles.content}>
          					<div className={styles.headline}>答主</div>
          					<div className={styles.supportingText}>这是一段非常完整的回答 - 没有字数限制</div>
        				</div>
        				<div className={styles.subheadParent}>
          					<div className={styles.subhead}>2024-07-15</div>
          					<div className={styles.heartParent}>
            						<img className={styles.heartIcon} alt="" src="heart.svg" />
            						<div className={styles.subhead1}>6</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default CommentItem;
