import React, { useEffect, useState } from "react";

import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";


export default function Archive() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    document.title = "PCEA BETHEL RUAI | All Blogs";
  },[])
   
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage{
          asset -> {
            _id,
            url,
          },
          alt,
        },
        "name" : author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex-1 text-gray-900 dark:text-white">
      <h1 className="p-5 text-xl flex items-center justify-center dark:text-blue-900">
        All Blog Posts
      </h1>

      {stories[0] && (
        <Link to={`/blog/${stories[0].slug.current}`}>
          <section></section>
        </Link>
      )}

      <section className="  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-5 ">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className="hover:bg-slate-200 border-slate-800 rounded-lg overflow-hidden hover:bg-slate-300 dark:hover:bg-blue-900">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="md:h-64 w-full object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-sm text-blue-900 dark:text-slate-400 font-semibold">
                  By {story.name} &middot;{" "}
                  {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                <h2 className="text-xl mt-2 mb-1 text-blue-900 dark:text-slate-400 font-semibold">{story.title}</h2>
                <p className="text-sm  leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}...`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <div>
        <Link
          to={"/"}
          className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end"
        >
          <button className="bg-blue-900 my-5 py-2 px-4 border-blue-700 rounded text-slate-100 tracking-wide hover:bg-transparent hover:text-blue-900 transition-all duration-200 dark:bg-blue-900 dark:text-slate-50 dark:border-2">
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
