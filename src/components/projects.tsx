import { ProjectCard } from "@/components/project-card";
import { projects } from "@/utils/constants";
import { useMemo, useState } from "react";
import { Button } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "motion/react";

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
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-fira-mono font-bold text-slate-700 dark:text-slate-200">
        Works
      </h2>
      <div className="grid grid-cols-2 gap-4">
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
      </div>
      <div className="">
        <Button
          size={{ initial: "1" }}
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
    </div>
  );
}
