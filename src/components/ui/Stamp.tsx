export function Stamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 15 C 50 35 65 50 85 50 C 65 50 50 65 50 85 C 50 65 35 50 15 50 C 35 50 50 35 50 15 Z" fill="currentColor" />
    </svg>
  );
}
