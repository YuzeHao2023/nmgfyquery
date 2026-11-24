import React from 'react';
import { MapPin } from 'lucide-react';

interface BannerProps {
  expertName?: string;
  onGoToSearch?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ expertName, onGoToSearch }) => {
  return (
    <section className="hospital-banner-texture text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pt-5 sm:pb-12">
        {/* Top-left breadcrumb matching nmgfy.com inner page */}
        <nav
          aria-label="面包屑导航"
          className="flex items-center flex-wrap gap-1.5 text-xs sm:text-[13px] text-white/85 mb-6 sm:mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-white/75 shrink-0" aria-hidden="true" />
          <a
            href="https://www.nmgfy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-colors"
          >
            首页
          </a>
          <span aria-hidden="true" className="text-white/50">
            -
          </span>
          {expertName ? (
            <>
              <button
                type="button"
                onClick={onGoToSearch}
                className="hover:text-white hover:underline transition-colors cursor-pointer"
              >
                访问专家库
              </button>
              <span aria-hidden="true" className="text-white/50">
                -
              </span>
              <span className="text-[#F87171] font-medium">{expertName}</span>
            </>
          ) : (
            <span className="text-[#F87171] font-medium">访问专家库</span>
          )}
        </nav>

        {/* Centered title with traditional geometric corner ornament matching screenshot */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-5">
            <svg
              viewBox="0 0 28 32"
              className="w-5 h-6 sm:w-6 sm:h-7 text-white/75 shrink-0"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M22 4L10 16l12 12M15 4L3 16l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
            <h1 className="font-serif-sc text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-wider text-white">
              {expertName ? `${expertName} · 专家档案` : '访问专家库'}
            </h1>
            <svg
              viewBox="0 0 28 32"
              className="w-5 h-6 sm:w-6 sm:h-7 text-white/75 shrink-0"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 4l12 12L6 28M13 4l12 12-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </div>

          <p className="mt-2.5 text-xs sm:text-sm text-white/85 tracking-wide">
            精医厚德 · 福泽民众 &nbsp;|&nbsp; 内蒙古医科大学附属医院访问专家核验与档案检索
          </p>

          {/* Vertical diamond hairline ornament */}
          <div className="mt-4 flex flex-col items-center" aria-hidden="true">
            <div className="w-px h-5 border-l border-dashed border-white/45" />
            <div className="w-2 h-2 rotate-45 border border-white/75 bg-[#1C3D7A] -mt-0.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
