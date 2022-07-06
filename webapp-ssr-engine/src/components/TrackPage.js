import { useEffect } from "react";

import { useRouter } from "next/router";

import { withAmplitude } from "../contexts/AmplitudeContext";

const TrackPage = ({ intent, data, trackPage }) => {
  const router = useRouter();

  useEffect(() => {
    trackPage({ intent: intent ?? router.pathname, data });
  }, [intent, data, router.pathname, trackPage]);

  return null;
};

export default withAmplitude(TrackPage);
