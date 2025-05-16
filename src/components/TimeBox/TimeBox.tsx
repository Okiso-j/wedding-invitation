export default function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center text-pink-800">
      <span className="text-[24px] font-bold">{value}</span>
      <span className="text-[12px]">{label}</span>
    </div>
  );
}