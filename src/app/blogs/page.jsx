"use client";

import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    console.log("client side component");
  }, []);
  return <h1>Blogs</h1>;
};

export default Blogs;
