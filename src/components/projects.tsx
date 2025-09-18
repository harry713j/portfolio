import { ProjectCard } from "@/components/project-card";
import { projects } from "@/utils/constants";
import { useMemo, useState } from "react";
import { Button } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "motion/react";
import { BackgroundHeader } from "./ui/headings";

export function Projects() {
  const cachedProjects = useMemo(() => projects.toReversed(), []);
  const [noOfVisible, setNoOfVisible] = useState<number>(4);

  const onShowMore = () => {
    if (noOfVisible === cachedProjects.length) {
      setNoOfVisible(4);
    } else if (cachedProjects.length - noOfVisible < 4) {
      setNoOfVisible((prev) => prev + cachedProjects.length - noOfVisible);
    } else {
      setNoOfVisible((prev) => prev + 4);
    }
  };

  return (
    <div className="flex flex-col min-[320px]:gap-3 sm:gap-4">
      <BackgroundHeader>Works</BackgroundHeader>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 min-[1100px]:grid-cols-2 gap-3 sm:gap-4"
      >
        <AnimatePresence>
          {cachedProjects.slice(0, noOfVisible).map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ProjectCard className="flex flex-col gap-4" project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {cachedProjects.length > 4 && (
        <div className="">
          <Button
            size={{ initial: "1", md: "2" }}
            color="gray"
            radius="medium"
            variant="soft"
            style={{ cursor: "pointer" }}
            onClick={onShowMore}
            highContrast
          >
            {noOfVisible === cachedProjects.length ? (
              <span className="flex items-center gap-1">
                Show Less <ChevronUpIcon />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                Show More <ChevronDownIcon />
              </span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
