import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "./LoadingScreen";

type RouteGuardProps = {
  children: ReactNode;
};
export default function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter();
  const [directing, setDirecting] = useState(true);
  const onDirecting = () => {
    setDirecting(false);
  };

  useEffect(() => {
    const directTingTimeout = setTimeout(onDirecting, 100);
    () => directTingTimeout;
    const handleStart = (url = "") =>
      url !== router.asPath && setDirecting(true);
    router.events.on("routeChangeStart", handleStart);
    return () => clearTimeout(directTingTimeout);
  }, [router.pathname, router.query, router.asPath]);

  return <>{directing ? <LoadingScreen /> : children}</>;
}
