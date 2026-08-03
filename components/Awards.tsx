"use client";
import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import SheetHeading from "@/components/SheetHeading";

const awards = [
  {
    title: "Frontend Developer (React) Certification",
    org: "HackerRank",
    year: "Nov 2025",
    desc: "React best practices, hooks, state management, and performance optimization.",
    badge: "/images/React.png",
    credential: "https://www.hackerrank.com/certificates/04ea2159336a",
    skills: ["React", "JavaScript", "Frontend"],
  },
  {
    title: "SQL (Basic) Certification",
    org: "HackerRank",
    year: "Apr 2025",
    desc: "Complex queries, joins, aggregations, and database design patterns.",
    badge: "/images/SQL.png",
    credential: "https://www.hackerrank.com/certificates/a97ed466d388",
    skills: ["SQL", "Database", "PostgreSQL"],
  },
  {
    title: "SQA Career Launchpad 2026",
    org: "Ostad",
    year: "2025",
    desc: "Intensive professional software quality assurance training program.",
    badge: "/images/SQA.png",
    credential: "https://ostad.app/share/certificate/c33356-farhat-lamisa-diya",
    skills: ["Testing", "QA", "Automation"],
  },
  {
    title: "Employability Skills Certification",
    org: "Wadhwani Foundation",
    year: "Nov 2024",
    desc: "Communication, teamwork, problem-solving, and workplace professionalism.",
    badge: "/images/Employment.png",
    credential: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67559fcd3558ddd81eace420",
    skills: ["Soft Skills", "Leadership"],
  },
  {
    title: "Runner-up — Cloud Computing Project Showcase",
    org: "TechFest23",
    year: "2023",
    desc: "Innovative cloud-based e-learning platform with real-time collaboration features.",
    icon: <Trophy className="w-6 h-6" />,
    skills: ["Cloud", "AWS", "Full-Stack"],
  },
  {
    title: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy",
    year: "Oct 2022",
    desc: "Network fundamentals, IP addressing, routing, and Cisco device configuration.",
    badge: "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    credential: "https://www.credly.com/badges/a210d127-2c03-47bb-9f00-ed196e7b3228/linked_in?t=rjuq4o",
    skills: ["Networking", "Cisco", "Infrastructure"],
  },
];

export default function Awards() {
  return (
    <section id="certifications" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <SheetHeading index="05" total="09" label="LEDGER" title="Certifications & awards" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="bg-background p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.4 }}
            >
              <div className="flex items-start justify-between gap-3">
                {award.badge ? (
                  <img src={award.badge} alt="" className="w-10 h-10 object-contain" />
                ) : (
                  <span className="text-primary">{award.icon}</span>
                )}
                <span className="font-mono text-[10px] text-muted-foreground shrink-0">{award.year}</span>
              </div>

              <div>
                <h3 className="font-medium text-sm leading-snug">{award.title}</h3>
                <p className="font-mono text-xs text-primary mt-1">{award.org}</p>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{award.desc}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {award.skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 font-mono text-[10px] border border-border text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>

              {award.credential && (
                <a
                  href={award.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline underline-offset-4"
                >
                  View credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
