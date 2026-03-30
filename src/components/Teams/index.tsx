"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

/** Chart roster — edit here or swap for CMS data. */
export type OrgChartMember = {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
};

export type OrgChartRow = { id: string; left: OrgChartMember; right: OrgChartMember };

const CHAIRMAN: OrgChartMember = {
  id: "chairman",
  name: "Marcelino C. Cutamora, Jr.",
  role: "Chairman",
};

const VP_FINANCE: OrgChartMember = {
  id: "vp-finance",
  name: "Marry Loraine L. Catamucra",
  role: "VP – Finance",
};

const BRANCH_ROWS: OrgChartRow[] = [
  {
    id: "r1",
    left: {
      id: "ceo",
      name: "Joseph Dave D. Manatad",
      role: "Chief Executive Officer",
      imageSrc: "/images/teams/dave manatad.png",
    },
    right: { id: "amd", name: "Aljun P. Abellanosa", role: "AMD",  imageSrc: "/images/teams/aljun abellanosa.png", },
  },
  {
    id: "r2",
    left: { id: "ce-1", name: "Elpedia Cullano", role: "Civil Engineer", imageSrc: "/images/teams/elpedia cullano.png",},
    right: { id: "ce-2", name: "Mark Rolan R. Diaz", role: "Civil Engineer",  imageSrc: "/images/teams/mark rolan diaz.png",},
  },
  {
    id: "r3",
    left: { id: "counsel", name: "Ruel Pungos", role: "General Counsel",  imageSrc: "/images/teams/ruel.png",},
    right: {
      id: "mech",
      name: "Micah B. Arceño",
      role: "Professional Mechanical Engineer",

    },
  },
  {
    id: "r4",
    left: {
      id: "hr",
      name: "Maristel Garsula Toledo",
      role: "Corporate Secretary / HR Head",
      imageSrc: "/images/teams/maristel toledo.png",
    },
    right: {
      id: "pm-audit",
      name: "Cosme Sameon",
      role: "Property Manager / Internal Auditor",
      imageSrc: "/images/teams/cosme sameon.png",
    },
  },
];

