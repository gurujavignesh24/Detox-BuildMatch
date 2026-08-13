const app = document.querySelector("#app");

const stages = [
  { id: "feed", label: "Discover", small: "Opportunity feed" },
  { id: "details", label: "Details", small: "Hackathon brief" },
  { id: "roles", label: "Roles", small: "Needed coverage" },
  { id: "matches", label: "Matches", small: "Explainable fit" },
  { id: "team", label: "Team", small: "Formation" },
  { id: "workspace", label: "Workspace", small: "Build plan" },
  { id: "progress", label: "Showcase", small: "Proof of work" },
];

const opportunities = [
  {
    id: "climate-campus-sprint",
    title: "Climate + Campus Build Sprint",
    category: "Hackathon",
    deadline: "Aug 25",
    level: "Intermediate",
    location: "Hybrid",
    teamSize: "3-4",
    duration: "72 hours",
    prize: "Mentor credits + showcase slot",
    organizer: "DETOX Build",
    featured: true,
    summary:
      "Build a product that helps student communities reduce waste, save energy, or coordinate local climate action.",
    problem:
      "Campus sustainability ideas often stop at discussion because students cannot quickly form cross-functional teams or get mentor feedback.",
    output:
      "A working prototype, a 3-minute demo, and a measurable impact hypothesis for a real campus workflow.",
    skills: ["React", "UX research", "Open data", "API design", "Pitching"],
    roles: [
      {
        id: "frontend",
        title: "Frontend Engineer",
        need: "Build the working web prototype and demo polish.",
        skills: ["React", "TypeScript", "UI systems"],
        priority: "Critical",
      },
      {
        id: "data",
        title: "Data/API Builder",
        need: "Shape opportunity, task, and sustainability data flows.",
        skills: ["Node", "PostgreSQL", "API design"],
        priority: "Critical",
      },
      {
        id: "design",
        title: "Product Designer",
        need: "Turn the community problem into a focused user journey.",
        skills: ["UX research", "Figma", "Design systems"],
        priority: "Important",
      },
      {
        id: "story",
        title: "Pitch Lead",
        need: "Own narrative, demo script, and final submission.",
        skills: ["Storytelling", "Metrics", "Demo video"],
        priority: "Important",
      },
    ],
  },
  {
    id: "ai-mentor-lab",
    title: "AI Mentor Microtools Challenge",
    category: "Competition",
    deadline: "Sep 2",
    level: "Beginner",
    location: "Remote",
    teamSize: "2-3",
    duration: "1 week",
    prize: "Pilot with mentor cohort",
    organizer: "DETOX Labs",
    summary:
      "Create lightweight AI tools that help mentors review student project updates faster and more consistently.",
    problem:
      "Mentor bandwidth is limited, which delays project feedback and slows student teams.",
    output: "Clickable mentor workflow plus a rubric-based review assistant.",
    skills: ["Prompting", "UX writing", "JavaScript", "Research"],
    roles: [],
  },
  {
    id: "portfolio-night",
    title: "Portfolio Build Night",
    category: "Project",
    deadline: "Aug 18",
    level: "Beginner",
    location: "On campus",
    teamSize: "Solo or pair",
    duration: "4 hours",
    prize: "Community review",
    organizer: "DETOX Community",
    summary:
      "Ship a clean project page that documents one completed build, the problem solved, and proof of impact.",
    problem:
      "Students finish projects but rarely package them into evidence that recruiters or organizers can evaluate.",
    output: "Published project page with case study and live link.",
    skills: ["HTML", "Case study", "Visual design"],
    roles: [],
  },
  {
    id: "open-data-internship",
    title: "Open Data Internship Pods",
    category: "Internship",
    deadline: "Sep 10",
    level: "Advanced",
    location: "Remote",
    teamSize: "3",
    duration: "6 weeks",
    prize: "Partner interviews",
    organizer: "Civic Data Guild",
    summary:
      "Small pods analyze public datasets and ship partner-ready dashboards for local nonprofit teams.",
    problem:
      "Nonprofits have useful public datasets but lack time to convert them into decision-ready views.",
    output: "Dashboard, summary memo, and handoff session.",
    skills: ["Python", "Data analysis", "Dashboards", "Writing"],
    roles: [],
  },
];

const members = [
  {
    id: "maya",
    name: "Maya N.",
    initials: "MN",
    role: "Frontend Engineer",
    targetRole: "frontend",
    availability: "12 hrs/week",
    timezone: "IST evenings",
    skills: ["React", "TypeScript", "Tailwind", "Design QA"],
    interests: ["Climate tech", "Community tools"],
    score: 94,
    reasons: [
      "Covers React and TypeScript for the working prototype.",
      "Has shipped two public hackathon demos with polished UI states.",
      "Availability overlaps with the planned evening build block.",
    ],
    breakdown: { skills: 96, role: 93, interest: 88, availability: 90 },
  },
  {
    id: "ishaan",
    name: "Ishaan R.",
    initials: "IR",
    role: "Data/API Builder",
    targetRole: "data",
    availability: "9 hrs/week",
    timezone: "IST nights",
    skills: ["Node", "PostgreSQL", "REST APIs", "Open data"],
    interests: ["Sustainability", "Civic dashboards"],
    score: 91,
    reasons: [
      "Matches the data/API role with Node, PostgreSQL, and open-data experience.",
      "Can model opportunity, team, milestone, and mentor-request data.",
      "Prior civic dashboard work supports the sustainability theme.",
    ],
    breakdown: { skills: 94, role: 92, interest: 86, availability: 84 },
  },
  {
    id: "zara",
    name: "Zara K.",
    initials: "ZK",
    role: "Product Designer",
    targetRole: "design",
    availability: "10 hrs/week",
    timezone: "Weekend sprint",
    skills: ["UX research", "Figma", "Design systems", "Usability tests"],
    interests: ["Student communities", "Service design"],
    score: 89,
    reasons: [
      "Complements the build team with research, journey mapping, and design systems.",
      "Can validate the opportunity-to-team workflow with target users.",
      "Strong fit for turning screenshots and branding cues into a distinct interface.",
    ],
    breakdown: { skills: 91, role: 88, interest: 90, availability: 82 },
  },
  {
    id: "arjun",
    name: "Arjun S.",
    initials: "AS",
    role: "Pitch Lead",
    targetRole: "story",
    availability: "8 hrs/week",
    timezone: "IST afternoons",
    skills: ["Storytelling", "Metrics", "Demo video", "Public speaking"],
    interests: ["Hackathons", "Impact measurement"],
    score: 87,
    reasons: [
      "Owns the demo narrative and turns platform metrics into judge-ready proof.",
      "Has prior experience recording three-minute product demos.",
      "Balances the technical team with clear communication and submission polish.",
    ],
    breakdown: { skills: 89, role: 90, interest: 82, availability: 78 },
  },
  {
    id: "nina",
    name: "Nina P.",
    initials: "NP",
    role: "Full-stack Builder",
    targetRole: "frontend",
    availability: "6 hrs/week",
    timezone: "Weekend only",
    skills: ["React", "Firebase", "Auth", "CSS"],
    interests: ["Education tools", "No-code ops"],
    score: 79,
    reasons: [
      "Can cover frontend gaps and lightweight backend glue.",
      "Useful backup if the team wants auth or quick data persistence.",
      "Lower availability makes this a secondary match.",
    ],
    breakdown: { skills: 84, role: 80, interest: 72, availability: 62 },
  },
  {
    id: "dev",
    name: "Dev M.",
    initials: "DM",
    role: "Community Researcher",
    targetRole: "design",
    availability: "7 hrs/week",
    timezone: "Mornings",
    skills: ["User interviews", "Notion", "Surveys", "Journey maps"],
    interests: ["Campus communities", "Peer learning"],
    score: 76,
    reasons: [
      "Strong research coverage for problem validation.",
      "Can recruit student testers from the community.",
      "Needs a designer or frontend partner for visual execution.",
    ],
    breakdown: { skills: 78, role: 74, interest: 88, availability: 68 },
  },
];

const mentors = [
  { name: "Dr. Asha Verma", focus: "Climate product strategy", status: "Available today" },
  { name: "Rohan Mehta", focus: "Hackathon demo reviews", status: "2 slots left" },
];

const defaultState = {
  view: "home",
  selectedOpportunityId: "climate-campus-sprint",
  filters: { search: "", category: "All", level: "All" },
  matchRoleFilter: "All",
  workspaceTab: "board",
  impactMembers: 160,
  impactOpportunities: 12,
  inspectedMemberId: "maya",
  showcasePackReady: false,
  currentUser: null,
  authMessage: "",
  contactMessages: [],
  selectedRoles: ["frontend", "data", "design"],
  invites: {},
  workspaceCreated: false,
  mentorRequest: "none",
  mentorNote:
    "Please review whether our demo narrative clearly connects opportunity discovery, explainable matching, workspace execution, and final showcase proof.",
  showcaseSubmitted: false,
  tasks: [
    {
      id: "task-1",
      title: "Map opportunity-to-project journey",
      owner: "You",
      lane: "Done",
      done: true,
      due: "Today",
    },
    {
      id: "task-2",
      title: "Build role selection and matching screens",
      owner: "Maya",
      lane: "Doing",
      done: false,
      due: "Aug 14",
    },
    {
      id: "task-3",
      title: "Seed workspace data model",
      owner: "Ishaan",
      lane: "Doing",
      done: false,
      due: "Aug 14",
    },
    {
      id: "task-4",
      title: "Run 3 student workflow checks",
      owner: "Zara",
      lane: "Next",
      done: false,
      due: "Aug 15",
    },
  ],
  milestones: [
    { id: "m1", title: "Team formed", due: "Aug 12", done: true },
    { id: "m2", title: "MVP clickable", due: "Aug 14", done: false },
    { id: "m3", title: "Mentor review", due: "Aug 15", done: false },
    { id: "m4", title: "Final showcase", due: "Aug 17", done: false },
  ],
  activity: [
    {
      title: "Opportunity selected",
      body: "Climate + Campus Build Sprint is ready for role planning.",
      time: "Start",
    },
  ],
};

let state = loadState();
let toastTimer = null;
let autoDemoTimer = null;
let ambientCleanup = null;

