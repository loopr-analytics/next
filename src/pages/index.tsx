/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  apiKey: string;
};

const LooprAnalytics = ({ apiKey }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const trackPage = () => {
      fetch("https://analytics-infra.vercel.app/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ path: router.asPath }),
      });
    };
    trackPage(); // Track the current page whenever it changes
  }, [router.asPath]);

  return null;
};

export default LooprAnalytics;
