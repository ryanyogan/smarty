import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">Yogi is thinking...</p>
    </div>
  );
}
