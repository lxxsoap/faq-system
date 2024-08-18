import { FunctionComponent } from 'react';
import styles from './Modal.module.css';

//在一个页面上进行弹窗的组件
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
