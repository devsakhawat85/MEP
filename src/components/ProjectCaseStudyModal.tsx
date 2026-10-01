import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Building2, Calendar, UserCheck } from 'lucide-react';
import { ProjectItem, PROJECTS_DATA } from '../data/avimepData';
import { ResilientImage } from './ResilientImage';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onInquireProject,
}) => {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  useEffect(() => {
    setActiveGalleryIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.id !== project.id && (p.category === project.category || p.featured)
  ).slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#111315]/85 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="min-h-screen max-w-[1320px] mx-auto bg-[#F6F5F2] text-[#111315] shadow-2xl border-x border-[#111315]/10">
        {/* Sticky Case Study Top Bar */}
        <div className="sticky top-0 z-30 bg-[#111315] text-white px-6 md:px-10 py-4 flex items-center justify-between border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 font-mono-tech text-xs text-white/60">
            <span>PROJECT CASE STUDY</span>
            <span aria-hidden="true">·</span>
            <span className="text-white">{project.name}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="w-10 h-10 flex items-center justify-center border border-white/15 hover:border-white/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Hero Image */}
        <div className="relative h-[360px] sm:h-[460px] md:h-[540px] w-full bg-[#111315] overflow-hidden">
          <ResilientImage
            src={project.gallery[activeGalleryIdx] || project.image}
            alt={`${project.name} — ${project.location}`}
            className="w-full h-full object-cover opacity-90 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/45 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#38BDF8] mb-3">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.subType}</span>
              <span aria-hidden="true">·</span>
              <span>{project.boroughOrCity}</span>
            </div>
            <h1
              id="case-study-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
            >
              {project.name}
            </h1>
          </div>
        </div>

        {/* Verified Project Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#111315]/10 bg-white">
          <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-[#111315]/10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#525866] mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#152EAF]" />
              <span>LOCATION</span>
            </div>
            <p className="text-sm font-semibold text-[#111315]">{project.location}</p>
          </div>

          <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#111315]/10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#525866] mb-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#152EAF]" />
              <span>PROJECT TYPE</span>
            </div>
            <p className="text-sm font-semibold text-[#111315]">
              {project.category} · {project.subType}
            </p>
          </div>

          <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-[#111315]/10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#525866] mb-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#152EAF]" />
              <span>ARCHITECT / PROJECT SPEC</span>
            </div>
            <p className="text-sm font-semibold text-[#111315]">
              {project.architect
                ? `Architect: ${project.architect}`
                : project.projectCost
                ? `Project Value: ${project.projectCost}`
                : project.scaleSummary || 'Avi MEP Consultants LLC'}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#525866] mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#152EAF]" />
              <span>STATUS / COMPLETION</span>
            </div>
            <p className="text-sm font-semibold text-[#111315]">{project.completion}</p>
          </div>
        </div>

        {/* Main Editorial Content Grid */}
        <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Left 8 Columns: Overview, Challenge, Approach, Gallery */}
          <div className="lg:col-span-8 space-y-10">
            <section>
              <h2 className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                01. PROJECT OVERVIEW
              </h2>
              <p className="text-lg md:text-xl text-[#111315] leading-relaxed font-medium">
                {project.overview}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#111315]/10">
              <div>
                <h3 className="font-mono-tech text-xs text-[#525866] font-semibold tracking-wider mb-3">
                  02. ENGINEERING CHALLENGE
                </h3>
                <p className="text-sm md:text-base text-[#374151] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-mono-tech text-xs text-[#525866] font-semibold tracking-wider mb-3">
                  03. AVI MEP’S APPROACH
                </h3>
                <p className="text-sm md:text-base text-[#374151] leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Results & Verified Project Information */}
            <section className="pt-6 border-t border-[#111315]/10">
              <h3 className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-4">
                04. DELIVERABLES &amp; PROJECT OUTCOMES
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white border border-[#111315]/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#152EAF] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#111315]">{res}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Image Gallery */}
            {project.gallery.length > 1 && (
              <section className="pt-6 border-t border-[#111315]/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono-tech text-xs text-[#525866] font-semibold tracking-wider">
                    05. PROJECT &amp; TECHNICAL GALLERY
                  </h3>
                  <span className="font-mono-tech text-xs text-[#525866]">
                    Select view ({activeGalleryIdx + 1}/{project.gallery.length})
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveGalleryIdx(idx)}
                      className={`relative h-28 sm:h-36 overflow-hidden border transition-all cursor-pointer ${
                        activeGalleryIdx === idx
                          ? 'border-[#152EAF] ring-2 ring-[#152EAF]/30'
                          : 'border-[#111315]/15 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <ResilientImage
                        src={imgUrl}
                        alt={`${project.name} gallery view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right 4 Columns: MEP Scope & Fact Sheet */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#111315] text-white p-6 md:p-8 bg-tech-grid-dark">
              <h3 className="font-mono-tech text-xs text-[#38BDF8] tracking-wider mb-4">
                COORDINATED MEP SCOPE
              </h3>
              <ul className="divide-y divide-white/10 border-t border-b border-white/10">
                {project.mepScope.map((item, idx) => (
                  <li key={idx} className="py-3.5 flex items-center justify-between text-sm">
                    <span className="text-white/90 font-medium">{item}</span>
                    <span className="font-mono-tech text-xs text-[#38BDF8]">0{idx + 1}</span>
                  </li>
                ))}
              </ul>

              {project.developer && (
                <div className="mt-6 pt-4 border-t border-white/10 text-xs">
                  <span className="font-mono-tech text-white/50 block mb-1">DEVELOPER</span>
                  <span className="text-white font-medium">{project.developer}</span>
                </div>
              )}

              {project.architect && (
                <div className="mt-4 pt-4 border-t border-white/10 text-xs">
                  <span className="font-mono-tech text-white/50 block mb-1">ARCHITECT</span>
                  <span className="text-white font-medium">{project.architect}</span>
                </div>
              )}

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onInquireProject(project.name)}
                  className="w-full py-3.5 px-5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Projects Section */}
        <div className="p-6 md:p-12 bg-[#ECEAE4] border-t border-[#111315]/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#111315]">
              Related Avi MEP Projects
            </h3>
            <span className="font-mono-tech text-xs text-[#525866]">
              VERIFIED PORTFOLIO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onSelectProject(rel)}
                className="group text-left bg-white border border-[#111315]/10 hover:border-[#152EAF] transition-colors overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-[#111315]">
                  <ResilientImage
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono-tech text-[#525866] mb-1">
                      <span>{rel.category}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{rel.boroughOrCity}</span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#111315] group-hover:text-[#152EAF] transition-colors">
                      {rel.name}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#111315]/10 flex items-center justify-between text-xs font-semibold text-[#152EAF]">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
