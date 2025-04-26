const MyTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="md:text-[32px] text-xl md:text-start text-center font-semibold text-secondary">
      {title}
    </h2>
  );
};

export default MyTitle;
