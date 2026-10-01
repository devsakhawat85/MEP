import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  PROJECTS_DATA,
  OFFICE_LOCATIONS,
  ServiceItem,
  ProjectItem,
} from '../data/avimepData';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onSelectProject,
}) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 6);

  return (
    <footer className="bg-[#111315] text-white border-t border-white/10 bg-tech-grid-dark">
      {/* Top Footer CTA Strip */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="font-mono-tech text-xs text-[#38BDF8] mb-2">
            START A CONVERSATION
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Have a project in mind?
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="self-start md:self-auto inline-flex items-center gap-3 px-7 py-4 bg-[#152EAF] hover:bg-[#1D3BD2] text-white font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap"
        >
          <span>Let’s talk</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Multi-Column Architectural Directory */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Col 1: Brand & Overview */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-display text-2xl font-bold tracking-tight text-white cursor-pointer"
            >
              AVI MEP CONSULTANTS
            </button>
            <p className="font-mono-tech text-xs text-white/50 mt-1">
              MECHANICAL · ELECTRICAL · PLUMBING · ENERGY · INSPECTIONS
            </p>
          </div>

          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            {COMPANY_INFO.establishedSummary}
          </p>

          <div className="pt-2 space-y-1.5 font-mono-tech text-xs text-white/80">
            <div>
              <span className="text-white/40">EMAIL: </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-[#38BDF8] transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
            <div>
              <span className="text-white/40">PHONE: </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hover:text-[#38BDF8] transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="text-white/50 pt-1">
              Registered NYC Special Inspections Agency
            </div>
          </div>
        </div>

        {/* Col 2: Engineering Services */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="font-mono-tech text-xs text-[#38BDF8] font-semibold tracking-wider">
            ENGINEERING SERVICES
          </h3>
          <ul className="space-y-2.5">
            {SERVICES_DATA.map((service) => (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-sm text-white/75 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {service.shortTitle}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Selected Projects */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-mono-tech text-xs text-[#38BDF8] font-semibold tracking-wider">
            SELECTED WORK
          </h3>
          <ul className="space-y-2.5">
            {featuredProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-sm text-white/75 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {project.name}
                </button>
              </li>
            ))}
            <li className="pt-1">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="text-xs font-mono-tech text-[#38BDF8] hover:underline cursor-pointer"
              >
                All 16 Projects →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Verified Offices */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-mono-tech text-xs text-[#38BDF8] font-semibold tracking-wider">
            OFFICE LOCATIONS
          </h3>
          <div className="space-y-5">
            {OFFICE_LOCATIONS.map((office) => (
              <div key={office.id} className="text-sm space-y-1">
                <p className="font-semibold text-white">{office.name}</p>
                <p className="text-white/70">{office.addressLine1}</p>
                <p className="text-white/70">{office.cityStateZip}</p>
                <p className="font-mono-tech text-[11px] text-white/40 pt-0.5">
                  {office.coordinates}
                </p>
              </div>
            ))}
            <div className="pt-2 border-t border-white/10 text-xs text-white/60 space-y-1">
              <p>Hours: Mon – Fri, 9:00 AM – 5:00 PM</p>
              <p>Closed: Sat, Sun, Diwali, Christmas &amp; New Year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Navigation Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Avi MEP Consultants LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('insights')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              NYC Codes &amp; Inspections
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
