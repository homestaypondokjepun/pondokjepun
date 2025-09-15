"use client";
import { motion } from "motion/react";
const ReviewUser = () => {
  return (
    <section className="p-5">
      <section className="w-full max-w-5xl mx-auto ">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="text-center p-5"
        >
          <h2 className="teramo font-semibold text-coklat_tua text-[20px] md:text-[26px] pb-4">
            Reviews Pengunjung
          </h2>
          <hr className="m-auto w-[55%] rounded-2xl bg-coklat_tua text-coklat_tua" />
        </motion.section>
        <iframe
          className="h-[300px]"
          src="https://widgets.sociablekit.com/google-reviews/iframe/25599633"
          frameBorder={0}
          width="100%"
          height="100%"
          loading="lazy"
          title="Review Customer"
        />
      </section>
    </section>
  );
};

export default ReviewUser;
