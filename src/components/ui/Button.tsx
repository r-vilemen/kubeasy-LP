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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none text-xs sm:text-sm';
  
  const sizeStyles = {
    sm: 'px-2.5 py-1.5 gap-1.5 font-mono',
    md: 'px-3.5 py-2 gap-2',
    lg: 'px-5 py-2.5 gap-2 text-sm sm:text-base font-semibold',
  };

  const variantStyles = {
    primary: 'bg-brand-indigo hover:bg-brand-indigo/90 text-white border border-indigo-400/30',
    secondary: 'bg-surface-elevated hover:bg-surface-overlay text-text-primary border border-border-subtle',
    outline: 'bg-transparent hover:bg-surface-elevated text-text-primary border border-border-medium',
    ghost: 'bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-text-primary',
    danger: 'bg-status-error/20 hover:bg-status-error/30 text-rose-300 border border-status-error/40',
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
