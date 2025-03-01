import s from './textInput.module.css';

interface TextInputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    step?: number;
    error?: string | null;
}

const TextInput = ({ 
    placeholder,
    type = 'text',
    error,
    value,
    onChange,
 }: TextInputProps) => {
    return (
        <>
            <input 
                className={s.textInput}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />

            {error && (
                <div className={s.error}>
                    {error}
                </div>
            )}
        </>
    )
}

export default TextInput;