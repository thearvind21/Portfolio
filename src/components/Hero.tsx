
import React from 'react';
import { Shield, Layout, Server, Database, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2 className="role-badge">PYTHON + FULL STACK DEV + CYBER SECURITY</h2>
                        <h1 className="hero-headline">Building <span className="text-gradient">Secure</span> & <span className="text-gradient">Intelligent</span> Digital Systems</h1>
                        <p className="hero-description">
                            I architect robust full-stack applications with a security-first mindset.
                            Specializing in Python, Django, and ethical hacking to create resilient digital solutions.
                        </p>

                        <div className="cta-group">
                            <a href="#projects" className="btn btn-primary">View Projects</a>
                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                            {/* Ideally this would be a real link */}
                            <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="tech-badge-container">
                            <div className="tech-badge python">
                                <Terminal size={24} />
                                <span>Python</span>
                            </div>
                            <div className="tech-badge django">
                                <Server size={24} />
                                <span>Django</span>
                            </div>
                            <div className="tech-badge security">
                                <Shield size={24} />
                                <span>Find Vulnerabilities</span>
                            </div>
                            <div className="tech-badge react">
                                <Layout size={24} />
                                <span>React</span>
                            </div>
                            <div className="tech-badge db">
                                <Database size={24} />
                                <span>SQL</span>
                            </div>
                        </div>
                        {/* Abstract visual background element using CSS */}
                        <div className="cyber-circle"></div>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%),
                                radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.1), transparent 40%);
                }

                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }

                .role-badge {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                    color: var(--color-accent-primary);
                    margin-bottom: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .hero-headline {
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                .hero-description {
                    font-size: 1.1rem;
                    color: var(--color-text-secondary);
                    max-width: 500px;
                    margin-bottom: 2.5rem;
                }

                .cta-group {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-primary {
                    background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
                }

                .btn-primary:hover {
                    box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
                    transform: translateY(-2px);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .btn-outline {
                    border: 1px solid var(--color-accent-primary);
                    color: var(--color-accent-primary);
                    background: transparent;
                }
                
                .btn-outline:hover {
                    background: rgba(56, 189, 248, 0.1);
                }

                /* Visuals */
                .hero-visual {
                    position: relative;
                    height: 500px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .cyber-circle {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    border-radius: 50%;
                    border: 1px solid rgba(56, 189, 248, 0.2);
                    animation: rotate 20s linear infinite;
                    z-index: -1;
                }
                
                .cyber-circle::before {
                    content: '';
                    position: absolute;
                    top: -10px; left: -10px; right: -10px; bottom: -10px;
                    border-radius: 50%;
                    border: 1px dashed rgba(168, 85, 247, 0.3);
                    animation: rotate-reverse 15s linear infinite;
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                 @keyframes rotate-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }

                .tech-badge-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .tech-badge {
                    position: absolute;
                    background: rgba(15, 23, 42, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    padding: 0.75rem 1.25rem;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: var(--color-text-primary);
                    font-weight: 500;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                    animation: float 6s ease-in-out infinite;
                }
                
                .tech-badge svg {
                   color: var(--color-accent-primary);
                }

                .tech-badge.python { top: 20%; left: 0; animation-delay: 0s; }
                .tech-badge.django { top: 60%; right: 0; animation-delay: 1.5s; border-color: rgba(56, 189, 248, 0.3); }
                .tech-badge.security { top: 10%; right: 10%; animation-delay: 2s; color: var(--color-accent-secondary); border-color: rgba(168, 85, 247, 0.3); }
                .tech-badge.security svg { color: var(--color-accent-secondary); }
                .tech-badge.react { bottom: 15%; left: 15%; animation-delay: 3s; }
                .tech-badge.db { top: 45%; left: 40%; animation-delay: 1s; z-index: 2; transform: scale(1.1); background: rgba(30, 41, 59, 0.9); }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }

                @media (max-width: 968px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .hero-headline {
                        font-size: 2.5rem;
                    }
                    
                    .cta-group {
                        justify-content: center;
                    }
                    
                    .tech-badge {
                        position: static;
                        display: inline-flex;
                        margin: 0.5rem;
                        animation: none;
                    }
                    
                    .hero-visual {
                        height: auto;
                        display: block;
                    }
                    
                    .tech-badge-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 1rem;
                    }
                    
                    .cyber-circle {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
