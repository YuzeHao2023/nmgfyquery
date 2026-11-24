import React from 'react';

interface HospitalEmblemProps {
  className?: string;
}

export const HospitalEmblem: React.FC<HospitalEmblemProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="内蒙古医科大学附属医院院徽"
    >
      {/* Outer deep navy ring */}
      <circle cx="60" cy="60" r="57" fill="#1C3D7A" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Top arc text path */}
      <defs>
        <path id="topArc" d="M 16,60 A 44,44 0 1,1 104,60" />
        <path id="bottomArc" d="M 14,62 A 46,46 0 0,0 106,62" />
      </defs>

      <text
        fill="#FFFFFF"
        fontSize="8.8"
        fontWeight="600"
        letterSpacing="1.2"
        textAnchor="middle"
      >
        <textPath href="#topArc" startOffset="50%">
          内蒙古医科大学附属医院
        </textPath>
      </text>

      <text
        fill="#FFFFFF"
        fontSize="5.1"
        fontWeight="500"
        letterSpacing="0.4"
        textAnchor="middle"
      >
        <textPath href="#bottomArc" startOffset="50%">
          AFFILIATED HOSPITAL OF IMMU
        </textPath>
      </text>

      {/* Inner white emblem circle */}
      <circle cx="60" cy="60" r="35" fill="#FFFFFF" />
      <circle cx="60" cy="60" r="32.5" fill="none" stroke="#1C3D7A" strokeWidth="1.5" />

      {/* Stylized crimson inner hospital emblem inspired by 1958 crest */}
      <path
        d="M47 37h17l-6 27H41l6-27z"
        fill="none"
        stroke="#C41E24"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <circle
        cx="69"
        cy="56"
        r="9.5"
        fill="none"
        stroke="#C41E24"
        strokeWidth="3.2"
      />
      <path d="M62 49l14 14" stroke="#C41E24" strokeWidth="2.8" strokeLinecap="round" />

      {/* Founding year 1958 */}
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fill="#1C3D7A"
        fontSize="9.5"
        fontWeight="700"
        fontFamily="serif"
      >
        1958
      </text>
    </svg>
  );
};
