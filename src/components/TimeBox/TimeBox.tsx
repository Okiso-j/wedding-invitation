import { Marck_Script } from 'next/font/google';

const marck = Marck_Script({
  subsets: ['latin'],
  weight: ['400'],
});

export default function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center text-pink-800">
      <span className={`text-[45px] leading-[1] font-bold ${marck.className}`}>{value}</span>
      <span className={`text-[25px] leading-[1] ${marck.className}`}>{label}</span>
    </div>
  );
}