"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const ref = useSectionInView("Contact");

    return (
        <motion.section id = "contact" ref = { ref } className = "mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" initial = {{ opacity: 0 }} whileInView = {{ opacity: 1 }} transition = {{ duraction: 1 }} viewport = {{ once: true }}>
            <SectionHeading> Contact Me </SectionHeading>
            <p className = "text-gray-700 -mt-6 dark:text-white/80"> Please contact me directly at <a className = "underline" href = "mailto:akksharvan@gmail.com"> akksharvan@gmail.com </a> or through this form. </p>
            <form className = "mt-10 flex flex-col dark:text-black">
                <input aria-label = "email" className = "h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type = "email" required maxLength = { 500 }placeholder = "Your email" />
                <textarea aria-label = "content" required maxLength = { 500 } className = "h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder = "Your message" />
                <button className = "group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65" type = "submit"> Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            </form>
        </motion.section>
    )
}