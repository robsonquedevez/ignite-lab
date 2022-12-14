import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    isChield?: boolean
}

export function Text({ size = 'md', children, isChield = false }: TextProps) {
    const Component = isChield ? Slot : 'span';

    return (
        <Component 
            className={
                clsx(
                    'text-gray-100 font-sans',
                    {
                        'text-xs': size === 'sm',
                        'text-sm': size === 'md',
                        'text-md': size === 'lg',
                    }
                )
            }
        >
            {children}
        </Component>
    )
}