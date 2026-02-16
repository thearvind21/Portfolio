
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

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

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

                {/* Desktop nav links */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button - always on top */}
                <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile overlay backdrop */}
            <div
                className={`mobile-overlay ${isOpen ? 'active' : ''}`}
                onClick={closeMenu}
            />

            {/* Mobile menu panel */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            style={{ animationDelay: `${index * 0.07}s` }}
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
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
                    -webkit-backdrop-filter: blur(10px);
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
                    z-index: 1102;
                }

                .logo-icon {
                    color: var(--color-accent-primary);
                }

                .dot {
                    color: var(--color-accent-secondary);
                }

                /* Desktop links */
                .nav-links-desktop {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links-desktop a {
                    color: var(--color-text-secondary);
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                    text-decoration: none;
                }

                .nav-links-desktop a:hover {
                    color: var(--color-accent-primary);
                }

                /* Menu button */
                .menu-btn {
                    display: none;
                    background: none;
                    color: var(--color-text-primary);
                    border: none;
                    cursor: pointer;
                    z-index: 1102;
                    padding: 0.25rem;
                    position: relative;
                }

                /* Mobile overlay */
                .mobile-overlay {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 1099;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                    pointer-events: none;
                }

                .mobile-overlay.active {
                    opacity: 1;
                    pointer-events: auto;
                }

                /* Mobile menu panel */
                .mobile-menu {
                    display: none;
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100dvh;
                    background: rgba(15, 23, 42, 0.97);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    z-index: 1100;
                    transform: translateX(100%);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: transform;
                }

                .mobile-menu.active {
                    transform: translateX(0);
                }

                .mobile-menu-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    gap: 0;
                    padding: 2rem;
                }

                .mobile-link {
                    color: var(--color-text-primary);
                    font-size: 1.6rem;
                    font-weight: 600;
                    font-family: var(--font-heading);
                    text-decoration: none;
                    padding: 1.25rem 2rem;
                    width: 100%;
                    text-align: center;
                    border-radius: 12px;
                    transition: background 0.3s ease, color 0.3s ease;
                    opacity: 0;
                    transform: translateY(20px);
                }

                .mobile-menu.active .mobile-link {
                    animation: fadeSlideIn 0.4s ease forwards;
                }

                .mobile-link:hover,
                .mobile-link:active {
                    background: rgba(56, 189, 248, 0.1);
                    color: var(--color-accent-primary);
                }

                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive */
                @media (max-width: 968px) {
                    .nav-links-desktop {
                        display: none;
                    }

                    .menu-btn {
                        display: block;
                    }

                    .mobile-overlay {
                        display: block;
                    }

                    .mobile-menu {
                        display: block;
                    }
                }

                @media (max-width: 480px) {
                    .mobile-link {
                        font-size: 1.35rem;
                        padding: 1rem 1.5rem;
                    }

                    .navbar {
                        padding: 1.25rem 0;
                    }

                    .navbar.scrolled {
                        padding: 0.75rem 0;
                    }
                }
           `}</style>
        </nav>
    );
};

export default Navbar;
