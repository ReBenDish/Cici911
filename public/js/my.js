const photoData = [
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174142_4_13.jpg", width: 1158, height: 1158, alt: "\u7167\u7247 01" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174143_5_13.jpg", width: 1280, height: 1706, alt: "\u7167\u7247 02" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174143_6_13.jpg", width: 1280, height: 1706, alt: "\u7167\u7247 03" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174233_9_13.jpg", width: 1279, height: 1706, alt: "\u7167\u7247 04" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174318_10_13.jpg", width: 1080, height: 1432, alt: "\u7167\u7247 05" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174319_11_13.jpg", width: 884, height: 1570, alt: "\u7167\u7247 06" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174319_12_13.jpg", width: 1080, height: 1440, alt: "\u7167\u7247 07" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174330_13_13.jpg", width: 1180, height: 1180, alt: "\u7167\u7247 08" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174331_14_13.jpg", width: 886, height: 886, alt: "\u7167\u7247 09" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174332_15_13.jpg", width: 1180, height: 1180, alt: "\u7167\u7247 10" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174912_17_13.jpg", width: 2048, height: 681, alt: "\u7167\u7247 11" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174914_18_13.jpg", width: 2048, height: 677, alt: "\u7167\u7247 12" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174914_19_13.jpg", width: 680, height: 676, alt: "\u7167\u7247 13" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174915_20_13.jpg", width: 676, height: 681, alt: "\u7167\u7247 14" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174916_21_13.jpg", width: 679, height: 679, alt: "\u7167\u7247 15" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174917_22_13.jpg", width: 2048, height: 676, alt: "\u7167\u7247 16" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174917_23_13.jpg", width: 681, height: 679, alt: "\u7167\u7247 17" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174926_24_13.jpg", width: 4096, height: 1344, alt: "\u7167\u7247 18" },
  { file: "\u5fae\u4fe1\u56fe\u7247_20260315174927_25_13.jpg", width: 683, height: 679, alt: "\u7167\u7247 19" },
];

const videoData = [
  {
    file: "\u5fae\u4fe1\u89c6\u98912026-03-15_175110_124.mp4",
    width: 1280,
    height: 720,
    duration: "00:37",
    title: "\u628a\u5fc3\u52a8\u5ef6\u957f\u6210\u4f1a\u52a8\u7684\u7247\u6bb5",
    note: "\u6700\u957f\u7684\u4e00\u6bb5\u5f71\u50cf\uff0c\u653e\u5728\u4e3b\u64ad\u653e\u5668\u91cc\u4f1a\u66f4\u8212\u670d\uff0c\u4e5f\u4e0d\u4f1a\u8ba9\u6574\u6bb5\u7248\u9762\u88ab\u7ad6\u89c6\u9891\u62d6\u5f97\u592a\u957f\u3002",
  },
  {
    file: "\u5fae\u4fe1\u89c6\u98912026-03-15_175053_931.mp4",
    width: 720,
    height: 1280,
    duration: "00:06",
    title: "\u51e0\u79d2\u949f\u4e5f\u8db3\u591f\u8ba9\u4eba\u8bb0\u5f88\u4e45",
    note: "\u5f88\u77ed\uff0c\u4f46\u4e00\u773c\u5c31\u4f1a\u60f3\u6536\u85cf\u4e0b\u6765\u3002",
  },
  {
    file: "\u5fae\u4fe1\u89c6\u98912026-03-15_175158_156.mp4",
    width: 544,
    height: 960,
    duration: "00:08",
    title: "\u60f3\u5077\u5077\u53cd\u590d\u56de\u770b\u7684\u5c0f\u77ac\u95f4",
    note: "\u4e0d\u662f\u4e3a\u4e86\u70ed\u95f9\uff0c\u53ea\u662f\u56e0\u4e3a\u559c\u6b22\u3002",
  },
];

