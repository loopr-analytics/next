"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  apiKey: string;
};

const LooprAnalytics = ({ apiKey }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    const trackPage = () => {
      fetch("https://analytics-infra.vercel.app/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ path: pathname }),
      });
    };
    trackPage();
  }, [pathname]);

  return null;
};

export default LooprAnalytics;
