// API Configuration
// Set this to your backend API URL when running on a server
// Leave as is for localStorage-only mode (no backend required)
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? '/backend/api'  // Local development path
    : 'https://johnmogi.com/sunlight/backend/api';  // Production server path

// Language/i18n Configuration
let currentLanguage = localStorage.getItem('sunlight_language') || 'en';
const RTL_LANGUAGES = ['he', 'ar'];

// FOLDER STRUCTURE FOR 5 CARD CATEGORIES
// When ready, organize your cards into these 5 folders:
// images/cards/major/ - Major Arcana cards
// images/cards/minor/ - Minor Arcana cards
// images/cards/court/ - Court cards
// images/cards/special/ - Special or oracle cards
// images/cards/featured/ - Featured artwork for voting gallery
//
// Then update the image paths below to include the folder prefix:
// Example: image: "major/card_name.png" instead of just "card_name.png"

// Tarot Card Data with Real Images
// MAJOR ARCANA - The Restructured SunLight System
// Based on the Fifth Element philosophy, Enneagram integration, and consciousness levels
const TAROT_CARDS = [
    // ========== MAJOR ARCANA: The Path of Consciousness ==========

    // ZERO: THE SUN (The Rosetta Stone - Center of All Systems)
    {
        id: 0,
        name: "The Sun",
        image: "eather/9._Soft_watercolor_tarot_card_four_color-coded_angels_bluegre_7abf56a2-950b-4134-9684-6dba1872f671_3.png",
        meaning: "Solar consciousness, the illuminating principle that makes all visible",
        visualDesc: "Four cherubic angels dancing in a circle around a radiant sun at center, each angel holds a different symbolic object: roses for air, a mirror-card for fire, a heart for water, a golden coin for earth. Sacred geometry, innocent and joyful, mystical tarot design.",
        type: "major",
        number: 0
    },

    // ONE: THE NIGHT AWAKENER (Lili Herself - Lucid Dreaming, Strength-Temperance-Hermit Combined)
    {
        id: 1,
        name: "The Night Awakener",
        image: "eather/httpss.mj.runlgIA_7rPojs_open_eyes__6_THE_AWAKENED_ONE__OPENE_f0e90b81-a111-42de-94b3-9ebe3f97ab2c_0.png",
        meaning: "Lucid awareness within the dream, power through balance, carrying light into darkness",
        visualDesc: "Young woman half-awake in dream landscape, one eye closed in sleep one eye open with full awareness, holding a journal that exists in both waking and dreaming realms. She stands at the threshold between conscious and unconscious, carries a small light that illuminates the dream. Both in the dream and aware of dreaming.",
        type: "major",
        number: 1
    },

    // TWO: THE NIGHT DREAMER (The Unconscious Magician)
    {
        id: 2,
        name: "The Night Dreamer",
        image: "eather/1_DAYDREAMER_rough_pencil_sketch_barefoot_child_at_crossroads_0ac86743-a2d1-46d8-bda9-03ab71aa5604_2.png",
        meaning: "Unconscious creative power, shaping reality without awareness",
        visualDesc: "Sleeping figure whose hands gesture in unconscious creation, dreams flowing from their head like smoke becoming landscapes and symbols, creating entire worlds without knowing it. The magician fully asleep, surreal and fluid imagery showing unconscious power, creative chaos.",
        type: "major",
        number: 2
    },

    // THREE: THE DAY DREAMER (The Fool in Waking Sleep)
    {
        id: 3,
        name: "The Day Dreamer",
        image: "eather/A_finely_detailed_pencil_sketch_tarot_card_titled_0_-_The_Foo_3b9910ae-6622-4d7d-8d8d-d9cb8131db37_3.png",
        meaning: "Lost in mental narrative, identification with ego, missing the present moment",
        visualDesc: "Young figure wandering through beautiful garden with glazed expression, lost in thought and internal narrative, walking past blooming flowers without seeing them, approaching cliff edge while distracted. The sun shines but they walk in their own shadow of thought, showing identification with ego.",
        type: "major",
        number: 3
    },

    // FOUR: THE MATERIAL THRESHOLD (The Hanged One Awakening)
    {
        id: 4,
        name: "The Material Threshold",
        image: "eather/major_arcana_5_Material_Release_white_charcoal_man_kneels_cha_f513483f-75da-47e7-8683-d605949b1cb0_2.png",
        meaning: "Recognizing self-imposed limitation, the moment before liberation from material chains",
        visualDesc: "Figure suspended upside down but pointing at their own loosened bonds, hung by chains of golden coins and material possessions they're tangled in. Expression showing dawning realization of self-imposed limitation, one hand reaching for the knot to free themselves. The moment before liberation.",
        type: "major",
        number: 4
    },

    // FIVE: THE TREE OF LIFE (Death as Transition)
    {
        id: 5,
        name: "The Tree of Life",
        image: "eather/major_arcana_5_The_Tree_of_Life_white_charcoal_on_black_birdb_80528199-1a10-4b38-ad40-73c090cd568b_0.png",
        meaning: "Death as transformation not ending, the eternal structure beneath all change",
        visualDesc: "The Kabbalistic Tree of Life with ten glowing spheres (sephiroth) connected by pathways, a figure walking through the tree in transition. Autumn leaves falling while spring buds form simultaneously, showing death as transformation. The eternal structure beneath all change.",
        type: "major",
        number: 5
    },

    // SIX: THE LOVER'S JUDGMENT (Choosing and Being Chosen)
    {
        id: 6,
        name: "The Lover's Judgment",
        image: "eather/fused_tarot_VI_The_Lovers-Judgment_armored_man__pristine_woma_6574116e-56f1-42e9-9dfe-4b23ff81b966_2.png",
        meaning: "Love as discernment, judgment as love, seeing truly and choosing fully",
        visualDesc: "Two figures facing each other in sacred recognition, an angel hovering above holding scales that weigh hearts instead of deeds. The lovers offer each other roses and mirror-cards showing their true selves. Moment of choosing and being chosen, judgment as love and love as judgment.",
        type: "major",
        number: 6
    },

    // SEVEN: THE REBUILT LIGHTHOUSE (The Tower Transformed)
    {
        id: 7,
        name: "The Rebuilt Lighthouse",
        image: "eather/9_The_Lighthouse_watercolor_of_vine-wrapped_tower_now_a_light_54192ad2-36ce-4c64-9b70-4af68380e198_3.png",
        meaning: "Destruction becoming creation, ruins as fertile ground, the Tower of Babylon as beacon of hope",
        visualDesc: "The Tower of Babylon rebuilt as a lighthouse and garden, cracks in stone walls filled with blooming lavender and roses, spiral staircases wrapped in vines, light shining from the top as a beacon. Four small angelic figures planting seeds in the foundation. Destruction becoming creation, ruins as fertile ground.",
        type: "major",
        number: 7
    },

    // EIGHT: THE MERKABA (Vehicle of Descent into Matter)
    {
        id: 8,
        name: "The Merkaba",
        image: "coins/3._Watercolor_card_spinning_enneagram_wheel_on_notebook_page__ba351551-f1ba-453b-b1ef-f13ad027a275_0.png",
        meaning: "The soul's descent into matter, the Big Bang as personal journey, sacred geometry of transformation",
        visualDesc: "Sacred Merkaba geometry descending through veils of reality, interlocking triangles forming a vehicle of light. Enneagram symbol woven into the structure showing nine points of transformation, a soul entering the chariot knowing it will forget. Layers of dimension suggested by overlapping planes, mystical and mathematical.",
        type: "major",
        number: 8
    },

    // NINE: THE FEMININE CREATION (The Abyss, The Pregnant Void)
    {
        id: 9,
        name: "The Feminine Creation",
        image: "eather/tarot_card_embossed_frame_9_The_Pregnant_Source_ebony_deity_i_9989a6b9-f749-44b8-80c0-d118d8ffe72f_2.png",
        meaning: "The abyss before creation, infinite potential, the void that contains everything",
        visualDesc: "Mystical feminine figure dissolving into cosmic darkness, her body contains swirling galaxies and unborn stars. The abyss before creation, sacred feminine as void that contains everything. Sumerian goddess Tiamat merged with Kabbalistic Ein Sof, she is both presence and absence, infinite potential.",
        type: "major",
        number: 9
    },

    // ========== MINOR ARCANA: ROSES SUIT (Air/Mind) ==========
    // Blue robes, black hair - Asian, Egyptian, Persian mythologies

    {
        id: 50,
        name: "Ace of Roses",
        image: "ace_of_roses.png",
        meaning: "Mental power breaking through barriers, clarity as both weapon and beauty",
        visualDesc: "Large cherubic angel stands before the outer wall of the Tower of Babylon, wielding an enormous rose stem like Excalibur. The rose is clearly a weapon here, its stem thick and thorned, but at the top blooms a massive, perfect rose. The angel is breaking through the wall with this rose-sword, showing that even the mind's destructive clarity can create beauty. Debris falls around the angel, but rose petals also scatter in the air.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 51,
        name: "Two of Roses",
        image: "two_of_roses.png",
        meaning: "Cynical destruction of nature through intellectualization",
        visualDesc: "Two figures stand on either side of a tree stump, and two rose stems are driven into the dead wood unnecessarily, violently. One figure manipulates from behind, shadowy and political. The other figure stands in contemplation, staring at this desecration of nature. The roses themselves are in full bloom despite being used as weapons, creating a disturbing contrast between beauty and cruelty. This shows how thought can be cynical, how we intellectualize our destruction of the living world.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 52,
        name: "Three of Roses (The Child of Air)",
        image: "three_of_roses.png",
        meaning: "Thought piercing the heart, activating feeling through pain and wonder",
        visualDesc: "Three roses bloom upward from a radiant, beaming heart. The heart glows with golden light, and the roses grow directly from it, their stems emerging like rays. A young person, the Child, stands nearby holding their chest, experiencing this opening with a mixture of pain and wonder. This is the moment when thought pierces the heart, but instead of breaking it, activates it into fuller feeling. The child is performing this experience, showing it to the world with theatrical enthusiasm.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 53,
        name: "Four of Roses",
        image: "four_of_roses.png",
        meaning: "Mental isolation, rumination, trapped in thorny thoughts",
        visualDesc: "A figure sits alone in contemplation, surrounded by thorny rose stems that have grown up around them like a protective but isolating cage. They're bleeding slightly from small thorn pricks, showing how the mind wounds itself through rumination and anxiety. Through a window or opening, we see a snowy landscape with a garden of wild roses growing, beautiful but cold. The figure stares outward but cannot reach the beauty because they're trapped in their own thorny thoughts. This is melancholic but not hopeless, the roses around them are trying to bloom even in this enclosed space.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 54,
        name: "Five of Roses",
        image: "five_of_roses.png",
        meaning: "Detachment, protecting through distance, understanding without feeling",
        visualDesc: "A figure stands behind or within a wall made entirely of climbing roses, observing the world from safe distance. They're holding a single perfect rose and studying it intensely, analyzing every petal while the rest of life happens beyond their barrier. This is the mind protecting itself through detachment, understanding everything but feeling nothing. The roses create beautiful insulation, but it's still insulation. The figure's expression should be intelligent and sad, aware of what they're missing but unable to step through.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 55,
        name: "Six of Roses (The Father of Air)",
        image: "six_of_roses.png",
        meaning: "Exhaustion from intellectual battles, questioning if truth matters more than victory",
        visualDesc: "An older man, the Father, sits exhausted with an enormous rose-sword resting across his lap. He's clearly a veteran of many intellectual battles, his face lined with thought and weariness. Behind him is a field scattered with roses, some trampled, some blooming, the aftermath of countless arguments and debates. He's testing whether truth matters more than victory, whether all this mental combat has actually led anywhere. The rose in his sword is wilting slightly, showing the exhaustion of the analytical mind.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 56,
        name: "Seven of Roses",
        image: "seven_of_roses.png",
        meaning: "Scattered brilliance, intoxicated by ideas without follow-through",
        visualDesc: "A figure runs joyfully through an overgrown rose garden, plucking roses as they go, arms full of blooms but not stopping to appreciate any single one. They're intoxicated by the abundance of ideas and possibilities, the mind freed from consequence. Roses scatter in their wake, some falling and being forgotten. This is brilliant but scattered energy, the pleasure of thinking without the discipline of follow-through. The scene should feel both exhilarating and slightly manic.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 57,
        name: "Eight of Roses",
        image: "eight_of_roses.png",
        meaning: "Mental clarity embodied, sharp but not cruel, protective and generative",
        visualDesc: "A warrior figure stands firm, wearing armor made of interwoven rose stems, thorns facing outward. They hold a rose-sword with complete confidence, no longer apologizing for their sharpness. Around them, roses bloom in perfect formation, showing that mental clarity can be both protective and generative. This is the mind fully embodied, able to cut when necessary but without cruelty. The figure's expression should be calm and powerful, neither aggressive nor passive.",
        type: "minor",
        suit: "roses"
    },
    {
        id: 58,
        name: "Nine of Roses (The Mother of Air)",
        image: "nine_of_roses.png",
        meaning: "Wisdom beyond knowledge, seeing there is no enemy, paradox held with grace",
        visualDesc: "A mature woman sits in a powerful but relaxed pose, her rose-sword resting beside her. On the blade sits a red butterfly, clearly visible now because she has learned to see it. Her expression shows she understands there is no enemy, that all the battles were with herself. Behind her is a balanced garden where roses grow wild but harmoniously. She has become wisdom rather than just knowledge, able to hold paradox, sharp enough to distinguish but soft enough to allow.",
        type: "minor",
        suit: "roses"
    },

    // ========== MINOR ARCANA: CARDS SUIT (Fire/Will) ==========
    // Green robes, brown hair - Indigenous American, Aztec, Maya, Incan mythologies

    {
        id: 60,
        name: "Ace of Cards",
        image: "ace_of_cards.png",
        meaning: "Creative fire transforming obstacles, growing through barriers",
        visualDesc: "A small, humble cherubic angel kneels at the base of a young plant breaking through concrete or stone. A card or small mirror is embedded in the crack where the plant emerges, catching sunlight and reflecting it down into the darkness where the seed first germinated. The angel tends the plant gently, looking at his own reflection in the mirror-card with wonder. This shows that creative fire doesn't destroy obstacles like the Ace of Roses does, it transforms them, grows through them, makes them irrelevant by finding another dimension.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 61,
        name: "Two of Cards",
        image: "two_of_cards.png",
        meaning: "Negotiating with reality, choosing between possible futures",
        visualDesc: "The figure stands on the Tower of Babylon, holding two cards or mirrors that show different possible futures. He's in negotiation with the world itself, using his reflective tools to understand what choices are actually available. One card might show fire, the other shows earth, representing different paths of manifestation. The figure is contemplative but confident, understanding that creative will requires choosing between possibilities.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 62,
        name: "Three of Cards (The Child of Fire)",
        image: "three_of_cards.png",
        meaning: "Performing creativity, scattered potential, everything possible but nothing real yet",
        visualDesc: "A child holds up multiple cards or mirrors to the sky, creating a kaleidoscope of reflections. They're performing their creativity, showing off their ability to see and create multiple perspectives simultaneously. Flames or light rays emanate from the cards, but the child hasn't yet learned to focus this power. Everything is possible, which means nothing is yet real. The enthusiasm is infectious but scattered, the child wants recognition for their potential without yet doing the work of manifestation.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 63,
        name: "Four of Cards",
        image: "four_of_cards.png",
        meaning: "Creative blockage, inner fire seeming unreachable",
        visualDesc: "A figure sits surrounded by broken mirrors or torn cards, pieces of failed creative visions scattered around them. They're holding their head, experiencing the wound of creative blockage, the moment when inner fire seems to have gone out. Through a window or opening, we see a distant fire or sunrise, showing that the source is still there, but the figure can't access it. This is the shadow of creative will, the despair that comes when you can't manifest what you see inside.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 64,
        name: "Five of Cards",
        image: "five_of_cards.png",
        meaning: "Endless preparation without manifestation, documenting but never performing",
        visualDesc: "A figure sits alone in a room filled with journals, scrolls, and cards showing brilliant ideas and visions, but none of them have been brought into the world. They're studying a single card intently, analyzing their own creative process from safe distance. This is creative will turned inward, the artist who prepares forever but never performs, the visionary who documents but never manifests. The room should feel like a beautiful prison of potential.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 65,
        name: "Six of Cards (The Father of Fire)",
        image: "six_of_cards.png",
        meaning: "Testing if creative fire remains, questioning what's left to create",
        visualDesc: "A mature man, the Father, sits before a fire that's burning low, holding a card that shows his younger self at the height of creative power. He's testing whether he still has the fire, whether the visions that drove him once still matter. Around him are completed works, showing he has manifested much, but the question now is whether there's anything left to create or if it's all been done. The card-mirror reflects both his past power and his current doubt.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 66,
        name: "Seven of Cards",
        image: "seven_of_cards.png",
        meaning: "Manic creative energy, starting everything and finishing nothing",
        visualDesc: "A figure juggles multiple cards or mirrors while dancing or running, each one showing a different creative project or possibility. They're intoxicated by the sheer number of things they could create, the freedom of infinite potential. Cards fly through the air, some being caught, some falling and shattering, but the figure doesn't stop to complete any single vision. This is manic creative energy, the artist who starts everything and finishes nothing, brilliant but undisciplined.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 67,
        name: "Eight of Cards",
        image: "eight_of_cards.png",
        meaning: "Creative power fully embodied, vision made solid with consistency",
        visualDesc: "A powerful figure stands holding a large card or mirror that shows their true self, no longer hiding or performing. Around them, creative manifestations bloom into reality, projects completed, visions made solid. The fire of their will is fully embodied, strong and steady rather than scattered. They've claimed their creative power without apology, able to bring inner vision into outer form with consistency and strength. The expression should show both power and peace.",
        type: "minor",
        suit: "cards"
    },
    {
        id: 68,
        name: "Nine of Cards (The Mother of Fire)",
        image: "nine_of_cards.png",
        meaning: "Igniting others' creativity, completed journey now serving as source",
        visualDesc: "A mature woman sits before a fire that's perfectly maintained, neither raging nor dying but steady and warm. She holds a mirror-card that shows not herself but whoever looks at it, offering them the gift of self-reflection. Around her are seeds and small fires, showing that her creative work now is to ignite others, to help them find their own inner fire. She has completed her own creative journey and now serves as source and teacher for others.",
        type: "minor",
        suit: "cards"
    },

    // ========== MINOR ARCANA: HEARTS SUIT (Water/Emotion) ==========
    // Pink robes, blonde hair - Viking, Atlantean, Greek, Roman, Celtic mythologies

    {
        id: 70,
        name: "Ace of Hearts",
        image: "ace_of_hearts.png",
        meaning: "Emotional yearning, blind to the abundance already present",
        visualDesc: "A large cherubic angel sits inside an enormous heart-shaped vessel or cup, but this cup is made of living flesh, a heart that pulses gently. The angel is trying to fill a tiny cup or chalice from the infinite ocean of emotion surrounding him, but he's so focused on his small need that he doesn't see the abundance he's already within. Dew or water droplets surround him, showing that emotion is everywhere, but he's still reaching, still yearning. This is the seed of emotional need, beautiful but blind.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 71,
        name: "Two of Hearts",
        image: "two_of_hearts.png",
        meaning: "First emotional exchange, offering hearts with vulnerability and risk",
        visualDesc: "Two figures face each other, each holding their own heart in their hands, offering it to the other. Between them, their hearts begin to pulse in sync, creating a rhythm together. This is the first relationship of the heart, the recognition that emotion flows between beings, that feeling requires exchange. The scene should be intimate and vulnerable, showing both the risk and the beauty of opening to another.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 72,
        name: "Three of Hearts (The Child of Water)",
        image: "three_of_hearts.png",
        meaning: "Emotional overflow without containment, performing feelings",
        visualDesc: "A young child plays joyfully with hearts like bubbles or balloons, creating and releasing emotions without attachment. Hearts float around them in various colors, some bursting into light, some drifting away. The child performs their emotional openness, showing everyone how deeply they can feel, but hasn't yet learned that not all feelings need to be expressed, that emotional depth sometimes requires containment. The scene should feel both beautiful and slightly exhausting in its intensity.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 73,
        name: "Four of Hearts",
        image: "four_of_hearts.png",
        meaning: "Heartbreak as opening, grief as part of larger cycle",
        visualDesc: "A figure sits alone with a heart that's cracked but still beating, bleeding slowly into a pool around them. They're experiencing the wound of emotion, heartbreak or grief or loss. But in the cracks of the heart, small flowers or light is beginning to grow, suggesting that this breaking is also an opening. Through a window, we can see rain falling on an ocean, showing that their tears are part of a larger cycle. This is melancholic but not hopeless.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 74,
        name: "Five of Hearts",
        image: "five_of_hearts.png",
        meaning: "Emotional numbness, protecting by freezing",
        visualDesc: "A figure stands behind a wall or barrier made of frozen hearts, protecting themselves from feeling by numbing out. They hold one heart and study it analytically, trying to understand emotion from safe distance rather than experiencing it. The frozen hearts are beautiful like ice crystals but lifeless. Through cracks in the wall, we can see warm light and flowing water, showing what they're missing, but they're not ready to melt the barrier yet.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 75,
        name: "Six of Hearts (The Father of Water)",
        image: "six_of_hearts.png",
        meaning: "Questioning emotional capacity after a lifetime of feeling",
        visualDesc: "A mature man, the Father, sits before a still pool or lake, holding a heart that's full but heavy. He's testing whether he still has the capacity to feel deeply, or if all the emotions of his life have exhausted him. Around him are vessels and cups showing past relationships, past joys and sorrows, but the question is whether he can feel new things or if he's simply going through familiar emotional patterns. His reflection in the water shows a younger self, reminding him of when feeling was easy.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 76,
        name: "Seven of Hearts",
        image: "seven_of_hearts.png",
        meaning: "Emotional excess, addicted to feeling, unable to bear emptiness",
        visualDesc: "A figure runs through a landscape where hearts rain from the sky like flowers or confetti, catching them wildly, intoxicated by the abundance of feeling and connection available. They're trying to experience everything at once, every emotion, every relationship, every possibility of love. Hearts pile around their feet, more than they can possibly hold, but they keep reaching for more. This is emotional excess, the addict of feeling who can't bear any moment of emptiness.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 77,
        name: "Eight of Hearts",
        image: "eight_of_hearts.png",
        meaning: "Feeling deeply without drowning, emotional intelligence embodied",
        visualDesc: "A powerful figure stands with their heart fully open, glowing with steady light. Around them, emotion flows freely without drowning them, like streams and rivers moving through a landscape. They've learned to feel deeply without being overwhelmed, to open without losing themselves. The heart they hold shows channels and pathways, suggesting emotional intelligence, the ability to direct feeling with awareness and strength.",
        type: "minor",
        suit: "hearts"
    },
    {
        id: 78,
        name: "Nine of Hearts (The Mother of Water)",
        image: "nine_of_hearts.png",
        meaning: "Source of compassion, heart regenerates through giving",
        visualDesc: "A mature woman sits beside a spring or fountain where hearts emerge like water from the source. She holds a heart and offers it outward, showing that her emotional work now is to nourish others, to be a source of compassion and understanding. Around her, plants and flowers bloom fed by the emotional waters she provides. She has learned that the heart regenerates through giving, that the more love you offer, the more you have to offer.",
        type: "minor",
        suit: "hearts"
    },

    // ========== MINOR ARCANA: COINS SUIT (Earth/Material) ==========
    // Yellow robes, dark hair - Babylonian, Sumerian, Hebrew, Arabic, Mongolian, Chinese, Asian Indian mythologies

    {
        id: 80,
        name: "Ace of Coins",
        image: "ace_of_coins.png",
        meaning: "Matter and spirit unified, completion found, teaching the secret",
        visualDesc: "A cherubic angel holds a coin that is itself a miniature sun, a perfect circle of golden light. The angel is large and centered, having found completion, and he points outward with his free hand, teaching others the secret he's discovered. The coin glows with the same light as the Sun card, showing that matter and spirit are one. Around him, the four elements appear in balance, showing that he understands how to work with all aspects of manifestation. This is the resolution to all the other Aces' struggles.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 81,
        name: "Two of Coins",
        image: "two_of_coins.png",
        meaning: "Constant negotiation between material demands, dynamic balance",
        visualDesc: "A figure juggles or balances two coins, representing the constant negotiation between different material demands, different projects, different responsibilities. The coins might show different faces or symbols, suggesting choice between paths. The figure is in motion, dancing or moving to maintain the balance, showing that material life requires constant adjustment. Behind them, we might see a wheel or infinity symbol, suggesting the cyclical nature of gain and loss.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 82,
        name: "Three of Coins (The Child of Earth)",
        image: "three_of_coins.png",
        meaning: "Eager apprentice, performing competence before mastery",
        visualDesc: "A young child or apprentice works enthusiastically on creating something material, surrounded by coins, tools, and materials. They're showing off their skill to others, performing their competence, eager for recognition. The work is good but not yet masterful, the enthusiasm is endearing but also exhausting. They haven't yet learned that craft requires patience, that mastery comes through years of private work rather than public performance.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 83,
        name: "Four of Coins",
        image: "four_of_coins.png",
        meaning: "Hoarding from fear, surrounded by abundance but experiencing scarcity",
        visualDesc: "A figure sits clutching coins to their chest, protecting what they have, afraid to spend or share or risk. They're surrounded by abundance but experiencing scarcity, holding so tightly that the coins begin to dig into their flesh painfully. Through a window or opening, we see a marketplace or community where exchange happens freely, showing what they're missing by hoarding. This is the wound of materialism, the poverty that comes from fear of loss.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 84,
        name: "Five of Coins",
        image: "five_of_coins.png",
        meaning: "Poverty mindset creating poverty, barrier more psychological than real",
        visualDesc: "A figure stands outside in cold or poverty, looking through a window at warmth and abundance inside. They're holding a few coins but not enough, experiencing material lack. However, the door beside the window is unlocked or even slightly open, suggesting that the barrier is more psychological than real. This is material consciousness protecting itself through the belief in limitation, the poverty mindset that creates actual poverty.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 85,
        name: "Six of Coins (The Father of Earth)",
        image: "six_of_coins.png",
        meaning: "Achieved prosperity questioning if matter provides meaning",
        visualDesc: "A mature man, the Father, sits weighing coins in scales or sorting through material wealth, trying to determine what's enough. He's achieved material success but questioning what it means, whether all this accumulation has brought satisfaction. Around him are storehouses and accounts showing his prosperity, but his expression suggests he's testing whether matter itself can provide meaning, or if he needs something beyond the material.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 86,
        name: "Seven of Coins",
        image: "seven_of_coins.png",
        meaning: "Restless accumulation, addiction to becoming rather than being",
        visualDesc: "A figure stands in a garden or field where coins grow like fruit on trees or plants, surrounded by abundance but unable to enjoy it because they're already planning the next harvest, the next project, the next accumulation. They hold coins in their hands but they're looking ahead rather than appreciating what they have. This is the restlessness of material consciousness, the addiction to becoming rather than being.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 87,
        name: "Eight of Coins",
        image: "eight_of_coins.png",
        meaning: "Material mastery through craft, work as meditation",
        visualDesc: "A craftsperson works intently on creating something of material beauty and value, completely absorbed in their work. Around them are completed projects showing mastery developed through years of practice. They hold a coin or tool with perfect confidence, embodying the power to manifest, to bring inner vision into material form with skill and dedication. The work itself becomes meditation, the material becomes spiritual through attention and craft.",
        type: "minor",
        suit: "coins"
    },
    {
        id: 88,
        name: "Nine of Coins (The Mother of Earth)",
        image: "nine_of_coins.png",
        meaning: "Material abundance through giving, garden of generosity",
        visualDesc: "A mature woman stands in a garden of abundance that she has cultivated, surrounded by growing things, animals, coins appearing as fruits or flowers. She holds a coin and offers it freely, having learned that material wealth is meant to flow, to nourish, to be shared. The garden around her is generous and overflowing, showing that she has become a source of material sustenance for others. She embodies the principle that giving creates more than keeping.",
        type: "minor",
        suit: "coins"
    },

    // ========== ADDITIONAL EATHER CARDS (Fifth Element - Major Arcana & Special) ==========
    { id: 10, name: "The Hermit", image: "eather/An_illustration_for_The_Hermit_card_in_the_Space_Tarot_deck_i_76a2356e-3b32-41b3-a130-44900aef1771_1.png", meaning: "Soul searching, introspection, guidance", type: "major" },
    { id: 11, name: "The Continuum", image: "eather/major_arcana_6_The_Continuum_white_charcoal_flow_figure_walks_f92ed6e5-e4e8-4bbd-82da-568db87f4fe0_1.png", meaning: "Flow, eternal movement, continuity of life", type: "major" },
    { id: 12, name: "The Awakened One (Variant)", image: "eather/_6_THE_AWAKENED_ONE_REVISED_THIS_is_one_of_the_cards_you_aske_453eb4c5-3733-4c1b-bcae-7944d402a3cc_3.png", meaning: "Enlightenment, wisdom, spiritual awakening", type: "major" },
    { id: 15, name: "The Recorder", image: "eather/tilt_shited_tarot_card_feltic_frame_of_major_arcane_2_THE_REC_f9aa4b14-be15-4fa7-9759-8a4ed7ef216b_3.png", meaning: "Memory, documentation, witness to truth", type: "major" },
    { id: 16, name: "The Revealed Path", image: "eather/fused_tarot_VI_The_Revealed_Path_lightning_strikes_tree_fruit_8c709a6c-533b-4bba-87d3-38bac41ba2a6_2.png", meaning: "Sudden revelation, clarity, divine guidance", type: "major" },
    { id: 18, name: "Nine Winds", image: "eather/air-brushed_on_night_sky_luminous_nine_wind_faces_transformin_21661ae7-aab0-4417-a61b-3b4acf6563ed_3.png", meaning: "Change, transformation, spiritual currents", type: "major" },
    { id: 23, name: "Queen of Swords", image: "eather/httpss.mj.run0oTCPrHhI8U_pencilink_Queen_of_Swords_queen_rele_bcfe6371-06d4-477d-9919-94b653f6e7bf_3.png", meaning: "Clear thinking, direct communication, independence", type: "minor", suit: "roses" },
    { id: 33, name: "Young Seeker", image: "eather/tilt-shift_graphite_sketch_confident_B4_pencil_young_adult_fe_ac9456cc-b7c9-45b5-94ce-31dade44c7b3_3.png", meaning: "Youthful determination, seeking truth, confidence", type: "minor", suit: "eather" },
    { id: 34, name: "The Confident One", image: "eather/httpss.mj.runwUcEVSWB_qs_tilt-shift_graphite_sketch_confident_97c975fc-bd94-498b-a709-5b68c09f3802_3.png", meaning: "Self-assurance, inner strength, presence", type: "minor", suit: "eather" },
    { id: 37, name: "Watercolor Bloom", image: "eather/johnmogi_httpss.mj.runEDwVzo7OH-Y_masterpiece_oil-rich_waterc_d58f6988-4cd2-462c-8648-8041e489f5d7_1.png", meaning: "Artistic expression, beauty unfolding, creativity", type: "minor", suit: "eather" },
    { id: 38, name: "The Seeker's Path", image: "eather/johnmogi_httpss.mj.runnNiR6Q3sBjM_tilt-shift_graphite_sketch_co_b98d8830-89bb-4f87-a6ca-b5d22222d56c.png", meaning: "Journey, focused intention, determined steps", type: "minor", suit: "eather" },
    { id: 39, name: "The Nurturer", image: "eather/johnmogi_httpss.mj.runVX2UInPNUvA_tarot_card_embossed_frame_9_756e19a7-514e-4285-9a2d-24bb1dcab414_1.png", meaning: "Care, protection, maternal energy", type: "minor", suit: "eather" },
    { id: 41, name: "The Blueprint", image: "eather/White_charcoal_blueprint_sketch_on_black_paper_tarot_card_0.__2b477e16-c6be-4c5d-8637-494cf13923d7_0.png", meaning: "Planning, design, divine architecture", type: "minor", suit: "eather" },
    { id: 43, name: "The Lovers Judgment", image: "eather/httpss.mj.runInt8YuJmJ9Y_fused_tarot_VI_The_Lovers-Judgment_a_1e7a794b-9193-417d-ae76-64e18b59d409_1.png", meaning: "Relationship reckoning, love's truth, union tested", type: "minor", suit: "eather" },
    { id: 44, name: "Pregnant Source Variant", image: "eather/httpss.mj.runShiPrFt5uhs_tarot_card_embossed_frame_9_The_Preg_5dd3bd2c-bdf3-4697-bc04-4daf0dd45d2b_0.png", meaning: "Creation power, divine pregnancy, manifestation", type: "minor", suit: "eather" },
    { id: 45, name: "Tree of Life Sapling", image: "eather/major_arcana_6_The_Tree_of_Life_white_charcoal_birdbath_sapli_c41e2121-9f57-47e9-aa7c-b47016bf80df_1.png", meaning: "New growth, young wisdom, sprouting potential", type: "minor", suit: "eather" },
    { id: 46, name: "Four Angels Variant", image: "eather/9._Soft_watercolor_tarot_card_four_color-coded_angels_bluegre_dea97083-3fed-40f4-ba32-818e946dcc5c_2.png", meaning: "Elemental harmony, divine messengers, balance", type: "minor", suit: "eather" },
    { id: 47, name: "Daydreamer Variant", image: "eather/1_DAYDREAMER_rough_pencil_sketch_barefoot_child_at_crossroads_1151075d-2415-44e7-83a7-77090bc89790_3.png", meaning: "Choices, innocent wonder, life's crossroads", type: "minor", suit: "eather" },
    { id: 48, name: "Young Seeker Variant", image: "eather/tilt-shift_graphite_sketch_confident_B4_pencil_young_adult_fe_cf410a87-dba8-453b-819d-1fdb2fbb6bfb_1.png", meaning: "Determined youth, seeking wisdom, growth", type: "minor", suit: "eather" },

    // ========== ROSES SUIT (Air/Mind) - Existing Cards ==========
    { id: 26, name: "Butterfly Queen", image: "roses/drum_skin_flash_fine_ink_queen_crouched_on_hide_butterfly_mer_1ea01c00-9b77-42f3-8a5c-126a608a47cf_1.png", meaning: "Transformation, grace, delicate power", type: "minor", suit: "roses" },
    { id: 28, name: "Two of Roses", image: "roses/httpss.mj.runRnDEoUliueg_2_of_roses_tarot_card_the_duality_ro_acc4903e-9da6-4732-8547-3bf84182466d_2.png", meaning: "Duality, partnership, balanced love", type: "minor", suit: "roses" },
    { id: 31, name: "Mother of Roses", image: "roses/johnmogi_httpss.mj.run4vkYW3V2k8w_the_mother_of_roses_tarot_rou_456c4177-0ebf-4a71-9630-acff7f0e5f5e.png", meaning: "Nurturing love, compassion, fertile heart", type: "minor", suit: "roses" },
    { id: 36, name: "Slender Tower", image: "roses/johnmogi_httpss.mj.runYBE0XPEJS4c_rough_pencil_sketch_slender_t_5dd9a459-8ce2-4ce4-96e6-a26b18f63f3c.png", meaning: "Isolation, perspective, reaching upward", type: "minor", suit: "roses" },
    { id: 40, name: "Rose Mother Variant", image: "roses/johnmogi_httpss.mj.runx9ffY7VfPc0_the_mother_of_roses_tarot_rou_2c659976-a988-487d-9858-92e87221e518.png", meaning: "Abundant love, generosity, blooming heart", type: "minor", suit: "roses" },
    { id: 14, name: "The Blooming Heart", image: "roses/botanical_celtic_tarot_card_of_The_Blooming_Heart_a_woman_who_96530e43-155d-44b6-84ec-ab3a62de5151_3.png", meaning: "Love opening, emotional growth, compassion", type: "major", suit: "roses" },

    // ========== CARDS SUIT (Fire/Will) - Existing Cards ==========
    { id: 20, name: "Fire and Reflection", image: "cards/johnmogi_httpss.mj.runSBL3DnWbIyE_rough_pencil_sketch_fire_an_61c38e70-1119-494a-ad30-6e15ed1154ab_3.png", meaning: "Passion meeting wisdom, transformation", type: "major", suit: "cards" },
    { id: 21, name: "The Black Soil Womb", image: "cards/garden_spread_left_Black_Soil_Womb_black_earth_void_gold_seed_8f77be8d-edb0-44fe-9a7b-75a973c7e731_0.png", meaning: "Fertile void, potential, dark goddess energy", type: "major", suit: "cards" },

    // ========== HEARTS SUIT (Water/Emotion) - Existing Cards ==========
    { id: 27, name: "Prince of Cups", image: "hearts/Prince_of_Cups._Watercolor_card_young_Viking_explorer_in_pape_502701c2-1b0e-4882-b649-a3fd599037b0_1.png", meaning: "Emotional exploration, romantic idealism, adventure", type: "minor", suit: "hearts" },
    { id: 29, name: "Two of Ships", image: "hearts/soft_watercolor_tarot_card_sepia_paper_two_Viking_longships_m_1691aa9f-4546-4be8-80fe-8dd51a534d37_0.png", meaning: "Journey together, exploration, shared adventure", type: "minor", suit: "hearts" },
    { id: 30, name: "Three Spilled Cups", image: "hearts/6._Sepia_notebook_paper_aquarelle_boy_looking_at_three_spille_4c66a326-a2d9-4dba-8f2d-6cd026156e36_0.png", meaning: "Loss, disappointment, emotional release", type: "minor", suit: "hearts" },
    { id: 35, name: "The Diving Dream", image: "hearts/Intro_Verse_In_the_quiet_lullaby_of_the_sea_I_dive_into_dream_fa645d7c-626a-435a-8158-1f4c618e0df3_2.png", meaning: "Subconscious exploration, diving deep, mystery", type: "minor", suit: "hearts" },
    { id: 42, name: "Blooming Heart Variant", image: "hearts/botanical_celtic_tarot_card_of_The_Blooming_Heart_a_woman_who_ad3a2b60-b1b8-414f-a44d-1fb55ebf4fe2_0.png", meaning: "Heart opening, growth, botanical wisdom", type: "minor", suit: "hearts" },

    // ========== COINS SUIT (Earth/Material) - Existing Cards ==========
    { id: 17, name: "The Moonlit Pool", image: "coins/2._Sepia_notebook_paper_aquarelle_moon_reflection_in_birdbath_0b054896-2cd3-48bf-b0ca-3f3a585a8f29_0.png", meaning: "Reflection, intuition, lunar wisdom", type: "major", suit: "coins" },
    { id: 24, name: "Queen of Ennagrams", image: "coins/Lilys_clay_tarot_card_of_the_Queen_of_Ennagrams_grove_matron__a1606915-dc7f-4eb6-878d-b167833669de_0.png", meaning: "Wisdom, nurturing, understanding personality", type: "minor", suit: "coins" },
    { id: 25, name: "Queen of Hearts", image: "coins/stop-motion_Queen_of_Ennagrams_rose-gold_queen_cradles_cheese_32e68519-5983-4fdf-85a2-d8e23a891c6d_3.png", meaning: "Emotional mastery, loving authority, tender strength", type: "minor", suit: "coins" },
];

