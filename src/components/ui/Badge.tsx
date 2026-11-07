import type { HTMLAttributes, FC } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'ok' | 'warn' | 'error' | 'gov' | 'indigo' | 'cyan' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-1.5 py-0.5 font-mono tracking-tight',
    md: 'text-xs px-2 py-0.5 font-mono',
  };

  const variantStyles = {
    ok: 'bg-status-ok/15 text-emerald-400 border-status-ok/30',
    warn: 'bg-status-warn/15 text-amber-400 border-status-warn/30',
    error: 'bg-status-error/15 text-rose-400 border-status-error/30',
    gov: 'bg-status-gov/15 text-purple-300 border-status-gov/30',
    indigo: 'bg-brand-indigo/20 text-indigo-300 border-brand-indigo/30',
    cyan: 'bg-brand-cyan/20 text-sky-300 border-brand-cyan/30',
    neutral: 'bg-surface-elevated text-text-secondary border-border-subtle',
  };

  return (
    <span
      className={`inline-flex items-center rounded border font-medium select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
