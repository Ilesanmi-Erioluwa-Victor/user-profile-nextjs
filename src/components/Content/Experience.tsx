import React from "react";
import Link from "next/link";

const Experience = (): JSX.Element => {
  return (
    <section>
      <div>
        <h2>Experience</h2>
        <p>
          I specialized in UX/UI design, brand strategy, and Web flow
          Development.
        </p>
        <hr className="bg-orange-600 w-full h-1" />
        <div>
          <h2>About me</h2>
          <p>
            I&apos;m a Product Designer based in mediborne, Australia, I
            specialized in UX/UI design, brand strategy, and Web flow
            Development. .I&apos;m always striving to grow and learn something
            new and i don`&apos;`t take myself too seriously.
          </p>
          <p>
            My work has been featured in Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, sequi hic sit ipsam doloribus totam
            pariatur accusamus unde illo eum.
          </p>
          
          <div>
            <Link href={"#"}>Read more</Link>
          </div>
        </div>
      </div>
 
      {/* Skills */}
      <div>
        <h2>Skills</h2>
      </div>
    </section>
  );
};

export default Experience;
