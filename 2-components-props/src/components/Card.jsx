import React from "react";

function Card(info) {
  //   console.log(username);
  return (
    <>
      <div className="flex justify-center">
        <figure className="bg-slate-400 w-96 rounded-xl p-8 dark:bg-slate-800 mt-10 mb-5">
          <img
            className="w-24 h-24 rounded-full mx-a"
            src="https://images.unsplash.com/photo-1706354924659-582cec69ce3b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption>
              <div>{info.username}</div>
              <div>{info.title}</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}

export default Card;