const showcaseVideoData = [
  ...videoData,
  {
    file: "\u5fae\u4fe1\u89c6\u98912026-03-15_183206_619.mp4",
    width: 720,
    height: 1280,
    duration: "00:12",
    chipLabel: "\u8865\u5145\u7247\u6bb5",
    title: "\u540e\u6765\u53c8\u60f3\u8865\u8fdb\u6765\u7684\u90a3\u4e00\u6bb5",
    note: "video \u76ee\u5f55\u91cc\u7684\u5e38\u89c4\u89c6\u9891\u8fd9\u6b21\u90fd\u5df2\u7ecf\u653e\u8fdb\u6765\u4e86\u3002",
  },
];

const finalSecretVideo = {
  file: "finalSecrete.mp4",
  chipLabel: "\u7ec8\u6781\u5f69\u86cb",
  title: "Final Secret",
  note: "\u89e6\u53d1\u7ec8\u6781\u5f69\u86cb\u5e76\u56de\u5230\u4e3b\u9875\u540e\uff0c\u624d\u4f1a\u591a\u51fa\u8fd9\u4e00\u4e2a\u53ef\u64ad\u653e\u7684\u9009\u9879\u3002",
};

const playlist = [
  {
    title: "River Flows in You",
    src: "./music/River Flows in You.mp3",
  },
  {
    title: "The true that you leave",
    src: "./music/The true that you leave.mp3",
  },
];

const petalImages = [
  "./fonts/petals/o_1.png",
  "./fonts/petals/o_2.png",
  "./fonts/petals/o_3.png",
  "./fonts/petals/o_4.png",
  "./fonts/petals/o_5.png",
  "./fonts/petals/o_6.png",
];

const finalBlessings = [
  "\u4e16\u754c\u4e0a\u7f8e\u597d\u7684\u4e1c\u897f\u5f88\u591a\uff0c\u53ef\u5f53\u6211\u770b\u89c1\u4f60\u65f6\uff0c\u5b83\u4eec\u90fd\u66f4\u50cf\u662f\u5728\u4e3a\u4f60\u94fa\u57ab\u3002",
  "\u5199\u4f60\u7684\u540d\u5b57\u8fd8\u662f\u5f88\u96be\uff0c\u56e0\u4e3a\u6bcf\u4e00\u7b14\u90fd\u50cf\u5728\u89e6\u78b0\u5fc3\u4e8b\u3002",
  "\u4f60\u7684\u773c\u775b\u5f88\u597d\u770b\uff0c\u800c\u6211\u7684\u773c\u775b\u91cc\uff0c\u4e00\u76f4\u90fd\u770b\u89c1\u4f60\u3002",
  "\u5982\u679c\u53ef\u4ee5\uff0c\u6211\u8fd8\u662f\u60f3\u505a\u90a3\u4e2a\u505c\u5728\u4f60\u8eab\u65c1\u7684\u5c0f\u5c0f\u9017\u53f7\u3002",
];

const classifyShape = (width, height) => {
  const ratio = width / height;

  if (ratio > 2.2) {
    return "panorama";
  }

  if (ratio > 1.15) {
    return "landscape";
  }

  if (ratio < 0.78) {
    return "portrait-tall";
  }

  if (ratio < 0.95) {
    return "portrait";
  }

  return "square";
};

const describeVideoShape = (video) => {
  if (video.chipLabel) {
    return video.chipLabel;
  }

  return video.width >= video.height ? "\u6a2a\u5c4f\u7247\u6bb5" : "\u7ad6\u5c4f\u7247\u6bb5";
};

const normalizeAnswer = (value) => value.replace(/\s+/g, "").trim();

const createImageCard = (photo) => {
  const shape = classifyShape(photo.width, photo.height);
  const figure = document.createElement("figure");

  figure.className = `strip-card strip-card-${shape}`;

  const image = document.createElement("img");
  image.src = `./images/cc/${photo.file}`;
  image.alt = photo.alt;
  image.loading = "lazy";

  figure.appendChild(image);
  return figure;
};

const renderMarqueeRow = (container, items) => {
  if (!container) {
    return;
  }

  const buildGroup = (ariaHidden = false) => {
    const group = document.createElement("div");
    group.className = "marquee-group";

    if (ariaHidden) {
      group.setAttribute("aria-hidden", "true");
    }

    items.forEach((photo) => {
      group.appendChild(createImageCard(photo));
    });

    return group;
  };

  const track = document.createElement("div");
  track.className = "marquee-track";
  track.appendChild(buildGroup(false));
  track.appendChild(buildGroup(true));
  container.appendChild(track);
};

