import { Grade, LessonActivity } from "../types";

export interface EnglishWord {
  word: string;
  ipa: string;
  meaning: string;
}

export interface EnglishUnitData {
  unit: number;
  unitName: string;
  theme: string;
  vocabulary: EnglishWord[];
  sentencePatterns: string[];
  phonics: string;
  game: string;
}

export interface EnglishLessonDetail {
  lessonTitle: string;
  unitName: string;
  theme: string;
  vocabulary: string[]; // Formatted with IPA and meaning in English
  rawWords: string[];
  sentencePatterns: string[];
  phonicsSound: string;
  gameName: string;
  specificCompetencies: string[];
  teacherMaterials: string[];
  studentMaterials: string[];
  integrationNotes: string;
  activities: LessonActivity[];
}

// ============================================================================
// GRADE 1 ENGLISH UNITS (Phonics, Basic Words, Songs)
// ============================================================================
export const GRADE_1_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: In the School Playground",
    theme: "School Playground and Sounds",
    vocabulary: [
      { word: "book", ipa: "/bʊk/", meaning: "printed reading material" },
      { word: "bike", ipa: "/baɪk/", meaning: "two-wheeled bicycle" },
      { word: "ball", ipa: "/bɔːl/", meaning: "round toy for playing" },
      { word: "boy", ipa: "/bɔɪ/", meaning: "male child" }
    ],
    sentencePatterns: [
      "Look at the [ball / bike / book / boy].",
      "I have a [ball / bike]."
    ],
    phonics: "Phonics focus: Sound /b/ in 'book', 'bike', 'ball', 'boy'",
    game: "Catch the Ball & Say the Word"
  },
  {
    unit: 2,
    unitName: "Unit 2: In the Dining Room",
    theme: "Dining Room and Food",
    vocabulary: [
      { word: "cake", ipa: "/keɪk/", meaning: "sweet baked food" },
      { word: "car", ipa: "/kɑː/", meaning: "automobile vehicle" },
      { word: "cat", ipa: "/kæt/", meaning: "furry pet animal" },
      { word: "cup", ipa: "/kʌp/", meaning: "small drinking container" }
    ],
    sentencePatterns: [
      "There is a [cake / car / cat / cup].",
      "I like [cake / cats]."
    ],
    phonics: "Phonics focus: Sound /k/ in 'cake', 'car', 'cat', 'cup'",
    game: "Magic Cup Guessing Game"
  },
  {
    unit: 3,
    unitName: "Unit 3: At the Street Market",
    theme: "Street Market and Fruits",
    vocabulary: [
      { word: "apple", ipa: "/ˈæpl/", meaning: "crisp round red or green fruit" },
      { word: "bag", ipa: "/bæɡ/", meaning: "container used to carry things" },
      { word: "hat", ipa: "/hæt/", meaning: "head covering item" },
      { word: "cat", ipa: "/kæt/", meaning: "domestic pet feline" }
    ],
    sentencePatterns: [
      "I see an [apple / a bag / a hat].",
      "Have an [apple], please!"
    ],
    phonics: "Phonics focus: Short vowel /æ/ in 'apple', 'bag', 'hat', 'cat'",
    game: "Market Basket Relay"
  }
];

// ============================================================================
// GRADE 2 ENGLISH UNITS (Classroom, Numbers, Colors, Animals)
// ============================================================================
export const GRADE_2_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: At My Birthday Party",
    theme: "Birthday Celebrations",
    vocabulary: [
      { word: "popcorn", ipa: "/ˈpɒpkɔːn/", meaning: "puffed corn snack" },
      { word: "pizza", ipa: "/ˈpiːtsə/", meaning: "baked dough with cheese and toppings" },
      { word: "pasta", ipa: "/ˈpæstə/", meaning: "Italian noodles" },
      { word: "party", ipa: "/ˈpɑːti/", meaning: "social festive gathering" }
    ],
    sentencePatterns: [
      "I like [popcorn / pizza / pasta].",
      "Pass me the [pizza], please!"
    ],
    phonics: "Phonics focus: Sound /p/ in 'popcorn', 'pizza', 'pasta', 'party'",
    game: "Birthday Chef Relay"
  },
  {
    unit: 2,
    unitName: "Unit 2: In the Backyard",
    theme: "Backyard Nature and Animals",
    vocabulary: [
      { word: "kite", ipa: "/kaɪt/", meaning: "light frame flown in the wind" },
      { word: "kitten", ipa: "/ˈkɪtn/", meaning: "young playful cat" },
      { word: "bike", ipa: "/baɪk/", meaning: "pedal cycle" },
      { word: "bird", ipa: "/bɜːd/", meaning: "feathered flying animal" }
    ],
    sentencePatterns: [
      "He is flying a [kite].",
      "She is riding a [bike]."
    ],
    phonics: "Phonics focus: Sound /k/ in 'kite', 'kitten' and diphthong /aɪ/ in 'kite', 'bike'",
    game: "Fly the Kite Challenge"
  },
  {
    unit: 3,
    unitName: "Unit 3: At the Seaside",
    theme: "Seaside and Ocean Animals",
    vocabulary: [
      { word: "sail", ipa: "/seɪl/", meaning: "wind-catching boat cloth" },
      { word: "sand", ipa: "/sænd/", meaning: "fine beach grains" },
      { word: "sea", ipa: "/siː/", meaning: "vast saltwater ocean" },
      { word: "sun", ipa: "/sʌn/", meaning: "daytime shining star" }
    ],
    sentencePatterns: [
      "Let's look at the [sea / sail / sun / sand].",
      "I love the [seaside]."
    ],
    phonics: "Phonics focus: Sound /s/ in 'sail', 'sand', 'sea', 'sun'",
    game: "Seaside Treasure Hunt"
  }
];

