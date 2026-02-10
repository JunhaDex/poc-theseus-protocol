import * as React from "react";

interface Props {
    text: string;
}

const Button: React.FC = ({text}: Props) => {
    return (
        <div>
            <button>foo</button>
        </div>
    )
}

export default Button