const renderPhotoWall = () => {
  renderMarqueeRow(document.getElementById("marqueeRowOne"), photoData.slice(0, 10));
  renderMarqueeRow(document.getElementById("marqueeRowTwo"), photoData.slice(10));
};

const renderVideoShowcase = () => {
  const activeVideo = document.getElementById("activeVideo");
  const activeTitle = document.getElementById("activeVideoTitle");
  const activeNote = document.getElementById("activeVideoNote");
  const videoPicker = document.getElementById("videoPicker");

  if (!activeVideo || !activeTitle || !activeNote || !videoPicker) {
    return null;
  }

  const visibleVideos = [...showcaseVideoData];
  const optionButtons = [];
  let activeIndex = 0;

  const updateActiveVideo = (index) => {
    const nextIndex = (index + visibleVideos.length) % visibleVideos.length;
    const nextVideo = visibleVideos[nextIndex];
    const shouldResume = !activeVideo.paused && !activeVideo.ended;

    activeIndex = nextIndex;
    activeVideo.pause();
    activeVideo.src = `./video/${nextVideo.file}`;
    activeVideo.load();
    activeTitle.textContent = nextVideo.title;
    activeNote.textContent = nextVideo.note;

    optionButtons.forEach((button, buttonIndex) => {
      const isCurrent = buttonIndex === activeIndex;
      button.classList.toggle("is-active", isCurrent);
      button.setAttribute("aria-pressed", String(isCurrent));
    });

    if (shouldResume) {
      activeVideo.play().catch(() => {});
    }
  };

  const createOptionButton = (videoItem, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-option";
    button.setAttribute("aria-pressed", "false");

    const top = document.createElement("div");
    top.className = "video-option-top";

    const chip = document.createElement("span");
    chip.className = "video-chip";
    chip.textContent = describeVideoShape(videoItem);

    const duration = document.createElement("span");
    duration.className = "video-duration";
    duration.textContent = videoItem.duration ?? "";

    const name = document.createElement("h3");
    name.className = "video-name";
    name.textContent = videoItem.title;

    const note = document.createElement("p");
    note.className = "video-note";
    note.textContent = videoItem.note;

    top.appendChild(chip);

    if (videoItem.duration) {
      top.appendChild(duration);
    }

    button.appendChild(top);
    button.appendChild(name);
    button.appendChild(note);

    button.addEventListener("click", () => {
      updateActiveVideo(index);
    });

    optionButtons.push(button);
    videoPicker.appendChild(button);
  };

  const unlockFinalSecretVideo = () => {
    if (visibleVideos.some((videoItem) => videoItem.file === finalSecretVideo.file)) {
      return;
    }

    visibleVideos.push(finalSecretVideo);
    createOptionButton(finalSecretVideo, visibleVideos.length - 1);
  };

  visibleVideos.forEach((videoItem, index) => {
    createOptionButton(videoItem, index);
  });

  updateActiveVideo(0);

  return {
    activeVideo,
    updateActiveVideo,
    unlockFinalSecretVideo,
  };
};

const setupPetals = () => {
  const layer = document.getElementById("petalLayer");
  let intervalId = null;

  if (!layer) {
    return {
      start() {},
      stop() {},
    };
  }

  const spawnPetal = () => {
    const petal = document.createElement("span");
    const size = Math.round(18 + Math.random() * 16);
    const drift = -140 + Math.random() * 280;
    const duration = 6500 + Math.random() * 5000;
    const rotate = -540 + Math.random() * 1080;
    const opacity = 0.55 + Math.random() * 0.35;

    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.backgroundImage = `url("${petalImages[Math.floor(Math.random() * petalImages.length)]}")`;
    petal.style.setProperty("--petal-size", `${size}px`);
    petal.style.setProperty("--petal-drift", `${drift}px`);
    petal.style.setProperty("--petal-duration", `${duration}ms`);
    petal.style.setProperty("--petal-rotate", `${rotate}deg`);
    petal.style.setProperty("--petal-opacity", `${opacity}`);

    layer.appendChild(petal);
    petal.addEventListener("animationend", () => {
      petal.remove();
    });
  };

  const start = () => {
    if (intervalId !== null) {
      return;
    }

    for (let index = 0; index < 8; index += 1) {
      window.setTimeout(spawnPetal, index * 140);
    }

    intervalId = window.setInterval(spawnPetal, 260);
  };

  const stop = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }

    layer.replaceChildren();
  };

  return {
    start,
    stop,
  };
};

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
};

const setupReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const setupSecretEgg = (videoShowcase) => {
  const entry = document.querySelector(".easter-entry");
  const overlay = document.getElementById("secretOverlay");
  const screens = Array.from(document.querySelectorAll("[data-secret-stage]"));
  const closeTriggers = Array.from(document.querySelectorAll("[data-secret-close]"));
  const formOne = document.getElementById("secretFormOne");
  const formTwo = document.getElementById("secretFormTwo");
  const answerOne = document.getElementById("secretAnswerOne");
  const answerTwo = document.getElementById("secretAnswerTwo");
  const feedbackOne = document.getElementById("secretFeedbackOne");
  const feedbackTwo = document.getElementById("secretFeedbackTwo");
  const rubyFeedback = document.getElementById("rubyFeedback");
  const rubyRitual = document.getElementById("rubyRitual");
  const rubyProgressBar = document.getElementById("rubyProgressBar");
  const finalSecretBlessing = document.getElementById("finalSecretBlessing");
  const finalSecretNote = document.getElementById("finalSecretNote");
  const finalSecretLink = document.querySelector(".final-secret-link");

  if (
    !entry ||
    !overlay ||
    !formOne ||
    !formTwo ||
    !answerOne ||
    !answerTwo ||
    !feedbackOne ||
    !feedbackTwo ||
    !rubyFeedback ||
    !rubyRitual ||
    !rubyProgressBar ||
    !finalSecretBlessing ||
    !finalSecretNote ||
    !finalSecretLink
  ) {
    return;
  }

  const state = {
    activeStage: "question-one",
    finalUnlocked: false,
    holdFrame: null,
    holdStartTime: 0,
    holdCompleted: false,
  };

  const setFeedback = (element, text, kind = "error") => {
    element.textContent = text;
    element.classList.remove("is-error", "is-success");

    if (text) {
      element.classList.add(kind === "success" ? "is-success" : "is-error");
    }
  };

  const clearFeedbacks = () => {
    setFeedback(feedbackOne, "");
    setFeedback(feedbackTwo, "");
    setFeedback(rubyFeedback, "");
  };

  const showStage = (stageName) => {
    state.activeStage = stageName;

    screens.forEach((screen) => {
      const isCurrent = screen.dataset.secretStage === stageName;
      screen.hidden = !isCurrent;
      screen.classList.toggle("is-active", isCurrent);
    });
  };

  const cancelRubyHold = (shouldReset) => {
    if (state.holdFrame !== null) {
      window.cancelAnimationFrame(state.holdFrame);
      state.holdFrame = null;
    }

    rubyRitual.classList.remove("is-arming");

    if (shouldReset && !state.holdCompleted) {
      rubyProgressBar.style.width = "0%";
    }
  };

  const resetToStart = () => {
    state.activeStage = "question-one";
    state.holdCompleted = false;
    clearFeedbacks();
    answerOne.value = "";
    answerTwo.value = "";
    rubyProgressBar.style.width = "0%";
    rubyRitual.classList.remove("is-complete");
    cancelRubyHold(false);
    showStage("question-one");
  };

  const openOverlay = () => {
    overlay.hidden = false;
    document.body.classList.add("secret-open");

    if (state.finalUnlocked) {
      showStage("final");
      return;
    }

    resetToStart();
    answerOne.focus();
  };

  const closeOverlay = () => {
    overlay.hidden = true;
    document.body.classList.remove("secret-open");
    cancelRubyHold(true);

    if (state.finalUnlocked) {
      videoShowcase?.unlockFinalSecretVideo();
    }
  };

  entry.addEventListener("click", () => {
    openOverlay();
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      closeOverlay();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeOverlay();
    }
  });

  formOne.addEventListener("submit", (event) => {
    event.preventDefault();

    if (normalizeAnswer(answerOne.value) !== "\u5df4\u5398\u5c9b") {
      setFeedback(feedbackOne, "\u518d\u60f3\u60f3\u90a3\u5f20\u901a\u5f80\u70ed\u5e26\u6d77\u98ce\u7684\u673a\u7968\uff0c\u7b54\u6848\u662f\u4e09\u4e2a\u5b57\u3002");
      return;
    }

    setFeedback(feedbackOne, "\u4f60\u8fd8\u8bb0\u5f97\uff0c\u90a3\u6211\u5c31\u7ee7\u7eed\u5f80\u4e0b\u8bf4\u3002", "success");
    window.setTimeout(() => {
      showStage("question-two");
      answerTwo.focus();
    }, 360);
  });

  formTwo.addEventListener("submit", (event) => {
    event.preventDefault();

    if (normalizeAnswer(answerTwo.value) !== "\u613f\u610f") {
      setFeedback(feedbackTwo, "\u4e0d\u662f\u7b80\u5355\u7684\u201c\u613f\u610f\u201d\uff0c\u662f\u66f4\u50cf\u4e00\u6bb5\u672a\u6765\u7684\u90a3\u53e5\u8bdd\u3002");
      return;
    }

    setFeedback(feedbackTwo, "\u4f60\u5199\u4e0b\u4e86\u4ee5\u540e\uff0c\u90a3\u6211\u5c31\u5e26\u4f60\u53bb\u770b\u6700\u540e\u4e00\u53e5\u3002", "success");
    window.setTimeout(() => {
      showStage("ruby");
    }, 360);
  });

  const completeRubyRitual = () => {
    if (state.holdCompleted) {
      return;
    }

    state.holdCompleted = true;
    cancelRubyHold(false);
    rubyProgressBar.style.width = "100%";
    rubyRitual.classList.add("is-complete");
    setFeedback(rubyFeedback, "\u7ea2\u5b9d\u77f3\u5df2\u7ecf\u4eae\u8d77\u6765\u4e86\uff0c\u6700\u540e\u4e00\u53e5\u4e5f\u66ff\u4f60\u6253\u5f00\u4e86\u3002", "success");
    document.body.classList.add("site-secret-awakened");

    window.setTimeout(() => {
      state.finalUnlocked = true;
      showStage("final");
    }, 520);

    window.setTimeout(() => {
      rubyRitual.classList.remove("is-complete");
    }, 860);
  };

  const startRubyHold = () => {
    if (state.holdCompleted) {
      return;
    }

    cancelRubyHold(true);
    state.holdStartTime = performance.now();
    rubyRitual.classList.add("is-arming");
    setFeedback(rubyFeedback, "\u6309\u4f4f\u522b\u677e\u5f00\uff0c\u8ba9\u85cf\u8d77\u6765\u7684\u90a3\u53e5\u8bdd\u6162\u6162\u53d1\u5149\u3002", "success");

    const tick = (timestamp) => {
      const duration = 2800;
      const progress = Math.min((timestamp - state.holdStartTime) / duration, 1);
      rubyProgressBar.style.width = `${progress * 100}%`;

      if (progress >= 1) {
        completeRubyRitual();
        return;
      }

      state.holdFrame = window.requestAnimationFrame(tick);
    };

    state.holdFrame = window.requestAnimationFrame(tick);
  };

  rubyRitual.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    startRubyHold();
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach((eventName) => {
    rubyRitual.addEventListener(eventName, () => {
      if (!state.holdCompleted) {
        cancelRubyHold(true);
        setFeedback(rubyFeedback, "\u5dee\u4e00\u70b9\u70b9\uff0c\u518d\u6309\u7a33\u4e00\u70b9\u70b9\uff0c\u5c31\u80fd\u770b\u89c1\u6700\u540e\u4e00\u53e5\u3002");
      }
    });
  });

  finalSecretBlessing.addEventListener("click", () => {
    finalSecretNote.textContent =
      finalBlessings[Math.floor(Math.random() * finalBlessings.length)];
    document.body.classList.add("site-secret-awakened");
  });

  finalSecretLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeOverlay();
    window.scrollTo({ top: 0, behavior: "auto" });
  });
};

