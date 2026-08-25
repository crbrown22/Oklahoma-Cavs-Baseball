import { Player, Coach, Facility, GameSchedule, FAQItem, GalleryPhoto, DevelopmentPillar, BenedictineValue, RecruitingStep } from '../types';

export const CAVALIER_PILLARS: DevelopmentPillar[] = [
  {
    id: 'baseball',
    number: '01',
    title: 'Baseball Skills & IQ',
    shortTitle: 'Baseball',
    tagline: 'Position Mastery & High-Level Game Execution',
    description: 'Comprehensive daily on-field instruction focusing on technical mechanics, velocity, bat speed, defensive versatility, and situational game instincts under competitive collegiate conditions.',
    focusAreas: [
      'Pitching mechanics, pitch design & command',
      'Advanced hitting approaches & pitch recognition',
      'Defensive range, footwork & throwing angles',
      'Catching, blocking & staff game calling',
      'Aggressive baserunning & anticipation',
      'In-game pressure management & routine'
    ],
    imageUrl: '/pillar_baseball.jpg',
    badge: 'Technical Mastery',
    accentColor: '#dc2626',
    iconName: 'Flame'
  },
  {
    id: 'athletic',
    number: '02',
    title: 'Athletic Performance',
    shortTitle: 'Athletic',
    tagline: 'Powered by KROME Sports Performance',
    description: 'Progressive strength, velocity, and power training designed specifically for baseball athletes. Builds explosive rotational power, sprint speed, durability, and year-round arm health.',
    focusAreas: [
      'Total-body functional strength & power',
      'Speed development & 60-yard dash mechanics',
      'Rotational power & hip-shoulder separation',
      'Arm-care protocols & post-throw recovery',
      'Joint mobility & injury mitigation',
      'Fueling, hydration & recovery habits'
    ],
    imageUrl: '/pillar_athletic.jpg',
    badge: 'KSP Performance',
    accentColor: '#ca8a04',
    iconName: 'Zap'
  },
  {
    id: 'academic',
    number: '03',
    title: 'Academic Excellence',
    shortTitle: 'Academic',
    tagline: 'GPA Elevation & College Readiness',
    description: 'Structured study environment and accredited college coursework options ensuring athletes maintain academic momentum, raise college GPAs, and satisfy NCAA/NAIA eligibility standards.',
    focusAreas: [
      'Mandatory structured study halls & tutoring',
      'Accredited college credit enrollment options',
      'Time management & collegiate study habits',
      'NCAA / NAIA / NJCAA eligibility tracking',
      'Transcript audits & academic advisory',
      'Seamless 4-year transfer credit planning'
    ],
    imageUrl: '/pillar_academic.jpg',
    badge: 'College Ready',
    accentColor: '#2563eb',
    iconName: 'GraduationCap'
  },
  {
    id: 'leadership',
    number: '04',
    title: 'Leadership & Character',
    shortTitle: 'Leadership',
    tagline: 'Accountability, Integrity & Brotherhood',
    description: 'Instilling the discipline, personal maturity, and emotional composure required of elite athletes. We foster clubhouse brotherhood, campus respect, and professional accountability.',
    focusAreas: [
      'Personal responsibility & accountability',
      'Clear, respectful communication skills',
      'Team-first clubhouse culture & brotherhood',
      'Campus policy adherence & community service',
      'Emotional composure in high-leverage moments',
      'Professional self-presentation & standards'
    ],
    imageUrl: '/pillar_leadership.jpg',
    badge: 'Character First',
    accentColor: '#059669',
    iconName: 'ShieldCheck'
  },
  {
    id: 'placement',
    number: '05',
    title: 'College Placement',
    shortTitle: 'Placement',
    tagline: 'Proactive Recruiting & College Advancement',
    description: 'Direct advocacy to four-year and two-year collegiate programs across the nation. We produce professional scouting video reels, track verified metrics, and guide the entire recruiting process.',
    focusAreas: [
      'Proactive outreach to college coaching networks',
      'HD verified highlight & scouting reels',
      'Verified performance metrics & TrackMan data',
      'Collegiate scout days & 30-40 spring games',
      'Scholarship & offer negotiation advisory'
    ],
    imageUrl: '/pillar_placement.jpg',
    badge: 'Next Level',
    accentColor: '#9333ea',
    iconName: 'Target'
  }
];