function initialsFromName(name: string) {
  const parts = name.split(/[\s,.]+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

type PillTier = "top" | "branch";

const OrgNode: FC<{
  member: OrgChartMember;
  tier: PillTier;
  side: "left" | "right";
  motionIndex: number;
}> = ({ member, tier, side, motionIndex }) => {
  const showPhoto = Boolean(member.imageSrc);
  const initials = initialsFromName(member.name);
  const avatarLg =
    tier === "top"
      ? "h-16 w-16 md:h-[4.25rem] md:w-[4.25rem] border-[4px] border-orange"
      : "h-[3.25rem] w-[3.25rem] md:h-14 md:w-14 border-[3px] border-orange";

  const titleCls =
    tier === "top"
      ? "text-sm font-bold leading-tight md:text-[15px]"
      : "text-xs font-bold leading-tight md:text-sm";
  const roleCls =
    tier === "top"
      ? "mt-0.5 text-[11px] font-normal text-white/95 md:text-xs"
      : "mt-0.5 text-[10px] font-normal uppercase tracking-wide text-white/90 md:text-[11px]";

  const avatar = (
    <div
      className={`relative z-10 flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-skin via-orange/20 to-orange/10 ring-2 ring-white/90 ${avatarLg}`}
    >
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.imageSrc}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span className="text-[11px] font-bold text-midnight_text md:text-xs">{initials}</span>
      )}
    </div>
  );

  const label = (
    <div
      className={`min-w-0 bg-gradient-to-br from-orange via-orange to-dark_orange py-2.5 text-white shadow-[0_4px_18px_-4px_rgba(247,127,0,0.55)] ring-1 ring-white/25 md:py-3 ${
        side === "left"
          ? `ml-0 rounded-l-3xl rounded-r-full pl-5 pr-6 md:pl-6 md:pr-8 ${tier === "top" ? "md:pl-7" : ""}`
          : `mr-0 rounded-l-full rounded-r-3xl pl-6 pr-5 text-right md:pl-8 md:pr-6 ${tier === "top" ? "md:pr-7" : ""}`
      }`}
    >
      <p className={`${titleCls} ${side === "right" ? "text-right" : ""}`}>{member.name}</p>
      <p className={`${roleCls} ${side === "right" ? "text-right" : ""}`}>{member.role}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.35, delay: motionIndex * 0.03 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      className={`flex max-w-[min(100%,400px)] items-center ${side === "left" ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={side === "left" ? "-mr-3 md:-mr-4" : "-ml-3 md:-ml-4"}>{avatar}</div>
      {label}
    </motion.div>
  );
};

const VerticalStem: FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div
    className={`w-0.5 shrink-0 rounded-full bg-gradient-to-b from-orange via-dark_orange to-midnight_text shadow-[0_0_12px_rgba(247,127,0,0.35)] ${className}`}
    aria-hidden
  />
);

const SpineArrow: FC = () => (
  <div
    className="h-0 w-0 border-x-[8px] border-t-[11px] border-x-transparent border-t-orange drop-shadow-[0_2px_6px_rgba(247,127,0,0.4)]"
    aria-hidden
  />
);

const lineClass =
  "rounded-full bg-gradient-to-r from-orange/70 via-orange to-dark_orange/80 shadow-[0_1px_4px_rgba(247,127,0,0.35)]";

const OrganizationalChart: FC = () => {
  return (
    <section className="relative bg-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-red-black">
            Leadership
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-orange md:text-4xl">
            Organizational chart
          </h2>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-deatail_shadow)] ring-1 ring-teal/15 md:p-10 lg:p-12">
          <div className="flex flex-col items-center">
            <OrgNode member={CHAIRMAN} tier="top" side="left" motionIndex={0} />
            <VerticalStem className="h-6 md:h-8" />

            <OrgNode member={VP_FINANCE} tier="top" side="left" motionIndex={1} />
            <VerticalStem className="h-6 md:h-8" />

            <div className="relative w-full max-w-5xl pb-10">
              <div
                className="pointer-events-none absolute bottom-10 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange via-dark_orange to-teal/90 shadow-[0_0_14px_rgba(247,127,0,0.25)] -top-8 md:-top-10"
                aria-hidden
              />

              {BRANCH_ROWS.map((row, index) => (
                <div key={row.id} className="relative z-[1] md:min-h-[92px]">
                  <div className="flex flex-col items-center gap-5 py-5 md:hidden">
                    <OrgNode member={row.left} tier="branch" side="left" motionIndex={2 + index * 2} />
                    <div
                      className="h-5 w-0.5 rounded-full bg-gradient-to-b from-orange to-dark_orange"
                      aria-hidden
                    />
                    <OrgNode
                      member={row.right}
                      tier="branch"
                      side="right"
                      motionIndex={3 + index * 2}
                    />
                    {index < BRANCH_ROWS.length - 1 ? (
                      <div
                        className="h-4 w-0.5 rounded-full bg-gradient-to-b from-dark_orange to-midnight_text/40"
                        aria-hidden
                      />
                    ) : null}
                  </div>

                  <div className="hidden items-center md:flex">
                    <div className="flex w-[50%] min-w-0 items-center justify-end">
                      <div className="flex min-w-0 items-center">
                        <OrgNode
                          member={row.left}
                          tier="branch"
                          side="left"
                          motionIndex={2 + index * 2}
                        />
                        <div className={`h-0.5 min-w-6 max-w-[100px] flex-1 ${lineClass}`} aria-hidden />
                      </div>
                    </div>

                    <div className="w-0 shrink-0" aria-hidden />

                    <div className="flex w-[50%] min-w-0 items-center justify-start">
                      <div className="flex min-w-0 flex-row-reverse items-center">
                        <OrgNode
                          member={row.right}
                          tier="branch"
                          side="right"
                          motionIndex={3 + index * 2}
                        />
                        <div className={`h-0.5 min-w-6 max-w-[100px] flex-1 ${lineClass}`} aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 flex -translate-x-1/2 flex-col items-center">
                <div
                  className="h-7 w-0.5 rounded-b-full bg-gradient-to-b from-orange to-dark_orange"
                  aria-hidden
                />
                <SpineArrow />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalChart;
