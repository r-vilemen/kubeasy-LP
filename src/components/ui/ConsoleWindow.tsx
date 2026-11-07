import type { ReactNode, FC } from 'react';

export interface ConsoleWindowProps {
  title?: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  headerRight?: ReactNode;
}

export const ConsoleWindow: FC<ConsoleWindowProps> = ({
  title = 'cluster/production/investigation',
  badge,
  children,
  className = '',
  headerRight,
}) => {
  return (
    <div className={`rounded-lg border border-border-subtle bg-surface-subtle shadow-console overflow-hidden ${className}`}>
      {/* Console Header de Engenharia: sem bolinhas decorativas de IA */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border-subtle text-xs font-mono gap-2">
        <div className="flex items-center gap-2.5 text-text-secondary">
          <span className="w-2 h-2 rounded-sm bg-brand-sky/80" />
          <span className="text-text-primary font-semibold">{title}</span>
          {badge}
        </div>

        {headerRight && (
          <div className="flex items-center gap-2">
            {headerRight}
          </div>
        )}
      </div>

      {/* Console Content */}
      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
};
