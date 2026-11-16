// Shared semantic mapping: original Emoji tokens are never rendered as system artwork.
const handIconByEmoji = Object.freeze({
  '🐥':'chicken', '🐷':'pig', '🐂':'cow', '🐟':'fish', '🦆':'duck',
  '🥬':'cabbage', '🏺':'mushroom', '🔥':'fire', '💧':'water-drop',
  '🍳':'frying-pan', '🥘':'shallow-pan', '🍲':'cooking-pot',
  '🥗':'blanched-vegetables', '🥣':'soup-bowl', '⭐':'star',
  '🤤':'tomato', '👍':'stopwatch', '✅':'check', '⚙':'pencil',
  '⚠':'warning', '📥':'download-tray', '❌':'error-cross',
  '🗑':'trash', '🎉':'pudding', '💡':'lightbulb'
});

function handIconKey(emoji) {
  return handIconByEmoji[String(emoji || '').replace(/\uFE0F/g, '')] || 'cooking-pot';
}

function handIconMarkup(key) {
  // Only known local files can be referenced by the renderer.
  if (!Object.values(handIconByEmoji).includes(key)) key = 'cooking-pot';
  return '<span class="hand-icon icon-' + key + '" data-hand-icon="' + key + '" aria-hidden="true"></span>';
}

function makeHandIcon(key) {
  const template = document.createElement('template');
  template.innerHTML = handIconMarkup(key);
  return template.content.firstElementChild;
}

function handStarMarkup(count) {
  return handIconMarkup('star').repeat(Math.max(0, Math.min(Number(count) || 0, 10)));
}

function splitHandIconMessage(message, type) {
  const text = String(message);
  for (const [emoji, key] of Object.entries(handIconByEmoji)) {
    if (text.startsWith(emoji)) {
      return {key, text:text.slice(emoji.length).replace(/^\uFE0F?\s*/, '')};
    }
  }
  return {key:type === 'success' ? 'pudding' : type === 'error' ? 'warning' : 'cooking-pot',text};
}
