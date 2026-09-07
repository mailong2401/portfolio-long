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
    <div className={`bg-primary-dim-bg/20 rounded-xl p-4 border ${borderColor}/20 hover:${borderColor}/50 transition-colors`}>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary-fg/20 rounded-lg">
          {icon}
        </div>
        <h3 className="font-semibold text-primary-fg">{title}</h3>
      </div>
      <p className="text-primary-dim-fg text-sm">{description}</p>
    </div>
  );
}
