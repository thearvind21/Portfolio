
import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="highlight-text">
                            I am a cybersecurity enthusiast and full-stack developer with a passion for building secure, scalable, and efficient digital solutions.
                        </p>
                        <p>
                            With a strong foundation in <span className="text-white">Computer Key Applications (MCA)</span> and a specialization in <span className="text-white">Cyber Security & Forensics</span>, I bridge the gap between robust development and impenetrable security.
                        </p>
                        <p>
                            During my internship as a <span className="text-accent">Python Developer at Defronix Cybersecurity Pvt Ltd</span>, I gained hands-on experience in network security and web development, sharpening my ability to write clean, secure code. My analytical mindset allows me to identify vulnerabilities and optimize performance, ensuring every project I touch is production-ready.
                        </p>

                        <div className="achievements">
                            <div className="achievement-card">
                                <ShieldCheck className="icon" size={32} />
                                <div>
                                    <h4>Vadodara Hackathon 5.0</h4>
                                    <span>Runner-Up</span>
                                </div>
                            </div>
                            <div className="achievement-card">
                                <Cpu className="icon" size={32} />
                                <div>
                                    <h4>Mastering Industrial Projects</h4>
                                    <span>Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="code-window">
                            <div className="window-header">
                                <div className="dots">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <span className="title">profile.py</span>
                            </div>
                            <div className="window-body">
                                <div className="code-line"><span className="keyword">class</span> <span className="class-name">Developer</span>:</div>
                                <div className="code-line indent">    <span className="keyword">def</span> <span className="function">__init__</span>(self):</div>
                                <div className="code-line indent-2">        self.name = <span className="string">"Arvind Sitaram Padyachi"</span></div>
                                <div className="code-line indent-2">        self.role = <span className="string">"Full Stack & Security"</span></div>
                                <div className="code-line indent-2">        self.location = <span className="string">"Mumbai, India"</span></div>
                                <div className="code-line"></div>
                                <div className="code-line indent">    <span className="keyword">def</span> <span className="function">get_mission</span>(self):</div>
                                <div className="code-line indent-2">        <span className="keyword">return</span> <span className="string">"To build secure, intelligent systems."</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    background: var(--color-bg-secondary);
                    position: relative;
                }

                .section-header {
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    display: inline-block;
                    border-bottom: 2px solid var(--color-accent-primary);
                    padding-bottom: 0.5rem;
                }

                .about-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .highlight-text {
                    font-size: 1.25rem;
                    color: var(--color-text-primary);
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }

                .about-text p {
                    margin-bottom: 1.5rem;
                    color: var(--color-text-secondary);
                }

                .text-white { color: var(--color-text-primary); font-weight: 600; }
                .text-accent { color: var(--color-accent-primary); font-weight: 600; }

                .achievements {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                .achievement-card {
                    background: var(--glass-bg);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1rem;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: transform 0.3s ease;
                }

                .achievement-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-accent-secondary);
                }

                .achievement-card .icon {
                    color: var(--color-accent-secondary);
                }

                .achievement-card h4 {
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                }

                .achievement-card span {
                    font-size: 0.875rem;
                    color: var(--color-text-secondary);
                }

                /* Terminal Visual */
                .code-window {
                    background: #1e1e1e;
                    border-radius: 8px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                    overflow: hidden;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.9rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .window-header {
                    background: #252526;
                    padding: 0.75rem 1rem;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #333;
                }

                .dots {
                    display: flex;
                    gap: 6px;
                    margin-right: 1rem;
                }

                .dot { width: 12px; height: 12px; border-radius: 50%; }
                .red { background: #ff5f56; }
                .yellow { background: #ffbd2e; }
                .green { background: #27c93f; }

                .title {
                    color: #999;
                    font-size: 0.8rem;
                }

                .window-body {
                    padding: 1.5rem;
                    color: #d4d4d4;
                }

                .keyword { color: #569cd6; }
                .class-name { color: #4ec9b0; }
                .function { color: #dcdcaa; }
                .string { color: #ce9178; }
                
                .indent { margin-left: 1.5rem; }
                .indent-2 { margin-left: 3rem; }

                @media (max-width: 968px) {
                    .about-content {
                        grid-template-columns: 1fr;
                    }
                    .achievements {
                        flex-direction: column;
                    }
                    .section-header {
                        margin-bottom: 2.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .code-window {
                        font-size: 0.75rem;
                    }
                    .window-body {
                        padding: 1rem;
                    }
                    .highlight-text {
                        font-size: 1.05rem;
                    }
                    .about-text p {
                        font-size: 0.9rem;
                    }
                    .achievement-card {
                        padding: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