// Gallery Images Data for Voting - Using your actual artwork
const GALLERY_IMAGES = [
    { id: 'g1', title: 'The Moonlit Pool', description: 'Sepia aquarelle of moon reflection in sacred water', image: 'coins/2._Sepia_notebook_paper_aquarelle_moon_reflection_in_birdbath_0b054896-2cd3-48bf-b0ca-3f3a585a8f29_0.png' },
    { id: 'g2', title: 'The Awakened One', description: 'Divine consciousness with open eyes', image: 'eather/httpss.mj.runlgIA_7rPojs_open_eyes__6_THE_AWAKENED_ONE__OPENE_f0e90b81-a111-42de-94b3-9ebe3f97ab2c_0.png' },
    { id: 'g3', title: 'Mother of Roses', description: 'Nurturing feminine energy in full bloom', image: 'roses/johnmogi_httpss.mj.run4vkYW3V2k8w_the_mother_of_roses_tarot_rou_456c4177-0ebf-4a71-9630-acff7f0e5f5e.png' },
    { id: 'g4', title: 'The Lovers United', description: 'Armored souls meeting in sacred union', image: 'eather/fused_tarot_VI_The_Lovers-Judgment_armored_man__pristine_woma_6574116e-56f1-42e9-9dfe-4b23ff81b966_2.png' },
    { id: 'g5', title: 'The Blooming Heart', description: 'Celtic botanical wisdom of love opening', image: 'roses/botanical_celtic_tarot_card_of_The_Blooming_Heart_a_woman_who_96530e43-155d-44b6-84ec-ab3a62de5151_3.png' },
    { id: 'g6', title: 'The Lighthouse', description: 'Vine-wrapped tower offering guidance', image: 'eather/9_The_Lighthouse_watercolor_of_vine-wrapped_tower_now_a_light_54192ad2-36ce-4c64-9b70-4af68380e198_3.png' },
];

