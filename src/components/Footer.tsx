"use client";

import { Github, Linkedin, Package, Code2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const name = "Nishar Ahamed"

    const socialLinks = [
        {
            label: "GitHub Profile — shashi089",
            href: "https://github.com/nisharahamed725-coder",
            icon: <Github className="w-4 h-4" aria-hidden="true" />,
            text: "GitHub",
        },
        {
            label: `inkedIn Profile — ${name}`,
            href: "https://www.linkedin.com/in/nishar-ahamed-m-048297359",
            icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
            text: "LinkedIn",
        },
    ];

    return (
        <footer
            role="contentinfo"
            aria-label="Site footer"
            className="py-10 border-t border-slate-800 bg-slate-950"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Code2 className="text-violet-500 w-5 h-5" aria-hidden="true" />
                        <span className="font-bold text-slate-300">
                           {name} <span className="text-violet-500">.</span>
                        </span>
                    </div>

                    {/* Social Links — these provide sameAs signals for Google */}
                    <nav aria-label="Social media links">
                        <ul className="flex items-center gap-6" role="list">
                            {socialLinks.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className="flex items-center gap-1.5 text-slate-500 hover:text-violet-400 transition-colors text-sm"
                                    >
                                        {link.icon}
                                        <span>{link.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Copyright */}
                    <p className="text-slate-600 text-sm">
                        <span aria-label={`Copyright ${currentYear} ${name}`}>
                            &copy; {currentYear}{" "}
                            <span className="text-slate-500 font-medium">{name}</span>
                            . All rights reserved.
                        </span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
