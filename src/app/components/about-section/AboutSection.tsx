import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto py-6 px-4">
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-white mb-8">
  About{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 font-serif">
    Me
  </span>
</h2>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4 xl:gap-16">

          <Image
            src="/images/about.webp"
            alt="About Section Image"
            width={500}
            height={500}
            className="transition-shadow duration-300 ease-in hover:shadow-lg rounded-lg"
          />
          <div className="flex-col h-full">

            <div className="w-full border-4 rounded-md px-4 py-4 border-double border-indigo-600 mb-6 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="lg:text-base text-base mb-4 block bg-gray-800 text-white p-4 rounded-md">
                I am Ghulam Fareed, a passionate front-end web developer with a
                strong foundation in TypeScript, JavaScript, HTML, CSS, and Node.js.
              </p>
            </div>

            <div className="w-full border-4 rounded-md px-4 py-4 border-double border-indigo-600 mb-6 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="lg:text-base text-base mb-4 block bg-gray-800 text-white p-4 rounded-md">
                I completed my matriculation at Kutiyana Memon Academy,
                achieving an A+ grade with an 89% score from 2020 to 2022. Later, I
                pursued intermediate in Computer Science at Sir Adamjee Institute,
                F.B Area, Karachi and acheieved an A grade with an 77% score from 2022 to 2024.
              </p>
            </div>

            <div className="w-full border-4 rounded-md px-4 py-4 border-double border-indigo-600 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="lg:text-base text-base mb-4 block bg-gray-800 text-white p-4 rounded-md">
                I am passionate about embracing new challenges and enjoy engaging in innovative projects. 
                With a strong interest in emerging technologies, I love exploring their potential and applying them creatively.
                In my free time, I enjoy playing strategic games and sharing knowledge with others, 
                finding fulfillment in motivating and helping them acquire new skills. 
                My commitment to personal and professional growth drives my enthusiasm for web development and technology, 
                inspiring me to continuously enhance my expertise and tackle exciting opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
