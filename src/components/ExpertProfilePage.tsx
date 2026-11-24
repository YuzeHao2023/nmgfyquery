import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { ExpertProfile } from '../data/experts';

interface ExpertProfilePageProps {
  expert: ExpertProfile;
  onBackToSearch: () => void;
}

export const ExpertProfilePage: React.FC<ExpertProfilePageProps> = ({
  expert,
  onBackToSearch,
}) => {
  const [imgError, setImgError] = useState(false);

  const sectionAnchors = [
    { id: 'advantages', label: '核心优势' },
    { id: 'experience', label: '工作经历' },
    { id: 'academic', label: '学术与知识产权' },
    { id: 'appointments', label: '社会职务' },
    { id: 'qualifications', label: '专业资质' },
  ];

  return (
    <main className="flex-1 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Top Back Control & Verified Registry Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={onBackToSearch}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1C3D7A] bg-white border border-slate-300 hover:border-[#1C3D7A] rounded-sm transition-colors cursor-pointer self-start min-h-[44px] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3D7A]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>返回访问专家检索</span>
          </button>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 tabular-nums">
            <ShieldCheck className="w-4 h-4 text-[#1C3D7A] shrink-0" aria-hidden="true" />
            <span>访问专家档案已核验</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-800 font-medium">{expert.certificateNo}</span>
          </div>
        </div>

        {/* Institutional Profile Archive Header Card */}
        <section
          aria-label="专家基本信息"
          className="bg-white border border-slate-200 p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Portrait Frame */}
            <div className="w-36 sm:w-44 aspect-[3/4] shrink-0 bg-[#1C3D7A]/5 border border-slate-200 overflow-hidden mx-auto md:mx-0">
              {!imgError ? (
                <img
                  src={expert.photoUrl}
                  alt={`${expert.name}证件照`}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#1C3D7A] text-white text-xl font-semibold">
                  {expert.name}
                </div>
              )}
            </div>

            {/* Identity & Definition List Metadata */}
            <div className="flex-1 min-w-0 w-full">
              <div className="border-b border-slate-200 pb-5">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-serif-sc text-2xl sm:text-3xl font-bold text-slate-900">
                    {expert.name}
                  </h2>
                  <span className="text-sm sm:text-base font-medium text-[#1C3D7A]">
                    内蒙古医科大学附属医院访问专家
                  </span>
                </div>

                {/* Unboxed metadata with typographic separators (no pill clutter) */}
                <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-600">
                  <span>{expert.primaryInstitution}</span>
                  <span aria-hidden="true">·</span>
                  <span>{expert.primaryRole}</span>
                  <span aria-hidden="true">·</span>
                  <span>{expert.primaryField}</span>
                  <span aria-hidden="true">·</span>
                  <span>{expert.visitingTitle}</span>
                </div>
              </div>

              {/* Clean Definition List Grid */}
              <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                <div>
                  <dt className="text-xs text-slate-500">访问专家证书编号</dt>
                  <dd className="mt-0.5 font-mono font-semibold text-[#1C3D7A] tabular-nums">
                    {expert.certificateNo}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500">性别 / 年龄 / 民族</dt>
                  <dd className="mt-0.5 text-slate-800 tabular-nums">
                    {expert.gender} · {expert.age}岁 · {expert.ethnicity}族
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500">政治面貌</dt>
                  <dd className="mt-0.5 text-slate-800">{expert.politicalStatus}</dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>现所在地</span>
                  </dt>
                  <dd className="mt-0.5 text-slate-800">{expert.location}</dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>联系电话</span>
                  </dt>
                  <dd className="mt-0.5 text-slate-800 tabular-nums">
                    <a
                      href={`tel:${expert.phone}`}
                      className="hover:text-[#1C3D7A] hover:underline"
                    >
                      {expert.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-500 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>电子邮箱</span>
                  </dt>
                  <dd className="mt-0.5 text-slate-800 break-all">
                    <a
                      href={`mailto:${expert.email}`}
                      className="hover:text-[#1C3D7A] hover:underline"
                    >
                      {expert.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Section Jump Anchor Bar */}
          <nav
            aria-label="个人主页栏目导航"
            className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-2 overflow-x-auto pb-1"
          >
            {sectionAnchors.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#C41E24] hover:bg-slate-50 rounded-sm transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        {/* Main 2-Column Editorial Layout */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Primary Column (67%) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* 01. 核心优势 */}
            <section
              id="advantages"
              className="bg-white border border-slate-200 p-6 sm:p-8 scroll-mt-24"
            >
              <div className="pb-3.5 border-b border-slate-200 flex items-baseline justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C3D7A]">
                  01. 核心优势与专业概述
                </h3>
                <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                  执业与传承特色
                </span>
              </div>

              <ol className="mt-5 divide-y divide-slate-100">
                {expert.coreAdvantages.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
                  >
                    <span className="font-mono text-xs font-semibold text-[#C41E24] tabular-nums mt-1 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* 02. 工作经历 */}
            <section
              id="experience"
              className="bg-white border border-slate-200 p-6 sm:p-8 scroll-mt-24"
            >
              <div className="pb-3.5 border-b border-slate-200 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C3D7A]">02. 工作经历</h3>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {expert.primaryInstitution} · {expert.primaryRole}（{expert.primaryField}）
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-[15px] text-slate-800 leading-relaxed bg-[#F8FAFC] border border-slate-200/80 p-4">
                {expert.workOverview}
              </p>

              <div className="mt-6 space-y-6">
                {expert.workSections.map((section) => (
                  <div key={section.category} className="pt-4 first:pt-0 border-t first:border-t-0 border-slate-100">
                    <h4 className="text-base font-semibold text-slate-900 mb-3">
                      {section.category}
                    </h4>
                    <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                      {section.items.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 bg-[#1C3D7A] mt-2 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. 学术与知识产权成果 */}
            <section
              id="academic"
              className="bg-white border border-slate-200 p-6 sm:p-8 scroll-mt-24"
            >
              <div className="pb-3.5 border-b border-slate-200 flex items-baseline justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C3D7A]">
                  03. 学术与知识产权成果
                </h3>
                <span className="text-xs text-slate-400 whitespace-nowrap shrink-0 tabular-nums">
                  专利 · 软著 · 专著论文
                </span>
              </div>

              <div className="mt-2 divide-y divide-slate-100">
                {expert.academicAchievements.map((item, idx) => (
                  <div key={idx} className="py-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="text-xs font-medium text-[#C41E24]">{item.category}</span>
                      {item.registryCode && (
                        <span className="text-xs font-mono text-slate-500 tabular-nums">
                          {item.registryCode}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-1 text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Secondary Sidebar Column (33%) */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* 04. 社会职务 */}
            <section
              id="appointments"
              className="bg-white border border-slate-200 p-6 scroll-mt-24"
            >
              <div className="pb-3 border-b border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-[#1C3D7A]">
                  04. 社会职务与学术兼职
                </h3>
              </div>

              <ul className="mt-3 divide-y divide-slate-100">
                {expert.socialAppointments.map((app, idx) => (
                  <li key={idx} className="py-3 first:pt-1 last:pb-0">
                    <div className="text-sm font-medium text-slate-900 leading-snug">
                      {app.organization}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-600">{app.position}</div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 05. 专业资质 */}
            <section
              id="qualifications"
              className="bg-white border border-slate-200 p-6 scroll-mt-24"
            >
              <div className="pb-3 border-b border-slate-200 flex items-baseline justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#1C3D7A]">05. 专业资质</h3>
                <span className="text-xs text-slate-500 tabular-nums">
                  共 {expert.qualifications.length} 项
                </span>
              </div>

              <ol className="mt-3 divide-y divide-slate-100">
                {expert.qualifications.map((qual, idx) => (
                  <li
                    key={idx}
                    className="py-2.5 first:pt-1 last:pb-0 flex items-baseline gap-3 text-sm text-slate-700"
                  >
                    <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};
