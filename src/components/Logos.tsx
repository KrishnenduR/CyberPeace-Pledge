import React from 'react';
export function Logos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
      <div className="flex items-center justify-center h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300">
        <img src="https://i.imgur.com/g02eFqB.png" alt="CyberPeace Logo" className="h-full object-contain" />
      </div>
      <div className="flex items-center justify-center h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300">
        <img src="https://www.cuchd.in/includes/assets/images/header-logo.png" alt="Chandigarh University Logo" className="h-full object-contain" />
      </div>
      <div className="flex items-center justify-center h-12 md:h-14 grayscale hover:grayscale-0 transition-all duration-300">
        <img src="https://i.imgur.com/uG5t38m.png" alt="Google.org Logo" className="h-full object-contain" />
      </div>
    </div>
  );
}