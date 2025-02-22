import Dialog from '@/components/Dialog';
import TextInut from '@/components/TextInut';

interface NewTableDialogProps {
    onClose: () => void;
}

const NewTableDialog = ({
    onClose,
}: NewTableDialogProps) => {
    return (
        <Dialog
            title="New Table"
            onClose={onClose}
            onConfirm={() => {}}
        >
            <TextInut 
                placeholder="Enter table name"
            />
        </Dialog>
    )
}

export default NewTableDialog;