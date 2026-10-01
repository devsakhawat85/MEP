import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2, FileCheck2 } from 'lucide-react';
import { ServiceItem, PROJECTS_DATA, ProjectItem } from '../data/avimepData';
import { ResilientImage } from './ResilientImage';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectProject,
  onInquireService,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const relatedProjects = PROJECTS_DATA.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#111315]/85 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
    >
      <div className="min-h-screen max-w-[1280px] mx-auto bg-[#F6F5F2] text-[#111315] shadow-2xl border-x border-[#111315]/10">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-[#111315] text-white px-6 md:px-10 py-4 flex items-center justify-between border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 font-mono-tech text-xs text-white/60">
            <span>DISCIPLINE {service.number}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white">{service.shortTitle}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close service specification"
            className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-white/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#111315]/10 bg-[#111315] text-white">
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between bg-tech-grid-dark">
            <div>
              <div className="font-mono-tech text-xs text-[#38BDF8] mb-3">
                <span>DISCIPLINE {service.number}</span>
                <span aria-hidden="true"> · </span>
                <span>{service.disciplineTag}</span>
              </div>
              <h1
                id="service-detail-title"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              >
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onInquireService(service.title)}
                className="px-6 py-3.5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs md:text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Discuss {service.shortTitle} Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            <ResilientImage
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Scope of Work & Typical Applications */}
        <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-4">
                01. TECHNICAL SCOPE OF WORK
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {service.scopeOfWork.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 bg-white border border-[#111315]/10"
                  >
                    <span className="font-mono-tech text-xs font-semibold text-[#152EAF] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-[#111315]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#111315]/10">
              <h2 className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-4">
                02. TYPICAL BUILDING APPLICATIONS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.typicalApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#ECEAE4] border border-[#111315]/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#152EAF] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#111315] leading-snug">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regulatory & Code Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#111315]/10 p-6 md:p-8">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#152EAF] font-semibold mb-4">
                <FileCheck2 className="w-4 h-4" />
                <span>CODES, STANDARDS &amp; FILINGS</span>
              </div>
              <ul className="divide-y divide-[#111315]/10 border-t border-b border-[#111315]/10">
                {service.regulatoryCodes.map((code, idx) => (
                  <li key={idx} className="py-3.5 text-sm font-medium text-[#111315]">
                    {code}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#525866] leading-relaxed">
                All engineering plans and calculations are prepared under the direct supervision of Licensed Professional Engineers, Certified Energy Managers, and Registered NYC Special Inspectors.
              </p>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="p-6 md:p-12 bg-[#ECEAE4] border-t border-[#111315]/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#111315]">
                Projects Featuring {service.shortTitle}
              </h3>
              <span className="font-mono-tech text-xs text-[#525866]">
                CLICK TO VIEW CASE STUDY
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => onSelectProject(proj)}
                  className="group text-left bg-white border border-[#111315]/10 hover:border-[#152EAF] transition-colors overflow-hidden flex flex-col cursor-pointer"
                >
                  <div className="h-40 w-full overflow-hidden bg-[#111315]">
                    <ResilientImage
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-mono-tech text-[11px] text-[#525866] mb-1">
                        {proj.category} · {proj.boroughOrCity}
                      </p>
                      <h4 className="font-display text-base font-bold text-[#111315] group-hover:text-[#152EAF]">
                        {proj.name}
                      </h4>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#111315]/10 flex items-center justify-between text-xs font-semibold text-[#152EAF]">
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