// Initialize app
class TarotApp {
    constructor() {
        this.currentSlide = 0;
        this.sliderInterval = null;
        this.currentLightboxIndex = 0;
        this.currentGallery = [];
        this.currentPage = 1;
        this.cardsPerPage = 12;
        this.majorCarouselIndex = 0;
        this.minorCarouselIndex = 0;
        this.currentTipIndex = 0;
        this.initializeStorage();
        this.loadData();
        this.render();
        this.attachEventListeners();
        this.initParallaxSlider();
        this.initParallaxScroll();
        this.initLightbox();
        this.initTabs();
        this.initMajorCarousel();
        this.initCommentSystem();
        this.initTipsCarousel();
    }

    initializeStorage() {
        // Initialize localStorage if not exists
        if (!localStorage.getItem('votes')) {
            localStorage.setItem('votes', JSON.stringify({}));
        }
        if (!localStorage.getItem('userVotes')) {
            localStorage.setItem('userVotes', JSON.stringify({}));
        }
        if (!localStorage.getItem('emails')) {
            localStorage.setItem('emails', JSON.stringify([]));
        }
        if (!localStorage.getItem('dailySpread')) {
            localStorage.setItem('dailySpread', JSON.stringify({ date: null, reflection: null, activation: null }));
        }
        if (!localStorage.getItem('registrations')) {
            localStorage.setItem('registrations', JSON.stringify([]));
        }
    }

