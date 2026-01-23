interface Args {
  title: string;
  description?: string;
  position?: "left" | "center" | "right";
}

const SectionHeader = ({ title, description, position }: Args) => {
  return (
    <div
      className={`space-y-4 ${position === "center" ? "text-center" : position === "right" ? "text-right" : "text-left"}`}
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      {description && <p className="text-[#555555] text-sm">{description}</p>}
    </div>
  );
};

export default SectionHeader;
