const SectionTitle = ({ main, sub }: { main: string; sub: string }) => {
  return (
    <h1 className="text-[46px] font-medium text-secondary">
      <span className="font-bold border-b-4 border-primary">{main}</span> {sub}
    </h1>
  );
};

export default SectionTitle;
