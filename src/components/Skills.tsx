import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Systèmes d'exploitation",
      skills: ["Kali Linux", "Parrot OS", "Ubuntu", "Arch Linux", "Debian", "Windows Server"]
    },
    {
      title: "Outils de Pentesting",
      skills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Aircrack-ng", "John the Ripper", "sqlmap", "Hydra"]
    },
    {
      title: "Langages & Scripting",
      skills: ["Python", "Bash", "PowerShell"]
    },
    {
      title: "Sécurité Réseau",
      skills: ["TCP/IP", "VPN", "IDS/IPS", "Firewalls", "SIEM", "Packet Analysis"]
    },
    {
      title: "Web Security",
      skills: ["OWASP Top 10", "XSS", "SQL Injection", "CSRF", "API Security", "JWT"]
    },
    {
      title: "Outils & Frameworks",
      skills: ["Docker", "Git", "Splunk", "ELK Stack", "Wazuh", "Snort", "Suricata"]
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
          <div className="font-mono space-y-2 text-xs md:text-sm">
            {/* Remplacez YOUR_USER_ID par votre ID utilisateur TryHackMe */}
            Fetching TryHackMe ranking...
            <br />
            <br />
              <iframe 
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1729983"
               
                title="TryHackMe Ranking"
                loading="lazy"
              />
          </div>
        </div>

        {/* Terminal-like experience section */}
        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
          <div className="font-mono space-y-2 text-xs md:text-sm">
            <div className="text-primary mt-4 whitespace-nowrap">$ echo $CERTIFICATIONS</div>
            <div className="text-muted-foreground pl-2 md:pl-4 break-words">
              <div> Google Cybersecurity Certificate - Coursera</div>
              <div> Ethical Hacker - Cisco</div>
              <div>En cours de préparation : HCIA, RHCSA, CyberOps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;