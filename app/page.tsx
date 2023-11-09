import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col">
			<div className="flex flex-1  justify-center items-center">
				<h1 className="text-4xl md:text-6xl uppercase text-center">
					This story&apos;s still being{" "}
					<span className="typewriter">written</span>
				</h1>
			</div>
			<footer className="flex justify-center items-center p-5 gap-5">
				<Link href="https://github.com/Rammah-N">
					<Github />
				</Link>
				<Link href="https://linkedin.com/in/rammah-mohammed">
					<Linkedin />
				</Link>
			</footer>
		</main>
	);
}
