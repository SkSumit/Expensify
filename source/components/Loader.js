import React from "react";

const Loader = () => {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6  has-text-centered">
                <h1 className="title  ">
                  Loading your
                  <span className="has-text-danger"> Savvers </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loader;
