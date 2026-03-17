const photoData = [
  { file: "微信图片_20260315174142_4_13.jpg", width: 1158, height: 1158, alt: "照片 01" },
  { file: "微信图片_20260315174143_5_13.jpg", width: 1280, height: 1706, alt: "照片 02" },
  { file: "微信图片_20260315174143_6_13.jpg", width: 1280, height: 1706, alt: "照片 03" },
  { file: "微信图片_20260315174233_9_13.jpg", width: 1279, height: 1706, alt: "照片 04" },
  { file: "微信图片_20260315174318_10_13.jpg", width: 1080, height: 1432, alt: "照片 05" },
  { file: "微信图片_20260315174319_11_13.jpg", width: 884, height: 1570, alt: "照片 06" },
  { file: "微信图片_20260315174319_12_13.jpg", width: 1080, height: 1440, alt: "照片 07" },
  { file: "微信图片_20260315174330_13_13.jpg", width: 1180, height: 1180, alt: "照片 08" },
  { file: "微信图片_20260315174331_14_13.jpg", width: 886, height: 886, alt: "照片 09" },
  { file: "微信图片_20260315174332_15_13.jpg", width: 1180, height: 1180, alt: "照片 10" },
  { file: "微信图片_20260315174912_17_13.jpg", width: 2048, height: 681, alt: "照片 11" },
  { file: "微信图片_20260315174914_18_13.jpg", width: 2048, height: 677, alt: "照片 12" },
  { file: "微信图片_20260315174914_19_13.jpg", width: 680, height: 676, alt: "照片 13" },
  { file: "微信图片_20260315174915_20_13.jpg", width: 676, height: 681, alt: "照片 14" },
  { file: "微信图片_20260315174916_21_13.jpg", width: 679, height: 679, alt: "照片 15" },
  { file: "微信图片_20260315174917_22_13.jpg", width: 2048, height: 676, alt: "照片 16" },
  { file: "微信图片_20260315174917_23_13.jpg", width: 681, height: 679, alt: "照片 17" },
  { file: "微信图片_20260315174926_24_13.jpg", width: 4096, height: 1344, alt: "照片 18" },
  { file: "微信图片_20260315174927_25_13.jpg", width: 683, height: 679, alt: "照片 19" },
];

const videoData = [
  {
    file: "微信视频2026-03-15_175110_124.mp4",
    width: 1280,
    height: 720,
    duration: "00:37",
    title: "把心动延长成会动的片段",
    note: "最长的一段影像，放在主播放器里会更舒服，也不会让整段版面被竖视频拖长。",
  },
  {
    file: "微信视频2026-03-15_175053_931.mp4",
    width: 720,
    height: 1280,
    duration: "00:06",
    title: "几秒钟也足够让人记很久",
    note: "很短，但一眼就会想收藏下来。",
  },
  {
    file: "微信视频2026-03-15_175158_156.mp4",
    width: 544,
    height: 960,
    duration: "00:08",
    title: "想悄悄反复回看的小瞬间",
    note: "不是为了热闹，只是因为喜欢。",
  },
];

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
  "世界上美好的东西很多，可当我看见你时，它们都更像是在为你铺垫。",
  "写你的名字还是很难，因为每一笔都像在触碰心事。",
  "你的眼睛很好看，而我的眼睛里，一直都看见你。",
  "如果可以，我还是想做那个停在你身旁的小小逗号。",
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

const describeVideoShape = (width, height) => (width >= height ? "横屏片段" : "竖屏片段");

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

  let activeIndex = 0;
  const optionButtons = [];

  const updateActiveVideo = (index) => {
    const nextIndex = (index + videoData.length) % videoData.length;
    const nextVideo = videoData[nextIndex];
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

  videoData.forEach((videoItem, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-option";
    button.setAttribute("aria-pressed", "false");

    const top = document.createElement("div");
    top.className = "video-option-top";

    const chip = document.createElement("span");
    chip.className = "video-chip";
    chip.textContent = describeVideoShape(videoItem.width, videoItem.height);

    const duration = document.createElement("span");
    duration.className = "video-duration";
    duration.textContent = videoItem.duration;

    const name = document.createElement("h3");
    name.className = "video-name";
    name.textContent = videoItem.title;

    const note = document.createElement("p");
    note.className = "video-note";
    note.textContent = videoItem.note;

    top.appendChild(chip);
    top.appendChild(duration);
    button.appendChild(top);
    button.appendChild(name);
    button.appendChild(note);

    button.addEventListener("click", () => {
      updateActiveVideo(index);
    });

    optionButtons.push(button);
    videoPicker.appendChild(button);
  });

  updateActiveVideo(0);

  return {
    activeVideo,
    updateActiveVideo,
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

const setupSecretEgg = () => {
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

    if (normalizeAnswer(answerOne.value) !== "巴厘岛") {
      setFeedback(feedbackOne, "再想想那张通往热带海风的机票，答案是三个字。");
      return;
    }

    setFeedback(feedbackOne, "你还记得，那我就继续往下说。", "success");
    window.setTimeout(() => {
      showStage("question-two");
      answerTwo.focus();
    }, 360);
  });

  formTwo.addEventListener("submit", (event) => {
    event.preventDefault();

    if (normalizeAnswer(answerTwo.value) !== "愿意") {
      setFeedback(feedbackTwo, "不是简单的愿意，是更像一段未来的那句话。");
      return;
    }

    setFeedback(feedbackTwo, "你写下了以后，那我就带你去看最后一句。", "success");
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
    setFeedback(rubyFeedback, "红宝石已经亮起来了，最后一句也替你打开了。", "success");
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
    setFeedback(rubyFeedback, "按住别松开，让藏起来的那句话慢慢发光。", "success");

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
        setFeedback(rubyFeedback, "差一点点，再按稳一点点，就能看见最后一句。");
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
    toggleButton.textContent = audio.paused ? "播放" : "暂停";
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
        await playAudio("已经恢复背景音乐");
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
      setStatus("浏览器拦截了自动播放，点一下页面或播放按钮就能继续");
      armAutoplayFallback(playAudio);
      return false;
    }
  };

  audio.volume = Number(volumeRange.value) / 100;
  loadTrack(0);
  setStatus("进入页面后会尝试自动播放背景音乐");
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
      setStatus("背景音乐已暂停，花瓣特效也已关闭");
    }
  });

  audio.addEventListener("play", () => {
    updateToggleButton();
    petalController.start();
    setStatus("正在播放背景音乐，花瓣特效已开启");
  });

  audio.addEventListener("ended", async () => {
    loadTrack(currentTrackIndex + 1);
    await playAudio("已切换到下一首背景音乐");
  });

  toggleButton.addEventListener("click", async () => {
    if (audio.paused) {
      await playAudio("正在播放背景音乐");
    } else {
      audio.pause();
    }
  });

  nextButton.addEventListener("click", async () => {
    const shouldKeepPlaying = !audio.paused;
    loadTrack(currentTrackIndex + 1);

    if (shouldKeepPlaying) {
      await playAudio("已切换到下一首背景音乐");
    } else {
      setStatus("已切换歌曲，点击播放就会重新出现花瓣");
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
    void playAudio("正在播放背景音乐");
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
      musicState.setStatus("视频开始播放，BGM 与花瓣特效已自动暂停");
    }
  });
};

renderPhotoWall();
renderVideoShowcase();
setupReveal();
setupLetterTabs();
setupSecretEgg();
const petalController = setupPetals();
const musicState = setupMusicPlayer(petalController);
setupVideoMusicSync(musicState);
