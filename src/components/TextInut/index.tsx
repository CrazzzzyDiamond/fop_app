import s from './textInput.module.css';

interface TextInutProps {
    placeholder: string;
    type?: string;
}

const TextInut = ({ 
    placeholder,
    type = 'text'
 }: TextInutProps) => {
    return (
        <input 
            className={s.textInput}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default TextInut;