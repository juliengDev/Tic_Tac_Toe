const ResultLayout = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-blue) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">X(YOU)</p>
        <p className="text-xl">14</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-silver) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">Ties</p>
        <p className="text-xl">32</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[10px] bg-(--color-light-yellow) px-5 py-4 text-xl font-bold text-(--color-dark-navy)">
        <p className="text-[0.875rem] font-medium tracking-[0.88px]">O (CPU)</p>
        <p className="text-xl">11</p>
      </div>
    </div>
  );
};

export default ResultLayout;
