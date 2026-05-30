/* ═══════════════════════════════════════════════════
   PRODUCTS — single source of truth for the shop.
   Keyed by slug; product.html?id=<slug> populates from here.
═══════════════════════════════════════════════════ */
window.PRODUCTS = {

    'tactics-blue-tee': {
        name: { en: 'Tactics Blue Tee', nl: 'Tactics Blauw T-shirt' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 59,
        description: {
            en: 'A lightweight performance tee built for on-court movement. The Tactics graphic nods to the strategy behind every shot, wearable both on the baseline and off it. Made from breathable, ring-spun cotton for all-day comfort.',
            nl: 'Een lichtgewicht performance T-shirt voor beweging op de baan. De Tactics print verwijst naar de strategie achter elk schot, draagbaar op de baseline en er ver buiten. Gemaakt van ademend, ring-gesponnen katoen voor comfort de hele dag.'
        },
        images: ['imgs/mockups/Tactics-Blue-Tee.png', 'imgs/mockups/Tactics-White-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'deuces-white-tee': {
        name: { en: 'Deuces White Tee', nl: 'Deuces Wit T-shirt' },
        collection: { en: 'Essentials', nl: 'Essentials' },
        price: 55,
        description: {
            en: 'The everyday essential. A clean Deuces logo on premium cotton, cut for an effortless drop and easy layering. One name. No explanation needed.',
            nl: 'De dagelijkse essentiële. Een schoon Deuces logo op premium katoen, geknipt voor een moeiteloze val en gemakkelijke laagjes.'
        },
        images: ['imgs/mockups/Deuces-Front-White-Tee.png', 'imgs/mockups/Deuces-Front-Blue-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'float-blue-hoodie': {
        name: { en: 'Float Blue Hoodie', nl: 'Float Blauw Hoodie' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 75,
        description: {
            en: 'Heavyweight cotton fleece with a soft brushed interior. Cut roomy for movement, finished with a relaxed hood and signature Deuces embroidery at the chest.',
            nl: 'Zware katoenen fleece met een zacht geborsteld interieur. Ruim gesneden voor beweging, afgewerkt met een ontspannen capuchon en kenmerkend Deuces borduurwerk op de borst.'
        },
        images: ['imgs/mockups/Float-Blue-Hoodie.png', 'imgs/mockups/Float-White-Hoodie.png'],
        sizes: ['S', 'M', 'L', 'XL'],
        category: 'hoodies'
    },

    'bjk-vs-mc-hoodie': {
        name: { en: 'BJK vs MC Hoodie', nl: 'BJK vs MC Hoodie' },
        collection: { en: 'Signature Series', nl: 'Signature Reeks' },
        price: 75,
        description: {
            en: 'A tribute to the match that changed the game. Heavy fleece, dropped shoulder, and a screen-printed back graphic that lets the moment speak for itself.',
            nl: 'Een eerbetoon aan de wedstrijd die het spel veranderde. Zware fleece, gedropte schouder, en een zeefgedrukte rugprint die het moment voor zichzelf laat spreken.'
        },
        images: ['imgs/mockups/BJKvsMC-White-Hoodie.png', 'imgs/mockups/BJKvsMC-Blue-Hoodie.png'],
        sizes: ['S', 'M', 'L', 'XL'],
        category: 'hoodies'
    },

    'cage-blue-tee': {
        name: { en: 'Cage Blue Tee', nl: 'Cage Blauw T-shirt' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 55,
        description: {
            en: 'Inspired by the wire mesh of the cage. A bold front print with a relaxed unisex fit and a soft cotton hand-feel built for play and post-match.',
            nl: 'Geïnspireerd op het draadgaas van de kooi. Een gedurfde voorprint met een ontspannen unisex pasvorm en een zacht katoenen handgevoel.'
        },
        images: ['imgs/mockups/Cage-Blue-Tee.png', 'imgs/mockups/Cage-White-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'tactics-white-hoodie': {
        name: { en: 'Tactics White Hoodie', nl: 'Tactics Wit Hoodie' },
        collection: { en: 'Essentials', nl: 'Essentials' },
        price: 75,
        description: {
            en: 'The Tactics graphic, scaled up across the back of a heavyweight cotton hoodie. Designed for warm-up, warm-down, and everything in between.',
            nl: 'De Tactics print, vergroot over de rug van een zware katoenen hoodie. Ontworpen voor warming-up, cooldown en alles ertussenin.'
        },
        images: ['imgs/mockups/Tactics-White-Hoodie.png', 'imgs/mockups/Tactics-Blue-Hoodie.png'],
        sizes: ['S', 'M', 'L', 'XL'],
        category: 'hoodies'
    },

    'stickman-tennis-tee': {
        name: { en: 'Stickman Tennis Tee', nl: 'Stickman Tennis T-shirt' },
        collection: { en: 'Tennis Icons', nl: 'Tennis Iconen' },
        price: 55,
        description: {
            en: 'A minimalist nod to the players that built the game. Hand-drawn line work on midweight cotton — quiet on the outside, loud in spirit.',
            nl: 'Een minimalistische knipoog naar de spelers die het spel hebben opgebouwd. Handgetekend lijnwerk op middelzwaar katoen.'
        },
        images: ['imgs/mockups/Stickman-Tennis-Blue-Tee.png', 'imgs/mockups/Stickman-Tennis-White-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'tactical-tee': {
        name: { en: 'Tactical Tee', nl: 'Tactical T-shirt' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 35,
        description: {
            en: 'Read the game. Wear the plan. A lightweight tee with tactics imagery printed across the back. Built for the strategist on and off the court.',
            nl: 'Lees het spel. Draag het plan. Een lichtgewicht T-shirt met tactiekafbeeldingen op de rug.'
        },
        images: ['imgs/mockups/Tactics-Blue-Tee.png', 'imgs/mockups/Tactics-White-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'deuces-tee': {
        name: { en: 'Deuces Tee', nl: 'Deuces T-shirt' },
        collection: { en: 'Essentials', nl: 'Essentials' },
        price: 35,
        description: {
            en: 'One name. No explanation needed. The Deuces signature on a midweight ring-spun tee — a quiet flex for those who know.',
            nl: 'Een naam. Geen uitleg nodig. De Deuces handtekening op een middelzwaar T-shirt.'
        },
        images: ['imgs/mockups/Deuces-Front-White-Tee.png', 'imgs/mockups/Deuces-Front-Blue-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    },

    'court-hoodie': {
        name: { en: 'Court Hoodie', nl: 'Court Hoodie' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 50,
        description: {
            en: 'See you on the other side of the net. A relaxed hoodie cut for layering over courtwear, with a brushed-back fleece for cool-down warmth.',
            nl: 'Zie je op de andere kant van het net. Een ontspannen hoodie gesneden voor laagjes over baankleding.'
        },
        images: ['imgs/mockups/Court-Blue-Hoodie.png', 'imgs/mockups/Court-White-Hoodie.png'],
        sizes: ['S', 'M', 'L', 'XL'],
        category: 'hoodies'
    },

    'wimbledon-70-tee': {
        name: { en: "Wimbledon '70 Tee", nl: "Wimbledon '70 T-shirt" },
        collection: { en: 'Signature Series', nl: 'Signature Reeks' },
        price: 35,
        description: {
            en: 'History leaves a mark. A tribute to the 1970 final, printed on a soft vintage-washed cotton tee with a relaxed retro fit.',
            nl: 'Geschiedenis laat een merk achter. Een eerbetoon aan de finale van 1970.'
        },
        images: ['imgs/mockups/BJKvsMC-White-Tee.png', 'imgs/mockups/BJKvsMC-Blue-Tee.png'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        category: 'tees'
    }

};
