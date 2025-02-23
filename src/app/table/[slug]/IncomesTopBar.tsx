import { useState } from 'react';
import Paper from '@/components/Paper';
import Button from '@/components/Button';
import NewIncomeDialog from './NewIncomeDialog';
import s from './incomeTable.module.css';

const IncomesTopBar = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    return (
        <>
            <Paper variant="densed">
                <div className={s.topBar}>
                    <Button 
                        variant="secondary"
                        linkTo="/my-tables"
                    >
                        &#8678; Back to tables list
                    </Button>
                    <Button 
                        variant="primary"
                        onClick={() => setIsDialogOpen(true)}
                    >Add income</Button>
                </div>
            </Paper>

            {isDialogOpen && (
                <NewIncomeDialog
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </>
    );
}

export default IncomesTopBar;