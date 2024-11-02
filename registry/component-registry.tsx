import dynamic from "next/dynamic";

export const componentRegistry: { [key: string]: any } = {
  "dynamic-zone.hero": dynamic(
    () => import("@/components/hero").then((mod) => mod.default),
    {
      ssr: false,
    }
  ),
};
