import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { flattenLessons, getLessonBySlugs, getTrackBySlug, modules } from "./data/modules";

function App() {
  const location = useLocation();

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cursor || !canUseCursor) {
      document.body.classList.remove("has-custom-cursor");
      return undefined;
    }

    document.body.classList.add("has-custom-cursor");

    const handleMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleOver = (event) => {
      if (event.target.closest("a, button, .interactive")) {
        cursor.classList.add("cursor-active");
      }
    };

    const handleOut = (event) => {
      if (event.target.closest("a, button, .interactive")) {
        cursor.classList.remove("cursor-active");
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".fade-up").forEach((element) => {
      element.classList.remove("visible");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      window.setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="cursor" id="cursor" aria-hidden="true"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks/:trackSlug" element={<TrackPage />} />
        <Route path="/tracks/:trackSlug/lessons/:lessonSlug" element={<LessonPage />} />
        <Route path="/modules/:trackSlug" element={<LegacyTrackRedirect />} />
        <Route path="/modules/:trackSlug/lessons/:lessonSlug" element={<LegacyLessonRedirect />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function isPhoneLayout() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 860px)").matches;
}

function HomePage() {
  const featuredTrack = modules[0];

  return (
    <div className="home-page">
      <HomeNav />

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-tag">Deep learning for serious minds</div>
        <h1 className="hero-title">
          Learn
          <br />
          <span className="outline hero-outline-word">
            <span className="hero-outline-fragment">every</span>
            <span className="hero-outline-fragment">thing</span>
          </span>
          <br />
          <span className="accent">deeply.</span>
        </h1>
        <p className="hero-sub">
          Structured, bite-sized lessons on the topics no one else covers well.
          From ZK proofs to category theory, go further than surface level.
        </p>
        <div className="hero-actions">
          <a href="#topics" className="btn-primary interactive">
            Explore Tracks
          </a>
          <Link to={`/tracks/${featuredTrack.slug}`} className="btn-ghost interactive">
            Open track →
          </Link>
        </div>
        <div className="hero-stats">
          <HeroStat number="40+" label="Topics" />
          <HeroStat number="500+" label="Lessons" />
          <HeroStat number="Free" label="Always" />
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          {[...modules, ...modules].map((track, index) => (
            <div className="marquee-item" key={`${track.slug}-${index}`}>
              <span className="marquee-dot">◆</span>
              {track.title}
            </div>
          ))}
        </div>
      </div>

      <section className="why-section fade-up">
        <div className="section-tag">Why HighFaucet</div>
        <div className="why-header">
          <h2 className="why-title">Built for people who actually want to know.</h2>
          <p className="why-body">
            Most learning platforms stop at the surface. HighFaucet is built for
            the ones who want to understand how things actually work, from first
            principles, with no hand-waving.
          </p>
        </div>
        <div className="why-cards">
          <WhyCard
            number="01"
            icon="🔭"
            title="Depth first"
            text="Every track is built to go deep. We do not stop at definitions. We go until you can derive it yourself."
          />
          <WhyCard
            number="02"
            icon="🗂"
            title="Structured paths"
            text="Each topic is laid out as a progression of chapters, lessons, and quizzes. You always know where you are."
            accent
          />
          <WhyCard
            number="03"
            icon="🌐"
            title="No account needed"
            text="Progress can be lightweight and direct. Open the platform and start learning immediately."
          />
        </div>
      </section>

      <section className="topics-section" id="topics">
        <div className="topics-header">
          <div>
            <div className="section-tag">Tracks</div>
            <h2 className="topics-title">
              Pick a
              <br />
              <span className="outline">rabbit hole.</span>
            </h2>
          </div>
          <a href="#footer" className="btn-ghost interactive" style={{ color: "var(--white-dim)" }}>
            View all tracks →
          </a>
        </div>
        <div className="topics-grid">
          {modules.map((track, index) => (
            <Link
              key={track.slug}
              className={`topic-card ${track.homeClass} fade-up interactive ${delayClass(index)}`}
              to={`/tracks/${track.slug}`}
            >
              <div className="topic-card-bg"></div>
              <div className="topic-lessons">{track.totalLessons} lessons</div>
              <div className="topic-pill">{track.label}</div>
              <h3>{track.title}</h3>
              <p>{track.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-tag section-tag-dark">How it works</div>
        <h2 className="how-title">Learning that does not waste your time.</h2>
        <div className="how-steps">
          <HowStep
            number="01"
            title="Pick a track"
            text="Choose any topic from the library. Each one is self-contained with a clear start-to-finish path."
          />
          <HowStep
            number="02"
            title="Work through lessons"
            text="Short, focused lessons with no fluff. Read, absorb, think. Each one builds on the last."
          />
          <HowStep
            number="03"
            title="Take the quiz"
            text="Each chapter ends with a comprehension check that pushes on real understanding."
          />
          <HowStep
            number="04"
            title="Track progress"
            text="Move through the material in a structured way with clear progress and no distractions."
          />
        </div>
      </section>

      <section className="free-section fade-up">
        <h2 className="free-title">
          <span className="outline">Completely</span>
          <br />
          <span className="yellow">free.</span>
          <br />
          <span className="outline">Forever.</span>
        </h2>
        <p className="free-sub">
          No subscriptions, no paywalls, no accounts. HighFaucet is the kind of
          learning platform that stays open.
        </p>
        <Link className="btn-primary interactive" to={`/tracks/${featuredTrack.slug}`}>
          Start Learning Now
        </Link>
      </section>

      <HomeFooter />
    </div>
  );
}

function TrackPage() {
  const { trackSlug } = useParams();
  const track = getTrackBySlug(trackSlug);
  const [openChapters, setOpenChapters] = useState(() => new Set([0]));

  useEffect(() => {
    if (!track) {
      return;
    }
    const currentChapterIndex = flattenLessons(track).findIndex(
      (item) => item.lesson.slug === track.currentLessonSlug,
    );
    const chapterIndex = flattenLessons(track)
      .slice(0, Math.max(currentChapterIndex, 0) + 1)
      .reduce((acc, item) => item.chapterIndex, 0);
    setOpenChapters(new Set([chapterIndex]));
  }, [track]);

  if (!track) {
    return <Navigate to="/" replace />;
  }

  const flatLessons = flattenLessons(track);
  const currentFlatIndex = flatLessons.findIndex(
    (item) => item.lesson.slug === track.currentLessonSlug,
  );
  const currentChapter = flatLessons[currentFlatIndex]?.chapter ?? track.chapters[0];
  const currentLesson = flatLessons[currentFlatIndex]?.lesson ?? track.chapters[0].lessons[0];
  const currentChapterNumber = flatLessons[currentFlatIndex]?.chapterIndex ?? 0;
  const ringOffset = 188 - (188 * track.progress.percent) / 100;

  const toggleChapter = (index) => {
    setOpenChapters((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`track-page theme-${track.theme}`}>
      <TrackNav track={track} />

      <div className="hero track-hero">
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-left fade-up">
            <div className="topic-pill track-topic-pill">
              <div className="topic-pill-dot"></div>
              {track.label} · {track.category}
            </div>

            <h1 className="hero-title">
              {splitTrackTitle(track.title).map((line, index) => (
                <span key={line}>
                  {index === 1 ? <span className="outline">{line}</span> : line}
                  {index < splitTrackTitle(track.title).length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>

            <p className="hero-desc">{track.description}</p>

            <div className="hero-meta-row">
              <MetaItem value={String(track.chapters.length)} label="Chapters" />
              <div className="hero-meta-sep"></div>
              <MetaItem value={String(track.totalLessons)} label="Lessons" />
              <div className="hero-meta-sep"></div>
              <MetaItem value={track.estimatedTime} label="Est. time" />
              <div className="hero-meta-sep"></div>
              <MetaItem value={track.level} label="Level" accent />
            </div>

            <div className="hero-tags">
              {track.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="progress-card fade-up fade-up-delay-1">
            <div className="pc-label">Your progress</div>

            <div className="pc-ring-wrap">
              <div className="pc-ring">
                <svg viewBox="0 0 72 72">
                  <circle className="pc-ring-bg" cx="36" cy="36" r="30" />
                  <circle
                    className="pc-ring-fill"
                    cx="36"
                    cy="36"
                    r="30"
                    style={{ strokeDashoffset: ringOffset }}
                  />
                </svg>
                <div className="pc-ring-text">{track.progress.percent}%</div>
              </div>
              <div className="pc-ring-info">
                <h4>In progress</h4>
                <p>
                  Chapter {currentChapterNumber + 1} of {track.chapters.length}
                  <br />
                  {currentLesson.title}
                </p>
              </div>
            </div>

            <div className="pc-stats">
              <PcStat value={String(track.progress.completedLessons)} label="Done" />
              <PcStat value={String(track.progress.remainingLessons)} label="Remaining" />
              <PcStat value="100%" label="Quiz score" />
              <PcStat value={track.estimatedTime} label="Total" />
            </div>

            <Link
              className="pc-continue-btn interactive"
              to={`/tracks/${track.slug}/lessons/${track.currentLessonSlug}`}
            >
              Continue lesson →
            </Link>
            <a className="pc-restart interactive" href="#curriculum">
              Browse curriculum
            </a>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="curriculum" id="curriculum">
        <div className="curriculum-header">
          <h2 className="curriculum-title">Curriculum</h2>
          <div className="curriculum-summary">
            {track.chapters.length} chapters · {track.totalLessons} lessons
          </div>
        </div>

        {track.chapters.map((chapter, chapterIndex) => {
          const isOpen = openChapters.has(chapterIndex);
          const chapterLessons = flattenLessons(track).filter(
            (item) => item.chapterIndex === chapterIndex,
          );
          const doneCount = chapterLessons.filter(
            (item) =>
              flattenLessons(track).findIndex((flat) => flat.lesson.slug === item.lesson.slug) <
              currentFlatIndex,
          ).length;
          const chapterPercent = Math.round((doneCount / chapter.lessons.length) * 100);

          return (
            <div className="chapter-block" key={chapter.title}>
              <button
                className={`chapter-head interactive ${isOpen ? "open" : ""}`}
                onClick={() => toggleChapter(chapterIndex)}
                type="button"
              >
                <div className="chapter-head-left">
                  <span className="ch-num">{String(chapterIndex + 1).padStart(2, "0")}</span>
                  <span className="ch-title">{chapter.title}</span>
                </div>
                <div className="chapter-head-right">
                  <div className="ch-progress-wrap">
                    <div className="ch-progress-track">
                      <div className="ch-progress-fill" style={{ width: `${chapterPercent}%` }}></div>
                    </div>
                    <span className="ch-progress-label">
                      {doneCount} / {chapter.lessons.length}
                    </span>
                  </div>
                  <div className="ch-chevron">▼</div>
                </div>
              </button>

              <div className={`lessons-list ${isOpen ? "open" : ""}`}>
                {chapter.lessons.map((lesson) => {
                  const flatIndex = flatLessons.findIndex((item) => item.lesson.slug === lesson.slug);
                  const status =
                    flatIndex < currentFlatIndex
                      ? "done"
                      : flatIndex === currentFlatIndex
                        ? "active"
                        : "pending";

                  return (
                    <Link
                      className={`lesson-row ${status}`}
                      key={lesson.slug}
                      to={`/tracks/${track.slug}/lessons/${lesson.slug}`}
                    >
                      <div className={`lr-status ${status === "done" ? "done" : status === "active" ? "active" : ""}`}>
                        {status === "done" ? "✓" : status === "active" ? "▶" : "○"}
                      </div>
                      <div className="lr-info">
                        <div className="lr-title">{lesson.title}</div>
                        <div className="lr-desc">{lesson.description}</div>
                      </div>
                      <div className="lr-right">
                        <span className="lr-duration">{lesson.duration}</span>
                        {lesson.badge ? <span className="lr-badge quiz">{lesson.badge}</span> : null}
                        <span className="lr-arrow">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="outcomes-section">
        <div className="section-label">What you'll be able to do</div>
        <div className="outcomes-grid">
          {track.outcomes.map((outcome, index) => (
            <div className="outcome-card" key={outcome}>
              <div className="outcome-icon">{["🔐", "⚙️", "🔭", "🧮", "📐", "✦"][index % 6]}</div>
              <h4>{outcome.split(".")[0]}</h4>
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonPage() {
  const { trackSlug, lessonSlug } = useParams();
  const lessonContext = useMemo(
    () => getLessonBySlugs(trackSlug, lessonSlug),
    [trackSlug, lessonSlug],
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openChapters, setOpenChapters] = useState(() => new Set([0]));
  const [answers, setAnswers] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!lessonContext) {
      return;
    }
    setAnswers({});
    setOpenChapters(new Set([lessonContext.chapterIndex]));
    setSidebarOpen(!isPhoneLayout());
  }, [trackSlug, lessonSlug, lessonContext]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const progress = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!lessonContext) {
    return <Navigate to="/" replace />;
  }

  const { track, lesson, chapter, chapterIndex, flatIndex, totalLessons, previous, next } =
    lessonContext;
  const lessonProgress = Math.round(((flatIndex + 1) / totalLessons) * 100);
  const correctCount = lesson.details.quiz.filter((question, index) => {
    const selected = answers[index];
    return selected !== undefined && question.options[selected].correct;
  }).length;
  const allCorrect =
    lesson.details.quiz.length > 0 && correctCount === lesson.details.quiz.length;

  return (
    <div className={`lesson-page theme-${track.theme}`}>
      <div className="scroll-progress">
        <div className="scroll-progress-fill" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div className="topbar">
        <div className="topbar-left">
          <Link to="/" className="logo">
            high<span>faucet</span>
          </Link>
          <div className="topbar-sep"></div>
          <div className="topbar-track">{track.title}</div>
        </div>
        <div className="topbar-right">
          <div className="progress-bar-wrap">
            <span className="progress-label">Progress</span>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${lessonProgress}%` }}></div>
            </div>
            <span className="progress-pct">{lessonProgress}%</span>
          </div>
          <button
            className="toggle-sidebar-btn interactive"
            id="sidebarToggle"
            onClick={() => setSidebarOpen((current) => !current)}
            type="button"
          >
            ☰ <span>{sidebarOpen ? "Hide" : "Show"}</span>
          </button>
        </div>
      </div>

      <div
        className="layout"
        style={{
          "--sidebar-offset": sidebarOpen ? "var(--sidebar-w)" : "0px",
          "--sidebar-shift": sidebarOpen ? "0px" : "calc(-1 * var(--sidebar-w))",
        }}
      >
        <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="sidebar-header">
            <div className="sidebar-topic-pill">{track.label}</div>
            <div className="sidebar-topic-name">{track.title}</div>
          </div>
          <div className="sidebar-body">
            {track.chapters.map((item, index) => {
              const isOpen = openChapters.has(index);
              return (
                <div className="chapter-group" key={item.title}>
                  <button
                    className={`chapter-label interactive ${isOpen ? "open" : ""}`}
                    onClick={() =>
                      setOpenChapters((current) => {
                        const nextSet = new Set(current);
                        if (nextSet.has(index)) {
                          nextSet.delete(index);
                        } else {
                          nextSet.add(index);
                        }
                        return nextSet;
                      })
                    }
                    type="button"
                  >
                    <span>{item.title}</span>
                    <span className="chapter-toggle">▶</span>
                  </button>
                  <div className={`chapter-lessons ${isOpen ? "open" : ""}`}>
                    {item.lessons.map((itemLesson) => {
                      const itemIndex = lessonContext.lessons.findIndex(
                        (row) => row.lesson.slug === itemLesson.slug,
                      );
                      const status =
                        itemIndex < flatIndex
                          ? "done"
                          : itemIndex === flatIndex
                            ? "active"
                            : "";

                      return (
                        <Link
                          className={`lesson-nav-item ${status}`}
                          key={itemLesson.slug}
                          to={`/tracks/${track.slug}/lessons/${itemLesson.slug}`}
                        >
                          <span
                            className={`nav-status ${
                              status === "done"
                                ? "done-icon"
                                : status === "active"
                                  ? "active-icon"
                                  : ""
                            }`}
                          >
                            {status === "done" ? "✓" : status === "active" ? "◆" : "○"}
                          </span>
                          <span className="nav-lesson-name">{itemLesson.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <button
          aria-hidden={!sidebarOpen}
          className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
          onClick={() => setSidebarOpen(false)}
          tabIndex={-1}
          type="button"
        ></button>

        <main className={`main ${sidebarOpen ? "" : "expanded"}`} id="main">
          <article className="lesson-area">
            <div className="lesson-meta">
              <span className="lesson-chapter-badge">
                Chapter {chapterIndex + 1} — {chapter.title}
              </span>
              <span className="lesson-meta-sep">·</span>
              <span className="lesson-num">
                Lesson {lesson.lessonNumber ?? flatIndex + 1} of {totalLessons}
              </span>
            </div>

            <h1 className="lesson-title">
              {lesson.title.split(" & ").map((part, index, array) => (
                <span key={part}>
                  {part}
                  {index < array.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>

            <p className="lesson-intro">{lesson.details.intro}</p>

            <div className="lesson-body">
              {lesson.details.blocks.map((block, index) => (
                <LessonBlockRenderer block={block} key={`${block.type}-${index}`} />
              ))}
            </div>

            <div className="quiz-section" id="quizSection">
              <div className="quiz-header">
                <div className="quiz-icon">⚡</div>
                <div>
                  <div className="quiz-title">Check your understanding</div>
                  <div className="quiz-subtitle">
                    {lesson.details.quiz.length} question
                    {lesson.details.quiz.length > 1 ? "s" : ""} · answers explained
                  </div>
                </div>
              </div>

              {lesson.details.quiz.map((question, questionIndex) => {
                const selectedOption = answers[questionIndex];
                const answered = selectedOption !== undefined;
                return (
                  <div className="quiz-card" key={question.question}>
                    <div className="quiz-q-num">
                      Question {String(questionIndex + 1).padStart(2, "0")} /{" "}
                      {String(lesson.details.quiz.length).padStart(2, "0")}
                    </div>
                    <div className="quiz-question">{question.question}</div>
                    <div className="quiz-options">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedOption === optionIndex;
                        const className = answered
                          ? option.correct
                            ? "quiz-option correct"
                            : isSelected
                              ? "quiz-option incorrect"
                              : "quiz-option dimmed"
                          : "quiz-option";

                        return (
                          <button
                            className={className}
                            key={option.label}
                            onClick={() =>
                              setAnswers((current) => ({
                                ...current,
                                [questionIndex]: optionIndex,
                              }))
                            }
                            type="button"
                          >
                            <span className="opt-letter">{option.label}</span>
                            <span className="opt-text">{option.text}</span>
                            <span className="quiz-result-icon">
                              {option.correct ? "✓" : "✗"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <div className={`quiz-explanation ${answered ? "visible" : ""}`}>
                      <strong>Correct.</strong> {question.explanation}
                    </div>
                  </div>
                );
              })}

              <div className={`complete-banner ${allCorrect ? "show" : ""}`}>
                <div className="complete-banner-icon">✦</div>
                <div className="complete-banner-text">
                  <h3>Lesson complete</h3>
                  <p>
                    You answered every question correctly. Move on to the next
                    lesson when you are ready.
                  </p>
                </div>
              </div>
            </div>

            {lesson.details.sources?.length ? (
              <div className="lesson-sources">
                <div className="section-label">Sources</div>
                <div className="sources-list">
                  {lesson.details.sources.map((source) => (
                    <a
                      className="source-item interactive"
                      href={source.url}
                      key={`${source.title}-${source.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="source-title">{source.title}</span>
                      <span className="source-url">Open ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="lesson-nav-footer">
              {previous ? (
                <Link
                  to={`/tracks/${track.slug}/lessons/${previous.lesson.slug}`}
                  className="nav-footer-btn"
                >
                  <span className="nfb-label">← Previous</span>
                  <span className="nfb-title">{previous.lesson.title}</span>
                </Link>
              ) : (
                <Link to={`/tracks/${track.slug}`} className="nav-footer-btn">
                  <span className="nfb-label">← Track</span>
                  <span className="nfb-title">{track.title}</span>
                </Link>
              )}

              {next ? (
                <Link
                  to={`/tracks/${track.slug}/lessons/${next.lesson.slug}`}
                  className="nav-footer-btn primary"
                >
                  <span className="nfb-label">Next →</span>
                  <span className="nfb-title">{next.lesson.title}</span>
                </Link>
              ) : (
                <Link to={`/tracks/${track.slug}`} className="nav-footer-btn primary">
                  <span className="nfb-label">Track →</span>
                  <span className="nfb-title">Back to curriculum</span>
                </Link>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

function LessonBlockRenderer({ block }) {
  if (block.type === "heading") {
    return <h2>{block.text}</h2>;
  }

  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "definition") {
    return (
      <div className="def-box">
        <div className="def-box-label">{block.label}</div>
        <p>{block.text}</p>
      </div>
    );
  }

  if (block.type === "note") {
    return (
      <div className="note-box">
        <div className="note-icon">→</div>
        <p>{block.text}</p>
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <div className="code-block">
        <div className="code-block-label">{block.label}</div>
        <pre>{block.code}</pre>
      </div>
    );
  }

  return null;
}

function HomeNav() {
  return (
    <nav>
      <Link className="nav-logo" to="/">
        high<span>faucet</span>
      </Link>
      <ul className="nav-links">
        <li>
          <a href="#topics" className="interactive">
            Tracks
          </a>
        </li>
        <li>
          <a href="#how" className="interactive">
            How
          </a>
        </li>
        <li>
          <a href="#topics" className="interactive">
            Library
          </a>
        </li>
        <li>
          <a href="#footer" className="interactive">
            About
          </a>
        </li>
      </ul>
      <Link className="nav-cta interactive" to="/tracks/zk-proofs">
        Start Learning
      </Link>
    </nav>
  );
}

function TrackNav({ track }) {
  return (
    <nav className="track-nav">
      <Link className="nav-logo" to="/">
        high<span>faucet</span>
      </Link>

      <div className="nav-center">
        <span>Tracks</span>
        <span className="sep">/</span>
        <span className="crumb-active">{track.title}</span>
      </div>

      <div className="nav-right">
        <Link className="nav-pill interactive" to="/">
          Home
        </Link>
        <Link
          className="nav-start-btn interactive"
          to={`/tracks/${track.slug}/lessons/${track.currentLessonSlug}`}
        >
          Start Track
        </Link>
      </div>
    </nav>
  );
}

function HomeFooter() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            high<span>faucet</span>
          </div>
          <div className="footer-tagline">Deep learning for serious minds.</div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Tracks</h4>
            <ul>
              {modules.slice(0, 5).map((track) => (
                <li key={track.slug}>
                  <Link to={`/tracks/${track.slug}`}>{track.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <ul>
              {modules.slice(5).map((track) => (
                <li key={track.slug}>
                  <Link to={`/tracks/${track.slug}`}>{track.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Project</h4>
            <ul>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#preview">Preview</a>
              </li>
              <li>
                <a href="#topics">Suggest a topic</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 HighFaucet. Open source. No rights reserved.</div>
        <div className="footer-badge">
          <div className="badge-dot"></div>
          All systems operational
        </div>
      </div>
    </footer>
  );
}

function WhyCard({ number, icon, title, text, accent = false }) {
  return (
    <div className={`why-card fade-up ${accent ? "accent-yellow" : ""}`}>
      <div className="why-card-num">{number}</div>
      <div className="why-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function HeroStat({ number, label }) {
  return (
    <div>
      <div className="hero-stat-num">{number}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

function HowStep({ number, title, text }) {
  return (
    <div className="how-step fade-up">
      <div className="how-step-num">{number}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MetaItem({ value, label, accent = false }) {
  return (
    <div className="hero-meta-item">
      <span className="meta-val" style={accent ? { color: "var(--accent-color)" } : undefined}>
        {value}
      </span>
      <span className="meta-label">{label}</span>
    </div>
  );
}

function PcStat({ value, label }) {
  return (
    <div className="pc-stat">
      <div className="pc-stat-val">{value}</div>
      <div className="pc-stat-label">{label}</div>
    </div>
  );
}

function LegacyTrackRedirect() {
  const { trackSlug } = useParams();
  return <Navigate to={`/tracks/${trackSlug}`} replace />;
}

function LegacyLessonRedirect() {
  const { trackSlug, lessonSlug } = useParams();
  return <Navigate to={`/tracks/${trackSlug}/lessons/${lessonSlug}`} replace />;
}

function delayClass(index) {
  return ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3"][index % 4];
}

function splitTrackTitle(title) {
  if (title === "Zero-Knowledge Proofs") {
    return ["Zero-", "Knowledge", "Proofs"];
  }

  const words = title.split(" ");
  if (words.length <= 2) {
    return words;
  }

  return [words.slice(0, words.length - 1).join(" "), words[words.length - 1]];
}

export default App;
