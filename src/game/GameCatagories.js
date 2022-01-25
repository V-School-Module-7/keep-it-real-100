import kirGame from "../images/001_UPDATE-01.png"
import loveExplorations from "../images/love_explorations_final.svg"
import lossRemembrance from "../images/loss_remembrance_final.svg"
import groupInteractions from "../images/group_interactions_final.svg"
import addictionZone from "../images/addiction_zone_final.svg"
import loveOfJustice from "../images/love_of_justice_final.svg"
import musicalEncounters from "../images/musical_encounters_final.svg"
import ourMentalHealth from "../images/our_mental_health_final.svg"
import religionAndSpirituality from "../images/religion_spirituality_final.svg"
import theFinerThings from "../images/the_finer_things_final.svg"
import soulExpressions from "../images/soul_expressions_final.svg"
import sexuality from "../images/soul_expressions_final.svg"
import raceAndCulture from "../images/race_and_culture_final.svg"
import beingBipoc from "../images/being_bipoc_final.svg"
import relationships from "../images/relationships_final.svg"
import lgbtqia from "../images/LGBTQIA_final.svg"
import allInTheFamily from "../images/all_in_the_family_final.svg"

const GameCatagories = [
    {   
        logo: loveOfJustice,
        title: "FOR THE LOVE OF JUSTICE", 
        editor: "Written by Leslie & Edited by Celia",
        questions: [
           `Do you feel the conscience of this nation is being shaken up? Please share your thoughts and feelings on this.`, 
           'What changes are you personally going through at this time, due to the long overdue recognition of racism in America?', 
           'Frederick Douglass wrote, “Power concedes nothing without a demand. It never did and it never will.” Please respond to these words.', 
           'Do you feel you have been impacted by generational trauma? Please share to your comfort level.', 
           'As racism is spreading in our country, what would you do to heal your community? How would you heal yourself from thetrauma of racism? Why?  Please share your thoughts on this. ',
           'How often do you feel scared or stressed while just walking on the streets of your city, town, etc.?',
           'Throughout your life, do you feel your rights and liberties as a U.S. citizen have been protected?',
           'How do you respond to the saying, “Justice delayed is Justice denied?”',
           'Why do you think white people are finally getting it that there are deep, seemingly intractable systemic racist policies and problems in the US? Do you think they are getting it?',
           'Someone wrote in an article “Some of us are dealing with unprecedented grief. We are broken with pain and invalidated anger. We are dealing with unanswerable grief. We are suffering.” Do you resonate with this? Please share toyour comfort level.',
           'Do you feel you have a role in this moment? If yes, please share. If not, why not?',
           'What role does Love play in the changes we all need to make? Why?',
           'What songs / movies/ books, etc. would you recommend for healing',
           'Does forgiveness fit into this moment? Why or Why not?',
           'Is this a time, collectively, for us all to grow and heal our souls?',
        ],
        id: 1
    },
    {   
        logo: soulExpressions,
        title: "SOUL EXPRESSIONS", 
        editor: "Written by Leslie",
        questions: [
            'MEDITATION: One or more of the players, volunteer to lead the other players in a peaceful meditation. (For example: Have everyone close their eyes and imagine walking through gardens, waterfalls, a rainforest.) Describe in as much detail as you can. Let your imagination go!',
            'SOUL SEARCH: All players, draw an abstract picture of the state of your soul. Beginning with the person who chose this interaction, share your drawing with the other players, and say as much as you feel comfortable with about what your drawing means to you.',
            'ABSTRACT FUTURE: All players, draw an abstract picture of how you envision your future. Beginning with the person who chose this interaction, share your drawing with the other players and say as much as you feel comfortable with about what your drawing means to you.',
            'ABSTRACT PAST: All players, draw an abstract picture of your past.  Beginning with the person who chose this interaction, share your drawing with the other players and say as much as you feel comfortable with about what your drawing means to you.',
            'INNOCENCE: All players, draw a picture of innocence. Beginning with the person who chose this interaction, share your drawing with the other players and say as much as you feel comfortablewith about what your drawing means to you.',
            'SUPREME BEING / HIGHER POWER: All players, draw a picture of your image of God, or of your higher power. Beginning with the person who chose this interaction, share your drawing with the other players and say as much as you feel comfortable with about what your drawing means to you.',
            'PASSION: All players, draw a picture of passion. Beginning with the person who chose this interaction, share your drawing with the other players and say as much as you feel comfortable withabout what your drawing means to you.',
            'HEART HEAL: All players, draw a heart. Then, put into your heart two or three things / words, you would like your heart to heal for you. (For example: my relationship with my father, my guilt over my mother\'s death. etc.) Beginning with the person who chose this interaction, if you feel comfortable, please share on one of them.',
            'NATURAL ELEMENT: All players, choose an element you feel you relate to. (For example: wind, earth, fire, water, hurricane, volcano, flood, stone. etc.). Beginning with the person who chose this interaction, tell us what qualities this natural element has that you relate to, and why.',
            'ANIMAL GUIDE: What animal do you most relate to? (for example: Jaguar, Bear, Dog, Elephant, Lion, Cat). Beginning with the person who chose this interaction, tell us what qualities this animal has that you relate to, and why.',
            'LETTING GO: Is there anything that you are “tortured” by that you need support in letting go of? Please draw an abstract picture of what this is. Beginning with the person who chose this interaction, each person in turn, please share your drawing and what you need to let go of, and then other players share advice on how thisplayer might be able to let go.',
            'FORGIVENESS: Is there anything in your life you need to forgive yourself for? Please draw an image or picture that represents what you need self-forgiveness for. Beginning with the person who chose this interaction, share what this image means to you, to your comfort level.',
            'GRATITUDE: Draw an image or picture that represents something in your life you feel grateful for, or an image of gratitude. Beginning with the person who chose this interaction, share why you chose this image or picture.',
            'JOURNEY: Draw an image that represents the journey of your life so far. (For example: Would it be a straight line, a zigzag, a knotted ball of yarn, a flower growing out of concrete, etc.). Beginning with the person who chose this interaction, please share what this image or picture means to you.',
            'PERSONAL BEST: Draw an image or picture of what you consider to be one of your greatest achievements in your life, so far. Beginning with the person who chose this interaction, please share on what this is, and why you consider it to be important. All other players, clap for this achievement!'
        ],
        id: 2
    },
    {   
        logo: relationships,
        title: "RELATIONSHIPS (Self & Others)", 
        editor: "Written by Jordan (a few by Leslie)",
        questions: [
            'How often do you think about your inner child? What would you like to say to your younger self?',
            'What is your “ideal self” the self you try to achieve every day? Is your ideal self realistic? (For example: someone\'s ideal self may have a mansion at a certain age, or be in an idolized profession)',
            'What have your past relationships taught you? How can you use your hurts for good? How can you be better for yourself and others?',
            'Is there a past or current relationship (platonic or otherwise) that still hurts? What do you think the hurt is trying to teach you?',
            'How has your friendship dynamic changed over the years? (For example: did you move around a lot as at any point in time, causing you to make new friends everywhere you went but not keep them long? Did you have a new best friend every new school year even though you didn\'t move? Did you grow up with the same group of people and inner growth or different lifestyle choices separated you through the years, etc.?)',
            'Do the opinions of others weigh on how you see yourself? Why or why not?',
            'How does your self-image tie in with your job/career/career ambitions?',
            'Have you ever been made fun of, or disregarded for something that was important to you (For example: an old toy, or a cheesy tv show, an eccentricity, an unpopular friend, etc.?) How was your relationship with that thing or person, or even your self affected by this?',
            'How do you see yourself? Is this generally how you think others also see you, or do you often feel people do not see you as you are, but more as their own projection of you? What is your experience?',
            'What does “alone, but not lonely" mean to you? Do you like spending time by yourself? Why or why not?',
            'How many of you have learned about relationships from watching tv? What have you learned? Does this work for you?',
            'What are some relationship "goals" that you wanted or want to achieve for yourself? Were you / are you able to obtain them? Why or why not?',
            'Do you feel there are unique challenges to couples of color, that white couples, in general, do not experience? If yes, please share what you feel they are.',
            'How would you define Black love? Is there anything about Black love that might be different from any other type of love?',
            'What do you feel is something that is challenging for you, in having a healthy and rewarding relationships of any kind, if anything?'
        ],
        id: 3
    },
    {   
        logo: raceAndCulture,
        title: "RACE & CULTURE", 
        editor: "Written by Jordan",
        questions: [
            'Do you feel you have ever been misunderstood by others based on your race and / or skin color? Please share.',
            'Tell us a little about your culture and ethnicity. What are your favorite things about it? What don\'t you like? What do you thinkneeds changing?  (For Example: homophobia in certain cultures, colorism, exclusivity)',
            'What do you think people outside your culture and race should know and learn about your culture?',
            'When did you first get your hair braided, or when did you first get a “cultural hairstyle” (a style significant to your culture) and what was this experience like for you?',
            'When did you first hear the term “natural hair”? What did that mean to you?',
            'Does good hair exist? If so, what does that look like to you?',
            'How do you get treated when your hair is in its natural state vs your hair straightened or wigs, weaves or braids? Why do you think this is?',
            'Growing up were you ever ashamed or embarrassed to be Black, Hispanic, Latinx, Asian, etc? If yes, what specifically made you feel ashamed of your ethnicity or culture, and why?',
            'How much healing do you personally feel you need to do within yourself around being BIPOC? What has helped you on your journey to self-acceptance, and appreciation?',
            'How much healing do you feel we have to do together as a culture? How can we start, or progress healing?',
            'How do you feel when your culture is used as an aesthetic by others, but your people are not credited for creating it?',
            'Have you ever been teased or bullied for liking things that aren\'t “black” or accepted by your culture in general; for example; enjoying anime, rock music, goth or the punk aesthetic, etc.',
            'If you were a different race from your own, what would you miss about being the race(s) you are?',
            'Tell us about the most annoying stereotype of your race, ethnicity, or religion. How does this affect you?',
            'Did your parents or caretakers ever have “the talk” with you? If yes, how old were you? What did you think and feel about it?'
        ],
        id: 4
    },
    {   
        logo: ourMentalHealth,
        title: "OUR MENTAL HEALTH", 
        editor: "Written by Celia & Edited by Jordan",
        questions: [
            'Have you experienced mental health issues in your life? If comfortable, please share some ways that you\'ve overcome difficult mental and emotional problems?',
            'What are some ways that you take care of yourself physically, mentally and emotionally?',
            'Have you experienced racial bias within the mental health system? If you are a person of color how many Counselors or Therapists of color have you had? How have you been impacted?',
            'What do you do if you are concerned about your emotional wellness? How do you maintain your emotional wellness? What ways do you practice emotional wellness?',
            'Have you experienced grief, loss of a loved one, friends, or of  an intimate relationship? If yes, please share how you have been impacted by your loss, to your comfort level.',
            'What makes you feel anxious, nervous, or overwhelmed? (For example: In school, at work, at home, with your family, closed in spaces, your relationship with a significant other, etc.? How do you manage these feelings?',
            'How have you been offered peer / emotional support? How can friends support your emotional wellness? (For example: friends, coworkers, classmates, etc.)',
            'Have you or someone you have known experienced discriminationon the basis of disabilities; physical, mental, autism etc.? If yes, how has this impacted you or them? Please share to your comfort level.',
            'What ways can you / do you support yourself when you have feelings of sadness, anger, and depression? How do you handle stress?',
            'Have you ever had a feeling of wanting to fall asleep and never wake up? Have you ever felt something like wanting your existence to stop? If yes, how did or do you manage these feelings? Please share to your comfort level.',
            'Do you remember when you first heard the word suicide? How was it explained or described to you? What did you think of it? Most people at some time in their life have thoughts of suicide? What do you think of it now?',
            'Do you ever feel depressed, or have self-hatred?  If yes, what do you think triggers this? Do you self-harm, or cut your body on purpose? Please only share to your comfort level on this.',
            'How do you define bullying? Have you been bullied? Have you bullied others?',
            'What adults or someone else, if any, do you trust to go to if you are being bullied? Do you trust any adults in this type of situation?',
            'Please choose one or two to speak on.  1) How is your relationship with food? Have you ever struggled with your relationship with food? Please share about your experience to your comfort level.  2) Have you self-medicated with drugs or alcohol to handle anxiety or other difficult feelings? What do you do to supportand maintain calmness when dealing with anxiety?'
        ],
        id: 5
    },
    {   
        logo: religionAndSpirituality,
        title: "RELIGION & SPIRITUALITY", 
        editor: "Written by ",
        questions: [
            'Are you spiritual, or religious, and what does that mean to you?',
            'Is there a religious book that you agree with, disagree with, or believe only some things are written in it (For example: the Bible, Koran, etc.)? Please share.',
            'Do you feel like your spirituality is widely based on outside influences, or do you have your own beliefs that are widely based on your own experience, and / or research? Why do you believe in what you believe in Spiritually?',
            'When you think of the word Christian, what are the first few words that you associate with that word/group of people, and why? Do you think these associations are primarily shaped by what you\'ve heard about that group of individuals, or through your own personal experience? What do you think the primary mission is of a Christian and with that, would you consider yourself a Christian or hope to be some day?',
            'What does forgiveness mean to you in the Spiritual sense of the word, and is it important for you to forgive?',
            'Do you have a safe space with safe people to practice your spiritual or religious beliefs? If not, what would the ideal place look like for you?',
            'Does your family come from a tribe in your country, and if yes, what are their spiritual practices, rituals or traditions?"',
            'Do you believe in fortune tellers, tarot readings or even superstitions, ghosts, etc.?" If yes, what are some of your beliefs, and were you raised with these beliefs, or did you come to them on your own?',
            'Do you understand your spirituality through astrology or numerology, etc.? Do you think your God, and / or source created you with the way the stars are aligned?',
            'Do you believe in Heaven and Hell (an eternal place to live in peace or to be burned and suffer eternally)? Why or why not?',
            'What does salvation mean to you? Do you believe that the human race needs to be saved from their own self destruction?',
            'What does your religion or spirituality say about sex, marriage and the right to have pre-marital sex? Do you agree with what you understand these teaching to mean in these areas? Why or why not?',
            'Do you believe that the religions that are universally accepted include equal rights for both genders? Do you believe that the way society has interpreted the texts of religious literature/books correctly depict Gods/your source\'s original intent, or even the truth word for word placed in many spiritual and religious books?',
            'In relation to your religious or spiritual beliefs, does your family share your beliefs and practices, or are they different? Has this had a negative or positive impact on you?',
            'Who or what is God/your source to you and how do you see or experience God/your source, or your higher power?'
        ],
        id: 6
    },
    {   
        logo: groupInteractions,
        title: "FUN GROUP INTERACTIONS",
        editor: "Written by Leslie", 
        questions: [
            'GROUP STORY: Whoever is the Leader of this turn, come up with the opening sentence to a story. All players, in turn, add a sentence until the story comes to a conclusion!',
            'FUNNY FACE CONTEST: Beginning with the Leader of this turn, and then continuing to each player, make the funniest face you can. Players vote on the funniest face!',
            'LOVE POTION: Create a love potion that works every time! Beginning with the Leader of this turn, add an ingredient to thisconcoction, and explain why it must be included. (For example:lavender oil - to relax and calm the senses, Ginger - to add some spice, etc.)',
            'STRIKE A POSE: Beginning with the Leader of this turn, in turn, each player strike the pose you would like to be immortalized by, and tell us why.',
            'SELF: Beginning with the Leader of this turn, in turn, each player describe your relationship with yourself with a sound, and/or a movement. Please share why you chose this expression.',
            'SOUL SEARCH: Beginning with the Leader of this tun, each player in turn, share with us something about / describe something about the state of your Soul at this time. Begin with the words My Soul.......',
            'ANIMAL GUIDE: What animal do you most relate to? (for example: Jaguar, Bear, Dog, Elephant, Lion, Cat). Beginning with the Leader of this turn, each player identify your animal, and tell us what qualities they have that make you feel you canrelate to them, and why.',
            'ALIEN NATION: Beginning with the Leader of this turn, each player describe to a Martian what it is to be a human being.',
            'BROKEN HEART: Beginning with the Leader of this turn, each player describe the feeling of having a broken heart, and tell us about the first time your heart was broken, and how you recovered!',
            'WORDS OF WISDOM: Beginning with the Leader, each player pretend you are the oldest living person on Earth. Share with the other players your wisest words of wisdom about life.',
            'ALL KINDS OF ADVICE: Beginning with the Leader, each player is seeking advice. Propose a question to the other players on anything you choose (real or imaginary). The other players are then to give you Good advice, Bad advice and Awfuladvice. You choose what to listen to!',
            'SCARY STORY: Whoever is the Leader of this turn, begin with making up the first sentence to a Scary Story. Each player, in turn, add a sentence until the Scary Story comes to an end.',
            'FUNNY VOICE CONTEST: Beginning with the Leader of this turn, and then continuing to each player, speak in the funniest voice you can. Players vote on the funniest voice!',
            'PLEASE DON\'T LET ME BE MISUNDERSTOOD: Beginning with the Leader of this turn, each player complete this sentence - What people don\'t understand about me is.........',
            'INVENTION: You are at work on an invention that will save the world! Whoever is the Leader of this turn, give this invention a name. Each player, then add your element to this invention that is going to save the world.'
        ],
        id: 7
    },
    {   
        logo: allInTheFamily,
        title: "ALL IN THE FAMILY", 
        editor: "Written by Leslie (a few by Jordan)",
        questions: [
            'Are you from first gen immigrant parents? Second gen? Third gen? Please share on how you feel you have been impacted by your immigrant status.',
            'Is there anything you\'d like to do career wise, that your family would disagree with or be unsupportive of? (For example: Pursue music, become a YouTuber, etc.). How important is it to you to have family support?',
            'What are generational curses? Do you think you experience any? If yes, how would you want to overcome them?',
            'What would you like to have a second chance at in your family, if anything? Why?',
            'If they could talk, and you had a pet, what would your pet say about you and your family?',
            'Are relationships with people in your family generally easy or difficult for you? Please share to your comfort level.',
            'Each player, share three adjectives that best describes your family. (For example: Loyal, Wild, Resilient).',
            'If there was something you could change about an important relationship with a family member, whether or not you could actually have the power to change it, what would it be? Please share to your comfort level.',
            'Even if things might have been / or are difficult with your family relationships, what values / positive things do you feel your family has given to you?',
            'Are you holding on to any old grudges towards anyone in your family you feel burdened by, that you might want to let go of and leave behind? Please speak on this.',
            'What character traits do you think you have in common with your family?', 
            'Does anyone feel a family member has unfair expectations of them? Please share to your comfort level.',
            'How would you describe your role in your family? Does your ascribed role hurt, help, or hinder you as a person?',
            'If your family story were to be made into a movie, would it be a drama, comedy, action/adventure, tragedy, romance, horror, supernatural, or other genre of film? Why did you choose this?',
            'Did you feel disciplined as a child, or punished? (For example: whoopings, etc.). Please share how you feel you were affected by the way you were disciplined.',
        ],
        id: 8
    },
    {   
        logo: loveExplorations,
        title: "LOVE EXPLORATIONS (Discussion Quotes)", 
        editor: "Written by Leslie",
        questions: [
           '“It\'s an unexplainable feeling, an expression. It\'s a touch, it\'s a feel. Once you feel it, it\'s like no other thing in the world.”     - Snoop Dogg', 
           '“There\'s definitely a dangerous feeling when you\'re in love...It\'s giving your heart to someone else and knowing that they have control over your feelings. I know for me, who always triesto be so tough, that\'s the dangerous thing."     - Beyonce Knowles',
           '“Choose people who will lift you up. Find people who will make you better.”     - Michelle Obama',
           '“We waste time looking for the perfect lover, instead of creating the perfect love.”    - Tom Robbins',
           '“Don\'t cry over someone who wouldn\'t cry over you.”     - Lauren Conrad',
           '“It takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death.”     - Eleanor Roosevelt',
           '“Never love anyone who treats you like you are ordinary.”   - Oscar Wilde',
           '“Ever has it been said that love knows not its own depth until the hour of separation.”     - Kahlil Gibran',
           'Sometimes love means letting go when you want to hold on tighter.”      - Melissa Marr',
           '“I believe love is primarily a choice and only sometimes a feeling. If you want to feel love, choose to love and be patient.”       - Real Live Preacher',
           '“Most people have a harder time letting themselves love than finding someone to love them.”     - Bill Russell',
           '“When someone or something is no longer bringing you up but pulling you down - it\'s time to let go. When someone or something is no longer adding to your life but subtracting from it - it\'s time to go.”        - Mandy Hale',
            '“Don\'t settle for a relationship that won\'t let you be yourself.”     - Oprah Winfrey',
            '“A flower cannot blossom without sunshine and man cannot live without love.”       - Max Mueller',
            '“Nobody has ever measured, not even poets, how much the heart can hold.”       - Zelda Fitzgerald'
        ],
        id: 9
    },
    {   
        logo: addictionZone,
        title: "ADDICTION ZONE", 
        editor: "Written by Leslie",
        questions: [
           'Have you used drugs? If yes, why have you used, or why do you continue to use them?', 
           'What does / did, using drugs do for you?', 
           'If your drug use was or is a result of trauma, what can you do, or have you done to help you to heal so you can make healthier choices?', 
           'Do you feel like you are your addiction? Are you aware of yourself as a person separate from your addiction? Please share whatever comes to mind.', 
           'What is your experience with the attempt to stay away from “people, places and things”? Has this been difficult? Do you believe that “people, places and things” cause people to relapse? Why or why not? Please share', 
           'If you use drugs or alcohol, do you think your use affects your family or friends? Please share your thoughts on this. How important do you feel spiritual strength is to achieve andmaintain sobriety? What do you do to strengthen your spirituality, if anything?', 
           'How important do you feel spiritual strength is to achieve and maintain sobriety? What do you do to strengthen your spirituality, if anything?', 
           'How would you describe the experience of dependence on drugs and / or alcohol? How do you feel your life would be different if you did not have this dependence?', 
           'If you are using drugs or alcohol and were to stop, what would you miss most?', 
           'Can you forgive yourself for some of the things you may have done due to your addiction? Please share to your comfort level.', 
           'Do you feel judged by people in your life, and society for having addictions? Please explain.', 
           'Do you feel it is more the physical, or the emotional pulls that keep you chained to your addiction, or both? Please share on this.', 
           'Do you think that most people who become addicted use drugs to self-medicate, and to stabilize their moods? Why or why not?', 
           'Are you able to identify your red flags? If yes, what is one, or two, of them? Please share.', 
           'If your heart could speak -  what would it say to you about your addiction?'
        ],
        id: 10
    },
    {   
        logo: musicalEncounters,
        title: "MUSICAL ENCOUNTERS", 
        editor: "Written by Jabran & Kevin",
        questions: [
            '1. “Don\'t let the struggle make your heart harder Sip the truth, spit the truth That\'s the smart water”  - Daniels Bloom by Mick Jenkins',
            '2. “Cause it makes me that much stronger Makes me work a little bit harderMakes me that much wiserSo thanks for making me a fighterMade me learn a little bit fasterMade my skin a little bit thickerMakes me that much smarterSo thanks for making me a fighter”  - Fighter by Christina Aguilera',
            '3. “Don\'t lose who you are In the blur of the stars Seeing is deceiving Dreaming is believing It\'s okay not to be oka Sometimes it\'s hard To follow your heart But tears don\'t mean your losing Everybody\'s bruising There\'s nothing wrong with who you are” - Who You Are by Jessie J',
            '4. “I know it\'s crazy to think of this daily Imagine no one needing guns all at once, impossible maybe But we\'ve never tried itThe whole world in silence Respecting each other our Gods and our brothers Killing with kindness”   - One Love by Elle Varner',
            '5. “Don\'t keep it all in your head The only place that you know nobody ever can seeYou\'re running low on regretNo tears, that\'s keeping you wet I think you gettin\' it now”    - Once a day by Mac Miller',
            '6. “(Still I feel my) Eyes heavy when the day goes Nothing help when my head doze (But I ain\'t sleep) Awake in another state Living in a new space (Still I feel my) Mind running at a steady pace God help me so I\'ll win the race”  - Sky Might Fall by Kid Cudi',
            '7. “Run from the dark Into the light You know, you know you\'re gonna find your way out Run from the dark Into the light Oh-whoa, you know you\'re gonna find your way Just run to the sunlight Just run to the sunlight”  -Sunlight by Mac Miller feat. Iman Omari',
            '8. "Don\'t push me cause I\'m close to the edge I\'m trying not to lose my head It\'s like a jungle. Sometimes it makes me wonder How I keep from goin\' under."   - Grandmaster Flash & the Furious Five',
            '9. “I had anxiety that I didn\'t know was anxiety. I had panic attacks that I didn\'t know were panic attacks. Any time I felt something I considered abnormal, I just reached for the bottle.”  - DMC',
            '10. “It could be all so simple But you\'d rather make it Hard, Loving you is like a battle And we both end up with scars.” - Lauryn Hill',
            '11. “Spoke some things into the universe and they appeared I say it\'s worth it, I won\'t say it\'s fair Find your purpose or you wastin\' air...” - Nipsey Hussle',
            '12. “You see I\'m trapped in my mind And I know it\'s crazy Hey it\'s not that bad at all When you think of the world I know it\'s crazy Hey I\'m not that bad at all” - Trapped in My Mind by Kid Cudi',
            '13. “Love is stronger than pride But also love is a muscle You gotta build from inside And amidst the hustle and bustle Amidst the roll of the thunder I play the role of a Russell Westbrook or Simmons”  - Daniel\'s Bloom by Mick Jenkins',
            '14. “Cause I, I\'m in love With my future Can\'t wait to meet her And I, I\'m in love But not with anybody else Just wanna get to know myself” - Future by Billie Eilish',
            '15. “Everybody\'s somebody\'s everything I know you right Nobody\'s nothing That\'s right"   -Everybody\'s Something by Chance the Rapper'
        ],
        id: 11
    },
    {   
        logo: theFinerThings,
        title: "THE FINER THINGS", 
        editor: "Written by Jordan",
        questions: [
            'As Black or BIPOC people, do you believe we are financially oppressed? If yes, name two ways we are financially oppressed by society, and two ways we financially oppress ourselves.',
            'Have you seriously thought about why we have a negative or nonchalant way of looking at Black owned business? (For example: Obsession with designer clothing, and subconscious thinking that our stuff is corny?) What are your thoughts on this?',
            'Is it important for you to create generational wealth and financial freedom? If yes, have you started? Why or why not?',
            'What are your passions in life? Do you think they can make you money? Do you want to make money from your passions? Why or why not?',
            'What is your perfect home? What does it look like? What do you want it to have?', 
            'What does self-care mean to you? Does it have a material component? Please share your thoughts on this.', 
            'Do you prefer a partner that makes the same amount of money as you? Or less or more? Please share your thoughts on this.', 
            'What do you like to buy for yourself?( For Example: Shoes, clothing, jewelry, vacations) How does it make you feel when you buy these things?', 
            'What is a credit score? Have you ever heard of it? What do you think a credit score is and how important do you think it is?', 
            'Is it more important for you to invest in yourself financially now, or in the future? Please share your thoughts on this.', 
            'What are your financial expectations for your partner? Be real!', 
            'Does good credit matter to you in a relationship? (For yourself and/or your partner?). Please share your thoughts on this.', 
            'What did your parent(s) or caretaker(s) teach you, either consciously or subconsciously, about the value, or lack of value of money?', 
            'What are your guilty pleasures? (ex. Reality tv, shopping sprees, etc.)',
            'Have you supported any black businesses this year? Why or why not?' 
        ],
        id: 12
    },
    {   
        logo: lossRemembrance,
        title: "LOSS AND REMEMBRANCE", 
        editor: "Written by Leslie",
        questions: [
            'What is one of your fondest or most cherished memories with the person you lost?',
            'What is something you will miss about this person?',
            'How did this person make your life better by knowing them?',
            'Do you have any regrets or feelings of guilt concerning your relationship with this person? Please share to your comfort level.',
            'How would your life be different if you had never known this person?',
            'What brought this person the greatest joy in life?',
            'Did he or she share any words of wisdom with you, or say anything to you that you will never forget?',
            'Do you feel life is worth living without this person? How would they want you to feel about your life, and the value of your life?',
            'What gives you hope and strength to continue on?',
            'How do you think he or she would like to be remembered by you? How would they want you to celebrate their life and legacy?',
            'What is something he or she taught you by their example?',
            'What is a lesson about life you feel you learned from him or her?',
            'Is there an interesting story he or she told you about their childhood that you would like to share?',
            'What did they inspire you to do more of, than you would have if you had not known them?',
            'Do you have any material things of theirs (a card, piece of jewelry, gift, etc.) that you cherish, and will keep with you forever? Please share what this means to you and how this can help to nurture you.'
        ],
        id: 13
    },
    {   
        logo: beingBipoc,
        title: "BEING BIPOC", 
        editor: " ",
        questions: [
            'What are two main reasons you love being who you are based on your race(s), and name two main reasons you are not thrilled that you are who you are in this world, based on your race(s). Do these things ignite buried emotions, or anything else? Please sh',
            'What is the most memorable experience you have had; if any, that made you realize for the first time the importance of your race(s) or culture. Was ispositive or negative, or both? Please share. ',
            'Have you experienced any level of trauma due to your race(s) or culture? If so, what have you done to heal from your pain?',
            'Do you have any difficult emotions you have repressed and have not yet dealt with regarding the experience of being a person of color? Please share to your comfort level.',
            'Do you believe that colorism exists in every culture, especially in the BIPOC community? Please share your thoughts on this.',
            'What are happy memories or experiences you have had, specific to your race(s) or culture?',
            'What are the stereotypes of your race(s) or culture that you would like to debunk and address? And are there stereotypes that you find to be quite funny and believe about yourself?',
            'Do you believe that you are prejudiced towards others because of any unforgiveness in your heart, and do you think that you can ever truly forgive others for the pain they have caused you due to your race(s) or culture?',
            'Do you believe that being a person of color has a positive or a negative impact on your sense of self-worth / mental health? Or both positive and negative? Please share your thoughts on this.',
            'How has being a person of color impacted the way you show up in your personal or professional life, if you feel it has?',
            'Has anything in your personal and/or professional life changed to respond to or to accommodate the overall recent acknowledgement of the societal challenges face?',
            'What is your feeling about the mental health impact of navigating oppression, racism and racial violence? We know this is difficult to put into words, so the group might want to discuss this question together, rather than answer one by one.',
            'Do you feel there is a good deal of interracial prejudice between different groups of people of color, as well as colorism within the same race? If yes, how would you define interracial prejudice, and why do you think these divides have developed?',
            'How can you find inner peace, and resilience during these trying times?',
            'Do you feel like some white people are getting it more now? What are your thoughts and feelings on this? How far do you think we are going to go in dismantling structural and systemic racism?'
        ],
        id: 14
    },
    {   
        logo: lgbtqia,
        title: "LGBTQIA +", 
        editor: " ",
        questions: [
            'If you are non-binary or transgender, what are some things you would like people to know about your experience being non-binary or transgender?',
            'Members of the LGBTQIA+ community, what are some things you would like cisgender/ and straight people to know about your community? What are some misconceptions that you\'d like to clear up? What types of supports do you live with and/or need in your life? Please answer whichever question appeals to you.',
            'It is commonly known that lesbian, gay and bisexual and trans people may experience feelings of guilt, isolation, depression, suicidal feelings, and low self-esteem. How do you respond to this? If you agree with it, why do you think this is the case? If not, why not?',
            'In our current state of affairs in the world, do you feel safe in self-disclosing about your sexual orientation and gender identity? Do you fear retribution? (e.g., abuse physically, sexually, violence)?',
            'When did you come out? How was that? Joyous? Not? Did you have supports? What was your experience?',
            'What do you think might be issues that LGBTQIA+ couples face that straight couples do not have to consider? How might these difficulties be managed and dealt with best?',
            'Would you intervene if you saw homophobic/transphobic bullying taking place? Why or why not?',
            'How do stressors you may experience due to being LGBTQIA+ also affect the intersection of other parts of your identity such as race, culture, age and disability?',
            'Do you have friends, family, peers or teachers that accept your sexual orientation and/or gender identity? Is this helpful for you? Please share your experience.',
            'Do you know any families that are struggling with accepting that their child is Lesbian, Gay, Bisexual, or Transgender? If so, tell us about what is going on with that family? If you feel comfortable sharing, whatwas your journey with your family?',
            'There is much disagreement about the Bible condemning LGBTQ people. Many religious scholars argue that the Biblical passages which are said to refer to same-gender sexuality have been misinterpreted. Have you experienced any religious exclusion or discrimination based on your sexuality? Please share.',
            'Have you ever experienced any form of violence from your peers, family, community concerning your Gender Identity?  How have experiences of discrimination regarding your sexual orientation and/or gender identity impacted your well-being? Please share to your comfort level.',
            'Research shows that the average age of coming out as gay is now 13 years old, whereas a decade or so ago it was in the 20\'s. What do you think of the implications of this for families? What age were you when you came out? Why do you think you decided to come out at that specific age?',
            'Tell us something positive you have learned about life,  and / or something positive you have experienced due to being LGBTQIA+.',
            'How do you think / feel being LGBTQIA+ has impacted your relationship with yourself, in either a positive or a negative way, or both? '
        ],
        id: 15
    },
    {   
        logo: sexuality,
        title: "SEXUALITY & GENDER ROLES", 
        editor: " ",
        questions: [
            'If you feel like sharing, how do you self-identify? Is saying your pronouns to others comfortable or uncomfortable for you? Do you feel bad or uncomfortable for correcting others about your pronouns? Why or Why not?',
            'When were you first introduced to the idea of gender identity, how did you feel about it?',
            'How do you describe and relate to the concept of male / female gender Identity definitions (as ascribed by the broader, white, male hierarchical patriarchy?)',
            'How do you feel when you\'re judged because of who and what you are? Your meaning, your truths? How do you handle it?',
            'What are some confusions you have about gender identity? (Remind everyone this is a safe space to educate each other)',
            'Have traditional gender roles impacted you in any way? How do you feel about your own sexual identity? Are you comfortable with yourself? Please share to your comfort level.',
            'Would you ever date a bisexual or pansexual person? Why or why not?',
            'Do bisexual and pansexual men seem less masculine to you? Why or why not?',
            'What is masculinity? If you are a man, is it important to you to be “masculine”?',
            'What is femininity? If you are a woman, is it important to you to be “feminine”?',
            'What parts of masculinity do you think are good, and what parts do you think are toxic? Why?',
            'What parts of femininity do you think are good, and what parts do you think are toxic? Why?',
            'Do you believe men can, or should be in touch with their feminine side? Why or why not? (Vice versa for women)',
            '(Safe space reminder) How many of you have been, or are uncomfortable with homosexuality? What in particular made, or makes you uncomfortable? Please speak to your comfort level.',
            'Gender identity can correlate with a person\'s assigned sex at birth, or can differ from it. Have you ever felt that you have gender characteristics of the opposite sex? If yes, how did/ does this make you feel? What is your experience?'
        ],
        id: 16
    },
]

export default GameCatagories