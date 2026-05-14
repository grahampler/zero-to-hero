import { useState } from "react";

const ACCENT = "#e8ff47";
const ACCENT2 = "#ff6b35";
const ACCENT3 = "#7ee8ff";
const BG = "#0e0e0e";
const SURFACE = "#161616";
const CARD = "#1c1c1c";
const BORDER = "#2a2a2a";
const MUTED = "#666";
const TEXT = "#f0f0f0";

const phaseData = [
  {
    label: "Phase 1", weeks: "Weeks 1–4", title: "Foundation",
    desc: "Re-teach your body to move. Don't push to failure. Stop when form breaks.",
    accentColor: ACCENT,
    days: [
      { name: "Day A — Push & Core", type: "strength", note: "3 rounds. Rest 60–90 sec between exercises.", exercises: [
        { name: "Wall Push-Up", detail: "3 x 10 reps", tip: "Stand ~2 feet from wall, lean in. Chest to wall, push back. Elbows 45 degrees to body." },
        { name: "Dead Bug", detail: "3 x 6 reps per side", tip: "Lie on back, arms up, knees at 90 degrees. Slowly lower opposite arm/leg to floor. Low back stays flat — this is everything." },
        { name: "Glute Bridge", detail: "3 x 12 reps", tip: "Lie on back, feet flat. Drive hips up, squeeze glutes at top. Hold 2 seconds. Builds your posterior chain — essential for lifting." },
        { name: "Cat-Cow Stretch", detail: "2 x 10 slow reps", tip: "On hands and knees. Arch back up (cat), then drop and lift chest (cow). Mobilizes your spine and lower back." },
      ]},
      { name: "Day B — Pull & Posture", type: "strength", note: "3 rounds. These directly target posture muscles and pulling strength.", exercises: [
        { name: "Door Frame Row", detail: "3 x 8 reps", tip: "Hold a door frame or sturdy table edge, lean back at 45 degrees. Pull your chest to it. This is your pull-up prerequisite." },
        { name: "Superman Hold", detail: "3 x 8 reps (3 sec hold)", tip: "Lie face down, arms out front. Lift arms, chest, and legs off the floor simultaneously. Directly targets the lower back and posture." },
        { name: "Bird Dog", detail: "3 x 8 reps per side", tip: "On all fours, extend opposite arm and leg. Hold 2 sec. Trains deep core stability — crucial for back health." },
        { name: "Chest Opener Stretch", detail: "2 x 30 sec hold", tip: "Clasp hands behind your back, open your chest, look up. Reverses the rounded-shoulder posture." },
      ]},
      { name: "Day C — Active Recovery", type: "rest", note: "Light movement only. No strength work.", exercises: [
        { name: "10-Minute Walk", detail: "Brisk pace", tip: "Walking activates your core and back stabilizers. Swing your arms naturally." },
        { name: "Hip Flexor Stretch", detail: "2 x 45 sec per side", tip: "Lunge forward, drop back knee. Shift hips forward. Critical for posture — most desk workers have tight hip flexors." },
        { name: "Thoracic Spine Rotation", detail: "2 x 10 per side", tip: "Sit cross-legged, one hand on opposite knee, rotate through your upper back. Frees up the upper spine." },
      ]},
    ]
  },
  {
    label: "Phase 2", weeks: "Weeks 5–8", title: "Build",
    desc: "Same patterns, harder versions. Focus on slow controlled reps — especially on the way down.",
    accentColor: ACCENT2,
    days: [
      { name: "Day A — Push & Core", type: "strength", note: "3-4 rounds. Add a round when all reps feel easy.", exercises: [
        { name: "Incline Push-Up", detail: "3 x 8-10 reps", tip: "Hands on a counter, chair, or stairs instead of wall. The lower the surface, the harder. Goal: full floor push-up by Phase 3." },
        { name: "Hollow Body Hold", detail: "3 x 20 sec", tip: "Lie on back, arms overhead, lower back pressed flat, legs raised 6-12 inches. King of core exercises — everything braced." },
        { name: "Glute Bridge Slow Descent", detail: "3 x 10 reps (3-sec down)", tip: "Same as Phase 1 but lower in 3 slow seconds. Time under tension equals more strength." },
        { name: "Plank", detail: "3 x 20-30 sec", tip: "Elbows under shoulders, body flat as a board. Squeeze glutes, abs, and quads simultaneously. Don't let hips sag." },
      ]},
      { name: "Day B — Pull & Posture", type: "strength", note: "3-4 rounds. Building the exact muscles needed for pull-ups.", exercises: [
        { name: "Table Row (Horizontal Pull)", detail: "3 x 8-10 reps", tip: "Lie under a sturdy table, grip the edge, pull chest to it. Keep body flat like a plank. This IS a pull-up — just horizontal." },
        { name: "Superman Pulse", detail: "3 x 10 reps", tip: "Hold the Superman position, do small lifts (pulses). Brutal on the lower back and glutes. Great for lifting posture." },
        { name: "Side Plank", detail: "3 x 20 sec per side", tip: "Elbow under shoulder, body straight. Works obliques and lateral core — essential for true spinal stability." },
        { name: "Wall Angels", detail: "3 x 10 slow reps", tip: "Stand with back flat against wall, slide arms up and down like a snow angel. Incredibly effective for shoulder and posture rehab." },
      ]},
      { name: "Day C — Active Recovery", type: "rest", note: "Light movement only.", exercises: [
        { name: "15-Minute Walk", detail: "Brisk pace", tip: "Increase your walk time from Phase 1. Maintain upright posture — head level, shoulders back." },
        { name: "World's Greatest Stretch", detail: "5 reps per side", tip: "Lunge forward, same-side elbow to floor, rotate arm to sky. Opens hips, thoracic spine, hamstrings — all at once." },
        { name: "Foam Roll or Self-Massage", detail: "5-10 min", tip: "Focus on upper back, glutes, and calves. A tennis ball works if you have no roller." },
      ]},
    ]
  },
  {
    label: "Phase 3", weeks: "Weeks 9–12", title: "Strength",
    desc: "Now we push. You should be approaching a full push-up and building serious pulling strength toward that first pull-up.",
    accentColor: ACCENT3,
    days: [
      { name: "Day A — Push & Core", type: "strength", note: "4 rounds. Rest only 60 seconds.", exercises: [
        { name: "Full Push-Up (or Knee Push-Up)", detail: "4 x max clean reps", tip: "Even 2-3 perfect full push-ups beat 15 sloppy ones. Lower chest to floor, full extension up. This is your benchmark." },
        { name: "L-Sit Hold (on floor)", detail: "3 x 10-15 sec", tip: "Sit on floor, hands by hips, lift yourself up. Even if just slightly. Brutal core and shoulder strength." },
        { name: "Single-Leg Glute Bridge", detail: "3 x 8 per leg", tip: "One leg extended straight, drive hips up on the planted foot. Mimics the single-leg demands of real lifting." },
        { name: "Plank to Down Dog", detail: "3 x 8 reps", tip: "Start in plank, push hips up into downward dog, return. Loads shoulders, stretches hamstrings, taxes core throughout." },
      ]},
      { name: "Day B — Pull & Posture", type: "strength", note: "4 rounds. You are training toward pull-up number 1.", exercises: [
        { name: "Negative Pull-Up or Deep Table Row", detail: "4 x 5 reps", tip: "For negatives: jump to bar with chin above, lower in 5 slow seconds. THE fastest path to a pull-up. If no bar: get table rows as low and horizontal as possible." },
        { name: "Pike Push-Up", detail: "3 x 6-8 reps", tip: "Hips high in a V-shape, lower head toward floor between hands. Builds overhead and shoulder strength." },
        { name: "Reverse Snow Angel (floor)", detail: "3 x 12 reps", tip: "Face down, arms by sides — sweep arms overhead and back. Excellent upper back and rear shoulder activation." },
        { name: "Dead Hang (if bar available)", detail: "3 x 15-30 sec", tip: "Just hang. Builds grip, decompresses your spine, stretches your lats. One of the best things you can do for your back." },
      ]},
      { name: "Day C — Active Recovery", type: "rest", note: "Light movement only.", exercises: [
        { name: "20-Minute Walk", detail: "Brisk pace", tip: "Notice if your posture has improved — you should be standing taller." },
        { name: "Full Body Stretch Sequence", detail: "15 min", tip: "Hip flexors, hamstrings, chest, lats, thoracic spine. Spend 45-60 sec on each. Recovery is where you actually grow." },
      ]},
    ]
  },
];

