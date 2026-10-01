export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  disciplineTag: string;
  summary: string;
  description: string;
  image: string;
  scopeOfWork: string[];
  typicalApplications: string[];
  regulatoryCodes: string[];
  relatedProjectIds: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  boroughOrCity: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Healthcare' | 'Transportation';
  subType: string;
  completion: string;
  architect?: string;
  developer?: string;
  projectCost?: string;
  scaleSummary?: string;
  featured: boolean;
  image: string;
  gallery: string[];
  mepScope: string[];
  overview: string;
  challenge: string;
  approach: string;
  results: string[];
}

export interface SpecialInspectionItem {
  code: string;
  title: string;
  category: 'Mechanical & HVAC' | 'Fire Protection & Life Safety' | 'Plumbing & Site Utilities' | 'Structural & Energy';
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  focusAreas: string;
  bio: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  regionLabel: string;
  addressLine1: string;
  addressLine2: string;
  cityStateZip: string;
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  closedDays: string;
  jurisdictionsServed: string[];
}

export const ASSET_IMAGES = {
  hero: '/assets/avimep/hero_mep_architecture.jpg',
  mechanical: '/assets/avimep/service_mechanical_hvac.jpg',
  electrical: '/assets/avimep/service_electrical_power.jpg',
  plumbing: '/assets/avimep/service_plumbing_fire.jpg',
  energy: '/assets/avimep/service_energy_inspections.jpg',
};

