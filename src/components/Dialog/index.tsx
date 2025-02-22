import { createPortal } from 'react-dom';
import Button from '@/components/Button';
import s from './dialog.module.css';

interface DialogProps {
    title: string;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
}

const Dialog = ({
    title,
    onClose,
    onConfirm,
    children,
}: DialogProps) => {
    return createPortal(
        <div className={s.dialogBg} onClick={onClose}>
            <div 
                className={s.dialogWrapper} 
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={s.dialogTitle}>{title}</h2>
                <div className={s.dialogContent}>
                    {children}
                </div>
                <div className={s.dialogFooter}>
                    <Button onClick={onClose} variant="secondary">Cancel</Button>
                    <Button onClick={onConfirm}>Create</Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Dialog;