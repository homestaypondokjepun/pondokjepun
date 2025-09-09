import { useEffect } from "react";

const VideoHero = () => {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("ytplayer", {
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
    };
  }, []);

  return (
    <section className="p-5 flex justify-center" data-aos="fade-up">
      <section className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
        {/* Teks di atas video */}
        <div className="text-center p-6">
          <h1 className="teramo font-bold text-2xl md:text-3xl text-coklat_tua">
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
    </section>
  );
};

export default VideoHero;
