import React from 'react';
import { HospitalEmblem } from './HospitalEmblem';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#132952] text-white/85 border-t border-[#1C3D7A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <HospitalEmblem className="w-11 h-11 shrink-0" />
            <div>
              <div className="text-base font-semibold text-white">
                内蒙古医科大学附属医院 · 访问专家库
              </div>
              <div className="mt-1 text-xs text-white/70">
                精医厚德 &nbsp;·&nbsp; 福泽民众
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <span className="text-white/65">
              版权所有 © 内蒙古医科大学附属医院
            </span>
          </div>
        </div>

        {/* Filing & Institutional Verification Row */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-white/70 tabular-nums">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-colors"
          >
            蒙ICP备12002699号
          </a>

          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=15010302000306"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 2L4 5.5v5.8c0 5.1 3.4 9.7 8 10.7 4.6-1 8-5.6 8-10.7V5.5L12 2z"
                fill="#1D4ED8"
                stroke="#F59E0B"
                strokeWidth="1.4"
              />
              <circle cx="12" cy="11.2" r="3.4" fill="#DC2626" />
              <path
                d="M12 9.1l.6 1.5h1.6l-1.3 1 .5 1.5-1.4-.9-1.4.9.5-1.5-1.3-1h1.6z"
                fill="#FDE047"
              />
            </svg>
            <span>蒙公网安备15010302000306号</span>
          </a>

          <span
            className="inline-flex items-center gap-1 text-white/75"
            title="党政机关及事业单位网站标识"
          >
            <svg
              viewBox="0 0 24 28"
              className="w-4 h-4.5 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 1.5L2 5.2v8.1c0 6.2 4.2 11.4 10 13.2 5.8-1.8 10-7 10-13.2V5.2L12 1.5z"
                fill="#2563EB"
                stroke="#EAB308"
                strokeWidth="1.5"
              />
              <path
                d="M4 13.5c2.8-1.5 5.6-1.5 8 0s5.2 1.5 8 0v-6L12 4.3 4 7.5v6z"
                fill="#1E40AF"
              />
              <text
                x="12"
                y="20.5"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="5"
                fontWeight="600"
              >
                事业单位
              </text>
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
};
