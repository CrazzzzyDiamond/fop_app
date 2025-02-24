import Dialog from '@/components/Dialog';
import TextInut from '@/components/TextInut';
import SelectInput from '@/components/SelectInput';
import DateInput from '@/components/DateInput';

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
                    placeholder="Enter income amount"
                    type="number"
                />
                <SelectInput placeholder="currency" options={CURRENCY_OPTIONS} />
                <DateInput placeholder="date" />
            </>
        </Dialog>
    )
}

export default NewIncomeDialog;