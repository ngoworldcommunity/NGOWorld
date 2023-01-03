import React from "react";
import { Helmet as ReactHelmet } from "react-helmet-async";

export const Helmet = (props) => {
  const { title, description } = props;
  return (
    <div>
      <ReactHelmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ??
            "Welcome to the homepage of Milan, a hub for Users to collaborate with NGOs, Charities and more."
          }
        />
        <link rel="canonical" href="/" />
      </ReactHelmet>
    </div>
  );
};
