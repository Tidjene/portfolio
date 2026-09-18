import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "SOC & SIEM ",
      skills: ["Wazuh", "Splunk", "ELK Stack", "Falco / Falcosidekick", "Suricata", "Snort", "Analyse de logs"]
    },
    {
      title: "Pentesting",
      skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "sqlmap", "Hydra", "John the Ripper", "Aircrack-ng"]
    },
    {
      title: "Sécurité Système & Kernel",
      skills: ["eBPF Rootkit Detection", "Seccomp", "SELinux", "AppArmor"]
    },
    {
      title: "DevSecOps",
      skills: ["Python", "Bash", "PowerShell", "Docker", "Kubernetes", "GitHub Actions", "Git", "GCP"]
    },
    {
      title: "Sécurité Web & APIs",
      skills: ["OWASP Top 10", "Injection SQL", "XSS", "CSRF", "API Security", "JWT", "FastAPI"]
    },
    {
      title: "Sécurité Réseau",
      skills: ["TCP/IP", "Wireshark", "Firewalls", "VPN", "IDS/IPS","zabbix"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">$ ./hands-on_and_certs.sh --list-all</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        {/* Section TryHackMe - Navigateur Pleine Largeur */}
        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-hidden">
          <div className="font-mono space-y-4 text-xs md:text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-primary">$</span>
              <span className="text-foreground">firefox https://tryhackme.com/p/TidiX</span>
            </div>

            {/* Ingestion pleine largeur du cadre navigateur */}
            <div className="-mx-4 -mb-4 md:-mx-6 md:-mb-6 mt-4">
              <div className="w-full bg-muted/80 border-y border-primary/30 px-4 py-2 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-muted-foreground truncate px-2">https://tryhackme.com/p/TidiX</span>
                <a 
                  href="https://tryhackme.com/p/TidiX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-[11px] shrink-0"
                >
                  [Ouvrir ↗]
                </a>
              </div>

              <div className="w-full h-[480px] bg-background/50 overflow-hidden">
                <iframe 
                  src="https://tryhackme.com/p/TidiX"
                  title="Profil TryHackMe TidiX"
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Certifications - Format JSON */}
        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
          <div className="font-mono space-y-2 text-xs md:text-sm">
            <div className="text-primary whitespace-nowrap">
              $ cat ~/.certifications.json | jq .
            </div>
            
            <div className="text-muted-foreground pl-2 md:pl-4">
              <span className="text-amber-400 font-semibold">&#123;</span>
              <div className="pl-4">
                <span className="text-blue-400">"completed"</span>: [
                  <div className="pl-4 text-emerald-400 font-semibold">
                    "RHCSA (Red Hat Certified System Administrator)", 
                  </div>
                  <div className="pl-4 text-emerald-400 font-semibold">
                    "Google Cybersecurity Certificate (Coursera)",
                  </div>
                  <div className="pl-4 text-emerald-400 font-semibold">
                    "Ethical Hacker (Cisco)",
                  </div>
                  <div className="pl-4 text-emerald-400 font-semibold">
                    "Microsoft Certified Security, Compliance and Identity Fundamentals"
                  </div>
                ],
                <span className="text-blue-400">"in_progress"</span>: [
                  <div className="pl-4 text-yellow-400">
                    "CPTS (HackTheBox Certified Penetration Testing Specialist)"
                  </div>
                ]
              </div>
              <span className="text-amber-400 font-semibold">&#125;</span>
            </div>
          </div>
        </div>

        {/* Titre séparateur Skills Centré */}
        <div className="mt-16 mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-mono text-primary text-glow">
            $ Skills
          </h3>
          <div className="h-0.5 w-16 bg-primary/60 mt-2 box-glow mx-auto" />
        </div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary/60 transition-all hover:box-glow"
            >
              <h3 className="text-xl font-bold text-primary mb-4 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className="border-primary/50 text-foreground hover:bg-primary/10 transition-colors font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;