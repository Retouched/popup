"use client";
import React, { ReactNode, useRef, useEffect } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import VisuallyHidden from "./VisuallyHidden";

interface ModalProps {
  title: string;
  handleDismiss: any;
  children: ReactNode;
}

function Modal({ title, handleDismiss, children }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const currentlyFocusedElem = document.activeElement as HTMLElement;

    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: { code: string }) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className="fixed inset-0 flex p-4 z-100">
          <div
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={handleDismiss}
          />
          <div
            className="absolute bottom-10 left-10  rounded-3xl p-2"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              ref={closeBtnRef}
              className="absolute top-0 right-3 p-0 text-white transform -translate-y-full cursor-pointer bg-transparent border-none"
              onClick={handleDismiss}
            >
              <svg
                className=""
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9679 12.3769L18.421 7.92383C18.6324 7.71285 18.7512 7.42657 18.7515 7.12795C18.7518 6.82932 18.6334 6.54283 18.4224 6.33148C18.2114 6.12014 17.9252 6.00126 17.6265 6.00099C17.3279 6.00073 17.0414 6.11911 16.8301 6.33008L12.3769 10.7832L7.92383 6.33008C7.71248 6.11873 7.42584 6 7.12695 6C6.82807 6 6.54142 6.11873 6.33008 6.33008C6.11873 6.54142 6 6.82807 6 7.12695C6 7.42584 6.11873 7.71248 6.33008 7.92383L10.7832 12.3769L6.33008 16.8301C6.11873 17.0414 6 17.3281 6 17.6269C6 17.9258 6.11873 18.2125 6.33008 18.4238C6.54142 18.6352 6.82807 18.7539 7.12695 18.7539C7.42584 18.7539 7.71248 18.6352 7.92383 18.4238L12.3769 13.9707L16.8301 18.4238C17.0414 18.6352 17.3281 18.7539 17.6269 18.7539C17.9258 18.7539 18.2125 18.6352 18.4238 18.4238C18.6352 18.2125 18.7539 17.9258 18.7539 17.6269C18.7539 17.3281 18.6352 17.0414 18.4238 16.8301L13.9679 12.3769Z"
                  fill="white"
                />
              </svg>
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>

            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
export default Modal;
