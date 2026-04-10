import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({
  children,
  viewBox = '0 0 24 24',
  ...props
}: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function BadgeIcon({ label, ...props }: IconProps & { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <text
        x="12"
        y="12.6"
        fill="currentColor"
        stroke="none"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7"
        fontWeight="700"
      >
        {label}
      </text>
    </svg>
  );
}

export const FaBars = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </StrokeIcon>
);

export const FaTimes = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </StrokeIcon>
);

export const FaSun = (props: IconProps) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.5" />
    <path d="M12 19v2.5" />
    <path d="M4.9 4.9l1.8 1.8" />
    <path d="M17.3 17.3l1.8 1.8" />
    <path d="M2.5 12H5" />
    <path d="M19 12h2.5" />
    <path d="M4.9 19.1l1.8-1.8" />
    <path d="M17.3 6.7l1.8-1.8" />
  </StrokeIcon>
);

export const FaMoon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M14.5 3.5a7.8 7.8 0 1 0 6 12.9A9 9 0 1 1 14.5 3.5Z" />
  </StrokeIcon>
);

export const FaGithub = (props: IconProps) => <BadgeIcon label="GH" {...props} />;
export const FaLinkedin = (props: IconProps) => <BadgeIcon label="in" {...props} />;
export const SiGithub = (props: IconProps) => <BadgeIcon label="GH" {...props} />;
export const SiGit = (props: IconProps) => <BadgeIcon label="Git" {...props} />;
export const SiBitbucket = (props: IconProps) => <BadgeIcon label="BB" {...props} />;
export const SiGo = (props: IconProps) => <BadgeIcon label="Go" {...props} />;
export const SiPython = (props: IconProps) => <BadgeIcon label="Py" {...props} />;
export const SiElixir = (props: IconProps) => <BadgeIcon label="Ex" {...props} />;
export const SiJavascript = (props: IconProps) => <BadgeIcon label="JS" {...props} />;
export const SiDjango = (props: IconProps) => <BadgeIcon label="Dj" {...props} />;
export const SiFastapi = (props: IconProps) => <BadgeIcon label="FA" {...props} />;
export const SiFlask = (props: IconProps) => <BadgeIcon label="Fl" {...props} />;
export const SiReact = (props: IconProps) => <BadgeIcon label="Re" {...props} />;
export const SiTailwindcss = (props: IconProps) => <BadgeIcon label="Tw" {...props} />;
export const SiNginx = (props: IconProps) => <BadgeIcon label="Nx" {...props} />;
export const SiLinux = (props: IconProps) => <BadgeIcon label="Lx" {...props} />;
export const SiMysql = (props: IconProps) => <BadgeIcon label="My" {...props} />;
export const SiSqlite = (props: IconProps) => <BadgeIcon label="Sq" {...props} />;
export const SiPostgresql = (props: IconProps) => <BadgeIcon label="Pg" {...props} />;

export const MdEmail = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4.5 7l7.5 6 7.5-6" />
  </StrokeIcon>
);

export const FaFileDownload = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M8 3.5h5l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19V5a1.5 1.5 0 0 1 1-1.5Z" />
    <path d="M13 3.5V8h4" />
    <path d="M12 10v6" />
    <path d="m9.5 13.5 2.5 2.5 2.5-2.5" />
  </StrokeIcon>
);

export const FaMapMarkerAlt = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M12 20s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" />
    <circle cx="12" cy="10" r="2.5" />
  </StrokeIcon>
);

export const FaGraduationCap = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
    <path d="M7 11.5v4c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4" />
    <path d="M21 9.5v5" />
  </StrokeIcon>
);

export const FaBriefcase = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 11h18" />
  </StrokeIcon>
);

export const FaLanguage = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M4 18h8" />
    <path d="M8 6v12" />
    <path d="M5 11h6" />
    <path d="M14 8c1.2 3.7 2.8 6.8 5 9" />
    <path d="M19 8c-1.2 3.7-2.8 6.8-5 9" />
    <path d="M13 14h8" />
  </StrokeIcon>
);

export const FaTools = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="m14.5 5.5 4 4" />
    <path d="M13 7l-6.5 6.5a2.1 2.1 0 0 0 3 3L16 10" />
    <path d="m5.5 8.5 3 3" />
    <path d="m14 4 6 6" />
  </StrokeIcon>
);

export const FaDatabase = (props: IconProps) => (
  <StrokeIcon {...props}>
    <ellipse cx="12" cy="6" rx="7" ry="2.5" />
    <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
    <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </StrokeIcon>
);

export const FaRobot = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="6" y="7" width="12" height="10" rx="2" />
    <path d="M12 4v3" />
    <path d="M9 20v-3" />
    <path d="M15 20v-3" />
    <circle cx="10" cy="11.5" r="1" />
    <circle cx="14" cy="11.5" r="1" />
    <path d="M9 15h6" />
  </StrokeIcon>
);

export const FaServer = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="4" y="4" width="16" height="5" rx="1.5" />
    <rect x="4" y="10" width="16" height="5" rx="1.5" />
    <rect x="4" y="16" width="16" height="4" rx="1.5" />
    <path d="M8 6.5h.01" />
    <path d="M8 12.5h.01" />
    <path d="M8 18h.01" />
  </StrokeIcon>
);

export const FaGlobe = (props: IconProps) => (
  <StrokeIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </StrokeIcon>
);

export const FaArrowRight = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </StrokeIcon>
);

export const FaCode = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="m9 7-5 5 5 5" />
    <path d="m15 7 5 5-5 5" />
  </StrokeIcon>
);