import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  PROJECTS_DATA,
  TEAM_MEMBERS,
  OFFICE_LOCATIONS,
  ARCHITECTURAL_COLLABORATORS,
  PROCESS_STEPS,
  SPECIAL_INSPECTIONS_LIST,
  ASSET_IMAGES,
  ServiceItem,
  ProjectItem,
} from '../data/avimepData';
import { PageRoute } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onSelectProject,
}) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [activeSystemLayer, setActiveSystemLayer] = useState<'all' | 'mech' | 'elec' | 'plumb' | 'energy'>('all');
  const [activeOfficeId, setActiveOfficeId] = useState<string>('new-york');

  const activeService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const selectedOffice =
    OFFICE_LOCATIONS.find((o) => o.id === activeOfficeId) || OFFICE_LOCATIONS[0];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#111315] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={ASSET_IMAGES.hero}
            alt="Modern Manhattan commercial building interior and MEP architectural systems at twilight"
            className="w-full h-full object-cover object-center opacity-55 scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/95 via-[#111315]/80 to-[#111315]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/60" />
          <div className="absolute inset-0 bg-tech-grid-dark opacity-70" />
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-10 pt-16 pb-16 md:pt-24 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              <span>AVI MEP CONSULTANTS LLC</span>
              <span aria-hidden="true">·</span>
              <span>NEW YORK &amp; NEW JERSEY</span>
              <span aria-hidden="true">·</span>
              <span>REGISTERED NYC SPECIAL INSPECTIONS AGENCY</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.05] max-w-4xl">
              Engineering the Systems Behind Exceptional Spaces.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-normal">
              Comprehensive mechanical, electrical, plumbing, fire protection, Local Law 87 &amp; 97 energy compliance, and NYC Chapter 17 special inspections for residential, commercial, and institutional architecture.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 bg-[#152EAF] hover:bg-[#1D3BD2] text-white font-semibold text-sm inline-flex items-center gap-3 transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm inline-flex items-center gap-3 transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 border border-white/15 bg-[#111315]/80 backdrop-blur-md p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono-tech text-xs text-[#38BDF8]">
                FEATURED PORTFOLIO BENCHMARK
              </span>
              <span className="font-mono-tech text-xs text-white/50">NYC · NJ · DE</span>
            </div>

            <div className="space-y-3">
              <p className="font-display text-lg font-bold text-white">
                380 4th Avenue · Park Hyatt NY · 185 Greenwich St
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                From 17-story, 197-unit ground-up residential developments in Brooklyn to Midtown luxury hospitality and Santiago Calatrava-designed transportation infrastructure.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-white/60">99 WALL ST #631, NYC</span>
              <button
                type="button"
                onClick={() => onSelectProject(PROJECTS_DATA[0])}
                className="text-[#38BDF8] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Inspect Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/15 bg-[#111315]/90 backdrop-blur-md">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { label: 'MECHANICAL', code: 'HVAC · VRF · BMS', idx: 0 },
              { label: 'ELECTRICAL', code: 'CRITICAL & STANDBY POWER', idx: 1 },
              { label: 'PLUMBING', code: 'DEP SD1/SD2 & BACKFLOW', idx: 2 },
              { label: 'FIRE PROTECTION', code: 'NFPA 13 / 14 HYDRAULICS', idx: 3 },
              { label: 'ENERGY AUDITS', code: 'LOCAL LAW 87 & LL97', idx: 4 },
              { label: 'INSPECTIONS', code: 'NYC DOB CHAPTER 17', idx: 5 },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onSelectService(SERVICES_DATA[item.idx])}
                className="py-4 px-4 text-left hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#38BDF8] mb-1">
                  <span>0{item.idx + 1}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="font-mono-tech text-xs font-semibold text-white tracking-wide">
                  {item.label}
                </p>
                <p className="font-mono-tech text-[11px] text-white/50 truncate mt-0.5">
                  {item.code}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TRUST / CREDENTIAL STRIP */}
      <section
        aria-label="Company Credentials and Verified Metrics"
        className="bg-white border-b border-[#111315]/10"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#111315]/10">
          {COMPANY_INFO.verifiedStats.map((stat, idx) => (
            <div key={idx} className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display text-3xl md:text-4xl font-bold text-[#111315] font-mono-tech">
                  {stat.value}
                </span>
                <span className="font-mono-tech text-xs text-[#152EAF] font-semibold">
                  VERIFIED · 0{idx + 1}
                </span>
              </div>
              <p className="text-sm font-bold text-[#111315] mb-1">{stat.label}</p>
              <p className="text-xs text-[#525866] leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EDITORIAL SPLIT-SCREEN INTRODUCTION */}
      <section className="py-20 md:py-28 bg-[#F6F5F2] border-b border-[#111315]/10 bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider">
              ABOUT AVI MEP CONSULTANTS LLC
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315] leading-[1.12]">
              Engineering expertise that brings complex building systems together.
            </h2>
            <div className="p-6 bg-white border border-[#111315]/10 space-y-3">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-semibold text-[#152EAF]">
                <ShieldCheck className="w-4 h-4" />
                <span>MUNICIPAL &amp; REGULATORY CREDENTIALS</span>
              </div>
              <p className="text-xs md:text-sm text-[#374151] leading-relaxed">
                {COMPANY_INFO.mbeNotice}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-base md:text-lg text-[#111315] leading-relaxed font-medium">
              {COMPANY_INFO.establishedSummary}
            </p>
            <p className="text-sm md:text-base text-[#374151] leading-relaxed">
              {COMPANY_INFO.detailedOverview}
            </p>

            <div className="pt-4 border-t border-[#111315]/10">
              <p className="font-mono-tech text-xs text-[#525866] font-semibold mb-4">
                MULTIDISCIPLINARY ENGINEERING STAFF
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_INFO.specialistCredentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-[#111315] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#152EAF] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#152EAF] hover:text-[#111315] transition-colors cursor-pointer group"
              >
                <span>About Avi MEP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE NUMBERED SERVICES SHOWCASE */}
      <section className="py-20 md:py-28 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                CORE ENGINEERING CAPABILITIES
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315]">
                Integrated MEP &amp; Advisory Services.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-[#152EAF] hover:text-[#111315] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>View Full Technical Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 divide-y divide-[#111315]/10 border-t border-b border-[#111315]/10">
              {SERVICES_DATA.map((service, idx) => {
                const isSelected = activeServiceIndex === idx;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceIndex(idx)}
                    onFocus={() => setActiveServiceIndex(idx)}
                    className={`group transition-colors duration-150 ${
                      isSelected ? 'bg-[#F6F5F2]' : 'bg-white hover:bg-[#F6F5F2]/60'
                    }`}
                  >
                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex items-start gap-5">
                        <span
                          className={`font-mono-tech text-sm md:text-base font-semibold pt-1 transition-transform duration-200 ${
                            isSelected
                              ? 'text-[#152EAF] translate-x-0.5'
                              : 'text-[#525866] group-hover:text-[#152EAF]'
                          }`}
                        >
                          {service.number}
                        </span>
                        <div className="space-y-2">
                          <div className="font-mono-tech text-[11px] text-[#525866]">
                            {service.disciplineTag}
                          </div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111315] group-hover:text-[#152EAF] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-[#374151] leading-relaxed max-w-xl">
                            {service.summary}
                          </p>

                          {isSelected && (
                            <div className="pt-3 flex flex-wrap items-center gap-4">
                              <button
                                type="button"
                                onClick={() => onSelectService(service)}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#152EAF] hover:underline cursor-pointer"
                              >
                                <span>Explore Service</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs text-[#525866]" aria-hidden="true">
                                ·
                              </span>
                              <span className="font-mono-tech text-xs text-[#525866]">
                                {service.regulatoryCodes[0]}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectService(service)}
                        aria-label={`Explore ${service.title}`}
                        className={`self-start w-10 h-10 shrink-0 flex items-center justify-center border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#152EAF] text-white border-[#152EAF]'
                            : 'border-[#111315]/15 text-[#111315] group-hover:border-[#152EAF]'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28 bg-[#111315] text-white border border-[#111315] overflow-hidden">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#181B20]">
                <ResilientImage
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/30 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono-tech text-xs text-white/80">
                  <span className="bg-[#111315]/80 px-2.5 py-1 border border-white/15">
                    DISCIPLINE {activeService.number}
                  </span>
                  <span className="bg-[#111315]/80 px-2.5 py-1 border border-white/15 text-[#38BDF8]">
                    {activeService.disciplineTag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 bg-tech-grid-dark">
                <div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">
                    {activeService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono-tech text-[11px] text-[#38BDF8] mb-3">
                    KEY DELIVERABLES &amp; SCOPE
                  </p>
                  <ul className="space-y-2">
                    {activeService.scopeOfWork.slice(0, 4).map((scope, i) => (
                      <li key={i} className="text-xs text-white/85 flex items-start gap-2">
                        <span className="font-mono-tech text-[#38BDF8]">0{i + 1}</span>
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(activeService)}
                    className="w-full py-3.5 px-5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Explore {activeService.shortTitle} Specification</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS — EDITORIAL ARCHITECTURAL SHOWCASE */}
      <section className="py-20 md:py-28 bg-[#F6F5F2] border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                SELECTED ENGINEERING PORTFOLIO
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315]">
                Featured Building Projects.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono-tech text-xs text-[#525866]">
                SHOWING 6 OF 16 VERIFIED PROJECTS
              </span>
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="px-5 py-3 bg-[#111315] hover:bg-[#152EAF] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>View All 16 Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {featuredProjects.map((project, index) => {
              const colSpanClass = index < 2 ? 'lg:col-span-6' : 'lg:col-span-6';
              const imageHeightClass = index < 2 ? 'h-[340px] sm:h-[420px]' : 'h-[280px] sm:h-[340px]';

              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpanClass} group bg-white border border-[#111315]/10 hover:border-[#152EAF] transition-colors overflow-hidden flex flex-col cursor-pointer`}
                >
                  <div className={`relative ${imageHeightClass} w-full overflow-hidden bg-[#111315]`}>
                    <ResilientImage
                      src={project.image}
                      alt={`${project.name} — ${project.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/85 via-[#111315]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono-tech text-white">
                      <span className="bg-[#111315]/80 px-2.5 py-1 border border-white/15">
                        PROJECT 0{index + 1}
                      </span>
                      <span className="bg-[#111315]/80 px-2.5 py-1 border border-white/15 text-[#38BDF8]">
                        {project.completion}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between gap-4">
                      <div>
                        <p className="font-mono-tech text-xs text-[#38BDF8] mb-1">
                          <span>{project.category}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{project.boroughOrCity}</span>
                        </p>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          {project.name}
                        </h3>
                      </div>
                      <div className="w-10 h-10 shrink-0 bg-[#152EAF] text-white flex items-center justify-center group-hover:bg-[#38BDF8] group-hover:text-[#111315] transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#525866]">
                        <span>{project.location}</span>
                        {project.architect && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#111315] font-medium">
                              Architect: {project.architect}
                            </span>
                          </>
                        )}
                        {project.projectCost && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#111315] font-medium">
                              Project Cost: {project.projectCost}
                            </span>
                          </>
                        )}
                        {project.scaleSummary && !project.architect && !project.projectCost && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#111315] font-medium">
                              {project.scaleSummary}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="text-sm text-[#374151] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#111315]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs font-mono-tech text-[#525866] truncate">
                        <span className="text-[#111315] font-semibold">MEP SCOPE: </span>
                        {project.mepScope.slice(0, 3).join(' · ')}
                      </div>
                      <span className="text-xs font-bold text-[#152EAF] group-hover:underline whitespace-nowrap shrink-0">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY AVI MEP — DARK TECHNICAL DIFFERENTIATION SECTION */}
      <section className="py-20 md:py-28 bg-[#111315] text-white border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-10">
              <div>
                <p className="font-mono-tech text-xs text-[#38BDF8] font-semibold tracking-wider mb-3">
                  WHY AVI MEP CONSULTANTS
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Coordinated Building Systems. Code-First Execution.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                  Complex urban construction leaves zero margin for uncoordinated ductwork, undersized electrical feeders, or delayed municipal sign-offs. We unite design engineering, energy compliance, and NYC Special Inspections under one roof.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {[
                  {
                    num: '01',
                    title: 'Engineering Precision',
                    desc: 'Rigorous load calculations, hydraulic modeling, and BIM/CAD spatial coordination prepared by licensed engineers.',
                  },
                  {
                    num: '02',
                    title: 'Collaborative Approach',
                    desc: 'Trusted engineering partner to renowned studios including Santiago Calatrava, Leroy Street Studio, Mesh Architecture, and Loadingdock5.',
                  },
                  {
                    num: '03',
                    title: 'Integrated MEP & Inspections',
                    desc: 'Registered NYC Special Inspections Agency covering 12 Building Code Chapter 17 & NYCECC inspection categories.',
                  },
                  {
                    num: '04',
                    title: 'Energy & Local Law Authority',
                    desc: 'Certified Energy Managers (CEM) and Auditors (CEA) guiding Local Law 87, Local Law 97, and commissioning compliance.',
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.num}
                    className="p-6 border border-white/15 bg-white/[0.02] hover:border-[#38BDF8]/60 transition-colors"
                  >
                    <div className="font-mono-tech text-xs text-[#38BDF8] mb-2">
                      PILLAR {pillar.num}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 border border-white/15 bg-[#16191E] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <p className="font-mono-tech text-xs text-[#38BDF8]">
                    INTERACTIVE BUILDING RISER SCHEMATIC
                  </p>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">
                    Multi-Discipline System Integration
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-1 bg-[#111315] p-1 border border-white/10">
                  {[
                    { id: 'all', label: 'All Systems' },
                    { id: 'mech', label: 'HVAC' },
                    { id: 'elec', label: 'Power' },
                    { id: 'plumb', label: 'Plumbing/Fire' },
                    { id: 'energy', label: 'LL87/97' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveSystemLayer(tab.id as typeof activeSystemLayer)}
                      className={`px-2.5 py-1 text-[11px] font-mono-tech transition-colors cursor-pointer whitespace-nowrap ${
                        activeSystemLayer === tab.id
                          ? 'bg-[#152EAF] text-white font-semibold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-6 relative bg-[#111315] border border-white/10 p-4 sm:p-6">
                <svg
                  viewBox="0 0 600 360"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Technical schematic diagram showing Mechanical, Electrical, Plumbing, and Energy systems across a high-rise building"
                >
                  <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                    <line x1="0" y1="60" x2="600" y2="60" />
                    <line x1="0" y1="120" x2="600" y2="120" />
                    <line x1="0" y1="180" x2="600" y2="180" />
                    <line x1="0" y1="240" x2="600" y2="240" />
                    <line x1="0" y1="300" x2="600" y2="300" />
                    <line x1="120" y1="0" x2="120" y2="360" />
                    <line x1="240" y1="0" x2="240" y2="360" />
                    <line x1="360" y1="0" x2="360" y2="360" />
                    <line x1="480" y1="0" x2="480" y2="360" />
                  </g>

                  <rect
                    x="140"
                    y="30"
                    width="320"
                    height="290"
                    fill="rgba(255,255,255,0.02)"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                  />
                  {[80, 130, 180, 230, 275].map((y, idx) => (
                    <g key={y}>
                      <line
                        x1="140"
                        y1={y}
                        x2="460"
                        y2={y}
                        stroke="rgba(255,255,255,0.18)"
                        strokeDasharray="4 4"
                      />
                      <text
                        x="100"
                        y={y + 4}
                        fill="rgba(255,255,255,0.45)"
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        FL 0{6 - idx}
                      </text>
                    </g>
                  ))}

                  {(activeSystemLayer === 'all' || activeSystemLayer === 'mech') && (
                    <g>
                      <rect
                        x="180"
                        y="12"
                        width="90"
                        height="18"
                        fill="#38BDF8"
                        fillOpacity="0.2"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="225"
                        y1="30"
                        x2="225"
                        y2="295"
                        stroke="#38BDF8"
                        strokeWidth="3"
                      />
                      {[60, 105, 155, 205, 255].map((y) => (
                        <line
                          key={y}
                          x1="225"
                          y1={y}
                          x2="310"
                          y2={y}
                          stroke="#38BDF8"
                          strokeWidth="1.5"
                        />
                      ))}
                      <circle cx="225" cy="30" r="4" fill="#38BDF8" />
                      <text
                        x="475"
                        y="55"
                        fill="#38BDF8"
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        HVAC / VRF RISER
                      </text>
                    </g>
                  )}

                  {(activeSystemLayer === 'all' || activeSystemLayer === 'elec') && (
                    <g>
                      <line
                        x1="340"
                        y1="45"
                        x2="340"
                        y2="305"
                        stroke="#F59E0B"
                        strokeWidth="2.5"
                      />
                      <rect
                        x="315"
                        y="285"
                        width="55"
                        height="25"
                        fill="#F59E0B"
                        fillOpacity="0.2"
                        stroke="#F59E0B"
                        strokeWidth="1.5"
                      />
                      <text
                        x="475"
                        y="135"
                        fill="#F59E0B"
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        EMERGENCY POWER
                      </text>
                    </g>
                  )}

                  {(activeSystemLayer === 'all' || activeSystemLayer === 'plumb') && (
                    <g>
                      <line
                        x1="400"
                        y1="38"
                        x2="400"
                        y2="310"
                        stroke="#10B981"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="400"
                        y1="310"
                        x2="540"
                        y2="310"
                        stroke="#10B981"
                        strokeWidth="2.5"
                      />
                      <circle cx="400" cy="310" r="4" fill="#10B981" />
                      <text
                        x="475"
                        y="298"
                        fill="#10B981"
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        DEP SD1/SD2 &amp; RPZ
                      </text>
                    </g>
                  )}

                  {(activeSystemLayer === 'all' || activeSystemLayer === 'energy') && (
                    <g>
                      {[80, 180, 275].map((y) => (
                        <circle
                          key={y}
                          cx="280"
                          cy={y}
                          r="5"
                          fill="#A855F7"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                      ))}
                      <text
                        x="475"
                        y="215"
                        fill="#C084FC"
                        fontSize="10"
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        LL87 / LL97 METERING
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/70">
                <span>
                  Every riser, shaft, and utility entry is coordinated across architectural, structural, and municipal code requirements.
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('insights')}
                  className="font-mono-tech text-[#38BDF8] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect NYC Code Matrix →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING PROCESS */}
      <section className="py-20 md:py-28 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
              METHODOLOGY &amp; WORKFLOW
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315]">
              From Feasibility &amp; Filing to Final Inspection.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-[#111315]/10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 sm:p-8 border-r border-b border-[#111315]/10 flex flex-col justify-between bg-[#F6F5F2]/50 hover:bg-[#F6F5F2] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF] font-semibold mb-6">
                    <span>PHASE {step.number}</span>
                    <Compass className="w-4 h-4 text-[#111315]/30" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#111315] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-mono-tech text-[11px] text-[#525866] mb-4">
                    {step.subtitle}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SELECTED COLLABORATIONS */}
      <section className="py-20 md:py-28 bg-[#ECEAE4] border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                SELECTED CLIENTS &amp; ARCHITECTURAL COLLABORATIONS
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111315]">
                Trusted by Leading Architects, Developers &amp; Institutions.
              </h2>
            </div>
            <p className="text-sm text-[#374151] max-w-md">
              Verified project collaborations across Manhattan, Brooklyn, Queens, New Jersey, and Delaware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#111315]/10 bg-white">
            {ARCHITECTURAL_COLLABORATORS.map((collab, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 border-r border-b border-[#111315]/10 flex flex-col justify-between hover:bg-[#F6F5F2]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#525866] mb-3">
                    <span>{collab.sector}</span>
                    <span className="text-[#152EAF]">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#111315] mb-1">
                    {collab.firm}
                  </h3>
                  <p className="text-xs text-[#525866] mb-4">{collab.role}</p>
                </div>

                <div className="pt-4 border-t border-[#111315]/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono-tech text-[#525866] block">PROJECT</span>
                    <span className="font-semibold text-[#111315]">{collab.project}</span>
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#525866]">
                    {collab.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 sm:p-8 bg-[#111315] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="font-mono-tech text-xs text-[#38BDF8]">
                REGISTERED NYC SPECIAL INSPECTIONS AGENCY
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Certified for {SPECIAL_INSPECTIONS_LIST.length} NYC Building Code Chapter 17 &amp; Energy Inspections
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Including BC 1704.16 Mechanical Systems, BC 1704.15 Smoke Control, BC 1704.23 Sprinklers, BC 1704.21.2 Storm Water Detention, and BC 110.3.5 Energy Code Compliance.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('insights')}
              className="self-start lg:self-auto px-6 py-3.5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>View Full Inspection Code Schedule</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. TEAM SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                LEADERSHIP &amp; TEAM
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315]">
                Dedicated Engineering Professionals.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold text-[#152EAF] hover:text-[#111315] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.id}
                className="bg-[#F6F5F2] border border-[#111315]/10 flex flex-col overflow-hidden group"
              >
                <div className="h-72 w-full overflow-hidden bg-[#181B20]">
                  <ResilientImage
                    src={member.image}
                    alt={`${member.name} — ${member.role} at Avi MEP Consultants`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="font-mono-tech text-xs text-[#152EAF] font-semibold mb-1">
                      {member.role}
                    </p>
                    <h3 className="font-display text-xl font-bold text-[#111315] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#374151] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#111315]/10 font-mono-tech text-[11px] text-[#525866]">
                    {member.focusAreas}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOCATIONS */}
      <section className="py-20 md:py-28 bg-[#F6F5F2] border-b border-[#111315]/10 bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                STRATEGIC REGIONAL PRESENCE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111315]">
                New York &amp; New Jersey Offices.
              </h2>
            </div>

            <div className="flex items-center gap-1 bg-white p-1 border border-[#111315]/15 self-start">
              {OFFICE_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setActiveOfficeId(loc.id)}
                  className={`px-4 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activeOfficeId === loc.id
                      ? 'bg-[#111315] text-white'
                      : 'text-[#525866] hover:text-[#111315]'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#111315]/15 bg-white">
            <div className="lg:col-span-6 divide-y divide-[#111315]/10">
              {OFFICE_LOCATIONS.map((office) => {
                const isSelected = office.id === activeOfficeId;
                return (
                  <div
                    key={office.id}
                    onClick={() => setActiveOfficeId(office.id)}
                    className={`p-6 sm:p-8 transition-colors cursor-pointer ${
                      isSelected ? 'bg-[#F6F5F2]' : 'bg-white hover:bg-[#F6F5F2]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF] mb-2">
                      <span>{office.regionLabel}</span>
                      <span>{office.coordinates}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#111315] mb-3">
                      {office.name}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#374151] mb-5">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#152EAF] shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-[#111315]">{office.addressLine1}</p>
                          <p>{office.cityStateZip}</p>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#152EAF]" />
                          <a
                            href={`tel:${COMPANY_INFO.phoneRaw}`}
                            className="font-mono-tech text-xs font-semibold text-[#111315] hover:text-[#152EAF]"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#152EAF]" />
                          <a
                            href={`mailto:${office.email}`}
                            className="font-mono-tech text-xs font-semibold text-[#111315] hover:text-[#152EAF]"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#111315]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#525866]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#152EAF]" />
                        <span>{office.hours}</span>
                      </div>
                      <span className="font-mono-tech text-[11px]">{office.closedDays}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-6 bg-[#111315] text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#111315]/15 bg-tech-grid-dark">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono-tech text-xs text-[#38BDF8]">
                    REGIONAL SERVICE CORRIDOR
                  </p>
                  <h4 className="font-display text-xl font-bold text-white mt-0.5">
                    {selectedOffice.name} — {selectedOffice.cityStateZip}
                  </h4>
                </div>
                <span className="font-mono-tech text-xs text-white/60">
                  {selectedOffice.coordinates}
                </span>
              </div>

              <div className="my-6 bg-[#16191E] border border-white/10 p-6">
                <svg
                  viewBox="0 0 520 240"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Schematic regional map showing Avi MEP Consultants offices in Wall Street New York and North Brunswick New Jersey"
                >
                  <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                    <line x1="0" y1="60" x2="520" y2="60" />
                    <line x1="0" y1="120" x2="520" y2="120" />
                    <line x1="0" y1="180" x2="520" y2="180" />
                    <line x1="130" y1="0" x2="130" y2="240" />
                    <line x1="260" y1="0" x2="260" y2="240" />
                    <line x1="390" y1="0" x2="390" y2="240" />
                  </g>

                  <path
                    d="M 110 205 L 235 135 L 365 65"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.45)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                  />

                  <circle cx="110" cy="205" r="5" fill="#64748B" />
                  <text
                    x="124"
                    y="209"
                    fill="rgba(255,255,255,0.55)"
                    fontSize="10"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    WILMINGTON, DE (390 MITCH RD)
                  </text>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveOfficeId('new-jersey')}
                  >
                    <circle
                      cx="235"
                      cy="135"
                      r={activeOfficeId === 'new-jersey' ? '12' : '7'}
                      fill="rgba(21, 46, 175, 0.35)"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                    />
                    <circle cx="235" cy="135" r="4" fill="#38BDF8" />
                    <text
                      x="252"
                      y="132"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      NORTH BRUNSWICK, NJ OFFICE
                    </text>
                    <text
                      x="252"
                      y="146"
                      fill="#38BDF8"
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      1600 US-130, NJ 08902
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveOfficeId('new-york')}
                  >
                    <circle
                      cx="365"
                      cy="65"
                      r={activeOfficeId === 'new-york' ? '12' : '7'}
                      fill="rgba(21, 46, 175, 0.35)"
                      stroke="#38BDF8"
                      strokeWidth="1.5"
                    />
                    <circle cx="365" cy="65" r="4" fill="#38BDF8" />
                    <text
                      x="155"
                      y="48"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      NEW YORK HEADQUARTERS
                    </text>
                    <text
                      x="155"
                      y="63"
                      fill="#38BDF8"
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      99 WALL STREET #631, NY 10005
                    </text>
                  </g>
                </svg>
              </div>

              <div className="space-y-2">
                <p className="font-mono-tech text-xs text-[#38BDF8]">
                  JURISDICTIONS &amp; COVERAGE FROM THIS OFFICE
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {selectedOffice.jurisdictionsServed.map((item, idx) => (
                    <div key={idx} className="text-xs text-white/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#38BDF8] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative py-24 md:py-32 bg-[#111315] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={ASSET_IMAGES.mechanical}
            alt="Precision MEP building engineering plant room"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/90 to-[#111315]/75" />
          <div className="absolute inset-0 bg-tech-grid-dark" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <p className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              READY TO ENGINEER YOUR NEXT BUILDING
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Let’s Engineer What’s Next.
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Have a project that requires thoughtful, coordinated MEP engineering, Local Law 87/97 energy auditing, or NYC Special Inspections?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#152EAF] hover:bg-[#1D3BD2] text-white font-semibold text-sm inline-flex items-center gap-3 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono-tech text-xs sm:text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
