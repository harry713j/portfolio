import { Link } from "@radix-ui/themes";

export function Footer() {
  return (
    <footer className="flex items-center justify-start">
      <p className="text-sm font-inter text-slate-600 dark:text-slate-100">
        Developed By{" "}
        <Link
          href="https://github.com/harry713j"
          target="_blank"
          size={{ initial: "2" }}
        >
          Harihara Sethi
        </Link>
      </p>
    </footer>
  );
}
