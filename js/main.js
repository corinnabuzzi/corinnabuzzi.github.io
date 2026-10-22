function startClock(el) {
  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: el.dataset.clock,
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  function tick() {
    const now = Date.now();
    el.textContent = format.format(now);
    // next run just after the minute changes, so it never drifts
    setTimeout(tick, 60_000 - (now % 60_000) + 50);
  }

  tick();
}

function setupCopy(button, status) {
  if (!navigator.clipboard) return;

  button.hidden = false;
  let resetTimer;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copied';
      status.textContent = 'Email address copied';
    } catch {
      button.textContent = 'Failed';
      status.textContent = 'Could not copy the email address';
    }

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      button.textContent = 'Copy';
      status.textContent = '';
    }, 1600);
  });
}

const clock = document.querySelector('[data-clock]');
if (clock) startClock(clock);

const copyButton = document.querySelector('[data-copy]');
if (copyButton) setupCopy(copyButton, document.querySelector('[data-copy-status]'));
