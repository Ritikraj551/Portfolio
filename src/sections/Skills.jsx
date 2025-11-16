import skills from "../data/skills.json";
import CardSwap, { Card } from "../components/ui/CardSwap";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-10 px-10 md:px-20 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col max-w-2xl text-left mb-55">
          <h2 className="gap-2 justify-center items-center mb-8 text-primary font-anime font-semibold text-3xl">
            <span className="text-primary-light">My</span> Skills
          </h2>
          {/* For desktop screens */}
          <p className="hidden md:block font-body text-lg leading-relaxed text-primary-light">
            As a front-end developer, I specialize in creating interactive and
            visually striking web experiences that are not only fast but also
            seamless and intuitive. With a strong emphasis on clean,
            maintainable code and smooth user interfaces, I aim to deliver
            designs that are both functional and aesthetically compelling.
            Whether it's ensuring a responsive layout, optimizing performance,
            or crafting animations that bring the interface to life, I focus on
            every detail to create engaging, user-centered digital experiences
            that stand out.
          </p>
          {/* For mobile screens */}
          <p className="md:hidden font-body text-lg leading-relaxed text-primary-light">
            As a Frontend Developer, I specialize in creating clean UI, fast
            performance, and seamless user experiences.
          </p>
        </div>
        <div className="h-140 mr-20 lg:mr-0" style={{ position: "relative" }}>
          <CardSwap
            cardDistance={70}
            verticalDistance={50}
            delay={5000}
            pauseOnHover={true}
          >
            <Card className="bg-[url(/assets/images/sanemi/sanemi1.jpg)] bg-cover border-none">
              <h3 className="text-sm lg:text-xl text-primary-light text-shadow-lg text-shadow-primary-dark font-semibold font-anime bg-black/70 rounded-t-xl p-2">
                Languages & Frameworks
              </h3>
              <div className="grid grid-cols-2 mx-auto gap-8 p-8">
                {skills.languages_frameworks.map((item, index) => (
                  <div
                    key={index}
                    className="text-xs xl:text-lg font-anime text-primary shadow-md  shadow-primary-light rounded-br-4xl bg-black/80 p-2"
                  >
                    {" "}
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="bg-[url(/assets/images/sanemi/sanemi2.jpg)] bg-cover border-none">
              <h3 className="text-sm lg:text-xl text-primary-light text-shadow-lg text-shadow-primary-dark font-semibold font-anime bg-black/70 rounded-t-xl p-2">
                Tools & Libraries
              </h3>
              <div className="grid grid-cols-2 mx-auto gap-8 p-8">
                {skills.tools_libraries.map((item, index) => (
                  <div
                    key={index}
                    className="text-xs xl:text-lg font-anime text-primary shadow-md  shadow-primary-light rounded-br-4xl bg-black/80 p-2"
                  >
                    {" "}
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="bg-[url(/assets/images/sanemi/sanemi3.jpg)] bg-cover border-none">
              <h3 className="text-sm lg:text-xl text-primary-light text-shadow-lg text-shadow-primary-dark font-semibold font-anime bg-black/70 rounded-t-xl p-2">
                Concepts
              </h3>
              <div className="grid grid-cols-2 mx-auto gap-8 p-8">
                {skills.concepts.map((item, index) => (
                  <div
                    key={index}
                    className="text-xs xl:text-lg font-anime text-primary shadow-md  shadow-primary-light rounded-br-4xl bg-black/80 p-2"
                  >
                    {" "}
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="bg-[url(/assets/images/sanemi/sanemi4.jpg)] bg-cover border-none">
              <h3 className="text-sm lg:text-xl text-primary-light text-shadow-lg text-shadow-primary-dark font-semibold font-anime bg-black/70 rounded-t-xl p-2">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 mx-auto gap-8 p-8">
                {skills.soft_skills.map((item, index) => (
                  <div
                    key={index}
                    className="text-xs xl:text-lg font-anime text-primary shadow-md  shadow-primary-light rounded-br-4xl bg-black/80 p-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Skills;
