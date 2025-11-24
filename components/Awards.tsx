// components/Awards.tsx
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award, GraduationCap, CheckCircle2 } from "lucide-react";

const awards = [
  {
    title: "Frontend Developer (React) Certification",
    org: "HackerRank",
    year: "Nov 2025",
    desc: "Officially certified in React best practices, hooks, state management, and performance optimization.",
    badge: "/images/React.png",
    credential: "https://www.hackerrank.com/certificates/04ea2159336a",
    skills: ["React", "JavaScript", "Frontend"],
  },
  {
    title: "SQL (Basic) Certification",
    org: "HackerRank",
    year: "Apr 2025",
    desc: "Mastered complex queries, joins, aggregations, and database design patterns.",
    badge: "/images/SQL.png",
    credential: "https://www.hackerrank.com/certificates/a97ed466d388",
    skills: ["SQL", "Database", "PostgreSQL"],
  },
  {
    title: "SQA Career Launchpad 2026",
    org: "Ostad",
    year: "2025",
    desc: "Completed intensive professional software quality assurance training program.",
    badge: "/images/SQA.png",
    credential: "https://ostad.app/share/certificate/c33356-farhat-lamisa-diya",
    skills: ["Testing", "QA", "Automation"],
  },
  {
    title: "Employability Skills Certification",
    org: "Wadhwani Foundation",
    year: "Nov 2024",
    desc: "Certified in communication, teamwork, problem-solving, and workplace professionalism.",
    badge: "/images/Employment.png",
    credential: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67559fcd3558ddd81eace420",
    skills: ["Soft Skills", "Leadership"],
  },
  {
    title: "Runner-up — Cloud Computing Project Showcase",
    org: "TechFest23",
    year: "2023",
    desc: "Awarded for innovative cloud-based e-learning platform with real-time collaboration features.",
    icon: <Trophy className="w-9 h-9 text-white-500" />,
    skills: ["Cloud", "AWS", "Full-Stack"],
  },
  {
    title: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy",
    year: "Oct 2022",
    desc: "Certified in network fundamentals, IP addressing, routing, and Cisco device configuration.",
    badge: "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    credential:"https://www.credly.com/badges/a210d127-2c03-47bb-9f00-ed196e7b3228/linked_in?t=rjuq4o",
    skills: ["Networking", "Cisco", "Infrastructure"],
  },
];

export default function Awards() {
  return (
    <motion.section
      id="certifications"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Verified skills and recognition from top platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Badge or Icon */}
              <div className="flex justify-center mb-5">
                {award.badge ? (
                  <img
                    src={award.badge}
                    alt={award.title}
                    className="w-20 h-20 object-contain rounded-xl shadow-lg"
                  />
                ) : (
                  <div className="p-4 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl text-white shadow-lg">
                    {award.icon}
                  </div>
                )}
              </div>

              {/* Title & Org */}
              <h3 className="font-bold text-lg text-center text-gray-900 dark:text-white">
                {award.title}
              </h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 text-center font-medium mt-1">
                {award.org}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-3 line-clamp-2">
                {award.desc}
              </p>

              {/* Year */}
              <div className="text-center mt-4">
                <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                  {award.year}
                </span>
              </div>

              {/* Skill Tags */}
              {award.skills && (
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {award.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Credential Button */}
              {award.credential && (
                <div className="mt-5 text-center">
                  <a
                    href={award.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                </div>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}