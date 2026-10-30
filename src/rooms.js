// Also update the path-to-room map in index.html, which sets the line colour before React loads
export const rooms = [
  { id: 'home', key: '1', name: 'Home', path: '/' },
  { id: 'projects', key: '2', name: 'Projects', path: '/projects' },
  { id: 'about', key: '3', name: 'About', path: '/about' },
  { id: 'contact', key: '4', name: 'Contact', path: '/contact' }
];

export const roomFor = (pathname) => {
  const path = pathname.replace(/\/+$/, '') || '/';
  return rooms.find(r => r.path === path) ?? rooms[0];
};
