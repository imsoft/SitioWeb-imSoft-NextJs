import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  PresentationChartBarIcon,
  CodeBracketIcon,
  PlayIcon,
  CodeBracketSquareIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  RectangleStackIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { IHeader } from "../../../interfaces";
import Image from "next/image";

const linkWhatsappGeneral = process.env.NEXT_PUBLIC_LINK_WHATSAPP_GENERAL;

const services: IHeader[] = [
  {
    name: "Consultoria de sitio web 🤓",
    description:
      "Un sitio web o tienda en línea siempre cuenta con áreas de oportunidad, nosotros las ubicaremos, analizaremos y las mejoraremos para que así puedas generar mayores ganancias en tu empresa.",
    href: "/servicios/consultoria",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Sitio Web 👨‍💻",
    description:
      "Esta opción es excelente para cualquier emprendedor o empresa que quiera tener presencia en la internet, llegar a más clientes y generar más ingresos.",
    href: "/servicios/sitio-web",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Sitio Web Pro ⚡🧑‍💻🔥",
    description:
      "Un sitio web bien administrado es el arma más poderosa de una empresa y con la utilización de estas herramientas podrás hacer de tu empresa algo más profesional.",
    href: "/servicios/sitio-web-pro",
    icon: CodeBracketIcon,
  },
  {
    name: "E-commerce 🛍️",
    description:
      "Tu empresa tiene que modernizarse con una tienda en línea para poder llegar a clientes de todas partes, al alcance de un solo clic.",
    href: "/servicios/e-commerce",
    icon: ShoppingBagIcon,
  },
  {
    name: "Posicionamiento SEO 🔝",
    description:
      "Las personas únicamente les hace caso a los primeros enlaces de Google.",
    href: "/servicios/posicionamiento-seo",
    icon: MagnifyingGlassIcon,
  },
];

const callsToAction: IHeader[] = [
  {
    name: "¿Eres nuevo?",
    href: "https://www.youtube.com/@weareimsoft",
    icon: PlayIcon,
  },
  {
    name: "Ver todos los servicios",
    href: "/servicios",
    icon: RectangleStackIcon,
  },
  {
    name: "Contactanos",
    href: `${linkWhatsappGeneral}`,
    icon: ChatBubbleLeftRightIcon,
  },
];

const company: IHeader[] = [
  { name: "Historia de imSoft", href: "/nosotros", icon: BookOpenIcon },
  { name: "Portafolio", href: "/portafolio", icon: RectangleStackIcon },
  {
    name: "¿Tienes alguna duda?",
    href: "/contacto",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Aviso de privacidad",
    href: "/avisoDePrivacidad",
    icon: DocumentTextIcon,
  },
];

const articles: IHeader[] = [
  {
    name: "Nuestros Artículos",
    href: "/articulos",
    icon: DocumentDuplicateIcon,
  },
  // { name: "Lecturas rápidas", href: "#", icon: BoltIcon },
  // { name: "Artículo random", href: "#", icon: ArrowPathIcon },
];

const blogPosts = [
  {
    id: 1,
    name: "Mi primer post",
    href: "articulos/mi-primer-post",
    preview: "Hola, esto es mi primer post escrito en Markdown",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Sitio%20Web%20imSoft.jpg?alt=media&token=24876c4a-b461-47d4-be61-67c4cff32881",
  },
  {
    id: 2,
    name: "Mi segundo post",
    href: "articulos/mi-segundo-post",
    preview: "Hola, esto es mi segundo post escrito en Markdown",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Nosotros%20imSoft.jpg?alt=media&token=ac7d54a0-7048-4856-9230-b3a8ded8b04f",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const [isShowingServices, setIsShowingServices] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  return (
    <Popover className="relative bg-white">
      <div
        className="pointer-events-none absolute inset-0 z-30 shadow"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <Link href="/" className="flex">
              <span className="sr-only">imSoft</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FimSoft_Transparente_Azul.png?alt=media&token=0a5bf3d6-641b-4d5f-8f17-45e5dab67995"
                alt=""
                height={100}
                width={100}
              />
            </Link>
          </div>
          <div className="flex-1" />
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Abrir Menu imSoft</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link
                href="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Inicio
              </Link>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      )}
                      onMouseEnter={() => setIsShowingServices(true)}
                      onMouseLeave={() => setIsShowingServices(false)}
                    >
                      <span>Servicios</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                      show={isShowingServices}
                    >
                      <Popover.Panel
                        onMouseEnter={() => setIsShowingServices(true)}
                        onMouseLeave={() => setIsShowingServices(false)}
                        className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block"
                      >
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {services.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                              onClick={() => setIsShowingServices(false)}
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                    <item.icon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-xl font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-primary-600 lg:mt-4">
                                    Conoce más
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50">
                          <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  href={item.href}
                                  target="_blank"
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                  onClick={() => setIsShowingServices(false)}
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                href="nosotros"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Conócenos
              </Link>
              <Link
                href="portafolio"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Portafolio
              </Link>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      )}
                      onMouseEnter={() => setIsShowingMore(true)}
                      onMouseLeave={() => setIsShowingMore(false)}
                    >
                      <span>Más</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                      show={isShowingMore}
                    >
                      <Popover.Panel
                        onMouseEnter={() => setIsShowingMore(true)}
                        onMouseLeave={() => setIsShowingMore(false)}
                        className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block"
                      >
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-white" />
                          <div className="w-1/2 bg-gray-50" />
                        </div>
                        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">
                                Empresa
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {company.map((item) => (
                                  <li
                                    key={item.name}
                                    className="flow-root"
                                    onClick={() => setIsShowingMore(false)}
                                  >
                                    <Link
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">
                                Artículos
                              </h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {articles.map((item) => (
                                  <li
                                    key={item.name}
                                    className="flow-root"
                                    onClick={() => setIsShowingMore(false)}
                                  >
                                    <Link
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">
                                Nuestros Artículos
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <Link
                                      href={post.href}
                                      className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                                    >
                                      <div className="hidden flex-shrink-0 sm:block">
                                        <Image
                                          className="h-20 w-32 rounded-md object-cover"
                                          src={post.imageUrl}
                                          alt=""
                                          height={100}
                                          width={100}
                                        />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="truncate text-base font-medium text-gray-900">
                                          {post.name}
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {post.preview}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <Link
                                href="/articulos"
                                className="text-primary-600 hover:text-primary-500"
                                onClick={() => setIsShowingMore(false)}
                              >
                                Ver los artículos
                                <span aria-hidden="true"> &rarr;</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                href="contacto"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contacto
              </Link>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FimSoft_Transparente_Azul.png?alt=media&token=0a5bf3d6-641b-4d5f-8f17-45e5dab67995"
                    alt="Your Company"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Cerrar menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <Link
                      href="/servicios"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      Ver todos los servicios
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/nosotros"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Conócenos
                </Link>
                <Link
                  href="/portafolio"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Portafolio
                </Link>
                <Link
                  href="/articulos"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Artículos
                </Link>
                <Link
                  href="/avisoDePrivacidad"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Aviso de privacidad
                </Link>
                <Link
                  href={`${linkWhatsappGeneral}`}
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  WhatsApp
                </Link>
                <Link
                  href="/contacto"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
