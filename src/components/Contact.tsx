
import React, { useState } from 'react';
import { Linkedin, Github, Download, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/arvindpadyachi1@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Portfolio Contact from " + formData.name
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
                        <p className="contact-description">
                            I'm currently available for freelance work and full-time positions.
                            If you have a project that needs a secure and scalable solution, or just want to say hi, feel free to reach out!
                        </p>

                        <div className="contact-links">
                            {/* <a href="mailto:arvindpadyachi1@gmail.com" className="contact-link">
                                <div className="icon-box"><Mail size={20} /></div>
                                
                            </a> */}
                            {/* <a href="https://linkedin.com/in/arvind-padyachi" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="icon-box"><Linkedin size={20} /></div>

                            </a>
                            <a href="https://github.com/thearvind21" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="icon-box"><Github size={20} /></div>

                            </a> */}
                            <div className="location-globe-widget">
                                <a href="https://www.google.com/maps/place/Vadodara,+Gujarat" target="_blank" rel="noopener noreferrer" className="globe-visual">
                                    <div className="location-pin-point" title="Vadodara, India">
                                        <div className="pin-pulse"></div>
                                        <div className="pin-center"></div>
                                    </div>
                                </a>
                                <div className="location-details">
                                    <MapPin size={18} className="map-pin-icon" />
                                    <span>Vadodara, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="resume-download">
                            <a href="/resume.pdf" className="btn btn-primary" download>
                                <Download size={18} style={{ marginRight: '8px' }} />
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container glass-card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send me a message</h3>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can I help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary full-width ${status === 'submitting' ? 'loading' : ''}`}
                                disabled={status === 'submitting' || status === 'success'}
                            >
                                {status === 'submitting' ? (
                                    <span>Sending...</span>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={18} style={{ marginRight: '8px' }} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} style={{ marginRight: '8px' }} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <div className="form-error">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-socials">
                        <a href="https://linkedin.com/in/arvind-padyachi" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
                            <div className="icon-box"><Linkedin size={20} /></div>
                        </a>
                        <a href="https://github.com/thearvind21" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
                            <div className="icon-box"><Github size={20} /></div>
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Arvind Sitaram Padyachi. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .contact-section {
                    background: linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg-primary));
                    padding-bottom: 2rem;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    margin-bottom: 4rem;
                }

                .contact-description {
                    color: var(--color-text-secondary);
                    margin: 1.5rem 0 2.5rem;
                    font-size: 1.1rem;
                    max-width: 500px;
                }

                .contact-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: var(--color-text-primary);
                    transition: all 0.3s ease;
                }

                .contact-link:hover {
                    color: var(--color-accent-primary);
                    transform: translateX(5px);
                }

                .location-globe-widget {
                    margin-top: 3rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }

                .globe-visual {
                    display: block; 
                    position: relative;
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    background-color: #0f172a; 
                    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/600px-Blue_Marble_2002.png');
                    background-size: cover;
                    /* Center on India (approx 80-85% X, 30-40% Y on this map) */
                    background-position: 82% 35%;
                    box-shadow: 
                        inset 15px 0 25px rgba(0,0,0,0.6),
                        inset -5px -5px 15px rgba(255,255,255,0.15),
                        0 0 20px rgba(56, 189, 248, 0.2); 
                    animation: float 6s ease-in-out infinite; /* Float only, no spin to keep pin accurate */
                    transition: transform 0.5s ease;
                    cursor: pointer;
                }

                .globe-visual:hover {
                    transform: scale(1.05);
                    box-shadow: 
                        inset 15px 0 25px rgba(0,0,0,0.6),
                        0 0 40px rgba(56, 189, 248, 0.4);
                }

                .location-pin-point {
                    position: absolute;
                    /* Coordinates for India on the centered background */
                    top: 42%; 
                    left: 58%; 
                    width: 12px;
                    height: 12px;
                    z-index: 10;
                }

                .pin-center {
                    width: 8px;
                    height: 8px;
                    background: #ef4444; 
                    border-radius: 50%;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 0 10px #ef4444;
                }

                .pin-pulse {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 24px;
                    height: 24px;
                    border: 1px solid #ef4444;
                    border-radius: 50%;
                    opacity: 0;
                    animation: ripple 2s infinite ease-out;
                }



                .location-details {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.5rem 1.25rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 100px;
                    color: var(--color-text-primary);
                    font-size: 0.95rem;
                    backdrop-filter: blur(4px);
                    transition: all 0.3s ease;
                }

                .location-globe-widget:hover .location-details {
                    border-color: var(--color-accent-primary);
                    background: rgba(56, 189, 248, 0.1);
                }

                .map-pin-icon {
                    color: var(--color-accent-primary);
                }

                /* Floating animation instead of spin to keep pin accurate */
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                @keyframes ripple {
                    0% { width: 0; height: 0; opacity: 0.8; }
                    100% { width: 40px; height: 40px; opacity: 0; }
                }

                .contact-link .icon-box {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--color-border);
                    color: var(--color-accent-primary);
                }

                .contact-form-container {
                    padding: 2.5rem;
                }

                .contact-form h3 {
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background: rgba(15, 23, 42, 0.5);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    color: var(--color-text-primary);
                    font-family: var(--font-body);
                    transition: border-color 0.3s ease;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-accent-primary);
                }

                .full-width {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .form-error {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #ef4444;
                    margin-top: 1rem;
                    font-size: 0.9rem;
                    background: rgba(239, 68, 68, 0.1);
                    padding: 0.5rem;
                    border-radius: 4px;
                }

                .footer-bottom {
                    padding-top: 2rem;
                    border-top: 1px solid var(--color-border);
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .footer-socials {
                    display: flex;
                    gap: 1rem;
                }

                @media (max-width: 968px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .footer-bottom {
                        flex-direction: column;
                        gap: 1.5rem;
                        text-align: center;
                    }

                    .footer-socials {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
