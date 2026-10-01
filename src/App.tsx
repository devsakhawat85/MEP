import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectItem, ServiceItem } from './data/avimepData';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Avi MEP Digital Rebrand — Engineering the Systems Behind Exceptional Spaces',
      services: 'MEP Engineering, LL87/97 & Special Inspections — Avi MEP Digital Rebrand',
      projects: 'Selected MEP Engineering Portfolio (NYC, NJ, DE) — Avi MEP Digital Rebrand',
      about: 'About Avi MEP Consultants LLC — Leadership & Credentials',
      insights: 'NYC Local Law 87/97 & Chapter 17 Special Inspections Guide — Avi MEP',
      contact: 'Contact Avi MEP Consultants — New York & New Jersey Offices',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const handleNavigate = (page: PageRoute) => {
    setSelectedProject(null);
    setSelectedService(null);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireWithSubject = (subject: string) => {
    setSelectedProject(null);
    setSelectedService(null);
    setContactSubject(subject);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#111315]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProject={(project) => setSelectedProject(project)}
            onInquireService={handleInquireWithSubject}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'insights' && (
          <InsightsPage
            onNavigate={handleNavigate}
            onInquireTopic={handleInquireWithSubject}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialSubject={contactSubject} />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        onSelectService={(service) => setSelectedService(service)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onInquireProject={(projName) =>
          handleInquireWithSubject(`Similar Project to ${projName}`)
        }
      />

      {/* Service Specification Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectProject={(proj) => {
          setSelectedService(null);
          setSelectedProject(proj);
        }}
        onInquireService={(serviceTitle) =>
          handleInquireWithSubject(serviceTitle)
        }
      />
    </div>
  );
}

export default App;
