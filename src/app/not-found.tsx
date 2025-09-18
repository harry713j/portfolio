import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="flex-row justify-center items-center py-0 px-16 lg:px-20 ">
      <div className="flex flex-col items-center md:gap-4 gap-3">
        <h2 className="text-2xl md:text-3xl font-fira-mono font-semibold text-slate-600 opacity-70 dark:text-slate-200 ">
          404 <span className="font-thin">|</span> Not Found
        </h2>
        <p className="text-sm sm:text-base @min-xs:text-center font-inter text-slate-600 opacity-50 dark:text-slate-200 ">
          The page you are looking for is not exists
        </p>
        <Link
          href="/"
          className="text-base font-inter text-blue-400 bg-blue-100 px-4 py-2 rounded-md transition-colors ease-in-out duration-200 hover:text-blue-600 hover:bg-blue-200 dark:bg-gray dark:text-slate-200 dark:hover:bg-gray-500 dark:hover:text-slate-100 "
        >
          Go to Home
        </Link>
      </div>
    </Container>
  );
}
