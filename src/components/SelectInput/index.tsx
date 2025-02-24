import s from './selectInput.module.css'

interface Option {
    value: string;
    label: string;
}

interface SelectInputProps {
    placeholder: string;
    options: Option[];
}

const SelectInput = ({ options }: SelectInputProps) => {
    return (
        <select className={s.selectInput}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default SelectInput