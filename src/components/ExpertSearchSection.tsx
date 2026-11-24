import React, { useState } from 'react';
import { Search, Trash2, ArrowRight, FileCheck2, AlertCircle } from 'lucide-react';
import { ExpertProfile } from '../data/experts';

interface ExpertSearchSectionProps {
  nameInput: string;
  certInput: string;
  onNameChange: (val: string) => void;
  onCertChange: (val: string) => void;
  onSearch: () => void;
  onReset: () => void;
  hasSearched: boolean;
  validationMessage: string | null;
  results: ExpertProfile[];
  onSelectExpert: (expert: ExpertProfile) => void;
}

export const ExpertSearchSection: React.FC<ExpertSearchSectionProps> = ({
  nameInput,
  certInput,
  onNameChange,
  onCertChange,
  onSearch,
  onReset,
  hasSearched,
  validationMessage,
  results,
  onSelectExpert,
}) => {
  const [imgErrorIds, setImgErrorIds] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search Form Bar matching nmgfy.com 专家导航 visual structure */}
        <section aria-label="访问专家检索条件">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 pb-8 border-b border-slate-200"
          >
            <div className="text-sm sm:text-[15px] font-medium text-slate-800 whitespace-nowrap shrink-0 lg:mr-1">
              专家检索
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              <div>
                <label htmlFor="expert-name-input" className="sr-only">
                  专家姓名
                </label>
                <input
                  id="expert-name-input"
                  type="text"
                  value={nameInput}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="请输入专家姓名"
                  autoComplete="off"
                  className="w-full h-11 px-3.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1C3D7A] focus:ring-1 focus:ring-[#1C3D7A] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="expert-cert-input" className="sr-only">
                  证书编号
                </label>
                <input
                  id="expert-cert-input"
                  type="text"
                  value={certInput}
                  onChange={(e) => onCertChange(e.target.value)}
                  placeholder="请输入访问专家证书编号"
                  autoComplete="off"
                  className="w-full h-11 px-3.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-sm placeholder:text-slate-400 tabular-nums focus:outline-none focus:border-[#1C3D7A] focus:ring-1 focus:ring-[#1C3D7A] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="submit"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 h-11 px-6 bg-[#C41E24] hover:bg-[#A6171C] text-white text-sm font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E24] focus-visible:ring-offset-2"
              >
                <span>搜索</span>
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onReset}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 h-11 px-6 bg-[#1C3D7A] hover:bg-[#152E5E] text-white text-sm font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3D7A] focus-visible:ring-offset-2"
              >
                <span>清空</span>
                <Trash2 className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </form>

          {validationMessage && (
            <div
              role="alert"
              className="mt-4 flex items-center gap-2 text-sm text-[#C41E24] bg-red-50/70 border border-red-200 px-4 py-3 rounded-sm"
            >
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{validationMessage}</span>
            </div>
          )}
        </section>

        {/* Results / Guidance Area */}
        <section aria-label="检索结果" className="mt-8 sm:mt-10">
          {!hasSearched ? (
            /* Initial state: STRICTLY DO NOT DISPLAY ANY EXPERT INFORMATION */
            <div className="bg-[#F8FAFC] border border-slate-200 px-6 py-10 sm:px-10 sm:py-14 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1C3D7A]/8 flex items-center justify-center text-[#1C3D7A]">
                <FileCheck2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                访问专家信息核验检索
              </h2>
              <p className="mt-2.5 text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                本系统用于内蒙古医科大学附属医院访问专家资格核验与信息查阅。请在上方输入
                <strong className="font-medium text-slate-800">专家姓名</strong>
                或
                <strong className="font-medium text-slate-800">访问专家证书编号</strong>
                ，点击“搜索”后查看匹配结果并进入专家个人主页。
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[13px] text-slate-500">
                <div>
                  <span className="font-medium text-slate-700">定向检索</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>未检索前不公开展示名录</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">双维度核验</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>支持姓名与证书编号查询</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">档案直达</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>点击检索结果查阅完整履历</span>
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            /* Empty Search Result State */
            <div className="bg-[#F8FAFC] border border-slate-200 px-6 py-12 text-center">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                未检索到符合条件的访问专家信息
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                请核对输入的专家姓名或访问专家证书编号是否准确（注意字母大小写与连字符），或点击“清空”后重新查询。
              </p>
              <button
                type="button"
                onClick={onReset}
                className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#1C3D7A] bg-white border border-slate-300 hover:border-[#1C3D7A] rounded-sm transition-colors cursor-pointer min-h-[44px]"
              >
                清空条件并重新检索
              </button>
            </div>
          ) : (
            /* Matched Results: Hospital Deep Navy Blue card modeled on nmgfy.com screenshot */
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <p className="text-sm text-slate-600 tabular-nums">
                  共检索到 <span className="font-semibold text-[#1C3D7A]">{results.length}</span>{' '}
                  位符合条件的访问专家
                </p>
                <p className="text-xs text-slate-500">点击下方专家信息卡片进入个人主页</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((expert) => {
                  const hasImgError = imgErrorIds[expert.id];
                  return (
                    <button
                      key={expert.id}
                      type="button"
                      onClick={() => onSelectExpert(expert)}
                      className="hospital-card-surface text-left text-white p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E24] focus-visible:ring-offset-2 cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-20 sm:w-[72px] sm:h-24 shrink-0 overflow-hidden bg-[#152E5E] border border-white/25">
                            {!hasImgError ? (
                              <img
                                src={expert.photoUrl}
                                alt={`${expert.name}个人照片`}
                                referrerPolicy="no-referrer"
                                onError={() =>
                                  setImgErrorIds((prev) => ({ ...prev, [expert.id]: true }))
                                }
                                className="w-full h-full object-cover object-top"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-sm font-medium text-white/80">
                                {expert.name}
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-[#FDE68A] transition-colors">
                              {expert.name}
                            </h3>
                            <p className="mt-1.5 text-sm text-white/90">
                              专业方向：{expert.department}
                            </p>
                            <p className="mt-0.5 text-sm text-white/90">
                              职称职务：{expert.primaryInstitution} · {expert.primaryRole}
                            </p>
                            <p className="mt-1 text-xs sm:text-sm text-white/85 break-all">
                              联系邮箱：{expert.email}
                            </p>
                          </div>
                        </div>

                        {/* Dashed divider with diamond motif matching screenshot */}
                        <div className="my-4 flex items-center" aria-hidden="true">
                          <div className="flex-1 border-b border-dashed border-white/35" />
                          <div className="w-2 h-2 rotate-45 border border-white/60 ml-2 shrink-0" />
                        </div>

                        <p className="text-sm text-white/85 leading-relaxed line-clamp-3">
                          {expert.cardSummary}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-white/90 font-medium">
                        <span>{expert.visitingTitle}</span>
                        <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>进入个人主页</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};
