'use client';

import { ReactNode } from 'react';

interface PassionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

export default function PassionCard({ icon, title, description, borderColor }: PassionCardProps) {
  return (
    <div className={`bg-background/15 rounded-xl p-4 backdrop-blur-sm border ${borderColor}/20  transition-colors shadow-border-md hover:shadow-border-lg`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-foreground/20 rounded-lg">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-primary-dim-fg text-sm">{description}</p>
    </div>
  );
}
