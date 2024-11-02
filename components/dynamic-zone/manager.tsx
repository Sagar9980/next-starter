import { componentRegistry } from "@/registry/component-registry";
import React from "react";

interface DynamicZoneComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
  locale: string;
}

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone, locale }) => {
  return (
    <div>
      {dynamicZone.map((componentData) => {
        const Component = componentRegistry[componentData.__component];
        if (!Component) {
          console.warn(`No component found for: ${componentData.__component}`);
          return null;
        }
        return (
          <Component
            key={componentData.id}
            {...componentData}
            locale={locale}
          />
        );
      })}
    </div>
  );
};

export default DynamicZoneManager;
