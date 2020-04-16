import { useEffect, useState } from "react";

export default function useHashParams() {
  const [hashParams, setHashParams] = useState(
    extractHashParams(window.location.hash)
  );

  useEffect(() => {
    const listener = (e: HashChangeEvent) => {
      const newHashParams = extractHashParams(window.location.hash);
      if (JSON.stringify(newHashParams) !== JSON.stringify(hashParams)) {
        setHashParams(newHashParams);
      }
    };
    window.addEventListener("hashchange", listener);

    return () => {
      window.removeEventListener("hashchange", listener);
    };
  });

  return [
    hashParams,
    (params: HashParams) => {
      window.location.hash = createHash(Object.assign(hashParams, params));
    },
  ] as [HashParams, (params: HashParams) => void];
}
function extractHashParams(hash: string) {
  return hash
    .replace("#", "")
    .split("&")
    .reduce((prev, current) => {
      const [key, value] = current.split("=");
      if (key === "imageUrl") {
        prev.imageUrl = value;
      } else if (key === "saveRemoteImageUrl") {
        prev.saveRemoteImageUrl = value;
      }
      return prev;
    }, {} as HashParams);
}

function createHash(params: HashParams) {
  return (Object.keys(params) as Array<keyof HashParams>)
    .reduce((prev, current) => {
      const value = params[current];
      return value ? [...prev, `${current}=${value}`] : prev;
    }, [] as string[])
    .join("&");
}

export interface HashParams {
  saveRemoteImageUrl?: string;
  imageUrl?: string;
}
