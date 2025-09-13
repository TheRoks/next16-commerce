'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { useBoundaryMode } from './BoundaryProvider';

type RenderingType = 'static' | 'dynamic' | 'hybrid';
type HydrationType = 'server' | 'client' | 'hybrid';

interface BoundaryProps {
  children: React.ReactNode;
  rendering?: RenderingType;
  hydration?: HydrationType;
  label?: string;
  showLabel?: boolean;
}

const renderingColors = {
  dynamic: 'border-blue-500 bg-blue-50 dark:bg-blue-950/20',
  hybrid: 'border-purple-500 bg-purple-50 dark:bg-purple-950/20',
  static: 'border-red-500 bg-red-50 dark:bg-red-950/20',
} as const;

const componentColors = {
  client: 'border-blue-500 bg-blue-50 dark:bg-blue-950/20',
  hybrid: 'border-purple-500 bg-purple-50 dark:bg-purple-950/20',
  server: 'border-red-500 bg-red-50 dark:bg-red-950/20',
} as const;

export default function Boundary({ children, rendering, hydration, label, showLabel = true }: BoundaryProps) {
  const { mode } = useBoundaryMode();

  if (mode === 'off') {
    return <>{children}</>;
  }

  const showRendering = mode === 'rendering' && rendering;
  const showComponent = mode === 'hydration' && hydration;

  if (!showRendering && !showComponent) {
    return <>{children}</>;
  }

  let colorClasses = '';
  let labelText = '';

  if (showRendering) {
    colorClasses = renderingColors[rendering!];
    if (showLabel) {
      labelText = label || `${rendering} rendering`;
    }
  } else if (showComponent) {
    colorClasses = componentColors[hydration!];
    if (showLabel) {
      labelText = label || `${hydration} component`;
    }
  }

  return (
    <div className={cn('relative rounded-md border-2 border-dashed p-2', colorClasses)}>
      {showLabel && labelText && (
        <div className="absolute -top-2 left-2">
          <div className="rounded border bg-white px-2 py-0.5 font-mono text-xs text-gray-900 shadow-sm dark:bg-black dark:text-gray-100">
            {labelText}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
