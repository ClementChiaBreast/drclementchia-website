export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function CrossMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 2v44M2 24h44" stroke="currentColor" strokeWidth="1"/><circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1"/><circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4"/></svg>;
}
export function Orbit({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 220 220" fill="none" aria-hidden="true"><circle cx="110" cy="110" r="76" stroke="currentColor" strokeWidth="1"/><ellipse cx="110" cy="110" rx="102" ry="45" transform="rotate(35 110 110)" stroke="currentColor" strokeWidth="1"/><ellipse cx="110" cy="110" rx="102" ry="45" transform="rotate(-35 110 110)" stroke="currentColor" strokeWidth="1"/><circle cx="110" cy="110" r="12" fill="currentColor"/><circle cx="42" cy="52" r="5" fill="#df765f"/></svg>;
}
