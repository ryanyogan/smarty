import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function BotAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/logo.png" />
    </Avatar>
  );
}
