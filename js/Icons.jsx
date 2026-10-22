const base = { width: '1em', height: '1em', viewBox: '0 0 16 16', fill: 'currentColor', 'aria-hidden': true };

const Play = () => (
  <svg {...base}><path d="M4 2.5v11l9.5-5.5z" /></svg>
);
const Pause = () => (
  <svg {...base}><path d="M3.5 2.5h3v11h-3zM9.5 2.5h3v11h-3z" /></svg>
);
const Prev = () => (
  <svg {...base}><path d="M3 2.5h2v11H3zM14 2.5v11L6 8z" /></svg>
);
const Next = () => (
  <svg {...base}><path d="M11 2.5h2v11h-2zM2 2.5v11L10 8z" /></svg>
);
const Plus = () => (
  <svg {...base}><path d="M7 2h2v5h5v2H9v5H7V9H2V7h5z" /></svg>
);
const Heart = () => (
  <svg {...base}><path d="M8 14.2 1.9 8.4A3.7 3.7 0 0 1 8 3.6a3.7 3.7 0 0 1 6.1 4.8z" /></svg>
);
const Grid = () => (
  <svg {...base}><path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" /></svg>
);
const List = () => (
  <svg {...base}><path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z" /></svg>
);
