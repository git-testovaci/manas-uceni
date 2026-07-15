import { buildStudyPracticeItemId } from "@/lib/study/itemIds";
import type { StudySubjectContent } from "@/types/study";

export const OBECNA_PEDAGOGIKA_CONTENT: StudySubjectContent = {
  subjectId: "obecna-pedagogika",
  units: [
    {
      id: "zakladni-pojmy",
      subjectId: "obecna-pedagogika",
      title: "Základní pedagogické pojmy",
      description: "Výchova, vzdělávání a socializace",
      order: 1,
      lessons: [
        {
          id: "co-je-pedagogika",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Co je pedagogika",
          summary:
            "Pedagogika jako vědecká disciplína: její předmět, oblasti zkoumání a rozdíl mezi teorií, praxí a osobním názorem.",
          order: 1,
          studySections: [
            {
              id: "vysvetleni-pedagogika",
              type: "explanation",
              title: "Co je pedagogika",
              body:
                "Pedagogika je vědecká disciplína, která zkoumá výchovu a vzdělávání. Jejím předmětem je výchovný proces a rozvoj člověka v něm. Pedagogika se zabývá cíli, podmínkami, prostředky, průběhem i výsledky výchovy a vzdělávání. Pedagogická teorie vysvětluje a zobecňuje poznatky a podporuje odborné rozhodování. Pedagogická praxe řeší konkrétní výchovné situace. Odborné pedagogické poznání se opírá o pojmy, důkazy, výzkum a ověřitelné zdroje — liší se tak od pouhého osobního názoru.",
            },
            {
              id: "pojmy-pedagogika",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Pedagogika",
                  definition:
                    "Vědecká disciplína zkoumající výchovu a vzdělávání.",
                },
                {
                  term: "Předmět pedagogiky",
                  definition:
                    "Výchovný proces a rozvoj člověka v něm.",
                },
                {
                  term: "Pedagogická teorie",
                  definition:
                    "Soustava poznatků, která vysvětluje, zobecňuje a podporuje odborné rozhodování.",
                },
                {
                  term: "Pedagogická praxe",
                  definition:
                    "Řešení konkrétních výchovných situací v reálném prostředí.",
                },
                {
                  term: "Odborné pedagogické poznání",
                  definition:
                    "Poznání opřené o pojmy, důkazy, výzkum a ověřitelné zdroje.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt: "Jak lze pedagogiku nejpřesněji vymezit?",
              choices: [
                {
                  id: "a",
                  text: "Soubor pravidel slušného chování ve třídě",
                },
                {
                  id: "b",
                  text: "Vědecká disciplína zkoumající výchovu a vzdělávání",
                },
                {
                  id: "c",
                  text: "Souhrn osobních zkušeností jednoho učitele",
                },
                {
                  id: "d",
                  text: "Popis organizace školy a rozvrhu hodin",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagogika není jen praktická návodná rada ani školní administrativa, ale vědecká disciplína zaměřená na výchovu a vzdělávání. Ostatní možnosti popisují úzký praktický nebo organizační pohled.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt: "Co je předmětem pedagogiky?",
              choices: [
                { id: "a", text: "Pouze učební osnovy a katalogy pomůcek" },
                {
                  id: "b",
                  text: "Výchovný proces a rozvoj člověka v něm",
                },
                { id: "c", text: "Výhradně biologický růst dítěte" },
                { id: "d", text: "Jen chování dětí mimo školu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Předmět pedagogiky tvoří výchovný proces jako celek a rozvoj člověka v něm. Nejde jen o pomůcky, biologii ani o úzký okruh mimoškolních situací.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt:
                "Kterou oblast výchovy a vzdělávání pedagogika zkoumá jako cíle?",
              choices: [
                { id: "a", text: "Cíle výchovy a vzdělávání" },
                { id: "b", text: "Pouze rozvrh vyučování" },
                { id: "c", text: "Výhradně finanční zabezpečení škol" },
                { id: "d", text: "Jen výběr školního vybavení" },
              ],
              correctChoiceId: "a",
              explanation:
                "Mezi základní oblasti zkoumání patří cíle výchovy a vzdělávání — co má výchova a vzdělávání dosáhnout. Rozvrh, finance nebo vybavení nejsou samy o sobě předmětem pedagogického zkoumání cílů.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt:
                "Kterou oblast zkoumání popisuje pedagogika správně v souvislosti s podmínkami a prostředky?",
              choices: [
                {
                  id: "a",
                  text: "Podmínky a prostředky výchovy a vzdělávání",
                },
                {
                  id: "b",
                  text: "Pouze délku spánku dítěte mimo školní prostředí",
                },
                {
                  id: "c",
                  text: "Výhradně estetiku školního interiéru a nábytku",
                },
                {
                  id: "d",
                  text: "Jen počet žáků bez vztahu k výchovnému procesu",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagogika zkoumá podmínky a prostředky výchovy a vzdělávání — tedy v jakém prostředí a čím se výchovně působí. Ostatní odpovědi jsou buď mimo pedagogiku, nebo příliš úzké a nevystihují vztah k výchově.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt:
                "Co pedagogika zkoumá v souvislosti s průběhem a výsledky výchovy a vzdělávání?",
              choices: [
                {
                  id: "a",
                  text: "Průběh a výsledky výchovy a vzdělávání",
                },
                {
                  id: "b",
                  text: "Pouze termín konání školního plesu a jeho program",
                },
                {
                  id: "c",
                  text: "Výhradně to, zda dítě nosí odpovídající obuv",
                },
                {
                  id: "d",
                  text: "Jen předpověď počasí v den školního výletu",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagogika se zabývá průběhem výchovného procesu i jeho výsledky. Organizační nebo okrajové detaily bez vztahu k výchovnému procesu nejsou jádrem tohoto zkoumání.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt: "Jakou funkci má pedagogická teorie?",
              choices: [
                {
                  id: "a",
                  text: "Vysvětluje, zobecňuje a podporuje odborné rozhodování",
                },
                {
                  id: "b",
                  text: "Nahrazuje veškerou praxi hotovými návody bez výjimek",
                },
                {
                  id: "c",
                  text: "Slouží jen k zapamatování pojmů bez využití v praxi",
                },
                {
                  id: "d",
                  text: "Popisuje výhradně osobní dojmy z jedné třídy",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagogická teorie uspořádává poznatky, vysvětluje jevy a pomáhá pedagogovi rozhodovat odborně. Nejde o návod bez kontextu, pouhou memorii pojmů ani subjektivní dojem.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt: "Čím se vyznačuje pedagogická praxe?",
              choices: [
                {
                  id: "a",
                  text: "Řeší konkrétní výchovné situace v reálném prostředí",
                },
                {
                  id: "b",
                  text: "Popisuje pojmy bez kontaktu s realitou",
                },
                {
                  id: "c",
                  text: "Shromažďuje jen statistiky bez výchovného jednání",
                },
                {
                  id: "d",
                  text: "Tvoří výhradně učební osnovy na ministerstvu",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagogická praxe je činnost v konkrétních výchovných situacích — ve třídě, skupině nebo instituci. Teoretický popis, čistá statistika nebo tvorba osnov praxi samu nenahrazují.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "co-je-pedagogika",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "co-je-pedagogika",
              type: "multiple-choice",
              prompt:
                "Čím se odborné pedagogické poznání liší od osobního názoru?",
              choices: [
                {
                  id: "a",
                  text: "Vychází z pojmů, výzkumu a ověřitelných zdrojů",
                },
                {
                  id: "b",
                  text: "Stojí jen na dojmu, že daný postup obvykle funguje",
                },
                {
                  id: "c",
                  text: "Nepotřebuje zdůvodnění ani oporu v poznatcích",
                },
                {
                  id: "d",
                  text: "Platí jen subjektivně pro jednoho člověka",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Odborné poznání je argumentovatelné — vychází z pojmů, výzkumu a ověřitelných zdrojů. Osobní názor může být subjektivní a bez opory v důkazech; odbornost naopak vyžaduje zdůvodnění a kontrolu.",
              order: 8,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "vychova-a-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Výchova a vzdělávání",
          summary: "Rozdíl mezi výchovou a vzděláváním a jejich cíli.",
          order: 2,
          studySections: [
            {
              id: "vysvetleni-vychova",
              type: "explanation",
              title: "Výchova a vzdělávání",
              body:
                "Výchova je cílený proces formování osobnosti dítěte v rodině, škole i dalších institucích. Vzdělávání je jeho součást zaměřená na systematické získávání znalostí, dovedností a postojů. Oba procesy probíhají současně a vzájemně se doplňují.",
            },
            {
              id: "pojmy",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Výchova",
                  definition:
                    "Cílené působení na rozvoj osobnosti, hodnot a chování člověka.",
                },
                {
                  term: "Vzdělávání",
                  definition:
                    "Systematické získávání znalostí, dovedností a postojů ve vzdělávacím prostředí.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co je výchova?",
              choices: [
                { id: "a", text: "Náhodné pozorování dětí bez cíle" },
                {
                  id: "b",
                  text: "Cílený proces formování osobnosti a chování",
                },
                { id: "c", text: "Pouze předávání faktů ve škole" },
                { id: "d", text: "Výhradně biologický růst organismu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Výchova je cílené působení na rozvoj osobnosti, hodnot a chování. Není to náhodný ani čistě biologický proces.",
              order: 1,
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Čím se vzdělávání liší od výchovy jako celku?",
              choices: [
                { id: "a", text: "Vzdělávání neprobíhá ve škole" },
                {
                  id: "b",
                  text: "Vzdělávání je zaměřené na systematické učení",
                },
                { id: "c", text: "Výchova nezahrnuje hodnoty" },
                { id: "d", text: "Vzdělávání je jen mimoškolní aktivita" },
              ],
              correctChoiceId: "b",
              explanation:
                "Vzdělávání je součást výchovy zaměřená na systematické získávání znalostí, dovedností a postojů.",
              order: 2,
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Kde může probíhat výchova?",
              choices: [
                { id: "a", text: "Pouze v rodině" },
                { id: "b", text: "Pouze ve škole" },
                { id: "c", text: "V rodině, škole i dalších institucích" },
                { id: "d", text: "Jen v předškolním věku" },
              ],
              correctChoiceId: "c",
              explanation:
                "Výchova probíhá v rodině, škole i dalších výchovných institucích po celý život.",
              order: 3,
            },
          ],
          examQuestions: [],
        },
        {
          id: "socializace",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Socializace",
          summary: "Jak se dítě učí fungovat ve společnosti.",
          order: 3,
          studySections: [
            {
              id: "vysvetleni-socializace",
              type: "explanation",
              title: "Socializace",
              body:
                "Socializace je proces, při kterém jedinec získává znalosti, dovednosti a chování potřebné k životu ve společnosti. Začíná v rodině a pokračuje ve škole, mezi vrstevníky i v dalších skupinách.",
            },
            {
              id: "pojmy-socializace",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Socializace",
                  definition:
                    "Proces osvojování společenských norem, rolí a chování.",
                },
                {
                  term: "Primární socializace",
                  definition:
                    "První fáze socializace, typicky v rodině v raném dětství.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "socializace",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "socializace",
              type: "multiple-choice",
              prompt: "Co je socializace?",
              choices: [
                { id: "a", text: "Pouze učení se číst a psát" },
                {
                  id: "b",
                  text: "Proces osvojování společenských norem a chování",
                },
                { id: "c", text: "Výhradně tělesný vývoj dítěte" },
                { id: "d", text: "Náhodná hra bez vlivu okolí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Socializace znamená osvojování norem, rolí a chování potřebných pro život ve společnosti.",
              order: 1,
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "socializace",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "socializace",
              type: "multiple-choice",
              prompt: "Kde typicky probíhá primární socializace?",
              choices: [
                { id: "a", text: "Na úřadě" },
                { id: "b", text: "V rodině" },
                { id: "c", text: "Pouze na internetu" },
                { id: "d", text: "Výhradně na pracovišti rodičů" },
              ],
              correctChoiceId: "b",
              explanation:
                "Primární socializace probíhá v raném dětství, typicky v rodině, kde dítě poprvé poznává pravidla a vztahy.",
              order: 2,
            },
          ],
          examQuestions: [],
        },
      ],
    },
  ],
};