export const PROGRAM_INFO = {
  name: 'Oklahoma Cavaliers',
  subtitle: 'Post-Graduate Baseball Program',
  tagline: 'DEVELOP THE PLAYER. BUILD THE PERSON. ADVANCE THE FUTURE.',
  motto: 'A Fraction of the Cost. A Year of Development. A Lifetime of Opportunity.',
  campusName: "St. Gregory's Campus",
  address: '1900 W. MacArthur Street',
  cityStateZip: 'Shawnee, Oklahoma 74804',
  fullAddress: "St. Gregory's Campus, 1900 W. MacArthur Street, Shawnee, OK 74804",
  gmName: 'Coach Christopher Brown',
  gmTitle: 'General Manager — Oklahoma Cavaliers Baseball',
  gmEmail: 'crbrown@okcavs.com',
  googleFormUrl: 'https://forms.gle/4tPmsk9PX3KWenNr7',
  reportDate: 'October 1',
  programCost: 10000,
  depositAmount: 2000,
  springGameCount: '30–40 Collegiate Games',
  fallScrimmages: '5 Scheduled Scrimmages + Development',
  mealsDescription: '12 meals per week, Sunday Dinner – Saturday Lunch',
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'weight-room',
    title: 'KROME Sports Performance Weight Room Training',
    subtitle: 'Build the Athlete',
    description: 'The Cavaliers strength and conditioning program is powered by KROME Sports Performance, designed to prepare athletes for the physical demands of collegiate baseball. Training is progressive and customized around the individual needs of baseball players.',
    highlights: [
      'Total-body strength & explosive power',
      'Speed and acceleration development',
      'Mobility & injury prevention',
      'Rotational power & core stability',
      'Arm-care development & recovery protocols',
      'Progressive individualized load management'
    ],
    imageUrl: '/weight_room_training.jpg',
    iconName: 'Dumbbell'
  },
  {
    id: 'baseball-field',
    title: 'Baseball Field',
    subtitle: 'Compete Where You Train',
    description: "The Cavaliers utilize the collegiate baseball facilities at St. Gregory's as the home environment for practices, development, and competition against regional collegiate programs.",
    highlights: [
      'Collegiate-dimension playing surface',
      'Team tactical & defensive practices',
      'Position-specific instruction daily',
      'Live batting practice & situational baseball',
      'Live bullpens & intrasquad scrimmages'
    ],
    imageUrl: '/collegiate_baseball_field.jpg',
    iconName: 'Trophy'
  },
  {
    id: 'indoor-facility',
    title: 'Indoor Development Facility (Coming Soon)',
    subtitle: "Year-Round Player Development & Batting Cages",
    description: 'Our upcoming climate-controlled indoor training environment and batting cage facility will allow Cavaliers athletes to continue developing uninterrupted year-round regardless of weather conditions. Features full indoor turf throwing and fielding lanes, batting cages, and pitch development labs.',
    highlights: [
      'Climate-controlled indoor turf throwing & fielding lanes',
      'Full batting cages with tee work, front toss, & machine velocity',
      'Swing mechanics, exit velocity tracking, & launch angle analysis',
      'Pitch design, command, bullpen sequencing, & arm-care labs',
      'Individual & small-group offensive & defensive instruction',
      'Year-round uninterrupted athletic & skill progression'
    ],
    imageUrl: '/indoor_batting_cage.jpg',
    iconName: 'Warehouse',
    isComingSoon: true,
    badge: 'Coming Soon'
  },
  {
    id: 'locker-room',
    title: 'Locker Room',
    subtitle: 'Your Home Away From Home',
    description: 'The locker room represents more than a place to store equipment. It is where teammates prepare together, build unbreakable bonds, hold each other accountable, and embody the Cavalier Standard.',
    highlights: [
      'Dedicated collegiate player lockers',
      'Leave the locker room better than you found it',
      'Pre-game preparation & video study lounge',
      'Team accountability & leadership development',
      'Respect the facility, teammates, & opportunity',
      'Safe, organized athletic clubhouse environment'
    ],
    imageUrl: '/locker_room.jpg',
    iconName: 'Shield'
  },
  {
    id: 'housing-campus-life',
    title: 'Housing & Campus Life',
    subtitle: 'Live Like a College Athlete',
    description: "Players live in campus housing at St. Gregory's and experience the responsibilities, teamwork, and independence associated with collegiate student-athlete life. Housing and meals are fully included.",
    highlights: [
      'On-campus dormitory living included in fee',
      'Nutritious meal provisions throughout program',
      'Collegiate independence & personal responsibility',
      'Structured study habits & academic environment',
      'Lifelong brotherhood & shared culture',
      'Supervised, safe historical campus setting'
    ],
    imageUrl: '/rockenhanced.jpeg',
    iconName: 'Home'
  },
  {
    id: 'campus-grounds',
    title: "Historic St. Gregory's Campus Grounds",
    subtitle: 'Historic 75-Acre Campus',
    description: "The historic St. Gregory's campus in Shawnee, OK provides a dedicated collegiate living and training environment with iconic architecture, quiet study settings, and athletic grounds.",
    highlights: [
      'Historic Benedictine campus setting in Shawnee, OK',
      'Quiet, focused athletic and academic environment',
      'Integrated campus housing, dining, and training grounds',
      'Full collegiate atmosphere for post-grad student-athletes'
    ],
    imageUrl: '/rockenhanced.jpeg',
    iconName: 'Building2'
  }
];