    loadData() {
        this.votes = JSON.parse(localStorage.getItem('votes')) || {};
        this.userVotes = JSON.parse(localStorage.getItem('userVotes')) || {};
        this.emails = JSON.parse(localStorage.getItem('emails')) || [];
        this.dailySpread = JSON.parse(localStorage.getItem('dailySpread')) || { date: null, reflection: null, activation: null };
        this.registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    }

    saveData() {
        localStorage.setItem('votes', JSON.stringify(this.votes));
        localStorage.setItem('userVotes', JSON.stringify(this.userVotes));
        localStorage.setItem('emails', JSON.stringify(this.emails));
        localStorage.setItem('dailySpread', JSON.stringify(this.dailySpread));
        localStorage.setItem('registrations', JSON.stringify(this.registrations));
    }

    render() {
        this.renderVotingGallery(this.currentPage);
        this.renderAdditionalGalleries();
        this.renderSubscriberCount();
        this.checkDailySpread();
    }

    // Voting Gallery with Pagination - All Cards
    renderVotingGallery(page = 1) {
        const container = document.getElementById('voting-gallery');
        container.innerHTML = '';

        // Get translations
        const t = translations[currentLanguage]?.voting || translations.en.voting;

        // Get all actual cards (not theoretical ones)
        const allCards = TAROT_CARDS.filter(card => card.id < 50);

        // Calculate pagination
        const totalPages = Math.ceil(allCards.length / this.cardsPerPage);
        const startIndex = (page - 1) * this.cardsPerPage;
        const endIndex = startIndex + this.cardsPerPage;
        const cardsToShow = allCards.slice(startIndex, endIndex);

        // Update page info (with null checks)
        const currentPageEl = document.getElementById('current-page');
        const totalPagesEl = document.getElementById('total-pages');
        const currentPageBottomEl = document.getElementById('current-page-bottom');
        const totalPagesBottomEl = document.getElementById('total-pages-bottom');

        if (currentPageEl) currentPageEl.textContent = page;
        if (totalPagesEl) totalPagesEl.textContent = totalPages;
        if (currentPageBottomEl) currentPageBottomEl.textContent = page;
        if (totalPagesBottomEl) totalPagesBottomEl.textContent = totalPages;

        // Render cards
        cardsToShow.forEach(card => {
            const voteCount = this.votes[card.id] || 0;
            const hasVoted = this.userVotes[card.id] || false;

            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-item-image">
                    <img src="images/cards/${card.image}" alt="${card.name}" loading="lazy">
                </div>
                <div class="gallery-item-info">
                    <div class="gallery-item-title">${card.name}</div>
                    <div class="gallery-item-description">${card.meaning}</div>
                    <div class="vote-section">
                        <button class="vote-btn" data-id="${card.id}" ${hasVoted ? 'disabled' : ''}>
                            ${hasVoted ? t.voted : t.vote}
                        </button>
                        <span class="vote-count">${voteCount} ${t.votes}</span>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        // Enable/disable navigation buttons
        this.updatePaginationButtons(page, totalPages);
    }

    updatePaginationButtons(page, totalPages) {
        const prevBtns = [document.getElementById('prev-page'), document.getElementById('prev-page-bottom')];
        const nextBtns = [document.getElementById('next-page'), document.getElementById('next-page-bottom')];

        prevBtns.forEach(btn => {
            if (btn) btn.disabled = page === 1;
        });

        nextBtns.forEach(btn => {
            if (btn) btn.disabled = page === totalPages;
        });
    }

    goToPage(page) {
        const allCards = TAROT_CARDS.filter(card => card.id < 50);
        const totalPages = Math.ceil(allCards.length / this.cardsPerPage);

        if (page < 1 || page > totalPages) return;

        this.currentPage = page;
        this.renderVotingGallery(page);

        // Scroll to gallery
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    }

    // Additional Galleries (display only)
    renderAdditionalGalleries() {
        // Filter out theoretical cards without actual images (ids 50-88)
        const actualCards = TAROT_CARDS.filter(card => card.id < 50);

        // Major Arcana - Carousel (handled separately in initMajorCarousel)
        this.majorArcanaCards = actualCards.filter(card => card.type === 'major');
        this.renderMajorCarousel();

        // Minor Arcana - Carousel
        this.minorArcanaCards = actualCards.filter(card => card.type === 'minor');
        this.renderMinorCarousel();
    }

    renderGallerySection(containerId, cards) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        cards.forEach(card => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-item-image">
                    <img src="images/cards/${card.image}" alt="${card.name}" loading="lazy">
                </div>
                <div class="gallery-item-info">
                    <div class="gallery-item-title">${card.name}</div>
                    <div class="gallery-item-description">${card.meaning}</div>
                </div>
            `;
            container.appendChild(item);
        });
    }

    // Newsletter
    async renderSubscriberCount() {
        // Try to get count from backend first
        if (API_BASE_URL) {
            try {
                const response = await fetch(`${API_BASE_URL}/count.php`);
                const data = await response.json();
                if (data.success && data.count !== undefined) {
                    document.getElementById('subscriber-count').textContent = data.count;
                    return;
                }
            } catch (error) {
                console.warn('Could not fetch subscriber count from backend, using localStorage');
            }
        }

        // Fallback to localStorage
        document.getElementById('subscriber-count').textContent = this.emails.length;
    }

    // Daily Spread
    checkDailySpread() {
        const today = new Date().toDateString();

        if (this.dailySpread.date !== today) {
            // New day - reset spread
            this.dailySpread = { date: today, reflection: null, activation: null };
            this.saveData();
        } else {
            // Load saved spread
            if (this.dailySpread.reflection) {
                this.displayCard('reflection', this.dailySpread.reflection);
            }
            if (this.dailySpread.activation) {
                this.displayCard('activation', this.dailySpread.activation);
            }
        }
    }

    drawReflectionCard() {
        // Filter out theoretical cards without actual images
        const actualCards = TAROT_CARDS.filter(card => card.id < 50);
        const randomCard = actualCards[Math.floor(Math.random() * actualCards.length)];
        this.dailySpread.reflection = randomCard;
        this.saveData();
        this.displayCard('reflection', randomCard);
    }

    displayCard(type, card) {
        const slotId = type === 'reflection' ? 'reflection-card' : 'activation-card';
        const slot = document.getElementById(slotId);

        // Get translations
        const t = translations[currentLanguage]?.cards || translations.en.cards;

        // Generate reading-specific interpretation
        const reflectionReading = type === 'reflection'
            ? this.generateReflectionReading(card)
            : this.generateActivationReading(card);

        // Determine card category with translation
        let cardCategory = '';
        if (card.type === 'major') {
            cardCategory = card.number !== undefined
                ? `${t.majorArcana} ${card.number} - ${t.fifthElement}`
                : `${t.majorArcana} - ${t.fifthElement}`;
        } else if (card.type === 'minor') {
            const suitNames = {
                'roses': t.airMind,
                'cards': t.fireWill,
                'hearts': t.waterEmotion,
                'coins': t.earthMaterial
            };
            const suitName = suitNames[card.suit] || card.suit;
            cardCategory = `${t.minorArcana} - ${suitName}`;
        }

        const readingLabel = type === 'reflection' ? t.forReflection : t.forActivation;

        slot.innerHTML = `
            <div class="card-front" style="cursor: pointer;" title="Click for full view">
                <img src="images/cards/${card.image}" alt="${card.name}" class="daily-card-image">
                <div class="card-details">
                    <div class="card-name">${card.name}</div>
                    ${cardCategory ? `<div class="card-category">${cardCategory}</div>` : ''}
                    <div class="card-meaning"><strong>${t.coreMeaning}</strong> ${card.meaning}</div>
                </div>
            </div>
        `;

        // Add click handler to open detail modal
        const cardFront = slot.querySelector('.card-front');
        if (cardFront) {
            cardFront.addEventListener('click', () => {
                this.openCardDetailModal(card, type, cardCategory, reflectionReading, readingLabel);
            });
        }
    }

    openCardDetailModal(card, type, cardCategory, reading, readingLabel) {
        const modal = document.getElementById('card-detail-modal');
        const image = document.getElementById('detail-card-image');
        const name = document.getElementById('detail-card-name');
        const typeEl = document.getElementById('detail-card-type');
        const meaning = document.getElementById('detail-card-meaning');
        const readingEl = document.getElementById('detail-card-reading');

        // Get translations
        const t = translations[currentLanguage]?.cards || translations.en.cards;

        image.src = `images/cards/${card.image}`;
        image.alt = card.name;
        name.textContent = card.name;
        typeEl.textContent = cardCategory;
        meaning.textContent = card.meaning;

        // Build full reading content
        let readingContent = `<strong>${readingLabel}</strong><br>${reading}`;
        if (card.visualDesc) {
            readingContent = `<p><strong>${t.imagery}</strong> ${card.visualDesc}</p>` + readingContent;
        }
        readingEl.innerHTML = readingContent;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCardDetailModal() {
        const modal = document.getElementById('card-detail-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    generateReflectionReading(card) {
        // Generate contextual reflection reading based on card type and meaning
        if (card.type === 'major') {
            return `This Major Arcana card invites you to contemplate archetypal forces at work in your consciousness. What aspect of ${card.name.toLowerCase()} is seeking your attention today? How does this energy manifest in your current spiritual journey?`;
        } else if (card.suit === 'roses') {
            return `The suit of Roses speaks to your mental realm and thoughts. Reflect on how your mind is processing the world today. What mental patterns or beliefs does this card illuminate?`;
        } else if (card.suit === 'cards') {
            return `The suit of Cards addresses your creative will and manifestation. Consider what you're called to create or transform. How is your inner fire expressing itself?`;
        } else if (card.suit === 'hearts') {
            return `The suit of Hearts flows through your emotional waters. Notice what feelings are moving through you. What does your heart need you to understand today?`;
        } else if (card.suit === 'coins') {
            return `The suit of Coins grounds you in material reality. Reflect on your relationship with the physical world. What is the earth element teaching you about embodiment and manifestation?`;
        }
        return `Contemplate how this card's energy appears in your life. What wisdom does it offer for your journey today?`;
    }

    generateActivationReading(card) {
        // Generate contextual activation reading based on card type and meaning
        if (card.type === 'major') {
            return `Embody the archetypal power of ${card.name} today. Let this consciousness guide your actions and choices. How can you actively express this energy in your daily life?`;
        } else if (card.suit === 'roses') {
            return `Activate your mental clarity and awareness. Use your mind as a tool for insight and understanding. Take one action today that demonstrates the wisdom of clear thinking.`;
        } else if (card.suit === 'cards') {
            return `Channel your creative fire into manifestation. Take concrete steps toward bringing your vision into reality. What one thing can you create or transform today?`;
        } else if (card.suit === 'hearts') {
            return `Let your emotional intelligence guide your actions. Honor what your heart knows and express it authentically. How can you act from emotional truth today?`;
        } else if (card.suit === 'coins') {
            return `Ground your energy in practical action. Work with the material world skillfully and with intention. What tangible step can you take toward your goals?`;
        }
        return `Allow this card's energy to guide your actions today. How can you embody its wisdom in concrete ways?`;
    }

    openCardSelectionModal() {
        const modal = document.getElementById('card-modal');
        const grid = document.getElementById('card-selection-grid');

        grid.innerHTML = '';
        // Filter out theoretical cards without actual images
        const actualCards = TAROT_CARDS.filter(card => card.id < 50);

        actualCards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'selectable-card';
            cardEl.innerHTML = `
                <img src="images/cards/${card.image}" alt="${card.name}" class="selectable-card-img">
                <div class="selectable-card-name">${card.name}</div>
            `;
            cardEl.addEventListener('click', () => {
                this.selectActivationCard(card);
                this.closeModal();
            });
            grid.appendChild(cardEl);
        });

