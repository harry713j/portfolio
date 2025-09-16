"use client";
import { BackgroundHeader } from "./ui/headings";
import { Input } from "./ui/input";
import { PersonIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { TextArea } from "./ui/textarea";
import { Button } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";
import { Spinner } from "@radix-ui/themes";
import { Callout } from "./ui/callout";

export function Contact() {
  const [mailPayload, setMailPayload] = useState<MailPayloadType>({
    name: "",
    email: "",
    message: "",
  });

  const [calloutStatus, setCalloutStatus] = useState<
    "idle" | "success" | "error" | "info"
  >("idle");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (calloutStatus && calloutStatus !== "idle") {
      const timeId = setTimeout(() => {
        setCalloutStatus("idle");
      }, 2000);

      return () => clearTimeout(timeId);
    }
  }, [calloutStatus]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!mailPayload.name || !mailPayload.email || !mailPayload.message) {
      setCalloutStatus("info");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(mailPayload),
      });

      if (response.ok) {
        setCalloutStatus("success");
        setMailPayload({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setCalloutStatus("error");
      }
    } catch (error) {
      console.log("Error: ", error);
      setCalloutStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <BackgroundHeader>Get In Touch</BackgroundHeader>
      <div className="flex w-full flex-col items-start gap-4">
        <p className="text-lg font-medium font-inter text-slate-600 dark:text-slate-200">
          Write an email to me.
        </p>
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-3 px-10 py-6 bg-[#F7F9FF] dark:bg-neutral-800 rounded-md "
        >
          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-base font-inter font-medium text-slate-600 dark:text-slate-200">
              Your Name
            </label>
            <Input
              value={mailPayload.name}
              onChange={(e) =>
                setMailPayload((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full"
              placeholder="Luke Skywalker"
              icon={<PersonIcon />}
              disabled={isLoading}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-base font-inter font-medium text-slate-600 dark:text-slate-200">
              Your Email
            </label>
            <Input
              value={mailPayload.email}
              onChange={(e) =>
                setMailPayload((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full"
              placeholder="lukeskywalker@jedi.com"
              icon={<EnvelopeClosedIcon />}
              disabled={isLoading}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-1">
            <label className="text-base font-inter font-medium text-slate-600 dark:text-slate-200">
              Your Message
            </label>
            <TextArea
              value={mailPayload.message}
              onChange={(e) =>
                setMailPayload((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full"
              placeholder="May the force be with you"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center mt-2"
            size={{ initial: "3" }}
            style={{ cursor: "pointer" }}
            highContrast
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-1">
                <Spinner loading={isLoading} />
                Please Wait
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
      <div className="w-full flex justify-center items-center">
        {calloutStatus === "info" && (
          <Callout
            icon={<InfoCircledIcon />}
            color="blue"
            content="Please fill out all the fields!"
          />
        )}
        {calloutStatus === "error" && (
          <Callout
            icon={<ExclamationTriangleIcon />}
            color="red"
            content="Failed to send the Mail!"
          />
        )}
        {calloutStatus === "success" && (
          <Callout
            icon={<CheckCircledIcon />}
            color="green"
            content="Mail send successfully!"
          />
        )}
      </div>
    </div>
  );
}
