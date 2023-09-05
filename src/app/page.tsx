import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Emmanuel Jemeni",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home</p>
    </main>
  );
}
