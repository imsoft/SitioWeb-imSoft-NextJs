import Link from "next/link";
import React from "react";
import { IIntroductorySection } from "../../../interfaces";

const linkYoutube = process.env.NEXT_PUBLIC_LINK_YOUTUBE;

export const IntroductorySection = ({
  title,
  description,
}: IIntroductorySection) => {
  return (
    <>
      <div className="isolate bg-white">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-32 pb-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  Ve nuestro ultimo video{" "}
                  <Link
                    href={`${linkYoutube}`}
                    className="font-semibold text-primary-600"
                    target={"_blank"}
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Ir <span aria-hidden="true">&rarr;</span>
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-500 tracking-tight sm:text-center sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                {description}
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Link
                  href="/contacto"
                  className="inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700"
                >
                  Contactanos
                </Link>
                <Link
                  href="/articulos"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Artículos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
