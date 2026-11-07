import type { ButtonHTMLAttributes, ReactNode, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-brand-indigo hover:bg-brand-indigo/90 text-white shadow-sm hover:shadow-glow-indigo active:scale-[0.98]',
    secondary: 'bg-surface-elevated hover:bg-surface-overlay text-text-primary border border-white/10 active:scale-[0.98]',
    outline: 'bg-transparent hover:bg-white/5 text-text-primary border border-white/20 active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary',
    danger: 'bg-status-error/20 hover:bg-status-error/30 text-status-error border border-status-error/30 active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
