export type ChoiceTag = "brave" | "cautious";

export interface Choice {
  id: string;
  text: string;
  tag: ChoiceTag;
  outcomeText: string;
}

export interface Chapter {
  id: string;
  title: string;
  story: string;
  choices: [Choice, Choice];
}

export interface Ending {
  id: string;
  title: string;
  text: string;
  requiredTag: ChoiceTag;
}

export interface CampaignData {
  id: string;
  characterName: string;
  title: string;
  era: string;
  tagline: string;
  accentColor: string;
  portrait: string;
  chapters: Chapter[];
  endings: [Ending, Ending];
}

export const CAMPAIGNS: CampaignData[] = [
  {
    id: "callie",
    characterName: "Callie",
    title: "The Weight of Silence",
    era: "2002–2025 | Alaska, USA",
    tagline: "Some wounds never heal. But some debts get paid.",
    accentColor: "#7A3FF2",
    portrait: "/assets/generated/callie-portrait.dim_400x500.jpg",
    chapters: [
      {
        id: "callie-ch1",
        title: "Born July 3rd, 2002",
        story:
          "Callie was born on July 3rd, 2002, in a small town in Alaska. She grew up surrounded by wilderness and familiar faces — a tight-knit community where everyone knew everyone. Life was simple, if isolated.\n\nWhen she turned sixteen, she got into a relationship with a boy named Charley. At first it seemed like any teenage romance. But Charley was controlling, possessive, and quick to anger. What started as small acts of jealousy soon became something far darker. Callie was trapped in an abusive relationship before she fully understood what that meant.",
        choices: [
          {
            id: "confide-carla",
            text: "Confide in Carla — your best friend will believe you",
            tag: "brave",
            outcomeText:
              "You tell Carla everything. She listens without flinching. She doesn't tell you it'll be fine — she starts making a plan. Having her know makes you feel less alone, even if the danger hasn't passed.",
          },
          {
            id: "keep-quiet",
            text: "Keep quiet — telling someone might make things worse",
            tag: "cautious",
            outcomeText:
              "You say nothing. You smile at school, avoid eye contact at home, and count the days. But silence has a weight, and you are already tired from carrying it.",
          },
        ],
      },
      {
        id: "callie-ch2",
        title: "Age 18 — The First Crime",
        story:
          "When Callie turned eighteen, Charley escalated. He raped her, obsessed with getting her pregnant — as if a child would bind her to him permanently. It didn't work. Callie did not get pregnant.\n\nShe tried to leave. He made it impossible. The isolation of their small town worked in his favor — limited resources, limited witnesses, limited escape routes. Charley controlled what she had access to and who she could speak to.\n\nCallie survived. She kept going. But the damage was permanent, and Charley had learned he could do this and face no consequences.",
        choices: [
          {
            id: "try-to-leave",
            text: "Try to leave — any chance is worth taking",
            tag: "brave",
            outcomeText:
              "You pack a bag and get as far as the highway. Charley finds you before the bus arrives. He says nothing. His silence is worse than anything he could say out loud.",
          },
          {
            id: "endure-and-plan",
            text: "Endure for now — wait until you have a real way out",
            tag: "cautious",
            outcomeText:
              "You stay. You memorize routines, exits, and weaknesses. One day this information will matter. You make sure you will still be here when it does.",
          },
        ],
      },
      {
        id: "callie-ch3",
        title: "Age 21 — It Happens Again",
        story:
          "Three more years passed. Callie tried to rebuild something resembling a life. Then, when she turned twenty-one, Charley raped her for the second time. Again, he tried to get her pregnant. Again, it didn't work.\n\nCallie's best friend Carla had been watching for years — noticing the bruises explained away, the cancelled plans, the way Callie flinched at loud sounds. After this, Carla refused to stay on the sidelines. She told Callie she was done watching from a distance.\n\nCallie had survived twice. But she was still in reach.",
        choices: [
          {
            id: "let-carla-help",
            text: "Let Carla in — you can't do this alone anymore",
            tag: "brave",
            outcomeText:
              "You show Carla the evidence you've been collecting — dates, photos, everything. She goes pale, then steady. 'We're going to get you out,' she says. You almost believe her.",
          },
          {
            id: "protect-carla",
            text: "Push Carla away — you don't want her in danger",
            tag: "cautious",
            outcomeText:
              "You tell her you're fine. She doesn't believe you, but she gives you space. She just doesn't go far. She keeps her father's shotgun loaded and her phone charged.",
          },
        ],
      },
      {
        id: "callie-ch4",
        title: "Age 23 — The Bar",
        story:
          "Two years later, Callie went to a local bar. Her drink was spiked.\n\nShe woke up in Charley's basement.\n\nHe raped her a third time. And then he shot her.\n\nCallie died in that basement. Charley left. He was never found by police — but Carla found him first. She had been searching since Callie disappeared. When Carla pulled the trigger, her hands did not shake.\n\nCallie was twenty-three years old.",
        choices: [
          {
            id: "carla-justice",
            text: "Carla goes to the police with what she knows",
            tag: "brave",
            outcomeText:
              "Carla brings everything to the authorities before confronting Charley. The evidence is documented. The case is on record. Callie's name is spoken in a courtroom.",
          },
          {
            id: "carla-reckoning",
            text: "Carla handles it herself — she owes Callie that much",
            tag: "cautious",
            outcomeText:
              "Carla doesn't call anyone. She drives to where she knows Charley will be. One shot. Charley was never found. Carla drives home alone in the dark.",
          },
        ],
      },
    ],
    endings: [
      {
        id: "callie-ending-a",
        title: "Spoken",
        text: "Charley was arrested based on the evidence Carla brought forward. The case took two years to reach trial. Every detail of what he had done to Callie was read into the record — the abuse starting at sixteen, the three assaults, the night he shot her in his own basement.\n\nCallie's name was spoken aloud in that courtroom every single day. Not as a victim without a face — but as a person. A daughter. A best friend.\n\nCarla sat in the front row for every session. She wore the bracelet Callie had given her when they were seventeen. She never took it off.",
        requiredTag: "brave",
      },
      {
        id: "callie-ending-b",
        title: "Settled",
        text: "Charley Marsh was never found. Search parties covered three counties over two winters and came up with nothing. His truck sat at the edge of town until the township had it towed, years later.\n\nCarla moved to Juneau the following spring. She kept a photo of Callie on her nightstand — not taken in the bad years, but years before, when they were fifteen and laughing at something neither of them could remember. Just proof that Callie had been here. That she had been loved.\n\nSome things don't go through courts. Some debts get settled in the dark, and the people who settle them carry the weight alone, and they do not apologize for it.",
        requiredTag: "cautious",
      },
    ],
  },
  {
    id: "kiara",
    characterName: "Kiara",
    title: "The Silk and the Storm",
    era: "2004–2020 | Kyoto, Japan",
    tagline: "She wore her identity like armor. They couldn't stand it.",
    accentColor: "#E85D8C",
    portrait: "/assets/generated/kiara-portrait.dim_400x500.jpg",
    chapters: [
      {
        id: "kiara-ch1",
        title: "Born December 2nd, 2004",
        story:
          "Kiara was born on December 2nd, 2004, in a rural town in Kyoto. She grew up surrounded by tradition — her father taught her the significance of every color and fold in a kimono, and she learned early that clothing could be a form of language.\n\nWhen she was fifteen, in 2019, Valentino and his father came into her community. They took her. The abduction was deliberate and calculated. Kiara found herself trapped, far from her father, far from everything familiar.\n\nShe began wearing her kimonos as a cry for help — and to preserve the one piece of her identity they hadn't taken. Valentino and his father hated it.",
        choices: [
          {
            id: "keep-wearing",
            text: "Keep wearing the kimono — they cannot take this from you",
            tag: "brave",
            outcomeText:
              "You dress every morning with deliberate care. The colors are a message to anyone who might be watching. Valentino tears one from you. You find another.",
          },
          {
            id: "hide-kimono",
            text: "Hide the kimonos — protect them until you're safe",
            tag: "cautious",
            outcomeText:
              "You fold them carefully and tuck them out of sight. They can't destroy what they can't find. You carry the colors in your memory instead.",
          },
        ],
      },
      {
        id: "kiara-ch2",
        title: "Captivity",
        story:
          "Months became a year. Kiara adapted to the rhythms of captivity the way people adapt to anything when they have no choice — not by accepting it, but by learning the shape of it well enough to find the edges.\n\nValentino and his father controlled when she ate, when she slept, who she saw. The kimonos became the one battlefield she refused to surrender. Every time she dressed in them, she felt the ghost of her father's hands guiding hers through the folds.\n\nShe didn't know how much time she had left. She knew she had to use whatever she had.",
        choices: [
          {
            id: "look-for-escape",
            text: "Study the compound — look for any way out",
            tag: "cautious",
            outcomeText:
              "You count steps between rooms. You watch which doors are locked when, and by whom. You are building a map in your mind, one detail at a time.",
          },
          {
            id: "resist-openly",
            text: "Resist openly — make them understand you will not submit",
            tag: "brave",
            outcomeText:
              "You refuse to cooperate. You wear the white kimono — the mourning color — every day. You make yourself difficult. It costs you, but you do not break.",
          },
        ],
      },
      {
        id: "kiara-ch3",
        title: "March 18, 2020 — Her Father",
        story:
          "Word reached Kiara through a crack in a door — passed in a whisper by the woman who brought food and never made eye contact.\n\nHer biological father had died on March 18th, 2020. The flu. He had been searching for her when he got sick. He never stopped looking.\n\nKiara sat on the floor in her father's favorite color — deep red — and pressed both palms flat against the silk until she could feel her own pulse. He was gone. The last person who had been looking for her, specifically for her, was gone.\n\nShe had until December. She had decided.",
        choices: [
          {
            id: "grieve-and-rise",
            text: "Grieve — and let it become something harder",
            tag: "brave",
            outcomeText:
              "You cry until there is nothing left. Then something cold and clear settles in your chest. Your father died looking for you. You will not waste that.",
          },
          {
            id: "bury-grief",
            text: "Bury the grief — emotions are a liability right now",
            tag: "cautious",
            outcomeText:
              "You file it away. You will grieve properly when you are free. For now, you become very still, and very focused, and very dangerous.",
          },
        ],
      },
      {
        id: "kiara-ch4",
        title: "December 1st, 2020 — 10:00 PM",
        story:
          "On the night of December 1st, 2020 — one day before her sixteenth birthday — Kiara acted. At 10:00 PM, she killed Valentino.\n\nShe had chosen the date deliberately. She would not turn sixteen in that place. She would not let that be the memory her birthday carried.\n\nBut Valentino's father found her on December 2nd. She woke up strapped to a chair.\n\nWhat he did next was the last thing Kiara ever experienced. She did not survive it. But she had not gone without a fight. She had not gone without leaving a mark on the world first.",
        choices: [
          {
            id: "fight-to-end",
            text: "Fight until the very last moment",
            tag: "brave",
            outcomeText:
              "You scream. You resist. You make them work for every second. The marks you leave on that room will tell the story clearly to anyone who finds it.",
          },
          {
            id: "find-peace",
            text: "Find stillness — you already did what mattered",
            tag: "cautious",
            outcomeText:
              "You close your eyes. You think of your father. You think of every fold of silk, every color, every lesson. You were here. You were real. You were never erased.",
          },
        ],
      },
    ],
    endings: [
      {
        id: "kiara-ending-a",
        title: "Remembered",
        text: "When investigators reached the compound in early 2021, they found the record of what had happened there written across every surface — in Kiara's kimonos, arranged deliberately; in the marks of her resistance; in the date she had chosen to act.\n\nValentino's father was arrested. The case drew international attention. Kiara's story was told in full — not as a tragedy without a subject, but as the story of a girl who wore her identity like armor until the very end, and who took one of them with her.\n\nHer father was buried beside a plaque that bore her name. The inscription was in Japanese. It said: She did not forget who she was.",
        requiredTag: "brave",
      },
      {
        id: "kiara-ending-b",
        title: "The Last Color",
        text: "Among the things left in the room where Kiara died was a single kimono — white, the color of mourning — folded carefully and placed on the floor beside the chair. It was not left carelessly. It was arranged with intention.\n\nThe investigators who documented the scene noted it in their report. A textile historian later identified the folding pattern as a specific funeral tradition from Kyoto's Fushimi district — a message, written in silk, to anyone who knew how to read it.\n\nKiara had been fifteen when she was taken. She was sixteen when she died. She spent every day in between refusing to disappear.",
        requiredTag: "cautious",
      },
    ],
  },
  {
    id: "natalia",
    characterName: "Natalija",
    title: "Iron and Ash",
    era: "1918–1945 | Estonia / Eastern Europe",
    tagline: "She survived two armies. Only one bullet could stop her.",
    accentColor: "#C0392B",
    portrait: "/assets/generated/natalia-portrait.dim_400x500.jpg",
    chapters: [
      {
        id: "natalia-ch1",
        title: "Born November 11th, 1918",
        story:
          "Natalija was born on November 11th, 1918, in German-occupied Estonia — the same day the guns of World War One fell silent. She came into a world that had just finished destroying itself, and was already quietly preparing to do it again.\n\nShe grew up under occupation, surrounded by soldiers who treated her country as a resource. By 1934, at the age of sixteen, Natalija made her decision: she joined the Nazi army. Not out of ideology — but because it was the army that was present, and she had decided she would rather carry a weapon than wait for someone else to use one on her.",
        choices: [
          {
            id: "embrace-role",
            text: "Embrace the role — earn their trust and use it",
            tag: "cautious",
            outcomeText:
              "You are good at the job, and being good at the job keeps you alive. You learn the system from the inside. You file away everything you see.",
          },
          {
            id: "remain-separate",
            text: "Do the work but remain separate — this is survival, not loyalty",
            tag: "brave",
            outcomeText:
              "You follow orders and say nothing extra. They don't need to know who you are. You are a machine gunner. That is all they need from you.",
          },
        ],
      },
      {
        id: "natalia-ch2",
        title: "1941 — The Machine Gunner",
        story:
          "By 1941, Natalija was twenty-three years old and stationed as a machine gunner tasked with defending her colonel. The Eastern Front was not a line on a map — it was a continuous emergency that reset every day.\n\nShe was good at the job. Better than most of the men beside her. They didn't like it, but they relied on her. The colonel barely acknowledged her existence, but he hadn't died yet, which was something.\n\nThe bombardments came in cycles. She learned to sleep between them. She kept her weapon clean and her head down and she waited.",
        choices: [
          {
            id: "hold-position",
            text: "Hold the position — the colonel's life depends on it",
            tag: "brave",
            outcomeText:
              "You fire until the barrel overheats. Three positions collapse around you. Yours holds. The colonel lives. He does not thank you.",
          },
          {
            id: "adapt-to-pressure",
            text: "Adapt — read the situation and respond to what's actually happening",
            tag: "cautious",
            outcomeText:
              "You ignore the colonel's last order, which was wrong, and reposition. It works. Later, he reframes it as his own decision. You don't argue. Arguing costs more than it earns.",
          },
        ],
      },
      {
        id: "natalia-ch3",
        title: "1944 — Defection",
        story:
          "In 1944, the Soviet forces attacked and took Natalija's base. What happened next surprised everyone, including Natalija: she joined them.\n\nShe picked up a Soviet weapon and killed each Nazi she had called a comrade. She sustained a chest wound in the process — deep enough to matter, not deep enough to kill. She was given a place in the Soviet army and a cot to recover on.\n\nMonths later, healed, she was stationed at a new base in southern Lithuania. She had traded one uniform for another. The work remained the same.",
        choices: [
          {
            id: "prove-worth",
            text: "Prove your worth immediately — you are not a prisoner, you are an asset",
            tag: "brave",
            outcomeText:
              "You make yourself indispensable within the first week. There are those who still don't trust you. You give them no ammunition for their suspicion.",
          },
          {
            id: "keep-head-down",
            text: "Keep your head down — trust is built slowly",
            tag: "cautious",
            outcomeText:
              "You follow orders without volunteering opinions. You heal. You watch how this army operates and where it differs from the last one. The chest wound aches when it rains.",
          },
        ],
      },
      {
        id: "natalia-ch4",
        title: "Southern Lithuania — The Chase",
        story:
          "Two days into her posting at the southern Lithuania base, Natalija spotted a Nazi soldier running toward the perimeter. She shot out his legs. He went down hard, then began dragging himself toward the treeline.\n\nShe holstered her rifle and drew her Tokarev TT-33. She ran after him.\n\nWhile she chased the limping soldier into the trees, a Nazi spy slipped through the gate she had left unguarded. She didn't know this until she returned. She sat back at her post and defended the base, unaware of what had gotten through.\n\nOn August 19th, 1945, she was shot in the head and killed at her post.",
        choices: [
          {
            id: "finish-chase",
            text: "Finish the chase — he cannot be allowed to escape",
            tag: "cautious",
            outcomeText:
              "You bring him down at the treeline. You return to base. The spy is already inside. You never know what got through because of you. You take up your post and defend it until the end.",
          },
          {
            id: "return-early",
            text: "Turn back — something feels wrong at the base",
            tag: "brave",
            outcomeText:
              "Your instincts pull you back before you reach the treeline. You find the spy at the communications post. You stop him. The Nazi in the field escapes. Some trades are worth making.",
          },
        ],
      },
    ],
    endings: [
      {
        id: "natalia-ending-a",
        title: "At Her Post",
        text: "August 19th, 1945. The war in Europe had been over for three months. The posting hadn't ended.\n\nNatalija was at her station at dawn when the shot came. One round from the western ridge. Professionally placed. She did not suffer.\n\nShe was buried with her Tokarev, as she had previously instructed, in a small cemetery outside Vilnius. The stone gave only her first name and the years: 1918 to 1945. Below that, in Estonian, a single line:\n\nShe did not flinch.\n\nThe soldiers who had served beside her lit candles at that stone for twenty years. Some of them had not liked her. They lit the candles anyway.",
        requiredTag: "cautious",
      },
      {
        id: "natalia-ending-b",
        title: "Vigilant",
        text: "The spy was neutralized. The intelligence was secured. Natalija received a commendation she did not frame and a promotion she did not request.\n\nShe was still shot on August 19th, 1945. Stopping one threat had not removed all of them.\n\nBut the base held. The information did not reach the enemy. The men she had defended went home.\n\nNatalija had been born on the day one war ended. She died three months after another one did. She had spent twenty-seven years learning to hold a line, and she held it to the last.",
        requiredTag: "brave",
      },
    ],
  },
  {
    id: "florian",
    characterName: "Florian",
    title: "The Long Walk",
    era: "1888–2001 | Germany / Europe",
    tagline: "He lived long enough to watch the world destroy itself. Twice.",
    accentColor: "#C49A3C",
    portrait: "/assets/generated/florian-portrait.dim_400x500.jpg",
    chapters: [
      {
        id: "florian-ch1",
        title: "Born August 12th, 1888",
        story:
          "Florian was born on August 12th, 1888. By 1913, when he was twenty-five years old, word began spreading about tensions across Europe — a war building in the distance. Florian heard the talk and didn't believe it. Things like that, he thought, have a way of resolving themselves.\n\nIn 1914, he turned twenty-six. Archduke Franz Ferdinand and his wife were assassinated in Sarajevo, Bosnia. The war Florian hadn't believed in became real within weeks. When it became real, something shifted in him — a feeling he could only describe as a responsibility to protect his country, even if he didn't fully understand what he was protecting it from.",
        choices: [
          {
            id: "enlist-now",
            text: "Enlist — you feel the pull to act",
            tag: "brave",
            outcomeText:
              "You sign your name before the declaration dries. The recruiter shakes your hand. You notice something in his expression that you won't have a word for until much later.",
          },
          {
            id: "wait-and-see",
            text: "Wait — perhaps this won't require you after all",
            tag: "cautious",
            outcomeText:
              "You hold back. You write letters and follow news and tell yourself this will resolve. You are drafted eight months later. The war did not wait for your comfort.",
          },
        ],
      },
      {
        id: "florian-ch2",
        title: "1917 — The Bullet",
        story:
          "Florian was twenty-nine when the United States entered the war in 1917. Shortly after, he was finally deployed to the front lines.\n\nThe bullet that found his left leg was efficient and impersonal. It passed through cleanly. The field medic told him he'd walk again. He did. He was back at his post within weeks, moving with a slight limp that would stay with him for the rest of his very long life.\n\nHe had believed in this war more than most of the men around him. That belief had not protected his leg. He began to reconsider what belief was actually worth.",
        choices: [
          {
            id: "stay-at-post",
            text: "Stay at your post — the injury doesn't change anything",
            tag: "brave",
            outcomeText:
              "You wrap the wound yourself and remain at your position. Six hours later, when the medics force you back, you go with a score to settle and a leg that works well enough.",
          },
          {
            id: "recover-properly",
            text: "Fall back and recover properly — you need to be functional",
            tag: "cautious",
            outcomeText:
              "You accept the retreat to the aid station. You learn a card game from a man from Stuttgart. A month later you're back. You feel the leg in cold weather for the rest of your life.",
          },
        ],
      },
      {
        id: "florian-ch3",
        title: "December 22nd, 1932 — The Warning",
        story:
          "Florian was forty-four years old when he went to see a government official on December 22nd, 1932. He had a specific concern: Adolf Hitler should not be appointed Chancellor of Germany.\n\nThis was not, for Florian, a political opinion. It was a pattern he recognized — he had seen the architecture of catastrophe before, and this had the same shape. He told the leader directly. He made his case.\n\nThe leader told him no. Florian walked away muttering that Hitler would ruin Germany and kill the Jews. Nobody recorded what he said. Nobody acted on it. Hitler was appointed Chancellor on January 30th, 1933.",
        choices: [
          {
            id: "keep-pushing",
            text: "Keep pushing — find anyone who will listen",
            tag: "brave",
            outcomeText:
              "You spend the next weeks in every waiting room you can access. A few journalists take notes. Nothing changes. But the record of what you said, and when, exists.",
          },
          {
            id: "document-everything",
            text: "Accept the outcome — start documenting everything instead",
            tag: "cautious",
            outcomeText:
              "You go home and open a journal. You write down the date, the meeting, the exact words. You understand now that prevention has failed. You begin keeping the record.",
          },
        ],
      },
      {
        id: "florian-ch4",
        title: "D-Day — Age 55",
        story:
          "June 6th, 1944. Florian was fifty-five years old on the beaches of Normandy. He had no business being there by any reasonable standard. He was there because he had insisted on it, and because a man who has already survived one World War carries a kind of stubborn authority that is easier to accommodate than to argue against.\n\nAn American bullet found his right arm. He registered the impact, assessed the damage, and kept moving. He had taken a bullet to the left leg in 1917. Now one arm was compromised. He still had one arm and two legs, which was more than many of the men around him.",
        choices: [
          {
            id: "lead-forward",
            text: "Keep moving forward — the beach has to be crossed",
            tag: "brave",
            outcomeText:
              "You move forward with the arm hanging and the other directing men you've never met. Some of them make it because of where you pointed. You don't stop to count.",
          },
          {
            id: "coordinate-behind",
            text: "Coordinate from behind — use your experience where it counts most",
            tag: "cautious",
            outcomeText:
              "You become a fixed point of calm in the chaos. Three junior officers later report that your direction saved their units from two critical mistakes on that beach.",
          },
        ],
      },
    ],
    endings: [
      {
        id: "florian-ending-a",
        title: "Witness",
        text: "Florian lived to be one hundred and thirteen years old.\n\nOn September 11th, 2001, he was sitting in a care home in Bremen, watching a television a nurse had left on in the common room. He watched the first tower. He watched the second. He had seen the architecture of catastrophe before. He recognized what he was looking at.\n\nHe died the following morning, September 12th, 2001, of a stroke, in his sleep, as the sun came up over northern Germany.\n\nHis doctor said he seemed entirely at peace — as though, after a hundred and thirteen years of watching the world, he had finally seen everything he needed to see, and could now put it down.",
        requiredTag: "brave",
      },
      {
        id: "florian-ending-b",
        title: "The Long Walk",
        text: "Among the belongings of a man who died in Bremen in September 2001 was a leather trunk containing forty-three journals, kept from 1929 through the day before he died. Names, dates, decisions, patterns, predictions — many of them accurate years before anyone else noticed the same shape.\n\nA historian at the University of Hamburg acquired the trunk in 2003. The resulting publication was titled 'The Long Walk.' It was translated into nineteen languages.\n\nIn the introduction, the historian wrote: He had been trying to warn people since 1932. He never stopped. He lived long enough to see the warnings ignored, acted upon, and ignored again. He documented all of it. He did not give up on the record.\n\nIn the footnotes, across dozens of chapters, one phrase appeared repeatedly: He was right.",
        requiredTag: "cautious",
      },
    ],
  },
];
