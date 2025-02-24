import s from './textInput.module.css';

interface TextInputProps {
    placeholder: string;
    type?: string;
    step?: number;
}

const TextInput = ({ 
    placeholder,
    type = 'text',
 }: TextInputProps) => {
    return (
        <input 
            className={s.textInput}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default TextInput;