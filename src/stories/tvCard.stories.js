import React from "react";
import tvCard from "../components/tvCard";
import SampleShow from "./sampleData";

export default {
  title: "Home Page/tvCard",
  component: tvCard,
};

export const Basic = () => {
  return (
    <tvCard
      movie={SampleShow}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPosterTV = { ...SampleShow, poster_path: undefined };
    return (
      <tvCard
        movie={sampleNoPosterTV}
      />
    );
  };
  Exceptional.storyName = "exception";