const DashboardBackground = () => {
  // Static-but-randomized data points
  const linePoints = [40, 55, 35, 70, 50, 80, 60, 95, 75, 110, 90, 130];
  const linePath = linePoints
    .map((y, i) => `${i === 0 ? 'M' : 'L'} ${i * 30} ${150 - y}`)
    .join(' ');
  const areaPath = `${linePath} L ${(linePoints.length - 1) * 30} 150 L 0 150 Z`;

  const bars = [60, 90, 45, 110, 75, 130, 95, 70];
  const pieSlices = [
    { offset: 0, length: 110, color: 'hsl(var(--primary))' },
    { offset: 110, length: 80, color: 'hsl(var(--accent))' },
    { offset: 190, length: 50, color: 'hsl(var(--secondary))' },
    { offset: 240, length: 36, color: 'hsl(var(--chart-4))' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        }}
      />

      {/* Warm color washes */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl" />

      {/* Top-right line chart card */}
      <div className="absolute top-24 right-8 w-[360px] hidden lg:block opacity-60">
        <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Model Accuracy</div>
              <div className="text-lg font-bold text-foreground">92.3%</div>
            </div>
            <div className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">+4.7%</div>
          </div>
          <svg viewBox="0 0 330 150" className="w-full h-[110px]">
            <defs>
              <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 60, 90, 120].map((y) => (
              <line key={y} x1="0" x2="330" y1={y} y2={y} stroke="hsl(var(--border))" strokeDasharray="3 4" />
            ))}
            <path d={areaPath} fill="url(#areaFill)" />
            <path d={linePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {linePoints.map((y, i) => (
              <circle key={i} cx={i * 30} cy={150 - y} r="2.5" fill="hsl(var(--primary))" />
            ))}
          </svg>
        </div>
      </div>

      {/* Bottom-left bar chart card */}
      <div className="absolute bottom-24 left-6 w-[280px] hidden lg:block opacity-55">
        <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Weekly Commits</div>
            <div className="text-[10px] font-mono text-accent">7d</div>
          </div>
          <svg viewBox="0 0 240 140" className="w-full h-[100px]">
            {bars.map((h, i) => (
              <g key={i}>
                <rect x={i * 30 + 6} y={140 - h} width="18" height={h} rx="3" fill="hsl(var(--accent) / 0.7)" />
                <rect x={i * 30 + 6} y={140 - h} width="18" height="4" rx="2" fill="hsl(var(--accent))" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Middle-right donut + KPIs */}
      <div className="absolute top-1/2 -translate-y-1/2 right-12 w-[240px] hidden xl:block opacity-55">
        <div className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm shadow-sm p-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</div>
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 120 120" className="w-[90px] h-[90px] -rotate-90">
              <circle cx="60" cy="60" r="44" fill="none" stroke="hsl(var(--muted))" strokeWidth="14" />
              {pieSlices.map((s, i) => (
                <circle
                  key={i}
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke={s.color}
                  strokeWidth="14"
                  strokeDasharray={`${s.length} ${276 - s.length}`}
                  strokeDashoffset={-s.offset}
                />
              ))}
            </svg>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" />Python</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent" />ML</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary" />SQL</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-chart-4" />Cloud</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating KPI tiles */}
      <div className="absolute top-1/3 left-8 hidden md:flex flex-col gap-3 opacity-55">
        {[
          { k: 'PROJECTS', v: '12+' },
          { k: 'DATASETS', v: '40K' },
          { k: 'ACCURACY', v: '92%' },
        ].map((t) => (
          <div key={t.k} className="rounded-lg border border-border/60 bg-card/40 backdrop-blur-sm px-3 py-2 shadow-sm">
            <div className="text-[9px] tracking-widest text-muted-foreground">{t.k}</div>
            <div className="text-base font-bold text-foreground font-mono">{t.v}</div>
          </div>
        ))}
      </div>

      {/* Scattered data points */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        {Array.from({ length: 24 }).map((_, i) => {
          const cx = (i * 137) % 100;
          const cy = (i * 71) % 100;
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={(i % 3) + 1.5}
              fill={i % 2 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'}
              opacity="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default DashboardBackground;
