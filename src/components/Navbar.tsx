
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <Shield size={24} className="logo-icon" />
                    <span>AP<span className="dot"></span></span>
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button className="menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 1.5rem 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .navbar.scrolled {
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(10px);
                    padding: 1rem 0;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                }

                .logo-icon {
                    color: var(--color-accent-primary);
                }

                .dot {
                    color: var(--color-accent-secondary);
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links a {
                    color: var(--color-text-secondary);
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                }

                .nav-links a:hover {
                    color: var(--color-accent-primary);
                }

                .menu-btn {
                    display: none;
                    background: none;
                    color: var(--color-text-primary);
                    border: none;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .menu-btn {
                        display: block;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 70%;
                        height: 100vh;
                        background: var(--color-bg-secondary);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 2.5rem;
                        transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: -5px 0 15px rgba(0,0,0,0.5);
                    }

                    .nav-links.active {
                        right: 0;
                    }

                    .nav-links a {
                        font-size: 1.25rem;
                    }
                }
           `}</style>
        </nav>
    );
};

export default Navbar;
