import React from "react";
import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      <section className="flex right-section">
        {["aa", "aa", "cc", 1, 6].map((item) => {
          return (
            <article key={item} className="card">
              <img width={280} src="/public/1.jpg" alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Paghe</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  debitis!
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow_forward"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
