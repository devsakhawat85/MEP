import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, LayoutGrid, List, MapPin } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/avimepData';
import { PageRoute } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';

interface ProjectsPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'schedule'>('grid');

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Hospitality',
    'Healthcare',
    'Transportation',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCat =
        selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.boroughOrCity.toLowerCase().includes(q) ||
        (project.architect && project.architect.toLowerCase().includes(q)) ||
        project.subType.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full pt-20">
      {/* Portfolio Hero */}
      <section className="bg-[#111315] text-white py-20 md:py-28 border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-5">
              <div className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
                VERIFIED ENGINEERING PORTFOLIO · 16 SELECTED WORKS
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
                Selected MEP Engineering Projects.
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
                Explore our portfolio of residential high-rises, commercial tenant fit-outs, hospitality flagships, transportation hubs, and healthcare facilities across New York, New Jersey, and Delaware.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-4 border border-white/15 bg-white/[0.03] p-6">
              <div className="font-mono-tech text-xs text-[#38BDF8]">
                PORTFOLIO COVERAGE
              </div>
              <div className="text-xs text-white/80 space-y-1 font-mono-tech">
                <p>MANHATTAN · BROOKLYN · QUEENS</p>
                <p>NORTH BRUNSWICK &amp; PASSAIC, NJ</p>
                <p>WILMINGTON, DELAWARE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#111315] text-white'
                      : 'bg-[#F6F5F2] text-[#374151] hover:bg-[#ECEAE4] hover:text-[#111315]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 font-mono-tech text-[11px] opacity-65">
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#525866] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search address, architect..."
                aria-label="Search projects by name, address, or architect"
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#F6F5F2] border border-[#111315]/15 focus:border-[#152EAF] focus:outline-none text-[#111315]"
              />
            </div>

            <div className="flex items-center border border-[#111315]/15 bg-[#F6F5F2] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Editorial Grid View"
                className={`p-2 transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#111315] text-white'
                    : 'text-[#525866] hover:text-[#111315]'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('schedule')}
                aria-label="Architectural Schedule Table View"
                className={`p-2 transition-colors cursor-pointer ${
                  viewMode === 'schedule'
                    ? 'bg-[#111315] text-white'
                    : 'text-[#525866] hover:text-[#111315]'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 md:py-24 bg-[#F6F5F2] min-h-[60vh] bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {filteredProjects.length === 0 ? (
            <div className="p-12 bg-white border border-[#111315]/10 text-center space-y-4">
              <p className="font-display text-xl font-bold text-[#111315]">
                No projects match your current filter criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-[#152EAF] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group bg-white border border-[#111315]/10 hover:border-[#152EAF] transition-colors flex flex-col overflow-hidden cursor-pointer"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-[#111315]">
                    <ResilientImage
                      src={project.image}
                      alt={`${project.name} — ${project.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono-tech text-[11px] text-white">
                      <span className="bg-[#111315]/80 px-2 py-0.5 border border-white/15">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="bg-[#111315]/80 px-2 py-0.5 border border-white/15 text-[#38BDF8]">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <p className="font-mono-tech text-[11px] text-white/75">
                          {project.boroughOrCity}
                        </p>
                        <h2 className="font-display text-xl font-bold text-white">
                          {project.name}
                        </h2>
                      </div>
                      <div className="w-8 h-8 bg-[#152EAF] text-white flex items-center justify-center group-hover:bg-[#38BDF8] group-hover:text-[#111315] transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#525866]">
                        <MapPin className="w-3.5 h-3.5 text-[#152EAF] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#374151] leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#111315]/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono-tech text-[#525866]">
                        <span>
                          {project.architect
                            ? `Architect: ${project.architect}`
                            : project.projectCost
                            ? `Cost: ${project.projectCost}`
                            : project.subType}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-[#152EAF]">
                        <span>Inspect Full Case Study</span>
                        <span>{project.completion}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#111315]/15 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111315] text-white font-mono-tech text-xs">
                    <th className="py-3.5 px-4">INDEX</th>
                    <th className="py-3.5 px-4">PROJECT NAME</th>
                    <th className="py-3.5 px-4">LOCATION</th>
                    <th className="py-3.5 px-4">SECTOR</th>
                    <th className="py-3.5 px-4">ARCHITECT / DETAILS</th>
                    <th className="py-3.5 px-4">STATUS</th>
                    <th className="py-3.5 px-4 text-right">CASE STUDY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111315]/10 text-xs sm:text-sm">
                  {filteredProjects.map((proj, idx) => (
                    <tr
                      key={proj.id}
                      onClick={() => onSelectProject(proj)}
                      className="hover:bg-[#F6F5F2] transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-4 font-mono-tech text-xs text-[#525866]">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="py-4 px-4 font-display font-bold text-[#111315]">
                        {proj.name}
                      </td>
                      <td className="py-4 px-4 text-[#374151]">{proj.location}</td>
                      <td className="py-4 px-4 font-mono-tech text-xs text-[#152EAF]">
                        {proj.category}
                      </td>
                      <td className="py-4 px-4 text-xs text-[#525866]">
                        {proj.architect
                          ? `Architect: ${proj.architect}`
                          : proj.projectCost
                          ? `Cost: ${proj.projectCost}`
                          : proj.scaleSummary}
                      </td>
                      <td className="py-4 px-4 font-mono-tech text-xs text-[#374151]">
                        {proj.completion}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold text-[#152EAF]">
                          <span>Open</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#111315] text-white border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Planning a residential, commercial, or institutional project?
            </h2>
            <p className="text-sm text-white/70 mt-1">
              Connect with our New York or New Jersey engineering offices for a coordinated MEP proposal.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