const WEEKS_PER_PHASE = 4;

const chestAbs = {
  sections: [
    { heading: "Chest Focus", color: ACCENT2, exercises: [
      { name: "Wide Push-Up", detail: "3 x max clean reps", tip: "Hands wider than shoulder-width. Shifts emphasis from triceps to the outer pec. Go slow on the descent — 3 seconds down." },
      { name: "Diamond Push-Up (or close-grip)", detail: "2 x 5-8 reps", tip: "Hands close together forming a diamond under your chest. Hits the inner chest and gives the center-line definition. Very hard — do knee version if needed." },
      { name: "Chair Dip", detail: "3 x 8-10 reps", tip: "Hands on chair edge behind you, legs extended. Dip down until upper arms are parallel to floor, push back up. Lean slightly forward to bias the chest." },
      { name: "Push-Up Hold at Bottom", detail: "2 x 20-30 sec", tip: "Lower to an inch above the floor and hold. Isometric chest tension — creates serious muscle activation without more reps." },
    ]},
    { heading: "Visible Abs Focus", color: ACCENT, exercises: [
      { name: "Bicycle Crunch", detail: "3 x 15 reps per side", tip: "Slow and controlled. Bring elbow toward opposite knee, fully extend the other leg. Works the rectus abdominis AND obliques." },
      { name: "Leg Raise", detail: "3 x 10 reps", tip: "Lie flat, hands under hips. Raise legs to 90 degrees, lower slowly without touching the floor. Lower abs — hardest section to develop." },
      { name: "Heel Tap", detail: "3 x 20 reps (10 per side)", tip: "Lie on back, knees bent, crunch slightly sideways to tap each heel alternately. Isolates the obliques — the muscles that give your waist a defined shape." },
      { name: "Ab Crunch Slow and Controlled", detail: "3 x 12 reps (3-sec up, 3-sec down)", tip: "Hands behind head, elbows wide. Crunch up slowly, pause at top, lower slowly. No momentum. The tempo is everything here." },
    ]},
  ]
};