export const RECRUITING_STEPS: RecruitingStep[] = [
  {
    step: '1',
    phase: 'Phase 01: Baseline Diagnostic',
    title: 'Comprehensive Player Evaluation',
    subtitle: 'Biomechanical & Metric Baseline',
    description: "Our coaching staff comprehensively evaluates each athlete's position skills, athletic movement, pitch metrics, exit velocities, defensive pop times, academic standing, and collegiate recruiting aspirations.",
    deliverables: [
      'TrackMan Pitch Velocity & Spin Diagnostics',
      'Position-Specific Defensive Mechanics Audit',
      'Academic Transcript & NCAA Eligibility Review',
      '60-Yard Dash & Athletic Profile Benchmark'
    ],
    iconName: 'ClipboardCheck',
    cavaliersAdvantage: 'Immediate pro-level evaluation baseline within 48 hours of arriving on the St. Gregory campus.',
    timeframe: 'Weeks 1–2 (Arrival & Orientation)'
  },
  {
    step: '2',
    phase: 'Phase 02: Customized Development',
    title: 'Individualized Cavalier Blueprint',
    subtitle: 'Tailored Mechanical & Physical Goals',
    description: 'Players receive individualized mechanical, physical, and tactical development goals designed specifically to elevate their overall recruiting profile and prepare them for college roster competition.',
    deliverables: [
      'Custom Pitch Design & Arm-Care Recovery Plan',
      'Rapsodo Hitting Launch Angle & Exit Velo Matrix',
      'Periodized Weight Room Programming (St. Gregory Gym)',
      'Nutritional & Athletic Progression Roadmap'
    ],
    iconName: 'Target',
    cavaliersAdvantage: 'Targeted growth metrics tailored directly to what NCAA & NAIA coaches actively search for.',
    timeframe: 'Continuous Fall Development'
  },
  {
    step: '3',
    phase: 'Phase 03: Pro Media & Verified Data',
    title: 'Verified Video & Metric Reel',
    subtitle: 'High-Definition Scout Footage',
    description: 'We help players produce polished recruiting materials including verified highlight reels, position-specific defensive videos, live intra-squad game footage, pitch design reels, and verified athletic metrics.',
    deliverables: [
      'High-Def Position & Bullpen Video Production',
      'Verified Exit Velo & Pop Time Timestamp Badges',
      'Synergy Sports Digital Athlete Profile',
      'Cavaliers Official Verified Scout Card'
    ],
    iconName: 'Video',
    cavaliersAdvantage: 'Professional HD video production distributed directly through official Oklahoma Cavaliers recruiting channels.',
    timeframe: 'Mid-Fall Scout Day'
  },
  {
    step: '4',
    phase: 'Phase 04: Targeted Match Audit',
    title: 'Collegiate Program Identification',
    subtitle: 'Tailored College Matching',
    description: 'We actively assist players and families in identifying NCAA (D1, D2, D3), NAIA, and NJCAA collegiate programs that match their academic standing, athletic ceiling, financial situation, and geographic preferences.',
    deliverables: [
      'Target List of 20+ Compatible College Programs',
      'Roster Needs & Transfer Portal Roster Analysis',
      'Academic & Scholarship Financial Match Audit',
      'Regional & National Opportunity Mapping'
    ],
    iconName: 'Compass',
    cavaliersAdvantage: 'Direct access to GM Christopher Brown’s extensive national college coaching network.',
    timeframe: 'Late Fall & Winter'
  },
  {
    step: '5',
    phase: 'Phase 05: Coach-to-Coach Advocacy',
    title: 'Direct College Coach Outreach',
    subtitle: 'Professional Mentorship & Advocacy',
    description: 'Players are mentored in communicating professionally with college coaches—mastering introductory emails, phone calls, questionnaires, video submissions, and structured follow-ups, backed by direct staff endorsements.',
    deliverables: [
      'Direct Phone Advocacy by GM Christopher Brown',
      'Professional Recruiting Email & Text Scripting',
      'Phone Interview & College Visit Prep Workshops',
      'Structured Follow-Up Communication Calendar'
    ],
    iconName: 'Send',
    cavaliersAdvantage: 'Direct phone calls and texts from Cavalier coaches directly to head coaches and recruiting coordinators.',
    timeframe: 'Ongoing (Winter / Spring)'
  },
  {
    step: '6',
    phase: 'Phase 06: In-Person Evaluation',
    title: 'Visits, Showcases & Scout Games',
    subtitle: 'Campus Trials & Live Competitions',
    description: 'When appropriate, our staff coordinates and supports campus visits, workouts, college showcases, specialized recruiting events, and live spring games viewed directly by visiting college scouts.',
    deliverables: [
      'Campus Visit & Tryout Scheduling Support',
      'Spring Scout Game Exposure (JUCO/JV Opponents)',
      'Collegiate Workout & Bullpen Coordination',
      'Scout & Coach Meeting Debriefs'
    ],
    iconName: 'CalendarCheck',
    cavaliersAdvantage: 'Cavaliers schedule includes games against top regional JUCO and 4-year JV programs for maximum in-person evaluation.',
    timeframe: 'Spring Schedule (Mar–May)'
  },
  {
    step: '7',
    phase: 'Phase 07: Roster Spot Earned',
    title: 'Collegiate Placement & Commitment',
    subtitle: 'Future Signed & Secured',
    description: 'Our ultimate objective is placing the athlete into the right next collegiate opportunity where they will thrive academically, athletically, and personally, earning a 4-year or 2-year college commitment.',
    deliverables: [
      'Offer & Scholarship Package Evaluation',
      'NCAA/NAIA Transfer Portal & Eligibility Clearance',
      'Official Cavaliers Signing Day Ceremony & Graphic',
      'College Admissions & Summer Class Registration Guidance'
    ],
    iconName: 'Award',
    cavaliersAdvantage: 'Unwavering 100% commitment to finding every Cavalier athlete their next college baseball home.',
    timeframe: 'Spring / Early Summer Signing'
  }
];

