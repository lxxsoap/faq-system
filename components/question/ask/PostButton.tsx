import { FunctionComponent } from 'react';
import styles from './PostButton.module.css';


const PostButton:FunctionComponent = () => {
  	return (
    		<div className={styles.post}>
      			<div className={styles.button}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>发布提问</div>
        				</div>
      			</div>
    		</div>);
};

export default PostButton;
