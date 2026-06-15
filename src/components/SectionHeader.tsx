type Props = {
  title: string;
  onSeeAll?: () => void;
};

export default function SectionHeader({
  title,
  onSeeAll,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[22px] font-bold text-[#181725]">
        {title}
      </h2>

      <button
        onClick={onSeeAll}
        className="text-sm font-semibold text-[#53B175] hover:text-[#489f66] transition-colors"
      >
        See all
      </button>
    </div>
  );
}