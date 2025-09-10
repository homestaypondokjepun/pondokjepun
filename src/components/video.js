"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const VideoHero = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Cek apakah API sudah ada
    if (!window.YT) {
      // Load YouTube API script
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    } else {
      // API sudah ada, langsung buat player
      createPlayer();
    }

    function createPlayer() {
      // Pastikan player belum dibuat
      if (!playerRef.current) {
        playerRef.current = new window.YT.Player("ytplayer", {
          videoId: "JfFG_ltRv-k",
          playerVars: {
            autoplay: 0,
            mute: 0,
            modestbranding: 1,
            rel: 0,
            controls: 1,
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                event.target.unMute();
                event.target.setVolume(100);
                event.target.setPlaybackQuality("highres");
              }
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
          },
        });
      }
    }

    // Cleanup saat unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "linear" }}
      className="p-5 flex justify-center"
    >
      <section className="w-full max-w-6xl rounded-md overflow-hidden shadow-2xl border border-gray-100">
        {/* Teks di atas video */}
        <div className="text-center p-6">
          <h1 className="nicolas font-bold text-[28px] md:text-[42px]  text-coklat_tua">
            Guest House Pondok Jepun 🌿
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-coklat_tua">
            Ada yang baru di Banyuwangi! Guest House{" "}
            <span className="font-semibold">Pondok Jepun</span> hadir di jantung
            kota dengan suasana tenang dan nyaman. Lokasi strategis, hanya 100
            meter dari Satpas Banyuwangi. Yuk, nikmati liburan seru bersama kami
            di Pondok Jepun! ✨
          </p>
        </div>

        {/* Video pakai API */}
        <div className="relative w-full aspect-video">
          <div
            id="ytplayer"
            className="absolute top-0 left-0 w-full h-full"
          ></div>
        </div>
      </section>
    </motion.section>
  );
};

export default VideoHero;