// ============================================================================
// GRADE 3 ENGLISH UNITS (Global Success Grade 3 Standard)
// 10 Full Units covering 35 Weeks of Academic Year
// ============================================================================
export const GRADE_3_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: Hello",
    theme: "Greetings and Personal Introductions",
    vocabulary: [
      { word: "hello", ipa: "/həˈləʊ/", meaning: "polite formal greeting" },
      { word: "hi", ipa: "/haɪ/", meaning: "friendly informal greeting" },
      { word: "name", ipa: "/neɪm/", meaning: "personal identity word" },
      { word: "goodbye", ipa: "/ˌɡʊdˈbaɪ/", meaning: "farewell expression" },
      { word: "bye", ipa: "/baɪ/", meaning: "informal farewell expression" }
    ],
    sentencePatterns: [
      "Hello, I'm [Nam / Mai / Mary].",
      "Hi, [Nam]. I'm [Hoa]. Nice to meet you!",
      "Goodbye, [teacher]. See you again!"
    ],
    phonics: "Phonics focus: Sound /h/ in 'hello', 'hi' and sound /b/ in 'bye', 'goodbye'",
    game: "Passing the Ball: Greet & Introduce"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Names",
    theme: "Personal Names and Alphabet Spelling",
    vocabulary: [
      { word: "name", ipa: "/neɪm/", meaning: "given personal name" },
      { word: "spell", ipa: "/spel/", meaning: "read out letters of a word" },
      { word: "friend", ipa: "/frend/", meaning: "companion or classmate" },
      { word: "how", ipa: "/haʊ/", meaning: "manner or state question" },
      { word: "fine", ipa: "/faɪn/", meaning: "in good health and mood" },
      { word: "thank", ipa: "/θæŋk/", meaning: "express sincere gratitude" }
    ],
    sentencePatterns: [
      "What's your name? -> My name is [Peter / Linh].",
      "How do you spell your name? -> [L - I - N - H].",
      "How are you? -> I'm fine, thank you."
    ],
    phonics: "Phonics focus: Sound /f/ in 'fine', 'friend' and sound /θ/ in 'thank'",
    game: "Spelling Bee Challenge"
  },
  {
    unit: 3,
    unitName: "Unit 3: Our Friends",
    theme: "Introducing Friends and Classmates",
    vocabulary: [
      { word: "this", ipa: "/ðɪs/", meaning: "referring to a nearby person" },
      { word: "that", ipa: "/ðæt/", meaning: "referring to a distant person" },
      { word: "friend", ipa: "/frend/", meaning: "valued companion" },
      { word: "best friend", ipa: "/best frend/", meaning: "closest companion" },
      { word: "yes", ipa: "/jes/", meaning: "affirmative confirmation" },
      { word: "no", ipa: "/nəʊ/", meaning: "negative response" }
    ],
    sentencePatterns: [
      "This is [Tony]. He is my friend.",
      "That is [Mary]. She is my friend, too.",
      "Is that [Linda]? -> Yes, it is. / No, it isn't. It's [Lucy]."
    ],
    phonics: "Phonics focus: Voiced dental fricative /ð/ in 'this', 'that'",
    game: "Friend Introduction Relay"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Bodies",
    theme: "Parts of the Body and Movement",
    vocabulary: [
      { word: "eye", ipa: "/aɪ/", meaning: "organ of sight" },
      { word: "ear", ipa: "/ɪə/", meaning: "organ of hearing" },
      { word: "nose", ipa: "/nəʊz/", meaning: "organ of smell" },
      { word: "mouth", ipa: "/maʊθ/", meaning: "organ of speech and eating" },
      { word: "hand", ipa: "/hænd/", meaning: "end part of the arm" },
      { word: "face", ipa: "/feɪs/", meaning: "front of the head" }
    ],
    sentencePatterns: [
      "Touch your [eyes / ears / nose / face]!",
      "Open your [mouth]! / Wash your [hands]!"
    ],
    phonics: "Phonics focus: Sound /eɪ/ in 'face' and sound /aɪ/ in 'eye'",
    game: "Simon Says: Touch Your Face!"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Hobbies",
    theme: "Personal Leisure Hobbies",
    vocabulary: [
      { word: "singing", ipa: "/ˈsɪŋɪŋ/", meaning: "performing vocal music" },
      { word: "dancing", ipa: "/ˈdɑːnsɪŋ/", meaning: "rhythmic body movement" },
      { word: "drawing", ipa: "/ˈdrɔːɪŋ/", meaning: "making art with pencils" },
      { word: "swimming", ipa: "/ˈswɪmɪŋ/", meaning: "moving through water" },
      { word: "cooking", ipa: "/ˈkʊkɪŋ/", meaning: "preparing hot meals" },
      { word: "reading", ipa: "/ˈriːdɪŋ/", meaning: "interpreting written words" }
    ],
    sentencePatterns: [
      "What's your hobby? -> It's [singing / drawing / swimming].",
      "I like [dancing / cooking / reading books]."
    ],
    phonics: "Phonics focus: Velar nasal ending /-ɪŋ/ in 'singing', 'drawing', 'swimming'",
    game: "Hobby Charades: Guess the Action"
  },
  {
    unit: 6,
    unitName: "Unit 6: Our School",
    theme: "Primary School Facilities and Rooms",
    vocabulary: [
      { word: "classroom", ipa: "/ˈklɑːsruːm/", meaning: "room where lessons are taught" },
      { word: "library", ipa: "/ˈlaɪbrəri/", meaning: "room containing collection of books" },
      { word: "computer room", ipa: "/kəmˈpjuːtə ruːm/", meaning: "technology learning laboratory" },
      { word: "art room", ipa: "/ɑːt ruːm/", meaning: "creative drawing room" },
      { word: "music room", ipa: "/ˈmjuːzɪk ruːm/", meaning: "room for singing and instruments" },
      { word: "playground", ipa: "/ˈpleɪɡraʊnd/", meaning: "outdoor area for recreation" }
    ],
    sentencePatterns: [
      "Is this our [library / classroom]? -> Yes, it is. / No, it isn't.",
      "Let's go to the [computer room / playground]!"
    ],
    phonics: "Phonics focus: Consonant cluster /kl/ in 'classroom' and lateral /l/ in 'library'",
    game: "School Tour Guide: Find the Room"
  },
  {
    unit: 7,
    unitName: "Unit 7: Classroom Instructions",
    theme: "Teacher Commands and Requests",
    vocabulary: [
      { word: "open", ipa: "/ˈəʊpən/", meaning: "uncover or fold back" },
      { word: "close", ipa: "/kləʊz/", meaning: "shut tight" },
      { word: "stand up", ipa: "/stænd ʌp/", meaning: "rise to one's feet" },
      { word: "sit down", ipa: "/sɪt daʊn/", meaning: "take a seat" },
      { word: "ask", ipa: "/ɑːsk/", meaning: "put a question" },
      { word: "question", ipa: "/ˈkwestʃən/", meaning: "inquiry seeking an answer" }
    ],
    sentencePatterns: [
      "Open your [book], please! / Close your [book], please!",
      "May I [come in / go out / ask a question]? -> Yes, you may. / No, you can't."
    ],
    phonics: "Phonics focus: Sound /st/ in 'stand up' and consonant cluster /kl/ in 'close'",
    game: "Follow the Teacher: Classroom Action"
  },
  {
    unit: 8,
    unitName: "Unit 8: My School Things",
    theme: "School Stationery Supplies",
    vocabulary: [
      { word: "school bag", ipa: "/skuːl bæɡ/", meaning: "backpack for carrying books" },
      { word: "pencil case", ipa: "/ˈpensl keɪs/", meaning: "container for writing tools" },
      { word: "notebook", ipa: "/ˈnəʊtbʊk/", meaning: "blank book for class notes" },
      { word: "pencil sharpener", ipa: "/ˈpensl ʃɑːpnə/", meaning: "device for sharpening pencils" },
      { word: "ruler", ipa: "/ˈruːlə/", meaning: "straight measuring strip" },
      { word: "rubber", ipa: "/ˈrʌbə/", meaning: "eraser for pencil marks" }
    ],
    sentencePatterns: [
      "I have a [school bag / pencil case / notebook].",
      "Do you have a [ruler / rubber]? -> Yes, I do. / No, I don't."
    ],
    phonics: "Phonics focus: Plosive /p/ in 'pencil', 'pencil case' and liquid /r/ in 'ruler', 'rubber'",
    game: "What's in My School Bag?"
  },
  {
    unit: 9,
    unitName: "Unit 9: Colours",
    theme: "Primary and Secondary Colours",
    vocabulary: [
      { word: "red", ipa: "/red/", meaning: "bright crimson colour" },
      { word: "blue", ipa: "/bluː/", meaning: "colour of the clear sky" },
      { word: "yellow", ipa: "/ˈjeləʊ/", meaning: "colour of ripe lemons" },
      { word: "green", ipa: "/ɡriːn/", meaning: "colour of living grass" },
      { word: "orange", ipa: "/ˈɒrɪndʒ/", meaning: "colour between red and yellow" },
      { word: "purple", ipa: "/ˈpɜːpl/", meaning: "colour between red and blue" }
    ],
    sentencePatterns: [
      "What colour is it? -> It's [red / blue / yellow].",
      "What colour are they? -> They're [green / orange / purple]."
    ],
    phonics: "Phonics focus: Consonant cluster /bl/ in 'blue' and /ɡr/ in 'green'",
    game: "Rainbow Color Flyswatter"
  },
  {
    unit: 10,
    unitName: "Unit 10: Break Time Activities",
    theme: "Recess Games and Activities",
    vocabulary: [
      { word: "football", ipa: "/ˈfʊtbɔːl/", meaning: "kicking ball game" },
      { word: "badminton", ipa: "/ˈbædmɪntən/", meaning: "racket and shuttlecock game" },
      { word: "chess", ipa: "/tʃes/", meaning: "board game of strategic skill" },
      { word: "basketball", ipa: "/ˈbɑːskɪtbɔːl/", meaning: "hoop scoring ball game" },
      { word: "table tennis", ipa: "/ˈteɪbl tenɪs/", meaning: "ping-pong paddle sport" }
    ],
    sentencePatterns: [
      "What do you do at break time? -> I play [football / chess / badminton].",
      "Let's play [basketball / table tennis] together!"
    ],
    phonics: "Phonics focus: Affricate /tʃ/ in 'chess' and plosive /b/ in 'badminton', 'basketball'",
    game: "Recess Activity Pantomime"
  }
];

