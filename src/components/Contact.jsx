import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Xabarni nusxalab, Telegram profilini ochadi
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Salom! Men ${form.name}.\n${form.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {}
    window.open(profile.telegram, "_blank");
  };

  const input =
    "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium";

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Bog'lanish</p>
        <h3 className={styles.sectionHeadText}>Aloqa.</h3>

        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
          <a href={profile.telegram} target='_blank' rel='noreferrer'
            className='flex-1 py-4 px-6 rounded-xl bg-[#229ED9] text-white font-bold text-center hover:opacity-90'>
            Telegram · {profile.telegramUser}
          </a>
          <a href={profile.instagram} target='_blank' rel='noreferrer'
            className='flex-1 py-4 px-6 rounded-xl text-white font-bold text-center hover:opacity-90'
            style={{ background: "linear-gradient(45deg,#f09433,#dc2743,#bc1888)" }}>
            Instagram · {profile.instagramUser}
          </a>
          <a href={profile.github} target='_blank' rel='noreferrer'
            className='flex-1 py-4 px-6 rounded-xl bg-[#24292f] border border-white/20 text-white font-bold text-center hover:opacity-90'>
            GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ismingiz</span>
            <input type='text' name='name' required value={form.name}
              onChange={handleChange} placeholder='Ismingiz nima?' className={input} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Xabaringiz</span>
            <textarea rows={6} name='message' required value={form.message}
              onChange={handleChange} placeholder='Nima demoqchisiz?' className={input} />
          </label>
          <button type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            Telegram orqali yuborish
          </button>
          {copied && (
            <p className='text-secondary text-[14px]'>
              Xabar nusxalandi — Telegram'da joylashtiring (Ctrl+V) va yuboring.
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