const stretchData = {
  sections: [
    { heading: "Hamstrings", color: ACCENT, note: "Do these before glute bridges to prevent cramping. Tight hamstrings from sitting are the number 1 cramp cause.", items: [
      { name: "Lying Hamstring Pull", hold: "30-45 sec per side", tip: "Lie on back. Pull one leg toward chest with hands behind the knee — keep the leg slightly bent. You feel it in the back of the thigh." },
      { name: "Standing Toe Touch", hold: "20-30 sec", tip: "Stand, hinge forward, let arms hang toward floor. Don't force it — just relax and let gravity do the work. Knees can be slightly bent." },
      { name: "Seated Hamstring Stretch", hold: "45 sec per side", tip: "Sit on floor, one leg extended straight, other bent inward. Reach toward the extended foot. Hinge from the hip — don't round your back." },
      { name: "Standing Single-Leg Stretch", hold: "30 sec per side", tip: "Rest heel on a low surface (chair, step). Stand tall and hinge slightly forward at the hip. More controlled than floor stretches." },
    ]},
    { heading: "Hips and Hip Flexors", color: ACCENT2, note: "Years of sitting tightens the hip flexors, tilting the pelvis forward and causing lower back pain. Critical for your posture goals.", items: [
      { name: "Kneeling Hip Flexor Stretch", hold: "45-60 sec per side", tip: "Lunge forward, drop the back knee to the floor. Shift your hips forward until you feel a pull in the front of the back hip. Keep torso upright. Most important stretch in this program." },
      { name: "Pigeon Pose (Floor)", hold: "60 sec per side", tip: "From all fours, bring one knee forward toward the same-side wrist. Extend the other leg straight back. Sink your hips toward the floor. Deep glute and hip opener." },
      { name: "Figure-4 Stretch", hold: "45 sec per side", tip: "Lie on back, cross one ankle over the opposite knee forming a figure-4 shape. Pull both legs toward your chest. Deep glute and outer hip stretch. Easier than pigeon for beginners." },
      { name: "Butterfly Stretch", hold: "45-60 sec", tip: "Sit on floor, soles of feet together, knees dropped to sides. Hold feet, sit tall, gently press knees toward floor with elbows. Inner hip and groin opener." },
      { name: "90/90 Hip Stretch", hold: "60 sec per side", tip: "Sit with both knees at 90 degree angles — one in front, one to the side. Sit tall, gently lean over the front shin. Incredible for hip rotation." },
    ]},
    { heading: "Core and Lower Back", color: ACCENT3, note: "Essential after core work and for keeping your lower back healthy long-term.", items: [
      { name: "Child's Pose", hold: "60 sec", tip: "Kneel, sit hips back toward heels, reach arms forward on floor, rest forehead down. Stretches the entire spine, lats, and lower back. Do this after every workout." },
      { name: "Cat-Cow Dynamic", hold: "10 slow reps", tip: "On all fours. Arch back up toward ceiling (cat), then drop belly and lift head (cow). Move slowly and breathe through it. A full spinal reset." },
      { name: "Supine Twist", hold: "45 sec per side", tip: "Lie on back, pull one knee to chest, then guide it across your body to the floor with the opposite hand. Arms out like a T. Rotates and decompresses the lower spine." },
      { name: "Cobra Stretch", hold: "20-30 sec, 3 reps", tip: "Lie face down, hands under shoulders. Press up through your hands, lifting chest off floor. Hips stay on the ground. Counteracts all the forward-bending life and crunches do to your spine." },
      { name: "Seated Side Bend", hold: "30 sec per side", tip: "Sit cross-legged or in a chair. Reach one arm overhead and lean to the opposite side. Stretches the obliques and the sides of your core." },
    ]},
  ]
};