const setupMusicPlayer = (petalController) => {
  const audio = document.getElementById("bgm");
  const toggleButton = document.getElementById("musicToggle");
  const nextButton = document.getElementById("musicNext");
  const trackTitle = document.getElementById("trackTitle");
  const trackStatus = document.getElementById("trackStatus");
  const progressRange = document.getElementById("progressRange");
  const volumeRange = document.getElementById("volumeRange");
  const currentTime = document.getElementById("currentTime");
  const durationTime = document.getElementById("durationTime");

  if (
    !audio ||
    !toggleButton ||
    !nextButton ||
    !trackTitle ||
    !trackStatus ||
    !progressRange ||
    !volumeRange ||
    !currentTime ||
    !durationTime
  ) {
    return null;
  }

  let currentTrackIndex = 0;
  let autoplayFallbackArmed = false;

  const setStatus = (text) => {
    trackStatus.textContent = text;
  };

  const updateTrackTitle = () => {
    trackTitle.textContent = `${currentTrackIndex + 1} / ${playlist.length} · ${playlist[currentTrackIndex].title}`;
  };

  const updateToggleButton = () => {
    toggleButton.textContent = audio.paused ? "\u64ad\u653e" : "\u6682\u505c";
  };

  const pauseAllVideos = () => {
    document.querySelectorAll(".story-video").forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });
  };

  const loadTrack = (index) => {
    currentTrackIndex = (index + playlist.length) % playlist.length;
    audio.src = playlist[currentTrackIndex].src;
    audio.load();
    updateTrackTitle();
    currentTime.textContent = "00:00";
    durationTime.textContent = "00:00";
    progressRange.value = "0";
  };

  const clearAutoplayFallback = () => {
    autoplayFallbackArmed = false;
  };

  const armAutoplayFallback = (playAudio) => {
    if (autoplayFallbackArmed) {
      return;
    }

    autoplayFallbackArmed = true;

    const retry = async () => {
      if (audio.paused) {
        await playAudio("\u5df2\u7ecf\u6062\u590d\u80cc\u666f\u97f3\u4e50");
      }

      clearAutoplayFallback();
    };

    document.addEventListener("pointerdown", retry, { once: true });
    document.addEventListener("keydown", retry, { once: true });
  };

  const playAudio = async (statusWhenPlaying) => {
    try {
      pauseAllVideos();
      await audio.play();
      updateToggleButton();
      setStatus(statusWhenPlaying);
      clearAutoplayFallback();
      return true;
    } catch (error) {
      updateToggleButton();
      setStatus("\u6d4f\u89c8\u5668\u62e6\u622a\u4e86\u81ea\u52a8\u64ad\u653e\uff0c\u70b9\u4e00\u4e0b\u9875\u9762\u6216\u64ad\u653e\u6309\u94ae\u5c31\u80fd\u7ee7\u7eed");
      armAutoplayFallback(playAudio);
      return false;
    }
  };

  audio.volume = Number(volumeRange.value) / 100;
  loadTrack(0);
  setStatus("\u8fdb\u5165\u9875\u9762\u540e\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u64ad\u653e\u80cc\u666f\u97f3\u4e50");
  updateToggleButton();

  audio.addEventListener("loadedmetadata", () => {
    durationTime.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(audio.currentTime);

    if (audio.duration) {
      progressRange.value = String((audio.currentTime / audio.duration) * 100);
    }
  });

  audio.addEventListener("pause", () => {
    updateToggleButton();
    petalController.stop();

    if (audio.currentTime > 0 && audio.currentTime < (audio.duration || Infinity)) {
      setStatus("\u80cc\u666f\u97f3\u4e50\u5df2\u6682\u505c\uff0c\u82b1\u74e3\u7279\u6548\u4e5f\u5df2\u5173\u95ed");
    }
  });

  audio.addEventListener("play", () => {
    updateToggleButton();
    petalController.start();
    setStatus("\u6b63\u5728\u64ad\u653e\u80cc\u666f\u97f3\u4e50\uff0c\u82b1\u74e3\u7279\u6548\u5df2\u5f00\u542f");
  });

  audio.addEventListener("ended", async () => {
    loadTrack(currentTrackIndex + 1);
    await playAudio("\u5df2\u5207\u6362\u5230\u4e0b\u4e00\u9996\u80cc\u666f\u97f3\u4e50");
  });

  toggleButton.addEventListener("click", async () => {
    if (audio.paused) {
      await playAudio("\u6b63\u5728\u64ad\u653e\u80cc\u666f\u97f3\u4e50");
    } else {
      audio.pause();
    }
  });

  nextButton.addEventListener("click", async () => {
    const shouldKeepPlaying = !audio.paused;
    loadTrack(currentTrackIndex + 1);

    if (shouldKeepPlaying) {
      await playAudio("\u5df2\u5207\u6362\u5230\u4e0b\u4e00\u9996\u80cc\u666f\u97f3\u4e50");
    } else {
      setStatus("\u5df2\u5207\u6362\u6b4c\u66f2\uff0c\u70b9\u51fb\u64ad\u653e\u5c31\u4f1a\u91cd\u65b0\u51fa\u73b0\u82b1\u74e3");
    }
  });

  progressRange.addEventListener("input", () => {
    if (!audio.duration) {
      return;
    }

    audio.currentTime = (Number(progressRange.value) / 100) * audio.duration;
  });

  volumeRange.addEventListener("input", () => {
    audio.volume = Number(volumeRange.value) / 100;
  });

  window.setTimeout(() => {
    void playAudio("\u6b63\u5728\u64ad\u653e\u80cc\u666f\u97f3\u4e50");
  }, 300);

  return {
    audio,
    setStatus,
  };
};

