import "./About.css";
import { useEffect } from "react";

export default function About({ setpageClass }) {
  useEffect(() => {
    setpageClass("about");
  }, []);

  return <div></div>;
}