const tips = [
  { num: "01", text: "Every workout follows an A / B / C pattern — never do A and B back to back. Always put a C (rest) day between strength days." },
  { num: "02", text: "Soreness is okay. Sharp pain in joints is a stop sign. Learn the difference between muscle burn and joint warning signals." },
  { num: "03", text: "Slow reps build more strength than fast reps. A 3-second descent does more work than snapping back up. You have no weight — time is your resistance." },
  { num: "04", text: "The posture exercises (Superman, Wall Angels, Bird Dog) are more important than abs exercises for back health. Don't skip them." },
  { num: "05", text: "For lifting things in real life: hinge at the hips, not the back. Practice the Glute Bridge and Bird Dog — they directly train this pattern." },
  { num: "06", text: "Progress isn't always visible in the mirror. Track reps, notice when exercises feel easier, and notice how you stand and sit. These are wins." },
  { num: "07", text: "Eat enough protein — aim for some protein (eggs, chicken, beans) in every meal to support muscle rebuilding." },
  { num: "08", text: "Consistency beats intensity. 3 half-effort sessions per week every week beats 1 brutal session followed by a week off. Show up." },
];

const MAIN_TABS = ["Phase 1", "Phase 2", "Phase 3", "Chest & Abs", "Stretches", "Tips"];
const TAB_COLORS = [ACCENT, ACCENT2, ACCENT3, ACCENT2, ACCENT3, MUTED];

function exKey(pi, wi, di, ei) { return `p${pi}w${wi}d${di}e${ei}`; }

