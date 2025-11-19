import type { Icon as SanityIcon } from "../utils/sanity";

export function Icon({ icon }: { icon: SanityIcon }) {
  const valid = icon?.metadata && typeof icon.metadata.inlineSvg === "string";
  return (
    <div>
      {valid && (
        <img
          src={`data:image/svg+xml,${icon.metadata.inlineSvg}`}
          alt={icon.icon}
        />
      )}
    </div>
  );
}
