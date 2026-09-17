export interface TeamStanding {
  rank: number;
  totalTeams: number;
  totalScore: number;
  gapToFirst: number;
  weeklyGrowth: number; // percentage
  topContributor: {
    name: string;
    points: number;
    avatarUrl: string;
  };
  weeklyProgression: {
    week: string;
    title: string;
    points: number;
    target: number;
    status: "completed" | "current" | "upcoming";
  }[];
  categoryBreakdown: {
    category: string;
    points: number;
    percentage: number;
  }[];
}

export interface AchievementSubmission {
  id: string;
  memberName: string;
  department: string;
  team: string;
  achievedOn: string;
  details: string;
  proofUrl: string;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  activityTitle: string;
  points: number;
  submittedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

export const INITIAL_STANDING: TeamStanding = {
  rank: 1,
  totalTeams: 14,
  totalScore: 2120,
  gapToFirst: 0,
  weeklyGrowth: 28.4,
  topContributor: {
    name: "Kaelen Voss",
    points: 430,
    avatarUrl: "/avatars/avatar_3.png",
  },
  weeklyProgression: [
    {
      week: "Week 1",
      title: "Identity, 3D Jewel & Foundation Dashboard",
      points: 980,
      target: 800,
      status: "completed",
    },
    {
      week: "Week 2",
      title: "Open Source Contributions & Upstream Sync",
      points: 1140,
      target: 1000,
      status: "current",
    },
    {
      week: "Week 3",
      title: "Autonomous Agents & High-Throughput Ingestion",
      points: 0,
      target: 1200,
      status: "upcoming",
    },
    {
      week: "Week 4",
      title: "Grand Tech Showcase & Final Evaluation",
      points: 0,
      target: 1500,
      status: "upcoming",
    },
  ],
  categoryBreakdown: [
    { category: "Technical & WebGL", points: 910, percentage: 43 },
    { category: "Design & Pixel Art", points: 480, percentage: 23 },
    { category: "R&D & Algorithms", points: 340, percentage: 16 },
    { category: "PR & Community", points: 210, percentage: 10 },
    { category: "Event & Social", points: 180, percentage: 8 },
  ],
};

// Official Canonical 27 Activities from BACKEND.md
export const CANONICAL_ACTIVITIES = [
  { id: "act-1", title: "Open Source PR Merged", category: "Individual", points: 60 },
  { id: "act-2", title: "Open Source PR Raised", category: "Individual", points: 25 },
  { id: "act-3", title: "Technical Architecture Sign-off", category: "Team Activity", points: 100 },
  { id: "act-4", title: "3D WebGL / Shader Feature Implementation", category: "Individual", points: 80 },
  { id: "act-5", title: "Weekly Challenge Submission", category: "Sprint Track", points: 50 },
  { id: "act-6", title: "DSA Monthly Streak (30/30)", category: "Individual", points: 80 },
  { id: "act-7", title: "DSA Weekly Streak (7/7)", category: "Individual", points: 35 },
  { id: "act-8", title: "Technical Blog Publication", category: "Individual", points: 50 },
  { id: "act-9", title: "Tech Talk / Engineering Demo", category: "Individual", points: 40 },
  { id: "act-10", title: "Hackathon 1st Place", category: "Bonus", points: 50 },
  { id: "act-11", title: "Hackathon 2nd Place", category: "Bonus", points: 35 },
  { id: "act-12", title: "Hackathon 3rd Place", category: "Bonus", points: 20 },
  { id: "act-13", title: "Sprint Track Winner", category: "Sprint Track", points: 30 },
  { id: "act-14", title: "Sprint Track Runner-up", category: "Sprint Track", points: 15 },
  { id: "act-15", title: "Sprint Track Participation", category: "Sprint Track", points: 8 },
  { id: "act-16", title: "Full Track Streak Completed", category: "Sprint Track", points: 25 },
  { id: "act-17", title: "Meetup Attendance & Knowledge Sharing", category: "Team Activity", points: 10 },
  { id: "act-18", title: "Major Project Milestone Shipped", category: "Team Activity", points: 150 },
  { id: "act-19", title: "Research Paper / RFC Authored", category: "Individual", points: 100 },
  { id: "act-20", title: "Design System Tokens Specification", category: "Individual", points: 70 },
  { id: "act-21", title: "High-Fidelity Voxel / Sprite Catalog", category: "Individual", points: 90 },
  { id: "act-22", title: "Database Migration & Index Tuning", category: "Individual", points: 65 },
  { id: "act-23", title: "Telemetry & Metric Visualizer Pipeline", category: "Individual", points: 75 },
  { id: "act-24", title: "Public Relations Outreach Campaign", category: "Individual", points: 45 },
  { id: "act-25", title: "Community Sprint Event Organized", category: "Team Activity", points: 40 },
  { id: "act-26", title: "Security Audit & Role Verification Spec", category: "Individual", points: 55 },
  { id: "act-27", title: "Grand Sprint Showcase Milestone", category: "Team Activity", points: 250 },
];

export const INITIAL_SUBMISSIONS: AchievementSubmission[] = [
  {
    id: "sub-101",
    memberName: "Kaelen Voss",
    department: "Technical",
    team: "Nexus",
    achievedOn: "2026-09-22",
    details: "Merged upstream PR #142 into AARVAK core: optimized Three.js canvas draw calls by 42% on mobile.",
    proofUrl: "/logo/official_jewel.png",
    status: "PENDING",
    activityTitle: "Open Source PR Merged",
    points: 60,
    submittedAt: "10 mins ago",
  },
  {
    id: "sub-102",
    memberName: "Mei-Ling Chen",
    department: "Design",
    team: "Nexus",
    achievedOn: "2026-09-22",
    details: "Authored and shipped the 29-sprite handcrafted pixel iconography engine with integer crispEdges.",
    proofUrl: "/logo/monochrome_jewel.png",
    status: "PENDING",
    activityTitle: "High-Fidelity Voxel / Sprite Catalog",
    points: 90,
    submittedAt: "45 mins ago",
  },
  {
    id: "sub-103",
    memberName: "Tariq Al-Mansoor",
    department: "Technical",
    team: "Nexus",
    achievedOn: "2026-09-21",
    details: "Resolved CUID vs UUID schema conflict in PostgreSQL stored procedure submit_achievement.",
    proofUrl: "/logo/runner_bg.png",
    status: "VERIFIED",
    activityTitle: "Database Migration & Index Tuning",
    points: 65,
    submittedAt: "Yesterday",
    reviewedBy: "Arjun Mehta (Lead)",
    reviewedAt: "Yesterday, 19:40",
  },
  {
    id: "sub-104",
    memberName: "Siddharth Rao",
    department: "Technical",
    team: "Nexus",
    achievedOn: "2026-09-20",
    details: "Implemented stateful 8-bit auto-runner login game with physics simulation and crash particle burst.",
    proofUrl: "/logo/runner_bg.png",
    status: "VERIFIED",
    activityTitle: "3D WebGL / Shader Feature Implementation",
    points: 80,
    submittedAt: "2 days ago",
    reviewedBy: "Dr. Elena Rostova (Advisor)",
    reviewedAt: "2 days ago, 11:15",
  },
  {
    id: "sub-105",
    memberName: "Kenji Sato",
    department: "Social",
    team: "Nexus",
    achievedOn: "2026-09-19",
    details: "Draft thread on technical sprint metrics rejected due to missing verifiable proof link.",
    proofUrl: "/logo/monochromatic_logo.png",
    status: "REJECTED",
    activityTitle: "Public Relations Outreach Campaign",
    points: 45,
    submittedAt: "3 days ago",
    reviewedBy: "Arjun Mehta (Lead)",
    reviewedAt: "3 days ago, 16:30",
    rejectionReason: "Proof URL did not link to published external artifact. Re-submit with active tweet / post link.",
  },
];
