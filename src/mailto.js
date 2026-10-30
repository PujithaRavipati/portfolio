// Builds the mailto: link the contact form opens when no Formspree ID is set
export const buildMailto = (to, data) => {
  const name = `${data.get('firstName')} ${data.get('lastName')}`;
  const body = `${data.get('message')}\n\n${name}\n${data.get('email')}\n${data.get('phone') || ''}`;
  return `mailto:${to}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
};
