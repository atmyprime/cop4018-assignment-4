
(function () {
  const grid = document.getElementById('subjectsGrid');

  // Render subject cards
  Object.entries(DATA).forEach(([subject, topicList], idx) => {
    const card = document.createElement('article');
    card.className = 'card';

    const h3 = document.createElement('h3');
    h3.textContent = subject;

    const p = document.createElement('p');
    p.textContent = 'Click to reveal topics';

    const btn = document.createElement('button');
    btn.className = 'subject-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', `topics-${idx}`);
    btn.textContent = subject;

    const ul = document.createElement('ul');
    ul.className = 'topic-list';
    ul.id = `topics-${idx}`;

    topicList.forEach(topicName => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      // Build link path consistent with /topics/{Subject}/{Topic}.html
      const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
      const topicSlug = topicName.toLowerCase().replace(/\s+/g, '-');
      a.href = `topics/${subjectSlug}/${topicSlug}.html`;
      a.className = 'topic-link';
      a.textContent = topicName;
      li.appendChild(a);
      ul.appendChild(li);
    });

    btn.addEventListener('click', () => {
      const isOpen = ul.classList.toggle('show');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(btn);
    card.appendChild(ul);
    grid.appendChild(card);
  });

  // Ensure homepage loads with all topics hidden (default state)
  // If returning from a topic page, the default hidden state is preserved.
})();
