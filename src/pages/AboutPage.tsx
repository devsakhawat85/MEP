import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import {
  COMPANY_INFO,
  TEAM_MEMBERS,
  OFFICE_LOCATIONS,
  ARCHITECTURAL_COLLABORATORS,
  ASSET_IMAGES,
} from '../data/avimepData';
import { PageRoute } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      {/* 1. Hero Section */}
      <section className="bg-[#111315] text-white py-20 md:py-28 border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              ABOUT AVI MEP CONSULTANTS LLC
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Dedicated to Technical Excellence in the Built Environment.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {COMPANY_INFO.establishedSummary}
            </p>
          </div>

          <div className="lg:col-span-4 border border-white/15 bg-white/[0.03] p-6 space-y-3">
            <p className="font-mono-tech text-xs text-[#38BDF8]">
              EXECUTIVE SUMMARY
            </p>
            <div className="space-y-2 text-xs font-mono-tech text-white/80">
              <p>FOUNDER &amp; CEO: AVINASH CHAUHAN</p>
              <p>NY OFFICE: 99 WALL STREET #631, NYC</p>
              <p>NJ OFFICE: 1600 US-130, NORTH BRUNSWICK</p>
              <p>STATUS: NYC SPECIAL INSPECTIONS AGENCY</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Overview & Mission / Approach */}
      <section className="py-20 md:py-28 bg-[#F6F5F2] border-b border-[#111315]/10 bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider">
              01. COMPANY OVERVIEW &amp; MISSION
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315] leading-tight">
              Technically sound, innovative, and cost-effective engineering solutions.
            </h2>
            <p className="text-base text-[#374151] leading-relaxed">
              {COMPANY_INFO.detailedOverview}
            </p>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              As a registered New York City Special Inspections Agency, we offer a comprehensive suite of Chapter 17 and Energy Code inspection services—reflecting our dedication to construction quality, life safety, and long-term operational sustainability.
            </p>

            <div className="p-6 bg-white border border-[#111315]/15 space-y-2">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-semibold text-[#152EAF]">
                <ShieldCheck className="w-4 h-4" />
                <span>MBE · SBE · SBA 8(a) REGISTRATION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111315] leading-relaxed">
                {COMPANY_INFO.mbeNotice}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="h-80 sm:h-96 w-full overflow-hidden bg-[#111315] border border-[#111315]/15">
              <ResilientImage
                src={ASSET_IMAGES.energy}
                alt="Avi MEP engineering consultation and site inspection"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#111315]/15 bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#111315]/10">
              {COMPANY_INFO.verifiedStats.map((stat, idx) => (
                <div key={idx} className="p-4">
                  <p className="font-display text-2xl font-bold text-[#111315] font-mono-tech">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-[#152EAF] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multidisciplinary Expertise */}
      <section className="py-20 md:py-24 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
              02. MULTIDISCIPLINARY CREDENTIALS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315]">
              Specialists Across Every Building System.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Licensed Professional Engineers (PE)',
                desc: 'Responsible charge for mechanical, electrical, plumbing, and fire protection construction documents and municipal DOB/DEP filings.',
              },
              {
                title: 'Certified Energy Managers (CEM)',
                desc: 'Strategic energy optimization, electrification planning, and Local Law 97 carbon emission reduction engineering.',
              },
              {
                title: 'Certified Energy Auditors (CEA)',
                desc: 'Comprehensive ASHRAE Level I, II, and III building energy audits and Local Law 87 compliance reporting.',
              },
              {
                title: 'Commissioning & Retro-Commissioning Specialists',
                desc: 'Functional performance testing, BMS calibration, and Retro-Commissioning (RCx) to ensure systems operate as designed.',
              },
              {
                title: 'Certified Facilities Managers & Green Building Engineers',
                desc: 'Lifecycle operational efficiency, sustainable material/system selection, and long-term asset reliability.',
              },
              {
                title: 'Registered NYC Special Inspectors',
                desc: 'Independent technical verification across 12 NYC Building Code Chapter 17 and NYCECC Energy Code inspection categories.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F6F5F2] border border-[#111315]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF] mb-3">
                    <span>EXPERTISE 0{idx + 1}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#111315] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Directory */}
      <section className="py-20 md:py-28 bg-[#F6F5F2] border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
              03. LEADERSHIP &amp; CORE TEAM
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111315]">
              Meet the Professionals at Avi MEP.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <article
                key={member.id}
                className="bg-white border border-[#111315]/10 grid grid-cols-1 sm:grid-cols-12 overflow-hidden"
              >
                <div className="sm:col-span-5 h-72 sm:h-full bg-[#181B20] overflow-hidden">
                  <ResilientImage
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF] mb-1">
                      <span>{member.role}</span>
                      <span>0{idx + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#111315] mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#374151] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#111315]/10">
                    <span className="font-mono-tech text-[11px] text-[#525866] block mb-1">
                      CORE FOCUS
                    </span>
                    <p className="font-mono-tech text-xs text-[#111315] font-medium">
                      {member.focusAreas}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Project Experience & Collaborations */}
      <section className="py-20 md:py-24 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
                04. PROJECT EXPERIENCE &amp; PARTNERSHIPS
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315]">
                Architectural &amp; Development Collaborations.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="px-5 py-3 bg-[#111315] hover:bg-[#152EAF] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap self-start"
            >
              <span>Explore All 16 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#111315]/10">
            {ARCHITECTURAL_COLLABORATORS.map((item, i) => (
              <div
                key={i}
                className="p-6 border-r border-b border-[#111315]/10 bg-[#F6F5F2]/40"
              >
                <p className="font-mono-tech text-xs text-[#152EAF] mb-1">
                  {item.sector}
                </p>
                <h3 className="font-display text-lg font-bold text-[#111315]">
                  {item.firm}
                </h3>
                <p className="text-xs text-[#525866] mt-1">
                  Project: <strong className="text-[#111315]">{item.project}</strong> ({item.location})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Verified Office Locations */}
      <section className="py-20 md:py-24 bg-[#111315] text-white bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="font-mono-tech text-xs text-[#38BDF8] tracking-wider mb-3">
              05. OFFICE LOCATIONS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Strategically Located in New York &amp; New Jersey.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFICE_LOCATIONS.map((office) => (
              <div
                key={office.id}
                className="p-8 border border-white/15 bg-white/[0.03] space-y-5"
              >
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#38BDF8]">
                  <span>{office.regionLabel}</span>
                  <span>{office.coordinates}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {office.name}
                </h3>

                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                    <span>
                      {office.addressLine1}, {office.cityStateZip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#38BDF8]">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#38BDF8]">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{office.hours} ({office.closedDays})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
