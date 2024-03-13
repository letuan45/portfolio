import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Greeting from "@/components/greeting/Greeting";
import Projects from "@/components/projects/Projects";
import WorkExperience from "@/components/work/WorkExperience";

export default function Home() {
  return (
    <main>
      <Greeting />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
    </main>
  );
}
