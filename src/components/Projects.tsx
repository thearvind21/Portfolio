
import React from 'react';
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Drug Trafficking Detection",
            category: "Cyber Security ",
            description: "An advanced threat detection system leveraging Python and TensorFlow to monitor network traffic patterns in real-time, identifying abnormal behaviors indicative of illegal trafficking operations.",
            tech: ["Python", "TensorFlow", "React"],
            link: "https://thechiefcoders.vercel.app/",
            image: "/images/DTDS.png"
        },
        {
            title: "DefroxPot",
            category: "Cyber Defense",
            description: "A sophisticated honeypot infrastructure designed to deceive attackers. It logs intrusion attempts, captures payload data, and analyzes attack vectors to strengthen improved security protocols.",
            tech: ["Python", "Flask", "Django"],
            link: "https://github.com/thearvind21/DefroxPot",
            image: "/images/Defrox.png"
        },
        {
            title: "Leave Management System",
            category: "Enterprise Full Stack",
            description: "A comprehensive internal tool used by institutions to streamline leave requests. Features role-based access control (RBAC), automated approval workflows, and QR-based digital passes.",
            tech: ["React", "TypeScript", "PostgreSQL"],
            link: "https://student-leave-management.vercel.app",
            image: "/images/LeaveApp.png"
        },
        {
            title: "Movie Ticket Booking",
            category: "Consumer Web App",
            description: "A robust booking platform handling real-time seat selection and transaction processing. Demonstrates core full-stack principles with a focus on database integrity and user experience.",
            tech: ["PHP", "MySQL", "JavaScript"],
            link: "https://github.com/thearvind21/movie-ticket-booking-main",
            image: "/images/Booking.png"
        }
    ];

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>
                    <p className="section-subtitle">Selected cybersecurity and full-stack engineering projects.</p>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-row">
                            <div className="project-content">
                                <div className="project-label">
                                    <Code size={14} className="code-icon" />
                                    <span>{project.category}</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="tech-stack">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-item">{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-item">
                                        <Github size={18} />
                                        <span>Source</span>
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-item highlight">
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                        <ArrowRight size={14} className="arrow" />
                                    </a>
                                </div>
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image-container">
                                <div className="image-overlay"></div>
                                <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .projects-section {
                   background: var(--color-bg-secondary);
                   padding: 6rem 0;
                }

                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 6rem;
                    margin-top: 4rem;
                }

                .project-row {
                    display: grid;
                    grid-template-columns: 1fr 1.25fr;
                    gap: 4rem;
                    align-items: center;
                }

                /* Alternating Layout */
                .project-row:nth-child(even) {
                    grid-template-columns: 1.25fr 1fr;
                    direction: rtl; /* Quick trick to swap visual order, reset text direction below */
                }

                .project-row:nth-child(even) .project-content {
                    direction: ltr; /* Reset text direction */
                }
                
                .project-row:nth-child(even) .project-image-container {
                    direction: ltr;
                }

                /* Content Side */
                .project-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .project-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-accent-primary);
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .project-title {
                    font-size: 2rem;
                    color: var(--color-text-primary);
                    font-weight: 700;
                    line-height: 1.2;
                }

                .project-desc {
                    color: var(--color-text-secondary);
                    font-size: 1rem;
                    line-height: 1.7;
                    max-width: 90%;
                }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }

                .tech-item {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.8rem;
                    color: var(--color-text-primary);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.35rem 0.75rem;
                    border-radius: 4px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .project-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 1rem;
                }

                .link-item {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    color: var(--color-text-primary);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                    font-size: 0.95rem;
                }

                .link-item:hover {
                    color: var(--color-accent-primary);
                }

                .link-item.highlight {
                    color: var(--color-accent-primary);
                }

                .arrow {
                    transition: transform 0.2s;
                }

                .link-item:hover .arrow {
                    transform: translateX(4px);
                }

                /* Image Side */
                .project-image-container {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    aspect-ratio: 16/10;
                    transition: transform 0.4s ease;
                    cursor: pointer;
                }
                
                .project-image-container:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-accent-primary);
                }

                .project-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                    filter: grayscale(20%);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent);
                    z-index: 1;
                    transition: opacity 0.3s;
                }
                
                .project-image-container:hover .project-img {
                    transform: scale(1.05);
                    filter: grayscale(0%);
                }

                .project-image-container:hover .image-overlay {
                    opacity: 0;
                }

                @media(max-width: 968px) {
                    .project-row {
                        grid-template-columns: 1fr !important; /* Force single column */
                        direction: ltr !important; /* Reset direction */
                        gap: 2rem;
                    }

                    .project-title {
                        font-size: 1.75rem;
                    }
                    
                    .projects-list {
                        gap: 4rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