// ============================================================================
// GRADE 4 ENGLISH UNITS (Global Success Grade 4 Standard)
// 10 Full Units covering 35 Weeks of Academic Year
// ============================================================================
export const GRADE_4_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: My Friends",
    theme: "Countries and Nationalities",
    vocabulary: [
      { word: "America", ipa: "/əˈmerɪkə/", meaning: "United States country" },
      { word: "American", ipa: "/əˈmerɪkən/", meaning: "citizen of America" },
      { word: "Britain", ipa: "/ˈbrɪtn/", meaning: "United Kingdom country" },
      { word: "British", ipa: "/ˈbrɪtɪʃ/", meaning: "citizen of Britain" },
      { word: "Japan", ipa: "/dʒəˈpæn/", meaning: "Asian island country" },
      { word: "Japanese", ipa: "/ˌdʒæpəˈniːz/", meaning: "citizen of Japan" },
      { word: "Vietnam", ipa: "/ˌvjetˈnæm/", meaning: "Southeast Asian nation" },
      { word: "Vietnamese", ipa: "/ˌvjetnəˈmiːz/", meaning: "citizen of Vietnam" }
    ],
    sentencePatterns: [
      "Where are you from? -> I'm from [Vietnam / America / Japan / Britain].",
      "What nationality are you? -> I'm [Vietnamese / American / Japanese / British]."
    ],
    phonics: "Phonics focus: Word stress shift in Ja'pan -> Japa'nese; 'Vietnam -> Vietna'mese",
    game: "World Flag & Country Match"
  },
  {
    unit: 2,
    unitName: "Unit 2: Time and Daily Routines",
    theme: "Clock Time and Daily Routines",
    vocabulary: [
      { word: "o'clock", ipa: "/əˈklɒk/", meaning: "precise hour of the clock" },
      { word: "get up", ipa: "/ɡet ʌp/", meaning: "rise from bed after sleeping" },
      { word: "have breakfast", ipa: "/hæv ˈbrekfəst/", meaning: "eat the morning meal" },
      { word: "go to school", ipa: "/ɡəʊ tə skuːl/", meaning: "depart for classroom lessons" },
      { word: "have lunch", ipa: "/hæv lʌntʃ/", meaning: "eat the midday meal" },
      { word: "go to bed", ipa: "/ɡəʊ tə bed/", meaning: "retire for nighttime sleep" }
    ],
    sentencePatterns: [
      "What time is it? -> It's [seven o'clock / seven thirty].",
      "What time do you [get up / have breakfast / go to school]? -> I [get up] at [six o'clock]."
    ],
    phonics: "Phonics focus: Connected speech and linking sounds: get_up (/ɡet ʌp/), have_breakfast",
    game: "Clock Master Relay: Set the Clock Hands"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Week",
    theme: "Days of the Week and Weekly Plans",
    vocabulary: [
      { word: "Monday", ipa: "/ˈmʌndeɪ/", meaning: "first weekday" },
      { word: "Tuesday", ipa: "/ˈtjuːzdeɪ/", meaning: "second weekday" },
      { word: "Wednesday", ipa: "/ˈwenzdeɪ/", meaning: "third weekday" },
      { word: "Thursday", ipa: "/ˈθɜːzdeɪ/", meaning: "fourth weekday" },
      { word: "Friday", ipa: "/ˈfraɪdeɪ/", meaning: "fifth weekday" },
      { word: "Saturday", ipa: "/ˈsætədeɪ/", meaning: "first weekend day" },
      { word: "Sunday", ipa: "/ˈsʌndeɪ/", meaning: "second weekend day" }
    ],
    sentencePatterns: [
      "What day is it today? -> It's [Monday / Tuesday / Friday].",
      "What do you do on [Saturdays / Sundays]? -> I [help my parents / play football / go swimming]."
    ],
    phonics: "Phonics focus: Ending suffix /-deɪ/ and voiceless dental /θ/ in 'Thursday'",
    game: "Weekly Planner Bingo"
  },
  {
    unit: 4,
    unitName: "Unit 4: My Birthday Party",
    theme: "Birthdays and Calendar Months",
    vocabulary: [
      { word: "January", ipa: "/ˈdʒænjuəri/", meaning: "first month of the year" },
      { word: "February", ipa: "/ˈfebruəri/", meaning: "second month of the year" },
      { word: "March", ipa: "/mɑːtʃ/", meaning: "third month of the year" },
      { word: "April", ipa: "/ˈeɪprəl/", meaning: "fourth month of the year" },
      { word: "May", ipa: "/meɪ/", meaning: "fifth month of the year" },
      { word: "June", ipa: "/dʒuːn/", meaning: "sixth month of the year" },
      { word: "party", ipa: "/ˈpɑːti/", meaning: "birthday celebration" }
    ],
    sentencePatterns: [
      "When is your birthday? -> It's in [May / June / October].",
      "Would you like to come to my birthday party? -> Yes, I'd love to."
    ],
    phonics: "Phonics focus: Voiced palato-alveolar affricate /dʒ/ in 'January', 'June', 'July'",
    game: "Birthday Month Line-up Relay"
  },
  {
    unit: 5,
    unitName: "Unit 5: Things We Can Do",
    theme: "Abilities, Talents and Action Verbs",
    vocabulary: [
      { word: "swim", ipa: "/swɪm/", meaning: "glide through water" },
      { word: "skate", ipa: "/skeɪt/", meaning: "glide on wheels or ice" },
      { word: "cook", ipa: "/kʊk/", meaning: "prepare delicious food" },
      { word: "ride a bike", ipa: "/raɪd ə baɪk/", meaning: "pedal a two-wheeler" },
      { word: "play the guitar", ipa: "/pleɪ ðə ɡɪˈtɑː/", meaning: "strum musical string instrument" },
      { word: "play the piano", ipa: "/pleɪ ðə piˈænəʊ/", meaning: "perform on musical keyboard" }
    ],
    sentencePatterns: [
      "What can you do? -> I can [swim / cook / play the guitar].",
      "Can you [ride a bike / skate]? -> Yes, I can. / No, I can't."
    ],
    phonics: "Phonics focus: Strong and weak forms of modal verb: /kæn/ (affirmative) and /kɑːnt/ (negative)",
    game: "Talent Show Interview"
  },
  {
    unit: 6,
    unitName: "Unit 6: Our School Rooms",
    theme: "Locations and Buildings in School",
    vocabulary: [
      { word: "science lab", ipa: "/ˈsaɪəns læb/", meaning: "room for scientific experiments" },
      { word: "canteen", ipa: "/kænˈtiːn/", meaning: "school cafeteria dining room" },
      { word: "gym", ipa: "/dʒɪm/", meaning: "indoor athletic sports hall" },
      { word: "hall", ipa: "/hɔːl/", meaning: "large assembly room" },
      { word: "upstairs", ipa: "/ˌʌpˈsteəz/", meaning: "on or to an upper floor" },
      { word: "downstairs", ipa: "/ˌdaʊnˈsteəz/", meaning: "on or to a ground floor" }
    ],
    sentencePatterns: [
      "Where is the [canteen / gym / library]? -> It's [upstairs / downstairs].",
      "Is there a [science lab] in your school? -> Yes, there is. / No, there isn't."
    ],
    phonics: "Phonics focus: Diphthong /eə/ in 'upstairs', 'downstairs'",
    game: "School Map Navigator"
  },
  {
    unit: 7,
    unitName: "Unit 7: Our Timetables",
    theme: "School Subjects and Weekly Timetables",
    vocabulary: [
      { word: "Maths", ipa: "/mæθs/", meaning: "arithmetic and number studies" },
      { word: "Vietnamese", ipa: "/ˌvjetnəˈmiːz/", meaning: "national language studies" },
      { word: "English", ipa: "/ˈɪŋɡlɪʃ/", meaning: "global foreign language" },
      { word: "Science", ipa: "/ˈsaɪəns/", meaning: "natural scientific studies" },
      { word: "History", ipa: "/ˈhɪstəri/", meaning: "studies of past human events" },
      { word: "Geography", ipa: "/dʒiˈɒɡrəfi/", meaning: "study of places and lands" }
    ],
    sentencePatterns: [
      "What subjects do you have today? -> I have [Maths, English and Science].",
      "When do you have [Vietnamese]? -> I have it on [Mondays and Wednesdays]."
    ],
    phonics: "Phonics focus: Voiceless dental fricative /θ/ in 'Maths' and velar nasal /ŋ/ in 'English'",
    game: "Timetable Detective"
  },
  {
    unit: 8,
    unitName: "Unit 8: My Favourite Subjects",
    theme: "Preferences and Reasons for Learning",
    vocabulary: [
      { word: "favourite", ipa: "/ˈfeɪvərɪt/", meaning: "preferred above all others" },
      { word: "because", ipa: "/bɪˈkɒz/", meaning: "for the reason that" },
      { word: "interesting", ipa: "/ˈɪntrəstɪŋ/", meaning: "engaging curiosity and attention" },
      { word: "exciting", ipa: "/ɪkˈsaɪtɪŋ/", meaning: "causing lively enthusiasm" },
      { word: "important", ipa: "/ɪmˈpɔːtnt/", meaning: "of great significance" }
    ],
    sentencePatterns: [
      "What's your favourite subject? -> It's [English / Maths / Music].",
      "Why do you like [English]? -> Because I want to [sing English songs / talk to foreign friends]."
    ],
    phonics: "Phonics focus: Word stress in multi-syllable adjectives: 'favourite, 'interesting, ex'citing",
    game: "Classroom Subject Survey"
  },
  {
    unit: 9,
    unitName: "Unit 9: Our Sports Day",
    theme: "Sporting Competitions and Events",
    vocabulary: [
      { word: "sports day", ipa: "/spɔːts deɪ/", meaning: "annual school athletic meet" },
      { word: "running", ipa: "/ˈrʌnɪŋ/", meaning: "racing on foot swiftly" },
      { word: "jumping", ipa: "/ˈdʒʌmpɪŋ/", meaning: "leaping into the air" },
      { word: "tug of war", ipa: "/tʌɡ əv wɔː/", meaning: "rope-pulling team contest" },
      { word: "gold medal", ipa: "/ɡəʊld ˈmedl/", meaning: "first prize award medal" }
    ],
    sentencePatterns: [
      "When is your Sports Day? -> It's on [Saturday / in November].",
      "What are you going to do on Sports Day? -> I'm going to [run in the race / take part in tug of war]."
    ],
    phonics: "Phonics focus: Sound /sp/ in 'sports', 'sports day'",
    game: "Sports Day Champions"
  },
  {
    unit: 10,
    unitName: "Unit 10: Where Were You Yesterday?",
    theme: "Past Events, Locations and Memories",
    vocabulary: [
      { word: "yesterday", ipa: "/ˈjestədeɪ/", meaning: "on the day before today" },
      { word: "at home", ipa: "/æt həʊm/", meaning: "inside one's dwelling" },
      { word: "at school", ipa: "/æt skuːl/", meaning: "present at the campus" },
      { word: "at the zoo", ipa: "/æt ðə zuː/", meaning: "visiting animal park" },
      { word: "on the beach", ipa: "/ɒn ðə biːtʃ/", meaning: "beside the seaside shore" }
    ],
    sentencePatterns: [
      "Where were you yesterday? -> I was [at home / at school / at the zoo].",
      "What did you do yesterday? -> I [played football / watered the flowers / watched TV]."
    ],
    phonics: "Phonics focus: Past tense verb endings /-d/, /-t/, /-ɪd/ in 'played', 'watched', 'watered'",
    game: "Time Machine Detective"
  }
];

