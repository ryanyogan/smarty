import { LuLightbulb } from "react-icons/lu";

interface EmptyProps {
  label: string;
}

export default function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-40 w-40 flex items-center justify-center">
        <LuLightbulb size={60} className="text-black" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}
