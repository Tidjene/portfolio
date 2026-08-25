import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Sécurité Système & Kernel",
      skills: ["Kali Linux", "Debian", "Ubuntu", "eBPF Rootkit Detection", "Seccomp", "Stunnel (TLS 1.3)", "Windows Server"]
    },
    {
      title: "SOC, SIEM & Monitoring (Blue Team)",
      skills: ["Wazuh", "Splunk", "ELK Stack", "Falco / Falcosidekick", "Snort", "Suricata", "Analyse de logs"]
    },
    {
      title: "Pentesting & Audits (Red Team)",
      skills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "John the Ripper", "sqlmap", "Hydra", "Aircrack-ng"]
    },
    {
      title: "Sécurité Web & APIs",
      skills: ["OWASP Top 10", "Injection SQL", "XSS", "CSRF", "API Security", "JWT", "FastAPI"]
    },
    {
      title: "Sécurité Réseau & Infrastructure",
      skills: ["TCP/IP", "Wireshark / Packet Analysis", "Firewalls", "VPN", "IDS/IPS", "Architecture Réseau"]
    },
    {
      title: "DevSecOps, Cloud & Scripting",
      skills: ["Python", "Bash", "PowerShell", "Docker", "Kubernetes", "CI/CD Security (GitHub Actions)", "Git", "MySQL"]
    }
  ];
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">$ ./skills.sh --list-all</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

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

        
        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
  <div className="font-mono space-y-4 text-xs md:text-sm">
    {/* Commande Shell simulée */}
    <div className="flex items-center space-x-2">
      <span className="text-primary">$</span>
      <span className="text-foreground">curl -s https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1729983</span>
    </div>

    {/* Statut de chargement / Réponse */}
    <div className="text-muted-foreground text-xs">
      [+] HTTP 200 OK — Badge TryHackMe récupéré avec succès
    </div>

    {/* Badge TryHackMe centré */}
    <div className="pt-2 flex justify-center">
      <iframe 
        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1729983"
        title="Badge TryHackMe"
        loading="lazy"
        className="w-[340px] h-[90px] border-0 rounded overflow-hidden"
      />
    </div>
  </div>
</div>

        {/* Terminal-like experience section */}
{/* Terminal-like experience section */}
<div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
  <div className="font-mono space-y-2 text-xs md:text-sm">
    <div className="text-primary whitespace-nowrap">
      $ cat ~/.certifications.json | jq .
    </div>
    
    <div className="text-muted-foreground pl-2 md:pl-4">
      <span className="text-amber-400 font-semibold">&#123;</span>
      <div className="pl-4">
        <span className="text-blue-400">"completed"</span>: [
          <div className="pl-4 text-emerald-400">
            "Google Cybersecurity Certificate (Coursera)",
          </div>
          <div className="pl-4 text-emerald-400">
            "Ethical Hacker (Cisco)"
          </div>
        ],
        <span className="text-blue-400">"in_progress"</span>: [
          <div className="pl-4 text-yellow-400">
            "RHCSA (Red Hat Certified System Administrator)",
          </div>
          <div className="pl-4 text-yellow-400">
            "CPTS (HackTheBox Certified Penetration Testing Specialist )"
          </div>
        ]
      </div>
      <span className="text-amber-400 font-semibold">&#125;</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Skills;