function MockupDashboard({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#0f172a" />
      <rect width="52" height="200" fill="#1e293b" />
      <rect x="10" y="20" width="32" height="6" rx="3" fill={a} opacity="0.8" />
      {[50, 68, 86, 104, 122].map((y, i) => (
        <rect key={i} x="10" y={y} width={i === 0 ? 32 : 24} height="5" rx="2.5" fill="white" opacity={i === 0 ? 0.5 : 0.2} />
      ))}
      <rect x="52" y="0" width="268" height="28" fill="#1e293b" />
      <rect x="64" y="10" width="60" height="8" rx="4" fill="white" opacity="0.1" />
      <circle cx="288" cy="14" r="7" fill={a} opacity="0.7" />
      <circle cx="270" cy="14" r="5" fill="white" opacity="0.15" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={64 + i * 82} y="36" width="76" height="44" rx="8" fill="#1e293b" stroke={a} strokeOpacity={i === 0 ? 0.5 : 0.15} strokeWidth="1" />
          <rect x={72 + i * 82} y="45" width="30" height="4" rx="2" fill="white" opacity="0.3" />
          <rect x={72 + i * 82} y="55" width={40 + i * 5} height="7" rx="3" fill={a} opacity={0.6 + i * 0.1} />
          <rect x={72 + i * 82} y="66" width="20" height="3" rx="1.5" fill="#10B981" opacity="0.6" />
        </g>
      ))}
      <rect x="64" y="88" width="168" height="96" rx="10" fill="#1e293b" />
      <rect x="72" y="96" width="60" height="5" rx="2.5" fill="white" opacity="0.3" />
      {[30, 45, 25, 55, 40, 50, 35].map((h, i) => (
        <rect key={i} x={78 + i * 20} y={160 - h} width="12" height={h} rx="3" fill={a} opacity={0.3 + i * 0.08} />
      ))}
      <polyline points="78,140 98,125 118,145 138,115 158,130 178,112 198,120" stroke={a} strokeWidth="2" fill="none" opacity="0.8" />
      {[78, 98, 118, 138, 158, 178, 198].map((x, i) => {
        const ys = [140, 125, 145, 115, 130, 112, 120];
        return <circle key={i} cx={x} cy={ys[i]} r="3" fill={a} />;
      })}
      <rect x="240" y="88" width="80" height="96" rx="10" fill="#1e293b" />
      <rect x="248" y="97" width="40" height="4" rx="2" fill="white" opacity="0.3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="248" y={110 + i * 18} width={16 + i * 8} height="7" rx="3" fill={a} opacity={0.3 + i * 0.1} />
          <rect x={270 + i * 5} y={110 + i * 18} width={30 - i * 5} height="7" rx="3" fill="white" opacity="0.08" />
        </g>
      ))}
    </svg>
  );
}

function MockupLanding({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#0d0617" />
      <ellipse cx="160" cy="80" rx="100" ry="50" fill={a} fillOpacity="0.08" />
      <rect width="320" height="28" fill="#1a0a2e" fillOpacity="0.8" />
      <rect x="16" y="10" width="40" height="8" rx="4" fill={a} opacity="0.7" />
      {[100, 130, 160, 190].map((x, i) => (
        <rect key={i} x={x} y="12" width="20" height="4" rx="2" fill="white" opacity="0.25" />
      ))}
      <rect x="270" y="8" width="40" height="12" rx="6" fill={a} />
      <rect x="80" y="44" width="160" height="8" rx="4" fill="white" opacity="0.12" />
      <rect x="50" y="58" width="220" height="18" rx="6" fill="white" opacity="0.9" />
      <rect x="70" y="82" width="180" height="10" rx="5" fill="white" opacity="0.55" />
      <rect x="90" y="100" width="140" height="8" rx="4" fill="white" opacity="0.3" />
      <rect x="90" y="118" width="65" height="22" rx="11" fill={a} />
      <rect x="165" y="118" width="65" height="22" rx="11" fill="transparent" stroke={a} strokeWidth="1.5" strokeOpacity="0.6" />
      <rect x="98" y="124" width="49" height="10" rx="5" fill="white" opacity="0.8" />
      <rect x="173" y="124" width="49" height="10" rx="5" fill={a} opacity="0.7" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={16 + i * 100} y="152" width="88" height="36" rx="8" fill="#1a0a2e" stroke={a} strokeWidth="0.5" strokeOpacity="0.4" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={24 + i * 100} y="162" width="24" height="5" rx="2.5" fill={a} opacity="0.7" />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={24 + i * 100} y="173" width="60" height="4" rx="2" fill="white" opacity="0.2" />
      ))}
    </svg>
  );
}

function MockupEcommerce({ accent }) {
  const a = accent;
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#061a1a" />
      <rect width="320" height="30" fill="#0a2828" />
      <rect x="16" y="11" width="50" height="8" rx="4" fill={a} opacity="0.8" />
      <rect x="100" y="13" width="120" height="5" rx="2.5" fill="white" opacity="0.15" />
      <rect x="266" y="9" width="40" height="12" rx="6" fill={a} opacity="0.8" />
      <circle cx="252" cy="15" r="6" fill="white" fillOpacity="0.15" />
      <rect x="10" y="40" width="200" height="80" rx="10" fill="#0f3333" />
      <rect x="20" y="52" width="60" height="6" rx="3" fill={a} opacity="0.6" />
      <rect x="20" y="64" width="120" height="12" rx="4" fill="white" opacity="0.8" />
      <rect x="20" y="82" width="100" height="7" rx="3" fill="white" opacity="0.35" />
      <rect x="20" y="100" width="70" height="14" rx="7" fill={a} />
      <ellipse cx="175" cy="80" rx="30" ry="32" fill={a} fillOpacity="0.15" />
      <rect x="155" y="55" width="40" height="50" rx="8" fill={a} fillOpacity="0.25" stroke={a} strokeWidth="1" strokeOpacity="0.5" />
      <rect x="220" y="40" width="90" height="38" rx="8" fill="#0f3333" />
      <rect x="228" y="48" width="50" height="5" rx="2.5" fill={a} opacity="0.7" />
      <rect x="228" y="59" width="40" height="5" rx="2.5" fill="white" opacity="0.5" />
      <rect x="272" y="58" width="30" height="14" rx="7" fill={a} fillOpacity="0.3" stroke={a} strokeWidth="1" strokeOpacity="0.5" />
      <rect x="220" y="84" width="90" height="38" rx="8" fill="#0f3333" />
      <rect x="228" y="92" width="40" height="5" rx="2.5" fill={a} opacity="0.5" />
      <rect x="228" y="103" width="55" height="5" rx="2.5" fill="white" opacity="0.4" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={10 + i * 78} y="132" width="70" height="58" rx="8" fill="#0f3333" />
          <rect x={10 + i * 78} y="132" width="70" height="32" rx="8" fill={a} fillOpacity={0.1 + i * 0.04} />
          <rect x={18 + i * 78} y="170" width="35" height="5" rx="2.5" fill="white" opacity="0.5" />
          <rect x={18 + i * 78} y="180" width="25" height="5" rx="2.5" fill={a} opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function ProjectMockup({ type, accent }) {
  if (type === "dashboard") return <MockupDashboard accent={accent} />;
  if (type === "landing")   return <MockupLanding accent={accent} />;
  if (type === "ecommerce") return <MockupEcommerce accent={accent} />;
  return null;
}
