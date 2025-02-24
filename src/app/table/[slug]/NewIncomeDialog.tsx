import Dialog from '@/components/Dialog';
import TextInut from '@/components/TextInut';
import SelectInput from '@/components/SelectInput';

interface NewIncomeDialogProps {
    onClose: () => void;
}

const CURRENCY_OPTIONS = [
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
    { value: 'uah', label: 'UAH' },
]

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
                <SelectInput placeholder="currency" options={CURRENCY_OPTIONS} />
                <input type="date" min="2025-01-01" max="2025-02-22" />
            </>
        </Dialog>
    )
}

export default NewIncomeDialog;