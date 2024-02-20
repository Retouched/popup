"use client";
import useToggle from "@/components/use-toggle";

import Popup from "@/components/popup";

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

export default function Home() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Popup
        isModalOpen={isModalOpen}
        toggleIsModalOpen={toggleIsModalOpen}
        autoOpenTime={2000}
      />
    </main>
  );
}
