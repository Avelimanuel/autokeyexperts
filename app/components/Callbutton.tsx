"use client";

import React from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type CallButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CallButton({ children, className }: CallButtonProps) {
  const handleClick = () => {
    const phoneUrl = "tel:+254716884011";

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18362410131/DpSjCLLz1d8cEJPJ8LNE",
        value: 1.0,
        currency: "USD",
        event_callback: () => {
          window.location.href = phoneUrl;
        },
      });

      // Fallback in case Google does not respond
      setTimeout(() => {
        window.location.href = phoneUrl;
      }, 1000);
    } else {
      // If Google tag hasn't loaded yet, still make the call
      window.location.href = phoneUrl;
    }
  };

  return (
    <a
      href="tel:+254716884011"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
