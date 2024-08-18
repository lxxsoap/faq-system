"use client"
import { useState, FunctionComponent } from 'react';
import styles from './Context.module.css';

interface ListItemProps {
    placeholder: string;
}

const Context: FunctionComponent<ListItemProps> = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState(''); // 管理输入框内容的状态

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value); // 更新状态值
    };

    return (
        <div className={styles.listItemlistItem0Density}>
            <div className={styles.stateLayerOverlay} />
            <div className={styles.stateLayer}>
                <div className={styles.content}>
                    <div className={styles.supportingText}>
                        <textarea
                            className={styles.input} // 自定义样式类
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder={placeholder} // 使用传入的 placeholder
                        />
                    </div>
                </div>
            </div>
            <div className={styles.divider}>
                <div className={styles.divider1} />
            </div>
        </div>
    );
};

export default Context;
