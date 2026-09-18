import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "PESAT Platform - Lead Security & Co-Founder",
      description: "Direction de la sécurité pour la plateforme communautaire PESAT. Conduite d'audits intrusifs (Pentest) en production ayant permis d'identifier et corriger +20 vulnérabilités critiques. Déploiement d'une infrastructure de surveillance continue des activités et rédaction de la politique de sécurité (PSSI) de l'organisation.",
      tags: ["Pentest Prod", "PSSI & Gouvernance", "Monitoring", "Vulnerability Management", "Web Security"],
      github: "https://pesat.tn"
    },
    {
      title: "eBPF & Falco Kernel Security Pipeline",
      description: "Architecture novatrice de sécurisation CI/CD axée sur la détection d'intrusions au niveau noyau (Kernel). Conception et écriture de +50 règles Falco personnalisées pour modéliser le comportement des rootkits Linux et bloquer les menaces en temps réel lors du build.",
      tags: ["eBPF", "Falco (+65 règles)", "Linux Kernel", "Rootkit Detection", "DevSecOps", "CI/CD", "Seccomp"],
      github: "#"
    },
    {
      title: "AI-Powered APT Detection Sandbox",
      description: "Développement d'un environnement d'analyse de malwares isolé sous pfSense/VirtualBox. Implémentation d'un modèle Machine Learning Isolation Forest pour identifier les comportements anormaux et la présence d'APTs à partir des métriques système et réseau extraites.",
      tags: ["Isolation Forest", "Machine Learning", "pfSense", "APT Analysis", "Wazuh SIEM", "Python", "Threat Hunting"],
      github: "#"
    },
    {
      title: "CTF Writeups",
      description: "Rédaction et publication de rapports d'audit et de writeups détaillés retraçant la résolution de challenges CTF. Structuration des étapes d'exploitation (OWASP, Active Directory, escalade de privilèges) et recommandations de remediation pour la communauté.",
      tags: ["Rapports d'Audit", "Pentest Web", "Active Directory", "Privilege Escalation", "TryHackMe", "OWASP Top 10"],
      github: "https://github.com/Tidjene/CTF-Writeups"
    },
    {
      title: "Pipeline CI/CD DevSecOps",
      description: "Mise en place d'un pipeline CI/CD automatisé et sécurisé pour le déploiement d'une application Web basée sur l'IA (architecture RAG). Orchestration d'un cluster Kubernetes appliquant les règles strictes de sécurité (RBAC, Network Policies, gestion des secrets et scanning d'images).",
      tags: ["Kubernetes Hardening", "DevSecOps", "RAG / LLM", "CI/CD", "Docker", "Network Policies", "K8s Security"],
      github: "https://github.com/Tidjene/pipeline-configuration-file"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative bg-cyber-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">$ ls ~/projects/</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:box-glow group"
            >
              <CardHeader>
                <CardTitle className="text-primary font-mono text-xl flex items-center gap-2">
                  <span className="text-secondary">▸</span> {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Détails
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono mb-4">
            Plus de projets sur GitHub
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-mono"
            asChild
          >
            <a href="https://github.com/Tidjene" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir tous les projets
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
