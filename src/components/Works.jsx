import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover object-top rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
            {live_link && (
              <a
                href={live_link} target='_blank' rel='noreferrer'
                title='Saytni ochish'
                className='black-gradient px-3 h-10 rounded-full flex justify-center items-center cursor-pointer text-white text-[13px] font-semibold'
              >
                Ko'rish ↗
              </a>
            )}
            <a
              href={source_code_link} target='_blank' rel='noreferrer'
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                title="Kodni ko'rish"
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Ishlarim</p>
        <h2 className={`${styles.sectionHeadText}`}>Loyihalar.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Quyidagi loyihalarning barchasi ishlab turibdi va Vercel'da
          joylashgan. "Ko'rish" tugmasi saytni ochadi, GitHub belgisi esa
          kodini ko'rsatadi.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