export const COACHES_DATA: Coach[] = [
  {
    id: 'christopher-brown',
    name: 'Christopher Brown',
    role: 'General Manager',
    title: 'General Manager & Head of Baseball Operations',
    email: 'crbrown@okcavs.com',
    bio: 'Coach Christopher Brown spearheads the Oklahoma Cavaliers Post-Graduate Baseball Program. With deep roots across the Oklahoma baseball landscape and an extensive network connecting NJCAA, NAIA, and NCAA coaching staffs nationwide, Coach Brown is dedicated to bridging the gap between high school graduation and collegiate baseball success.',
    responsibilities: [
      'Overall Program Direction & Baseball Operations',
      'Collegiate Recruiting, Scouting & Placement Coordination',
      'Player Welfare, Housing & Campus Life Administration',
      'College Coach Liaison & Transfer Compliance Assistance'
    ],
    experience: [
      'Over 15+ years of baseball coaching, scouting, and player development experience',
      'Instrumental in facilitating dozens of collegiate placements across D1, D2, NAIA, and NJCAA levels',
      'Deep expertise in player evaluation, athletic progression, and recruitment networking'
    ],
    quote: 'Our mission is simple: we develop the player, build the person, and advance the future. We provide every athlete with the collegiate structure, exposure, and daily reps needed to earn their next roster spot.'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Pitching Coordinator',
    title: 'Pitching Coordinator & Arm Care Specialist',
    bio: 'Coach Vance oversees the Cavaliers pitching development curriculum, combining biomechanical efficiency, pitch design, velocity building, and personalized arm-care protocols to prepare arms for college workloads.',
    responsibilities: [
      'Bullpen Scheduling & Mechanical Analysis',
      'Velocity & Pitch Sequencing Design',
      'Arm-Care, Shoulder Diagnostics & Recovery Routines',
      'In-Game Pitch Calling & Pitcher Rotation Management'
    ],
    experience: [
      'Former collegiate pitcher and professional pitching instructor',
      'Certified in Driveline Pitch Design and Arm-Care Fundamentals',
      'Trained numerous pitchers exceeding 90+ MPH with verified command'
    ],
    quote: 'Command and durability create college pitchers. We build arms that last and attack the strike zone with intent.'
  },
  {
    id: 'derek-holloway',
    name: 'Derek Holloway',
    role: 'Hitting & S&C Coordinator',
    title: 'Hitting Coach & Head Strength & Conditioning',
    bio: 'Coach Holloway leads the Cavaliers offensive philosophy and daily strength programming in the St. Gregory weight room, cultivating explosive rotational athletes with disciplined plate approaches.',
    responsibilities: [
      'Daily Cage Work, Tee Stations & Live Batting Practice',
      'Exit Velocity & Launch Angle Optimization',
      'Periodized Weight Training & Speed/Agility Conditioning',
      'Two-Strike & Situational Approach Mentorship'
    ],
    experience: [
      'Collegiate All-Conference Infielder with 8 years collegiate coaching',
      'CSCS Certified Strength and Conditioning Specialist',
      'Expertise in rotational movement patterns and progressive resistance training'
    ],
    quote: 'We don’t just swing bats; we build powerful athletes who control the strike zone and drive baseballs with purpose.'
  },
  {
    id: 'trenton-hayes',
    name: 'Trenton Hayes',
    role: 'Infield & Recruiting Coach',
    title: 'Defensive Coordinator & Assistant Recruiting Director',
    bio: 'Coach Hayes directs infield development, defensive alignment, and assists Coach Brown with player video production and collegiate admissions communication.',
    responsibilities: [
      'Infield & Outfield Footwork, Glove Work & Throwing Accuracy',
      'Video Breakdown & Highlight Reel Editing',
      'Recruiting Questionnaires & College Outreach Management',
      'Study Hall & Academic Advising Facilitator'
    ],
    experience: [
      'Former collegiate shortstop and defensive clinic director',
      'Specialist in high-tempo infield drills and cut-off/relay executions',
      'Passionate mentor for student-athlete academic accountability'
    ],
    quote: 'Defense wins championships, and academics keep you on the field. We emphasize both every single day.'
  }
];

