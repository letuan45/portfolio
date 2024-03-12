import About from "@/components/about/About";
import Greeting from "@/components/greeting/Greeting";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Greeting />
      <About />
      <Projects />
    </main>
  );
}
