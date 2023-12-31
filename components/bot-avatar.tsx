import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
	return (
		<Avatar className="h-14 w-14">
			<AvatarImage
				className="p-0"
				src="/logo1.png"
			/>
		</Avatar>
	);
};