function loadState() {
  try {
    const saved = window.localStorage.getItem("detox-buildmatch-state");
    if (saved) {
      return normalizeState(JSON.parse(saved));
    }
  } catch (error) {
    console.warn("Could not read saved state", error);
  }
  return structuredClone(defaultState);
}

function normalizeState(saved) {
  const normalized = { ...structuredClone(defaultState), ...saved };
  normalized.filters = { ...defaultState.filters, ...(saved?.filters || {}) };
  normalized.tasks = Array.isArray(saved?.tasks) ? saved.tasks : structuredClone(defaultState.tasks);
  normalized.milestones = Array.isArray(saved?.milestones) ? saved.milestones : structuredClone(defaultState.milestones);
  normalized.activity = Array.isArray(saved?.activity) ? saved.activity : structuredClone(defaultState.activity);
  normalized.invites = saved?.invites || {};
  normalized.matchRoleFilter = normalized.matchRoleFilter || "All";
  normalized.workspaceTab = normalized.workspaceTab || "board";
  normalized.mentorNote = typeof normalized.mentorNote === "string" ? normalized.mentorNote : defaultState.mentorNote;
  normalized.impactMembers = Number.isFinite(Number(normalized.impactMembers)) ? Number(normalized.impactMembers) : defaultState.impactMembers;
  normalized.impactOpportunities = Number.isFinite(Number(normalized.impactOpportunities)) ? Number(normalized.impactOpportunities) : defaultState.impactOpportunities;
  normalized.inspectedMemberId = normalized.inspectedMemberId || defaultState.inspectedMemberId;
  normalized.currentUser = normalized.currentUser || null;
  normalized.authMessage = typeof normalized.authMessage === "string" ? normalized.authMessage : "";
  normalized.contactMessages = Array.isArray(saved?.contactMessages) ? saved.contactMessages : [];
  normalized.showcasePackReady = Boolean(normalized.showcasePackReady);
  return normalized;
}

function saveState() {
  window.localStorage.setItem("detox-buildmatch-state", JSON.stringify(state));
}

function resetState() {
  clearTimeout(autoDemoTimer);
  state = structuredClone(defaultState);
  saveState();
  showToast("Demo reset", "The prototype journey is back at the opportunity feed.");
  render();
}

function addActivity(title, body) {
  const entry = { title, body, time: "Now" };
  state.activity = [entry, ...(state.activity || [])].slice(0, 10);
}

function initialsFromName(name) {
  const parts = String(name || "Demo User")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return (parts[0]?.[0] || "D").toUpperCase() + (parts[1]?.[0] || "U").toUpperCase();
}

function selectedOpportunity() {
  return opportunities.find((opportunity) => opportunity.id === state.selectedOpportunityId) || opportunities[0];
}

function selectedRoles() {
  const opportunity = selectedOpportunity();
  return opportunity.roles.filter((role) => state.selectedRoles.includes(role.id));
}

function acceptedMembers() {
  return members.filter((member) => state.invites[member.id] === "accepted");
}

function invitedMembers() {
  return members.filter((member) => ["invited", "accepted"].includes(state.invites[member.id]));
}

function teamMembers() {
  return [
    {
      id: "you",
      name: "You",
      initials: "YO",
      role: "Project Lead",
      skills: ["Product scope", "Community context", "Demo flow"],
    },
    ...acceptedMembers(),
  ];
}

function roleCoverage() {
  const covered = new Set(acceptedMembers().map((member) => member.targetRole));
  covered.add("story");
  return selectedRoles().map((role) => ({
    ...role,
    covered: role.id === "story" || covered.has(role.id),
  }));
}

function taskProgress() {
  const total = Math.max(state.tasks.length, 1);
  const done = state.tasks.filter((task) => task.done).length;
  const milestoneDone = state.milestones.filter((milestone) => milestone.done).length;
  const mentorBoost = state.mentorRequest === "resolved" ? 1 : 0;
  const submissionBoost = state.showcaseSubmitted ? 1 : 0;
  const raw = Math.round(((done + milestoneDone + mentorBoost + submissionBoost) / (total + state.milestones.length + 2)) * 100);
  return Math.max(18, Math.min(raw, 100));
}

function completedStageIndex() {
  if (state.view === "home") return -1;
  if (state.showcaseSubmitted) return 6;
  if (state.workspaceCreated && taskProgress() >= 50) return 5;
  if (state.workspaceCreated) return 4;
  if (acceptedMembers().length >= 2) return 3;
  if (invitedMembers().length > 0) return 3;
  if (state.selectedRoles.length > 0 && state.view === "matches") return 2;
  if (state.selectedRoles.length > 0 && ["roles", "matches", "team", "workspace", "progress"].includes(state.view)) return 2;
  if (state.view !== "feed") return 1;
  return 0;
}

