"use client";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import ActionButton from "./actionButton";
import { Meteors } from "./ui/meteors";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae natus quibusdam repellendus delectus id quia quam eius, quis sed qui rem, reiciendis dolore omnis nulla necessitatibus distinctio voluptatem exercitationem!`;

interface PopupProps {
  isModalOpen: boolean;
  toggleIsModalOpen: () => void;
  autoOpenTime: number;
}

function Popup({ isModalOpen, toggleIsModalOpen, autoOpenTime }: PopupProps) {
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // If the modal hasn't opened and the delay has passed, open it
    const timeoutId = setTimeout(() => {
      if (!hasOpened) {
        toggleIsModalOpen();
        setHasOpened(true);
      }
    }, autoOpenTime);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [autoOpenTime, hasOpened, toggleIsModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <Modal title="Popup" handleDismiss={toggleIsModalOpen}>
          <div className="h-max w-fit z-100">
            <div className=" h-3/4 md:h-1/2 w-100  relative max-w-sm">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="ContainerModal relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start ">
                <h3 className="TitleModal text-white text-3xl">titre</h3>
                <div className=" inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className=" inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className=" inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className=" inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <TextGenerateEffect className="text-xl" words={words} />;
                <div className="FooterModal flex flex-row items-center space-x-8 rtl:space-x-reverse justify-around">
                  <ActionButton
                    label={"Okay"}
                    gradientColor={
                      "from-transparent via-indigo-500 to-transparent"
                    }
                    onClick={() => {}}
                  />
                  <ActionButton
                    label={"Cancel"}
                    gradientColor={
                      "from-transparent via-sky-500 to-transparent"
                    }
                    onClick={toggleIsModalOpen}
                  />
                </div>
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
export default Popup;
