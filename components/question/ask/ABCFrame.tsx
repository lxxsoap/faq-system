"use client"
import { useState,FunctionComponent } from 'react';
import styles from './ABCFrame.module.css';
import Modal from './Modal';
const ABCFrame:FunctionComponent = () => {
    // const [isModalOpen, setModalOpen] = useState(false);

    // const openModal = () => setModalOpen(true);
    // const closeModal = () => setModalOpen(false);
  	return (
    		<div className={styles.listItemlistItem2Densit}>
      			<div className={styles.stateLayerOverlay} />
      			<div className={styles.stateLayer}>
        				<div className={styles.content}>
          					<div className={styles.headline}><span >问题发生的ABC</span>    
                              {/* <span className={styles.link} onClick={openModal}>
                            什么是ABC框架？
                        </span> */}
                               </div>
        				</div>
      			</div>
                  {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1>ABC框架解释</h1>
                <p>这里是关于ABC框架的详细解释。</p>
            </Modal> */}
    		</div>);
};

export default ABCFrame;