        modal.classList.add('active');
    }

    selectActivationCard(card) {
        this.dailySpread.activation = card;
        this.saveData();
        this.displayCard('activation', card);
    }

    closeModal() {
        document.getElementById('card-modal').classList.remove('active');
    }

    // Event Listeners
    attachEventListeners() {
        // Voting
        document.getElementById('voting-gallery').addEventListener('click', (e) => {
            if (e.target.classList.contains('vote-btn')) {
                const id = parseInt(e.target.dataset.id);
                this.handleVote(id);
            }
        });

        // Pagination buttons
        const prevPage = document.getElementById('prev-page');
        const nextPage = document.getElementById('next-page');
        const prevPageBottom = document.getElementById('prev-page-bottom');
        const nextPageBottom = document.getElementById('next-page-bottom');

        if (prevPage) prevPage.addEventListener('click', () => this.goToPage(this.currentPage - 1));
        if (nextPage) nextPage.addEventListener('click', () => this.goToPage(this.currentPage + 1));
        if (prevPageBottom) prevPageBottom.addEventListener('click', () => this.goToPage(this.currentPage - 1));
        if (nextPageBottom) nextPageBottom.addEventListener('click', () => this.goToPage(this.currentPage + 1));

        // Major Arcana Carousel buttons
        const majorPrev = document.getElementById('major-prev');
        const majorNext = document.getElementById('major-next');
        if (majorPrev) majorPrev.addEventListener('click', () => this.navigateMajorCarousel(-1));
        if (majorNext) majorNext.addEventListener('click', () => this.navigateMajorCarousel(1));

        // Minor Arcana Carousel buttons
        const minorPrev = document.getElementById('minor-prev');
        const minorNext = document.getElementById('minor-next');
        if (minorPrev) minorPrev.addEventListener('click', () => this.navigateMinorCarousel(-1));
        if (minorNext) minorNext.addEventListener('click', () => this.navigateMinorCarousel(1));

        // Newsletter (only if element exists)
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup();
            });
        }

        // Daily Spread
        document.getElementById('draw-reflection').addEventListener('click', () => {
            this.drawReflectionCard();
        });

        document.getElementById('choose-activation').addEventListener('click', () => {
            this.openCardSelectionModal();
        });

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('card-modal');
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Card detail modal close
        const cardDetailClose = document.querySelector('.card-detail-close');
        if (cardDetailClose) {
            cardDetailClose.addEventListener('click', () => {
                this.closeCardDetailModal();
            });
        }

        const cardDetailModal = document.getElementById('card-detail-modal');
        if (cardDetailModal) {
            cardDetailModal.addEventListener('click', (e) => {
                if (e.target === cardDetailModal) {
                    this.closeCardDetailModal();
                }
            });
        }
    }

    handleVote(imageId) {
        if (this.userVotes[imageId]) {
            return; // Already voted
        }

        this.votes[imageId] = (this.votes[imageId] || 0) + 1;
        this.userVotes[imageId] = true;
        this.saveData();
        this.renderVotingGallery();
    }

    async handleNewsletterSignup() {
        const emailInput = document.getElementById('email-input');
        const email = emailInput.value.trim().toLowerCase();
        const messageEl = document.getElementById('form-message');

        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Try backend first, fallback to localStorage
        if (API_BASE_URL) {
            try {
                const response = await fetch(`${API_BASE_URL}/subscribe.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        type: 'newsletter'
                    })
                });

                const data = await response.json();

                if (data.success) {
                    emailInput.value = '';
                    this.showMessage(data.message, 'success');
                    if (data.subscriberCount) {
                        document.getElementById('subscriber-count').textContent = data.subscriberCount;
                    }
                    return;
                } else {
                    throw new Error(data.message || 'Subscription failed');
                }
            } catch (error) {
                console.warn('Backend not available, using localStorage:', error);
                // Fall through to localStorage method
            }
        }

        // localStorage fallback
        if (this.emails.includes(email)) {
            this.showMessage('This email is already subscribed!', 'error');
            return;
        }

        this.emails.push(email);
        this.saveData();
        this.renderSubscriberCount();
        emailInput.value = '';
        this.showMessage('Thank you for joining our community! ✨', 'success');
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showMessage(message, type) {
        const messageEl = document.getElementById('form-message');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;

        setTimeout(() => {
            messageEl.className = 'form-message';
        }, 5000);
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Parallax Slider Methods
    initParallaxSlider() {
        const slides = document.querySelectorAll('.parallax-slide');
        const dots = document.querySelectorAll('.dot');

        if (slides.length === 0) return;

        // Auto-advance slides every 6 seconds
        this.sliderInterval = setInterval(() => {
            this.nextSlide();
        }, 6000);

        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });

        // Registration form toggle
        const toggleBtn = document.getElementById('toggle-registration');
        const headerBtn = document.getElementById('header-updates-btn');
        const footerBtn = document.getElementById('footer-updates-btn');
        const closeBtn = document.getElementById('close-registration');
        const formContainer = document.getElementById('registration-form');

        const openRegistrationForm = () => {
            formContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        if (toggleBtn) {
            toggleBtn.addEventListener('click', openRegistrationForm);
        }

        if (headerBtn) {
            headerBtn.addEventListener('click', openRegistrationForm);
        }

        if (footerBtn) {
            footerBtn.addEventListener('click', openRegistrationForm);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                formContainer.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Close form when clicking outside
        if (formContainer) {
            formContainer.addEventListener('click', (e) => {
                if (e.target === formContainer) {
                    formContainer.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Registration form submission
        const regForm = document.getElementById('full-registration-form');
        if (regForm) {
            regForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }
    }

    nextSlide() {
        const slides = document.querySelectorAll('.parallax-slide');
        const dots = document.querySelectorAll('.dot');

        this.currentSlide = (this.currentSlide + 1) % slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.parallax-slide');

        if (index >= 0 && index < slides.length) {
            this.currentSlide = index;
            this.updateSlides();

            // Reset auto-advance timer
            clearInterval(this.sliderInterval);
            this.sliderInterval = setInterval(() => {
                this.nextSlide();
            }, 6000);
        }
    }

    updateSlides() {
        const slides = document.querySelectorAll('.parallax-slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach((slide, index) => {
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Parallax Scroll Effect
    initParallaxScroll() {
        const header = document.querySelector('.header');
        let lastScrolled = 0;
        let ticking = false;

        window.addEventListener('scroll', () => {
            lastScrolled = window.pageYOffset;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Header scroll effect with hysteresis to prevent flickering
                    if (header) {
                        if (lastScrolled > 150 && !header.classList.contains('scrolled')) {
                            header.classList.add('scrolled');
                        } else if (lastScrolled < 100 && header.classList.contains('scrolled')) {
                            header.classList.remove('scrolled');
                        }
                    }

                    // Parallax effect
                    const parallaxSection = document.querySelector('.parallax-cta');
                    if (parallaxSection) {
                        const sectionTop = parallaxSection.offsetTop;
                        const sectionHeight = parallaxSection.offsetHeight;

                        // Only apply parallax when section is in view
                        if (lastScrolled + window.innerHeight > sectionTop && lastScrolled < sectionTop + sectionHeight) {
                            const slides = document.querySelectorAll('.parallax-slide');
                            const offset = (lastScrolled - sectionTop) * 0.5;

                            slides.forEach(slide => {
                                slide.style.transform = `translateY(${offset}px) scale(1.1)`;
                            });
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    // Registration Handler
    async handleRegistration() {
        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim().toLowerCase();
        const newsletter = document.getElementById('reg-newsletter').checked;
        const honeypot = document.getElementById('reg-website').value;

        // Honeypot check - if filled, it's a bot
        if (honeypot) {
            console.warn('Bot detected via honeypot');
            this.showRegistrationMessage('Registration successful!', 'success'); // Fake success for bots
            setTimeout(() => {
                document.getElementById('registration-form').classList.remove('active');
                document.body.style.overflow = 'auto';
            }, 2000);
            return;
        }

        // Validation
        if (!name || !email) {
            this.showRegistrationMessage('Please fill in all required fields', 'error');
            return;
        }

        if (!this.validateEmail(email)) {
            this.showRegistrationMessage('Please enter a valid email address', 'error');
            return;
        }

        // Try backend first, fallback to localStorage
        if (API_BASE_URL) {
            try {
                const response = await fetch(`${API_BASE_URL}/subscribe.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        newsletter: newsletter,
                        type: 'registration'
                    })
                });

                const data = await response.json();

                if (data.success) {
                    this.showRegistrationMessage(
                        `Welcome to SunLight, ${name}! 🌟`,
                        'success'
                    );
                    document.getElementById('full-registration-form').reset();

                    if (data.subscriberCount) {
                        document.getElementById('subscriber-count').textContent = data.subscriberCount;
                    }

                    // Close form after success
                    setTimeout(() => {
                        document.getElementById('registration-form').classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }, 2000);
                    return;
                } else {
                    throw new Error(data.message || 'Registration failed');
                }
            } catch (error) {
                console.warn('Backend not available, using localStorage:', error);
                // Fall through to localStorage method
            }
        }

        // localStorage fallback
        // Check if email already registered
        if (this.registrations.some(reg => reg.email === email)) {
            this.showRegistrationMessage('This email is already registered', 'error');
            return;
        }

        // Save registration
        const registration = {
            name,
            email,
            newsletter,
            timestamp: new Date().toISOString()
        };

        this.registrations.push(registration);
        this.saveData();

        // Also add to newsletter if checked
        if (newsletter && !this.emails.includes(email)) {
            this.emails.push(email);
            this.saveData();
            this.renderSubscriberCount();
        }

        // Show success message
        this.showRegistrationMessage(
            `Welcome to SunLight, ${name}! 🌟`,
            'success'
        );

        // Reset form
        document.getElementById('full-registration-form').reset();

        // Close form after 2 seconds
        setTimeout(() => {
            document.getElementById('registration-form').classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 2000);
    }

    showRegistrationMessage(message, type) {
        const messageEl = document.getElementById('registration-message');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;

        setTimeout(() => {
            messageEl.className = 'form-message';
        }, 5000);
    }

    // Lightbox Gallery Methods
    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        // Add click handlers to all gallery images
        document.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem && e.target.tagName === 'IMG') {
                this.openLightbox(e.target);
            }
        });

        // Close lightbox
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        // Navigation
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigateLightbox(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigateLightbox(1));
        }

        // Close on background click
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    this.closeLightbox();
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    }

    openLightbox(imgElement) {
        const galleryItem = imgElement.closest('.gallery-item');
        if (!galleryItem) return;

        // Determine which gallery this belongs to
        const votingGallery = document.getElementById('voting-gallery');
        const majorGallery = document.getElementById('major-arcana-gallery');
        const minorGallery = document.getElementById('minor-arcana-gallery');

        let gallery = [];
        let currentIndex = 0;

        if (votingGallery && votingGallery.contains(galleryItem)) {
            // Use actual cards from voting gallery (all 46 cards)
            gallery = TAROT_CARDS.filter(card => card.id < 50);
            const items = Array.from(votingGallery.querySelectorAll('.gallery-item'));
            const indexOnPage = items.indexOf(galleryItem);
            // Calculate actual index accounting for pagination
            currentIndex = (this.currentPage - 1) * this.cardsPerPage + indexOnPage;
        } else if (majorGallery && majorGallery.contains(galleryItem)) {
            // Major Arcana cards
            gallery = TAROT_CARDS.filter(card => card.type === 'major' && card.id < 50);
            const items = Array.from(majorGallery.querySelectorAll('.gallery-item'));
            currentIndex = items.indexOf(galleryItem);
        } else if (minorGallery && minorGallery.contains(galleryItem)) {
            // Minor Arcana cards
            gallery = TAROT_CARDS.filter(card => card.type === 'minor' && card.id < 50);
            const items = Array.from(minorGallery.querySelectorAll('.gallery-item'));
            currentIndex = items.indexOf(galleryItem);
        }

        this.currentGallery = gallery;
        this.currentLightboxIndex = currentIndex;

        this.displayLightboxImage();

        const lightbox = document.getElementById('lightbox');
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    displayLightboxImage() {
        const item = this.currentGallery[this.currentLightboxIndex];
        if (!item) return;

        const imgPath = `images/cards/${item.image}`;
        const title = item.title || item.name;

        // Use visual description if available, otherwise use meaning/description
        const meaning = item.visualDesc || item.description || item.meaning;

        // Show card number for Major Arcana if available
        let category = item.type ? (item.type === 'major' ? 'Major Arcana' : 'Minor Arcana') : 'Gallery';
        if (item.number !== undefined) {
            category = `Major Arcana ${item.number}`;
        }

        document.getElementById('lightbox-image').src = imgPath;
        document.getElementById('lightbox-title').textContent = title;
        document.getElementById('lightbox-meaning').textContent = meaning;
        document.getElementById('lightbox-category').textContent = category;
        document.getElementById('lightbox-current').textContent = this.currentLightboxIndex + 1;
        document.getElementById('lightbox-total').textContent = this.currentGallery.length;

        // Load comments for this card
        this.loadComments(item.id);
    }

    navigateLightbox(direction) {
        this.currentLightboxIndex += direction;

        // Wrap around
        if (this.currentLightboxIndex < 0) {
            this.currentLightboxIndex = this.currentGallery.length - 1;
        } else if (this.currentLightboxIndex >= this.currentGallery.length) {
            this.currentLightboxIndex = 0;
        }

        this.displayLightboxImage();
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Comment System Methods
    initCommentSystem() {
        // Set initial timestamp for bot protection
        this.setFormTimestamp();

        // Character counter
        const commentText = document.getElementById('comment-text');
        const charCount = document.getElementById('char-count');
        if (commentText && charCount) {
            commentText.addEventListener('input', () => {
                charCount.textContent = commentText.value.length;
            });
        }

        // Comment form submission
        const commentForm = document.getElementById('comment-form');
        if (commentForm) {
            commentForm.addEventListener('submit', (e) => this.handleCommentSubmit(e));
        }
    }

    setFormTimestamp() {
        const timestampInput = document.getElementById('comment-timestamp');
        if (timestampInput) {
            timestampInput.value = Date.now().toString();
        }
    }

    loadComments(cardId) {
        const commentsList = document.getElementById('comments-list');
        if (!commentsList) return;

        // Get translations
        const t = translations[currentLanguage]?.comments || translations.en.comments;

        // Update comment section UI with translations
        const commentsTitle = document.getElementById('comments-title');
        const commentText = document.getElementById('comment-text');
        const commentName = document.getElementById('comment-name');
        const submitBtn = document.getElementById('submit-comment');

        if (commentsTitle) commentsTitle.textContent = t.title;
        if (commentText) commentText.setAttribute('placeholder', t.placeholder);
        if (commentName) commentName.setAttribute('placeholder', t.namePlaceholder);
        if (submitBtn) submitBtn.textContent = t.submit;

        // Get comments from localStorage
        const allComments = JSON.parse(localStorage.getItem('sunlight_comments') || '{}');
        const cardComments = allComments[cardId] || [];

        if (cardComments.length === 0) {
            commentsList.innerHTML = `<p class="no-comments">${t.noComments}</p>`;
        } else {
            commentsList.innerHTML = cardComments.map(comment => `
                <div class="comment-item">
                    <div class="comment-header">
                        <span class="comment-author">${this.escapeHtml(comment.name)}</span>
                        <span class="comment-date">${this.formatDate(comment.date)}</span>
                    </div>
                    <p class="comment-body">${this.escapeHtml(comment.text)}</p>
                </div>
            `).join('');
        }

        // Set current card ID for form
        const cardIdInput = document.getElementById('comment-card-id');
        if (cardIdInput) {
            cardIdInput.value = cardId;
        }

        // Reset form
        const commentForm = document.getElementById('comment-form');
        if (commentForm) {
            commentForm.reset();
            document.getElementById('char-count').textContent = '0';
        }

        // Set timestamp for time-based bot protection
        this.setFormTimestamp();
    }

    handleCommentSubmit(e) {
        e.preventDefault();

        // Get translations
        const t = translations[currentLanguage]?.comments || translations.en.comments;

        // Bot protection checks - dual honeypots
        const honeypot1 = document.getElementById('comment-website');
        const honeypot2 = document.getElementById('comment-phone');
        if ((honeypot1 && honeypot1.value) || (honeypot2 && honeypot2.value)) {
            // Bot detected - silently fail
            console.warn('Bot detected via honeypot');
            this.showCommentMessage(t.success, 'success'); // Fake success
            return;
        }

        // Time-based validation - if submitted too quickly, it's a bot
        const timestamp = document.getElementById('comment-timestamp');
        if (timestamp && timestamp.value) {
            const formLoadTime = parseInt(timestamp.value);
            const submitTime = Date.now();
            const elapsedSeconds = (submitTime - formLoadTime) / 1000;

            // If form submitted in less than 3 seconds, likely a bot
            if (elapsedSeconds < 3) {
                console.warn('Bot detected via timing (too fast)');
                this.showCommentMessage(t.success, 'success'); // Fake success
                return;
            }
        }

        // Rate limiting
        const lastCommentTime = localStorage.getItem('sunlight_last_comment');
        const now = Date.now();
        if (lastCommentTime && (now - parseInt(lastCommentTime)) < 30000) {
            this.showCommentMessage(t.errorWait, 'error');
            return;
        }

        // Get form data
        const cardId = document.getElementById('comment-card-id').value;
        const name = document.getElementById('comment-name').value.trim();
        const text = document.getElementById('comment-text').value.trim();

        if (!name || !text) {
            this.showCommentMessage(t.errorFields, 'error');
            return;
        }

        // Save comment
        const allComments = JSON.parse(localStorage.getItem('sunlight_comments') || '{}');
        if (!allComments[cardId]) {
            allComments[cardId] = [];
        }

        allComments[cardId].push({
            name: name,
            text: text,
            date: new Date().toISOString()
        });

        localStorage.setItem('sunlight_comments', JSON.stringify(allComments));
        localStorage.setItem('sunlight_last_comment', now.toString());

        // Reload comments
        this.loadComments(cardId);
        this.showCommentMessage(t.success, 'success');
    }

    showCommentMessage(message, type) {
        const messageEl = document.getElementById('comment-message');
        if (messageEl) {
            messageEl.textContent = message;
            messageEl.className = `form-message ${type}`;
            setTimeout(() => {
                messageEl.className = 'form-message';
            }, 4000);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Tab Switching for About Section
    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.dataset.tab;

                // Remove active class from all buttons and content
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(`tab-${tabName}`).classList.add('active');
            });
        });
    }

    // Card Tips Carousel for Daily Spread
    initTipsCarousel() {
        const prevBtn = document.getElementById('tips-prev');
        const nextBtn = document.getElementById('tips-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigateTips(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigateTips(1));
        }

        // Initial render
        this.renderCurrentTip();
    }

    navigateTips(direction) {
        const tips = translations[currentLanguage]?.daily?.tips || translations.en.daily.tips;

        this.currentTipIndex += direction;

        // Wrap around
        if (this.currentTipIndex < 0) {
            this.currentTipIndex = tips.length - 1;
        } else if (this.currentTipIndex >= tips.length) {
            this.currentTipIndex = 0;
        }

        this.renderCurrentTip();
    }

    renderCurrentTip() {
        const tips = translations[currentLanguage]?.daily?.tips || translations.en.daily.tips;
        const tipContainer = document.getElementById('current-tip');

        if (tipContainer && tips && tips.length > 0) {
            const tipText = tips[this.currentTipIndex];
            tipContainer.innerHTML = `
                <span class="tip-icon">💡</span>
                <p>${tipText}</p>
            `;
        }
    }

    // Major Arcana Carousel
    initMajorCarousel() {
        this.renderMajorCarousel();
    }

    renderMajorCarousel() {
        const container = document.getElementById('major-arcana-gallery');
        if (!container || !this.majorArcanaCards || this.majorArcanaCards.length === 0) return;

        container.innerHTML = '';

        // Get translations
        const t = translations[currentLanguage]?.carousel || translations.en.carousel;

        const card = this.majorArcanaCards[this.majorCarouselIndex];

        const cardEl = document.createElement('div');
        cardEl.className = 'carousel-card';
        cardEl.innerHTML = `
            <div class="carousel-card-image">
                <img src="images/cards/${card.image}" alt="${card.name}" loading="lazy">
            </div>
            <div class="carousel-card-info">
                <h3 class="carousel-card-title">${card.name}</h3>
                <p class="carousel-card-meaning">${card.visualDesc || card.meaning}</p>
                <p class="carousel-card-number">${t.cardOf} ${this.majorCarouselIndex + 1} ${t.of} ${this.majorArcanaCards.length}</p>
            </div>
        `;

        container.appendChild(cardEl);
    }

    navigateMajorCarousel(direction) {
        if (!this.majorArcanaCards || this.majorArcanaCards.length === 0) return;

        this.majorCarouselIndex += direction;

        // Wrap around
        if (this.majorCarouselIndex < 0) {
            this.majorCarouselIndex = this.majorArcanaCards.length - 1;
        } else if (this.majorCarouselIndex >= this.majorArcanaCards.length) {
            this.majorCarouselIndex = 0;
        }

        this.renderMajorCarousel();
    }

    // Minor Arcana Carousel
    renderMinorCarousel() {
        const container = document.getElementById('minor-arcana-gallery');
        if (!container || !this.minorArcanaCards || this.minorArcanaCards.length === 0) return;

        container.innerHTML = '';

        // Get translations
        const t = translations[currentLanguage]?.carousel || translations.en.carousel;

        const card = this.minorArcanaCards[this.minorCarouselIndex];

        const cardEl = document.createElement('div');
        cardEl.className = 'carousel-card';
        cardEl.innerHTML = `
            <div class="carousel-card-image">
                <img src="images/cards/${card.image}" alt="${card.name}" loading="lazy">
            </div>
            <div class="carousel-card-info">
                <h3 class="carousel-card-title">${card.name}</h3>
                <p class="carousel-card-meaning">${card.visualDesc || card.meaning}</p>
                <p class="carousel-card-number">${t.cardOf} ${this.minorCarouselIndex + 1} ${t.of} ${this.minorArcanaCards.length}</p>
            </div>
        `;

        container.appendChild(cardEl);
    }

    navigateMinorCarousel(direction) {
        if (!this.minorArcanaCards || this.minorArcanaCards.length === 0) return;

        this.minorCarouselIndex += direction;

        // Wrap around
        if (this.minorCarouselIndex < 0) {
            this.minorCarouselIndex = this.minorArcanaCards.length - 1;
        } else if (this.minorCarouselIndex >= this.minorArcanaCards.length) {
            this.minorCarouselIndex = 0;
        }

        this.renderMinorCarousel();
    }

    // Email Export Utility
    exportEmails() {
        const emailData = {
            emails: this.emails,
            registrations: this.registrations,
            exportDate: new Date().toISOString(),
            totalSubscribers: this.emails.length,
            totalRegistrations: this.registrations.length
        };

        const dataStr = JSON.stringify(emailData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `sunlight-emails-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log('✅ Emails exported successfully!');
        console.log(`📧 Total emails: ${this.emails.length}`);
        console.log(`📝 Total registrations: ${this.registrations.length}`);
    }

    exportEmailsCSV() {
        // Export emails to CSV
        const emailsCSV = 'Email\n' + this.emails.join('\n');
        const emailsBlob = new Blob([emailsCSV], { type: 'text/csv' });
        const emailsUrl = URL.createObjectURL(emailsBlob);
        const emailsLink = document.createElement('a');
        emailsLink.href = emailsUrl;
        emailsLink.download = `sunlight-emails-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(emailsLink);
        emailsLink.click();
        document.body.removeChild(emailsLink);
        URL.revokeObjectURL(emailsUrl);

        // Export registrations to CSV
        if (this.registrations.length > 0) {
            const regCSV = 'Name,Email,Newsletter,Registration Date\n' +
                this.registrations.map(reg =>
                    `"${reg.name}","${reg.email}",${reg.newsletter},${reg.timestamp}`
                ).join('\n');

            const regBlob = new Blob([regCSV], { type: 'text/csv' });
            const regUrl = URL.createObjectURL(regBlob);
            const regLink = document.createElement('a');
            regLink.href = regUrl;
            regLink.download = `sunlight-registrations-${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(regLink);
            regLink.click();
            document.body.removeChild(regLink);
            URL.revokeObjectURL(regUrl);
        }

        console.log('✅ Emails exported to CSV successfully!');
    }
}

// Global functions for email export (accessible from browser console)
window.exportEmails = function() {
    const app = window.tarotApp;
    if (app) {
        app.exportEmails();
    } else {
        console.error('TarotApp not initialized');
    }
};

window.exportEmailsCSV = function() {
    const app = window.tarotApp;
    if (app) {
        app.exportEmailsCSV();
    } else {
        console.error('TarotApp not initialized');
    }
};

// Language/Translation Functions
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('sunlight_language', lang);

    // Set dir attribute for RTL languages
    if (RTL_LANGUAGES.includes(lang)) {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    // Update all translations
    updateTranslations();

    // Update language button text
    const langMap = {
        en: 'EN',
        he: 'עב',
        es: 'ES',
        fr: 'FR',
        ar: 'عر'
    };
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = langMap[lang] || 'EN';
    }

    // Mark active language in dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function updateTranslations() {
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded');
        return;
    }

    const t = translations[currentLanguage];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        for (const k of keys) {
            value = value?.[k];
        }

        if (value) {
            // Use innerHTML if the value contains HTML tags, otherwise textContent
            if (value.includes('<') && value.includes('>')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });

    // Update CTA section
    const ctaTitle = document.querySelector('.parallax-title');
    const ctaSubtitle = document.querySelector('.parallax-subtitle');
    const voteBtn = document.querySelector('.btn-primary-cta');
    const joinBtn = document.querySelector('.btn-secondary-cta');

    if (ctaTitle) ctaTitle.textContent = t.cta.title;
    if (ctaSubtitle) ctaSubtitle.textContent = t.cta.subtitle;
    if (voteBtn) voteBtn.textContent = t.cta.voteBtn;
    if (joinBtn) joinBtn.textContent = t.cta.joinBtn;

    // Update form
    const formTitle = document.querySelector('.registration-form-content h3');
    const formSubtitle = document.querySelector('.registration-form-content > p');
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const newsletterLabel = document.querySelector('#reg-newsletter + span');
    const submitBtn = document.querySelector('.btn-submit');

    if (formTitle) formTitle.textContent = t.form.title;
    if (formSubtitle) formSubtitle.textContent = t.form.subtitle;
    if (nameInput) nameInput.setAttribute('placeholder', t.form.namePlaceholder);
    if (emailInput) emailInput.setAttribute('placeholder', t.form.emailPlaceholder);
    if (newsletterLabel) newsletterLabel.textContent = t.form.newsletterLabel;
    if (submitBtn) submitBtn.textContent = t.form.submitBtn;

    // Update about section
    const aboutTitle = document.querySelector('#about h2');
    const aboutDesc = document.querySelector('#about .section-description');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    if (aboutDesc) aboutDesc.textContent = t.about.description;

    // Update about section tabs
    if (t.aboutTabs) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            const tabId = btn.getAttribute('data-tab');
            if (tabId && t.aboutTabs[tabId]) {
                btn.textContent = t.aboutTabs[tabId];
            }
        });
    }

    // Update gallery
    const galleryTitle = document.querySelector('#gallery h2');
    const galleryDesc = document.querySelector('#gallery .section-description');
    if (galleryTitle) galleryTitle.textContent = t.gallery.title;
    if (galleryDesc) galleryDesc.textContent = t.gallery.description;

    // Update daily spread
    const dailyTitle = document.querySelector('#daily-spread h2');
    const dailyDesc = document.querySelector('#daily-spread .section-description');
    if (dailyTitle) dailyTitle.textContent = t.daily.title;
    if (dailyDesc) dailyDesc.textContent = t.daily.description;

    // Update collections section
    const collectionsTitle = document.querySelector('#galleries h2');
    const majorCollectionTitle = document.querySelector('.gallery-collection h3:first-of-type');
    const minorCollectionTitle = document.querySelector('.gallery-collection:nth-of-type(2) h3');
    if (collectionsTitle) collectionsTitle.textContent = t.collections.title;
    if (majorCollectionTitle) majorCollectionTitle.textContent = t.collections.majorTitle;
    if (minorCollectionTitle) minorCollectionTitle.textContent = t.collections.minorTitle;

    // Update footer
    const footerPs = document.querySelectorAll('.footer p');
    if (footerPs.length >= 2) {
        footerPs[0].textContent = t.footer.copyright;
        footerPs[1].textContent = t.footer.tagline;
    }

    // Update subscriber count text
    const countSpan = document.getElementById('subscriber-count');
    if (countSpan && countSpan.parentElement) {
        const currentCount = countSpan.textContent;
        countSpan.parentElement.innerHTML = `<span id="subscriber-count">${currentCount}</span> ${t.cta.memberCount} ${t.cta.memberSuffix}`;
    }

    // Re-render dynamic content with new translations
    if (window.tarotApp) {
        window.tarotApp.renderVotingGallery(window.tarotApp.currentPage);
        window.tarotApp.renderMajorCarousel();
        window.tarotApp.renderMinorCarousel();
        window.tarotApp.renderCurrentTip();
    }
}

// Initialize language functionality
function initializeLanguage() {
    // Set initial language
    setLanguage(currentLanguage);

    // Language switcher toggle
    const langBtn = document.getElementById('current-lang');
    const langDropdown = document.getElementById('lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });

        // Language selection
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                setLanguage(lang);
                langDropdown.classList.remove('active');
            });
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon when menu is open
            if (navLinks.classList.contains('active')) {
                menuIcon.textContent = '✕';
            } else {
                menuIcon.textContent = '☰';
            }
        });

        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.textContent = '☰';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuIcon.textContent = '☰';
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    window.tarotApp = new TarotApp();
});
