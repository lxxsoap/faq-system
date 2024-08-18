import { FunctionComponent } from 'react';
import styles from './Homesearch.module.css';


const Homesearch:FunctionComponent = () => {
  	return (
    		<div className={styles.homesearch}>
      			<div className={styles.title}>热门提问</div>
      			<div className={styles.searchField}>
        				<div className={styles.stateLayer}>
          					<div className={styles.leadingIcon}>
            						<div className={styles.container}>
              							<div className={styles.stateLayer1}>
                								<img className={styles.icon} alt="" src="/search/leading.png" />
              							</div>
            						</div>
          					</div>
          					<div className={styles.content}>
            						<div className={styles.supportingText}>搜索提问...</div>
          					</div>
          					<div className={styles.trailingElements}>
            						<div className={styles.leadingIcon}>
              							<div className={styles.container}>
                								<div className={styles.stateLayer1}>
                  									<img className={styles.icon} alt="" src="/search/search.png" />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Homesearch;
