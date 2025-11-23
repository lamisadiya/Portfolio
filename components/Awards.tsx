// components/Awards.tsx
"use client";
import { motion } from "framer-motion";
import { Award, Trophy, FileText, GraduationCap } from "lucide-react";

const awards = [
  {
    title: "HackerRank SQL (Basic) Certification",
    org: "HackerRank",
    desc: "Earned certification covering simple queries, table relationships, and aggregation functions.",
    icon: <FileText className="w-8 h-8" />,
    year: "Apr 2025",
    credential: "https://www.hackerrank.com/certificates/a97ed466d388",
    badge: "/images/SQL.png",
  },
  {
    title: "Runner-up, Cloud Computing Project Showcase",
    org: "TechFest23",
    desc: "Awarded Runner-up prize for innovative cloud-based e-learning project.",
    icon: <Trophy className="w-8 h-8" />,
    year: "2023",
  },
  {
    title: "Cisco CCNA: Introduction to Networks",
    org: "Cisco",
    desc: "Completed certification in network fundamentals and configuration.",
    icon: <Award className="w-8 h-8" />,
    year: "Oct 2022",
    badge: "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
  },
  {
    title: "HackerRank Frontend Developer (React) Certification",
    org: "HackerRank",
    desc: "Successfully passed the official HackerRank React role certification test.",
    icon: <GraduationCap className="w-8 h-8" />,
    year: "Nov 2025",
    credential: "https://www.hackerrank.com/certificates/04ea2159336a",
    badge: "/images/React.png",
  },
  {
    title: "SQA Career Launchpad 2026",
    org: "Ostad",
    desc: "Completed the SQA Career Launchpad professional course.",
    icon: <Award className="w-8 h-8" />,
    year: "2025",
    badge: "/images/SQA.png",
    credential: "https://ostad.app/share/certificate/c33356-farhat-lamisa-diya",
  },
  {
    title: "Employability Skills",
    org: "Wadhwani Foundation",
    desc: "Completed a comprehensive Employability Skills program focused on essential 21st-century soft skills such as communication, teamwork, problem-solving, and workplace professionalism. Gained industry-relevant skills that support career readiness and improve overall employability.",
    icon: <FileText className="w-8 h-8" />,
    year: "NOV 2024",
    credential: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67559fcd3558ddd81eace420",
    badge: "/images/Employment.png",
  }
];

export default function Awards() {
  return (
    <motion.section
      id="awards"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications & Awards
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
                  {award.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{award.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {award.org}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {award.desc}
              </p>

              {/* BADGE IMAGE */}
              {award.badge && (
                <img
                  src={award.badge}
                  alt="badge"
                  className="w-16 h-16 mb-3 rounded-md object-contain"
                />
              )}

              {/* CREDENTIAL BUTTON */}
              {award.credential && (
                <a
                  href={award.credential}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                >
                  View Credential
                </a>
              )}

              {/* YEAR */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                  {award.year}
                </span>
              </div>

              {/* HOVER BG EFFECT */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
