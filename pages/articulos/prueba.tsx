import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import { getAllFilesMetadata } from "../../lib/mdx";

interface Posts {
  address: string;
  author: string;
  affiliation: string;
  canonical_url: string;
  category: string;
  comment: string;
  copyright: string;
  date: string;
  description: string;
  email: string;
  image: string;
  keywords: string;
  language: string;
  slug: string;
  subtitle: string;
  tags: string;
  title: string;
  web: string;
}

interface Props {
  posts: Posts[];
}

export const prueba: NextPage<Props> = (props) => {
  const [randomObjectsResult, setRandomObjectsResult] = useState<Posts[]>([]);

  useEffect(() => {
    const randomIndexes = new Set<number>();
    while (randomIndexes.size < 3) {
      randomIndexes.add(Math.floor(Math.random() * props.posts.length));
    }
    const result = Array.from(randomIndexes).map((i) => props.posts[i]);
    setRandomObjectsResult(result);
  }, []);

  return (
    <>
      <div className="relative bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
              ¿Algo más para leer? 📖
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {randomObjectsResult.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={post.image}
                    alt={post.title}
                    width={7952}
                    height={5304}
                    priority
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link href={`/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </p>
                    <Link
                      href={`/articulos/${post.slug}`}
                      className="mt-2 block"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.title}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.title} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllFilesMetadata();

  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
};

export default prueba;
