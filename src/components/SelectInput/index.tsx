import s from './selectInput.module.css'

interface Option {
    value: string;
    label: string;
}

interface SelectInputProps {
    placeholder: string;
    options: Option[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ 
    options, 
    value, 
    onChange,
}: SelectInputProps) => {
    return (
        <select 
            className={s.selectInput}
            onChange={onChange}
            value={value}
        >
            {options.map((option) => (
                <option 
                    key={option.value} 
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default SelectInput