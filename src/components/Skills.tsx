
import React from 'react';
import { Code, Frame, Shield, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Code size={24} />,
            skills: ["Python", "JavaScript", "Html", "PHP"]
        },
        {
            title: "Frameworks",
            icon: <Frame size={24} />,
            skills: ["Django", "Flask", "React", "Tailwind CSS"]
        },
        {
            title: "Security",
            icon: <Shield size={24} />,
            skills: ["Network Security", "Nmap", "Wireshark", "Burp Suite"]
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            skills: ["SQL", "PostgreSQL"]
        },
        {
            title: "Tools",
            icon: <Wrench size={24} />,
            skills: ["Git", "REST APIs", "Postman", "Linux"]
        }
    ];

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
                    <p className="section-subtitle">
                        A curated stack of technologies I use to build scalable and secure applications.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card glass-card">
                            <div className="card-header">
                                <div className="icon-box">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-section {
                    background: var(--color-bg-primary);
                }

                .section-subtitle {
                    color: var(--color-text-secondary);
                    margin-top: 1rem;
                    font-size: 1.1rem;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                }

                .skill-card {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--color-border);
                }

                .icon-box {
                    width: 50px;
                    height: 50px;
                    background: rgba(56, 189, 248, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-accent-primary);
                }

                .card-header h3 {
                    font-size: 1.25rem;
                    color: var(--color-text-primary);
                }

                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .skill-tag {
                    background: rgba(30, 41, 59, 0.5);
                    color: var(--color-text-secondary);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    border: 1px solid var(--color-border);
                    transition: all 0.3s ease;
                }

                .skill-tag:hover {
                    background: var(--color-accent-primary);
                    color: #fff;
                    transform: translateY(-2px);
                    border-color: var(--color-accent-primary);
                }
            `}</style>
        </section>
    );
};

export default Skills;
