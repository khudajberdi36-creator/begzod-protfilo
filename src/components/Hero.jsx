import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salom, men <span className='text-[#915EFF]'>{profile.firstName}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            3D vizuallar, zamonaviy interfeyslar <br className='sm:block hidden' />
            va veb-ilovalar yarataman
          </p>
          <div className='mt-6 flex flex-wrap gap-3 relative z-10'>
            <a href={profile.telegram} target='_blank' rel='noreferrer'
              className='py-2 px-5 rounded-full bg-[#229ED9] text-white font-semibold text-[15px] hover:opacity-90'>
              Telegram
            </a>
            <a href={profile.instagram} target='_blank' rel='noreferrer'
              className='py-2 px-5 rounded-full text-white font-semibold text-[15px] hover:opacity-90'
              style={{ background: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)" }}>
              Instagram
            </a>
            <a href={profile.github} target='_blank' rel='noreferrer'
              className='py-2 px-5 rounded-full bg-[#24292f] border border-white/20 text-white font-semibold text-[15px] hover:opacity-90'>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