export const COMPANY_INFO = {
  name: 'Avi MEP Consultants LLC',
  shortName: 'AVI MEP',
  tagline: 'Engineering the Systems Behind Exceptional Spaces.',
  email: 'avi@avimep.com',
  phone: '+1 (646)-764-5273',
  phoneRaw: '+16467645273',
  logo: '/assets/avimep/logo.png',
  establishedSummary:
    'Dedicated to providing innovative MEP solutions, Avi MEP Consultants LLC specializes in mechanical, electrical, plumbing, fire protection, energy audits, and NYC special inspections for projects across the United States.',
  detailedOverview:
    'Avi MEP Consultants LLC is committed to delivering exceptional professional engineering services tailored to the specific technical and regulatory needs of construction, energy efficiency, and real estate clients. Our team comprises licensed engineers, certified energy managers (CEM), certified energy auditors (CEA), building commissioning and project management specialists, certified facilities managers (CFM), and green building engineers.',
  mbeNotice:
    'Avi MEP Consultants LLC has applied to register as a New York State (NYS), New York City (NYC), and Port Authority of NY & NJ (PANYNJ) Minority Business Enterprise (MBE), Small Business Enterprise (SBE), and SBA 8(a) Certified consultancy.',
  verifiedStats: [
    {
      value: '150+',
      label: 'Projects Delivered',
      detail: 'Residential, commercial, hospitality & infrastructure across NY, NJ & DE',
    },
    {
      value: '15+',
      label: 'Engineering Specialists',
      detail: 'Licensed PEs, Certified Energy Managers, Auditors & Special Inspectors',
    },
    {
      value: '12',
      label: 'NYC Special Inspections',
      detail: 'Registered NYC DOB Chapter 17 & Energy Code inspection authority',
    },
    {
      value: '2',
      label: 'Regional Offices',
      detail: '99 Wall Street, Manhattan NY · 1600 US-130, North Brunswick NJ',
    },
  ],
  specialistCredentials: [
    'Licensed Professional Engineers (PE)',
    'Certified Energy Managers (CEM)',
    'Certified Energy Auditors (CEA)',
    'Building Commissioning (Cx / RCx) Specialists',
    'Certified Facilities Managers (CFM)',
    'Green Building Engineers',
    'Registered NYC Special Inspection Agency',
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mechanical-engineering',
    number: '01',
    title: 'Mechanical & HVAC Engineering',
    shortTitle: 'Mechanical Engineering',
    disciplineTag: 'MECHANICAL · HVAC',
    summary:
      'Tailored heating, ventilation, and air conditioning design engineered for thermal comfort, indoor air quality, and energy code compliance.',
    description:
      'Avi MEP Consultants delivers comprehensive mechanical engineering solutions tailored to residential multi-family developments, commercial office build-outs, luxury hospitality properties, and healthcare facilities. From central cooling and heating plant design to Variable Refrigerant Flow (VRF) systems, dedicated outdoor air systems (DOAS), and commercial kitchen exhaust coordination, our engineers balance spatial constraints with long-term operational efficiency.',
    image: ASSET_IMAGES.mechanical,
    scopeOfWork: [
      'Heating, Ventilation, and Air Conditioning (HVAC) load calculations & system sizing',
      'Variable Refrigerant Flow (VRF), heat pump, and hydronic central plant engineering',
      'Commercial kitchen hood exhaust, makeup air, and smoke purge system design',
      'Building Management System (BMS) sequence of operations & controls integration',
      'Mechanical riser coordination, acoustical attenuation, and spatial shaft planning',
      'NYC DOB mechanical filings, equipment schedules, and construction administration',
    ],
    typicalApplications: [
      'Ground-up multi-family residential towers (e.g., 380 4th Avenue, Brooklyn)',
      'Commercial tenant fit-outs and corporate headquarters (e.g., 135 Madison Avenue)',
      'Luxury hospitality and food-service venues (e.g., Park Hyatt New York, 40 Wyckoff Ave)',
      'Medical and ambulatory care air filtration systems (e.g., Ambulatory Facility, Wilmington DE)',
    ],
    regulatoryCodes: [
      'NYC Mechanical Code & ASHRAE 90.1 / 62.1',
      'NYC Energy Conservation Code (NYCECC)',
      'BC 1704.16 Mechanical Systems Special Inspections',
      'BC 1704.25 Heating Systems & BC 1704.15 Smoke Control Systems',
    ],
    relatedProjectIds: ['380-4th-ave', 'park-hyatt-ny', '135-madison-ave', 'ambulatory-de'],
  },
  {
    id: 'electrical-engineering',
    number: '02',
    title: 'Electrical & Critical Power Systems',
    shortTitle: 'Electrical Engineering',
    disciplineTag: 'ELECTRICAL · POWER',
    summary:
      'Comprehensive primary power distribution, lighting control, and critical emergency backup systems engineered for safety and continuity.',
    description:
      'Our electrical engineering practice provides resilient power distribution, service entrance sizing, lighting design, and life-safety systems across complex urban buildings. We specialize in designing, implementing, and maintaining Critical and Emergency Power Systems that guarantee uninterrupted operations during utility disruptions while meeting municipal code and business continuity mandates.',
    image: ASSET_IMAGES.electrical,
    scopeOfWork: [
      'Primary & secondary electrical service distribution, switchgear, and panelboard schedules',
      'Critical and Emergency Power Systems (standby generators, ATS, UPS, life-safety branches)',
      'Interior & exterior architectural lighting power density (LPD) and daylighting controls',
      'Fire alarm system layout, riser diagrams, and municipal code filings',
      'Short-circuit, voltage drop, selective coordination, and arc-flash studies',
      'Utility coordination with Con Edison, PSE&G, and regional power authorities',
    ],
    typicalApplications: [
      'High-density residential developments and luxury residences (e.g., 145 Perry Street)',
      'Healthcare & ambulatory facilities requiring redundant backup power',
      'Transportation and public assembly infrastructure (e.g., 185 Greenwich Street)',
      'Commercial retail and high-load restaurant fit-outs (e.g., 7th Street Burger, 125th St)',
    ],
    regulatoryCodes: [
      'NFPA 70 (National Electrical Code) & NYC Electrical Code',
      'NFPA 110 Emergency and Standby Power Systems',
      'NFPA 72 National Fire Alarm and Signaling Code',
      'NYCECC Lighting Power Allowances & Controls Compliance',
    ],
    relatedProjectIds: ['185-greenwich-st', '145-perry-st', 'ambulatory-de', '484-sterling-place'],
  },
  {
    id: 'plumbing-engineering',
    number: '03',
    title: 'Plumbing, Site/Sewer (SD1, SD2) & Backflow',
    shortTitle: 'Plumbing & Civil Filing',
    disciplineTag: 'PLUMBING · DEP SD1/SD2',
    summary:
      'Sanitary, storm, domestic water, and fuel-gas engineering paired with regulatory Site/Sewer Connection (SD1/SD2) and backflow filings.',
    description:
      'Avi MEP Consultants designs robust plumbing infrastructure for sanitary drainage, stormwater retention, domestic hot/cold water booster systems, and fuel-gas piping. In addition to base-building plumbing design, we specialize in designing and filing Site/Sewer Connections (SD1, SD2) and Backflow Prevention Systems with local authorities—safeguarding municipal water supplies and managing stormwater compliance seamlessly.',
    image: ASSET_IMAGES.plumbing,
    scopeOfWork: [
      'Domestic cold/hot water distribution, booster pump stations, and central water heating',
      'Sanitary drainage, vent stacks, and commercial grease interceptor sizing',
      'Site/Sewer Connection (SD1, SD2) hydraulic calculations, design, and NYC DEP filing',
      'Backflow Prevention System (RPZ / DCVA) design and regulatory authority approval',
      'Private on-site stormwater drainage disposal and detention tank engineering',
      'Natural gas and high-pressure fuel-gas riser sizing and utility coordination',
    ],
    typicalApplications: [
      'Ground-up residential buildings requiring NYC DEP SD1/SD2 sewer certifications',
      'Multi-concept food & beverage commercial spaces (e.g., 40 Wyckoff Avenue)',
      'Multi-family brownstone and mid-rise developments across Brooklyn, Manhattan & NJ',
      'Commercial building backflow containment retrofits and DEP compliance',
    ],
    regulatoryCodes: [
      'NYC Plumbing Code & NYC DEP Sewer Connection Regulations (SD1 / SD2)',
      'NYS DOH / NYC DEP Cross-Connection & Backflow Prevention Standards',
      'BC 1704.21.2 Private On-Site Storm Water Drainage & Detention Inspections',
      'BC 1704.19 High-Pressure Fuel-Gas Piping (Welding)',
    ],
    relatedProjectIds: ['380-4th-ave', '40-wyckoff-ave', '350-butler-st', '7th-st-burger'],
  },
  {
    id: 'fire-protection',
    number: '04',
    title: 'Fire Protection & Life Safety Design',
    shortTitle: 'Fire Protection',
    disciplineTag: 'FIRE PROTECTION · SPRINKLER',
    summary:
      'Code-compliant wet and dry sprinkler systems, standpipes, fire pumps, and hydraulic calculations for occupant life safety.',
    description:
      'Our fire protection engineers led by dedicated specialists design comprehensive suppression and standpipe systems engineered for municipal approval and rapid field installation. We perform rigorous hydraulic calculations, fire pump sizing, and fire-stopping specifications to protect life and property across high-rise residential, commercial, and institutional assets.',
    image: '/assets/avimep/proj-380-4th-ave.jpg',
    scopeOfWork: [
      'Automatic wet-pipe, dry-pipe, and pre-action fire sprinkler system engineering',
      'Class I, II, and III standpipe system layouts and fire department connections (FDC)',
      'Fire pump and jockey pump sizing, controller specifications, and room layouts',
      'Full hydraulic calculations in accordance with NFPA 13 and NFPA 14',
      'Fire-resistant penetration, joint protection, and sprayed fireproofing coordination',
      'DOB / FDNY fire suppression plan filings and special inspection sign-offs',
    ],
    typicalApplications: [
      'High-rise residential and mixed-use towers (e.g., 380 4th Avenue, 900 W 190th St)',
      'Co-op and tenant building infrastructure modernizations (e.g., 91st Street Tenants Corp)',
      'Commercial offices and hospitality properties (e.g., Park Hyatt New York, 135 Madison Ave)',
      'Residential developments across Brooklyn and New Jersey (e.g., 484 Sterling Place)',
    ],
    regulatoryCodes: [
      'NFPA 13 (Sprinkler Systems) & NFPA 14 (Standpipe Systems)',
      'NFPA 20 (Stationary Fire Pumps) & NYC Fire Code',
      'BC 1704.23 Sprinkler Systems & BC 1704.24 Standpipe Systems Inspections',
      'BC 1704.11 Sprayed Fire-Resistant Materials & BC 1704.27 Fire-Resistant Penetrations',
    ],
    relatedProjectIds: ['91st-st-tenants', '900-w-190th-st', '670-union-st', '719-6th-ave'],
  },
  {
    id: 'energy-audits-commissioning',
    number: '05',
    title: 'Energy Audits, Commissioning & Local Law 87 / 97',
    shortTitle: 'Energy & Local Law 87/97',
    disciplineTag: 'ENERGY · LL87 & LL97',
    summary:
      'Comprehensive ASHRAE energy audits, commissioning, retro-commissioning, and NYC Local Law 87 & Local Law 97 decarbonization compliance.',
    description:
      'With Certified Energy Managers (CEM), Certified Energy Auditors (CEA), and Green Building Engineers on staff, Avi MEP Consultants helps building owners navigate New York City’s stringent climate mandates. We provide Energy Audits, Commissioning (Cx), Retro-Commissioning (RCx), and Benchmarking under Local Law 87 and Local Law 97—identifying actionable capital upgrades that cut carbon emissions, avoid municipal penalties, and reduce operating costs.',
    image: ASSET_IMAGES.energy,
    scopeOfWork: [
      'Local Law 87 Energy Audits (ASHRAE Level II) and Retro-Commissioning (RCx) reports',
      'Local Law 97 carbon emissions modeling, decarbonization roadmaps, and penalty mitigation',
      'Annual energy and water Benchmarking services in compliance with NYC mandates',
      'New building MEP systems Commissioning (Cx) and functional performance testing',
      'Electrification feasibility studies, heat pump retrofits, and envelope thermal assessments',
      'Incentive & rebate engineering support with NYSERDA and Con Edison programs',
    ],
    typicalApplications: [
      'Existing Manhattan & Brooklyn buildings over 25,000–50,000 SF subject to LL87 / LL97',
      'Co-op and condominium boards (e.g., 91st Street Tenants Corp, Upper East Side)',
      'Commercial office buildings and hospitality assets (e.g., Park Hyatt New York)',
      'New construction projects requiring NYCECC Energy Code Commissioning',
    ],
    regulatoryCodes: [
      'NYC Local Law 87 (Energy Audits & Retro-Commissioning)',
      'NYC Local Law 97 (Climate Mobilization Act Carbon Caps)',
      'NYC Local Law 84 / 133 Annual Energy & Water Benchmarking',
      'BC 110.3.5 Energy Code Compliance Inspections',
    ],
    relatedProjectIds: ['park-hyatt-ny', '91st-st-tenants', '900-w-190th-st', '135-madison-ave'],
  },
  {
    id: 'special-inspections',
    number: '06',
    title: 'NYC Special Inspections Agency Services',
    shortTitle: 'Special Inspections',
    disciplineTag: 'NYC DOB · CHAPTER 17',
    summary:
      'Registered New York City Special Inspections Agency performing Chapter 17 mechanical, fire protection, storm drainage, and energy code inspections.',
    description:
      'As a registered New York City Special Inspections Agency, Avi MEP Consultants provides independent, code-mandated technical inspections across 12 specialized Building Code categories. Our licensed engineers and qualified inspectors verify field installations against approved construction documents and NYC Building Code Chapter 17 and Energy Code standards—streamlining TR1/TR8 sign-offs and Certificate of Occupancy closeouts.',
    image: '/assets/avimep/proj-185-greenwich.jpeg',
    scopeOfWork: [
      'Mechanical Systems (BC 1704.16), Heating Systems (BC 1704.25), and Smoke Control (BC 1704.15)',
      'Sprinkler Systems (BC 1704.23) and Standpipe Systems (BC 1704.24) hydrostatic & functional inspections',
      'Sprayed Fire-Resistant Materials (BC 1704.11) and Fire-Resistant Penetrations & Joints (BC 1704.27)',
      'High-Pressure Fuel-Gas Piping Welding (BC 1704.19) and Mechanical Demolition (BC 1704.20.4)',
      'Private On-Site Storm Water Drainage & Detention Facilities (BC 1704.21.2)',
      'Seismic Isolation Systems (BC 1707.8) and Energy Code Compliance Inspections (BC 110.3.5)',
    ],
    typicalApplications: [
      'New ground-up construction and major alterations across all five NYC boroughs',
      'Commercial tenant fit-outs requiring expedited TR1 / TR8 technical sign-offs',
      'Residential multi-family developments and institutional building upgrades',
      'Core-and-shell mechanical, life-safety, and stormwater detention installations',
    ],
    regulatoryCodes: [
      'NYC Building Code Chapter 17 (BC 1704 & BC 1707 Special Inspections)',
      'NYC Administrative Code & DOB NOW: Build TR1 / TR8 Protocols',
      'BC 110.3.5 NYC Energy Conservation Code Progress Inspections',
      '1 RCNY §101-06 Special Inspectors and Special Inspection Agencies Rule',
    ],
    relatedProjectIds: ['380-4th-ave', '185-greenwich-st', '688-woodward-ave', '350-butler-st'],
  },
];