function weekTotal(pi) {
  return phaseData[pi].days.reduce((s, d) => s + d.exercises.length, 0);
}
function weekDone(pi, wi, checked) {
  let n = 0;
  phaseData[pi].days.forEach((d, di) => d.exercises.forEach((_, ei) => { if (checked[exKey(pi, wi, di, ei)]) n++; }));
  return n;
}
function phaseTotal(pi) { return WEEKS_PER_PHASE * weekTotal(pi); }
function phaseDone(pi, checked) {
  let n = 0;
  for (let wi = 0; wi < WEEKS_PER_PHASE; wi++) n += weekDone(pi, wi, checked);
  return n;
}

function ProgressRing({ pct, size, color }) {
  const r = (size - 5) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ flexShrink: 0, display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={BORDER} strokeWidth={3.5} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
        strokeWidth={3.5} strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: "stroke-dashoffset 0.4s ease" }} />
      <text x={size/2} y={size/2 + 4} textAnchor="middle" fill={color} fontSize={size < 44 ? 8 : 10} fontWeight="700">{pct}%</text>
    </svg>
  );
}

function ExRow({ ex, id, color, checked, toggle }) {
  const done = !!checked[id];
  return (
    <div style={{ display: "flex", gap: 12, padding: "11px 0", borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
      <button onClick={() => toggle(id)} style={{
        flexShrink: 0, width: 24, height: 24, marginTop: 1, borderRadius: 5,
        border: `2px solid ${done ? color : BORDER}`, background: done ? color : "none",
        color: "#000", fontSize: 13, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700
      }}>{done ? "✓" : ""}</button>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: done ? MUTED : TEXT, textDecoration: done ? "line-through" : "none", lineHeight: 1.3 }}>{ex.name}</div>
        <div style={{ fontSize: 12, color, marginTop: 3, fontWeight: 600 }}>{ex.detail || ex.hold}</div>
        <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.55 }}>{ex.tip}</div>
      </div>
    </div>
  );
}

function DayAccordion({ day, pi, wi, di, color, checked, toggle }) {
  const [open, setOpen] = useState(di === 0);
  const tc = day.type === "rest" ? MUTED : color;
  const tl = day.type === "rest" ? "Recovery" : "Strength";
  const tot = day.exercises.length;
  const don = day.exercises.filter((_, ei) => checked[exKey(pi, wi, di, ei)]).length;
  return (
    <div style={{ marginBottom: 10, background: CARD, border: `1px solid ${open ? color + "44" : BORDER}`, borderRadius: 8, overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>{day.name}</span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, background: tc + "22", color: tc }}>{tl}</span>
          </div>
          <div style={{ fontSize: 11, color: MUTED, marginTop: 3 }}>{don}/{tot} done {don === tot ? "✅" : ""}</div>
        </div>
        <span style={{ color: MUTED, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", fontSize: 18, marginLeft: 8 }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 11, color: MUTED, fontStyle: "italic", padding: "9px 0 4px", lineHeight: 1.5 }}>{day.note}</div>
          {day.exercises.map((ex, ei) => <ExRow key={ei} ex={ex} id={exKey(pi, wi, di, ei)} color={color} checked={checked} toggle={toggle} />)}
        </div>
      )}
    </div>
  );
}