// ============================================================================
// GRADE 5 ENGLISH UNITS (Global Success Grade 5 Standard)
// 10 Full Units covering 35 Weeks of Academic Year
// ============================================================================
export const GRADE_5_ENGLISH_UNITS: EnglishUnitData[] = [
  {
    unit: 1,
    unitName: "Unit 1: All About Me",
    theme: "Personal Address, Hometown and Origins",
    vocabulary: [
      { word: "address", ipa: "/əˈdres/", meaning: "location number and street of a home" },
      { word: "lane", ipa: "/leɪn/", meaning: "narrow passage or alley" },
      { word: "street", ipa: "/striːt/", meaning: "paved public road in a city" },
      { word: "tower", ipa: "/ˈtaʊə/", meaning: "tall residential apartment block" },
      { word: "floor", ipa: "/flɔː/", meaning: "level of a multi-storey building" },
      { word: "hometown", ipa: "/ˈhəʊmtaʊn/", meaning: "town where one was born and raised" },
      { word: "peaceful", ipa: "/ˈpiːsfl/", meaning: "calm, quiet and tranquil" },
      { word: "crowded", ipa: "/ˈkraʊdɪd/", meaning: "full of lively people and traffic" }
    ],
    sentencePatterns: [
      "What's your address? -> It's [81 Tran Hung Dao Street / Flat 8, Second Floor].",
      "What's the [city / village] like? -> It's [big and crowded / small and quiet]."
    ],
    phonics: "Phonics focus: Consonant cluster /str/ in 'street' and /fl/ in 'floor'",
    game: "Postman Delivery Challenge"
  },
  {
    unit: 2,
    unitName: "Unit 2: Our Homes",
    theme: "Living Quarters, Dwellings and Co-habitants",
    vocabulary: [
      { word: "flat", ipa: "/flæt/", meaning: "apartment suite on one floor" },
      { word: "cottage", ipa: "/ˈkɒtɪdʒ/", meaning: "cozy small countryside house" },
      { word: "mountain", ipa: "/ˈmaʊntən/", meaning: "elevated rocky landscape" },
      { word: "village", ipa: "/ˈvɪlɪdʒ/", meaning: "small rural community" },
      { word: "city", ipa: "/ˈsɪti/", meaning: "large major urban center" },
      { word: "modern", ipa: "/ˈmɒdn/", meaning: "equipped with contemporary amenities" }
    ],
    sentencePatterns: [
      "Where do you live? -> I live in a [flat in the city / cottage in the village].",
      "Who do you live with? -> I live with my [parents / grandparents / family]."
    ],
    phonics: "Phonics focus: Suffix pronunciation /-ɪdʒ/ in 'village', 'cottage'",
    game: "Dream House Architecture Designer"
  },
  {
    unit: 3,
    unitName: "Unit 3: My Foreign Friends",
    theme: "International Friends and Personality Traits",
    vocabulary: [
      { word: "friendly", ipa: "/ˈfrendli/", meaning: "kind, pleasant and welcoming" },
      { word: "helpful", ipa: "/ˈhelpfl/", meaning: "ready to assist other people" },
      { word: "active", ipa: "/ˈæktɪv/", meaning: "energetic and full of movement" },
      { word: "kind", ipa: "/kaɪnd/", meaning: "caring and benevolent" },
      { word: "clever", ipa: "/ˈklevə/", meaning: "quick at learning and smart" },
      { word: "generous", ipa: "/ˈdʒenərəs/", meaning: "willing to share and give freely" }
    ],
    sentencePatterns: [
      "What is he/she like? -> He/She is very [friendly and helpful / kind and clever].",
      "They are always [active and polite in class]."
    ],
    phonics: "Phonics focus: Adjective suffixes /-li/ ('friendly') and /-fl/ ('helpful')",
    game: "Personality Matching & Guess Who"
  },
  {
    unit: 4,
    unitName: "Unit 4: Our Free-Time Activities",
    theme: "Leisure Pastimes and Frequency Adverbs",
    vocabulary: [
      { word: "surf the Internet", ipa: "/sɜːf ði ˈɪntənet/", meaning: "browse online websites" },
      { word: "do karate", ipa: "/duː kəˈrɑːti/", meaning: "practice martial art defense" },
      { word: "clean the house", ipa: "/kliːn ðə haʊs/", meaning: "tidy and wash home rooms" },
      { word: "go fishing", ipa: "/ɡəʊ ˈfɪʃɪŋ/", meaning: "catch river or sea fish" },
      { word: "ride a bicycle", ipa: "/raɪd ə ˈbaɪsɪkl/", meaning: "cycle along country roads" }
    ],
    sentencePatterns: [
      "What do you do in your free time? -> I often [surf the Internet / ride a bicycle / clean the house].",
      "How often do you [go fishing]? -> Once a week / Twice a month / Every day."
    ],
    phonics: "Phonics focus: Wh-question intonation patterns and frequency adverbs stress",
    game: "Free-Time Lifestyle Survey"
  },
  {
    unit: 5,
    unitName: "Unit 5: My Future Job",
    theme: "Dream Careers, Professions and Ambitions",
    vocabulary: [
      { word: "pilot", ipa: "/ˈpaɪlət/", meaning: "licensed aircraft captain" },
      { word: "architect", ipa: "/ˈɑːkɪtekt/", meaning: "designer of buildings and homes" },
      { word: "writer", ipa: "/ˈraɪtə/", meaning: "author of books and stories" },
      { word: "doctor", ipa: "/ˈdɒktə/", meaning: "medical healer of patients" },
      { word: "nurse", ipa: "/nɜːs/", meaning: "healthcare caregiver" },
      { word: "engineer", ipa: "/ˌendʒɪˈnɪə/", meaning: "builder of technical systems" },
      { word: "astronaut", ipa: "/ˈæstrənɔːt/", meaning: "space exploration traveler" }
    ],
    sentencePatterns: [
      "What would you like to be in the future? -> I'd like to be a/an [pilot / architect / doctor / astronaut].",
      "Why would you like to be a [pilot]? -> Because I'd like to [fly planes and travel around the world]."
    ],
    phonics: "Phonics focus: Sound /k/ in 'architect' (/ˈɑːkɪtekt/) and smooth linking 'like to be a'",
    game: "Future Career Fair Exhibition"
  },
  {
    unit: 6,
    unitName: "Unit 6: Our School Festival",
    theme: "School Cultural Festivals and Festivities",
    vocabulary: [
      { word: "school festival", ipa: "/skuːl ˈfestɪvl/", meaning: "annual school cultural gala" },
      { word: "singing contest", ipa: "/ˈsɪŋɪŋ ˈkɒntest/", meaning: "vocal performance competition" },
      { word: "puppet show", ipa: "/ˈpʌpɪt ʃəʊ/", meaning: "theatrical doll performance" },
      { word: "book fair", ipa: "/bʊk feə/", meaning: "literary exhibition of books" },
      { word: "costume show", ipa: "/ˈkɒstjuːm ʃəʊ/", meaning: "fashion exhibition of themed outfits" }
    ],
    sentencePatterns: [
      "What did you do at the school festival? -> We [joined the singing contest / watched the puppet show].",
      "Did you enjoy the festival? -> Yes, we had a lot of fun!"
    ],
    phonics: "Phonics focus: Stress on compound nouns: 'book fair, 'puppet show, 'costume show",
    game: "Festival Reporter Interview"
  },
  {
    unit: 7,
    unitName: "Unit 7: Our Favourite Sports",
    theme: "Athletic Sports and Healthy Fitness",
    vocabulary: [
      { word: "volleyball", ipa: "/ˈvɒlibɔːl/", meaning: "net ball team sport" },
      { word: "swimming", ipa: "/ˈswɪmɪŋ/", meaning: "water racing activity" },
      { word: "skipping", ipa: "/ˈskɪpɪŋ/", meaning: "jumping rope exercise" },
      { word: "aerobics", ipa: "/eəˈrəʊbɪks/", meaning: "rhythmic fitness exercise" },
      { word: "championship", ipa: "/ˈtʃæmpiənʃɪp/", meaning: "first-place sporting title" }
    ],
    sentencePatterns: [
      "Which sport do you like best? -> I like [volleyball / swimming] best.",
      "How often do you practice? -> I practice [three times a week]."
    ],
    phonics: "Phonics focus: Initial consonant blends /sk/ in 'skipping' and /sw/ in 'swimming'",
    game: "Olympic Sports Quiz Contest"
  },
  {
    unit: 8,
    unitName: "Unit 8: What Are You Doing?",
    theme: "Present Continuous Ongoing Activities",
    vocabulary: [
      { word: "reading comic books", ipa: "/ˈriːdɪŋ ˈkɒmɪk bʊks/", meaning: "enjoying illustrated graphic stories" },
      { word: "painting a picture", ipa: "/ˈpeɪntɪŋ ə ˈpɪktʃə/", meaning: "coloring artwork with paint" },
      { word: "making paper planes", ipa: "/ˈmeɪkɪŋ ˈpeɪpə pleɪnz/", meaning: "folding origami aircraft" },
      { word: "playing chess", ipa: "/ˈpleɪɪŋ tʃes/", meaning: "competing on board squares" },
      { word: "practicing speaking", ipa: "/ˈpræktɪsɪŋ ˈspiːkɪŋ/", meaning: "rehearsing language dialogues" }
    ],
    sentencePatterns: [
      "What are you doing? -> I am [painting a picture / reading a comic book].",
      "What is he/she doing? -> He/She is [making paper planes / playing chess]."
    ],
    phonics: "Phonics focus: Pronunciation of the inflectional suffix /-ɪŋ/ in present participles",
    game: "Freeze Frame Pantomime"
  },
  {
    unit: 9,
    unitName: "Unit 9: Our Holiday Trips",
    theme: "Vacations, Historical Landscapes and Travel",
    vocabulary: [
      { word: "Ha Long Bay", ipa: "/ˌhɑː ˈlɒŋ beɪ/", meaning: "UNESCO world heritage sea bay" },
      { word: "Hoi An Ancient Town", ipa: "/ˌhɔɪ ˈæn ˈeɪnʃənt taʊn/", meaning: "historic preserved lantern town" },
      { word: "Phu Quoc Island", ipa: "/ˌfuː ˈkwɒk ˈaɪlənd/", meaning: "tropical resort paradise island" },
      { word: "underground train", ipa: "/ˈʌndəɡraʊnd treɪn/", meaning: "subway metro transit" },
      { word: "seaside resort", ipa: "/ˈsiːsaɪd rɪˈzɔːt/", meaning: "beach vacation hotel" }
    ],
    sentencePatterns: [
      "Where did you go on holiday? -> I went to [Ha Long Bay / Hoi An Ancient Town / Phu Quoc Island].",
      "How did you get there? -> I went by [coach / plane / train / boat]."
    ],
    phonics: "Phonics focus: Past simple irregular verbs: go -> went; take -> took; have -> had",
    game: "Travel Agent Vacation Planner"
  },
  {
    unit: 10,
    unitName: "Unit 10: What's the Weather Like?",
    theme: "Weather Conditions and Annual Seasons",
    vocabulary: [
      { word: "sunny", ipa: "/ˈsʌni/", meaning: "filled with bright sunshine" },
      { word: "rainy", ipa: "/ˈreɪni/", meaning: "wet with falling rain" },
      { word: "windy", ipa: "/ˈwɪndi/", meaning: "stirred by strong breezes" },
      { word: "cloudy", ipa: "/ˈklaʊdi/", meaning: "overcast with grey clouds" },
      { word: "stormy", ipa: "/ˈstɔːmi/", meaning: "turbulent with heavy lightning" },
      { word: "forecast", ipa: "/ˈfɔːkɑːst/", meaning: "future weather prediction" }
    ],
    sentencePatterns: [
      "What will the weather be like tomorrow? -> It will be [sunny and warm / cold and windy].",
      "What is your favourite season? -> I like [autumn / spring / summer / winter]."
    ],
    phonics: "Phonics focus: Adjective forming suffix /-i/ in 'sunny', 'rainy', 'windy', 'cloudy'",
    game: "Live TV Weather Presenter"
  }
];

