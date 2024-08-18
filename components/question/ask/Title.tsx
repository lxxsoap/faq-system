"use client"
import { useState, FunctionComponent } from 'react';
import styles from './Title.module.css';

const Title: FunctionComponent = () => {
    const [text, setText] = useState(''); // 初始化状态为空

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value); // 更新状态
    };

    return (
        <div className={styles.listItemlistItem2Densit}>
            <div className={styles.stateLayerOverlay} />
            <div className={styles.stateLayer}>
                <div className={styles.content}>
                    <div className={styles.supportingText}>
                        <textarea 
                            className={styles.textarea} 
                            value={text} 
                            onChange={handleChange} 
                            placeholder="简单描述你需要解决的问题..." 
                        />
                        <p className={styles.blankLine}>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div className={styles.divider}>
                <div className={styles.divider1} />
            </div>
        </div>
    );
};

export default Title;
