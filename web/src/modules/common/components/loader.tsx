import React from "react";

interface ComponentProps {
    text: string
}

const Loader: React.FC<ComponentProps> = ({text}) => {
    return (
        <div className="text-center spinner">
            <div className="spinner-border" role="status"/>
            <p>{text}...</p>
        </div>
    )
}
export default Loader