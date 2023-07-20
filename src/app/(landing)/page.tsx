import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <h1>Landing Page (Non-Authenticated)</h1>

      <Link href="/sign-in">
        <Button variant="secondary">Login</Button>
      </Link>
    </div>
  );
}
