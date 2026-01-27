interface Args {
  title: string;
  description?: string;
  position?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  description,
  position,
  className,
  titleClassName,
  descriptionClassName,
}: Args) => {
  return (
    <div
      className={`space-y-4 ${position === "center" ? "text-center" : position === "right" ? "text-right" : "text-left"} ${className}`}
    >
      <h2 className={`text-3xl font-semibold ${titleClassName}`}>{title}</h2>
      {description && (
        <p className={`text-[#555555] text-lg ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
