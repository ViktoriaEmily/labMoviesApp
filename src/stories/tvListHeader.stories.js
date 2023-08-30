import React from "react";
import tvListHeader from "../components/headerTvList";

export default {
  title: "Home Page/Header",
  component: tvListHeader,
};

export const Basic = () => <tvListHeader title={'Tv Shows'} />;

Basic.storyName = "Default";