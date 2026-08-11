"use client";

export function gtag_report_conversion(url?: string) {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18362410131/DpSjCLLz1d8cEJPJ8LNE",
      value: 1.0,
      currency: "USD",
      event_callback: callback,
    });
  } else if (url) {
    window.location.href = url;
  }

  return false;
}
