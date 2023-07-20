import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <h1>Dashboard Page (Authenticated)</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
