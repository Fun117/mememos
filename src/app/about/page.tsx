import { Header } from "@/components/element/header";
import { Metadata } from "next";

export const metadata:Metadata = {
	title: 'About'
}

export default function About() {
	return (
		<>
			<Header/>
			<div className="fixed flex justify-center items-center w-full h-full">
				<h1 className="font-bold text-5xl text-center">COMING COON</h1>
			</div>
		</>
	);
}
