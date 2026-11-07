import type { HTMLAttributes, FC } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'ok' | 'warn' | 'error' | 'gov' | 'indigo' | 'cyan' | 'neutral';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-mono',
  };

  const variantStyles = {
    ok: 'bg-status-ok/10 text-status-ok border-status-ok/30',
    warn: 'bg-status-warn/10 text-status-warn border-status-warn/30',
    error: 'bg-status-error/10 text-status-error border-status-error/30',
    gov: 'bg-status-gov/10 text-status-gov border-status-gov/30',
    indigo: 'bg-brand-indigo/15 text-indigo-300 border-brand-indigo/30',
    cyan: 'bg-brand-cyan/15 text-sky-300 border-brand-cyan/30',
    neutral: 'bg-white/5 text-text-secondary border-white/10',
  };

  const dotColor = {
    ok: 'bg-status-ok',
    warn: 'bg-status-warn',
    error: 'bg-status-error',
    gov: 'bg-status-gov',
    indigo: 'bg-brand-indigo',
    cyan: 'bg-brand-cyan',
    neutral: 'bg-text-muted',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border font-medium ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor[variant]}`} />}
      {children}
    </span>
  );
};
