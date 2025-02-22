import { createPortal } from 'react-dom';

import Button from '@/components/Button';

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
        <div
            className="fixed inset-0  flex justify-center items-center z-20"
        >
            <div 
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={onClose}
             />
            <div className="bg-white p-8 rounded-md shadow-md z-10">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div className="mb-4">
                    {children}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <Button onClick={onClose} variant="secondary">Cancel</Button>
                    <Button onClick={onConfirm}>Create</Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Dialog;