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
            className="
            w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none 
            focus:border-blue-500 mb-5
            "
            placeholder={placeholder}
            type={type}
        />
    )
}

export default TextInut;