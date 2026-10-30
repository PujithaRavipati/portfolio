import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMailto } from './mailto.js';

test('mailto carries name, message and reply address, encoded', () => {
  const data = new FormData();
  data.set('firstName', 'Ana');
  data.set('lastName', 'Rao & Co');
  data.set('email', 'ana@example.com');
  data.set('message', 'Hi?\nLine two');
  const url = new URL(buildMailto('me@example.com', data));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'me@example.com');
  assert.equal(url.searchParams.get('subject'), 'Portfolio message from Ana Rao & Co');
  assert.equal(url.searchParams.get('body'), 'Hi?\nLine two\n\nAna Rao & Co\nana@example.com\n');
});
