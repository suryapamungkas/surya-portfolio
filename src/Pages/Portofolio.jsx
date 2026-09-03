import { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase"; 
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import { predefinedProjects } from "../data/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, BrainCircuit, LineChart, Server, Globe, Cpu, Network, Sparkles, Terminal, Cloud, PenTool } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      text-zinc-400 
      hover:text-zinc-200 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      shadow-sm
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  if (value !== index) return null;
  return (
    <div
      role="tabpanel"
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      tabIndex={0}
      className="p-2 sm:p-6 outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-2xl"
      {...other}
    >
      {children}
    </div>
  );
}

const techStacks = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", language: "Python" },
  { icon: Server, language: "Back-End Development", color: "text-emerald-500 group-hover:text-emerald-400" },
  { icon: Globe, language: "Web Development", color: "text-cyan-500 group-hover:text-cyan-400" },
  { icon: Cpu, language: "Artificial Intelligence", color: "text-indigo-500 group-hover:text-indigo-400" },
  { icon: BrainCircuit, language: "Machine Learning", color: "text-amber-500 group-hover:text-amber-400" },
  { icon: Network, language: "Deep Learning", color: "text-purple-500 group-hover:text-purple-400" },
  { icon: Sparkles, language: "Generative AI", color: "text-yellow-500 group-hover:text-yellow-400" },
  { icon: LineChart, language: "Data Science", color: "text-blue-500 group-hover:text-blue-400" },
  { icon: Terminal, language: "Prompt Engineering", color: "text-teal-500 group-hover:text-teal-400" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", language: "Google Cloud" },
  { icon: Cloud, language: "Cloud Computing", color: "text-sky-500 group-hover:text-sky-400" },
  { icon: PenTool, language: "UX Fundamentals", color: "text-pink-500 group-hover:text-pink-400" },
];

