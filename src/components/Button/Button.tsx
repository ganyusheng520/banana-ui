import React from 'react';

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({children, className, style, onClick}) => {
    return (
        <button className={className} style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;