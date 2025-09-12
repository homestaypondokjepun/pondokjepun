// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "motion/react";

// import reviews from "../api/data/reviews.json"

// // helper function
// const stripHtml = (html) => {
//     if (!html) return "";
//     return html.replace(/<[^>]*>/g, ""); // hapus semua tag HTML
// };

// // helper format tanggal
// const formatDate = (dateString) => {
//     if (!dateString) return "Tanggal tidak tersedia";
//     try {
//         return new Date(dateString).toLocaleDateString("id-ID", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//         });
//     } catch {
//         return "Format tanggal tidak valid";
//     }
// };

// const ReviewUser = () => {
//     const [visibleCount, setVisibleCount] = useState(5);
//     const [expandedReviews, setExpandedReviews] = useState({});
//     const step = 5;

//     const showMore = () => {
//         setVisibleCount((prev) => Math.min(prev + step, reviews.length));
//     };

//     const showLess = () => {
//         setVisibleCount(5);
//     };

//     const toggleReviewExpand = (id) => {
//         setExpandedReviews((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     return (
//         <section className="p-5">
//             <section className="w-full max-w-5xl mx-auto">
//                 <motion.section
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "linear" }}
//                     className="text-center p-5"
//                 >
//                     <h2 className="teramo font-semibold text-coklat_tua text-[20px] md:text-[26px] pb-4">
//                         Reviews Pengunjung
//                     </h2>
//                     <hr className="m-auto w-[55%] rounded-2xl bg-coklat_tua text-coklat_tua" />
//                 </motion.section>

//                 {/* Grid col-5 */}
//                 <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
//                     {reviews.slice(0, visibleCount).map((review) => {
//                         const text = stripHtml(review.review_text);
//                         const maxLength = 80;
//                         const isLong = text.length > maxLength;
//                         const expanded = expandedReviews[review.id] || false;
//                         const displayText = expanded
//                             ? text
//                             : text.slice(0, maxLength) + (isLong ? "..." : "");

//                         return (
//                             <div
//                                 key={review.id}
//                                 className="p-4 border border-gray-200 rounded-md shadow-sm bg-white"
//                             >
//                                 {/* Header */}
//                                 <div className="flex items-center mb-3">
//                                     <Image
//                                         src={review.reviewer_photo_link}
//                                         alt={review.reviewer_name}
//                                         width={40}
//                                         height={40}
//                                         className="rounded-full mr-3"
//                                     />
//                                     <div>
//                                         <a
//                                             href={review.reviewer_link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="font-semibold text-gray-900"
//                                         >
//                                             {review.reviewer_name}
//                                         </a>
//                                         <p className="text-sm text-gray-500">
//                                             {formatDate(review.review_date_time)}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Rating */}
//                                 <div className="flex mb-2">
//                                     {Array.from({ length: 5 }).map((_, i) => (
//                                         <svg
//                                             key={i}
//                                             className={`w-4 h-4 ${i < Number(review.rating)
//                                                 ? "text-yellow-400"
//                                                 : "text-gray-300"
//                                                 }`}
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
//                                         </svg>
//                                     ))}
//                                 </div>

//                                 {/* Review Text */}
//                                 <div className="text-gray-900 text-sm">
//                                     <p>{displayText || "Tidak ada komentar."}</p>
//                                     {isLong && (
//                                         <button
//                                             onClick={() => toggleReviewExpand(review.id)}
//                                             className="text-gray-500 text-xs mt-1 hover:underline"
//                                         >
//                                             {expanded ? "Lihat lebih sedikit" : "Lihat lebih banyak"}
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Button untuk load lebih banyak review */}
//                 {reviews.length > 5 && (
//                     <div className="text-center mt-4 flex gap-2 justify-center">
//                         {visibleCount < reviews.length && (
//                             <button
//                                 onClick={showMore}
//                                 className="px-4 py-2 bg-coklat_tua text-white cursor-pointer hover:bg-coklat_muda hover:text-coklat_tua rounded-md"
//                             >
//                                 Show More
//                             </button>
//                         )}
//                         {visibleCount > 5 && (
//                             <button
//                                 onClick={showLess}
//                                 className="px-4 py-2 bg-coklat_muda text-coklat_tua rounded-md cursor-pointer hover:bg-coklat_tua hover:text-white"
//                             >
//                                 Show Less
//                             </button>
//                         )}
//                     </div>
//                 )}
//             </section>
//         </section>
//     );
// };

// export default ReviewUser;

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
          src="https://widgets.sociablekit.com/google-reviews/iframe/25597446"
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
