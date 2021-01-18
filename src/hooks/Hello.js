import { useEffect } from "react";

export const Hello = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmountented the Hello");
    };
  }, []);
  return <div>hello</div>;
};