const setupLetterTabs = () => {
  const tabs = Array.from(document.querySelectorAll("[data-letter-target]"));
  const panels = Array.from(document.querySelectorAll("[data-letter-panel]"));

  if (tabs.length === 0 || panels.length === 0) {
    return;
  }

  const activateTab = (target, shouldFocus = false) => {
    tabs.forEach((tab) => {
      const isCurrent = tab.dataset.letterTarget === target;
      tab.classList.toggle("is-active", isCurrent);
      tab.setAttribute("aria-selected", String(isCurrent));
      tab.tabIndex = isCurrent ? 0 : -1;

      if (isCurrent && shouldFocus) {
        tab.focus();
      }
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.letterPanel !== target;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.letterTarget);
    });

    tab.addEventListener("keydown", (event) => {
      const keyToOffset = {
        ArrowLeft: -1,
        ArrowUp: -1,
        ArrowRight: 1,
        ArrowDown: 1,
      };

      if (event.key === "Home") {
        event.preventDefault();
        activateTab(tabs[0].dataset.letterTarget, true);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        activateTab(tabs[tabs.length - 1].dataset.letterTarget, true);
        return;
      }

      if (!(event.key in keyToOffset)) {
        return;
      }

      event.preventDefault();
      const nextIndex = (index + keyToOffset[event.key] + tabs.length) % tabs.length;
      activateTab(tabs[nextIndex].dataset.letterTarget, true);
    });
  });

  const defaultTab = tabs.find((tab) => tab.classList.contains("is-active")) ?? tabs[0];
  activateTab(defaultTab.dataset.letterTarget);
};

const setupVideoMusicSync = (musicState) => {
  const activeVideo = document.getElementById("activeVideo");

  if (!musicState || !activeVideo) {
    return;
  }

  activeVideo.addEventListener("play", () => {
    if (!musicState.audio.paused) {
      musicState.audio.pause();
      musicState.setStatus("\u89c6\u9891\u5f00\u59cb\u64ad\u653e\uff0cBGM \u4e0e\u82b1\u74e3\u7279\u6548\u5df2\u81ea\u52a8\u6682\u505c");
    }
  });
};

renderPhotoWall();
const videoShowcase = renderVideoShowcase();
setupReveal();
setupLetterTabs();
setupSecretEgg(videoShowcase);
const petalController = setupPetals();
const musicState = setupMusicPlayer(petalController);
setupVideoMusicSync(musicState);
