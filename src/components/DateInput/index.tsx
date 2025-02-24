import s from './dateInput.module.css';

interface DateInputProps {
    placeholder: string;
    type?: string;
}

const DateInut = ({ 
    placeholder,
 }: DateInputProps) => {

    const handleFocus = function(e: React.FocusEvent<HTMLInputElement>) {
        e.target.showPicker()
    }

    return (
        <input 
            className={s.dateInput}
            placeholder={placeholder}
            type='date'
            onFocus={handleFocus}
        />
    )
}

export default DateInut;