// Master Database by Grade
const GRADE_ENGLISH_MAP: Record<number, EnglishUnitData[]> = {
  1: GRADE_1_ENGLISH_UNITS,
  2: GRADE_2_ENGLISH_UNITS,
  3: GRADE_3_ENGLISH_UNITS,
  4: GRADE_4_ENGLISH_UNITS,
  5: GRADE_5_ENGLISH_UNITS
};

/**
 * Returns complete, professional English Lesson Plan details strictly in the ENGLISH language,
 * synchronized across Grades 3, 4, 5 (and Grades 1 & 2).
 * Formats 4 distinct lessons per unit corresponding to periods 1 to 4 in each teaching week.
 */
export function getDetailedEnglishLesson(
  grade: Grade,
  week: number,
  customLessonTitle?: string,
  periodInWeek: number = 1
): EnglishLessonDetail {
  const units = GRADE_ENGLISH_MAP[grade] || GRADE_3_ENGLISH_UNITS;

  // Try matching unit by title if provided
  let matchedUnit: EnglishUnitData | undefined;
  if (customLessonTitle) {
    const titleLower = customLessonTitle.toLowerCase();
    matchedUnit = units.find(
      (u) =>
        titleLower.includes(u.theme.toLowerCase()) ||
        titleLower.includes(u.unitName.toLowerCase().split(":")[1]?.trim()?.toLowerCase() || "___") ||
        u.vocabulary.some((v) => titleLower.includes(v.word.toLowerCase()))
    );
  }

  if (!matchedUnit) {
    // Select unit based on week cycling
    // For Week 3: (3 - 1) = 2 -> Unit 2 (index 1) for standard MOET pacing
    const unitIndex = Math.min(units.length - 1, Math.max(0, (week - 1) % units.length));
    matchedUnit = units[unitIndex];
  }

  // Determine period within the week (1 -> 4 for primary school standard 4 periods/week)
  const pIndex = Math.max(1, Math.min(4, ((periodInWeek - 1) % 4) + 1));

  // Determine Lesson Focus and Title based on pIndex
  let lessonSubtitle = "Lesson 1: Target Vocabulary & Sentence Patterns";
  let lessonFocusDescription = "Introducing core vocabulary and communicative sentence patterns.";
  if (pIndex === 2) {
    lessonSubtitle = "Lesson 2: Listening & Speaking Practice";
    lessonFocusDescription = "Developing listening comprehension and communicative dialogue fluency in pairs.";
  } else if (pIndex === 3) {
    lessonSubtitle = "Lesson 3: Phonics, Reading & Writing";
    lessonFocusDescription = "Mastering phonics articulation, word stress, guided reading, and notebook writing.";
  } else if (pIndex === 4) {
    lessonSubtitle = "Lesson 4: Communication Game & Project Production";
    lessonFocusDescription = "Consolidating language skills through interactive games and creative speaking projects.";
  }

  const lessonTitle = customLessonTitle || `${matchedUnit.unitName} - ${lessonSubtitle}`;

  // Formatted vocabulary strings with word, IPA transcription, and English contextual meaning
  const formattedVocab = matchedUnit.vocabulary.map(
    (v) => `${v.word} (${v.ipa} - ${v.meaning})`
  );
  const rawWords = matchedUnit.vocabulary.map((v) => v.word);
  const rawWordsList = rawWords.join(", ");
  const patternsList = matchedUnit.sentencePatterns.join(" | ");

  // Competencies following MOET GDPT 2018 in 100% professional English
  const specificCompetencies = [
    `By the end of the lesson, students will be able to correctly identify, pronounce, and understand target vocabulary related to '${matchedUnit.theme}': ${rawWordsList}.`,
    `Confidently use target sentence patterns in authentic communicative dialogues: ${matchedUnit.sentencePatterns[0]}`,
    `Develop integrated English language skills (Listening, Speaking, Reading, Writing) appropriate for Grade ${grade} primary learners.`,
    `Master phonetic sounds (${matchedUnit.phonics}), word stress, and correct final ending sounds with native-like accuracy.`
  ];

  const teacherMaterials = [
    `Teacher's Guide and Lesson Plan for Grade ${grade} English following official MOET standards.`,
    `Set of high-definition digital and physical flashcards for target vocabulary: ${rawWordsList}.`,
    `Authentic native audio recordings, interactive multimedia slides (PowerPoint/Canva), and visual charts for '${matchedUnit.theme}'.`,
    `Interactive flat panel / Smart TV, projector, external audio speaker, board magnets, and word strip cards.`
  ];

  const studentMaterials = [
    `Grade ${grade} English Student's Book, workbook, vocabulary notebook, pens, pencils, and colored markers.`,
    `Individual mini word cards and character role-play badges for interactive pair-work and team games.`
  ];

  const integrationNotes = `Digital Competence: Utilize digital flashcards, interactive multimedia slides, and authentic native audio tracks | AI Competence: Introduce voice-recognition pronunciation modeling and virtual language prompts | Play-based Learning: Reinforce language through the interactive game '${matchedUnit.game}'.`;

  // ==========================================================================
  // 4 PEDAGOGICAL ACTIVITIES (CV 2345/BGDĐT STANDARD) - 100% IN ENGLISH
  // Tailored to the specific period in the week (pIndex: 1, 2, 3, 4)
  // ==========================================================================

  let act1Teacher = "";
  let act1Student = "";
  let act2Teacher = "";
  let act2Student = "";
  let act3Teacher = "";
  let act3Student = "";
  let act4Teacher = "";
  let act4Student = "";

  if (pIndex === 1) {
    // ------------------------------------------------------------------------
    // PERIOD 1: VOCABULARY & SENTENCE PATTERNS
    // ------------------------------------------------------------------------
    act1Teacher = `- Warm-up & Rapport Building:
  * Greet the class warmly: "Good morning/afternoon, class! How is everyone feeling today?"
  * Conduct a cheerful greeting chant or topic song related to '${matchedUnit.theme}'.
- Lead-in:
  * Present a mystery picture or realia box on the teacher's desk.
  * Ask stimulating questions: "Look at the screen! What can you see? Today we are going to explore wonderful new words about '${matchedUnit.theme}'!"
  * Write the lesson title '${lessonTitle}' clearly on the board.`;

    act1Student = `- Whole class stands up, greets the teacher happily, and sings the warm-up chant with rhythmic hand gestures.
- Observe the mystery picture and clues attentively; guess the topic enthusiastically.
- Read aloud the lesson title chorally and open the Student's Book to the unit page.`;

    act2Teacher = `- PRESENTATION OF TARGET VOCABULARY:
  * Target Words for This Lesson:
${matchedUnit.vocabulary.map((v, i) => `    ${i + 1}. ${v.word} (${v.ipa}) - Definition: ${v.meaning} [${matchedUnit.phonics}]`).join("\n")}
  * Step-by-Step Vocabulary Teaching Procedure:
    + Step 1 (Visual Elicitation): Hold up flashcards or display clear digital slides one by one. Elicit words from students using gestures.
    + Step 2 (Native Modeling): Pronounce each word 3 times clearly with natural intonation and distinct ending sounds. Play native audio tracks.
    + Step 3 (Articulation Coaching): Guide mouth shape, tongue placement, and airflow for challenging sounds: ${matchedUnit.phonics}.
    + Step 4 (Concept Checking Questions - CCQs): Ask quick checking questions to verify 100% student comprehension of meanings and context.
    + Step 5 (Multi-Tiered Drilling): Direct whole-class choral repetition, group drilling (row by row), and individual checks; correct errors immediately.

- PRESENTATION OF SENTENCE PATTERNS:
  * Core Sentence Structures:
${matchedUnit.sentencePatterns.map((p) => `    • ${p}`).join("\n")}
  * Model the sample dialogue naturally with a student volunteer.
  * Highlight the sentence pattern on the board, demonstrating substitution of learned target vocabulary.`;

    act2Student = `- VOCABULARY LEARNING & DRILLING:
  * Look attentively at the flashcards and illustrations; deduce meanings from visual clues.
  * Listen carefully to the teacher's model pronunciation and native audio tracks.
  * Practice pronunciation through three systematic levels:
    + Level 1 (Choral): Entire class repeats each word clearly 2-3 times.
    + Level 2 (Group): Rows and groups take turns pronouncing words aloud in friendly competition.
    + Level 3 (Individual): Individual students stand up, pronounce target words, and receive teacher's feedback on ending sounds.
  * Point to the pictures in the Student's Book and say the words aloud (Point and Say).
  * Write the new vocabulary neatly into English notebooks with phonetic guides.

- SENTENCE PATTERN ACQUISITION:
  * Listen attentively to the teacher's sample conversation.
  * Repeat the sentence pattern chorally and in pairs.
  * Practice substituting target words into the sentence framework.`;

    act3Teacher = `- VOCABULARY REINFORCEMENT GAME:
  * Game: '${matchedUnit.game}'
  * Target Vocabulary in the Game: ${rawWordsList}
  * Procedure:
    + Divide the class into two competing teams (Team A & Team B).
    + Display flashcards on the board; demonstrate one trial round clearly.
    + Call out a word or show an action; representatives from both teams race to tap the correct card and pronounce it loudly.
    + Award points, praise fast reflexes, and correct pronunciation gently.

- GUIDED PAIR-WORK PRACTICE:
  * Instruct students to work in pairs (Student A & Student B) using the target sentence pattern:
${matchedUnit.sentencePatterns.map((p) => `    > ${p}`).join("\n")}
  * Walk around the classroom, monitor pronunciation, and offer immediate support to struggling pairs.
  * Invite 3-4 pairs to stand up and demonstrate their dialogue in front of the class.`;

    act3Student = `- PARTICIPATION IN THE VOCABULARY GAME:
  * Focus attention on the teacher's cues and clues.
  * Team representatives race to identify the correct flashcard and speak loudly and clearly.
  * Classmates cheer supportively and echo the word chorally to reinforce memory.

- COMMUNICATIVE PAIR-WORK PRACTICE:
  * Student A: Point to the flashcard and ask using the target question pattern.
  * Student B: Look at the visual clue, answer accurately using the target vocabulary.
  * Swap roles so both partners practice asking and answering with all target words.
  * Give gentle feedback to partners on ending sounds and pronunciation.`;

    act4Teacher = `- COMMUNICATIVE APPLICATION TASK:
  * Ask students to choose 2 target words and use them in a real-world sentence about themselves.
  * Provide a clear speaking frame on the board.
  * Invite several students to share their sentences with the class; give positive praise and formative assessment.
- Lesson Wrap-up & Homework:
  * Summarize target words and sentence patterns learned today.
  * Homework: Practice pronouncing the words at home, write each word 2 lines, and prepare for Lesson 2.`;

    act4Student = `- Complete the speaking frame using personal preferences and target words.
- Stand up confidently, make eye contact, and share sentences with the teacher and peers.
- Listen attentively to teacher's praise and feedback.
- Note down homework instructions in student notebooks.`;

  } else if (pIndex === 2) {
    // ------------------------------------------------------------------------
    // PERIOD 2: LISTENING & SPEAKING PRACTICE
    // ------------------------------------------------------------------------
    act1Teacher = `- Warm-up & Review:
  * Greet the class: "Hello everyone! Are you ready for an exciting English lesson?"
  * Quick Flashcard Recall Game: Flash vocabulary cards from Lesson 1 rapidly; students shout out the words.
  * Lead-in to Lesson 2: "Today, we will train our ears and voices to speak English fluently with our partners!"
  * Announce the lesson title '${lessonTitle}' and write it on the board.`;

    act1Student = `- Respond warmly to greeting and stand up eagerly for the review rally.
- Call out target words quickly upon seeing the flashcard clues.
- Repeat the lesson title and open the Student's Book to the listening and speaking section.`;

    act2Teacher = `- LISTENING COMPREHENSION & DIALOGUE PRESENTATION:
  * Target Communicative Dialogue:
${matchedUnit.sentencePatterns.map((p) => `    • Dialogue Structure: ${p}`).join("\n")}
  * Target Words in Context: ${rawWordsList}
  * Step 1 (Pre-listening): Direct students' attention to pictures in the book; ask predictive questions: "Who is speaking? What are they talking about?"
  * Step 2 (While-listening): Play the native recording twice; students point to the pictures and listen attentively for key vocabulary.
  * Step 3 (Post-listening Check): Check answers with the whole class; replay critical audio segments to verify understanding.
  * Step 4 (Dialogue Modeling): Model the dialogue line by line with clear sentence stress, rhythm, and intonation.`;

    act2Student = `- Pre-listening: Look at character pictures and make guesses about the dialogue setting.
- While-listening: Listen carefully to the native recording; track words and point to matching pictures.
- Post-listening: Answer teacher's comprehension questions; check answers with confidence.
- Dialogue Modeling: Repeat dialogue lines after the recording and teacher with natural English rhythm and intonation.`;

    act3Teacher = `- POINT, SAY & PAIR-WORK COMMUNICATION:
  * Organize pair practice: Pair students up to practice the dialogue with role switching.
  * Display picture prompts on the screen: students substitute different target words (${rawWordsList}) into the conversation.
  * Circulate around the room, observe pair interactions, listen to intonation, and assist pairs needing guidance.
  * Interactive Game: 'Pass the Microphone / Secret Whisper Chain'
    + Pass a toy microphone around; the music stops and the student holding it must ask their partner a target question.`;

    act3Student = `- Point, Say & Role-play:
  * Work in pairs: Take turns acting as the speaker and listener.
  * Substitute all target vocabulary into the conversation framework fluently.
  * Help partners correct word stress and ending sounds gently.
- Participate actively in the microphone game: Ask and answer questions promptly when the music stops.`;

    act4Teacher = `- COMMUNICATIVE SURVEY & ROLE-PLAY SHOWCASE:
  * Mini-Survey: Students stand up and interview 2 classmates using the target sentence patterns, noting down results.
  * Invite 3 pairs to come to the front of the classroom and perform their dialogue before the class.
  * Provide constructive, motivating feedback and award praise stickers.
- Summary & Homework:
  * Review key speaking phrases.
  * Homework: Practice the conversation with a family member or friend at home.`;

    act4Student = `- Move around politely to interview 2 classmates using target English sentence patterns; take quick notes.
- Volunteer pairs step up to the front, perform the dialogue with natural gestures and loud, clear voices.
- Applaud peers' performances and receive teacher's encouraging comments.
- Note homework assignments in student diaries.`;

  } else if (pIndex === 3) {
    // ------------------------------------------------------------------------
    // PERIOD 3: PHONICS, READING & WRITING
    // ------------------------------------------------------------------------
    act1Teacher = `- Warm-up & Phonics Chant:
  * Greet the class: "Good morning/afternoon, boys and girls!"
  * Play an energetic phonics chant targeting the key phonetic sounds: ${matchedUnit.phonics}.
  * Lead-in to Lesson 3: "Today, we become phonics detectives and master writing our English words beautifully!"
  * Display the lesson title '${lessonTitle}' on the board.`;

    act1Student = `- Greet the teacher cheerfully and chant along with rhythmic clapping.
- Focus on the target sounds highlighted in the chant.
- Repeat the lesson title and prepare notebooks and pencils for writing.`;

    act2Teacher = `- PHONICS & GUIDED READING PRESENTATION:
  * Key Phonics Focus: ${matchedUnit.phonics}
  * Target Words for Phonics: ${rawWordsList}
  * Step 1 (Phonics Demonstration):
    + Write target letters and phonetic symbols on the board.
    + Demonstrate mouth shape, lip rounding, and breath control clearly.
    + Contrast correct pronunciation with common Vietnamese learner errors (e.g. dropping ending sounds).
  * Step 2 (Phonics Drilling): Lead choral, group, and individual sound articulation.
  * Step 3 (Guided Reading): Guide students to read a short 3-4 sentence text containing target vocabulary and phonics sounds. Model pausing, sentence stress, and intonation.`;

    act2Student = `- PHONICS PRACTICE:
  * Watch the teacher's mouth shape and listen to the distinct target sound.
  * Articulate the sound chorally, in small groups, and individually.
  * Identify target sounds within the words: ${rawWordsList}.
- GUIDED READING:
  * Follow the reading text line by line with a pointer or finger.
  * Read aloud after the teacher, paying close attention to sentence stress and punctuation pauses.`;

    act3Teacher = `- SOUND DISCRIMINATION GAME & WRITING PRACTICE:
  * Phonics Game: 'Sound Sorting / Stand Up When You Hear It'
    + Read words aloud; students stand up when they hear the target phonics sound (${matchedUnit.phonics}).
  * Guided Writing Exercise:
    + Display writing prompts on the board: complete sentences with missing target words.
    + Model proper letter height, spacing, and punctuation.
    + Guide students to write complete sentences into their notebooks.
    + Circulate, observe handwriting, and provide immediate handwriting corrections.`;

    act3Student = `- Engage enthusiastically in the sound sorting game, listening keenly for the target sound.
- Writing Practice:
  * Read the sentence prompts carefully and fill in the missing target words.
  * Copy complete, grammatically correct sentences into English notebooks with neat handwriting.
  * Check spelling and punctuation against the board model.`;

    act4Teacher = `- PEER PROOFREADING & WRITING SHOWCASE:
  * Ask students to swap notebooks with a desk partner for peer proofreading (checking spelling and punctuation).
  * Select 2-3 outstanding notebooks to display under the document camera/screen; praise neat handwriting and correct spelling.
- Summary & Homework:
  * Summarize key phonics rules and spelling tips.
  * Homework: Complete writing exercises in the workbook and practice reading the text 3 times.`;

    act4Student = `- Swap notebooks with a partner; check each other's spelling and letter formation kindly.
- Observe featured notebooks on the screen and learn from neat peer work.
- Receive praise and note down workbook exercises for home study.`;

  } else {
    // ------------------------------------------------------------------------
    // PERIOD 4: COMMUNICATION GAME & PROJECT PRODUCTION
    // ------------------------------------------------------------------------
    act1Teacher = `- Warm-up & Game Kick-off:
  * Greet the class: "Hello everyone! Today is our project and communication game day!"
  * Play a lively action song or quick-fire vocabulary recall game covering all words: ${rawWordsList}.
  * Lead-in to Lesson 4: "Today, we will apply everything we have learned in Unit '${matchedUnit.unitName}' into an exciting classroom project!"
  * Write the lesson title '${lessonTitle}' on the board.`;

    act1Student = `- Greet the teacher with excitement and participate actively in the quick-fire recall game.
- Shout out learned words and sentence patterns with high energy.
- Open the project section in the Student's Book.`;

    act2Teacher = `- REVIEW & PROJECT INSTRUCTIONS:
  * Comprehensive Review of Target Content:
    + Vocabulary: ${rawWordsList}
    + Key Patterns: ${patternsList}
  * Project Introduction:
    + Announce the communicative project: (e.g. 'My Profile Card' / 'Classroom Survey Poster' / 'Mini Story Booklet' on '${matchedUnit.theme}').
    + Show a colorful teacher sample project model.
    + Explain clear guidelines: 1. Draw or paste pictures; 2. Write 3-4 descriptive English sentences using target patterns; 3. Prepare to speak before the class.`;

    act2Student = `- Review key vocabulary and sentence structures chorally.
- Examine the teacher's sample project with interest.
- Understand the 3-step project procedure and prepare paper, colored markers, and notebooks.`;

    act3Teacher = `- GUIDED PROJECT WORK & COLLABORATION:
  * Organize students into working groups of 4.
  * Distribute project paper strips / mini posters.
  * Guide students while they draw, write, and rehearse their spoken English presentation.
  * Walk around the classroom, offer creative vocabulary suggestions, and encourage hesitant learners.
  * Ensure every student practices speaking their lines within the small group.`;

    act3Student = `- Work diligently on the project:
  * Illustrate the chosen topic neatly and colorfully.
  * Write 3-4 accurate English sentences applying target words and sentence patterns.
  * Practice presenting sentences aloud to group members.
  * Help group members correct pronunciation and boost each other's confidence.`;

    act4Teacher = `- PROJECT PRESENTATION SHOWCASE & EVALUATION:
  * Invite group representatives or volunteer pairs to present their projects in front of the class.
  * Formative Assessment: Provide motivating verbal praise, comment on pronunciation, posture, and creativity.
  * Lead the class to vote for the 'Best Presenter' and 'Most Creative Artwork'.
- Unit Wrap-up:
  * Celebrate the completion of the unit; commend the students' hard work and improvement.
  * Homework: Review the entire unit and prepare for the next topic.`;

    act4Student = `- Present projects proudly in front of the class with clear voices, good eye contact, and positive body language.
- Listen respectfully to peers' presentations and applaud enthusiastically.
- Participate in voting for top presentations.
- Receive teacher's commendations and note down review instructions for home.`;
  }

  // Final 4 Activities structure conforming to LessonActivity interface (100% English)
  const activities: LessonActivity[] = [
    {
      name: `1. Warm-up - ${pIndex === 1 ? "Chant & Lead-in" : pIndex === 2 ? "Vocabulary Rally & Review" : pIndex === 3 ? "Phonics Chant" : "Game Kick-off"}`,
      objective: `Create an energetic and welcoming classroom atmosphere; activate students' prior knowledge and lead smoothly into '${lessonTitle}'.`,
      teacherActivity: act1Teacher,
      studentActivity: act1Student
    },
    {
      name: `2. Knowledge Discovery / Presentation - ${pIndex === 1 ? "Target Vocabulary & Patterns" : pIndex === 2 ? "Listening & Dialogue Comprehension" : pIndex === 3 ? "Phonics & Guided Reading" : "Review & Project Guidelines"}`,
      objective: `Students identify written forms, understand meanings, and accurately pronounce target vocabulary (${rawWordsList}); comprehend and master communicative sentence patterns.`,
      teacherActivity: act2Teacher,
      studentActivity: act2Student
    },
    {
      name: `3. Practice - ${pIndex === 1 ? "Interactive Game & Guided Pair-work" : pIndex === 2 ? "Point & Say Dialogue Practice" : pIndex === 3 ? "Sound Sorting & Notebook Writing" : "Group Collaboration & Rehearsal"}`,
      objective: `Consolidate vocabulary retention, pronunciation reflexes, and communicative fluency through interactive games, pair dialogues, and guided practice.`,
      teacherActivity: act3Teacher,
      studentActivity: act3Student
    },
    {
      name: `4. Production & Application - ${pIndex === 1 ? "Real-world Speaking Frame" : pIndex === 2 ? "Classroom Survey & Role-play" : pIndex === 3 ? "Peer Proofreading & Writing Showcase" : "Project Presentation & Formative Evaluation"}`,
      objective: `Apply learned vocabulary and sentence patterns to authentic communicative situations; develop creative thinking, collaborative spirit, and public speaking confidence in English.`,
      teacherActivity: act4Teacher,
      studentActivity: act4Student
    }
  ];

  return {
    lessonTitle,
    unitName: matchedUnit.unitName,
    theme: matchedUnit.theme,
    vocabulary: formattedVocab,
    rawWords,
    sentencePatterns: matchedUnit.sentencePatterns,
    phonicsSound: matchedUnit.phonics,
    gameName: matchedUnit.game,
    specificCompetencies,
    teacherMaterials,
    studentMaterials,
    integrationNotes,
    activities
  };
}