function WeekView({ pi, wi, onBack, checked, toggle }) {
  const ph = phaseData[pi];
  const globalWeek = pi * WEEKS_PER_PHASE + wi + 1;
  const tot = weekTotal(pi);
  const don = weekDone(pi, wi, checked);
  const pct = tot ? Math.round(don / tot * 100) : 0;
  return (
    <div>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: ph.accentColor, cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18, padding: 0 }}>
        ← Back to {ph.label}
      </button>
      <div style={{ marginBottom: 18, padding: 16, background: SURFACE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ph.accentColor}`, borderRadius: 8 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ph.accentColor, marginBottom: 7 }}>Week {globalWeek} of 12</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: TEXT, lineHeight: 1.2 }}>{ph.title} — Week {wi + 1}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.6 }}>{ph.desc}</div>
          </div>
          <ProgressRing pct={pct} size={56} color={ph.accentColor} />
        </div>
        <div style={{ marginTop: 14, height: 4, background: BORDER, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: ph.accentColor, borderRadius: 2, transition: "width 0.4s" }} />
        </div>
        <div style={{ fontSize: 10, color: MUTED, marginTop: 6 }}>{don} / {tot} exercises completed this week</div>
      </div>
      {ph.days.map((day, di) => <DayAccordion key={di} day={day} pi={pi} wi={wi} di={di} color={ph.accentColor} checked={checked} toggle={toggle} />)}
    </div>
  );
}

function PhaseView({ pi, checked, toggle }) {
  const [selWeek, setSelWeek] = useState(null);
  const ph = phaseData[pi];
  const tot = phaseTotal(pi);
  const don = phaseDone(pi, checked);
  const pct = tot ? Math.round(don / tot * 100) : 0;

  if (selWeek !== null) return <WeekView pi={pi} wi={selWeek} onBack={() => setSelWeek(null)} checked={checked} toggle={toggle} />;

  return (
    <div>
      <div style={{ marginBottom: 20, padding: 18, background: SURFACE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ph.accentColor}`, borderRadius: 8 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ph.accentColor, marginBottom: 7 }}>{ph.weeks}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: TEXT }}>{ph.label} — {ph.title}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.6 }}>{ph.desc}</div>
          </div>
          <ProgressRing pct={pct} size={60} color={ph.accentColor} />
        </div>
        <div style={{ marginTop: 14, height: 4, background: BORDER, borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: ph.accentColor, borderRadius: 2, transition: "width 0.4s" }} />
        </div>
        <div style={{ fontSize: 10, color: MUTED, marginTop: 6 }}>{don} / {tot} total exercises completed</div>
      </div>

      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 12 }}>Select a Week</div>
      {Array.from({ length: WEEKS_PER_PHASE }, (_, wi) => {
        const globalWeek = pi * WEEKS_PER_PHASE + wi + 1;
        const wTot = weekTotal(pi);
        const wDon = weekDone(pi, wi, checked);
        const wPct = wTot ? Math.round(wDon / wTot * 100) : 0;
        const complete = wDon === wTot && wTot > 0;
        return (
          <button key={wi} onClick={() => setSelWeek(wi)} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 18px", marginBottom: 10,
            background: complete ? ph.accentColor + "12" : CARD,
            border: `1px solid ${complete ? ph.accentColor + "66" : BORDER}`,
            borderRadius: 8, cursor: "pointer", textAlign: "left"
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>Week {globalWeek}</span>
                {complete && <span style={{ fontSize: 11, fontWeight: 700, color: ph.accentColor, background: ph.accentColor + "22", padding: "2px 8px", borderRadius: 10 }}>Complete</span>}
              </div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{wDon} / {wTot} exercises done</div>
              <div style={{ marginTop: 9, width: 100, height: 3, background: BORDER, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${wPct}%`, background: ph.accentColor, borderRadius: 2, transition: "width 0.4s" }} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <ProgressRing pct={wPct} size={46} color={ph.accentColor} />
              <span style={{ color: MUTED, fontSize: 20, fontWeight: 300 }}>›</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState({});
  const toggle = (id) => setChecked(c => ({ ...c, [id]: !c[id] }));

  let allTot = 0, allDon = 0;
  for (let pi = 0; pi < 3; pi++) { allTot += phaseTotal(pi); allDon += phaseDone(pi, checked); }
  chestAbs.sections.forEach((s, si) => s.exercises.forEach((_, ei) => { allTot++; if (checked[`ca${si}${ei}`]) allDon++; }));
  stretchData.sections.forEach((s, si) => s.items.forEach((_, ei) => { allTot++; if (checked[`st${si}${ei}`]) allDon++; }));
  const overallPct = allTot ? Math.round(allDon / allTot * 100) : 0;

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", paddingBottom: 60 }}>
      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } ::-webkit-scrollbar { display: none; } button { font-family: inherit; color: inherit; }`}</style>

      {/* Header */}
      <div style={{ padding: "30px 20px 20px", borderBottom: `1px solid ${BORDER}`, background: "linear-gradient(180deg,#131313 0%,#0e0e0e 100%)" }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, border: `1px solid ${ACCENT}44`, padding: "3px 10px", borderRadius: 2, display: "inline-block", marginBottom: 12 }}>Bodyweight · No Equipment · Beginner</div>
        <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
          ZERO<br /><span style={{ color: ACCENT }}>TO STRONG</span>
        </div>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 12, lineHeight: 1.6 }}>Core strength, posture, and functional power — using only your body.</div>
      </div>

      {/* Overall progress */}
      <div style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}`, padding: "12px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>
          <span>Overall Program Progress</span><span style={{ color: ACCENT }}>{overallPct}%</span>
        </div>
        <div style={{ height: 5, background: BORDER, borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${overallPct}%`, background: `linear-gradient(90deg,${ACCENT},${ACCENT2})`, borderRadius: 3, transition: "width 0.5s ease" }} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: SURFACE, borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        {MAIN_TABS.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            flexShrink: 0, padding: "12px 14px", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", background: "none", border: "none",
            borderBottom: tab === i ? `2px solid ${TAB_COLORS[i]}` : "2px solid transparent",
            color: tab === i ? TAB_COLORS[i] : MUTED, cursor: "pointer", whiteSpace: "nowrap"
          }}>{t}</button>
        ))}
      </div>

      <div style={{ padding: "20px 16px", maxWidth: 640, margin: "0 auto" }}>

        {tab < 3 && <PhaseView pi={tab} checked={checked} toggle={toggle} />}

        {tab === 3 && (
          <>
            <div style={{ marginBottom: 18, padding: 16, background: SURFACE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT2}`, borderRadius: 8 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, marginBottom: 6 }}>Add this after Day A workouts</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: TEXT }}>Chest & Abs Finisher</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.6 }}>Tack this onto the end of your Day A sessions. These moves directly target chest definition and the abs visible on the surface.</div>
              <div style={{ marginTop: 10, fontSize: 11, color: ACCENT2, fontWeight: 700 }}>Start in Week 3+ once your push-up foundation is solid.</div>
            </div>
            {chestAbs.sections.map((sec, si) => (
              <div key={si}>
                <div style={{ padding: "8px 0 6px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: sec.color, borderBottom: `1px solid ${BORDER}`, marginBottom: 4 }}>{sec.heading}</div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0 16px", marginBottom: 18 }}>
                  {sec.exercises.map((ex, ei) => <ExRow key={ei} ex={ex} id={`ca${si}${ei}`} color={sec.color} checked={checked} toggle={toggle} />)}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === 4 && (
          <>
            <div style={{ marginBottom: 18, padding: 16, background: SURFACE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT3}`, borderRadius: 8 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT3, marginBottom: 6 }}>Pre and Post Workout</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: TEXT }}>Stretch Library</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.6 }}>Before: 30 sec holds. After: 45-60 sec. Always stretch hamstrings and hips before glute bridges to prevent cramping.</div>
            </div>
            {stretchData.sections.map((sec, si) => (
              <div key={si}>
                <div style={{ margin: "16px 0 6px", padding: "10px 14px", background: SURFACE, borderLeft: `3px solid ${sec.color}`, borderRadius: 4 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: sec.color }}>{sec.heading}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginTop: 4, lineHeight: 1.5 }}>{sec.note}</div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0 16px", marginBottom: 6 }}>
                  {sec.items.map((ex, ei) => <ExRow key={ei} ex={ex} id={`st${si}${ei}`} color={sec.color} checked={checked} toggle={toggle} />)}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === 5 && (
          <div style={{ padding: 18, background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 8 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: ACCENT, marginBottom: 18 }}>Rules That Actually Matter</div>
            {tips.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, fontSize: 13, lineHeight: 1.6, color: MUTED }}>
                <span style={{ fontSize: 17, fontWeight: 900, color: ACCENT2, flexShrink: 0, lineHeight: 1, marginTop: 2 }}>{t.num}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
