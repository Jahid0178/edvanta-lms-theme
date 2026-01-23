interface Args {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: Args) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {description && <p className="text-[#555555] text-sm">{description}</p>}
    </div>
  );
};

export default SectionHeader;
