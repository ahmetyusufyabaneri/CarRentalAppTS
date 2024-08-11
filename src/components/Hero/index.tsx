import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Feel the Freedom, Start the Journey</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          sint corporis eveniet culpa! Dolore maiores velit nemo iure similique?
        </p>
        <CustomButton title="Discover Cars" styles="mt-10" />
      </div>
      <div className="flex justify-center">
        <motion.img
          src="/hero.png"
          className="object-contain"
          initial={{ scale: 0.7, translateX: 200 }}
          animate={{ scale: 1, translateX: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Hero;
