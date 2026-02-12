
import React from 'react';
import { Briefcase, Calendar, GraduationCap, Trophy } from 'lucide-react';

interface JourneyItem {
    id: number;
    title: string;
    organization: string;
    date: string;
    desc: string;
    tag: string;
    gradient: string;
    icon: React.ReactNode;
}

const Experience: React.FC = () => {
    // Data sorted in reverse chronological order for display
    const journeyItems: JourneyItem[] = [
        {
            id: 1, // BCA
            title: 'B.C.A. – Applications',
            organization: 'Tilak Maharashtra University',
            date: '2021 – 2024',
            desc: 'Graduated with strong fundamentals in Computer Applications, Software Development, and Database Management.',
            tag: 'Graduate',
            gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)', // Violet to Purple
            icon: <GraduationCap size={20} color="#fff" />,
        },
        {
            id: 2, // Internship
            title: 'Python Developer Intern',
            organization: 'Defronix Cybersecurity',
            date: 'Jan 2024 – Apr 2024',
            desc: 'Automated security checks, deployed honeypots for threat detection, and optimized backend scripts.',
            tag: 'Internship',
            gradient: 'linear-gradient(135deg, #10b981, #14b8a6)', // Emerald to Teal
            icon: <Briefcase size={20} color="#fff" />,
        },

        {
            id: 3, // MCA
            title: 'M.C.A. – Cyber Security',
            organization: 'Parul University',
            date: '2024 – 2026',
            desc: 'Specializing in Cyber Security and Forensics. Focused on advanced network defense and cryptographic protocols.',
            tag: 'Pursuing',
            gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)', // Blue to Cyan
            icon: <GraduationCap size={20} color="#fff" />,
        },
        {
            id: 4, // Hackathon
            title: 'Runner-up',
            organization: 'Vadodara Hackathon 5.0',
            date: '2024',
            desc: 'Built innovative AI-driven security solutions under tight deadlines. Competed against top teams in the region.',
            tag: 'Winner',
            gradient: 'linear-gradient(135deg, #f97316, #f59e0b)', // Orange to Amber
            icon: <Trophy size={20} color="#fff" />,
        },


    ];

    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
                    <p className="section-subtitle">Academic milestones, professional experience, and achievements.</p>
                </div>

                <div className="timeline">
                    {journeyItems.map((item) => (
                        <div key={item.id} className="timeline-item">
                            <div className="timeline-dot" style={{ background: item.gradient }}>
                                {item.icon}
                            </div>
                            <div className="timeline-content glass-card">
                                <div className="timeline-header">
                                    <div className="header-left">
                                        <h3>{item.title}</h3>
                                        <span className="organization">{item.organization}</span>
                                    </div>
                                    {item.tag && (
                                        <span className="tag" style={{ background: item.gradient }}>
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="timeline-meta">
                                    <span className="meta-item"><Calendar size={14} /> {item.date}</span>
                                </div>
                                <p className="timeline-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .experience-section {
                    background: var(--color-bg-primary);
                    position: relative;
                }
                
                .section-subtitle {
                    color: var(--color-text-secondary);
                    margin-top: 0.5rem;
                }

                .timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 3rem auto 0;
                    padding: 2rem 0;
                    display: flex;
                    flex-direction: column;
                }

                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--color-border);
                    transform: translateX(-50%);
                }

                .timeline-item {
                    margin-bottom: 3.5rem;
                    position: relative;
                    width: 50%;
                }

                /* Odd items - Left Side */
                .timeline-item:nth-child(odd) {
                    align-self: flex-start;
                    padding-right: 3rem;
                    text-align: right;
                }

                /* Even items - Right Side */
                .timeline-item:nth-child(even) {
                    align-self: flex-end;
                    padding-left: 3rem;
                    text-align: left;
                }

                /* Dot */
                .timeline-dot {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    top: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    box-shadow: 0 0 0 4px var(--color-bg-primary), 0 0 15px rgba(0,0,0,0.3);
                }

                .timeline-item:nth-child(odd) .timeline-dot {
                    right: -20px;
                }

                .timeline-item:nth-child(even) .timeline-dot {
                    left: -20px;
                }

                /* Content */
                .timeline-content {
                    padding: 1.5rem;
                    position: relative;
                    transition: transform 0.3s ease;
                }

                .timeline-content:hover {
                    transform: translateY(-5px);
                }
                
                /* Connecting Line for Cards */
                .timeline-content::after {
                    content: '';
                    position: absolute;
                    top: 20px;
                    width: 0; 
                    height: 0; 
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
                
                .timeline-item:nth-child(odd) .timeline-content::after {
                    right: -10px;
                    border-left: 10px solid rgba(255, 255, 255, 0.05);
                }
                
                .timeline-item:nth-child(even) .timeline-content::after {
                    left: -10px;
                    border-right: 10px solid rgba(255, 255, 255, 0.05);
                }

                .timeline-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .timeline-item:nth-child(odd) .timeline-header {
                    flex-direction: row-reverse;
                }

                .header-left h3 {
                    font-size: 1.1rem;
                    color: var(--color-text-primary);
                }

                .organization {
                    font-size: 0.9rem;
                    color: var(--color-accent-primary);
                    display: block;
                    font-weight: 500;
                    margin-top: 0.25rem;
                }

                .tag {
                    font-size: 0.75rem;
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-weight: 600;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    white-space: nowrap;
                }

                .timeline-meta {
                    display: flex;
                    gap: 1rem;
                    margin: 0.5rem 0 1rem;
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    align-items: center;
                }

                .timeline-item:nth-child(odd) .timeline-meta {
                    justify-content: flex-end;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                .timeline-desc {
                    font-size: 0.95rem;
                    color: var(--color-text-secondary);
                    line-height: 1.6;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .timeline::before {
                        left: 30px;
                    }

                    .timeline-item {
                        width: 100%;
                        align-self: flex-start;
                        padding-left: 70px;
                        padding-right: 0;
                        text-align: left;
                        margin-bottom: 2.5rem;
                    }

                    .timeline-item:nth-child(odd),
                    .timeline-item:nth-child(even) {
                        text-align: left;
                        padding-right: 0;
                        padding-left: 70px;
                    }
                    
                    .timeline-item:nth-child(odd) .timeline-header {
                        flex-direction: row;
                    }

                    .timeline-item:nth-child(odd) .timeline-meta {
                        justify-content: flex-start;
                    }

                    .timeline-dot {
                        left: 10px !important;
                        right: auto !important;
                    }
                    
                    .timeline-content::after {
                        left: -10px !important;
                        right: auto !important;
                        border-right: 10px solid rgba(255, 255, 255, 0.05);
                        border-left: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
