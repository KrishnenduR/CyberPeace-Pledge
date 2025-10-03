import React from 'react';
interface CertificateProps {
  name: string;
}
export const Certificate: React.FC<CertificateProps> = ({ name }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div
      id="certificate"
      className="w-[1000px] h-[707px] p-10 bg-white text-gray-800 font-sans flex flex-col border-8 border-blue-900"
      style={{ fontFamily: 'serif' }}
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Certificate of Cyber Safety Pledge</h1>
        <p className="text-xl mb-4">This certificate is proudly presented to</p>
        <p className="text-4xl font-bold text-red-600 tracking-wider mb-6" style={{ fontFamily: 'cursive' }}>
          {name || 'Valued Digital Citizen'}
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          for taking the Cyber Safety Pledge and committing to practicing digital hygiene, being a responsible online citizen, and helping build a resilient cyber ecosystem.
        </p>
        <div className="w-full flex justify-between items-end mt-auto text-sm">
          <div className="text-center">
            <p className="font-bold border-t-2 border-blue-900 pt-2 w-48">{currentDate}</p>
            <p>Date</p>
          </div>
          <div className="text-center">
            <img
              src="https://i.imgur.com/g02eFqB.png"
              alt="CyberPeace Logo"
              className="h-12 mx-auto mb-2"
              crossOrigin="anonymous"
            />
            <p className="font-bold border-t-2 border-blue-900 pt-2 w-48">CyberPeace Foundation</p>
            <p>Issuing Authority</p>
          </div>
        </div>
      </div>
    </div>
  );
};