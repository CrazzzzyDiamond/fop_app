interface PaperProps {
    children: React.ReactNode;
}

const Paper = ({
    children,
}: PaperProps) => {
    return (
        <div className="p-8 bg-white shadow-md rounded-md">
            {children}
        </div>
    )
}

export default Paper;