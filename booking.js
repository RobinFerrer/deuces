/* ═══════════════════════════════════════════════════
   BOOKING — court reservation demo
   - Date strip prev/next
   - Sport tabs swap court sets + accent color
   - Multi-slot selection (1–4 adjacent blocks = 30–120 min)
   - Sticky action bar → opens confirmation modal
═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Data ───────────────────────────────────── */
    const COURTS = {
        'padel': [
            { id: 1, name: '1. Evident' },
            { id: 2, name: '2. The Bullet' },
            { id: 3, name: '3. CUPRA Groep Thoen' },
            { id: 4, name: '4. ABF Rosiers' }
        ],
        'tennis-clay': [
            { id: 1, name: '1. Gravel North' },
            { id: 2, name: '2. Gravel South' },
            { id: 3, name: '3. Gravel East' },
            { id: 4, name: '4. Gravel West' },
            { id: 5, name: '5. Gravel Centre' },
            { id: 6, name: '6. Gravel Stadium' }
        ],
        'tennis-hard': [
            { id: 1, name: '1. Indoor A' },
            { id: 2, name: '2. Indoor B' },
            { id: 3, name: '3. Indoor C' },
            { id: 4, name: '4. Indoor D' },
            { id: 5, name: '5. Indoor E' },
            { id: 6, name: '6. Indoor F' },
            { id: 7, name: '7. Indoor G' },
            { id: 8, name: '8. Indoor H' }
        ]
    };

    const SPORT_LABELS = {
        'padel':        'Padel',
        'tennis-clay':  'Tennis — Gravel',
        'tennis-hard':  'Tennis — Indoor'
    };

    const PRICE_PER_HOUR = {
        'padel':        28,
        'tennis-clay':  18,
        'tennis-hard':  22
    };

    const SLOT_MINUTES = 30;
    const MAX_BLOCKS = 4;
    const DAY_START = 8.5;
    const DAY_END   = 22;

    /* ── State ──────────────────────────────────── */
    let currentDate  = new Date();
    let currentSport = 'padel';
    let activeCourtIndex = 0;
    /* Selection: an ordered list of {courtId, slotIndex} entries on the same court */
    let selection = [];

    /* ── Pseudo-random booked pattern (stable per date/court/slot) ── */
    function hash(str) {
        let h = 0;
        for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
        return Math.abs(h);
    }
    function isBooked(dateKey, sport, courtId, slotIndex) {
        return (hash(`${dateKey}|${sport}|${courtId}|${slotIndex}`) % 100) < 25;
    }

    /* ── Date helpers ───────────────────────────── */
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function dateKey(d) {
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    }
    function formatTime(hours) {
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return `${pad(h)}:${pad(m)}`;
    }
    function formatDate(d, lang) {
        const dayEn = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const dayNl = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
        const monEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const monNl = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
        const nl = lang === 'nl';
        return {
            day:  (nl ? dayNl : dayEn)[d.getDay()],
            full: `${d.getDate()} ${(nl ? monNl : monEn)[d.getMonth()]} ${d.getFullYear()}`
        };
    }
    function getLang() {
        return document.documentElement.lang === 'nl' ? 'nl' : 'en';
    }

    /* ── Render: date + grid ────────────────────── */
    function renderDate() {
        const f = formatDate(currentDate, getLang());
        const dayEl  = document.getElementById('bkDateDay');
        const fullEl = document.getElementById('bkDateFull');
        if (dayEl)  dayEl.textContent = f.day;
        if (fullEl) fullEl.textContent = f.full;
    }

    function renderGrid() {
        const grid = document.getElementById('bkGrid');
        if (!grid) return;

        grid.dataset.sport = currentSport;
        document.body.setAttribute('data-active-sport', currentSport);

        const courts = COURTS[currentSport] || [];
        if (activeCourtIndex >= courts.length) activeCourtIndex = 0;
        grid.dataset.activeCourt = activeCourtIndex;

        const countEl = document.getElementById('bkCourtCount');
        if (countEl) countEl.textContent = courts.length;

        grid.style.gridTemplateColumns = `80px repeat(${courts.length}, minmax(120px, 1fr))`;
        grid.innerHTML = '';

        // Top-left empty header
        const empty = document.createElement('div');
        empty.className = 'bk-grid-col-head bk-time-col-head';
        grid.appendChild(empty);

        // Court headers
        courts.forEach((c, ci) => {
            const h = document.createElement('div');
            h.className = 'bk-grid-col-head';
            h.dataset.courtIndex = ci;
            h.textContent = c.name;
            grid.appendChild(h);
        });

        // Rows
        const today = new Date();
        const isToday = dateKey(currentDate) === dateKey(today);
        const nowHours = today.getHours() + today.getMinutes() / 60;
        const dKey = dateKey(currentDate);
        const totalSlots = Math.round((DAY_END - DAY_START) / (SLOT_MINUTES / 60));

        for (let i = 0; i < totalSlots; i++) {
            const slotHour = DAY_START + i * (SLOT_MINUTES / 60);

            const timeCell = document.createElement('div');
            timeCell.className = 'bk-time-cell';
            timeCell.textContent = formatTime(slotHour);
            grid.appendChild(timeCell);

            courts.forEach((c, ci) => {
                const slot = document.createElement('button');
                slot.type = 'button';

                const past = isToday && slotHour < nowHours;
                const booked = !past && isBooked(dKey, currentSport, c.id, i);
                const state = past ? 'past' : (booked ? 'booked' : 'free');

                slot.className = `bk-slot bk-slot--${state}`;
                slot.dataset.courtId = c.id;
                slot.dataset.courtIndex = ci;
                slot.dataset.slotIndex = i;
                slot.dataset.state = state;

                let label = '';
                if (state === 'free')   label = (getLang() === 'nl' ? 'Vrij' : 'Free');
                if (state === 'booked') label = (getLang() === 'nl' ? 'Bezet' : 'Booked');
                if (state === 'past')   label = (getLang() === 'nl' ? 'Verlopen' : 'Closed');
                slot.innerHTML = `<span class="bk-slot-label">${label}</span>`;

                if (state === 'free') {
                    slot.addEventListener('click', () => onSlotClick(c.id, i));
                }
                grid.appendChild(slot);
            });
        }

        applySelectionToDom();
    }

    function renderCourtTabs() {
        const tabs = document.getElementById('bkCourtTabs');
        if (!tabs) return;
        const courts = COURTS[currentSport] || [];

        tabs.innerHTML = '';
        courts.forEach((c, ci) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'bk-court-tab' + (ci === activeCourtIndex ? ' active' : '');
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', ci === activeCourtIndex ? 'true' : 'false');
            btn.dataset.courtIndex = ci;
            btn.textContent = c.name;
            btn.addEventListener('click', () => {
                activeCourtIndex = ci;
                const grid = document.getElementById('bkGrid');
                if (grid) grid.dataset.activeCourt = activeCourtIndex;
                tabs.querySelectorAll('.bk-court-tab').forEach(t => {
                    const on = parseInt(t.dataset.courtIndex, 10) === activeCourtIndex;
                    t.classList.toggle('active', on);
                    t.setAttribute('aria-selected', on ? 'true' : 'false');
                });
            });
            tabs.appendChild(btn);
        });
    }

    function renderAll() {
        renderDate();
        renderGrid();
        renderCourtTabs();
        renderActionBar();
    }

    /* ── Selection logic ────────────────────────── */
    function onSlotClick(courtId, slotIndex) {
        // Different court → reset to single
        if (selection.length && selection[0].courtId !== courtId) {
            selection = [{ courtId, slotIndex }];
            return finishSelection();
        }

        // Already in selection → deselect this slot (and anything after it to stay contiguous)
        const idx = selection.findIndex(s => s.slotIndex === slotIndex);
        if (idx >= 0) {
            selection = selection.slice(0, idx);
            return finishSelection();
        }

        if (selection.length === 0) {
            selection = [{ courtId, slotIndex }];
            return finishSelection();
        }

        const first = selection[0].slotIndex;
        const last  = selection[selection.length - 1].slotIndex;
        const dKey  = dateKey(currentDate);

        // Try to extend from the end
        if (slotIndex > last) {
            const extended = [...selection];
            for (let i = last + 1; i <= slotIndex; i++) {
                if (extended.length >= MAX_BLOCKS) break;
                if (isBooked(dKey, currentSport, courtId, i)) break;
                extended.push({ courtId, slotIndex: i });
            }
            if (extended[extended.length - 1].slotIndex === slotIndex) {
                selection = extended;
            } else {
                // Blocked by booked or max — start fresh
                selection = [{ courtId, slotIndex }];
            }
            return finishSelection();
        }

        // Try to extend backwards from the start
        if (slotIndex < first) {
            const extended = [];
            for (let i = slotIndex; i < first; i++) {
                if (extended.length >= MAX_BLOCKS) break;
                if (isBooked(dKey, currentSport, courtId, i)) break;
                extended.push({ courtId, slotIndex: i });
            }
            const combined = extended.concat(selection);
            if (combined[0].slotIndex === slotIndex && combined.length <= MAX_BLOCKS) {
                selection = combined;
            } else {
                selection = [{ courtId, slotIndex }];
            }
            return finishSelection();
        }
    }

    function finishSelection() {
        applySelectionToDom();
        renderActionBar();
    }

    function applySelectionToDom() {
        document.querySelectorAll('.bk-slot--selected').forEach(el => {
            el.classList.remove('bk-slot--selected');
        });
        selection.forEach(sel => {
            const el = document.querySelector(
                `.bk-slot[data-court-id="${sel.courtId}"][data-slot-index="${sel.slotIndex}"]`
            );
            if (el) el.classList.add('bk-slot--selected');
        });
    }

    function clearSelection() {
        selection = [];
        applySelectionToDom();
        renderActionBar();
    }

    /* ── Action bar ─────────────────────────────── */
    function renderActionBar() {
        const bar = document.getElementById('bkActionBar');
        const val = document.getElementById('bkActionBarValue');
        if (!bar || !val) return;

        if (selection.length === 0) {
            bar.classList.remove('active');
            bar.setAttribute('aria-hidden', 'true');
            return;
        }

        const courts = COURTS[currentSport] || [];
        const court  = courts.find(c => c.id === selection[0].courtId);
        const start  = DAY_START + selection[0].slotIndex * (SLOT_MINUTES / 60);
        const end    = DAY_START + (selection[selection.length - 1].slotIndex + 1) * (SLOT_MINUTES / 60);
        const minutes = selection.length * SLOT_MINUTES;

        val.textContent = `${court ? court.name : ''} · ${formatTime(start)}–${formatTime(end)} (${minutes} min)`;

        bar.classList.add('active');
        bar.setAttribute('aria-hidden', 'false');
    }

    /* ── Modal ──────────────────────────────────── */
    function openModal() {
        if (selection.length === 0) return;
        const modal = document.getElementById('bkModal');
        if (!modal) return;

        const courts = COURTS[currentSport] || [];
        const court  = courts.find(c => c.id === selection[0].courtId);
        const start  = DAY_START + selection[0].slotIndex * (SLOT_MINUTES / 60);
        const end    = DAY_START + (selection[selection.length - 1].slotIndex + 1) * (SLOT_MINUTES / 60);
        const hours  = selection.length * (SLOT_MINUTES / 60);
        const date   = formatDate(currentDate, getLang());

        document.getElementById('bkModalSport').textContent = SPORT_LABELS[currentSport];
        document.getElementById('bkModalCourt').textContent = court ? court.name : '';
        document.getElementById('bkModalDate').textContent  = `${date.day}, ${date.full}`;
        document.getElementById('bkModalTime').textContent  = `${formatTime(start)} — ${formatTime(end)} (${selection.length * SLOT_MINUTES} min)`;

        const total = (PRICE_PER_HOUR[currentSport] * hours).toFixed(2);
        const totalEl = document.querySelector('.bk-modal-total-val');
        if (totalEl) totalEl.textContent = `€ ${total.replace('.', ',')}`;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        const modal = document.getElementById('bkModal');
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    /* ── Bind controls ──────────────────────────── */
    function init() {
        // Tabs — swap sport, reset selection
        document.querySelectorAll('.bk-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.bk-tab').forEach(t => {
                    t.classList.toggle('active', t === tab);
                    t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
                });
                currentSport = tab.dataset.sport;
                selection = [];
                activeCourtIndex = 0;
                renderAll();
            });
        });

        // Date nav
        const prev = document.getElementById('bkDatePrev');
        const next = document.getElementById('bkDateNext');
        if (prev) prev.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() - 1);
            selection = [];
            renderAll();
        });
        if (next) next.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() + 1);
            selection = [];
            renderAll();
        });

        // Action bar
        const clearBtn = document.getElementById('bkClearSelection');
        const bookBtn  = document.getElementById('bkOpenModal');
        if (clearBtn) clearBtn.addEventListener('click', clearSelection);
        if (bookBtn)  bookBtn.addEventListener('click', openModal);

        // Modal close
        document.querySelectorAll('[data-modal-close]').forEach(el => {
            el.addEventListener('click', closeModal);
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal();
        });

        renderAll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
