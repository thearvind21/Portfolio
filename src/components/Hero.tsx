
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
                        <p className="core-stack-label">Core Stack</p>
                        <div className="tech-badge-container">
                            <div className="tech-badge python">
                                <Terminal size={18} />
                                <span>Python</span>
                            </div>
                            <div className="tech-badge django">
                                <Server size={18} />
                                <span>Django</span>
                            </div>
                            <div className="tech-badge security">
                                <Shield size={18} />
                                <span>Find Vulnerabilities</span>
                            </div>
                            <div className="tech-badge react">
                                <Layout size={18} />
                                <span>React</span>
                            </div>
                            <div className="tech-badge db">
                                <Database size={18} />
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

                /* Core Stack Label - hidden on desktop, shown on mobile */
                .core-stack-label {
                    display: none;
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(148, 163, 184, 0.5);
                    margin-bottom: 1rem;
                    text-align: center;
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

                @keyframes badgeFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 968px) {
                    .hero-section {
                        padding-top: 6rem;
                        padding-bottom: 3rem;
                    }

                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .hero-headline {
                        font-size: 2.5rem;
                    }

                    .hero-description {
                        margin-left: auto;
                        margin-right: auto;
                        margin-bottom: 2rem;
                    }
                    
                    .cta-group {
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        max-width: 320px;
                        margin: 0 auto;
                        gap: 0.75rem;
                    }

                    .btn {
                        width: 100%;
                        padding: 0.9rem 1.5rem;
                        border-radius: 9999px;
                        font-size: 0.95rem;
                        justify-content: center;
                    }

                    .btn-primary {
                        box-shadow: 0 4px 20px rgba(56, 189, 248, 0.25);
                    }
                    
                    .tech-badge {
                        position: static;
                        display: inline-flex;
                        margin: 0;
                        border-radius: 9999px;
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(12px);
                        padding: 0.6rem 1.1rem;
                        font-size: 0.9rem;
                        box-shadow: none;
                        animation: badgeFadeIn 0.6s ease forwards;
                        opacity: 0;
                    }

                    .tech-badge svg {
                        width: 16px;
                        height: 16px;
                    }

                    .tech-badge.python { animation-delay: 0.1s; }
                    .tech-badge.django { animation-delay: 0.2s; }
                    .tech-badge.security { animation-delay: 0.3s; }
                    .tech-badge.react { animation-delay: 0.4s; }
                    .tech-badge.db { animation-delay: 0.5s; transform: scale(1); }
                    
                    .hero-visual {
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 2.5rem;
                    }

                    .core-stack-label {
                        display: block;
                    }
                    
                    .tech-badge-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 0.75rem;
                    }
                    
                    .cyber-circle {
                        display: none;
                    }

                    .role-badge {
                        font-size: 0.7rem;
                        padding: 0.4rem 1rem;
                        border-radius: 9999px;
                        border: 1px solid rgba(56, 189, 248, 0.25);
                        background: rgba(56, 189, 248, 0.05);
                        display: inline-block;
                        margin-bottom: 1.25rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding-top: 5rem;
                        min-height: auto;
                    }

                    .hero-headline {
                        font-size: 2rem;
                        line-height: 1.15;
                        margin-bottom: 1rem;
                    }

                    .hero-description {
                        font-size: 0.9rem;
                        max-width: 300px;
                        margin-bottom: 1.75rem;
                    }

                    .cta-group {
                        max-width: 280px;
                        gap: 0.65rem;
                    }

                    .btn {
                        padding: 0.8rem 1.25rem;
                        font-size: 0.875rem;
                    }

                    .role-badge {
                        font-size: 0.6rem;
                        letter-spacing: 0.15em;
                    }

                    .tech-badge-container {
                        gap: 0.6rem;
                    }

                    .tech-badge {
                        padding: 0.5rem 0.9rem;
                        font-size: 0.8rem;
                        gap: 0.5rem;
                    }

                    .hero-visual {
                        margin-top: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
