import { cn } from "@/lib/utils";

interface Args {
  title: string;
  highlight?: string;
  description?: string;
  position?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  highlight,
  description,
  position = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: Args) => {
  return (
    <div
      className={cn(
        "space-y-4",
        position === "center" && "text-center",
        position === "right" && "text-right",
        position === "left" && "text-left",
        className,
      )}
    >
      <h2 className={`text-3xl font-semibold ${titleClassName}`}>
        {title}{" "}
        {highlight && (
          <span className="gradient-left-to-right bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`text-[#555555] text-lg ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
