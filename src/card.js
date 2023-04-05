"use strict";
import React from "react";

const Card = (props) => {
  const { name, email, id, search } = props;
  const nameIndex = name.toLowerCase().indexOf(search.toLowerCase());
  const emailIndex = email.toLowerCase().indexOf(search.toLowerCase());

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div className="tc">
        <h2>
          {nameIndex >= 0 ? (
            <>
              {name.slice(0, nameIndex)}
              <span className="red fw9">
                {name.slice(nameIndex, nameIndex + search.length)}
              </span>
              {name.slice(nameIndex + search.length)}
            </>
          ) : (
            name
          )}
        </h2>
        <p>
          {emailIndex >= 0 ? (
            <>
              {email.slice(0, emailIndex)}
              <span className="red fw9">
                {email.slice(emailIndex, emailIndex + search.length)}
              </span>
              {email.slice(emailIndex + search.length)}
            </>
          ) : (
            email
          )}
        </p>
      </div>
    </div>
  );
};
export { Card };
