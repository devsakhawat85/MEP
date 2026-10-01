import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO, OFFICE_LOCATIONS } from '../data/avimepData';

interface ContactPageProps {
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Residential Development');
  const [projectLocation, setProjectLocation] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'Mechanical / HVAC',
    'Electrical',
    'Plumbing',
  ]);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setMessage(
        `We would like to discuss engineering scope and fee proposal regarding: ${initialSubject}.`
      );
    }
  }, [initialSubject]);

  const scopeOptions = [
    'Mechanical / HVAC',
    'Electrical & Critical Power',
    'Plumbing & Fuel Gas',
    'Fire Protection / Sprinkler',
    'Site/Sewer (SD1/SD2) & Backflow',
    'Energy Audit (LL87 / LL97)',
    'NYC Special Inspections (Chapter 17)',
  ];

  const toggleScope = (scope: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid work or contact email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please provide brief project details or scope requirements.');
      return;
    }

    const refCode = `AVI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <div className="w-full pt-20">
      {/* Hero Header */}
      <section className="bg-[#111315] text-white py-20 md:py-24 border-b border-white/10 bg-tech-grid-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="font-mono-tech text-xs text-[#38BDF8] tracking-wider">
              PROJECT INQUIRIES &amp; CONSULTATION
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Let’s Talk About Your Project.
            </h1>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
              Connect with Avi MEP Consultants LLC in New York or New Jersey to request an MEP engineering proposal, Local Law 87/97 energy audit, or NYC Special Inspection sign-off.
            </p>
          </div>

          <div className="lg:col-span-4 border border-white/15 bg-white/[0.03] p-6 space-y-2 font-mono-tech text-xs">
            <p className="text-[#38BDF8]">DIRECT ENGINEERING DESK</p>
            <p className="text-white text-sm font-semibold">{COMPANY_INFO.phone}</p>
            <p className="text-white/80">{COMPANY_INFO.email}</p>
            <p className="text-white/50 pt-1">Mon – Fri: 9:00 AM – 5:00 PM EST</p>
          </div>
        </div>
      </section>

      {/* Main Split Contact Form & Office Directory */}
      <section className="py-16 md:py-24 bg-[#F6F5F2] bg-tech-grid-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white border border-[#111315]/15 p-6 sm:p-10 md:p-12">
            {submittedRef ? (
              <div className="py-8 space-y-6">
                <div className="w-12 h-12 bg-[#152EAF] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="font-mono-tech text-xs text-[#152EAF] font-semibold">
                    INQUIRY REGISTERED · REF {submittedRef}
                  </p>
                  <h2 className="font-display text-3xl font-bold text-[#111315]">
                    Thank you, {name}.
                  </h2>
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                    Your project inquiry for{' '}
                    <strong className="text-[#111315]">
                      {projectLocation || projectType}
                    </strong>{' '}
                    has been logged for engineering review. Our team will respond to{' '}
                    <strong className="text-[#111315]">{email}</strong> or{' '}
                    <strong className="text-[#111315]">{phone}</strong> within one business day.
                  </p>
                </div>

                <div className="p-5 bg-[#F6F5F2] border border-[#111315]/10 space-y-2 text-xs font-mono-tech">
                  <p className="text-[#525866]">SUBMITTED PROJECT SUMMARY</p>
                  <p className="text-[#111315]">
                    <strong>PROJECT TYPE:</strong> {projectType}
                  </p>
                  {projectLocation && (
                    <p className="text-[#111315]">
                      <strong>LOCATION:</strong> {projectLocation}
                    </p>
                  )}
                  <p className="text-[#111315]">
                    <strong>DISCIPLINES:</strong>{' '}
                    {selectedScopes.length > 0 ? selectedScopes.join(' · ') : 'General MEP Consultation'}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setName('');
                      setCompany('');
                      setEmail('');
                      setPhone('');
                      setProjectLocation('');
                      setMessage('');
                    }}
                    className="px-6 py-3 bg-[#111315] text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Project Inquiry ${submittedRef} - ${encodeURIComponent(projectLocation || projectType)}`}
                    className="text-xs font-mono-tech text-[#152EAF] hover:underline"
                  >
                    Also send copy via default email client →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#111315]/10 pb-4 flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-[#111315]">
                    Project Scope &amp; Inquiry Form
                  </h2>
                  <span className="font-mono-tech text-xs text-[#525866]">
                    * REQUIRED FIELDS
                  </span>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-300 text-red-900 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      COMPANY / ARCHITECTURE FIRM
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Organization or Studio"
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (___) ___-____"
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      PROJECT TYPE
                    </label>
                    <select
                      id="contact-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    >
                      <option value="Residential Development">Residential Development</option>
                      <option value="Commercial Office / Tenant Fit-Out">
                        Commercial Office / Tenant Fit-Out
                      </option>
                      <option value="Hospitality / Food & Beverage">
                        Hospitality / Food &amp; Beverage
                      </option>
                      <option value="Healthcare / Ambulatory Facility">
                        Healthcare / Ambulatory Facility
                      </option>
                      <option value="Transportation / Institutional">
                        Transportation / Institutional
                      </option>
                      <option value="Local Law 87 / 97 Energy Compliance">
                        Local Law 87 / 97 Energy Compliance
                      </option>
                      <option value="NYC Special Inspections (TR1/TR8)">
                        NYC Special Inspections (TR1/TR8)
                      </option>
                      <option value="Site/Sewer (SD1/SD2) & Backflow Filing">
                        Site/Sewer (SD1/SD2) &amp; Backflow Filing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                    >
                      PROJECT LOCATION / ADDRESS
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g., Brooklyn, NY or North Brunswick, NJ"
                      className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                    />
                  </div>
                </div>

                <div>
                  <span className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2.5">
                    ENGINEERING DISCIPLINES REQUIRED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {scopeOptions.map((scope) => {
                      const active = selectedScopes.includes(scope);
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => toggleScope(scope)}
                          className={`px-3 py-1.5 text-xs font-mono-tech border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#111315] text-white border-[#111315]'
                              : 'bg-[#F6F5F2] text-[#374151] border-[#111315]/15 hover:border-[#111315]'
                          }`}
                        >
                          {active ? '✓ ' : '+ '}
                          {scope}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono-tech text-xs font-semibold text-[#111315] mb-2"
                  >
                    PROJECT SCOPE, SQUARE FOOTAGE &amp; TIMELINE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your building address, approximate square footage, architectural status, or required DOB/DEP filings..."
                    className="w-full px-4 py-3 text-sm bg-[#F6F5F2] border border-[#111315]/20 focus:border-[#152EAF] focus:bg-white focus:outline-none text-[#111315]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#152EAF] hover:bg-[#1D3BD2] text-white font-semibold text-sm inline-flex items-center justify-center gap-3 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-6">
            {OFFICE_LOCATIONS.map((office) => (
              <div
                key={office.id}
                className="bg-[#111315] text-white p-6 sm:p-8 border border-[#111315] space-y-5 bg-tech-grid-dark"
              >
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#38BDF8]">
                  <span>{office.regionLabel}</span>
                  <span>{office.coordinates}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {office.name}
                </h3>

                <div className="space-y-3 text-sm text-white/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{office.addressLine1}</p>
                      <p>{office.cityStateZip}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="font-mono-tech text-xs sm:text-sm hover:text-[#38BDF8]"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="font-mono-tech text-xs sm:text-sm hover:text-[#38BDF8]"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1 text-xs text-white/65">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{office.hours}</span>
                  </div>
                  <p className="font-mono-tech text-[11px] text-white/50">
                    {office.closedDays}
                  </p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </div>
  );
};
