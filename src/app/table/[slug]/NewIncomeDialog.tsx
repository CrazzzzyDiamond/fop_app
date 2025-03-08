import { useState } from 'react';
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
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState(CURRENCY_OPTIONS[2].value);

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
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <SelectInput 
                    placeholder="currency" 
                    options={CURRENCY_OPTIONS} 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
                <DateInput placeholder="date" />
            </>
        </Dialog>
    )
}

export default NewIncomeDialog;