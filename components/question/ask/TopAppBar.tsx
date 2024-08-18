import { FunctionComponent } from 'react';
import styles from './TopAppBar.module.css';


const TopAppBar:FunctionComponent = () => {
  	return (
    		<div className={styles.topAppBar}>
      			<div className={styles.leadingIcon}>
        				<div className={styles.container}>
          					<div className={styles.stateLayer}>
            						
          					</div>
        				</div>
      			</div>
      			<div className={styles.headline}>问题概述</div>
      			<div className={styles.trailingIcon} />
    		</div>);
};

export default TopAppBar;
