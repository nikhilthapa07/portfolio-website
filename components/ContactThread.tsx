"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import CopyEmailButton from "./CopyEmailButton";
import { useToast } from "./ToastProvider";

type Hint = { text: string; tone: "error" | "info" };

export default function ContactThread() {
  const [fromEmail, setFromEmail] = useState("");
  const [note, setNote] = useState("");
  const [hint, setHint] = useState<Hint>({ text: "", tone: "error" });
  const toast = useToast();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = fromEmail.trim();
    const message = note.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setHint({
        text: "Add a valid email so Nikhil can reply.",
        tone: "error",
      });
      return;
    }

    if (!message) {
      setHint({ text: "Write a note first, then send it.", tone: "error" });
      return;
    }

    const subject = `Portfolio note from ${email}`;
    const body = `${message}\n\n— ${email}`;
    const link = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setHint({ text: "Opening your email app…", tone: "info" });
    toast("Opening your email app");
    window.location.href = link;
  };

  return (
    <div className="thread">
      <span className="pin-comment" aria-hidden="true">
        N
      </span>
      <div className="msg">
        <span className="av av-s" aria-hidden="true">
          N
        </span>
        <div>
          <b>Nikhil</b>
          <time>pinned</time>
          <p>Hi! Tell me what you&apos;re building, or just say hello.</p>
        </div>
      </div>

      <form className="composer" onSubmit={submit} noValidate>
        <label htmlFor="from-email">Your email</label>
        <input
          id="from-email"
          className="cinput"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={fromEmail}
          onChange={(event) => {
            setFromEmail(event.target.value);
            if (event.target.value.trim()) setHint({ text: "", tone: "error" });
          }}
        />
        <label htmlFor="note">Your note</label>
        <textarea
          id="note"
          placeholder="Hey Nikhil, I'm working on…"
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
            if (event.target.value.trim()) setHint({ text: "", tone: "error" });
          }}
        />
        <div className="composer-actions">
          <CopyEmailButton className="btn btn-ghost">
            Copy email
          </CopyEmailButton>
          <button className="btn btn-ink" type="submit">
            Send as email
          </button>
        </div>
      </form>

      <p
        className="hint"
        id="hint"
        aria-live="polite"
        style={{ color: hint.tone === "error" ? "#B3245F" : "#5B4A70" }}
      >
        {hint.text}
      </p>
    </div>
  );
}
