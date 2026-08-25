import { Shield, Terminal, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurité Offensive",
      description: "Pentesting, exploitation de vulnérabilités, CTF challenges"
    },
    {
      icon: Terminal,
      title: "Linux & Scripting",
      description: "Administration système, automatisation, Kubernetes, Bash & Python"
    },
    {
      icon: Lock,
      title: "Sécurité Défensive",
      description: "Détection d'intrusions, durcissement de configuration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">whoami</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Titulaire d'un <span className="text-primary font-semibold">Master 2 en Cybersécurité Opérationnelle de SUP'COM Tunis</span>, 
              je suis passionné de hacking éthique et de cybersécurité.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ma curiosité pour Linux et les systèmes d'exploitation m'a conduit à approfondir 
              mes compétences en pentesting, analyse de vulnérabilités et sécurité réseau.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Toujours en quête d'apprentissage, je m'entraîne régulièrement sur des plateformes d'apprentissage 
              en ligne comme TryHackMe, RootMe et HackTheBox.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 md:p-6 box-glow overflow-x-auto">
  <div className="font-mono space-y-2 text-xs md:text-sm">
    {/* Identification / Passwd */}
    <div className="text-primary whitespace-nowrap">$ cat /etc/passwd | grep tidjene</div>
    <div className="text-muted-foreground break-all">
      tidjene:x:1000:1000:Tidjene (Cybersecurity Specialist):/home/tidjene:/bin/bash
    </div>

    {/* Groups / Roles */}
    <div className="text-primary pt-2 whitespace-nowrap">$ id</div>
    <div className="text-muted-foreground break-all">
      uid=1000(tidjene) gid=1000(tidjene)
    </div>
    <div className="text-muted-foreground break-all">
      groups=1000(tidjene),27(sudo),2026(open_to_work),404(soc_analyst),505(pentester)
    </div>

    {/* Statut Recherche D'emploi */}
    <div className="text-primary pt-2 whitespace-nowrap">$ env | grep -E "STATUS|TARGET"</div>
    <div className="text-emerald-400 font-semibold break-all">
      JOB_SEARCH_STATUS=ACTIVE_LOOKING
    </div>
    <div className="text-muted-foreground break-all">
      TARGET_ROLES="Junior SOC Analyst, Junior Pentester, DevSecOps"
    </div>   
  </div>
</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:box-glow group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;