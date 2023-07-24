"use client";

import { Card } from "@/components/ui/card";
import { tools } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          No Brain Required
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Use the tools below to figure out life, work, boredom...
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            className="p-4 group border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            key={tool.href}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Card>
        ))}
      </div>
    </div>
  );
}