function setView(view) {
  state.view = view;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(title, body) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span>`;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function badge(label, tone = "") {
  return `<span class="badge ${tone}">${escapeHtml(label)}</span>`;
}

function chipList(items, tone = "") {
  return `<div class="chip-row">${items.map((item) => badge(item, tone)).join("")}</div>`;
}

function stageClass(stageId, index) {
  const activeIndex = stages.findIndex((stage) => stage.id === state.view);
  const doneIndex = completedStageIndex();
  if (index === activeIndex) return "is-active";
  if (index <= doneIndex && index < activeIndex) return "is-done";
  if (index <= doneIndex && activeIndex < index) return "is-done";
  return "";
}

function renderTopbar() {
  const navItems = [
    { label: "Home", view: "home" },
    { label: "Platform", view: "feed" },
    { label: "About", view: "about" },
    { label: "Contact", view: "contact" },
  ];
  const accountActions = state.currentUser
    ? `
      <div class="account-chip">
        <div class="mini-avatar">${escapeHtml(state.currentUser.initials)}</div>
        <span>${escapeHtml(state.currentUser.name)}</span>
      </div>
      <button class="btn secondary compact" type="button" data-action="sign-out">Sign out</button>
    `
    : `
      <button class="btn secondary compact" type="button" data-view="signin">Sign in</button>
      <button class="btn gold compact" type="button" data-view="signup">Create account</button>
    `;

  return `
    <header class="topbar site-topbar">
      <div class="brand">
        <img class="brand-logo" src="./assets/detox-phoenix-logo.png" alt="DETOX logo" />
        <div class="brand-copy">
          <p class="brand-title">DETOX</p>
          <p class="brand-subtitle">BuildMatch</p>
        </div>
      </div>
      <nav class="site-nav" aria-label="Primary navigation">
        ${navItems
          .map(
            (item) => `
              <button class="nav-link ${navItemActive(item.view) ? "is-active" : ""}" data-view="${item.view}">
                ${escapeHtml(item.label)}
              </button>
            `,
          )
          .join("")}
      </nav>
      <div class="top-actions">
        <button class="btn secondary compact" type="button" data-action="auto-demo">Guided demo</button>
        <button class="btn secondary compact" type="button" data-view="progress">Showcase</button>
        ${accountActions}
      </div>
    </header>
  `;
}

function navItemActive(view) {
  const productViews = ["feed", "details", "roles", "matches", "team", "workspace", "progress"];
  return state.view === view || (view === "feed" && productViews.includes(state.view));
}

function renderSidePanel() {
  const activeIndex = stages.findIndex((stage) => stage.id === state.view);
  return `
    <aside class="side-panel">
      <p class="side-title">Demo Journey</p>
      <ol class="flow-list">
        ${stages
          .map(
            (stage, index) => `
              <li class="flow-item ${index === activeIndex ? "is-active" : ""} ${index < activeIndex ? "is-done" : ""}">
                <span class="flow-index">${index + 1}</span>
                <span class="flow-label">
                  ${escapeHtml(stage.label)}
                  <span class="flow-small">${escapeHtml(stage.small)}</span>
                </span>
              </li>
            `,
          )
          .join("")}
      </ol>
      <div class="quick-card">
        <p class="side-title">Current Team</p>
        <div class="team-roster">
          ${teamMembers()
            .map(
              (member) => `
                <div class="roster-card">
                  <div class="mini-avatar">${escapeHtml(member.initials)}</div>
                  <div>
                    <strong>${escapeHtml(member.name)}</strong>
                    <div class="muted small">${escapeHtml(member.role)}</div>
                  </div>
                  ${badge(member.id === "you" ? "Lead" : "Accepted", member.id === "you" ? "dark" : "lime")}
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="quick-card">
        <p class="side-title">Role Coverage</p>
        <div class="stack">
          ${roleCoverage()
            .map(
              (role) => `
                <div>
                  <div class="split small">
                    <strong>${escapeHtml(role.title)}</strong>
                    <span>${role.covered ? "Covered" : "Open"}</span>
                  </div>
                  <div class="coverage-bar mt-12"><span style="width:${role.covered ? 100 : 35}%"></span></div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </aside>
  `;
}

function renderContextPanel() {
  const progress = taskProgress();
  const invited = invitedMembers().length;
  const accepted = acceptedMembers().length;
  const rolesOpen = roleCoverage().filter((role) => !role.covered).length;
  return `
    <aside class="context-panel">
      <p class="side-title">Live Demo State</p>
      <div class="quick-card">
        <div class="quick-stat"><span>Selected roles</span><strong>${state.selectedRoles.length}</strong></div>
        <div class="quick-stat"><span>Invites sent</span><strong>${invited}</strong></div>
        <div class="quick-stat"><span>Accepted</span><strong>${accepted}</strong></div>
        <div class="quick-stat"><span>Progress</span><strong>${progress}%</strong></div>
      </div>
      <div class="quick-card">
        <p class="side-title">Judge KPIs</p>
        <div class="quick-stat"><span>Time to team</span><strong>${accepted >= 2 ? "18m" : "Open"}</strong></div>
        <div class="quick-stat"><span>Role gaps</span><strong>${rolesOpen}</strong></div>
        <div class="quick-stat"><span>Mentor request</span><strong>${mentorLabel()}</strong></div>
      </div>
      <div class="quick-card">
        <p class="side-title">Recommended Next</p>
        <p class="muted mb-0">${escapeHtml(nextActionText())}</p>
        <div class="context-actions mt-16">
          <button class="btn lime" data-action="next-step">${escapeHtml(nextActionLabel())}</button>
          <button class="btn secondary" data-action="auto-demo">Run guided demo</button>
        </div>
      </div>
    </aside>
  `;
}

function mentorLabel() {
  if (state.mentorRequest === "resolved") return "Done";
  if (state.mentorRequest === "sent") return "Sent";
  return "None";
}

function nextActionText() {
  if (state.view === "home") return "Launch the live BuildMatch product demo.";
  if (state.view === "feed") return "Open the Climate + Campus Build Sprint from the feed.";
  if (state.view === "details") return "Move into role definition to decide which teammates are needed.";
  if (state.view === "roles") return "Keep the critical roles selected, then find teammate matches.";
  if (state.view === "matches") return "Invite one match for frontend and one for data/API coverage.";
  if (state.view === "team") return "Confirm accepted members and create the workspace.";
  if (state.view === "workspace") return "Complete tasks, resolve mentor feedback, then open the showcase.";
  return "Submit the showcase when the progress proof is ready.";
}

function nextActionLabel() {
  if (state.view === "home") return "Launch demo";
  if (state.view === "feed") return "Open opportunity";
  if (state.view === "details") return "Define roles";
  if (state.view === "roles") return "Find matches";
  if (state.view === "matches") return invitedMembers().length ? "Review team" : "Invite best matches";
  if (state.view === "team") return acceptedMembers().length >= 2 ? "Create workspace" : "Accept invites";
  if (state.view === "workspace") return workspaceNextLabel();
  return state.showcaseSubmitted ? "Demo complete" : "Submit showcase";
}

function workspaceNextLabel() {
  if (state.tasks.some((task) => !task.done)) return "Complete next task";
  if (state.milestones.some((milestone) => !milestone.done)) return "Complete milestone";
  if (state.mentorRequest === "none") return "Request mentor";
  if (state.mentorRequest === "sent") return "Mark reviewed";
  return "Open showcase";
}

function runNextStep() {
  if (state.view === "home") {
    state.view = "feed";
    addActivity("Product demo launched", "The company homepage opened the BuildMatch platform flow.");
  } else if (state.view === "feed") {
    state.selectedOpportunityId = "climate-campus-sprint";
    state.view = "details";
    addActivity("Opportunity opened", "The lead reviewed the sprint brief and participation details.");
  } else if (state.view === "details") {
    state.view = "roles";
    addActivity("Role planner opened", "BuildMatch converted the opportunity brief into suggested team roles.");
  } else if (state.view === "roles") {
    if (state.selectedRoles.length === 0) state.selectedRoles = ["frontend", "data", "design"];
    state.matchRoleFilter = "All";
    state.view = "matches";
    addActivity("Role gaps selected", `${state.selectedRoles.length} roles are being used by the matching engine.`);
  } else if (state.view === "matches") {
    if (invitedMembers().length === 0) {
      state.invites.maya = "accepted";
      state.invites.ishaan = "accepted";
      if (state.selectedRoles.includes("design")) state.invites.zara = "accepted";
      addActivity("Best matches invited", "Maya, Ishaan, and Zara accepted the demo invitations.");
    }
    state.view = "team";
  } else if (state.view === "team") {
    if (acceptedMembers().length < 2) {
      state.invites.maya = "accepted";
      state.invites.ishaan = "accepted";
      addActivity("Invites accepted", "The team now has enough coverage to start building.");
    }
    state.workspaceCreated = true;
    state.workspaceTab = "board";
    state.view = "workspace";
    addActivity("Workspace created", "Tasks, milestones, mentor requests, and showcase progress are live.");
  } else if (state.view === "workspace") {
    advanceWorkspace();
  } else if (state.view === "progress") {
    completeDemo();
    return;
  }
  saveState();
  render();
  showToast("Next step", nextActionText());
}

function advanceWorkspace() {
  const nextTask = state.tasks.find((task) => !task.done);
  if (nextTask) {
    nextTask.done = true;
    nextTask.lane = "Done";
    state.workspaceTab = "board";
    addActivity("Task completed", `${nextTask.title} is now done.`);
    return;
  }

  const nextMilestone = state.milestones.find((milestone) => !milestone.done);
  if (nextMilestone) {
    nextMilestone.done = true;
    state.workspaceTab = "milestones";
    addActivity("Milestone completed", `${nextMilestone.title} is marked complete.`);
    return;
  }

  if (state.mentorRequest === "none") {
    state.mentorRequest = "sent";
    state.workspaceTab = "mentor";
    addActivity("Mentor requested", "A demo review was sent to the DETOX mentor pool.");
    return;
  }

  if (state.mentorRequest === "sent") {
    state.mentorRequest = "resolved";
    state.workspaceTab = "mentor";
    addActivity("Mentor review resolved", "Feedback has been folded into the final demo story.");
    return;
  }

  state.view = "progress";
}

function startAutoDemo() {
  clearTimeout(autoDemoTimer);
  state = structuredClone(defaultState);
  saveState();
  render();
  showToast("Guided demo started", "The journey will advance through the full MVP flow.");

  const steps = [
    () => runNextStep(),
    () => runNextStep(),
    () => runNextStep(),
    () => runNextStep(),
    () => runNextStep(),
    () => {
      state.tasks = state.tasks.map((task) => ({ ...task, done: true, lane: "Done" }));
      state.milestones = state.milestones.map((milestone) => ({ ...milestone, done: true }));
      state.mentorRequest = "resolved";
      state.workspaceTab = "activity";
      state.view = "workspace";
      addActivity("Build sprint completed", "Tasks, milestones, and mentor feedback are ready for showcase.");
      saveState();
      render();
    },
    () => {
      state.view = "progress";
      saveState();
      render();
    },
    () => completeDemo(),
  ];

  steps.forEach((step, index) => {
    autoDemoTimer = setTimeout(step, 750 * (index + 1));
  });
}

function renderMetricRow() {
  const progress = taskProgress();
  return `
    <div class="metric-row">
      <div class="metric"><strong>${opportunities.length}</strong><span>Seeded opportunities</span></div>
      <div class="metric"><strong>${members.length}</strong><span>Community profiles</span></div>
      <div class="metric"><strong>${acceptedMembers().length + 1}</strong><span>Team members formed</span></div>
      <div class="metric"><strong>${progress}%</strong><span>Project readiness</span></div>
    </div>
  `;
}

function renderHome() {
  const progress = taskProgress();
  const impact = impactEstimate();
  return `
    <main class="site-main">
      <section class="company-hero">
        <div class="hero-copy">
          <p class="eyebrow gold-text">DETOX BuildMatch</p>
          <h1>Turning community opportunities into project-ready teams.</h1>
          <p class="hero-lead">A professional collaboration platform for students, mentors, organizers, and builders who need to move from interest to execution without losing momentum.</p>
          <div class="hero-actions">
            <button class="btn gold" data-view="feed">Launch product demo</button>
            <button class="btn secondary" data-action="auto-demo">Run guided walkthrough</button>
          </div>
          <div class="hero-proof">
            <div><strong>18 min</strong><span>demo team formation</span></div>
            <div><strong>7 step</strong><span>opportunity to showcase flow</span></div>
            <div><strong>${progress}%</strong><span>current project readiness</span></div>
          </div>
        </div>
        <div class="hero-brand-panel">
          <div class="logo-stage">
            <img src="./assets/detox-phoenix-logo.png" alt="DETOX company logo" />
          </div>
          <div class="hero-product-card">
            <div class="split">
            ${badge("Live platform", "gold")}
              ${badge("Build track", "navy")}
            </div>
            <h2>One operating system for community builds.</h2>
            <p>Discover opportunities, define roles, match teammates, create a workspace, request mentor feedback, and publish progress from one connected journey.</p>
          </div>
        </div>
      </section>

      <section class="company-section">
        <div class="section-heading">
          <p class="eyebrow">Platform</p>
          <h2>Built for the exact moment when good ideas usually stall.</h2>
          <p>BuildMatch connects people, roles, and execution so opportunities become real projects instead of scattered chat messages.</p>
        </div>
        <div class="feature-grid">
          ${renderCompanyFeature("Opportunity Intelligence", "Curated feed with deadlines, skills, team size, outputs, and organizer context.", "01")}
          ${renderCompanyFeature("Explainable Matching", "Recommendations show role fit, skill coverage, interest alignment, and availability signals.", "02")}
          ${renderCompanyFeature("Team Formation", "Invite flows, role coverage, and acceptance status make team readiness visible.", "03")}
          ${renderCompanyFeature("Workspace Execution", "Tasks, milestones, mentor requests, and showcase readiness live in one project room.", "04")}
        </div>
      </section>

      <section class="impact-lab">
        <div>
          <p class="eyebrow gold-text">Impact lab</p>
          <h2>Estimate what BuildMatch unlocks for your community.</h2>
          <p>Move the sliders. The site updates the conversion story judges care about: teams formed, mentor demand, and likely completed projects.</p>
        </div>
        <div class="impact-controls">
          <label>
            <span>Community members</span>
            <input type="range" min="40" max="600" step="10" value="${state.impactMembers}" data-impact="impactMembers" />
            <strong>${state.impactMembers}</strong>
          </label>
          <label>
            <span>Monthly opportunities</span>
            <input type="range" min="3" max="40" step="1" value="${state.impactOpportunities}" data-impact="impactOpportunities" />
            <strong>${state.impactOpportunities}</strong>
          </label>
        </div>
        <div class="impact-results">
          <div><strong>${impact.teams}</strong><span>teams formed/month</span></div>
          <div><strong>${impact.mentorRequests}</strong><span>mentor reviews</span></div>
          <div><strong>${impact.completed}</strong><span>completed showcases</span></div>
        </div>
      </section>

      <section class="company-band">
        <div>
          <p class="eyebrow gold-text">Core Journey</p>
          <h2>Discover. Match. Build. Showcase.</h2>
          <p>The demo below is not a static mockup. It carries interactive state across the whole product flow.</p>
        </div>
        <div class="company-process">
          ${stages
            .map(
              (stage, index) => `
                <button class="process-step" data-view="${stage.id}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${escapeHtml(stage.label)}</strong>
                  <small>${escapeHtml(stage.small)}</small>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="company-section outcomes-section">
        <div class="section-heading">
          <p class="eyebrow">Outcomes</p>
          <h2>A platform story judges can understand in minutes.</h2>
        </div>
        <div class="outcome-grid">
          <div class="outcome-card"><strong>Higher participation</strong><span>Members find relevant opportunities and know exactly how to start.</span></div>
          <div class="outcome-card"><strong>Better teams</strong><span>Explainable matching helps members trust why teammates are recommended.</span></div>
          <div class="outcome-card"><strong>More completions</strong><span>Workspaces keep tasks, mentor feedback, milestones, and showcase proof visible.</span></div>
        </div>
      </section>

      <section class="company-cta">
        <div>
          <p class="eyebrow gold-text">Product demo</p>
          <h2>Open the working BuildMatch experience.</h2>
          <p>Use the guided walkthrough for a fast presentation, or click through the journey manually.</p>
        </div>
        <div class="hero-actions">
          <button class="btn gold" data-view="feed">Start manually</button>
          <button class="btn secondary dark-surface" data-action="auto-demo">Auto-run demo</button>
        </div>
      </section>
    </main>
  `;
}

function renderCompanyFeature(title, body, number) {
  return `
    <article class="company-feature">
      <span>${number}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
    </article>
  `;
}

function impactEstimate() {
  const members = Number(state.impactMembers) || defaultState.impactMembers;
  const opportunities = Number(state.impactOpportunities) || defaultState.impactOpportunities;
  const teams = Math.max(2, Math.round(Math.min(members / 8, opportunities * 2.4)));
  const mentorRequests = Math.round(teams * 0.72);
  const completed = Math.round(teams * 0.58);
  return { teams, mentorRequests, completed };
}

function renderAbout() {
  return `
    <main class="site-main">
      <section class="subpage-hero">
        <div>
          <p class="eyebrow gold-text">About DETOX BuildMatch</p>
          <h1>We help builders move from discovery to delivery.</h1>
          <p class="hero-lead">DETOX BuildMatch is designed for communities where opportunities are everywhere, but team formation and execution are the hard part.</p>
        </div>
        <div class="mission-card">
          <img src="./assets/detox-phoenix-logo.png" alt="DETOX logo" />
          <h2>Opportunity to outcome.</h2>
          <p>Our north star is simple: more members participating successfully, more projects completed, and more proof of work created.</p>
        </div>
      </section>
      <section class="company-section">
        <div class="timeline-grid">
          ${renderTimelineStep("01", "Discover", "Members find relevant hackathons, internships, competitions, and project ideas.")}
          ${renderTimelineStep("02", "Match", "The platform explains teammate recommendations using skills, role gaps, interests, and availability.")}
          ${renderTimelineStep("03", "Build", "Teams get a shared workspace with tasks, milestones, mentor requests, and progress tracking.")}
          ${renderTimelineStep("04", "Showcase", "Completed projects become visible proof for organizers, mentors, and the community.")}
        </div>
      </section>
      <section class="company-cta">
        <div>
          <p class="eyebrow gold-text">Ready to demo</p>
          <h2>Walk judges through the full product story.</h2>
          <p>Use the guided demo for a fast pitch, or manually click through each step.</p>
        </div>
        <div class="hero-actions">
          <button class="btn gold" data-action="auto-demo">Run guided demo</button>
          <button class="btn secondary dark-surface" data-view="feed">Open platform</button>
        </div>
      </section>
    </main>
  `;
}

function renderTimelineStep(number, title, body) {
  return `
    <article class="timeline-card">
      <span>${number}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
    </article>
  `;
}

function renderContact() {
  return `
    <main class="site-main">
      <section class="subpage-hero contact-hero">
        <div>
          <p class="eyebrow gold-text">Contact</p>
          <h1>Bring BuildMatch to your community.</h1>
          <p class="hero-lead">Use this working contact form to capture organizer, mentor, or student interest during the hackathon demo.</p>
        </div>
        <div class="contact-card">
          <h2>Send a message</h2>
          <div class="form-grid">
            <input class="text-input" data-contact-name placeholder="Your name" value="${escapeHtml(state.currentUser?.name || "")}" />
            <input class="text-input" data-contact-email placeholder="Email address" value="${escapeHtml(state.currentUser?.email || "")}" />
            <select class="select-input" data-contact-type>
              <option>Community pilot</option>
              <option>Mentor partnership</option>
              <option>Organizer dashboard</option>
              <option>Student support</option>
            </select>
            <textarea class="mentor-textarea" data-contact-message placeholder="Tell us what you want to build with DETOX BuildMatch"></textarea>
            <button class="btn gold" data-action="submit-contact">Submit message</button>
          </div>
        </div>
      </section>
      <section class="company-section">
        <div class="contact-grid">
          <div class="contact-method"><strong>Email</strong><span>hello@detoxbuildmatch.demo</span></div>
          <div class="contact-method"><strong>Community</strong><span>DETOX Build Track</span></div>
          <div class="contact-method"><strong>Response</strong><span>Usually within 24 hours</span></div>
        </div>
        <div class="submitted-messages mt-20">
          <div class="split">
            <h2 class="mb-0">Saved demo inquiries</h2>
            ${badge(`${state.contactMessages.length} messages`, "gold")}
          </div>
          <div class="activity-list mt-16">
            ${state.contactMessages
              .map(
                (message) => `
                  <div class="activity-item">
                    <span>${escapeHtml(message.type)}</span>
                    <div>
                      <strong>${escapeHtml(message.name)} - ${escapeHtml(message.email)}</strong>
                      <p>${escapeHtml(message.message)}</p>
                    </div>
                  </div>
                `,
              )
              .join("") || renderEmpty("No messages yet", "Submit the form above to prove contact capture works.")}
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderAuth(mode) {
  const isSignup = mode === "signup";
  return `
    <main class="site-main">
      <section class="auth-shell">
        <div class="auth-brand">
          <img src="./assets/detox-phoenix-logo.png" alt="DETOX logo" />
          <p class="eyebrow gold-text">${isSignup ? "Create account" : "Welcome back"}</p>
          <h1>${isSignup ? "Join the BuildMatch network." : "Sign in to your BuildMatch workspace."}</h1>
          <p class="hero-lead">${isSignup ? "Create a demo account to personalize the header, contact form, and project workspace." : "The login is local for the prototype, but it behaves like a real product entry point."}</p>
        </div>
        <div class="auth-card">
          <h2>${isSignup ? "Create account" : "Sign in"}</h2>
          <div class="form-grid">
            ${isSignup ? '<input class="text-input" data-auth-name placeholder="Full name" />' : ""}
            <input class="text-input" data-auth-email placeholder="Email address" />
            <input class="text-input" data-auth-role placeholder="${isSignup ? "Preferred role, e.g. Frontend Engineer" : "Project role or community"}" />
            <button class="btn gold" data-action="${isSignup ? "submit-signup" : "submit-signin"}">${isSignup ? "Create account" : "Sign in"}</button>
            <button class="btn secondary" data-view="${isSignup ? "signin" : "signup"}">${isSignup ? "Already have an account" : "Create a new account"}</button>
          </div>
          ${state.authMessage ? `<p class="form-message">${escapeHtml(state.authMessage)}</p>` : ""}
        </div>
      </section>
    </main>
  `;
}

function renderFeed() {
  const { search, category, level } = state.filters;
  const filtered = opportunities.filter((opportunity) => {
    const text = `${opportunity.title} ${opportunity.summary} ${opportunity.skills.join(" ")}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory = category === "All" || opportunity.category === category;
    const matchesLevel = level === "All" || opportunity.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Opportunity feed</p>
          <h1>Find a build-worthy opportunity and turn it into a real team.</h1>
          <p class="lead">The platform starts with a practical feed for hackathons, projects, internships, and competitions. Each card carries enough context to decide whether to form a team.</p>
        </div>
        <button class="btn lime" data-action="open-featured">Open featured sprint</button>
      </div>
      ${renderMetricRow()}
      <section class="section">
        <div class="journey-snapshot">
          <div>
            <p class="eyebrow">Live pipeline</p>
            <h2>Discover, match, form, build, and showcase from one flow.</h2>
          </div>
          <div class="pipeline-map" aria-label="BuildMatch pipeline">
            ${stages
              .slice(0, 7)
              .map(
                (stage, index) => `
                  <div class="pipeline-node ${stageClass(stage.id, index)}">
                    <span>${index + 1}</span>
                    <strong>${escapeHtml(stage.label)}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="filter-row">
          <input class="search-input" data-filter="search" value="${escapeHtml(search)}" placeholder="Search skills, themes, or opportunities" />
          <select class="select-input" data-filter="category">
            ${["All", "Hackathon", "Competition", "Project", "Internship"].map((option) => `<option ${category === option ? "selected" : ""}>${option}</option>`).join("")}
          </select>
          <select class="select-input" data-filter="level">
            ${["All", "Beginner", "Intermediate", "Advanced"].map((option) => `<option ${level === option ? "selected" : ""}>${option}</option>`).join("")}
          </select>
          <button class="btn secondary" data-action="clear-filters">Clear</button>
        </div>
      </section>
      <section class="section">
        <div class="opportunity-radar">
          <div>
            <p class="eyebrow">Opportunity radar</p>
            <h2>Let BuildMatch surface the strongest launch path.</h2>
            <p class="muted">The radar combines deadline urgency, skill fit, team size, and showcase potential.</p>
          </div>
          <div class="radar-visual">
            <span style="--x:28%;--y:34%;--s:1.1">React</span>
            <span style="--x:65%;--y:28%;--s:0.92">Mentor</span>
            <span style="--x:48%;--y:62%;--s:1.28">Climate</span>
            <span style="--x:76%;--y:70%;--s:0.82">Pitch</span>
          </div>
          <button class="btn gold" data-action="smart-filter">Run smart scan</button>
        </div>
      </section>
      <section class="section">
        <div class="feed-grid">
          ${filtered.map(renderOpportunityCard).join("") || renderEmpty("No matching opportunities", "Try clearing filters or searching for React, data, climate, or portfolio.")}
        </div>
      </section>
    </main>
  `;
}

function renderOpportunityCard(opportunity) {
  return `
    <article class="card opportunity-card ${opportunity.featured ? "is-featured" : ""}">
      <div class="card-topline">
        ${badge(opportunity.category, opportunity.featured ? "dark" : "")}
        ${badge(`Due ${opportunity.deadline}`, opportunity.featured ? "lime" : "amber")}
      </div>
      <h2>${escapeHtml(opportunity.title)}</h2>
      <p>${escapeHtml(opportunity.summary)}</p>
      ${chipList(opportunity.skills.slice(0, 4), opportunity.featured ? "lime" : "")}
      <div class="opportunity-meta">
        <div class="meta-tile"><span>Level</span><strong>${escapeHtml(opportunity.level)}</strong></div>
        <div class="meta-tile"><span>Team</span><strong>${escapeHtml(opportunity.teamSize)}</strong></div>
        <div class="meta-tile"><span>Mode</span><strong>${escapeHtml(opportunity.location)}</strong></div>
        <div class="meta-tile"><span>Duration</span><strong>${escapeHtml(opportunity.duration)}</strong></div>
      </div>
      <div class="card-footer">
        <span class="muted small">${escapeHtml(opportunity.organizer)}</span>
        <button class="btn ${opportunity.featured ? "lime" : "secondary"}" data-action="select-opportunity" data-id="${opportunity.id}">Open</button>
      </div>
    </article>
  `;
}

function renderDetails() {
  const opportunity = selectedOpportunity();
  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">${escapeHtml(opportunity.category)} details</p>
          <h1>${escapeHtml(opportunity.title)}</h1>
          <p class="lead">${escapeHtml(opportunity.summary)}</p>
        </div>
        <div class="button-row">
          <button class="btn secondary" data-view="feed">Back to feed</button>
          <button class="btn lime" data-view="roles">Define roles</button>
        </div>
      </div>
      ${renderMetricRow()}
      <section class="section">
        <div class="media-grid">
          <div class="media-panel">
            <img src="./assets/opportunity-preview.png" alt="Abstract opportunity dashboard preview" />
          </div>
          <div class="panel section">
            <p class="eyebrow">Brief</p>
            <ul class="detail-list">
              <li><span>Organizer</span><strong>${escapeHtml(opportunity.organizer)}</strong></li>
              <li><span>Deadline</span><strong>${escapeHtml(opportunity.deadline)}</strong></li>
              <li><span>Team size</span><strong>${escapeHtml(opportunity.teamSize)} members</strong></li>
              <li><span>Output</span><strong>${escapeHtml(opportunity.output)}</strong></li>
              <li><span>Prize</span><strong>${escapeHtml(opportunity.prize)}</strong></li>
            </ul>
            <div class="mt-20">${chipList(opportunity.skills, "cyan")}</div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="media-grid">
          <div>
            <p class="eyebrow">Problem signal</p>
            <h2>Community ideas need a path from interest to execution.</h2>
            <p class="lead">${escapeHtml(opportunity.problem)}</p>
          </div>
          <div>
            <p class="eyebrow">Suggested roles</p>
            <div class="stack">
              ${opportunity.roles.map((role) => `<div class="roster-card"><div class="mini-avatar">${role.title.slice(0, 2).toUpperCase()}</div><div><strong>${escapeHtml(role.title)}</strong><div class="muted small">${escapeHtml(role.need)}</div></div>${badge(role.priority, role.priority === "Critical" ? "coral" : "amber")}</div>`).join("")}
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="blueprint-grid">
          <div class="blueprint-card">
            <span>01</span>
            <h3>MVP bet</h3>
            <p>Build a teammate-matching workflow that proves members can form a team faster than chat-based coordination.</p>
          </div>
          <div class="blueprint-card">
            <span>02</span>
            <h3>Demo proof</h3>
            <p>Show one opportunity turning into selected roles, accepted teammates, a workspace, mentor feedback, and showcase readiness.</p>
          </div>
          <div class="blueprint-card">
            <span>03</span>
            <h3>Impact metric</h3>
            <p>Track opportunity-to-team conversion, average time to form a team, and final project completion.</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderRoles() {
  const opportunity = selectedOpportunity();
  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Define needed roles</p>
          <h1>Select the gaps your project team needs covered.</h1>
          <p class="lead">BuildMatch turns the opportunity brief into role requirements, then lets the lead adjust which skills the matching engine should optimize for.</p>
        </div>
        <button class="btn lime" data-view="matches" ${state.selectedRoles.length === 0 ? "disabled" : ""}>Find teammates</button>
      </div>
      <section class="section">
        <div class="role-grid">
          ${opportunity.roles.map(renderRoleCard).join("")}
        </div>
      </section>
      <section class="section">
        <div class="role-optimizer">
          <div>
            <p class="eyebrow">Role optimizer</p>
            <h2>Recommended team shape</h2>
            <p class="muted">BuildMatch reads the opportunity and suggests a balanced sprint team.</p>
          </div>
          <div class="optimizer-meter">
            <div class="big-ring small-ring" style="--progress:${Math.min(100, state.selectedRoles.length * 25)}">
              <div>
                <strong>${Math.min(100, state.selectedRoles.length * 25)}%</strong>
                <span>coverage</span>
              </div>
            </div>
          </div>
          <div class="optimizer-stack">
            ${selectedRoles()
              .map((role) => `<div class="optimizer-item"><strong>${escapeHtml(role.title)}</strong><span>${escapeHtml(role.priority)} role</span></div>`)
              .join("") || renderEmpty("No roles selected", "Select at least one role to start matching.")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="mentor-box">
          <div>
            <h2 class="mb-0">You are already covering Product Lead.</h2>
            <p>BuildMatch recommends complementary teammates instead of duplicating your current role.</p>
          </div>
          ${badge("Lead locked", "lime")}
        </div>
      </section>
    </main>
  `;
}

function renderRoleCard(role) {
  const selected = state.selectedRoles.includes(role.id);
  const matches = members.filter((member) => member.targetRole === role.id).length;
  return `
    <article class="card role-card ${selected ? "is-selected" : ""}" data-action="toggle-role" data-id="${role.id}">
      <div class="role-head">
        <div>
          <div class="split">
            ${badge(role.priority, role.priority === "Critical" ? "coral" : "amber")}
          </div>
          <h2 class="mt-12">${escapeHtml(role.title)}</h2>
        </div>
        <button class="toggle" type="button" aria-label="${selected ? "Deselect" : "Select"} ${escapeHtml(role.title)}"></button>
      </div>
      <p class="muted">${escapeHtml(role.need)}</p>
      ${chipList(role.skills, selected ? "lime" : "")}
      <div class="split mt-16 small">
        <span>${matches} profile matches</span>
        <strong>${selected ? "Selected" : "Optional"}</strong>
      </div>
    </article>
  `;
}

function renderMatches() {
  const roles = selectedRoles();
  const roleIds = new Set(roles.map((role) => role.id));
  const requestedRole = state.matchRoleFilter || "All";
  const activeRole = requestedRole === "All" || roleIds.has(requestedRole) ? requestedRole : "All";
  const relevantMembers = members
    .filter((member) => roleIds.has(member.targetRole))
    .filter((member) => activeRole === "All" || member.targetRole === activeRole)
    .sort((a, b) => b.score - a.score);

  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Explainable teammate matches</p>
          <h1>Invite people because their evidence fits the role, not just a score.</h1>
          <p class="lead">Each recommendation shows matching skills, role coverage, availability, and why that person strengthens the project team.</p>
        </div>
        <div class="button-row">
          <button class="btn secondary" data-action="seed-invites">Auto-fill demo team</button>
          <button class="btn lime" data-view="team">Review team</button>
        </div>
      </div>
      <section class="section">
        <div class="match-toolbar">
          <div>
            <p class="eyebrow">Match focus</p>
            <h2 class="mb-0">${activeRole === "All" ? "All selected role gaps" : escapeHtml(roles.find((role) => role.id === activeRole)?.title || "Role gap")}</h2>
          </div>
          <div class="segmented-control" role="tablist" aria-label="Match role filter">
            <button class="segment ${activeRole === "All" ? "is-active" : ""}" data-action="match-filter" data-id="All">All</button>
            ${roles
              .map(
                (role) => `
                  <button class="segment ${activeRole === role.id ? "is-active" : ""}" data-action="match-filter" data-id="${role.id}">
                    ${escapeHtml(role.title.replace(" Engineer", "").replace(" Builder", ""))}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        ${renderMatchInspector(relevantMembers)}
      </section>
      <section class="section">
        <div class="match-grid">
          ${relevantMembers.map(renderMatchCard).join("") || renderEmpty("No roles selected", "Return to role definition and select at least one needed role.")}
        </div>
      </section>
    </main>
  `;
}

function renderMatchInspector(relevantMembers) {
  const inspected =
    relevantMembers.find((member) => member.id === state.inspectedMemberId) ||
    members.find((member) => member.id === state.inspectedMemberId) ||
    relevantMembers[0];
  if (!inspected) return renderEmpty("No match to inspect", "Select a role filter with available members.");
  return `
    <div class="match-inspector">
      <div>
        <p class="eyebrow">Explainability inspector</p>
        <h2>${escapeHtml(inspected.name)} strengthens ${escapeHtml(inspected.role)}</h2>
        <p class="muted">This turns the recommendation into something judges can trust and understand.</p>
      </div>
      <div class="inspector-bars">
        ${Object.entries(inspected.breakdown)
          .map(
            ([label, value]) => `
              <div class="fit-row">
                <span>${escapeHtml(label)}</span>
                <div class="fit-track"><span style="width:${value}%"></span></div>
                <span>${value}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="inspector-note">
        <strong>Why this is unique</strong>
        <p>${escapeHtml(inspected.reasons[0])}</p>
      </div>
    </div>
  `;
}

function renderMatchCard(member) {
  const status = state.invites[member.id] || "none";
  const statusTone = status === "accepted" ? "lime" : status === "invited" ? "amber" : "cyan";
  const action =
    status === "accepted"
      ? `<button class="btn secondary" data-action="remove-invite" data-id="${member.id}">Remove</button>`
      : status === "invited"
        ? `<button class="btn lime" data-action="accept-invite" data-id="${member.id}">Accept demo invite</button>`
        : `<button class="btn" data-action="invite" data-id="${member.id}">Invite</button>`;

  return `
    <article class="card match-card">
      <div class="match-head">
        <div class="match-avatar">${escapeHtml(member.initials)}</div>
        <div>
          <h2 class="match-title">${escapeHtml(member.name)}</h2>
          <p class="match-role">${escapeHtml(member.role)} - ${escapeHtml(member.availability)}</p>
        </div>
        <div class="score-ring" style="--score:${member.score}">${member.score}</div>
      </div>
      <div>${chipList(member.skills.slice(0, 4), "cyan")}</div>
      <ul class="reason-list">
        ${member.reasons.map((reason) => `<li><span class="reason-dot"></span><span>${escapeHtml(reason)}</span></li>`).join("")}
      </ul>
      <div class="fit-breakdown">
        ${Object.entries(member.breakdown)
          .map(
            ([label, value]) => `
              <div class="fit-row">
                <span>${escapeHtml(label)}</span>
                <div class="fit-track"><span style="width:${value}%"></span></div>
                <span>${value}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="split">
        ${badge(status === "none" ? "Recommended" : status, statusTone)}
        <div class="button-row">
          <button class="btn secondary" data-action="inspect-member" data-id="${member.id}">Inspect</button>
          ${action}
        </div>
      </div>
    </article>
  `;
}

function renderTeam() {
  const required = selectedRoles();
  const coverage = roleCoverage();
  const canCreate = acceptedMembers().length >= 2;
  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Team formation</p>
          <h1>Confirm coverage, then create a shared project workspace.</h1>
          <p class="lead">The product simulates the invitation and acceptance flow so judges can see how an idea becomes a project-ready team.</p>
        </div>
        <div class="button-row">
          <button class="btn secondary" data-action="seed-invites">Use seeded team</button>
          <button class="btn lime" data-action="create-workspace" ${canCreate ? "" : "disabled"}>${state.workspaceCreated ? "Open workspace" : "Create workspace"}</button>
        </div>
      </div>
      <section class="section">
        <div class="media-grid">
          <div>
            <h2>Roster</h2>
            <div class="team-roster">
              ${teamMembers().map(renderRosterCard).join("")}
              ${Array.from({ length: Math.max(0, 4 - teamMembers().length) })
                .map(
                  (_, index) => `
                    <div class="roster-card is-empty">
                      <div class="mini-avatar">+</div>
                      <div>
                        <strong>Open slot ${index + 1}</strong>
                        <div class="muted small">Invite or accept a recommended teammate</div>
                      </div>
                      ${badge("Open", "amber")}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div>
            <h2>Coverage Map</h2>
            <div class="stack">
              ${coverage
                .map(
                  (role) => `
                    <div class="card role-card ${role.covered ? "is-selected" : ""}">
                      <div class="split">
                        <h3>${escapeHtml(role.title)}</h3>
                        ${badge(role.covered ? "Covered" : "Gap", role.covered ? "lime" : "coral")}
                      </div>
                      <p class="muted">${escapeHtml(role.need)}</p>
                      ${chipList(role.skills)}
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>Pending Invites</h2>
        <div class="team-roster">
          ${members
            .filter((member) => state.invites[member.id] === "invited")
            .map(
              (member) => `
                <div class="roster-card">
                  <div class="mini-avatar">${escapeHtml(member.initials)}</div>
                  <div>
                    <strong>${escapeHtml(member.name)}</strong>
                    <div class="muted small">${escapeHtml(member.role)} - ${escapeHtml(member.timezone)}</div>
                  </div>
                  <button class="btn lime" data-action="accept-invite" data-id="${member.id}">Accept</button>
                </div>
              `,
            )
            .join("") || renderEmpty("No pending invites", "Invite matches or use the seeded demo team.")}
        </div>
      </section>
    </main>
  `;
}

function renderRosterCard(member) {
  return `
    <div class="roster-card">
      <div class="mini-avatar">${escapeHtml(member.initials)}</div>
      <div>
        <strong>${escapeHtml(member.name)}</strong>
        <div class="muted small">${escapeHtml(member.role)}</div>
        <div class="chip-row mt-12">${member.skills.slice(0, 3).map((skill) => badge(skill, "cyan")).join("")}</div>
      </div>
      ${badge(member.id === "you" ? "Lead" : "Accepted", member.id === "you" ? "dark" : "lime")}
    </div>
  `;
}

function renderWorkspace() {
  const progress = taskProgress();
  const doingTasks = state.tasks.filter((task) => !task.done);
  const doneTasks = state.tasks.filter((task) => task.done);
  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Project workspace</p>
          <h1>Tasks, milestones, role ownership, and mentor requests in one build room.</h1>
          <p class="lead">The workspace is created from the team formation flow and gives the team a shared place to move from idea to submission.</p>
        </div>
        <button class="btn lime" data-view="progress">Open showcase</button>
      </div>
      <section class="section">
        <div class="mentor-box">
          <div>
            <h2 class="mb-0">Climate + Campus Build Sprint workspace</h2>
            <p>${teamMembers().length} members, ${state.tasks.length} tasks, ${progress}% readiness</p>
          </div>
          ${badge(state.workspaceCreated ? "Workspace live" : "Preview", state.workspaceCreated ? "lime" : "amber")}
        </div>
      </section>
      <section class="section">
        ${renderWorkspaceTabs()}
        <div class="workspace-tab-body">
          ${renderWorkspaceBody(doingTasks, doneTasks)}
        </div>
      </section>
    </main>
  `;
}

function renderWorkspaceTabs() {
  const tabs = [
    { id: "board", label: "Task board" },
    { id: "milestones", label: "Milestones" },
    { id: "mentor", label: "Mentor review" },
    { id: "activity", label: "Activity" },
  ];
  return `
    <div class="workspace-tabs" role="tablist" aria-label="Workspace views">
      ${tabs
        .map(
          (tab) => `
            <button class="tab-btn ${state.workspaceTab === tab.id ? "is-active" : ""}" data-action="workspace-tab" data-id="${tab.id}">
              ${escapeHtml(tab.label)}
            </button>
          `,
        )
        .join("")}
      <button class="btn secondary" data-action="next-step">${escapeHtml(workspaceNextLabel())}</button>
    </div>
  `;
}

function renderWorkspaceBody(doingTasks, doneTasks) {
  if (state.workspaceTab === "milestones") return renderMilestonePanel();
  if (state.workspaceTab === "mentor") return renderMentorPanel();
  if (state.workspaceTab === "activity") return renderActivityPanel();
  return renderTaskBoard(doingTasks, doneTasks);
}

function renderTaskBoard(doingTasks, doneTasks) {
  return `
    <div class="task-form">
      <input class="text-input" data-task-title placeholder="Add a task for the team" />
      <select class="select-input" data-task-owner>
        ${teamMembers().map((member) => `<option>${escapeHtml(member.name)}</option>`).join("")}
      </select>
      <button class="btn" data-action="add-task">Add task</button>
    </div>
    <div class="task-grid mt-16">
      <div class="task-column">
        <div class="split">
          <h2 class="mb-0">Active</h2>
          ${badge(`${doingTasks.length} tasks`, "amber")}
        </div>
        <div class="task-list">
          ${doingTasks.map(renderTask).join("") || renderEmpty("No active tasks", "Add a task or reopen a completed item.")}
        </div>
      </div>
      <div class="task-column">
        <div class="split">
          <h2 class="mb-0">Done</h2>
          ${badge(`${doneTasks.length} tasks`, "lime")}
        </div>
        <div class="task-list">
          ${doneTasks.map(renderTask).join("") || renderEmpty("No completed tasks yet", "Complete active work to increase readiness.")}
        </div>
      </div>
    </div>
  `;
}

function renderMilestonePanel() {
  return `
    <div class="split">
      <div>
        <p class="eyebrow">Delivery plan</p>
        <h2 class="mb-0">Milestones</h2>
      </div>
      <button class="btn secondary" data-action="complete-next-milestone">Complete next milestone</button>
    </div>
    <div class="milestone-grid mt-16">
      ${state.milestones.map(renderMilestone).join("")}
    </div>
  `;
}

function renderMentorPanel() {
  return `
    <div class="mentor-grid">
      <div class="mentor-box">
        <div>
          <h2 class="mb-0">Mentor Feedback</h2>
          <p>${mentorStatusText()}</p>
          <div class="chip-row mt-12">
            ${mentors.map((mentor) => badge(`${mentor.name}: ${mentor.focus}`)).join("")}
          </div>
        </div>
        ${renderMentorAction()}
      </div>
      <div class="card mentor-note-card">
        <p class="eyebrow">Review note</p>
        <textarea class="mentor-textarea" data-mentor-note>${escapeHtml(state.mentorNote)}</textarea>
        <div class="split mt-12">
          <span class="muted small">Saved locally for this demo</span>
          <button class="btn secondary" data-action="save-mentor-note">Save note</button>
        </div>
      </div>
    </div>
  `;
}

function renderActivityPanel() {
  return `
    <div class="activity-panel">
      <div>
        <p class="eyebrow">Project log</p>
        <h2>Recent activity</h2>
      </div>
      <div class="activity-list">
        ${(state.activity || [])
          .map(
            (item) => `
              <div class="activity-item">
                <span>${escapeHtml(item.time)}</span>
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.body)}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderTask(task) {
  return `
    <article class="task-item ${task.done ? "is-done" : ""}" data-action="toggle-task" data-id="${task.id}">
      <button class="task-check" type="button" aria-label="${task.done ? "Reopen" : "Complete"} ${escapeHtml(task.title)}">OK</button>
      <div>
        <p class="task-title">${escapeHtml(task.title)}</p>
        <p class="task-meta">${escapeHtml(task.owner)} - due ${escapeHtml(task.due)}</p>
      </div>
      ${badge(task.done ? "Done" : task.lane, task.done ? "lime" : "amber")}
    </article>
  `;
}

function renderMilestone(milestone, index) {
  const activeIndex = state.milestones.findIndex((item) => !item.done);
  const active = activeIndex === index;
  return `
    <article class="card milestone-card ${milestone.done ? "is-done" : ""} ${active ? "is-active" : ""}">
      <div class="split">
        ${badge(milestone.done ? "Done" : active ? "Active" : "Next", milestone.done ? "lime" : active ? "amber" : "cyan")}
        <span class="muted small">${escapeHtml(milestone.due)}</span>
      </div>
      <h3 class="mt-16">${escapeHtml(milestone.title)}</h3>
      <p class="muted">${milestone.done ? "Completed and counted toward project readiness." : "Still needed before the final showcase."}</p>
      <button class="btn secondary" data-action="toggle-milestone" data-id="${milestone.id}">${milestone.done ? "Reopen" : "Complete"}</button>
    </article>
  `;
}

function mentorStatusText() {
  if (state.mentorRequest === "resolved") return "Mentor review completed. Feedback has been folded into the demo flow and KPI story.";
  if (state.mentorRequest === "sent") return "Mentor request sent to the DETOX reviewer pool. The team is waiting on demo feedback.";
  return "Request a mentor review once the MVP path is visible and the team has an early demo narrative.";
}

function renderMentorAction() {
  if (state.mentorRequest === "resolved") {
    return `<button class="btn secondary" data-action="reset-mentor">Reopen</button>`;
  }
  if (state.mentorRequest === "sent") {
    return `<button class="btn lime" data-action="resolve-mentor">Mark reviewed</button>`;
  }
  return `<button class="btn lime" data-action="request-mentor">Request mentor</button>`;
}

function renderProgress() {
  const progress = taskProgress();
  const doneMilestones = state.milestones.filter((milestone) => milestone.done).length;
  const completeTasks = state.tasks.filter((task) => task.done).length;
  return `
    <main class="content-panel">
      <div class="view-header">
        <div>
          <p class="eyebrow">Progress and showcase</p>
          <h1>Turn activity into proof for organizers, mentors, and judges.</h1>
          <p class="lead">The final screen shows completion status, mentor activity, project evidence, and the submission-ready showcase card.</p>
        </div>
        <button class="btn lime" data-action="submit-showcase">${state.showcaseSubmitted ? "Showcase submitted" : "Submit showcase"}</button>
      </div>
      <section class="section">
        <div class="progress-hero">
          <div class="progress-score">
            <div class="big-ring" style="--progress:${progress}">
              <div>
                <strong>${progress}%</strong>
                <span>project readiness</span>
              </div>
            </div>
          </div>
          <div class="screenshot-card">
            <img src="./assets/showcase-preview.png" alt="Abstract project progress preview" />
          </div>
        </div>
      </section>
      <section class="section">
        <div class="kpi-grid">
          <div class="card kpi-card"><span>Opportunity-to-team</span><strong>${acceptedMembers().length >= 2 ? "100%" : "42%"}</strong><p class="muted mb-0">Critical roles covered by accepted teammates.</p></div>
          <div class="card kpi-card"><span>Milestones</span><strong>${doneMilestones}/${state.milestones.length}</strong><p class="muted mb-0">Team progress tracked from formation to showcase.</p></div>
          <div class="card kpi-card"><span>Tasks</span><strong>${completeTasks}/${state.tasks.length}</strong><p class="muted mb-0">Visible ownership across active work.</p></div>
        </div>
      </section>
      <section class="section">
        <div class="launch-pack">
          <div>
            <p class="eyebrow">Launch pack</p>
            <h2>Generate the final judging packet.</h2>
            <p class="muted">This simulates what a finished BuildMatch project could auto-create for submissions: summary, proof, team, mentor notes, and KPIs.</p>
          </div>
          <button class="btn gold" data-action="generate-pack">${state.showcasePackReady ? "Pack ready" : "Generate pack"}</button>
          <div class="pack-grid">
            ${["Project summary", "Team roster", "Milestone proof", "Mentor review", "Impact KPIs", "Showcase status"]
              .map((item, index) => `<div class="pack-item ${state.showcasePackReady || index < 3 ? "is-ready" : ""}"><strong>${escapeHtml(item)}</strong><span>${state.showcasePackReady || index < 3 ? "Ready" : "Pending"}</span></div>`)
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="showcase-grid">
          <article class="card showcase-card">
            <div class="split">
              ${badge(state.showcaseSubmitted ? "Submitted" : "Draft", state.showcaseSubmitted ? "lime" : "amber")}
              ${badge("DETOX Build", "dark")}
            </div>
            <h3 class="mt-16">Campus Action Matchroom</h3>
            <p class="lead">A workflow that helps students discover a climate opportunity, define roles, match with teammates, create a workspace, and request mentor feedback before submission.</p>
            <div class="chip-row mt-16">
              ${["Working MVP", "Team formed", "Mentor reviewed", "Impact KPI"].map((item, index) => badge(item, ["lime", "cyan", "amber", "coral"][index])).join("")}
            </div>
            <div class="button-row mt-20">
              <button class="btn" data-view="workspace">Open workspace</button>
              <button class="btn secondary" data-action="complete-demo">Complete demo state</button>
            </div>
          </article>
          <div class="screenshot-card">
            <img src="./assets/journey-map.png" alt="Opportunity to showcase journey map" />
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderEmpty(title, body) {
  return `
    <div class="empty-state">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
    </div>
  `;
}

function renderContent() {
  if (state.view === "home") return renderHome();
  if (state.view === "about") return renderAbout();
  if (state.view === "contact") return renderContact();
  if (state.view === "signin") return renderAuth("signin");
  if (state.view === "signup") return renderAuth("signup");
  if (state.view === "details") return renderDetails();
  if (state.view === "roles") return renderRoles();
  if (state.view === "matches") return renderMatches();
  if (state.view === "team") return renderTeam();
  if (state.view === "workspace") return renderWorkspace();
  if (state.view === "progress") return renderProgress();
  return renderFeed();
}

function render() {
  if (ambientCleanup) {
    ambientCleanup();
    ambientCleanup = null;
  }
  const marketingViews = new Set(["home", "about", "contact", "signin", "signup"]);
  const body =
    marketingViews.has(state.view)
      ? renderContent()
      : `
        <div class="layout">
          ${renderSidePanel()}
          ${renderContent()}
          ${renderContextPanel()}
        </div>
      `;

  app.innerHTML = `
    <div class="app-shell">
      ${renderAmbientLayer()}
      ${renderTopbar()}
      ${body}
      ${renderFooter()}
      <div class="toast" role="status" aria-live="polite"></div>
    </div>
  `;
  ambientCleanup = initAmbientCanvas();
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div>
        <div class="brand footer-brand">
          <img class="brand-logo" src="./assets/detox-phoenix-logo.png" alt="DETOX logo" />
          <div>
            <p class="brand-title">DETOX</p>
            <p class="brand-subtitle">BuildMatch</p>
          </div>
        </div>
        <p>Turning community opportunities into project-ready teams.</p>
      </div>
      <div>
        <strong>Product</strong>
        <button data-view="feed">Opportunities</button>
        <button data-view="matches">Matching</button>
        <button data-view="workspace">Workspace</button>
      </div>
      <div>
        <strong>Company</strong>
        <button data-view="about">About</button>
        <button data-view="contact">Contact</button>
        <button data-view="signup">Create account</button>
      </div>
      <div>
        <strong>Demo</strong>
        <button data-action="auto-demo">Guided demo</button>
        <button data-view="progress">Showcase</button>
        <button data-action="reset">Reset state</button>
      </div>
    </footer>
  `;
}

function renderAmbientLayer() {
  return `
    <div class="ambient-layer" aria-hidden="true" data-ambient>
      <canvas class="ambient-canvas" data-ambient-canvas></canvas>
      <svg class="feather-field" viewBox="0 0 1440 920" preserveAspectRatio="none">
        <path class="feather-line line-a" d="M-80 720 C 180 520, 300 220, 640 330 S 1070 610, 1520 170" />
        <path class="feather-line line-b" d="M-80 180 C 230 350, 400 650, 780 520 S 1090 170, 1520 420" />
        <path class="feather-line line-c" d="M130 980 C 280 690, 460 540, 740 610 S 1120 780, 1380 -80" />
        <path class="feather-line line-d" d="M220 -100 C 350 180, 560 250, 770 180 S 1100 70, 1290 420" />
      </svg>
      <div class="horizon-grid"></div>
    </div>
  `;
}

function initAmbientCanvas() {
  const canvas = document.querySelector("[data-ambient-canvas]");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  const ctx = canvas.getContext("2d");
  const pointer = { x: 0.72, y: 0.28, active: false };
  let width = 0;
  let height = 0;
  let frame = 0;
  let raf = 0;
  let particles = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(34, Math.min(84, Math.round(width / 22)));
    particles = Array.from({ length: count }, (_, index) => createParticle(index, count));
  }

  function createParticle(index, count) {
    const band = index / Math.max(count - 1, 1);
    return {
      baseX: width * (0.06 + ((index * 0.618) % 0.88)),
      baseY: height * (0.12 + ((index * 0.381) % 0.76)),
      x: 0,
      y: 0,
      size: 1.2 + (index % 4) * 0.42,
      speed: 0.45 + (index % 7) * 0.05,
      phase: band * Math.PI * 2,
      tone: index % 3,
    };
  }

  function draw(now) {
    frame = now * 0.001;
    ctx.clearRect(0, 0, width, height);

    const focalX = width * pointer.x;
    const focalY = height * pointer.y;
    particles.forEach((particle, index) => {
      const wave = Math.sin(frame * particle.speed + particle.phase);
      const drift = Math.cos(frame * (particle.speed * 0.72) + particle.phase * 1.7);
      particle.x = particle.baseX + wave * 34 + drift * 18;
      particle.y = particle.baseY + drift * 28 + Math.sin(frame * 0.34 + index) * 10;

      const pull = pointer.active ? 0.024 : 0.01;
      particle.x += (focalX - particle.x) * pull;
      particle.y += (focalY - particle.y) * pull;
    });

    drawConnections();
    drawCometTrail(focalX, focalY);
    particles.forEach(drawParticle);
    raf = requestAnimationFrame(draw);
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 130) continue;
        const alpha = (1 - distance / 130) * 0.16;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${a.tone === 0 ? "217,163,58" : "31,107,193"},${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function drawParticle(particle) {
    const colors = [
      "rgba(217,163,58,0.78)",
      "rgba(31,107,193,0.5)",
      "rgba(11,42,95,0.38)",
    ];
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = colors[particle.tone];
    ctx.fill();
  }

  function drawCometTrail(x, y) {
    const length = Math.min(width, 760);
    const gradient = ctx.createLinearGradient(x - length * 0.45, y + 90, x + length * 0.45, y - 90);
    gradient.addColorStop(0, "rgba(31,107,193,0)");
    gradient.addColorStop(0.48, "rgba(31,107,193,0.14)");
    gradient.addColorStop(0.52, "rgba(217,163,58,0.24)");
    gradient.addColorStop(1, "rgba(217,163,58,0)");
    ctx.beginPath();
    ctx.moveTo(x - length * 0.48, y + 72);
    ctx.bezierCurveTo(x - 120, y - 90, x + 140, y + 130, x + length * 0.48, y - 72);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2.4;
    ctx.stroke();
  }

  function onPointerMove(event) {
    pointer.x = event.clientX / Math.max(window.innerWidth, 1);
    pointer.y = event.clientY / Math.max(window.innerHeight, 1);
    pointer.active = true;
  }

  function onPointerLeave() {
    pointer.active = false;
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerleave", onPointerLeave);
  raf = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerleave", onPointerLeave);
  };
}

function updateFilter(target) {
  const key = target.dataset.filter;
  if (!key) return;
  state.filters[key] = target.value;
  saveState();
  render();
}

function seedInvites() {
  state.invites.maya = "accepted";
  state.invites.ishaan = "accepted";
  if (state.selectedRoles.includes("design")) state.invites.zara = "accepted";
  addActivity("Seeded team accepted", "Maya, Ishaan, and Zara joined the project team for the demo.");
  saveState();
  showToast("Team seeded", "Maya, Ishaan, and Zara accepted the demo invites.");
  render();
}

function completeDemo() {
  state.invites.maya = "accepted";
  state.invites.ishaan = "accepted";
  if (state.selectedRoles.includes("design")) state.invites.zara = "accepted";
  state.workspaceCreated = true;
  state.mentorRequest = "resolved";
  state.showcaseSubmitted = true;
  state.showcasePackReady = true;
  state.tasks = state.tasks.map((task) => ({ ...task, done: true, lane: "Done" }));
  state.milestones = state.milestones.map((milestone) => ({ ...milestone, done: true }));
  state.view = "progress";
  addActivity("Showcase submitted", "The complete BuildMatch journey is ready for final judging.");
  saveState();
  showToast("Demo completed", "The end-to-end journey is now in a submitted showcase state.");
  render();
}

function completeNextMilestone() {
  const next = state.milestones.find((milestone) => !milestone.done);
  if (!next) {
    showToast("Milestones complete", "All milestones are already done.");
    return;
  }
  next.done = true;
  addActivity("Milestone completed", next.title);
  saveState();
  showToast("Milestone completed", next.title);
  render();
}

function addTask() {
  const titleInput = document.querySelector("[data-task-title]");
  const ownerInput = document.querySelector("[data-task-owner]");
  const title = titleInput?.value.trim();
  const owner = ownerInput?.value || "You";
  if (!title) {
    showToast("Task needs a title", "Add a short task name before saving.");
    return;
  }
  state.tasks.unshift({
    id: `task-${Date.now()}`,
    title,
    owner,
    lane: "Next",
    done: false,
    due: "Next sprint",
  });
  addActivity("Task added", `${title} was assigned to ${owner}.`);
  saveState();
  showToast("Task added", `${title} is now in the active queue.`);
  render();
}

function submitSignup() {
  const name = document.querySelector("[data-auth-name]")?.value.trim();
  const email = document.querySelector("[data-auth-email]")?.value.trim();
  const role = document.querySelector("[data-auth-role]")?.value.trim() || "Community builder";
  if (!name || !email) {
    state.authMessage = "Add your name and email to create the demo account.";
    saveState();
    render();
    return;
  }
  state.currentUser = { name, email, role, initials: initialsFromName(name) };
  state.authMessage = "";
  addActivity("Account created", `${name} joined as ${role}.`);
  saveState();
  showToast("Account created", "Your demo account is active in the header.");
  setView("feed");
}

function submitSignin() {
  const email = document.querySelector("[data-auth-email]")?.value.trim();
  const role = document.querySelector("[data-auth-role]")?.value.trim() || "Project lead";
  if (!email) {
    state.authMessage = "Enter an email address to sign in.";
    saveState();
    render();
    return;
  }
  const name = email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Demo User";
  state.currentUser = { name, email, role, initials: initialsFromName(name) };
  state.authMessage = "";
  addActivity("Signed in", `${name} opened the BuildMatch workspace.`);
  saveState();
  showToast("Signed in", "Your demo session is active.");
  setView("feed");
}

function submitContact() {
  const name = document.querySelector("[data-contact-name]")?.value.trim();
  const email = document.querySelector("[data-contact-email]")?.value.trim();
  const type = document.querySelector("[data-contact-type]")?.value || "Community pilot";
  const message = document.querySelector("[data-contact-message]")?.value.trim();
  if (!name || !email || !message) {
    showToast("Contact form incomplete", "Add your name, email, and message before submitting.");
    return;
  }
  state.contactMessages = [
    { name, email, type, message, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ...(state.contactMessages || []),
  ].slice(0, 6);
  addActivity("Contact inquiry captured", `${name} submitted a ${type.toLowerCase()} inquiry.`);
  saveState();
  showToast("Message saved", "The contact inquiry is now visible on the page.");
  render();
}

function signOut() {
  const name = state.currentUser?.name || "User";
  state.currentUser = null;
  state.authMessage = "";
  addActivity("Signed out", `${name} ended the demo session.`);
  saveState();
  showToast("Signed out", "The website returned to visitor mode.");
  render();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, .role-card, .task-item");
  if (!target) return;

  const view = target.dataset.view;
  if (view) {
    setView(view);
    return;
  }

  const action = target.dataset.action;
  const id = target.dataset.id;

  if (action === "reset") resetState();
  if (action === "submit-signup") submitSignup();
  if (action === "submit-signin") submitSignin();
  if (action === "sign-out") signOut();
  if (action === "submit-contact") submitContact();
  if (action === "next-step") runNextStep();
  if (action === "auto-demo") startAutoDemo();
  if (action === "open-featured") setView("details");
  if (action === "clear-filters") {
    state.filters = { search: "", category: "All", level: "All" };
    saveState();
    render();
  }
  if (action === "smart-filter") {
    state.filters = { search: "climate", category: "Hackathon", level: "Intermediate" };
    state.selectedOpportunityId = "climate-campus-sprint";
    addActivity("Opportunity radar scan", "The radar highlighted the Climate + Campus Build Sprint as the strongest demo path.");
    saveState();
    showToast("Smart scan complete", "The strongest hackathon path is now filtered in the feed.");
    render();
  }
  if (action === "select-opportunity") {
    state.selectedOpportunityId = id;
    state.view = "details";
    addActivity("Opportunity opened", `${selectedOpportunity().title} was opened from the company opportunity feed.`);
    saveState();
    render();
  }
  if (action === "toggle-role") {
    const exists = state.selectedRoles.includes(id);
    state.selectedRoles = exists ? state.selectedRoles.filter((roleId) => roleId !== id) : [...state.selectedRoles, id];
    addActivity(exists ? "Role removed" : "Role selected", `${id} coverage was ${exists ? "removed from" : "added to"} the match brief.`);
    saveState();
    render();
  }
  if (action === "match-filter") {
    state.matchRoleFilter = id;
    saveState();
    render();
  }
  if (action === "inspect-member") {
    state.inspectedMemberId = id;
    saveState();
    render();
  }
  if (action === "invite") {
    state.invites[id] = "invited";
    addActivity("Invite sent", `${members.find((member) => member.id === id)?.name || "A match"} was invited to the project.`);
    saveState();
    showToast("Invite sent", "The member can now accept the team request.");
    render();
  }
  if (action === "accept-invite") {
    state.invites[id] = "accepted";
    addActivity("Invite accepted", `${members.find((member) => member.id === id)?.name || "A teammate"} joined the team.`);
    saveState();
    showToast("Invite accepted", "Role coverage has been updated.");
    render();
  }
  if (action === "remove-invite") {
    addActivity("Member removed", `${members.find((member) => member.id === id)?.name || "A teammate"} was removed from the roster.`);
    delete state.invites[id];
    saveState();
    showToast("Member removed", "The role is open again for matching.");
    render();
  }
  if (action === "seed-invites") seedInvites();
  if (action === "create-workspace") {
    if (acceptedMembers().length < 2) return;
    state.workspaceCreated = true;
    state.view = "workspace";
    state.workspaceTab = "board";
    addActivity("Workspace created", "The team now has shared tasks, milestones, and mentor review tools.");
    saveState();
    showToast("Workspace created", "Tasks, milestones, and mentor requests are ready.");
    render();
  }
  if (action === "workspace-tab") {
    state.workspaceTab = id;
    saveState();
    render();
  }
  if (action === "toggle-task") {
    const task = state.tasks.find((item) => item.id === id);
    if (task) {
      task.done = !task.done;
      task.lane = task.done ? "Done" : "Doing";
      addActivity(task.done ? "Task completed" : "Task reopened", task.title);
      saveState();
      render();
    }
  }
  if (action === "add-task") addTask();
  if (action === "toggle-milestone") {
    const milestone = state.milestones.find((item) => item.id === id);
    if (milestone) {
      milestone.done = !milestone.done;
      addActivity(milestone.done ? "Milestone completed" : "Milestone reopened", milestone.title);
      saveState();
      render();
    }
  }
  if (action === "complete-next-milestone") completeNextMilestone();
  if (action === "request-mentor") {
    state.mentorRequest = "sent";
    addActivity("Mentor requested", "The team asked for feedback on demo clarity and product scope.");
    saveState();
    showToast("Mentor request sent", "The team asked for a demo and product-scope review.");
    render();
  }
  if (action === "resolve-mentor") {
    state.mentorRequest = "resolved";
    addActivity("Mentor review resolved", "Feedback is now reflected in the demo flow and showcase story.");
    saveState();
    showToast("Mentor review completed", "Progress and showcase readiness increased.");
    render();
  }
  if (action === "reset-mentor") {
    state.mentorRequest = "none";
    addActivity("Mentor request reopened", "The mentor review status was reset.");
    saveState();
    render();
  }
  if (action === "save-mentor-note") {
    state.mentorNote = document.querySelector("[data-mentor-note]")?.value.trim() || defaultState.mentorNote;
    addActivity("Mentor note saved", "The review request note was updated.");
    saveState();
    showToast("Mentor note saved", "Your review context is saved in the demo state.");
    render();
  }
  if (action === "submit-showcase") {
    completeDemo();
  }
  if (action === "generate-pack") {
    state.showcasePackReady = true;
    addActivity("Launch pack generated", "The final judging packet is ready with summary, team, mentor review, and KPIs.");
    saveState();
    showToast("Launch pack ready", "The showcase packet is ready for judges.");
    render();
  }
  if (action === "complete-demo") completeDemo();
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-filter]")) {
    updateFilter(event.target);
  }
  if (event.target.matches("[data-impact]")) {
    state[event.target.dataset.impact] = Number(event.target.value);
    saveState();
    render();
  }
});

render();
