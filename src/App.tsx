import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/Hero";
import { KeyMetrics } from "./components/sections/KeyMetrics";
import { CaseStudies } from "./components/sections/CaseStudies";
import { Writing } from "./components/sections/Writing";
import { About } from "./components/sections/About";

function App() {
  return (
    <Layout>
      <Hero />
      <KeyMetrics />
      <CaseStudies />
      <Writing />
      <About />
    </Layout>
  );
}

export default App;
