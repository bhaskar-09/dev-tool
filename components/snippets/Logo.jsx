import Image from "next/image";
import Link from "next/link";
import { Pacifico } from "next/font/google";
const logoFont = Pacifico({
	subsets: ["latin"],
	weight: "400",
});
import LogoImage from "@/assets/images/logo.svg";

export default function Logo(props) {
	const { href, gap } = props;
	return (
		<Link href={href} className={`flex items-center justify-center  text-2xl font-semibold   dark:text-white ${gap && "m-5"}`}>
			<Image
				width={50}
				src={LogoImage}
				className="md:mr-4 h-11"
				style={{
					height: "auto",
				}}
				alt="FlowBite Logo"
			/>
			<span className={`${logoFont.className} hidden md:block`}>Development Studio</span>
		</Link>
	);
}
