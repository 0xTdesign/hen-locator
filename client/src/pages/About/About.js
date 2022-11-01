import "./About.css";
import { useEffect } from "react";

export default function About({ setpageClass }) {
  useEffect(() => {
    setpageClass("about");
  }, []);

  return <section className="about"></section>;
}
