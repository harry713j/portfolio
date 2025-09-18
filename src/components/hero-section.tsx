import {
  DiscordLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Tooltip, IconButton } from "@radix-ui/themes";

export function HeroSection() {
  return (
    <div className="flex flex-col min-[320px]:gap-3 sm:gap-4 items-start">
      <h1 className="text-[26px] text-center md:text-left sm:text-[28px] md:text-4xl font-fira-mono font-bold text-slate-700 dark:text-slate-200 ">
        Hello there 👋, I am{" "}
        <span className="underline underline-offset-2 decoration-4 decoration-mint dark:decoration-gray">
          Hari
        </span>
        .
      </h1>
      <p className="text-base sm:text-[17px] text-pretty md:text-lg font-poppins font-normal text-slate-600 dark:text-slate-200">
        I&apos;m a fullstack developer who loves bringing ideas to life through
        code. While I enjoy working across the stack, my real passion lies in
        backend development, building APIs, handling real-time communication,
        and making applications reliable and efficient. I&apos;m constantly
        learning and experimenting to become a stronger backend engineer.
      </p>
      <div className="flex items-center gap-2">
        <a href="https://x.com/hariharasethi13" target="_blank">
          <Tooltip content="Twitter">
            <IconButton
              variant="soft"
              size={{ initial: "3", xs: "4" }}
              color="sky"
              style={{
                cursor: "pointer",
              }}
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </IconButton>
          </Tooltip>
        </a>
        <a
          href="https://discordapp.com/users/1206599856114630676"
          target="_blank"
        >
          <Tooltip content="Discord">
            <IconButton
              variant="soft"
              size={{ initial: "3", xs: "4" }}
              color="indigo"
              style={{
                cursor: "pointer",
              }}
            >
              <DiscordLogoIcon className="w-5 h-5" />
            </IconButton>
          </Tooltip>
        </a>
        <a href="https://github.com/harry713j" target="_blank">
          <Tooltip content="Github">
            <IconButton
              variant="soft"
              size={{ initial: "3", xs: "4" }}
              color="gray"
              style={{
                cursor: "pointer",
              }}
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </IconButton>
          </Tooltip>
        </a>
        <a href="mailto:hariharasethi89@gmail.com" target="_blank">
          <Tooltip content="Mail">
            <IconButton
              variant="soft"
              size={{ initial: "3", xs: "4" }}
              color="crimson"
              style={{
                cursor: "pointer",
              }}
            >
              <EnvelopeClosedIcon className="w-5 h-5" />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}
