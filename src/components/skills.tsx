"use client";
import { skills } from "@/utils/constants";
import { useMemo } from "react";
import { Badge, Tooltip } from "@radix-ui/themes";
import { BackgroundHeader } from "./ui/headings";

export function Skills() {
  const cachedSkills = useMemo(() => skills, []);
  return (
    <div className="flex flex-col items-start gap-3 md:gap-4 ">
      <BackgroundHeader>Skills</BackgroundHeader>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {cachedSkills.map((skill) => (
          <Tooltip key={`${skill}`} content={skill}>
            <Badge
              size={{ initial: "2", md: "3" }}
              variant="solid"
              color="gray"
              style={{
                cursor: "pointer",
              }}
            >
              {skill}
            </Badge>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
