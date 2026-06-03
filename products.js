/* ═══════════════════════════════════════════════════
   PRODUCTS — single source of truth for the shop.
   Keyed by slug; product.html?id=<slug> populates from here.
   Image order: lead photo first, then variants front/back.
   types[]: clothing forms available; first entry is the default.
═══════════════════════════════════════════════════ */
window.PRODUCTS = {

    'bjkvsmc-tee': {
        name: { en: 'BJK vs MC Tee', nl: 'BJK vs MC T-shirt' },
        collection: { en: 'Signature Series', nl: 'Signature Reeks' },
        price: 55,
        description: {
            en: 'A tribute to the match that changed the game. Bold front print on a midweight ring-spun cotton tee — wear the moment, wherever you go.',
            nl: 'Een eerbetoon aan de wedstrijd die het spel veranderde. Een gedurfde voorprint op een middelzwaar ring-gesponnen katoenen T-shirt — draag het moment, waar je ook gaat.'
        },
        images: [
            'imgs/mockups/Tshirts/BJKvsMC/tshirt_bjkc_tshirt_white_1.jpg',
            'imgs/mockups/Tshirts/BJKvsMC/tshirt_bjkc_shirt_white_2.jpg',
            'imgs/mockups/Tshirts/BJKvsMC/tshirt_bjkc_tshirt_white_3.jpg.png',
            'imgs/mockups/Tshirts/BJKvsMC/BJKvsMC-Blue-Tee.png',
            'imgs/mockups/Tshirts/BJKvsMC/BJKvsMC_Tee_Back_White.png',
            'imgs/mockups/Tshirts/BJKvsMC/BJKvsMC_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/BJKvsMC/BJKvsMC_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/BJKvsMC/BJKvsMC-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/BJKvsMC/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/BJKvsMC/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/BJKvsMC/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Hoodie'],
        category: 'tees'
    },

    'cage-tee': {
        name: { en: 'Cage Tee', nl: 'Cage T-shirt' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 55,
        description: {
            en: 'Inspired by the wire mesh of the cage. A bold front graphic on a relaxed unisex tee — soft cotton hand-feel, built for play and post-match.',
            nl: 'Geïnspireerd op het draadgaas van de kooi. Een gedurfde voorprint op een ontspannen unisex T-shirt — zacht katoenen handgevoel, gemaakt voor het spel en na de match.'
        },
        images: [
            'imgs/mockups/Tshirts/Cage/tshirt_mmoc_shirt_white_shop.jpg',
            'imgs/mockups/Tshirts/Cage/Cage-White-Tee.png',
            'imgs/mockups/Tshirts/Cage/Cage-Blue-Tee.png',
            'imgs/mockups/Tshirts/Cage/Cage_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Cage/Cage_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Cage/Cage_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Cage/Cage-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Cage/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Cage/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Cage/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Hoodie'],
        category: 'tees'
    },

    'court-hoodie': {
        name: { en: 'Court Hoodie', nl: 'Court Hoodie' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 75,
        description: {
            en: 'Heavyweight cotton fleece with a soft brushed interior. Cut roomy for movement, finished with a relaxed hood and signature Deuces line work.',
            nl: 'Zware katoenen fleece met een zacht geborsteld interieur. Ruim gesneden voor beweging, afgewerkt met een ontspannen capuchon en kenmerkend Deuces lijnwerk.'
        },
        images: [
            'imgs/mockups/Tshirts/Court/Court-Grey-Hoodie_shop.png',
            'imgs/mockups/Tshirts/Court/Court-White-Hoodie.png',
            'imgs/mockups/Tshirts/Court/Court-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Court/Court-White-Tee.png',
            'imgs/mockups/Tshirts/Court/Court-Blue-Tee.png',
            'imgs/mockups/Tshirts/Court/Court_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Court/Court_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Court/Court_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Court/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Court/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Court/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        types: ['Hoodie', 'T-shirt'],
        category: 'hoodies'
    },

    'float-sweater': {
        name: { en: 'Float Sweater', nl: 'Float Sweater' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 75,
        description: {
            en: 'A clean crewneck in heavyweight cotton fleece. Brushed-back interior, dropped shoulder, and a subtle Float graphic — designed for warm-ups, cool-downs, and long days off court.',
            nl: 'Een schone crewneck in zware katoenen fleece. Geborstelde binnenkant, gedropte schouder en een subtiele Float print — ontworpen voor warming-ups, cooldowns en lange dagen naast de baan.'
        },
        images: [
            'imgs/mockups/Tshirts/Float/tshirt_court_sweater_blue_shop.jpg',
            'imgs/mockups/Tshirts/Float/Float-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Float/Float-White-Hoodie.png',
            'imgs/mockups/Tshirts/Float/Float-Blue-Tee.png',
            'imgs/mockups/Tshirts/Float/Float-White-Tee.png',
            'imgs/mockups/Tshirts/Float/Float_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Float/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Float/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Float/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        types: ['Sweater', 'Hoodie', 'T-shirt'],
        category: 'hoodies'
    },

    'logo-tee': {
        name: { en: 'Logo Tee', nl: 'Logo T-shirt' },
        collection: { en: 'Essentials', nl: 'Essentials' },
        price: 45,
        description: {
            en: 'The everyday essential. The Deuces script on premium ring-spun cotton, cut for an effortless drop and easy layering. One name — no explanation needed.',
            nl: 'De dagelijkse essentiële. Het Deuces handschrift op premium ring-gesponnen katoen, gesneden voor een moeiteloze val en gemakkelijke laagjes. Eén naam — geen uitleg nodig.'
        },
        images: [
            'imgs/mockups/Tshirts/Logo/tshirt_secundair_logojpg.jpg',
            'imgs/mockups/Tshirts/Logo/Logo_Tee_Front_White_Man.png',
            'imgs/mockups/Tshirts/Logo/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Logo/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Logo/longsleeve.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Longsleeve'],
        category: 'tees'
    },

    'padel-court-tee': {
        name: { en: 'Padel Court Tee', nl: 'Padel Court T-shirt' },
        collection: { en: 'Padel Series', nl: 'Padel Reeks' },
        price: 55,
        description: {
            en: 'A clean line drawing of a padel court, screen-printed on midweight cotton. Quiet on the front, complete on the back — for those who know the game.',
            nl: 'Een schone lijntekening van een padelbaan, zeefgedrukt op middelzwaar katoen. Stil op de voorkant, volledig op de rug — voor wie het spel kent.'
        },
        images: [
            'imgs/mockups/Tshirts/Padel Court/Padel-Court-White-Tee.png',
            'imgs/mockups/Tshirts/Padel Court/Padel-Court-Blue-Tee.png',
            'imgs/mockups/Tshirts/Padel Court/Padel_Court_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Padel Court/Padel_Court_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Padel Court/Padel_Court_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Padel Court/Padel-Court-White-Hoodie.png',
            'imgs/mockups/Tshirts/Padel Court/Padel-Court-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Padel Court/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Padel Court/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Padel Court/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Hoodie'],
        category: 'tees'
    },

    'stickman-padel-tee': {
        name: { en: 'Stickman Padel Tee', nl: 'Stickman Padel T-shirt' },
        collection: { en: 'Padel Icons', nl: 'Padel Iconen' },
        price: 55,
        description: {
            en: 'Hand-drawn line work of a padel player mid-swing. A minimalist nod to the sport, printed on soft midweight cotton — quiet on the outside, loud in spirit.',
            nl: 'Handgetekend lijnwerk van een padel speler in volle swing. Een minimalistische knipoog naar de sport, gedrukt op zacht middelzwaar katoen — stil van buiten, luid van geest.'
        },
        images: [
            'imgs/mockups/Tshirts/Stickman Padel/Stickman-Padel-White-Tee_shop.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman-Padel-White-Tee.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman-Padel-Blue-Tee.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman_Padel_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman_Padel_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman_Padel_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Stickman Padel/Stickman-Padel-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Stickman Padel/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Stickman Padel/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Stickman Padel/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Hoodie'],
        category: 'tees'
    },

    'stickman-tennis-tee': {
        name: { en: 'Stickman Tennis Tee', nl: 'Stickman Tennis T-shirt' },
        collection: { en: 'Tennis Icons', nl: 'Tennis Iconen' },
        price: 55,
        description: {
            en: 'Hand-drawn line work of a tennis player mid-stroke. A minimalist nod to the players that built the game, printed on midweight cotton.',
            nl: 'Handgetekend lijnwerk van een tennisser in volle slag. Een minimalistische knipoog naar de spelers die het spel hebben opgebouwd, gedrukt op middelzwaar katoen.'
        },
        images: [
            'imgs/mockups/Tshirts/Stickman Tennis/tshirt_stickman_shirt_white.jpg',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman-Tennis-White-Tee.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman-Tennis-Blue-Tee.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman_Tennis_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman_Tennis_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman_Tennis_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman-Tennis-White-Hoodie.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Stickman-Tennis-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Stickman Tennis/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        types: ['T-shirt', 'Hoodie'],
        category: 'tees'
    },

    'tactics-sweater': {
        name: { en: 'Tactics Sweater', nl: 'Tactics Sweater' },
        collection: { en: 'Court Collection', nl: 'Court Collectie' },
        price: 75,
        description: {
            en: 'Read the game, wear the plan. The Tactics graphic scaled across the back of a heavyweight cotton sweater — designed for warm-up, warm-down, and everything in between.',
            nl: 'Lees het spel, draag het plan. De Tactics print groot op de rug van een zware katoenen sweater — ontworpen voor warming-up, cooldown en alles ertussenin.'
        },
        images: [
            'imgs/mockups/Tshirts/Tactics/tshirt_tactics_sweater_grey_shop.jpg',
            'imgs/mockups/Tshirts/Tactics/Tactics-White-Hoodie.png',
            'imgs/mockups/Tshirts/Tactics/Tactics-Blue-Hoodie.png',
            'imgs/mockups/Tshirts/Tactics/Tactics-White-Tee.png',
            'imgs/mockups/Tshirts/Tactics/Tactics-Blue-Tee.png',
            'imgs/mockups/Tshirts/Tactics/Tactics_Tee_Back_White.png',
            'imgs/mockups/Tshirts/Tactics/Tactics_Tee_Back_Blue.png',
            'imgs/mockups/Tshirts/Tactics/Tactics_Tee_Back_White_3.png',
            'imgs/mockups/Tshirts/Tactics/Tactics_Tee_Back_White_Man.png',
            'imgs/mockups/Tshirts/Tactics/Deuces_Tee_Front_White.png',
            'imgs/mockups/Tshirts/Tactics/Deuces_Tee_Front_Blue.png',
            'imgs/mockups/Tshirts/Tactics/Logo_Tee_Front_White_Man.png'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        types: ['Sweater', 'Hoodie', 'T-shirt'],
        category: 'hoodies'
    },

    'deuces-cap': {
        name: { en: 'Deuces Cap', nl: 'Deuces Pet' },
        collection: { en: 'Accessories', nl: 'Accessoires' },
        price: 25,
        description: {
            en: 'A clean six-panel cap in brushed cotton twill, with embroidered Deuces script at the front. Adjustable strap, curved brim, built to wear in.',
            nl: 'Een schone zespaneels pet in geborstelde katoenen twill, met geborduurd Deuces handschrift op de voorkant. Verstelbare band, gebogen klep, gemaakt om in te dragen.'
        },
        images: [
            'imgs/mockups/Hats/pet_blauw_basic_shop.png',
            'imgs/mockups/Hats/pet wit.png',
            'imgs/mockups/Hats/pet blauw basic.png'
        ],
        sizes: ['One Size'],
        category: 'hats'
    },

    'deuces-bottle': {
        name: { en: 'Deuces Bottle', nl: 'Deuces Bidon' },
        collection: { en: 'Accessories', nl: 'Accessoires' },
        price: 20,
        description: {
            en: 'A 750ml stainless-steel court bottle, double-walled to keep cold for hours. Powder-coated finish, Deuces wordmark at the side — built for long matches.',
            nl: 'Een 750ml roestvrijstalen baan-bidon, dubbelwandig om uren koud te houden. Poedergecoate afwerking, Deuces woordmerk aan de zijkant — gemaakt voor lange matches.'
        },
        images: [
            'imgs/mockups/Bottles/Waterbottle_shop.jpg',
            'imgs/mockups/Bottles/Waterbottle on court 1.jpg',
            'imgs/mockups/Bottles/Waterbottle on court 2.jpg',
            'imgs/mockups/Bottles/Bidon.png'
        ],
        sizes: ['750ml'],
        category: 'bottles'
    }

};
