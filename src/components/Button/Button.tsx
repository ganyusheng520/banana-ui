import React, {useCallback, useMemo} from 'react';
import './style';

export interface ButtonProps {
    disabled?: boolean;
    type?: 'primary' | 'default' | 'danger';
    children?: React.ReactNode;
    shape?: 'normal' | 'circle' | 'round';
    size?: 'normal' | 'small' | 'large';
    className?: string;
    classNamePrefix?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> =
    ({
         children,
         className = '',
         style = {},
         type = 'default',
         shape = 'normal',
         disabled = false,
         classNamePrefix = 'banana',
         onClick
     }) => {
        const clsName: string = useMemo(() => {
            const list: string[] = [className,
                `${classNamePrefix}-btn-container`,
                `${classNamePrefix}-btn-${type}`,
                `${classNamePrefix}-btn-${shape}`,
            ];

            if (disabled) {
                list.push(`${classNamePrefix}-btn-disabled`);
            }
            return list.join(' ');
        }, [className, type, shape, disabled, classNamePrefix]);
        const onBtnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            if (!disabled && onClick) {
                onClick(e);
            }
        }, [disabled])
        return (
            <div className={clsName}
                    style={style}
                    onClick={onBtnClick}>
                {children}
            </div>
        );
    }

export default Button;
