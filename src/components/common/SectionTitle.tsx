const SectionTitle = ({ main, sub }: { main: string; sub: string }) => {
  return (
    <h1 className="md:text-[46px] text-3xl md:text-start text-center font-medium text-secondary">
      <span className="font-bold border-b-4 border-primary">{main}</span> {sub}
    </h1>
  );
};

export default SectionTitle;
