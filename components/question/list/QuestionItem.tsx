"use client";  // 将组件标记为客户端组件
import React, { FunctionComponent, memo, useCallback } from 'react';
import styles from './Questionitem.module.css';
import { Question } from '@/types/Question';

interface QuestionItemProps {
  question: Question;
  showFullContent: boolean; // 新增属性
}

const QuestionItem: FunctionComponent<QuestionItemProps> = ({ question, showFullContent }) => {
  const onListItemContainerClick = useCallback(() => {
    // 点击事件处理逻辑
  }, [question]);

  return (
    <div className={styles.listItem} onClick={onListItemContainerClick}>
      <div className={styles.headlineWrapper}>
        <div className={styles.headline}>
          <div className={styles.title}>{question.title}</div>
          <div className={styles.subhead}>
            {question.tags && question.tags.length > 0 ? ( // 检查 tags 是否存在且不为空
              question.tags.map((tag) => ( // 遍历标签
                <div key={tag.id} className={styles.tag}>
                  #{tag.name}
                </div>
              ))
            ) : (
              <div className={styles.noTags}>无主题</div> // 如果没有标签，显示提示信息
            )}
          </div>
        </div>
      </div>
      <div className={styles.supportingText}>
        {showFullContent ? question.content : `${question.content.slice(0, 20)}...`}
      </div>
      <div className={styles.stateLayerOverlay} />
      <div className={styles.stateLayer}>
        <div className={styles.leadingElement}>
          <div className={styles.buildingBlocksmonogram}>
            <div className={styles.initial}>A</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.headline1}>{question.username}</div>
          <div className={styles.subhead1}>已解决</div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.divider1} />
      </div>
    </div>
  );
};

export default memo(QuestionItem);