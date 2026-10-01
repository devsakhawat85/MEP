import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, FileText, ShieldCheck, Building2 } from 'lucide-react';
import { SPECIAL_INSPECTIONS_LIST } from '../data/avimepData';
import { PageRoute } from '../components/Navbar';

interface InsightsPageProps {
  onNavigate: (page: PageRoute) => void;
  onInquireTopic: (topic: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  onInquireTopic,
}) => {
  const [buildingSqFt, setBuildingSqFt] = useState<'under25k' | '25kto50k' | 'over50k'>('over50k');
  const [buildingSector, setBuildingSector] = useState<'multifamily' | 'commercial' | 'hospitality'>('multifamily');

  const complianceRecommendations = {
    under25k: {
      headline: 'Targeted MEP Optimization & NYCECC Compliance',
      mandates: [
        'Exempt from mandatory LL87 decennial audit thresholds, but subject to NYCECC Energy Code on alterations & new builds',
        'Eligible for Con Edison & NYSERDA heat pump and lighting electrification incentives',
        'Requires NYC DEP Backflow Prevention (RPZ/DCVA) annual testing & filing compliance',
      ],
    },
    '25kto50k': {
      headline: 'Local Law 97 Carbon Caps & Annual Benchmarking Mandate',
      mandates: [
        'Subject to NYC Local Law 97 greenhouse gas emission limits (2024–2029 and 2030–2034 compliance periods)',
        'Mandatory annual energy and water Benchmarking filing',
        'Recommended ASHRAE energy audit and electrification roadmap to eliminate carbon penalty exposure',
      ],
    },
    over50k: {
      headline: 'Full Local Law 87 (Audit + RCx) & Local Law 97 Compliance',
      mandates: [
        'Mandatory Local Law 87 Energy Efficiency Report (EER): ASHRAE Level II Energy Audit + Retro-Commissioning (RCx)',
        'Subject to strict Local Law 97 carbon emissions limits and annual Benchmarking',
        'Requires Certified Energy Manager (CEM) / Certified Energy Auditor (CEA) & Registered Design Professional sign-off',
      ],
    },
  };

  const currentRec = complianceRecommendations[buildingSqFt];

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-[#111315] text-white py-20 md:py-28 border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-5">
            <div className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              TECHNICAL INSIGHTS · CODES &amp; REGULATORY GUIDES
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              NYC &amp; Regional Engineering Code Reference.
            </h1>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Practical technical briefs from Avi MEP Consultants covering NYC Local Law 87 &amp; Local Law 97 energy mandates, DEP Site/Sewer (SD1/SD2) &amp; Backflow filings, and NYC Building Code Chapter 17 Special Inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Local Law 87 & 97 Advisory Tool */}
      <section className="py-20 md:py-24 bg-[#F6F5F2] border-b border-[#111315]/10 bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="font-mono-tech text-xs text-[#152EAF] font-semibold">
                01. INTERACTIVE COMPLIANCE BRIEF
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315]">
                Local Law 87 &amp; Local Law 97 Readiness Check.
              </h2>
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                Select your building gross floor area and primary occupancy to view the applicable NYC energy audit, retro-commissioning, and benchmarking scopes handled by Avi MEP’s Certified Energy Managers and Auditors.
              </p>

              {/* Gross Floor Area Selector */}
              <div className="space-y-2">
                <label className="block font-mono-tech text-xs text-[#525866]">
                  GROSS BUILDING FLOOR AREA (NYC)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'under25k', label: '< 25,000 SF' },
                    { id: '25kto50k', label: '25k – 50k SF' },
                    { id: 'over50k', label: '50,000+ SF' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBuildingSqFt(opt.id as typeof buildingSqFt)}
                      className={`py-3 px-3 text-xs font-mono-tech border transition-colors cursor-pointer whitespace-nowrap ${
                        buildingSqFt === opt.id
                          ? 'bg-[#111315] text-white border-[#111315] font-semibold'
                          : 'bg-white text-[#374151] border-[#111315]/15 hover:border-[#111315]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occupancy Selector */}
              <div className="space-y-2">
                <label className="block font-mono-tech text-xs text-[#525866]">
                  PRIMARY BUILDING OCCUPANCY
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'multifamily', label: 'Residential' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'hospitality', label: 'Hospitality' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBuildingSector(opt.id as typeof buildingSector)}
                      className={`py-3 px-3 text-xs font-mono-tech border transition-colors cursor-pointer whitespace-nowrap ${
                        buildingSector === opt.id
                          ? 'bg-[#152EAF] text-white border-[#152EAF] font-semibold'
                          : 'bg-white text-[#374151] border-[#111315]/15 hover:border-[#152EAF]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-7 bg-white border border-[#111315]/15 p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#111315]/10 font-mono-tech text-xs text-[#152EAF]">
                <span>APPLICABLE NYC ENERGY FRAMEWORK</span>
                <span>SECTOR: {buildingSector.toUpperCase()}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#111315]">
                {currentRec.headline}
              </h3>

              <div className="space-y-3">
                {currentRec.mandates.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F6F5F2] border border-[#111315]/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#152EAF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#111315] font-medium">
                      {m}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#111315]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-[#525866]">
                  Prepared by Avi MEP Certified Energy Managers (CEM) &amp; Certified Energy Auditors (CEA).
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onInquireTopic(`Local Law 87 / 97 Audit (${buildingSqFt}, ${buildingSector})`)
                  }
                  className="px-5 py-3 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap self-start"
                >
                  <span>Request Energy Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Technical Guides */}
      <section className="py-20 md:py-24 bg-white border-b border-[#111315]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="font-mono-tech text-xs text-[#152EAF] font-semibold tracking-wider mb-3">
              02. CORE TECHNICAL GUIDES
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111315]">
              Regulatory &amp; Engineering Focus Areas.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="p-8 bg-[#F6F5F2] border border-[#111315]/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF]">
                  <span>DEP · CIVIL &amp; PLUMBING</span>
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111315]">
                  Site/Sewer Connection (SD1, SD2) &amp; Backflow Prevention Filings
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Every new development and major alteration in New York City requires certified Site/Sewer Connection (SD1, SD2) calculations to verify municipal sanitary and storm sewer capacity, paired with cross-connection Backflow Prevention (RPZ / DCVA) designs to safeguard the public water supply.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#111315] font-medium">
                  <li>· Sanitary &amp; storm hydraulic runoff modeling</li>
                  <li>· On-site detention tank sizing (BC 1704.21.2)</li>
                  <li>· NYC DEP &amp; NYS DOH backflow approval packages</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onInquireTopic('Site/Sewer Connection (SD1, SD2) & Backflow Filing')}
                className="pt-4 border-t border-[#111315]/10 flex items-center justify-between text-xs font-bold text-[#152EAF] hover:underline cursor-pointer"
              >
                <span>Consult on SD1/SD2 or Backflow Filing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-8 bg-[#F6F5F2] border border-[#111315]/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF]">
                  <span>ELECTRICAL · RESILIENCY</span>
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111315]">
                  Critical &amp; Emergency Power Systems Engineering
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Uninterrupted power is essential for healthcare facilities, high-rise life safety systems, and commercial operations. Avi MEP designs, implements, and maintains standby generators, automatic transfer switches (ATS), and uninterruptible power supply (UPS) systems.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#111315] font-medium">
                  <li>· NFPA 110 &amp; NYC Electrical Code life-safety branches</li>
                  <li>· Selective coordination &amp; arc-flash engineering</li>
                  <li>· Fuel-oil / natural gas supply &amp; exhaust coordination</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onInquireTopic('Critical & Emergency Power Systems')}
                className="pt-4 border-t border-[#111315]/10 flex items-center justify-between text-xs font-bold text-[#152EAF] hover:underline cursor-pointer"
              >
                <span>Consult on Critical Power Design</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>

            <article className="p-8 bg-[#F6F5F2] border border-[#111315]/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#152EAF]">
                  <span>NYC DOB · CHAPTER 17</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111315]">
                  Registered NYC Special Inspections Agency Protocol
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Avoid Certificate of Occupancy delays by engaging a registered NYC Special Inspections Agency early in construction. We inspect mechanical systems, smoke control, sprinklers, standpipes, high-pressure gas welding, firestopping, and energy code compliance.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#111315] font-medium">
                  <li>· 12 registered NYC Building Code inspection categories</li>
                  <li>· TR1 &amp; TR8 technical responsibility sign-offs</li>
                  <li>· Field deficiency resolution by licensed engineers</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onInquireTopic('NYC Special Inspections (TR1 / TR8)')}
                className="pt-4 border-t border-[#111315]/10 flex items-center justify-between text-xs font-bold text-[#152EAF] hover:underline cursor-pointer"
              >
                <span>Schedule NYC Special Inspection</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Complete Special Inspections Reference Table */}
      <section className="py-20 md:py-24 bg-[#111315] text-white bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="font-mono-tech text-xs text-[#38BDF8] mb-2">
                03. COMPLETE CHAPTER 17 &amp; NYCECC SCHEDULE
              </p>
              <h2 className="font-display text-3xl font-bold text-white">
                Verified NYC Special Inspection Codes
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-[#152EAF] hover:bg-[#1D3BD2] text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer self-start"
            >
              <span>Request Inspection Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border border-white/15 overflow-x-auto bg-[#16191E]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 font-mono-tech text-xs text-[#38BDF8]">
                  <th className="py-3.5 px-5">NYC CODE SECTION</th>
                  <th className="py-3.5 px-5">INSPECTION TITLE</th>
                  <th className="py-3.5 px-5">DISCIPLINE</th>
                  <th className="py-3.5 px-5">TECHNICAL VERIFICATION SCOPE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {SPECIAL_INSPECTIONS_LIST.map((item) => (
                  <tr key={item.code} className="hover:bg-white/[0.03]">
                    <td className="py-4 px-5 font-mono-tech font-semibold text-[#38BDF8] whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 font-semibold text-white">
                      {item.title}
                    </td>
                    <td className="py-4 px-5 font-mono-tech text-xs text-white/60 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="py-4 px-5 text-white/75 leading-relaxed">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
