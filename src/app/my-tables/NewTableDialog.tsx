import { useState } from 'react';
import Dialog from '@/components/Dialog';
import TextInut from '@/components/TextInut';
import SelectInput from '@/components/SelectInput';
import { useUser } from '@stackframe/stack';

interface NewTableDialogProps {
    onClose: () => void;
}

const YEAR_OPTIONS = [
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
]

const NewTableDialog = ({
    onClose,
}: NewTableDialogProps) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('2025');
    const [nameError, setNameError] = useState<string | null>(null);
    const user = useUser({ or: 'redirect' });

    console.log(user)

    const handleConfirm = async () => {
        if (!name) {
            setNameError('Name is required');
            return;
        }

        setNameError(null);

        try {
            const response = await fetch('/api/tables', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, year, userId: user.id }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create table');
            }
    
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Dialog
            title="New Table"
            onClose={onClose}
            onConfirm={handleConfirm}
        >
            <TextInut 
                placeholder="Enter table name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                error={nameError}
            />
            <SelectInput 
                placeholder="Select year"
                options={YEAR_OPTIONS}
                value={year}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)}
            />
        </Dialog>
    )
}

export default NewTableDialog;