export const SPECIAL_INSPECTIONS_LIST: SpecialInspectionItem[] = [
  {
    code: 'BC 1704.11',
    title: 'Sprayed Fire-Resistant Materials',
    category: 'Fire Protection & Life Safety',
    description: 'Verification of surface condition, application thickness, density, and bond strength of sprayed fire-resistant materials on structural members.',
  },
  {
    code: 'BC 1704.15',
    title: 'Smoke Control Systems',
    category: 'Fire Protection & Life Safety',
    description: 'Duct leakage testing, airflow verification, pressure differential testing, and sequence of operations for dedicated and non-dedicated smoke control systems.',
  },
  {
    code: 'BC 1704.16',
    title: 'Mechanical Systems',
    category: 'Mechanical & HVAC',
    description: 'Inspection of indoor/outdoor mechanical equipment, ductwork, ventilation rates, fire/smoke dampers, and vibration isolation compliance.',
  },
  {
    code: 'BC 1704.19',
    title: 'High-Pressure Fuel-Gas Piping (Welding)',
    category: 'Plumbing & Site Utilities',
    description: 'Inspection of welded fuel-gas piping systems, welder qualifications, non-destructive testing verification, and pressure testing.',
  },
  {
    code: 'BC 1704.20.4',
    title: 'Mechanical Demolition',
    category: 'Mechanical & HVAC',
    description: 'Verification of safe mechanical demolition procedures, equipment disconnection, cap-offs, and structural/system protection during removal.',
  },
  {
    code: 'BC 1704.21.2',
    title: 'Private On-Site Storm Water Drainage Disposal & Detention Facilities',
    category: 'Plumbing & Site Utilities',
    description: 'Inspection of stormwater detention tanks, flow restrictors, drywells, and private on-site drainage disposal installations per DEP/DOB approvals.',
  },
  {
    code: 'BC 1704.23',
    title: 'Sprinkler Systems',
    category: 'Fire Protection & Life Safety',
    description: 'Inspection of automatic fire sprinkler piping, hangers, seismic bracing, valves, and hydrostatic pressure testing per NFPA 13 and NYC BC.',
  },
  {
    code: 'BC 1704.24',
    title: 'Standpipe Systems',
    category: 'Fire Protection & Life Safety',
    description: 'Inspection of standpipe risers, hose valves, manifolds, fire department connections, and hydrostatic testing per NFPA 14 and NYC BC.',
  },
  {
    code: 'BC 1704.25',
    title: 'Heating Systems',
    category: 'Mechanical & HVAC',
    description: 'Inspection of boilers, breeching, combustion air supply, chimneys, hydronic piping, and safety controls for building heating plants.',
  },
  {
    code: 'BC 1704.27',
    title: 'Fire-Resistant Penetrations and Joints',
    category: 'Fire Protection & Life Safety',
    description: 'Verification of UL-listed through-penetration firestop systems and fire-resistant joint assemblies in rated walls, floors, and shafts.',
  },
  {
    code: 'BC 1707.8',
    title: 'Seismic Isolation Systems',
    category: 'Structural & Energy',
    description: 'Inspection of seismic restraint, isolation mounts, and flexible utility connections for critical building equipment and infrastructure.',
  },
  {
    code: 'BC 110.3.5',
    title: 'Energy Code Compliance Inspections',
    category: 'Structural & Energy',
    description: 'Progress inspections verifying thermal envelope insulation, fenestration ratings, HVAC/lighting controls, and commissioning per NYCECC.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '380-4th-ave',
    name: '380 4th Avenue',
    location: '380 4th Avenue, Brooklyn, NY',
    boroughOrCity: 'Gowanus, Brooklyn, NY',
    category: 'Residential',
    subType: 'Multi-Family High-Rise Development',
    completion: 'Completed / Recent Portfolio',
    scaleSummary: '17-Story · 197 Residential Units',
    featured: true,
    image: '/assets/avimep/proj-380-4th-ave.jpg',
    gallery: [
      '/assets/avimep/proj-380-4th-ave.jpg',
      ASSET_IMAGES.mechanical,
      ASSET_IMAGES.plumbing,
    ],
    mepScope: [
      'Mechanical & HVAC Engineering',
      'Electrical Power Distribution',
      'Plumbing & Domestic Water Booster Systems',
      'Fire Protection & Standpipe Design',
      'Site/Sewer Connection (SD1/SD2) & Backflow Filing',
    ],
    overview:
      'A ground-up 17-story, 197-unit residential rental development in the Gowanus area of Brooklyn, NY. Avi MEP Consultants engineered the integrated mechanical, electrical, plumbing, and fire protection infrastructure to support high-density multi-family urban living.',
    challenge:
      'Delivering efficient, individually metered HVAC and domestic hot water across 197 residential units and amenity floors within a 17-story footprint in the Gowanus canal rezoning district—where high water tables, strict NYC DEP stormwater detention rules, and NYCECC energy performance thresholds demand tight vertical shaft and cellar plant coordination.',
    approach:
      'Avi MEP engineered high-efficiency distributed heat pump and ventilation systems, coordinated vertical plumbing and fire protection standpipe risers to maximize residential ceiling heights, and executed full Site/Sewer (SD1/SD2), stormwater detention, and backflow prevention filings.',
    results: [
      'Full 17-story, 197-unit MEP and fire suppression engineering package',
      'Coordinated vertical shaft geometry preserving residential floorplate efficiency',
      'Compliant NYC DEP stormwater management and backflow containment design',
    ],
  },
  {
    id: 'park-hyatt-ny',
    name: 'Park Hyatt New York',
    location: '153 West 57th Street, New York, NY 10019',
    boroughOrCity: 'Midtown Manhattan, NY',
    category: 'Hospitality',
    subType: 'Luxury Hotel & Commercial Property',
    completion: 'Ongoing',
    scaleSummary: '153 West 57th Street · Billionaires’ Row',
    featured: true,
    image: '/assets/avimep/proj-park-hyatt.jpg',
    gallery: [
      '/assets/avimep/proj-park-hyatt.jpg',
      ASSET_IMAGES.mechanical,
      ASSET_IMAGES.energy,
    ],
    mepScope: [
      'Mechanical & HVAC Systems Engineering',
      'Electrical & Critical Power Coordination',
      'Plumbing & Life Safety Systems',
      'Energy Efficiency & Building Systems Optimization',
    ],
    overview:
      'Ongoing MEP engineering and building systems consultation at Park Hyatt New York, located at 153 West 57th Street in Midtown Manhattan’s premier high-rise corridor.',
    challenge:
      'Operating within an active five-star luxury hotel and commercial high-rise environment requires zero disruption to guest comfort, acoustic isolation, and continuous 24/7 mechanical, electrical, and domestic water reliability.',
    approach:
      'Avi MEP Consultants provides phased engineering design, existing conditions analysis, and tightly sequenced MEP modifications that integrate seamlessly with the building’s central chilled water, steam/heating, electrical, and life-safety infrastructure.',
    results: [
      'Ongoing MEP engineering support at 153 West 57th Street, New York, NY 10019',
      'Zero-downtime coordination for occupied luxury hospitality operations',
      'High-efficiency mechanical and electrical upgrades aligned with NYC energy standards',
    ],
  },
  {
    id: '185-greenwich-st',
    name: '185 Greenwich Street',
    location: '185 Greenwich Street, New York, NY 10006',
    boroughOrCity: 'Lower Manhattan, NY',
    category: 'Transportation',
    subType: 'Transportation & Commercial Hub',
    completion: 'Completed / Recent Portfolio',
    architect: 'Santiago Calatrava',
    scaleSummary: 'World Trade Center Corridor · Lower Manhattan',
    featured: true,
    image: '/assets/avimep/proj-185-greenwich.jpeg',
    gallery: [
      '/assets/avimep/proj-185-greenwich.jpeg',
      ASSET_IMAGES.electrical,
      ASSET_IMAGES.energy,
    ],
    mepScope: [
      'Mechanical & Ventilation Coordination',
      'Electrical & Life Safety Infrastructure',
      'Plumbing & Fire Protection Engineering',
      'Code Compliance & Technical Inspections',
    ],
    overview:
      'MEP engineering and building systems work at 185 Greenwich Street in Lower Manhattan (NY 10006), within the iconic transportation and commercial complex designed by architect Santiago Calatrava.',
    challenge:
      'Engineering building systems within a landmark transportation hub requires adherence to stringent Port Authority / NYC life-safety codes, smoke control standards, and invisible integration within expressive architectural geometry.',
    approach:
      'Avi MEP delivered precision engineering documentation and system coordination tailored to the complex’s strict structural, architectural, and life-safety criteria.',
    results: [
      'Coordinated MEP engineering at 185 Greenwich St, New York, NY 10006',
      'Integration with landmark architectural design by Santiago Calatrava',
      'Full compliance with transportation and commercial life-safety standards',
    ],
  },
  {
    id: '135-madison-ave',
    name: '135 Madison Avenue',
    location: '135 Madison Avenue, New York, NY',
    boroughOrCity: 'NoMad / Midtown South, NY',
    category: 'Commercial',
    subType: '14,000 SF Office Space Build-Out / Tenant Fit-Out',
    completion: 'January 2016',
    architect: 'Christian Kotzamanis',
    scaleSummary: '14,000 SF Commercial Office Fit-Out',
    featured: true,
    image: '/assets/avimep/proj-135-madison.jpg',
    gallery: [
      '/assets/avimep/proj-135-madison.jpg',
      ASSET_IMAGES.electrical,
      ASSET_IMAGES.mechanical,
    ],
    mepScope: [
      'Commercial HVAC Ductwork & VAV/Diffuser Layout',
      'Tenant Electrical Power & Architectural Lighting Distribution',
      'Pantry & Restroom Plumbing Engineering',
      'Sprinkler Modification & Hydraulic Calculations',
    ],
    overview:
      'A 14,000 square-foot commercial office space build-out and tenant fit-out at 135 Madison Avenue in Manhattan, completed in collaboration with architect Christian Kotzamanis.',
    challenge:
      'Transforming an existing commercial floorplate into a modern 14,000 SF workplace required reconfiguring base-building HVAC distribution, high-density IT/conference room cooling, and architectural lighting while meeting tight tenant occupancy schedules.',
    approach:
      'Partnering closely with Christian Kotzamanis, Avi MEP designed exposed and concealed HVAC distribution, supplementary cooling for server/AV closets, code-compliant lighting controls, and modified sprinkler coverage.',
    results: [
      'Completed 14,000 SF Manhattan office build-out on schedule (January 2016)',
      'Optimized thermal zoning across open workspaces, executive suites, and conference rooms',
      'Seamless coordination with architect Christian Kotzamanis and base-building systems',
    ],
  },
  {
    id: '145-perry-st',
    name: 'Steve Cohen’s Residence (145 Perry Street)',
    location: '145 Perry Street, New York, NY 10004',
    boroughOrCity: 'West Village, Manhattan, NY',
    category: 'Residential',
    subType: 'Bespoke Private Residence',
    completion: 'Completed / Recent Portfolio',
    architect: 'Leroy Street Studio',
    scaleSummary: 'West Village · Architect: Leroy Street Studio',
    featured: true,
    image: '/assets/avimep/proj-145-perry.jpg',
    gallery: [
      '/assets/avimep/proj-145-perry.jpg',
      ASSET_IMAGES.mechanical,
      ASSET_IMAGES.electrical,
    ],
    mepScope: [
      'Precision Climate & Humidity Control HVAC',
      'Custom Architectural Lighting & Power Systems',
      'Acoustic-Isolated Plumbing & Hydronic Heating',
      'Integrated Fire Protection & Security Infrastructure',
    ],
    overview:
      'Bespoke residential MEP engineering for Steve Cohen’s Residence at 145 Perry Street in Manhattan’s historic West Village, executed in collaboration with acclaimed architectural firm Leroy Street Studio.',
    challenge:
      'Ultra-high-end private residences demand museum-grade temperature and humidity stability, whisper-quiet acoustic performance, and zero visible mechanical clutter across custom millwork and architectural ceilings.',
    approach:
      'Working hand-in-hand with Leroy Street Studio, Avi MEP engineered concealed linear air distribution, acoustically isolated mechanical and plumbing risers, and high-reliability electrical and life-safety systems.',
    results: [
      'Museum-grade indoor environmental control in the West Village, Manhattan',
      'Seamless architectural concealment in collaboration with Leroy Street Studio',
      'Whisper-quiet hydronic, HVAC, and plumbing operation',
    ],
  },
  {
    id: '484-sterling-place',
    name: '484 Sterling Place',
    location: '484 Sterling Place, Brooklyn, NY',
    boroughOrCity: 'Crown Heights / Prospect Heights, Brooklyn, NY',
    category: 'Residential',
    subType: 'Multi-Family Residential Development',
    completion: 'Completed / Recent Portfolio',
    projectCost: '$12,100,000.00',
    scaleSummary: '$12.1M Project Cost · Multi-Family Residential',
    featured: true,
    image: '/assets/avimep/proj-484-sterling.jpg',
    gallery: [
      '/assets/avimep/proj-484-sterling.jpg',
      ASSET_IMAGES.plumbing,
      ASSET_IMAGES.mechanical,
    ],
    mepScope: [
      'Full-Building Mechanical & Heat Pump Systems',
      'Electrical Service & Multi-Meter Distribution',
      'Domestic Water, Sanitary & Storm Plumbing',
      'NFPA 13 Fire Sprinkler & Standpipe Engineering',
    ],
    overview:
      'A $12,100,000 residential development located at 484 Sterling Place in Brooklyn, NY, featuring comprehensive MEP and fire protection engineering by Avi MEP Consultants.',
    challenge:
      'Balancing construction budget discipline on a $12.1M multi-family residential build with high-efficiency NYCECC energy compliance, individual tenant metering, and compact mechanical room footprints.',
    approach:
      'Avi MEP delivered a fully coordinated mechanical, electrical, plumbing, and fire protection design package that streamlined contractor procurement, utility connections, and DOB approvals.',
    results: [
      'Full MEP engineering for $12,100,000.00 Brooklyn residential development',
      'High-efficiency all-electric / low-carbon building systems architecture',
      'Coordinated DOB and DEP utility filings',
    ],
  },
  {
    id: '350-butler-st',
    name: '350 Butler Street',
    location: '350 Butler Street, Brooklyn, NY 11217',
    boroughOrCity: 'Park Slope / Gowanus, Brooklyn, NY',
    category: 'Residential',
    subType: 'Residential Development',
    completion: 'May 2024',
    scaleSummary: 'Completed May 2024 · Brooklyn, NY 11217',
    featured: false,
    image: '/assets/avimep/proj-350-butler.jpg',
    gallery: ['/assets/avimep/proj-350-butler.jpg', ASSET_IMAGES.mechanical],
    mepScope: [
      'Mechanical & Ventilation Design',
      'Electrical Power & Lighting Systems',
      'Plumbing, Sanitary & Storm Systems',
      'Fire Suppression Engineering',
    ],
    overview:
      'Residential development at 350 Butler Street in Brooklyn, NY 11217, completed in May 2024 with full-scope mechanical, electrical, and plumbing engineering.',
    challenge:
      'Coordinating modern high-efficiency residential MEP infrastructure and stormwater compliance within Brooklyn’s rapidly evolving Butler Street corridor.',
    approach:
      'Avi MEP provided end-to-end MEP design, regulatory filings, and construction phase support through successful completion in May 2024.',
    results: [
      'Successfully completed in May 2024 at 350 Butler St, Brooklyn, NY 11217',
      'Full NYCECC energy code and NYC Building Code compliance',
    ],
  },
  {
    id: '91st-st-tenants',
    name: '91st Street Tenants Corp',
    location: '108 East 91st Street, New York, NY 10128',
    boroughOrCity: 'Upper East Side, Manhattan, NY',
    category: 'Commercial',
    subType: 'Building Infrastructure & Commercial Upgrade',
    completion: 'Ongoing Construction',
    scaleSummary: 'Carnegie Hill · 108 E 91st St, NY 10128',
    featured: false,
    image: '/assets/avimep/proj-91st-st.jpg',
    gallery: ['/assets/avimep/proj-91st-st.jpg', ASSET_IMAGES.energy],
    mepScope: [
      'Central Plant & Mechanical Systems Upgrade',
      'Electrical & Life Safety Modernization',
      'Local Law 87 / 97 Energy Compliance Strategy',
      'DOB Filings & Special Inspections Coordination',
    ],
    overview:
      'Ongoing MEP engineering and building systems upgrade for 91st Street Tenants Corp at 108 East 91st Street on Manhattan’s Upper East Side.',
    challenge:
      'Upgrading core mechanical and electrical infrastructure in an occupied pre-war Upper East Side building requires meticulous phasing, shaft routing, and Local Law compliance planning.',
    approach:
      'Avi MEP surveyed existing building conditions and engineered phased system modernizations that improve energy performance while protecting resident continuity.',
    results: [
      'Active construction phase engineering at 108 E 91st St, New York, NY 10128',
      'Aligned capital upgrades with NYC Local Law energy efficiency goals',
    ],
  },
  {
    id: '40-wyckoff-ave',
    name: '40 Wyckoff Avenue',
    location: '40 Wyckoff Avenue, Brooklyn, NY',
    boroughOrCity: 'Bushwick, Brooklyn, NY',
    category: 'Hospitality',
    subType: 'Pizzeria, Coffee Shop & Bagel Store',
    completion: 'Completed / Recent Portfolio',
    developer: 'Mike & Sam Saleh',
    architect: 'PATH Architectures',
    scaleSummary: 'Multi-Concept Food & Beverage · PATH Architectures',
    featured: false,
    image: '/assets/avimep/proj-40-wyckoff.jpg',
    gallery: ['/assets/avimep/proj-40-wyckoff.jpg', ASSET_IMAGES.plumbing],
    mepScope: [
      'Commercial Kitchen Hood Exhaust & Makeup Air',
      'High-Capacity Fuel-Gas & Commercial Plumbing / Grease Interceptors',
      'Commercial Food-Service Electrical Distribution',
      'Fire Suppression & Ansul Coordination',
    ],
    overview:
      'Multi-concept commercial hospitality build-out (Pizzeria, Coffee Shop & Bagel Store) at 40 Wyckoff Avenue in Brooklyn, NY, developed by Mike & Sam Saleh and designed by PATH Architectures.',
    challenge:
      'Integrating three high-output culinary operations (pizza ovens, bagel kettles/boilers, and espresso/coffee bar) within a single commercial footprint demands heavy ventilation, grease waste management, and gas/electrical load coordination.',
    approach:
      'Collaborating with PATH Architectures and developers Mike & Sam Saleh, Avi MEP engineered dedicated commercial kitchen exhaust, makeup air tempering, grease traps, backflow prevention, and power distribution.',
    results: [
      'Coordinated MEP systems for 3 distinct food & beverage operations under one roof',
      'Full NYC DOB, FDNY, and DEP plumbing/grease/backflow compliance',
    ],
  },
  {
    id: '719-6th-ave',
    name: '719 6th Avenue',
    location: '719 6th Avenue, Brooklyn, NY 11215',
    boroughOrCity: 'South Slope / Greenwood, Brooklyn, NY',
    category: 'Residential',
    subType: 'Residential Development',
    completion: 'Completed / Recent Portfolio',
    architect: 'Loadingdock5',
    scaleSummary: 'Architect: Loadingdock5 · Brooklyn, NY 11215',
    featured: false,
    image: '/assets/avimep/proj-719-6th-ave.jpg',
    gallery: ['/assets/avimep/proj-719-6th-ave.jpg', ASSET_IMAGES.mechanical],
    mepScope: [
      'High-Efficiency Residential HVAC & ERV Ventilation',
      'Electrical Power & Architectural Lighting',
      'Domestic Plumbing & Stormwater Management',
      'Fire Sprinkler System Design',
    ],
    overview:
      'Residential development at 719 6th Avenue in Brooklyn, NY 11215, engineered in collaboration with architecture practice Loadingdock5.',
    challenge:
      'Integrating compact, high-efficiency mechanical and ventilation systems into a contemporary Brooklyn residential design with high thermal envelope performance.',
    approach:
      'Working closely with Loadingdock5, Avi MEP designed right-sized heat pump and energy recovery ventilation (ERV) systems alongside clean plumbing and fire protection layouts.',
    results: [
      'Delivered integrated MEP engineering in partnership with Loadingdock5',
      'Optimized energy performance and interior spatial clearances',
    ],
  },
  {
    id: '670-union-st',
    name: '670 Union Street',
    location: '670 Union Street, Brooklyn, NY 11215',
    boroughOrCity: 'Park Slope / Gowanus, Brooklyn, NY',
    category: 'Residential',
    subType: 'Residential Development',
    completion: 'Completed / Recent Portfolio',
    architect: 'Mesh Architecture',
    scaleSummary: 'Architect: Mesh Architecture · Brooklyn, NY 11215',
    featured: false,
    image: '/assets/avimep/proj-670-union.jpg',
    gallery: ['/assets/avimep/proj-670-union.jpg', ASSET_IMAGES.plumbing],
    mepScope: [
      'Mechanical Heating, Cooling & Ventilation',
      'Electrical Service & Distribution',
      'Plumbing, Sanitary & Backflow Prevention',
      'Fire Protection Engineering',
    ],
    overview:
      'Contemporary residential building at 670 Union Street in Brooklyn, NY 11215, engineered in partnership with Mesh Architecture.',
    challenge:
      'Coordinating concealed MEP distribution and rooftop mechanical equipment placement to preserve clean architectural sightlines and generous ceiling heights.',
    approach:
      'Avi MEP collaborated with Mesh Architecture from schematic design through DOB filing to integrate compact VRF mechanical systems, plumbing risers, and sprinkler layouts.',
    results: [
      'Coordinated residential MEP design with Mesh Architecture',
      'Streamlined DOB and DEP approvals in Brooklyn, NY 11215',
    ],
  },
  {
    id: '900-w-190th-st',
    name: '900 West 190th Street',
    location: '900 West 190th Street, New York, NY 10040',
    boroughOrCity: 'Washington Heights, Manhattan, NY',
    category: 'Residential',
    subType: 'Multi-Family Residential Building',
    completion: 'Ongoing Construction',
    scaleSummary: 'Upper Manhattan · NY 10040',
    featured: false,
    image: '/assets/avimep/proj-900-w-190th.webp',
    gallery: ['/assets/avimep/proj-900-w-190th.webp', ASSET_IMAGES.energy],
    mepScope: [
      'Multi-Family Mechanical & Heating Systems',
      'Electrical Distribution & Emergency Lighting',
      'Plumbing Riser & Domestic Hot Water Plant',
      'Energy Code & Local Law Compliance',
    ],
    overview:
      'Large-scale multi-family residential MEP engineering project at 900 West 190th Street in Upper Manhattan (NY 10040), currently in ongoing construction.',
    challenge:
      'Modernizing and expanding MEP systems in a substantial Washington Heights multi-family property while maintaining tenant service and satisfying NYC energy and building codes.',
    approach:
      'Avi MEP engineered phased mechanical, electrical, and plumbing solutions with dedicated construction administration and special inspection support.',
    results: [
      'Ongoing construction support at 900 West 190th Street, New York, NY 10040',
      'Enhanced heating, domestic water, and electrical system reliability',
    ],
  },
  {
    id: '688-woodward-ave',
    name: '688 Woodward Avenue',
    location: '688 Woodward Avenue, Ridgewood, NY 11385',
    boroughOrCity: 'Ridgewood, Queens, NY',
    category: 'Residential',
    subType: 'Multi-Family Residential',
    completion: 'June 2024',
    scaleSummary: 'Completed June 2024 · Ridgewood, NY 11385',
    featured: false,
    image: '/assets/avimep/proj-688-woodward.jpeg',
    gallery: ['/assets/avimep/proj-688-woodward.jpeg', ASSET_IMAGES.mechanical],
    mepScope: [
      'Mechanical & Split Heat Pump HVAC',
      'Electrical Distribution & Metering',
      'Plumbing & Fire Sprinkler Design',
      'NYC Special Inspections & Sign-Off',
    ],
    overview:
      'Multi-family residential project at 688 Woodward Avenue in Ridgewood, NY 11385, completed in June 2024.',
    challenge:
      'Delivering turnkey MEP design and inspection sign-offs for a multi-unit Queens residential property under tight construction timelines.',
    approach:
      'Avi MEP provided coordinated HVAC, electrical, plumbing, and fire protection engineering through project closeout in June 2024.',
    results: [
      'Completed June 2024 in Ridgewood, NY 11385',
      'Full NYC DOB code compliance and system commissioning',
    ],
  },
  {
    id: '7th-st-burger',
    name: '7th Street Burger (27 W 125th St)',
    location: '27 West 125th Street, New York, NY',
    boroughOrCity: 'Harlem, Manhattan, NY',
    category: 'Hospitality',
    subType: 'Commercial Quick-Service Restaurant Fit-Out',
    completion: 'Ongoing Construction',
    scaleSummary: '125th Street Corridor · Harlem, NY',
    featured: false,
    image: '/assets/avimep/proj-7th-st-burger.jpg',
    gallery: ['/assets/avimep/proj-7th-st-burger.jpg', ASSET_IMAGES.mechanical],
    mepScope: [
      'Commercial Kitchen Hood & Precipitator Exhaust Design',
      'Makeup Air & Dining Area HVAC',
      'Grease Interceptor, Sanitary & Gas Piping',
      'Commercial Kitchen Electrical & Fire Alarm',
    ],
    overview:
      'Commercial hospitality MEP fit-out for 7th Street Burger at 27 West 125th Street in Harlem, Manhattan.',
    challenge:
      'High-volume burger grilling operations in dense Manhattan retail corridors require robust grease exhaust routing, odor/smoke mitigation, makeup air balancing, and rapid DOB/FDNY approvals.',
    approach:
      'Avi MEP engineered a repeatable, code-compliant commercial kitchen mechanical, plumbing, gas, and electrical package tailored to 27 W 125th Street.',
    results: [
      'Engineered high-capacity kitchen exhaust and makeup air system',
      'Full NYC DOB and DEP grease/backflow compliance in Harlem, NY',
    ],
  },
  {
    id: 'ambulatory-de',
    name: 'Ambulatory Care Facility, Wilmington',
    location: '390 Mitch Road, Wilmington, DE 19804',
    boroughOrCity: 'Wilmington, Delaware',
    category: 'Healthcare',
    subType: 'Medical & Ambulatory Care Facility',
    completion: 'Ongoing Construction',
    scaleSummary: '390 Mitch Rd, Wilmington, DE 19804',
    featured: false,
    image: '/assets/avimep/proj-ambulatory-de.png',
    gallery: ['/assets/avimep/proj-ambulatory-de.png', ASSET_IMAGES.electrical],
    mepScope: [
      'Medical-Grade HVAC, Air Change & Filtration Systems',
      'Critical & Emergency Power Redundancy',
      'Healthcare Plumbing & Medical Gas Coordination',
      'Life Safety & Fire Protection Engineering',
    ],
    overview:
      'Healthcare and commercial ambulatory care facility located at 390 Mitch Road, Wilmington, DE 19804, showcasing Avi MEP’s multi-state clinical engineering capabilities.',
    challenge:
      'Ambulatory healthcare facilities require strict room-by-room pressure relationships, HEPA filtration, clinical plumbing fixtures, and essential electrical system redundancy under healthcare facilities guidelines.',
    approach:
      'Avi MEP designed dedicated medical HVAC zoning, backup power distribution, and specialized healthcare plumbing systems engineered for clinical reliability and patient safety.',
    results: [
      'Multi-state healthcare MEP delivery in Wilmington, DE 19804',
      'Compliant clinical air change rates, pressure zoning, and emergency power',
    ],
  },
  {
    id: '406-gregory-ave',
    name: '406 Gregory Avenue',
    location: '406 Gregory Avenue, Passaic, NJ 07055',
    boroughOrCity: 'Passaic, New Jersey',
    category: 'Residential',
    subType: 'Multi-Family Residential Development',
    completion: 'Ongoing Construction',
    scaleSummary: 'Passaic, NJ 07055 · New Jersey Portfolio',
    featured: false,
    image: '/assets/avimep/proj-406-gregory.webp',
    gallery: ['/assets/avimep/proj-406-gregory.webp', ASSET_IMAGES.plumbing],
    mepScope: [
      'Residential HVAC & Ventilation Engineering',
      'PSE&G Utility & Electrical Service Distribution',
      'Domestic Water, Sanitary & Storm Plumbing',
      'NFPA 13 / 13R Fire Sprinkler Design',
    ],
    overview:
      'Multi-family residential development at 406 Gregory Avenue in Passaic, NJ 07055, supported by Avi MEP’s New Jersey engineering office.',
    challenge:
      'Delivering cost-effective, code-compliant MEP systems that satisfy New Jersey Uniform Construction Code (NJ UCC) and local utility requirements.',
    approach:
      'Led out of Avi MEP’s North Brunswick, NJ and Wall Street, NY offices, our team provided full mechanical, electrical, plumbing, and fire protection design through construction.',
    results: [
      'Active multi-family residential construction in Passaic, NJ 07055',
      'Full New Jersey UCC energy and building code compliance',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'avinash-chauhan',
    name: 'Avinash Chauhan',
    role: 'CEO & Founder',
    image: '/assets/avimep/team-avinash.png',
    focusAreas: 'Executive Leadership · MEP Systems Strategy · Energy & Code Advisory',
    bio: 'Founder and Chief Executive Officer of Avi MEP Consultants LLC. Avinash leads the firm’s multidisciplinary engineering practice across New York, New Jersey, and Delaware—overseeing complex residential, commercial, hospitality, and municipal inspection programs with a focus on technical precision and sustainable building performance.',
  },
  {
    id: 'mangesh-more',
    name: 'Mangesh More',
    role: 'Plumbing & Fire Protection Engineer',
    image: '/assets/avimep/team-mangesh.png',
    focusAreas: 'Plumbing Systems · Fire Suppression & Hydraulic Calculations · DEP SD1/SD2 & Backflow',
    bio: 'Specializes in the design of sanitary, storm, domestic water, and fuel-gas systems, as well as NFPA-compliant fire protection and hydraulic calculations. Leads complex Site/Sewer Connection (SD1, SD2) and backflow prevention designs for residential and commercial developments.',
  },
  {
    id: 'sneha-chauhan',
    name: 'Sneha Chauhan',
    role: 'HR Executive',
    image: '/assets/avimep/team-sneha.png',
    focusAreas: 'Talent Acquisition · Operations Management · Client & Regulatory Coordination',
    bio: 'Oversees human resources, organizational operations, and multidisciplinary team growth across Avi MEP’s New York and New Jersey offices, supporting our roster of licensed engineers, energy auditors, and special inspectors.',
  },
  {
    id: 'sanket-chavan',
    name: 'Sanket Chavan',
    role: 'IT Manager',
    image: '/assets/avimep/team-sanket.jpg',
    focusAreas: 'BIM / CAD Infrastructure · Digital Engineering Workflows · Systems Security',
    bio: 'Manages Avi MEP’s digital engineering infrastructure, BIM/Revit and AutoCAD collaboration environments, cloud documentation systems, and enterprise IT security across both regional offices.',
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'new-york',
    name: 'New York Headquarters',
    regionLabel: 'MANHATTAN · FINANCIAL DISTRICT',
    addressLine1: '99 Wall Street, Suite #631',
    addressLine2: 'Financial District',
    cityStateZip: 'New York, NY 10005',
    coordinates: '40.7049° N, 74.0071° W',
    phone: '+1 (646)-764-5273',
    email: 'avi@avimep.com',
    hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
    closedDays: 'Closed: Saturday, Sunday, Diwali, Christmas & New Year',
    jurisdictionsServed: [
      'Manhattan, Brooklyn, Queens, Bronx & Staten Island',
      'NYC Department of Buildings (DOB) & DEP Filings',
      'NYC Registered Special Inspections Agency Operations',
      'Local Law 87 & Local Law 97 Compliance Hub',
    ],
  },
  {
    id: 'new-jersey',
    name: 'New Jersey Regional Office',
    regionLabel: 'MIDDLESEX COUNTY · ROUTE 130 CORRIDOR',
    addressLine1: '1600 US-130',
    addressLine2: 'North Brunswick Township',
    cityStateZip: 'North Brunswick, NJ 08902',
    coordinates: '40.4451° N, 74.4793° W',
    phone: '+1 (646)-764-5273',
    email: 'avi@avimep.com',
    hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
    closedDays: 'Closed: Saturday, Sunday, Diwali, Christmas & New Year',
    jurisdictionsServed: [
      'Northern, Central & Southern New Jersey Municipalities',
      'Delaware & Mid-Atlantic Regional Projects (Wilmington, DE)',
      'New Jersey UCC MEP Plan Review & Permitting',
      'Commercial, Healthcare & Multi-Family Engineering',
    ],
  },
];

export const ARCHITECTURAL_COLLABORATORS = [
  {
    firm: 'Santiago Calatrava',
    role: 'Architect of Record / Design Architect',
    project: '185 Greenwich Street',
    location: 'Lower Manhattan, NY 10006',
    sector: 'Transportation & Commercial',
  },
  {
    firm: 'Leroy Street Studio',
    role: 'Architectural Partner',
    project: '145 Perry Street (Steve Cohen’s Residence)',
    location: 'West Village, NY 10004',
    sector: 'Bespoke Residential',
  },
  {
    firm: 'Mesh Architecture',
    role: 'Architectural Partner',
    project: '670 Union Street',
    location: 'Brooklyn, NY 11215',
    sector: 'Multi-Family Residential',
  },
  {
    firm: 'Loadingdock5 Architecture',
    role: 'Architectural Partner',
    project: '719 6th Avenue',
    location: 'Brooklyn, NY 11215',
    sector: 'Residential Development',
  },
  {
    firm: 'PATH Architectures',
    role: 'Architectural Partner (Dev: Mike & Sam Saleh)',
    project: '40 Wyckoff Avenue',
    location: 'Bushwick, Brooklyn, NY',
    sector: 'Commercial Hospitality',
  },
  {
    firm: 'Christian Kotzamanis',
    role: 'Project Architect',
    project: '135 Madison Avenue (14,000 SF Fit-Out)',
    location: 'Midtown South, NY',
    sector: 'Commercial Office',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand & Survey',
    subtitle: 'Existing Conditions, Code Matrix & Program Brief',
    description:
      'We begin by verifying site conditions, utility capacities, architectural spatial constraints, and local jurisdictional codes (NYC DOB, DEP, FDNY, NYCECC, or NJ UCC) so every project starts on a sound technical foundation.',
  },
  {
    number: '02',
    title: 'Analyze & Model',
    subtitle: 'Load Calculations, Energy Audits & Feasibility',
    description:
      'Our licensed engineers and certified energy managers perform rigorous heating/cooling load calculations, electrical demand studies, hydraulic modeling, and Local Law 87/97 energy analyses to identify optimal system architectures.',
  },
  {
    number: '03',
    title: 'Engineer & Specify',
    subtitle: 'Integrated Mechanical, Electrical, Plumbing & Fire Design',
    description:
      'We produce comprehensive construction documents, riser diagrams, equipment schedules, and site/sewer (SD1/SD2) & backflow prevention designs engineered for constructability and long-term operational reliability.',
  },
  {
    number: '04',
    title: 'Coordinate & File',
    subtitle: 'BIM Clash Resolution & Municipal Approvals',
    description:
      'Working closely with architects, structural engineers, and developers, we coordinate vertical shafts and ceiling plenums while managing regulatory filings with NYC DOB, DEP, FDNY, and regional municipal agencies.',
  },
  {
    number: '05',
    title: 'Inspect & Commission',
    subtitle: 'NYC Special Inspections (Chapter 17) & Retro-Commissioning',
    description:
      'As a registered NYC Special Inspections Agency with commissioning specialists, we verify field installations across 12 Building Code inspection categories and perform functional testing through final sign-off.',
  },
];