export const ROSTER_DATA: Player[] = [
  {
    id: 'cav-10',
    number: 10,
    name: 'Jaxson Bennett',
    positions: ['RHP', 'INF'],
    primaryPosition: 'Two-Way',
    bats: 'R',
    throws: 'R',
    height: '6-2',
    weight: 195,
    hometown: 'Oklahoma City',
    state: 'OK',
    highSchool: 'Westmoore HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.6,
    metrics: { fastballVelo: '88-91 mph', exitVelocity: '94 mph', sixtyYardDash: '6.85s' },
    bio: 'High-ceiling two-way prospect with heavy sinking fastball and power potential from the right side. Commands 3 pitches with sharp slider.',
  },
  {
    id: 'cav-24',
    number: 24,
    name: 'Ethan Morales',
    positions: ['C', '1B'],
    primaryPosition: 'Catcher',
    bats: 'R',
    throws: 'R',
    height: '6-1',
    weight: 205,
    hometown: 'Tulsa',
    state: 'OK',
    highSchool: 'Union HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.4,
    metrics: { popTime: '1.92s', exitVelocity: '96 mph', sixtyYardDash: '7.15s' },
    bio: 'Collegiate frame catcher with exceptional receiving and quick transfer. Middle-of-the-order run producer with high baseball IQ.',
  },
  {
    id: 'cav-07',
    number: 7,
    name: 'Kaden Reynolds',
    positions: ['SS', '2B'],
    primaryPosition: 'Infielder',
    bats: 'L',
    throws: 'R',
    height: '5-11',
    weight: 175,
    hometown: 'Edmond',
    state: 'OK',
    highSchool: 'Edmond North HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.8,
    metrics: { sixtyYardDash: '6.65s', exitVelocity: '91 mph' },
    bio: 'Smooth left-handed hitting middle infielder with elite range, quick feet, and plus plate discipline. Top of the lineup catalyst.',
  },
  {
    id: 'cav-18',
    number: 18,
    name: 'Colton Brooks',
    positions: ['LHP'],
    primaryPosition: 'Pitcher',
    bats: 'L',
    throws: 'L',
    height: '6-3',
    weight: 190,
    hometown: 'Norman',
    state: 'OK',
    highSchool: 'Norman North HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.5,
    metrics: { fastballVelo: '86-89 mph' },
    bio: 'Deceptive southpaw with loose arm action, sharp sweeping breaking ball, and plus changeup. Pounding the lower third with consistent swings and misses.',
  },
  {
    id: 'cav-12',
    number: 12,
    name: 'Trevor Hawkins',
    positions: ['OF', 'RHP'],
    primaryPosition: 'Outfielder',
    bats: 'R',
    throws: 'R',
    height: '6-0',
    weight: 185,
    hometown: 'Shawnee',
    state: 'OK',
    highSchool: 'Shawnee HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.7,
    metrics: { sixtyYardDash: '6.60s', exitVelocity: '95 mph', fastballVelo: '87 mph' },
    bio: 'Explosive local standout with elite outfield speed, strong accurate arm from right field, and gap-to-gap extra-base power.',
  },
  {
    id: 'cav-22',
    number: 22,
    name: 'Bryce Callahan',
    positions: ['3B', '1B'],
    primaryPosition: 'Infielder',
    bats: 'R',
    throws: 'R',
    height: '6-2',
    weight: 215,
    hometown: 'Broken Arrow',
    state: 'OK',
    highSchool: 'Broken Arrow HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.2,
    metrics: { exitVelocity: '98 mph', sixtyYardDash: '7.10s' },
    bio: 'Physical corner infielder with thunderous bat speed and soft hands at the hot corner. Disciplined strike zone management with pull-side pop.',
  },
  {
    id: 'cav-33',
    number: 33,
    name: 'Garrett Vance',
    positions: ['RHP'],
    primaryPosition: 'Pitcher',
    bats: 'R',
    throws: 'R',
    height: '6-4',
    weight: 210,
    hometown: 'Moore',
    state: 'OK',
    highSchool: 'Moore HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.5,
    metrics: { fastballVelo: '90-93 mph' },
    bio: 'Imposing power right-hander featuring electric 93 mph fastball and hard 12-6 curveball. Heavy strikeout stuff suited for high-leverage collegiate innings.',
  },
  {
    id: 'cav-03',
    number: 3,
    name: 'Mason Miller',
    positions: ['CF', 'OF'],
    primaryPosition: 'Outfielder',
    bats: 'L',
    throws: 'L',
    height: '5-10',
    weight: 170,
    hometown: 'Yukon',
    state: 'OK',
    highSchool: 'Yukon HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.9,
    metrics: { sixtyYardDash: '6.55s', exitVelocity: '89 mph' },
    bio: 'Speedy true centerfielder with elite tracking instincts, aggressive baserunning ability, and consistent line-drive stroke to all fields.',
  },
  {
    id: 'cav-15',
    number: 15,
    name: 'Dominic Santana',
    positions: ['2B', 'SS'],
    primaryPosition: 'Infielder',
    bats: 'S',
    throws: 'R',
    height: '5-11',
    weight: 180,
    hometown: 'Dallas',
    state: 'TX',
    highSchool: 'Hebron HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.3,
    metrics: { sixtyYardDash: '6.75s', exitVelocity: '92 mph' },
    bio: 'Switch-hitting playmaker with silky hands up the middle, instinctive double play turns, and consistent contact from both sides of the dish.',
  },
  {
    id: 'cav-28',
    number: 28,
    name: 'Nolan Hayes',
    positions: ['C', 'OF'],
    primaryPosition: 'Catcher',
    bats: 'R',
    throws: 'R',
    height: '6-0',
    weight: 190,
    hometown: 'Stillwater',
    state: 'OK',
    highSchool: 'Stillwater HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.6,
    metrics: { popTime: '1.95s', exitVelocity: '93 mph' },
    bio: 'Vocal on-field general with strong pitch blocking, quick recovery, and clutch hitting with runners in scoring position.',
  },
  {
    id: 'cav-42',
    number: 42,
    name: 'Caleb Jenkins',
    positions: ['RHP'],
    primaryPosition: 'Pitcher',
    bats: 'R',
    throws: 'R',
    height: '6-3',
    weight: 200,
    hometown: 'Enid',
    state: 'OK',
    highSchool: 'Enid HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.4,
    metrics: { fastballVelo: '87-90 mph' },
    bio: 'Three-pitch workhorse with command of cutter, sharp split-change, and sinker. Consistently induces weak contact and quick ground balls.',
  },
  {
    id: 'cav-05',
    number: 5,
    name: 'Austin Reed',
    positions: ['OF'],
    primaryPosition: 'Outfielder',
    bats: 'R',
    throws: 'R',
    height: '6-1',
    weight: 185,
    hometown: 'Lawton',
    state: 'OK',
    highSchool: 'MacArthur HS',
    gradYear: 2026,
    commitmentStatus: 'Uncommitted (Active Prospect)',
    gpa: 3.5,
    metrics: { sixtyYardDash: '6.70s', exitVelocity: '94 mph' },
    bio: 'Athletic corner outfielder with strong arm, high motor, and consistent power to both gaps. Excellent work ethic and clubhouse leader.',
  }
];

