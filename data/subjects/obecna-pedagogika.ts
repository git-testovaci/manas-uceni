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
          id: "vychova-a-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Výchova a vzdělávání",
          summary: "Rozdíl mezi výchovou a vzděláváním a jejich cíli.",
          order: 1,
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
          order: 2,
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
