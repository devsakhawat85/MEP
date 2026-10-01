import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, FileCheck2, ShieldCheck } from 'lucide-react';
import {
  SERVICES_DATA,
  SPECIAL_INSPECTIONS_LIST,
  PROJECTS_DATA,
  ServiceItem,
  ProjectItem,
} from '../data/avimepData';
import { PageRoute } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectService,
  onSelectProject,
  onInquireService,
}) => {
  const [inspectionFilter, setInspectionFilter] = useState<string>('All');

  const inspectionCategories = [
    'All',
    'Mechanical & HVAC',
    'Fire Protection & Life Safety',
    'Plumbing & Site Utilities',
    'Structural & Energy',
  ];

  const filteredInspections =
    inspectionFilter === 'All'
      ? SPECIAL_INSPECTIONS_LIST
      : SPECIAL_INSPECTIONS_LIST.filter((i) => i.category === inspectionFilter);

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="bg-[#111315] text-white py-20 md:py-28 border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              CAPABILITIES &amp; TECHNICAL DISCIPLINES
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Comprehensive MEP Design, Energy &amp; Inspection Services.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              Tailored mechanical, electrical, plumbing, fire protection, Local Law 87 &amp; 97 compliance, DEP Site/Sewer (SD1/SD2) filings, and NYC DOB Special Inspections executed by licensed engineers and certified specialists.
            </p>
          </div>

          <div className="lg:col-span-4 border border-white/15 bg-white/[0.03] p-6 space-y-4">
            <p className="font-mono-tech text-xs text-[#38BDF8]">
              DISCIPLINE DIRECTORY (01 — 06)
            </p>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono-tech">
              {SERVICES_DATA.map((s) => (
                <a
                  key={s.id}
                  href={`#service-${s.id}`}
                  className="py-1.5 px-2 hover:bg-white/10 text-white/85 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>
                    {s.number}. {s.shortTitle}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="divide-y divide-[#111315]/10">
        {SERVICES_DATA.map((service, idx) => {
          const relatedProjects = PROJECTS_DATA.filter((p) =>
            service.relatedProjectIds.includes(p.id)
          );
          const isEven = idx % 2 === 0;

          return (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className={`py-20 md:py-24 scroll-mt-20 ${
                isEven ? 'bg-[#F6F5F2] bg-tech-grid-light' : 'bg-white'
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#111315]/10">
                  <div className="flex items-center gap-3 font-mono-tech text-xs text-[#152EAF] font-semibold">
                    <span>SERVICE {service.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.disciplineTag}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="px-4 py-2 border border-[#111315]/20 hover:border-[#152EAF] text-xs font-semibold text-[#111315] hover:text-[#152EAF] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Open Spec Sheet
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquireService(service.title)}
                      className="px-5 py-2 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Inquire About {service.shortTitle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#111315] border border-[#111315]/15">
                      <ResilientImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 bg-[#111315] text-white space-y-3">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-[#38BDF8]">
                        <FileCheck2 className="w-4 h-4" />
                        <span>REGULATORY CODES &amp; STANDARDS</span>
                      </div>
                      <ul className="divide-y divide-white/10 border-t border-white/10">
                        {service.regulatoryCodes.map((code, cIdx) => (
                          <li key={cIdx} className="py-2.5 text-xs font-mono-tech text-white/85">
                            {code}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base text-[#374151] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-4">
                        SCOPE OF WORK
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.scopeOfWork.map((item, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 bg-white border border-[#111315]/10 flex items-start gap-3"
                          >
                            <span className="font-mono-tech text-xs font-bold text-[#152EAF] mt-0.5">
                              0{sIdx + 1}
                            </span>
                            <span className="text-xs sm:text-sm text-[#111315] font-medium leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-mono-tech text-xs text-[#525866] font-semibold tracking-wider mb-3">
                        TYPICAL APPLICATIONS
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.typicalApplications.map((app, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#374151]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#152EAF] shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {relatedProjects.length > 0 && (
                      <div className="pt-6 border-t border-[#111315]/10">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-mono-tech text-xs text-[#525866] font-semibold">
                            RELATED AVI MEP PROJECTS
                          </h4>
                          <button
                            type="button"
                            onClick={() => onNavigate('projects')}
                            className="font-mono-tech text-xs text-[#152EAF] hover:underline cursor-pointer"
                          >
                            Full Portfolio →
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {relatedProjects.slice(0, 2).map((proj) => (
                            <button
                              key={proj.id}
                              type="button"
                              onClick={() => onSelectProject(proj)}
                              className="group p-4 bg-white border border-[#111315]/10 hover:border-[#152EAF] flex items-center gap-4 text-left transition-colors cursor-pointer"
                            >
                              <div className="w-16 h-16 shrink-0 bg-[#111315] overflow-hidden">
                                <ResilientImage
                                  src={proj.image}
                                  alt={proj.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-mono-tech text-[11px] text-[#525866] truncate">
                                  {proj.category} · {proj.boroughOrCity}
                                </p>
                                <p className="font-display text-sm font-bold text-[#111315] group-hover:text-[#152EAF] truncate">
                                  {proj.name}
                                </p>
                                <span className="font-mono-tech text-[11px] text-[#152EAF] inline-flex items-center gap-1 mt-1">
                                  Case Study <ArrowUpRight className="w-3 h-3" />
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* NYC Special Inspections Schedule */}
      <section className="py-20 md:py-28 bg-[#111315] text-white border-t border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#38BDF8] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>REGISTERED NEW YORK CITY SPECIAL INSPECTIONS AGENCY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                NYC Building Code Chapter 17 &amp; Energy Inspections.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-1 bg-[#181B20] p-1 border border-white/15">
              {inspectionCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setInspectionFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-mono-tech transition-colors cursor-pointer whitespace-nowrap ${
                    inspectionFilter === cat
                      ? 'bg-[#152EAF] text-white font-semibold'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/15">
            {filteredInspections.map((item) => (
              <div
                key={item.code}
                className="p-6 border-r border-b border-white/15 bg-[#111315]/80 hover:bg-white/[0.03] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs mb-3">
                    <span className="text-[#38BDF8] font-semibold">{item.code}</span>
                    <span className="text-white/45">{item.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-white/50">TR1 / TR8 SIGN-OFF</span>
                  <button
                    type="button"
                    onClick={() => onInquireService(`${item.code} - ${item.title} Inspection`)}
                    className="text-[#38BDF8] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Schedule Inspection</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