export const SCHEDULE_DATA: GameSchedule[] = [
  // Fall Development & Scrimmages
  {
    id: 'fall-1',
    date: 'Oct 12, 2026',
    time: '1:00 PM',
    opponent: 'Seminole State College JV',
    opponentLocation: 'Seminole, OK',
    isHome: false,
    gameType: '14-Inning Scrimmage',
    season: 'Fall',
    location: 'Seminole, OK',
    field: 'Oiler Park',
    status: 'Final',
    result: 'Scrimmage Completed (Dev Focus)',
    notes: '14 innings of live development and bullpen evaluations.'
  },
  {
    id: 'fall-2',
    date: 'Oct 19, 2026',
    time: '12:00 PM',
    opponent: 'Oklahoma Baptist University JV',
    opponentLocation: 'Shawnee, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Fall',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Final',
    result: 'W 6-3, L 4-5',
    notes: 'Local collegiate matchup at St. Gregory’s campus.'
  },
  {
    id: 'fall-3',
    date: 'Oct 26, 2026',
    time: '1:00 PM',
    opponent: 'Mid-America Christian Univ. JV',
    opponentLocation: 'Oklahoma City, OK',
    isHome: true,
    gameType: '14-Inning Scrimmage',
    season: 'Fall',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Final',
    result: 'Scrimmage Completed',
    notes: 'Scout day format with verified radar velocities.'
  },
  {
    id: 'fall-4',
    date: 'Nov 02, 2026',
    time: '1:00 PM',
    opponent: 'Northern Oklahoma College Enid',
    opponentLocation: 'Enid, OK',
    isHome: false,
    gameType: 'Single 9-Inn',
    season: 'Fall',
    location: 'Enid, OK',
    field: 'David Allen Memorial Ballpark',
    status: 'Final',
    result: 'L 3-5',
    notes: 'High-level NJCAA D2 competition.'
  },
  {
    id: 'fall-5',
    date: 'Nov 09, 2026',
    time: '12:00 PM',
    opponent: 'USAO JV (Univ. Science & Arts OK)',
    opponentLocation: 'Chickasha, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Fall',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Final',
    result: 'W 8-2, W 5-1',
    notes: 'Fall finale prior to winter strength cycle.'
  },

  // Spring 2027 Collegiate Slate (30-40 Games)
  {
    id: 'sp-1',
    date: 'Feb 14, 2027',
    time: '12:00 PM / 2:30 PM',
    opponent: 'Redlands Community College',
    opponentLocation: 'El Reno, OK',
    isHome: false,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'El Reno, OK',
    field: 'Redlands Field',
    status: 'Upcoming',
    notes: 'Opening weekend of the 2027 Spring campaign.'
  },
  {
    id: 'sp-2',
    date: 'Feb 21, 2027',
    time: '1:00 PM / 3:30 PM',
    opponent: 'Murray State College JV',
    opponentLocation: 'Tishomingo, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Upcoming',
    notes: 'Home spring opener at St. Gregory’s campus.'
  },
  {
    id: 'sp-3',
    date: 'Feb 28, 2027',
    time: '12:00 PM / 2:30 PM',
    opponent: 'Rose State College JV',
    opponentLocation: 'Midwest City, OK',
    isHome: false,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Midwest City, OK',
    field: 'Rose State Field',
    status: 'Upcoming',
    notes: 'Collegiate conference preview doubleheader.'
  },
  {
    id: 'sp-4',
    date: 'Mar 07, 2027',
    time: '1:00 PM / 3:30 PM',
    opponent: 'Cowley County CC JV',
    opponentLocation: 'Arkansas City, KS',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Upcoming',
    notes: 'Interstate battle vs top-tier Jayhawk Conference JV.'
  },
  {
    id: 'sp-5',
    date: 'Mar 14, 2027',
    time: '12:00 PM',
    opponent: 'Oklahoma City University JV',
    opponentLocation: 'Oklahoma City, OK',
    isHome: false,
    gameType: 'Single 9-Inn',
    season: 'Spring',
    location: 'Oklahoma City, OK',
    field: 'Jim Wade Stadium',
    status: 'Upcoming',
    notes: 'Matchup at historic Jim Wade Stadium.'
  },
  {
    id: 'sp-6',
    date: 'Mar 21, 2027',
    time: '1:00 PM / 3:30 PM',
    opponent: 'Northeastern Oklahoma A&M JV',
    opponentLocation: 'Miami, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Upcoming',
    notes: 'Doubleheader test for pitching depth.'
  },
  {
    id: 'sp-7',
    date: 'Mar 28, 2027',
    time: '12:00 PM / 2:30 PM',
    opponent: 'Western Oklahoma State JV',
    opponentLocation: 'Altus, OK',
    isHome: false,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Altus, OK',
    field: 'Pioneer Park',
    status: 'Upcoming',
    notes: 'Road trip to Southwest Oklahoma.'
  },
  {
    id: 'sp-8',
    date: 'Apr 04, 2027',
    time: '1:00 PM / 3:30 PM',
    opponent: 'Southern Nazarene University JV',
    opponentLocation: 'Bethany, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Upcoming',
    notes: 'Spring Scout Showcase Day for regional college coaches.'
  },
  {
    id: 'sp-9',
    date: 'Apr 11, 2027',
    time: '1:00 PM',
    opponent: 'Southwestern Christian Univ. JV',
    opponentLocation: 'Bethany, OK',
    isHome: false,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Bethany, OK',
    field: 'SCU Baseball Complex',
    status: 'Upcoming',
    notes: 'Late-spring regional clash.'
  },
  {
    id: 'sp-10',
    date: 'Apr 18, 2027',
    time: '1:00 PM / 3:30 PM',
    opponent: 'East Central University JV',
    opponentLocation: 'Ada, OK',
    isHome: true,
    gameType: 'Doubleheader (7/7)',
    season: 'Spring',
    location: 'Shawnee, OK',
    field: "St. Gregory's Baseball Field",
    status: 'Upcoming',
    notes: 'Home finale at St. Gregory’s campus.'
  },
  {
    id: 'sp-11',
    date: 'Apr 25, 2027',
    time: '12:00 PM',
    opponent: 'Post-Grad Championship Tournament',
    opponentLocation: 'Oklahoma City, OK',
    isHome: false,
    gameType: 'Collegiate Series',
    season: 'Spring',
    location: 'Oklahoma City, OK',
    field: 'Regional Ballpark Complex',
    status: 'Upcoming',
    notes: 'Post-Grad tournament showcase and final placement event.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  // For Players
  {
    id: 'faq-p1',
    category: 'Players',
    question: 'Who is the Oklahoma Cavaliers program for?',
    answer: 'The program is designed specifically for recent high school graduates who want another opportunity to develop physically and mentally, compete against collegiate-level competition, and earn their next college baseball roster spot.'
  },
  {
    id: 'faq-p2',
    category: 'Players',
    question: 'How many games do we play during the year?',
    answer: 'The spring season is designed around approximately 30–40 collegiate games, including competition against regional NJCAA, NAIA, and NCAA junior varsity programs. In the fall, players participate in 5 scheduled scrimmages alongside intensive daily clinics and weight training.'
  },
  {
    id: 'faq-p3',
    category: 'Players',
    question: 'When do players report to campus?',
    answer: 'Players report on October 1 for fall development and move into on-campus housing at St. Gregory’s.'
  },
  {
    id: 'faq-p4',
    category: 'Players',
    question: 'What happens during the fall semester?',
    answer: 'Players participate in daily strength & conditioning training, team baseball practices, hitting and pitching clinics, individual development sessions, academic coursework/study hall, and five scheduled collegiate scrimmages.'
  },
  {
    id: 'faq-p5',
    category: 'Players',
    question: 'Can I choose my next college?',
    answer: 'Yes! Players have the absolute freedom to pursue the college that best fits their academic, athletic, and career goals. We are your advocates and advisors throughout the entire recruiting journey.'
  },

  // For Parents
  {
    id: 'faq-pa1',
    category: 'Parents',
    question: 'What does the $10,000 program cost cover?',
    answer: 'The program includes housing, meals (12 meals per week, Sunday Dinner - Saturday Lunch), travel, uniforms/apparel, player development, competition, and recruiting assistance as outlined by the program.'
  },
  {
    id: 'faq-pa2',
    category: 'Parents',
    question: 'Where do players live?',
    answer: "Players reside in campus housing at St. Gregory's."
  },
  {
    id: 'faq-pa3',
    category: 'Parents',
    question: 'Do players receive meals?',
    answer: '12 meals per week included with tuition, Sunday Dinner - Saturday Lunch. Provisions are included as part of the program.'
  },
  {
    id: 'faq-pa4',
    category: 'Parents',
    question: 'How are players supervised?',
    answer: 'Yes. Players are expected to follow program standards, campus policies, housing requirements, and team expectations.'
  },
  {
    id: 'faq-pa5',
    category: 'Parents',
    question: 'What happens if my son needs academic assistance?',
    answer: 'Players can receive academic support through study hall, advising, time-management assistance, and available campus resources.'
  },

  // Transfer & Eligibility
  {
    id: 'faq-e1',
    category: 'Transfer & Eligibility',
    question: 'Does playing post-grad automatically make me eligible for NCAA or NAIA competition?',
    answer: 'No. Eligibility is determined by the individual governing organization and the receiving institution.'
  },
  {
    id: 'faq-e2',
    category: 'Transfer & Eligibility',
    question: 'Can I play at another college after the Cavaliers?',
    answer: 'That is the goal of the program. We help players pursue opportunities at colleges that fit their goals.'
  },
  {
    id: 'faq-e3',
    category: 'Transfer & Eligibility',
    question: 'Can I transfer to a Division I program?',
    answer: 'Potentially. Individual eligibility and recruiting requirements vary by organization and institution.'
  },
  {
    id: 'faq-e4',
    category: 'Transfer & Eligibility',
    question: 'Will the Cavaliers guarantee me a scholarship?',
    answer: 'No. The Cavaliers cannot guarantee a scholarship or roster position at another institution. Our responsibility is to develop the player, create opportunities, and help position the athlete for the best possible next step.'
  },

  // Cost & Payment
  {
    id: 'faq-c1',
    category: 'Cost & Financial Aid',
    question: 'What payment options are available for the $2,000 deposit?',
    answer: 'Deposit Option 1: Pay $2,000 in full on Sept 15. Deposit Option 2: Two payments of $1,000 (Sept 15 & Oct 15). The deposit secures the player’s roster position and is applied directly toward the program balance.'
  },
  {
    id: 'faq-c2',
    category: 'Cost & Financial Aid',
    question: 'How is the remaining $8,000 balance paid?',
    answer: 'Families may choose Option 1: Pay in Full ($8,000, Total $10,000); Option 2: Two Payments (2 × $4,000, Total $10,000); or Option 3: Eight-Month Payment Plan (8 × $1,100 = $8,800, Total $10,800 including an $800 financing charge).'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: "Historic St. Gregory's Campus Grounds",
    category: 'campus',
    categoryLabel: 'Campus & Facilities',
    description: "The historic St. Gregory's campus in Shawnee, OK provides a full collegiate living and training environment.",
    imageUrl: '/rockenhanced.jpeg'
  },
  {
    id: 'gal-2',
    title: 'Collegiate Baseball Field & Player Action',
    category: 'facilities',
    categoryLabel: 'Campus & Facilities',
    description: 'Home of the Cavaliers for daily practices, defensive drills, bullpens, and collegiate game competition.',
    imageUrl: '/gal_field.jpg'
  },
  {
    id: 'gal-3',
    title: 'KROME Sports Performance Weight Room Training',
    category: 'training',
    categoryLabel: 'Strength & Conditioning',
    description: 'Structured, progressive athletic development focused on explosive power, rotational strength, and arm-care.',
    imageUrl: '/gal_weight.jpg'
  },
  {
    id: 'gal-4',
    title: 'Indoor Development Facility (Coming Soon)',
    category: 'facilities',
    categoryLabel: 'Training & Development',
    description: 'Upcoming climate-controlled turf training bays, batting cages, and pitching development facility.',
    imageUrl: '/gal_indoor.jpg'
  },
  {
    id: 'gal-6',
    title: 'Gameday Competition & Doubleheaders',
    category: 'games',
    categoryLabel: 'Collegiate Competition',
    description: 'Competing against regional NJCAA, NAIA, and NCAA JV programs in live game environments with full doubleheader action.',
    imageUrl: '/ok_cavs_gameday.jpg'
  },
  {
    id: 'gal-7',
    title: 'Defensive Lab and Arm Care',
    category: 'training',
    categoryLabel: 'Defensive & Arm-Care',
    description: 'Infield/outfield mechanics, agility, throwing programs, and strict recovery protocols led by player development staff.',
    imageUrl: '/ok_cavs_pitching_lab.jpg'
  },
  {
    id: 'gal-8',
    title: 'Cavaliers Team Clubhouse & Lockers',
    category: 'facilities',
    categoryLabel: 'Locker Room & Culture',
    description: 'Where teammates build camaraderie, study film, and uphold the Cavalier Standard.',
    imageUrl: '/gal_lockers.jpg'
  },
  {
    id: 'gal-9',
    title: 'On-Campus Student Housing & Campus Life',
    category: 'campus',
    categoryLabel: 'Campus Life & Housing',
    description: 'Dormitory living that fosters independence, study habits, and close-knit team brotherhood.',
    imageUrl: '/rockenhanced.jpeg'
  }
];

export const DEPOSIT_PLANS = [
  {
    id: 'deposit-1',
    title: 'Option 1 — Pay in Full',
    badge: 'Single Deposit',
    depositTotal: '$2,000',
    schedule: [
      { date: 'Due September 15', amount: '$2,000', label: 'Full Deposit Due' }
    ],
    note: 'Streamlined single deposit payment on September 15.'
  },
  {
    id: 'deposit-2',
    title: 'Option 2 — Two Payments',
    badge: '2 Installments',
    depositTotal: '$2,000',
    schedule: [
      { date: 'Due September 15', amount: '$1,000', label: '1st Installment' },
      { date: 'Due October 15', amount: '$1,000', label: '2nd Installment' }
    ],
    note: 'Total Deposit: $2,000 spread over two monthly payments.'
  }
];

export const REMAINING_BALANCE_PLANS = [
  {
    id: 'bal-1',
    title: 'Option 1 — Pay in Full',
    badge: 'Standard',
    deposit: '$2,000',
    remaining: '$8,000',
    structure: 'One payment following the $2,000 enrollment deposit',
    totalCost: '$10,000',
    financingCharge: '$0',
    notes: 'No additional payment-plan charge.'
  },
  {
    id: 'bal-2',
    title: 'Option 2 — Two Payments',
    badge: '2 Installments',
    deposit: '$2,000',
    remaining: '$8,000',
    structure: '2 × $4,000 payments (Payment 1: $4,000, Payment 2: $4,000)',
    totalCost: '$10,000',
    financingCharge: '$0',
    notes: 'No additional payment-plan charge.'
  },
  {
    id: 'bal-3',
    title: 'Option 3 — Eight-Month Payment Plan',
    badge: 'Monthly Plan',
    deposit: '$2,000',
    remaining: '$8,800*',
    structure: '8 × $1,100 monthly payments',
    totalCost: '$10,800',
    financingCharge: '$800',
    notes: 'Includes an $800 payment-plan financing charge for the convenience of spreading payments over 8 months.'
  }
];

export const BENEDICTINE_VALUES: BenedictineValue[] = [
  {
    name: 'Integrity',
    desc: 'We do what is right, even when no one is watching.',
    imageUrl: '/val_intl_1.jpg',
    badge: 'Character'
  },
  {
    name: 'Discipline',
    desc: 'Success is earned through consistent preparation, hard work, and daily commitment.',
    imageUrl: '/val_intl_2.jpg',
    badge: 'Work Ethic'
  },
  {
    name: 'Accountability',
    desc: 'We take ownership of our actions, decisions, and personal growth.',
    imageUrl: '/val_intl_3.jpg',
    badge: 'Leadership'
  },
  {
    name: 'Respect',
    desc: 'We honor our teammates, coaches, opponents, officials, and the traditions of the game while embracing the Benedictine value of recognizing the dignity of every individual.',
    imageUrl: '/player_on_field.jpg',
    badge: 'Brotherhood'
  },
  {
    name: 'Excellence',
    desc: 'We pursue our highest potential in athletics, academics, and personal development.',
    imageUrl: '/val_excellence.jpg',
    badge: 'High Standard'
  },
  {
    name: 'Teamwork',
    desc: 'We believe that collective success is built through trust, communication, and selfless commitment to one another.',
    imageUrl: '/val_intl_4.jpg',
    badge: 'Unit'
  },
  {
    name: 'Continuous Improvement',
    desc: 'Every day is an opportunity to become stronger, smarter, and better than we were yesterday.',
    imageUrl: '/val_improvement.jpg',
    badge: 'Development'
  },
  {
    name: 'Service',
    desc: 'Inspired by the Benedictine spirit of hospitality and stewardship, we seek to positively impact our campus, our community, and those around us through servant leadership and meaningful relationships.',
    imageUrl: '/val_service.jpg',
    badge: 'Stewardship'
  }
];

export const WEEKDAY_SCHEDULE = [
  { time: '6:30 AM', activity: 'Wake-Up & Breakfast' },
  { time: '7:30–8:45 AM', activity: 'Team Strength & Conditioning' },
  { time: '9:00–11:30 AM', activity: 'Individual Skill Development / Recovery / Classes' },
  { time: '12:00 PM', activity: 'Team Lunch' },
  { time: '1:30 PM', activity: 'Team Practice' },
  { time: '3:30–5:30 PM', activity: 'Hitting Groups / Defense' },
  { time: '5:30–6:30 PM', activity: 'Bullpens' },
  { time: '6:30 PM', activity: 'Dinner' },
  { time: '7:30–9:00 PM', activity: 'Study Hall / Recruiting Meetings / Recovery' },
  { time: '10:30 PM', activity: 'Lights Out & Recovery' }
];