export default function Portofolio() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const fetchData = useCallback(async () => {
    const allPredefinedCertificates = [
      { 
        id: 'cert-lppi-1', 
        Name: 'DIGDAYA Practitioner Phase', 
        Issuer: 'LPPI', 
        Date: 'Aug 2026', 
        CredentialID: 'f485d32a-cb6b-4fd2-b0ad-23917571c691',
        CredentialURL: 'https://credsverse.com/credentials/f485d32a-cb6b-4fd2-b0ad-23917571c691?preview=1'
      },
      { 
        id: 'cert-lppi-2', 
        Name: 'DIGDAYA Essential Phase', 
        Issuer: 'LPPI', 
        Date: 'Aug 2026', 
        CredentialID: '3834df4f-91dd-449a-af9d-c9cfa6f16b3a',
        CredentialURL: 'https://credsverse.com/credentials/3834df4f-91dd-449a-af9d-c9cfa6f16b3a?preview=1'
      },
      { id: 'cert-1', Name: 'Belajar Fundamental Generative AI', Issuer: 'Dicoding Indonesia', Date: 'Jul 2026', CredentialID: 'ERZRLQK7QZYV' },
      { id: 'cert-2', Name: 'Membangun Sistem Machine Learning', Issuer: 'Dicoding Indonesia', Date: 'Jul 2026', CredentialID: 'JMZVO6JEQXN9' },
      { id: 'cert-3', Name: 'Belajar Penerapan Machine Learning untuk Flutter', Issuer: 'Dicoding Indonesia', Date: 'Jul 2026', CredentialID: '1OP8RQNWBZQK' },
      { id: 'cert-4', Name: 'Belajar Fundamental Deep Learning', Issuer: 'Dicoding Indonesia', Date: 'Jul 2026', CredentialID: 'NVP7N0G04ZR0' },
      { id: 'cert-5', Name: 'Belajar Dasar Manajemen Proyek', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: '72ZDJNQWJZYW' },
      { id: 'cert-6', Name: 'Belajar Penerapan AI di Aplikasi Web', Issuer: 'Dicoding Indonesia', Date: 'Jul 2026', CredentialID: 'MR7MW9JMIPYQ' },
      { id: 'cert-7', Name: 'Belajar Machine Learning untuk Pemula', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: '1RXYWJ2VKZVM' },
      { id: 'cert-8', Name: 'Belajar Dasar UX Design', Issuer: 'Dicoding Indonesia', Date: 'May 2026', CredentialID: '98XW0QQKJXM3' },
      { id: 'cert-9', Name: 'Belajar Dasar AI', Issuer: 'Dicoding Indonesia', Date: 'May 2026', CredentialID: 'JLX1VJ4ENZ72' },
      { id: 'cert-10', Name: 'Belajar Dasar Data Science', Issuer: 'Dicoding Indonesia', Date: 'May 2026', CredentialID: 'QLZ99GVMMZ5D' },
      { id: 'cert-11', Name: 'Belajar Dasar Google Cloud', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: 'GRX5WM03YZ0M' },
      { id: 'cert-12', Name: 'Prompt Engineering untuk Software Developer', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: '0LZ0YMJY3X65' },
      { id: 'cert-13', Name: 'Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: 'QLZ99E4Z7Z5D' },
      { id: 'cert-14', Name: 'Belajar Back-End Pemula dengan Python', Issuer: 'Dicoding Indonesia', Date: 'Jun 2026', CredentialID: 'GRPN7JY68X2M' },
      { id: 'cert-15', Name: 'Memulai Pemrograman dengan Python', Issuer: 'Dicoding Indonesia', Date: 'May 2026', CredentialID: '1RXYWQE4KZVM' }
    ];

    try {
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order('id', { ascending: false }),
        supabase.from("certificates").select("*").order('id', { ascending: false }), 
      ]);

      const projectData = [...predefinedProjects, ...(projectsResponse.data || [])];
      const certificateData = [...(certificatesResponse.data || []), ...allPredefinedCertificates];

      setProjects(projectData);
      setCertificates(certificateData);

      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
      
      window.dispatchEvent(new Event("storage_updated"));
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
      setProjects(predefinedProjects);
      setCertificates(allPredefinedCertificates);
      localStorage.setItem("projects", JSON.stringify(predefinedProjects));
      localStorage.setItem("certificates", JSON.stringify(allPredefinedCertificates));
      window.dispatchEvent(new Event("storage_updated"));
    }
  }, []);

  useEffect(() => {
    const cachedProjects = localStorage.getItem('projects');
    const cachedCertificates = localStorage.getItem('certificates');

    if (cachedProjects && cachedCertificates) {
        setProjects(JSON.parse(cachedProjects));
        setCertificates(JSON.parse(cachedCertificates));
    }
    
    fetchData();
  }, [fetchData]);

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  const handleTabKeyDown = (e, currentIndex) => {
    const tabsCount = 3;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabsCount;
      setValue(nextIndex);
      document.getElementById(`full-width-tab-${nextIndex}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabsCount) % tabsCount;
      setValue(prevIndex);
      document.getElementById(`full-width-tab-${prevIndex}`)?.focus();
    }
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-transparent overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
          <span style={{
            color: '#fafafa',
            backgroundImage: 'linear-gradient(45deg, #fafafa 10%, #a1a1aa 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className="w-full">
        {/* Custom AppBar and Tabs using Tailwind */}
        <div className="relative mb-6 rounded-2xl border border-white/10 bg-white/5 shadow-sm px-2 md:px-4 backdrop-blur-md">
          <div
            role="tablist"
            aria-label="Portfolio content sections"
            className="flex justify-between items-center py-2 h-[70px] gap-2 overflow-x-auto no-scrollbar"
          >
            {[ 
              { label: "Projects", icon: Code }, 
              { label: "Certificates", icon: Award }, 
              { label: "Tech Stack", icon: Boxes }
            ].map((tab, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={value === idx}
                tabIndex={value === idx ? 0 : -1}
                id={`full-width-tab-${idx}`}
                aria-controls={`full-width-tabpanel-${idx}`}
                onClick={() => setValue(idx)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`
                  flex-1 min-w-[120px] flex flex-col items-center justify-center p-3 rounded-xl
                  font-semibold transition-all duration-300 ease-out z-10 mx-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400
                  ${value === idx 
                    ? "text-zinc-100 bg-white/10 shadow-sm" 
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 hover:-translate-y-0.5"
                  }
                `}
              >
                <tab.icon className={`w-5 h-5 mb-1 transition-all duration-300 ${value === idx ? "text-zinc-300 scale-110" : "group-hover:rotate-6 scale-100"}`} aria-hidden="true" />
                <span className="text-sm md:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="transition-opacity duration-300 ease-in-out">
          <TabPanel value={value} index={0}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate 
                      ImgSertif={certificate.Img} 
                      Name={certificate.Name} 
                      Issuer={certificate.Issuer} 
                      Date={certificate.Date} 
                      CredentialID={certificate.CredentialID} 
                      CredentialURL={certificate.CredentialURL}
                    />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} color={stack.color} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}