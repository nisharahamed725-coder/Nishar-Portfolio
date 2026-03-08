"use client";

import { motion } from 'framer-motion';
import { Database, Globe, Server, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        {
            category: "Programming Languages",
            icon: <Cpu className="w-6 h-6  text-emerald-400" />,
            items: ["C", "C++", "Java"]
        },
        {
            category: "Web Development",
            icon: <Server className="w-6 h-6 text-pink-400" />,
            items: ["HTML", "CSS", "JavaScript"]
        },
        {
            category: "Tools",   
            icon: <Cpu className="w-6 h-6 text-emerald-400" />,
            items: [ "VS Code"]
        }
    ];

    return (
        <section id="about" aria-label="About Shashidhar Naik" className="py-20 bg-slate-900/30 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        I am  <span className="text-violet-400 font-semibold">Nishar Ahamed</span> BCA student currently studying at EGS Pillay Arts and Science College.
                        I am passionate about learning  <span className="text-pink-400">programming and software development</span>.
                      My journey in the tech field has just begun, and I am continuously improving my skills in languages like 
                         <span className="text-violet-400"> C, C++, Java, and HTML</span> I enjoy exploring new technologies and building my knowledge to become a professional software developer in the future.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                        >
                            <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-200">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
