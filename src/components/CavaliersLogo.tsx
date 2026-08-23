import React from 'react';
import okCavsLogo from '../assets/ok_cavs_logo.png';

interface LogoProps {
  className?: string;
  variant?: 'crest' | 'horse' | 'text' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const CavaliersLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
    '2xl': 'w-44 h-44 sm:w-56 sm:h-56',
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}>
      <img
        src={okCavsLogo}
        alt="Oklahoma Cavaliers Baseball Official Crest"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
      />
    </div>
  );
};

