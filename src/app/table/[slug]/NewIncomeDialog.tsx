import Dialog from '@/components/Dialog';
import TextInut from '@/components/TextInut';

interface NewIncomeDialogProps {
    onClose: () => void;
}

const NewIncomeDialog = ({
    onClose,
}: NewIncomeDialogProps) => {
    return (
        <Dialog
            title="New Income"
            onClose={onClose}
            onConfirm={() => {}}
        >
            <>
                <TextInut 
                    placeholder="Enter table name"
                />
                <TextInut 
                    placeholder="Enter table name"
                />
                <TextInut 
                    placeholder="Enter table name"
                />
                <input type="date" min="2025-01-01" max="2025-02-22" />
            </>
        </Dialog>
    )
}

export default NewIncomeDialog;