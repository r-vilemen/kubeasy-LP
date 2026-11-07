import type { ReactNode, FC } from 'react';

export interface ConsoleWindowProps {
  title?: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  headerRight?: ReactNode;
}

export const ConsoleWindow: FC<ConsoleWindowProps> = ({
  title = 'kubeasy-incident-investigation',
  badge,
  children,
  className = '',
  headerRight,
}) => {
  return (
    <div className={`rounded-xl border border-white/10 bg-surface-subtle shadow-console overflow-hidden ${className}`}>
      {/* Console Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated/70 border-b border-white/5 select-none">
        <div className="flex items-center gap-3">
          {/* Mac/Linux Style Window Controls */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-status-error/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-status-warn/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-status-ok/80" />
          </div>
          <span className="text-xs font-mono text-text-secondary truncate">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          {badge}
          {headerRight}
        </div>
      </div>

      {/* Console Content */}
      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
};
