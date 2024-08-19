"use client";  // 将组件标记为客户端组件
import { FunctionComponent } from 'react';
import { usePathname,useRouter } from 'next/navigation';
import styles from './NavigationBar.module.css';


const NavigationBar:FunctionComponent = () => {
	const router = useRouter();
	const pathname = usePathname(); // 获取当前路径
    
	const isActive = (path: string) => {
        return pathname === path;
    };
	return (
        <div className={styles.navigationBar5}>
            <div className={styles.navigationBar}>
                <div className={styles.segment1} onClick={() => router.push('/')}>
                    <div className={`${styles.iconContainer} ${isActive('/') ? styles.activeIcon : ''}`}>
                        <div className={styles.stateLayer}>
                            <img className={styles.icon} alt="" src="/nav/nav_home.png" />
                        </div>
                    </div>
                    <div className={styles.labelText}>首页</div>
                </div>
                <div className={styles.segment2} onClick={() => router.push('/collect')}>
                    <div className={`${styles.iconContainer1} ${isActive('/collect') ? styles.activeIcon : ''}`}>
                        <div className={styles.stateLayer}>
                            <img className={styles.icon1} alt="" src="/nav/nav_like.png" />
                        </div>
                    </div>
                    <div className={styles.labelText1}>收藏</div>
                </div>
                <div className={styles.segment2} onClick={() => router.push('/ask')}>
                    <div className={`${styles.iconContainer2} ${isActive('/ask') ? styles.activeIcon : ''}`}>
                        <div className={styles.stateLayer2}>
                            <img className={styles.icon2} alt="" src="/nav/nav_ask.png" />
                        </div>
                    </div>
                    <div className={styles.labelText1}>提问</div>
                </div>
                <div className={styles.segment4} onClick={() => router.push('/published')}>
                    <div className={`${styles.iconContainer3} ${isActive('/published') ? styles.activeIcon : ''}`}>
                        <div className={styles.stateLayer3}>
                            <img className={styles.icon3} alt="" src="/nav/nav_published.png" />
                        </div>
                      
                        {//角标 提示信息数量的小圆点
                        /* <div className={styles.badge}>
                            <div className={styles.badgeLabel}>3</div>
                        </div> */}
                    </div>
                    <div className={styles.labelText3}>已发布</div>
                </div>
                <div className={styles.segment5} onClick={() => router.push('/profile')}>
                    <div className={`${styles.iconContainer1} ${isActive('/profile') ? styles.activeIcon : ''}`}>
                        <div className={styles.stateLayer}>
                            <div className={styles.icon4}>
                                <div className={styles.initial}>A</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.labelText3}>我的</div>
                </div>
            </div>
        </div>
    );
};


export default NavigationBar;
