// Mouse dragging is separate from the existing click / keyboard cart action.
(() => {
  const app = document.getElementById('app-screen');
  const actions = app.querySelector('.recipe-actions');
  const desktopSlot = document.createComment('Desktop recipe actions');
  actions.before(desktopSlot);
  const mobileSlot = app.querySelector('.mobile-actions-slot');
  const desktopLayout = matchMedia('(min-width: 601px)');
  function placeActions() {
    if (desktopLayout.matches) desktopSlot.after(actions);
    else mobileSlot.append(actions);
  }
  desktopLayout.addEventListener('change', placeActions);
  placeActions();

  const host = app.querySelector('.floating-pot');
  const button = host.querySelector('.cart-toggle');
  const popup = document.getElementById('cart-popup');
  button.title = '点击查看砂锅，按住鼠标可拖动';
  button.querySelector('img').draggable = false;

  let position = null;
  let gesture = null;
  let suppressClickUntil = 0;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));

  function placePopup() {
    if (app.classList.contains('hidden') || popup.classList.contains('hidden')) return;
    const bounds = app.getBoundingClientRect();
    const anchor = host.getBoundingClientRect();
    const width = popup.offsetWidth;
    const height = popup.offsetHeight;
    const left = clamp(anchor.right - width, bounds.left + 8, bounds.right - width - 8);
    const above = anchor.top - height - 14;
    const below = anchor.bottom + 14;
    const top = above >= bounds.top + 8 ? above : clamp(below, bounds.top + 8, bounds.bottom - height - 8);
    Object.assign(popup.style, {left: `${left - anchor.left}px`, top: `${top - anchor.top}px`, right: 'auto', bottom: 'auto'});
  }

  function moveTo(x, y) {
    position = {
      x: clamp(x, 8, app.clientWidth - button.offsetWidth - 8),
      y: clamp(y, 8, app.clientHeight - button.offsetHeight - 8)
    };
    Object.assign(host.style, {left: `${position.x}px`, top: `${position.y}px`, right: 'auto', bottom: 'auto'});
    placePopup();
  }

  button.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || !event.isPrimary) return;
    const bounds = app.getBoundingClientRect();
    const anchor = host.getBoundingClientRect();
    gesture = {id: event.pointerId, x: event.clientX, y: event.clientY, left: anchor.left - bounds.left, top: anchor.top - bounds.top, moved: false};
    button.setPointerCapture(event.pointerId);
  });
  button.addEventListener('pointermove', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (!gesture.moved && Math.hypot(dx, dy) < 6) return;
    gesture.moved = true;
    host.classList.add('pot-dragging');
    event.preventDefault();
    moveTo(gesture.left + dx, gesture.top + dy);
  });

  function endGesture() {
    if (!gesture) return;
    if (gesture.moved) suppressClickUntil = performance.now() + 350;
    const id = gesture.id;
    gesture = null;
    host.classList.remove('pot-dragging');
    if (button.hasPointerCapture(id)) button.releasePointerCapture(id);
  }
  button.addEventListener('pointerup', endGesture);
  button.addEventListener('pointercancel', endGesture);
  button.addEventListener('lostpointercapture', endGesture);
  window.addEventListener('blur', endGesture);
  button.addEventListener('click', event => {
    if (event.detail > 0 && performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
  button.addEventListener('dragstart', event => event.preventDefault());

  const relayout = () => {
    if (app.classList.contains('hidden')) return;
    if (position) moveTo(position.x, position.y);
    else placePopup();
  };
  new ResizeObserver(relayout).observe(app);
  new MutationObserver(relayout).observe(app, {attributes: true, attributeFilter: ['class']});
  new MutationObserver(placePopup).observe(popup, {attributes: true, attributeFilter: ['class']});
  new ResizeObserver(placePopup).observe(popup);
})();
