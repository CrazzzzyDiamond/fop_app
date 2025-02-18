import Paper from '@/components/Paper';
import Button from '@/components/Button';

const IncomesTopBar = () => {
    return (
        <Paper variant="densed">
            <div className="flex justify-between">
                <Button 
                    variant="secondary"
                    linkTo="/my-tables"
                >
                    &#8678; Back to tables list
                </Button>
                <Button variant="primary">Add income</Button>
            </div>
        </Paper>
    );
}

export default IncomesTopBar;