"use client";

import type { ReactNode } from "react";
import { profile } from "@/data/portfolio";
import { useToast } from "./ToastProvider";

export default function CopyEmailButton({
  className = "btn btn-ghost",
  children = "Copy my email",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const toast = useToast();

  const copy = async () => {
    const fallback = () => {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand("copy");
        toast("Email copied");
      } catch {
        toast(`Copy failed. The email is ${profile.email}`);
      }
      document.body.removeChild(field);
    };

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(profile.email);
        toast("Email copied");
      } catch {
        fallback();
      }
    } else {
      fallback();
    }
  };

  return (
    <button className={className} type="button" onClick={copy}>
      {children}
    </button>
  );
}
