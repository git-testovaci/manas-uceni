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
                "Ředitelka mateřské školy chce, aby děti lépe spolupracovaly a respektovaly pravidla společné hry. Kterou oblast pedagogiky tím sleduje?",
              choices: [
                { id: "a", text: "Organizaci školní jídelny" },
                { id: "b", text: "Podmínky výchovy a vzdělávání" },
                { id: "c", text: "Cíle výchovy a vzdělávání" },
                { id: "d", text: "Pouze technické vybavení třídy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Snaha o spolupráci a respekt k pravidlům je výchovně-vzdělávací záměr — patří mezi cíle, kterých má výchova a vzdělávání dosáhnout. Jídelna, vybavení nebo obecné podmínky samy o sobě tento záměr nepopisují.",
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
                "Pedagožka zjišťuje, zda má ve třídě dostatek pomůcek, vhodné prostředí a čas na klidnou práci s dětmi. Kterou oblast pedagogiky zkoumá?",
              choices: [
                {
                  id: "a",
                  text: "Pouze výsledky výchovy po letech",
                },
                {
                  id: "b",
                  text: "Průběh výchovného procesu bez ohledu na prostředí",
                },
                {
                  id: "c",
                  text: "Finanční hospodaření školy",
                },
                {
                  id: "d",
                  text: "Podmínky a prostředky výchovy a vzdělávání",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pomůcky, prostředí třídy a čas na práci jsou podmínky a prostředky výchovně-vzdělávacího působení. Pedagogika zkoumá, jak takové podmínky ovlivňují výchovu — ne jen výsledky po letech ani administrativu bez vztahu k procesu.",
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
                "Po pololetí pedagog hodnotí, jak děti zvládají samostatnou práci a zda se změnil jejich přístup ke spolupráci. Kterou oblast pedagogiky uplatňuje?",
              choices: [
                {
                  id: "a",
                  text: "Předmět pedagogiky bez vztahu k výsledkům",
                },
                {
                  id: "b",
                  text: "Průběh a výsledky výchovy a vzdělávání",
                },
                {
                  id: "c",
                  text: "Jen administrativní evidence bez výchovného významu",
                },
                {
                  id: "d",
                  text: "Výhradně biologický růst dětí",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Hodnocení změn v samostatnosti a spolupráci sleduje, jak výchovný proces probíhal a jaké výsledky přinesl. Nejde o čistou administrativu ani o biologický růst — pedagogika zkoumá průběh i dosažené změny.",
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
                  text: "Nahrazuje veškerou praxi hotovými návody bez výjimek",
                },
                {
                  id: "b",
                  text: "Slouží jen k zapamatování pojmů bez využití v praxi",
                },
                {
                  id: "c",
                  text: "Vysvětluje, zobecňuje a podporuje odborné rozhodování",
                },
                {
                  id: "d",
                  text: "Popisuje výhradně osobní dojmy z jedné třídy",
                },
              ],
              correctChoiceId: "c",
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
                  text: "Popisuje pojmy bez kontaktu s realitou",
                },
                {
                  id: "b",
                  text: "Shromažďuje jen statistiky bez výchovného jednání",
                },
                {
                  id: "c",
                  text: "Tvoří výhradně učební osnovy na ministerstvu",
                },
                {
                  id: "d",
                  text: "Řeší konkrétní výchovné situace v reálném prostředí",
                },
              ],
              correctChoiceId: "d",
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
          title: "Základní pedagogické pojmy",
          summary:
            "Výchova, vzdělávání, učení, vyučování, socializace a edukace — jak se liší a jak spolu souvisí v praxi.",
          order: 2,
          studySections: [
            {
              id: "vysvetleni-zakladni-pojmy",
              type: "explanation",
              title: "Základní pedagogické pojmy",
              body:
                "Výchova je cílené a cílevědomé působení zaměřené na rozvoj osobnosti, postojů, hodnot a chování. Vzdělávání je proces získávání znalostí, dovedností, postojů a kompetencí; vzdělání je jeho výsledek nebo dosažená úroveň. Učení je proces změny prostřednictvím zkušenosti, činnosti nebo poznávání. Vyučování je cílevědomá činnost pedagoga, která organizuje a podporuje učení. Socializace je vstup jedince do společnosti a osvojování norem, rolí a vzorců chování. Edukace je širší pojem pro výchovné a vzdělávací procesy. V jedné situaci — například ve školní hodině — se často prolíná výchova, vzdělávání, učení, vyučování i socializace, ale každý pojem popisuje jiný aspekt.",
            },
            {
              id: "pojmy-zakladni",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Výchova",
                  definition:
                    "Cílené působení na rozvoj osobnosti, postojů, hodnot a chování.",
                },
                {
                  term: "Vzdělávání",
                  definition:
                    "Proces získávání znalostí, dovedností, postojů a kompetencí.",
                },
                {
                  term: "Vzdělání",
                  definition:
                    "Výsledek nebo dosažená úroveň dosažená vzděláváním.",
                },
                {
                  term: "Učení",
                  definition:
                    "Proces změny prostřednictvím zkušenosti, činnosti nebo poznávání.",
                },
                {
                  term: "Vyučování",
                  definition:
                    "Cílevědomá činnost pedagoga organizující a podporující učení.",
                },
                {
                  term: "Socializace",
                  definition:
                    "Vstup do společnosti a osvojování norem, rolí a vzorců chování.",
                },
                {
                  term: "Edukace",
                  definition:
                    "Širší pojem pro výchovné a vzdělávací procesy.",
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
              prompt: "Co charakterizuje výchovu?",
              choices: [
                {
                  id: "a",
                  text: "Náhodný vliv okolí bez cíle a záměru",
                },
                {
                  id: "b",
                  text: "Cílené působení na osobnost, postoje, hodnoty a chování",
                },
                {
                  id: "c",
                  text: "Pouze předávání faktů z učebnice",
                },
                {
                  id: "d",
                  text: "Výhradně biologický růst organismu",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Výchova je záměrná a cílevědomá — směřuje k rozvoji osobnosti, postojů, hodnot a chování. Není to náhoda, pouhé předávání faktů ani biologický růst.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co je vzdělávání?",
              choices: [
                {
                  id: "a",
                  text: "Hotová úroveň znalostí po ukončení studia",
                },
                {
                  id: "b",
                  text: "Jen organizace rozvrhu hodin",
                },
                {
                  id: "c",
                  text: "Proces získávání znalostí, dovedností, postojů a kompetencí",
                },
                {
                  id: "d",
                  text: "Výhradně volná hra bez učení",
                },
              ],
              correctChoiceId: "c",
              explanation:
                "Vzdělávání je proces — probíhá v čase a zahrnuje získávání znalostí, dovedností, postojů a kompetencí. Hotová úroveň je vzdělání, ne vzdělávání.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co označuje pojem vzdělání?",
              choices: [
                {
                  id: "a",
                  text: "Průběžný proces učení ve třídě",
                },
                {
                  id: "b",
                  text: "Činnost učitele při vedení hodiny",
                },
                {
                  id: "c",
                  text: "Vstup dítěte do kolektivu",
                },
                {
                  id: "d",
                  text: "Výsledek nebo dosažená úroveň ze vzdělávání",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Vzdělání je výsledek — to, čeho bylo ve vzdělávání dosaženo. Proces je vzdělávání, činnost pedagoga je vyučování a vstup do společnosti souvisí se socializací.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Žák se tři roky učí pracovat s textem, čte a píše. Co popisuje tento průběh a co až závěr studia?",
              choices: [
                {
                  id: "a",
                  text: "Průběh je vzdělání, závěr je vzdělávání",
                },
                {
                  id: "b",
                  text: "Průběh je vzdělávání, závěr je vzdělání",
                },
                {
                  id: "c",
                  text: "Obojí je totéž — vzdělávání",
                },
                {
                  id: "d",
                  text: "Průběh je vyučování, závěr je socializace",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Tříleté učení je vzdělávání — proces. Dosažená úroveň čtení a psaní na konci je vzdělání — výsledek. Zaměňovat je chyba: proces není totéž co výsledek.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co je učení?",
              choices: [
                {
                  id: "a",
                  text: "Proces změny díky zkušenosti, činnosti nebo poznávání",
                },
                {
                  id: "b",
                  text: "Výhradně činnost učitele u tabule",
                },
                {
                  id: "c",
                  text: "Pouze osvojení společenských norem",
                },
                {
                  id: "d",
                  text: "Hotový stav po ukončení školy",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Učení probíhá u žáka — mění se jeho poznání nebo dovednosti. Vyučování je činnost pedagoga, socializace se týká norem a vzdělání je výsledek, ne proces změny.",
              order: 5,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co je vyučování?",
              choices: [
                {
                  id: "a",
                  text: "Náhodná změna chování dítěte",
                },
                {
                  id: "b",
                  text: "Výsledek dosažený po maturitě",
                },
                {
                  id: "c",
                  text: "Cílevědomá činnost pedagoga podporující učení",
                },
                {
                  id: "d",
                  text: "Jen domácí příprava žáka",
                },
              ],
              correctChoiceId: "c",
              explanation:
                "Vyučování organizuje a vede učení — je to činnost pedagoga. Učení probíhá u žáka, vzdělání je výsledek a domácí příprava je jen část celku.",
              order: 6,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitel vede diskusi, žáci formulují vlastní závěry. Který pojem popisuje činnost učitele a který změnu u žáků?",
              choices: [
                {
                  id: "a",
                  text: "Učitel se učí — učení; žáci vedou — vyučování",
                },
                {
                  id: "b",
                  text: "Obojí je vzdělávání",
                },
                {
                  id: "c",
                  text: "Obojí je socializace",
                },
                {
                  id: "d",
                  text: "Učitel učí — vyučování; žáci se mění — učení",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Vyučování je činnost pedagoga (vedení diskuse, organizace). Učení je proces u žáků (formulace závěrů, změna poznání). Role se nemění — učitel neprobírá učení ve smyslu žákovy změny.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                13,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Během projektu ve třídě učitelka vede děti k ohleduplnosti ke spolužákům a zároveň je učí vyhledávat informace o tématu. Jak lze tuto situaci pojmout?",
              choices: [
                {
                  id: "a",
                  text: "Jde jen o výchovu, vzdělávání v ní není",
                },
                {
                  id: "b",
                  text: "Výchova a vzdělávání se v jedné situaci prolínají jako různé aspekty výchovně-vzdělávacího procesu",
                },
                {
                  id: "c",
                  text: "Jde jen o vzdělávání, výchova nepůsobí",
                },
                {
                  id: "d",
                  text: "Oba pojmy jsou totéž a nelze je rozlišit",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Ohleduplnost je výchovný aspekt, vyhledávání informací je vzdělávací — v jedné situaci tedy probíhá výchovně-vzdělávací proces s více aspekty. Nejde o pouhou výchovu ani pouhé vzdělávání a pojmy nejsou totéž.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt: "Co vystihuje pojem edukace?",
              choices: [
                {
                  id: "a",
                  text: "Širší pojem pro výchovné a vzdělávací procesy",
                },
                {
                  id: "b",
                  text: "Pouze formální školní vyučování",
                },
                {
                  id: "c",
                  text: "Výhradně rodinnou výchovu",
                },
                {
                  id: "d",
                  text: "Jen výsledek zkoušky",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Edukace je nadřazený, širší pojem — zahrnuje výchovné i vzdělávací procesy. Není omezena jen na školu, rodinu ani na jeden výsledek.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vychova-a-vzdelavani",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Ve školce učitelka vede kroužek: děti spolupracují, učí se pravidlům skupiny a získávají nové dovednosti. Které pojmy popisují různé aspekty této situace?",
              choices: [
                {
                  id: "a",
                  text: "Jde výhradně o vyučování, ostatní pojmy neplatí",
                },
                {
                  id: "b",
                  text: "Jde jen o socializaci, učení v předškolním věku není",
                },
                {
                  id: "c",
                  text: "Výchova, vzdělávání, učení, vyučování a socializace se prolínají",
                },
                {
                  id: "d",
                  text: "Všechny pojmy znamenají totéž",
                },
              ],
              correctChoiceId: "c",
              explanation:
                "V jedné situaci může probíhat výchova (postoje), vzdělávání (proces), učení (změna u dětí), vyučování (vedení kroužku) i socializace (pravidla skupiny) — každý pojem zachycuje jiný aspekt.",
              order: 10,
              difficulty: "medium",
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
                  text: "Výhradně tělesný vývoj dítěte",
                },
                {
                  id: "c",
                  text: "Proces vstupu do společnosti a osvojování norem, rolí a chování",
                },
                { id: "d", text: "Náhodná hra bez vlivu okolí" },
              ],
              correctChoiceId: "c",
              explanation:
                "Socializace znamená, že člověk vstupuje do společnosti a osvojuje si normy, role a chování od ostatních. Nejde jen o školní učivo ani o biologický růst — jde o sociální učení v kontaktu s lidmi.",
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
              prompt: "Kde má socializace typicky významný počátek?",
              choices: [
                { id: "a", text: "Na úřadě při vyřizování formulářů" },
                {
                  id: "b",
                  text: "V rodině, kde dítě poprvé poznává pravidla a vztahy",
                },
                { id: "c", text: "Pouze v anonymním online prostředí" },
                {
                  id: "d",
                  text: "Výhradně na pracovišti rodičů bez kontaktu s dětmi",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Rodina je důležité prostředí, kde socializace začíná — dítě se učí pravidlům, rolím a očekávanému chování od blízkých lidí. Úřad nebo anonymní online prostor tuto roli rodiny nenahrazují.",
              order: 2,
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "socializace",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "socializace",
              type: "multiple-choice",
              prompt: "Kde socializace pokračuje i po raném dětství?",
              choices: [
                { id: "a", text: "Nikde — končí v rodině" },
                { id: "b", text: "Pouze v biologickém vývoji bez vlivu okolí" },
                { id: "c", text: "Jen při memorování pojmů z učebnice" },
                {
                  id: "d",
                  text: "Ve škole, mezi vrstevníky a v dalších skupinách",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Socializace nekončí v rodině — pokračuje ve škole, mezi vrstevníky i v dalších skupinách, kde dítě poznává nová pravidla a role. Memorování pojmů ani biologický růst samy o sobě nenahrazují sociální učení.",
              order: 3,
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "socializace",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "socializace",
              type: "multiple-choice",
              prompt:
                "Dítě ve školce se u kolegyně naučí čekat na řadu u kyvadla a mluvit ke kamarádovi klidněji. Co ukazuje tento příklad?",
              choices: [
                {
                  id: "a",
                  text: "Socializaci — dítě osvojuje pravidla a očekávané chování od ostatních",
                },
                {
                  id: "b",
                  text: "Pouze memorování faktů bez vlivu okolí",
                },
                {
                  id: "c",
                  text: "Výhradně biologický růst bez sociálního významu",
                },
                {
                  id: "d",
                  text: "Náhodnou hru, která nemá vztah ke společnosti",
                },
              ],
              correctChoiceId: "a",
              explanation:
                "Dítě se učí pravidlům skupiny a očekávanému chování od vrstevníků — to je socializace. Nejde o memorování faktů z učebnice ani o náhodnou hru bez sociálního významu.",
              order: 4,
            },
          ],
          examQuestions: [],
        },
        {
          id: "vyvoj-cloveka-a-vlivy-vychovy",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Vývoj člověka a vlivy výchovy",
          summary:
            "Jak dědičnost, prostředí, výchova a vlastní aktivita společně ovlivňují vývoj dítěte a rozvoj osobnosti.",
          order: 4,
          studySections: [
            {
              id: "vysvetleni-vyvoj-vlivy",
              type: "explanation",
              title: "Vývoj člověka a vlivy výchovy",
              body:
                "Vývoj člověka ovlivňuje dědičnost a biologické předpoklady, ale také prostředí — rodina, škola, vrstevníci, kultura a životní podmínky. Výchova a vzdělávání vývoj cíleně podporují a vedou. Důležitá je i vlastní aktivita dítěte: není jen pasivním příjemcem, ale aktivně se podílí na svém rozvoji. Tyto faktory spolu působí — žádný z nich nefunguje zcela samostatně. Výchova podporuje rozvoj osobnosti, předává kulturní hodnoty, připravuje na život ve společnosti, rozvíjí samostatnost, znalosti a dovednosti a může pomáhat předcházet nežádoucímu chování. Konkrétní situace ve vývoji dítěte proto vysvětlujeme souhrou více vlivů, ne jednou zjednodušenou příčinou.",
            },
            {
              id: "pojmy-vyvoj-vlivy",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Dědičnost",
                  definition:
                    "Biologické předání vlastností od rodičů, které ovlivňuje vývoj člověka.",
                },
                {
                  term: "Biologické předpoklady",
                  definition:
                    "Vrozené tělesné a psychické dispozice, které utvářejí možnosti vývoje.",
                },
                {
                  term: "Prostředí",
                  definition:
                    "Vliv rodiny, školy, vrstevníků, kultury a životních podmínek na vývoj.",
                },
                {
                  term: "Výchova",
                  definition:
                    "Cílené působení, které podporuje, vede a formuje vývoj dítěte.",
                },
                {
                  term: "Vlastní aktivita",
                  definition:
                    "Aktivní podíl jedince na vlastním vývoji prostřednictvím činnosti a zkušeností.",
                },
                {
                  term: "Vývoj osobnosti",
                  definition:
                    "Postupné utváření charakteru, postojů, hodnot a jedinečných rysů člověka.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Který faktor ovlivňuje vývoj člověka už od narození prostřednictvím biologického předání?",
              choices: [
                { id: "a", text: "Pouze školní rozvrh" },
                { id: "b", text: "Dědičnost a biologické předpoklady" },
                { id: "c", text: "Jen kulturní tradice obce" },
                { id: "d", text: "Výhradně vlastní rozhodnutí dítěte" },
              ],
              correctChoiceId: "b",
              explanation:
                "Dědičnost a biologické předpoklady jsou vrozené dispozice předané biologicky. Škola, kultura nebo vlastní aktivita působí později a jiným způsobem — ne nahrazují biologický základ vývoje.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Co patří mezi vlivy prostředí na vývoj dítěte?",
              choices: [
                {
                  id: "a",
                  text: "Rodina, škola, vrstevníci, kultura a životní podmínky",
                },
                { id: "b", text: "Pouze dědičné geny" },
                { id: "c", text: "Jen vrozená výška a barva očí" },
                { id: "d", text: "Výhradně vnitřní motivace bez okolí" },
              ],
              correctChoiceId: "a",
              explanation:
                "Prostředí zahrnuje vztahy a podmínky, v nichž dítě žije — rodinu, školu, vrstevníky, kulturu i materiální zázemí. Dědičnost je biologický faktor, ne prostředí.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Jak působí výchova a vzdělávání na vývoj dítěte?",
              choices: [
                { id: "a", text: "Náhodně, bez cíle a záměru" },
                {
                  id: "b",
                  text: "Cíleně ho podporují a vedou",
                },
                { id: "c", text: "Pouze sledují, ale nezasahují" },
                { id: "d", text: "Nahrazují veškerou vlastní aktivitu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Výchova a vzdělávání jsou záměrné — cíleně podporují a vedou vývoj. Nejde o náhodný sled událostí ani o pasivní pozorování; také nenahrazují aktivitu samotného dítěte.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Jakou roli hraje vlastní aktivita dítěte ve vývoji?",
              choices: [
                { id: "a", text: "Žádnou — dítě je jen pasivní" },
                {
                  id: "b",
                  text: "Je aktivním faktorem vývoje",
                },
                { id: "c", text: "Nahrazuje vliv prostředí" },
                { id: "d", text: "Ruší působení výchovy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Vlastní aktivita znamená, že se dítě podílí na vývoji činností, hrou, učením i zkoušením. Není pasivním objektem a nenahrazuje ostatní faktory — doplňuje je.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Holčička v MŠ rychle rozšiřuje slovní zásobu: rodiče s ní doma často mluví, ve třídě má bohaté podněty a sama se ptá na nová slova. Jak nejlépe vysvětlit tento pokrok?",
              choices: [
                { id: "a", text: "Jen díky dědičnosti" },
                { id: "b", text: "Jen díky rodině" },
                {
                  id: "c",
                  text: "Spolupůsobí dědičnost, prostředí, výchova i vlastní aktivita",
                },
                { id: "d", text: "Jen proto, že chodí do školky" },
              ],
              correctChoiceId: "c",
              explanation:
                "Rychlý pokrok ve slovní zásobě nelze připsat jedinému faktoru. Biologické předpoklady, domácí i školní prostředí, výchovné působení i vlastní zvídavost dítěte se vzájemně doplňují.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Jak výchova přispívá k rozvoji dítěte v pedagogickém významu?",
              choices: [
                { id: "a", text: "Podporuje rozvoj osobnosti" },
                { id: "b", text: "Potlačuje veškerou individualitu" },
                { id: "c", text: "Řeší jen biologický růst" },
                { id: "d", text: "Nahrazuje vliv prostředí" },
              ],
              correctChoiceId: "a",
              explanation:
                "Jedním z cílů výchovy je podpora rozvoje osobnosti — charakteru, postojů a hodnot. Nejde o potlačení individuality ani o nahrazení prostředí či biologického růstu.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Jak výchova pomáhá dítěti vstoupit do společenského života?",
              choices: [
                { id: "a", text: "Předává kulturní hodnoty a připravuje na život ve společnosti" },
                { id: "b", text: "Odstraňuje vliv kultury" },
                { id: "c", text: "Izoluje dítě od vrstevníků" },
                { id: "d", text: "Zaměřuje se jen na tělesný vývoj" },
              ],
              correctChoiceId: "a",
              explanation:
                "Výchova předává kulturní hodnoty, pravidla a zvyklosti a pomáhá dítěti orientovat se ve společnosti. Neizoluje je ani neignoruje kulturní kontext.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "V čem může výchova podpořit dítě kromě předávání pravidel?",
              choices: [
                { id: "a", text: "Jen v kontrole každého kroku" },
                {
                  id: "b",
                  text: "V rozvoji samostatnosti, znalostí, dovedností a využití schopností",
                },
                { id: "c", text: "Pouze v omezení vlastní aktivity" },
                { id: "d", text: "V nahrazení zájmu dítěte" },
              ],
              correctChoiceId: "b",
              explanation:
                "Výchova rozvíjí samostatnost, znalosti a dovednosti a pomáhá dítěti využívat své schopnosti. Nejde o neustálou kontrolu ani o potlačení jeho aktivního přístupu.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Jak může výchova působit vůči nežádoucímu chování dítěte?",
              choices: [
                { id: "a", text: "Může mu pomoci předcházet" },
                { id: "b", text: "Musí ho vždy ignorovat" },
                { id: "c", text: "Nemá na chování žádný vliv" },
                { id: "d", text: "Snižuje odpovědnost dítěte na nulu" },
              ],
              correctChoiceId: "a",
              explanation:
                "Výchovné vedení, jasná pravidla a podpora pozitivního chování mohou nežádoucímu jednání předcházet. Výchova chování ovlivňuje, ale neznamená ignorovat problémy ani sejmout dítěti odpovědnost.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "vyvoj-cloveka-a-vlivy-vychovy",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vyvoj-cloveka-a-vlivy-vychovy",
              type: "multiple-choice",
              prompt:
                "Chlapec ve školce často křičí a nerespektuje pravidla. Kolegyně říká: „Je to jen špatná výchova doma.“ Proč je to zjednodušené vysvětlení?",
              choices: [
                { id: "a", text: "Stačí vinit pouze rodinu" },
                { id: "b", text: "Chování určuje jen dědičnost" },
                {
                  id: "c",
                  text: "Vývoj a chování ovlivňuje souhra více faktorů",
                },
                { id: "d", text: "Na chování nemá vliv prostředí" },
              ],
              correctChoiceId: "c",
              explanation:
                "Chování dítěte nelze vysvětlit jedinou příčinou. Spolupůsobí dědičnost, prostředí školky i domova, výchovné přístupy a vlastní prožívání a reakce dítěte. Pedagogicky správné je hledat souhru vlivů.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "teorie-praxe-a-odborne-zdroje",
          subjectId: "obecna-pedagogika",
          unitId: "zakladni-pojmy",
          title: "Teorie, praxe a odborné zdroje",
          summary:
            "Jak pedagogická teorie a praxe spolupracují při odborném rozhodování a jak pracovat s různými typy věrohodných zdrojů.",
          order: 5,
          studySections: [
            {
              id: "vysvetleni-teorie-praxe-zdroje",
              type: "explanation",
              title: "Teorie, praxe a odborné zdroje",
              body:
                "Pedagogická teorie vysvětluje výchovné jevy a vztahy mezi nimi, zobecňuje poznatky z více situací a podporuje odborné rozhodování. Pedagogická praxe řeší konkrétní výchovné situace v reálném prostředí. Teorie a praxe se vzájemně ovlivňují: teorie praxi vede, praxe teorii ověřuje a rozvíjí. Odborná rozhodnutí by neměla vycházet jen z intuice. Při práci se zdroji rozlišujeme učebnici, odborný článek, právní předpis a kurikulární dokument. Odborný zdroj se liší od populárně pojatého textu nebo neověřeného internetového tvrzení. Věrohodnost posuzujeme podle autorství, odbornosti, důkazů, vydavatele, data a ověřitelnosti. Správná práce se zdrojem znamená zaznamenat hlavní myšlenku a uvést zdroj — ne kopírovat text bez kontextu.",
            },
            {
              id: "pojmy-teorie-praxe-zdroje",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Pedagogická teorie",
                  definition:
                    "Soustava poznatků vysvětlující výchovné jevy a podporující odborné rozhodování.",
                },
                {
                  term: "Pedagogická praxe",
                  definition:
                    "Řešení konkrétních výchovných situací v reálném prostředí.",
                },
                {
                  term: "Odborný zdroj",
                  definition:
                    "Text nebo dokument opřený o odbornost, důkazy a ověřitelnost.",
                },
                {
                  term: "Věrohodnost zdroje",
                  definition:
                    "Míra důvěryhodnosti podle autorství, odbornosti, důkazů a kontextu vydání.",
                },
                {
                  term: "Citace",
                  definition:
                    "Uvedení zdroje, ze kterého čerpáme myšlenku nebo informaci.",
                },
                {
                  term: "Kritické posuzování informací",
                  definition:
                    "Prověřování tvrzení podle odbornosti, důkazů a ověřitelnosti.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Učitelka pozoruje, že po společné hře děti lépe spolupracují. Co může pedagogická teorie s takovým pozorováním udělat?",
              choices: [
                { id: "a", text: "Vysvětlit vztahy mezi výchovnými jevy" },
                { id: "b", text: "Ignorovat souvislosti mezi jevy" },
                { id: "c", text: "Nahradit veškerou praxi" },
                { id: "d", text: "Zaměřit se jen na jednu náhodnou zkušenost" },
              ],
              correctChoiceId: "a",
              explanation:
                "Teorie pomáhá pochopit, proč se jevy vyskytují a jak spolu souvisí — například hra a spolupráce. Nejde o nahrazení praxe ani o izolovaný dojem z jedné situace.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Proč pedagogická teorie nebere závěr z jediné zkušenosti jedné třídy jako obecné pravidlo?",
              choices: [
                { id: "a", text: "Protože zobecňuje poznatky z více situací" },
                { id: "b", text: "Protože praxe neexistuje" },
                { id: "c", text: "Protože teorie je jen názor učitele" },
                { id: "d", text: "Protože jedna třída stačí vždy" },
              ],
              correctChoiceId: "a",
              explanation:
                "Teorie staví na opakovaných a srovnatelných zkušenostech z více situací, ne na jednom případě. Jedna třída může inspirovat, ale sama o sobě nepostačuje pro obecné závěry.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Pedagožka vybírá postup při opakovaném konfliktu ve třídě. Jak jí může teorie pomoci?",
              choices: [
                { id: "a", text: "Poskytne oporu pro odborné rozhodnutí" },
                { id: "b", text: "Rozhodne za ni bez znalosti situace" },
                { id: "c", text: "Nahradí pozorování dětí" },
                { id: "d", text: "Zabrání jakékoli změně postupu" },
              ],
              correctChoiceId: "a",
              explanation:
                "Teorie nabízí vysvětlení a ověřené poznatky, které podporují promyšlené rozhodnutí. Nenahrazuje znalost konkrétní třídy ani neznamená rigidní návod bez úvahy.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Dítě ve školce má záchvat pláče při příchodu rodiče. Která složka pedagogiky řeší tuto konkrétní situaci?",
              choices: [
                { id: "a", text: "Pedagogická praxe" },
                { id: "b", text: "Pouze memorování pojmů" },
                { id: "c", text: "Jen tvorba učebnic" },
                { id: "d", text: "Výhradně statistika bez jednání" },
              ],
              correctChoiceId: "a",
              explanation:
                "Praxe znamená jednat v konkrétní situaci — uklidnit dítě, komunikovat s rodinou, upravit přístup. Memorování pojmů nebo distanční práce s texty samy situaci neřeší.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Učitel aplikuje teorii kooperativního učení, ale ve třídě zjistí, že skupiny potřebují jiné vedení. Co ukazuje tento příklad?",
              choices: [
                {
                  id: "a",
                  text: "Teorie a praxe se vzájemně ovlivňují",
                },
                { id: "b", text: "Teorie praxi nikdy neovlivní" },
                { id: "c", text: "Praxe teorii nemůže obohatit" },
                { id: "d", text: "Teorie a praxe jsou oddělené světy" },
              ],
              correctChoiceId: "a",
              explanation:
                "Teorie vedla postup ve třídě, praxe ukázala potřebu úpravy — obě se ovlivňují. Teorie není uzavřená kniha a praxe není slepé opakování bez reflexe.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Nová chůva chce zavést pravidla ve skupině jen podle pocitu „co mi přijde správné“, bez poznání dětí a bez odborných podkladů. Co je na tom problém?",
              choices: [
                { id: "a", text: "Odborné rozhodnutí nemá stát jen na intuici" },
                { id: "b", text: "Intuice je vždy dostatečná" },
                { id: "c", text: "Praxe nepotřebuje žádnou reflexi" },
                { id: "d", text: "Teorie je vždy zbytečná" },
              ],
              correctChoiceId: "a",
              explanation:
                "Intuice může pomoci, ale odborné rozhodování má vycházet také z poznání situace, teorie a ověřených zdrojů. Spoléhat jen na pocit bez podkladů je rizikové.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Studentka třídí materiály pro seminář. Který pár správně spojuje typ zdroje?",
              choices: [
                {
                  id: "a",
                  text: "Učebnice, odborný článek, zákon a RVP jsou různé typy zdrojů",
                },
                { id: "b", text: "Všechny jsou stejný typ populárního článku" },
                { id: "c", text: "Zákon je učebnice, RVP je blog" },
                { id: "d", text: "Odborný článek je vždy neověřený post" },
              ],
              correctChoiceId: "a",
              explanation:
                "Každý materiál má jinou funkci: učebnice systematizuje výuku, článek přináší odborný rozbor, zákon stanovuje pravidla, RVP rámcuje vzdělávání. Neměly by se zaměňovat.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Který materiál je nejspíš odborný zdroj, nikoli populární nebo neověřený text?",
              choices: [
                { id: "a", text: "Recenzovaný článek v pedagogickém časopise" },
                { id: "b", text: "Anonymní komentář pod videem" },
                { id: "c", text: "Nepodepsaný příspěvek bez zdrojů" },
                { id: "d", text: "Zkratkovitý blog bez autorství" },
              ],
              correctChoiceId: "a",
              explanation:
                "Odborný článek v recenzovaném časopise prochází odbornou kontrolou. Anonymní internetové texty často postrádají autorství, důkazy i ověřitelnost.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Student porovnává dva texty o výchově. První má uvedeného autora-pedagoga, datum, vydavatele a odkazy na výzkum. Druhý je starší anonymní příspěvek bez zdrojů. Co má posoudit především?",
              choices: [
                { id: "a", text: "Délku a vzhled textu" },
                {
                  id: "b",
                  text: "Autorství, odbornost, důkazy a ověřitelnost",
                },
                { id: "c", text: "Jen to, zda se mu text líbí" },
                { id: "d", text: "Jen barvu obálky knihy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Věrohodnost zdroje posuzujeme podle toho, kdo text napsal, zda má odbornost, zda uvádí důkazy, kdo ho vydal, jak je aktuální a zda lze tvrzení ověřit. Délka nebo estetika nestačí.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zakladni-pojmy",
                "teorie-praxe-a-odborne-zdroje",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "teorie-praxe-a-odborne-zdroje",
              type: "multiple-choice",
              prompt:
                "Studentka píše referát a zkopíruje odstavec z učebnice bez uvedení zdroje a bez vlastního shrnutí. Co měla udělat správně?",
              choices: [
                { id: "a", text: "Kopírovat text bez kontextu" },
                {
                  id: "b",
                  text: "Zaznamenat hlavní myšlenku a uvést zdroj",
                },
                { id: "c", text: "Předstírat vlastní autorství cizího textu" },
                { id: "d", text: "Vynechat jakoukoli práci se zdrojem" },
              ],
              correctChoiceId: "b",
              explanation:
                "Správná práce se zdrojem znamená pochopit hlavní myšlenku, formulovat ji vlastními slovy a uvést, odkud čerpáme. Kopírování bez citace a kontextu je odborně i eticky chybné.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
      ],
    },
    {
      id: "historicky-vyvoj-a-soucasne-trendy",
      subjectId: "obecna-pedagogika",
      title: "Historický vývoj a současné trendy",
      description:
        "Výchova v raných společnostech, středověké a raně novověké školství a pedagogické myšlení J. A. Komenského.",
      order: 2,
      lessons: [
        {
          id: "vychova-v-nejstarsich-spolecnostech",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Výchova v nejstarších společnostech",
          summary:
            "Jak se v raných společnostech předávala zkušenost a jak se lišily výchovné cíle podle potřeb společnosti — na příkladu Sparty a Athén.",
          order: 1,
          studySections: [
            {
              id: "vysvetleni-nejstarsi-spolecnosti",
              type: "explanation",
              title: "Výchova v nejstarších společnostech",
              body:
                "V nejstarších společnostech se zkušenost předávala hlavně napodobováním, účastí na práci, tradicích, rodině a životě společenství. Výchovné cíle se měnily podle potřeb společnosti. Ve Spartě se kladl důraz na disciplínu, tělesnou odolnost a službu státu. V Athénách se více zdůrazňoval rozvoj těla, rozumu, umění a občanského života. Důležité není memorovat data, ale chápat, že výchova se mění se společenskými podmínkami.",
            },
            {
              id: "pojmy-nejstarsi-spolecnosti",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Napodobování",
                  definition:
                    "Učení pozorováním a následováním chování druhých.",
                },
                {
                  term: "Tradice",
                  definition:
                    "Předávané zvyky, znalosti a očekávané chování společenství.",
                },
                {
                  term: "Společenství",
                  definition:
                    "Skupina lidí, v níž dítě roste a učí se pravidlům společného života.",
                },
                {
                  term: "Sparta",
                  definition:
                    "Společnost klíčící disciplínu, tělesnou odolnost a službu státu.",
                },
                {
                  term: "Athény",
                  definition:
                    "Společnost s větším důrazem na tělo, rozum, umění a občanský život.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt:
                "Jak se v nejstarších společnostech často předávala zkušenost?",
              choices: [
                { id: "a", text: "Pouze formální školní výuka bez praxe" },
                { id: "b", text: "Napodobováním a účastí na činnostech" },
                { id: "c", text: "Výhradně ústním předáváním bez pozorování" },
                { id: "d", text: "Bez vlivu okolí a lidí" },
              ],
              correctChoiceId: "b",
              explanation:
                "V raných společnostech se děti učily sledováním druhých a zapojením do práce a života okolí. Písemné učebnice nebo distanční výuka nebyly typickým způsobem předávání zkušenosti.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt:
                "Kdo měl v nejstarších společnostech významnou výchovnou roli?",
              choices: [
                { id: "a", text: "Pouze státní úředníci" },
                { id: "b", text: "Výhradně vzdálení příbuzní bez společenství" },
                { id: "c", text: "Rodina a společenství" },
                { id: "d", text: "Nikdo — děti se vychovaly samy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Výchova probíhala v rodině a ve společenství, kde dítě poznávalo pravidla, vzory chování a očekávání. Nejde o izolovaný proces bez lidí kolem.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt:
                "Jak tradice a práce pomáhaly ve výchově v raných společnostech?",
              choices: [
                { id: "a", text: "Bránily jakémukoli učení" },
                { id: "b", text: "Nahrazovaly veškerou rodinnou výchovu" },
                { id: "c", text: "Měly jen okrasnou roli bez vlivu" },
                { id: "d", text: "Předávaly znalosti a očekávané chování" },
              ],
              correctChoiceId: "d",
              explanation:
                "Tradice a účast na práci umožňovaly předat, co společenství považuje za důležité vědět a jak se má chovat. Nejde o proces bez výchovného významu.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt:
                "Proč se výchovné cíle v nejstarších společnostech měnily?",
              choices: [
                { id: "a", text: "Podle potřeb společnosti" },
                { id: "b", text: "Náhodně bez souvislosti s životem lidí" },
                { id: "c", text: "Podle módních trendů bez vztahu k životu" },
                { id: "d", text: "Vůbec se neměnily" },
              ],
              correctChoiceId: "a",
              explanation:
                "Společnost vychovávala tak, aby lidé zvládli podmínky a úkoly, které od nich vyžadovala. Cíle výchovy tedy souvisely s potřebami společnosti, ne s náhodou.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt: "Co ve Spartě patřilo mezi důraz ve výchově?",
              choices: [
                { id: "a", text: "Výhradně volná tvorba bez pravidel" },
                { id: "b", text: "Jen umělecká výchova bez řádu" },
                { id: "c", text: "Disciplína" },
                { id: "d", text: "Úplné vyloučení tělesné přípravy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Spartská výchova klade důraz na disciplínu a přísný řád. Volnost bez pravidel nebo vyloučení tělesné přípravy odpovídá spíše jinému pojetí výchovy.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt: "Co ve Spartě spolu patřilo k výchovným cílům?",
              choices: [
                { id: "a", text: "Pouze rozumová hra bez těla" },
                { id: "b", text: "Jen soukromý život bez vztahu ke státu" },
                { id: "c", text: "Výhradně umělecká činnost" },
                {
                  id: "d",
                  text: "Tělesná odolnost a služba státu",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Sparta klade důraz na tělesnou odolnost a připravenost sloužit státu. Rozvoj rozumu, umění nebo občanského života patří spíše k athénskému pojetí.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt: "Co v Athénách více zdůrazňovala výchova?",
              choices: [
                { id: "a", text: "Jen tělesnou přípravu pro stát" },
                { id: "b", text: "Rozvoj těla, rozumu, umění a občanského života" },
                { id: "c", text: "Pouze přísnou vojenskou kázeň" },
                { id: "d", text: "Výhradně práci bez vzdělání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Athény usilovaly o širší rozvoj člověka — těla, rozumu, umění i účasti v občanském životě. Přísná vojenská kázeň a jednostranná příprava ke státu jsou spíše spojeny se Spartou.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vychova-v-nejstarsich-spolecnostech",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vychova-v-nejstarsich-spolecnostech",
              type: "multiple-choice",
              prompt:
                "Jedna polis klade důraz na přísnou kázeň a službu státu, druhá na rozum, umění a občanský život. Který pár odpovídá Spartě a Athénám?",
              choices: [
                { id: "a", text: "Obě stejně — jen umění" },
                { id: "b", text: "Sparta — rozum; Athény — jen kázeň" },
                {
                  id: "c",
                  text: "Sparta — kázeň a stát; Athény — rozum a občanství",
                },
                { id: "d", text: "Obě bez vytyčených výchovných cílů" },
              ],
              correctChoiceId: "c",
              explanation:
                "Sparta zdůrazňuje disciplínu, tělesnou odolnost a službu státu. Athény kladou větší důraz na rozum, umění a občanský život. Porovnání pomáhá pochopit rozdíl pojetí výchovy.",
              order: 8,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "stredoveke-a-rane-novoveke-skolstvi",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Středověké a raně novověké školství",
          summary:
            "Vliv církve, typy škol, univerzity a postupné rozšiřování vzdělání v období humanismu, renesance a reformace.",
          order: 2,
          studySections: [
            {
              id: "vysvetleni-stredoveke-skolstvi",
              type: "explanation",
              title: "Středověké a raně novověké školství",
              body:
                "Ve středověku silně ovlivňovala výchovu a vzdělávání církev. Existovaly klášterní, katedrální a městské školy. Vzdělání nebylo dostupné celé populaci. Postupně vznikaly univerzity jako nová forma vyššího vzdělávání. Humanismus a renesance zvýraznily člověka, rozum a světské vzdělávání. Reformace podpořila šíření gramotnosti. Přístup ke vzdělání se postupně rozšiřoval. Školství souviselo s náboženstvím, společenským postavením a hospodářskými potřebami.",
            },
            {
              id: "pojmy-stredoveke-skolstvi",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Klášterní škola",
                  definition:
                    "Škola spojená s klášterním prostředím ve středověku.",
                },
                {
                  term: "Katedrální škola",
                  definition:
                    "Škola spojená s katedrálním prostředím ve středověku.",
                },
                {
                  term: "Městská škola",
                  definition:
                    "Škola ve městském prostředí ve středověku.",
                },
                {
                  term: "Univerzita",
                  definition:
                    "Vyšší vzdělávací instituce, která se postupně vyvinula v tomto období.",
                },
                {
                  term: "Humanismus",
                  definition:
                    "Směr zdůrazňující člověka, rozum a lidskou důstojnost.",
                },
                {
                  term: "Renesance",
                  definition:
                    "Období posílení zájmu o člověka, kulturu a světské vzdělávání.",
                },
                {
                  term: "Reformace",
                  definition:
                    "Hnutí, které podpořilo šíření gramotnosti.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt:
                "Co silně ovlivňovalo středověké vzdělávání?",
              choices: [
                { id: "a", text: "Pouze rodinná výchova bez institucí" },
                { id: "b", text: "Církev" },
                { id: "c", text: "Výhradně obchodní cechy bez škol" },
                { id: "d", text: "Jen soukromé koníčky bez institucí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Ve středověku měla církev zásadní vliv na výchovu a školství. Ostatní možnosti nepopisují hlavní rámec středověkého vzdělávání.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt:
                "Co platí o klášterních, katedrálních a městských školách?",
              choices: [
                { id: "a", text: "Všechny byly úplně stejné" },
                { id: "b", text: "Ve středověku vůbec neexistovaly" },
                { id: "c", text: "Byly různými školními prostředími období" },
                { id: "d", text: "Byly jen jedním jednotným typem školy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Ve středověku působily různé typy škol v odlišných prostředích — klášterním, katedrálním a městském. Nejde o jeden jednotný typ školy.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt:
                "Jak bylo vzdělání ve středověku a raném novověku dostupné?",
              choices: [
                { id: "a", text: "Povinně a rovně každému bez rozdílu" },
                { id: "b", text: "Vůbec nikomu" },
                { id: "c", text: "Jen elitě bez jakékoli výjimky" },
                { id: "d", text: "Ne všem stejně — jen části populace" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vzdělání nebylo dostupné celé populaci rovným způsobem. Souviselo s postavením, prostředím a podmínkami doby.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt:
                "Co představovaly univerzity v tomto období?",
              choices: [
                { id: "a", text: "Pouze předškolní zařízení pro malé děti" },
                { id: "b", text: "Novou důležitou formu vyššího vzdělávání" },
                { id: "c", text: "Jen místa bohoslužby bez výuky" },
                { id: "d", text: "Výhradně místa bez vzdělávacího významu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Univerzity se postupně staly významnou formou vyššího vzdělávání. Nejde o mateřské školy ani o instituce bez vzdělávacího významu.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt: "Co zdůrazňoval humanismus?",
              choices: [
                { id: "a", text: "Pouze memorování bez myšlení" },
                { id: "b", text: "Výhradně tělesný výkon bez vzdělání" },
                { id: "c", text: "Člověka a rozum" },
                { id: "d", text: "Úplné odmítnutí vzdělávání" },
              ],
              correctChoiceId: "c",
              explanation:
                "Humanismus klade důraz na člověka, jeho důstojnost a rozum. Memorování bez porozumění nebo odmítnutí vzdělávání humanismus nevyjadřuje.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt: "Co posílila renesance ve vzdělávání?",
              choices: [
                { id: "a", text: "Zákaz jakékoli kultury" },
                { id: "b", text: "Úplný zákaz učení" },
                { id: "c", text: "Pouze izolaci od života" },
                { id: "d", text: "Zájem o světské vzdělávání" },
              ],
              correctChoiceId: "d",
              explanation:
                "Renesance posílila zájem o člověka, kulturu a světské vzdělávání. Zákaz učení nebo kultury s renesancí nesouvisí.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt: "Jak reformace souvisela s gramotností?",
              choices: [
                { id: "a", text: "Podpořila její šíření" },
                { id: "b", text: "Zakázala čtení úplně" },
                { id: "c", text: "Neměla žádný vztah ke vzdělání" },
                { id: "d", text: "Zrušila veškeré školy" },
              ],
              correctChoiceId: "a",
              explanation:
                "Reformace podpořila šíření gramotnosti. Odmítnutí čtení nebo zrušení škol neodpovídá této roli reformace ve vzdělávání.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "stredoveke-a-rane-novoveke-skolstvi",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "stredoveke-a-rane-novoveke-skolstvi",
              type: "multiple-choice",
              prompt:
                "Jak se v průběhu středověku a raného novověku měnil přístup ke vzdělání?",
              choices: [
                { id: "a", text: "Úplně zmizel pro všechny" },
                { id: "b", text: "Zůstal navždy jen pro jednoho člověka" },
                {
                  id: "c",
                  text: "Postupně se rozšiřoval na širší část společnosti",
                },
                { id: "d", text: "Přestal souviset s potřebami společnosti" },
              ],
              correctChoiceId: "c",
              explanation:
                "Přístup ke vzdělání se postupně rozšiřoval, i když zpočátku nebyl rovný pro všechny. Vzdělávání zůstalo spojené s potřebami společnosti.",
              order: 8,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "jan-amos-komensky",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Jan Amos Komenský",
          summary:
            "Komenského zásady všeobecného, přiměřeného a názorného vzdělávání a jeho významná díla v základním rozsahu.",
          order: 3,
          studySections: [
            {
              id: "vysvetleni-komensky",
              type: "explanation",
              title: "Jan Amos Komenský",
              body:
                "Jan Amos Komenský prosazoval vzdělávání pro všechny lidi. Zdůrazňoval přiměřenost věku, názorné a konkrétní učení, postup od jednoduchého ke složitému a od známého k neznámému. Škola má spojovat učení s reálným životem. Cenil mateřský jazyk a odmítal bezmyšlenkovité memorování i nevhodné tresty. Mezi významná díla patří Velká didaktika, Informatorium školy mateřské, Svět v obrazech a Brána jazyků otevřená.",
            },
            {
              id: "pojmy-komensky",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Všeobecné vzdělávání",
                  definition:
                    "Vzdělávání dostupné a určené pro všechny lidi.",
                },
                {
                  term: "Přiměřenost",
                  definition:
                    "Přizpůsobení výuky věku a možnostem žáka.",
                },
                {
                  term: "Názornost",
                  definition:
                    "Učení prostřednictvím pozorování, obrazů, předmětů a zkušenosti.",
                },
                {
                  term: "Systematičnost",
                  definition:
                    "Uspořádaný postup od jednoduchého ke složitému a od známého k neznámému.",
                },
                {
                  term: "Mateřský jazyk",
                  definition:
                    "Jazyk, jímž se dítě učí nejpřirozeněji a který Komenský cení.",
                },
                {
                  term: "Velká didaktika",
                  definition: "Komenského dílo o výchově a vyučování.",
                },
                {
                  term: "Informatorium školy mateřské",
                  definition:
                    "Komenského dílo věnované péči o malé děti a předškolní výchově.",
                },
                {
                  term: "Svět v obrazech",
                  definition:
                    "Komenského názorné dílo pro poznávání světa.",
                },
                {
                  term: "Brána jazyků otevřená",
                  definition:
                    "Komenského dílo o výuce jazyků.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt: "Komu mělo podle Komenského patřit vzdělávání?",
              choices: [
                { id: "a", text: "Pouze vybrané vrstvě" },
                { id: "b", text: "Všem lidem" },
                { id: "c", text: "Nikomu — škola je zbytečná" },
                { id: "d", text: "Jen dospělým bez dětí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Komenský prosazoval všeobecné vzdělávání — vzdělání má být dostupné všem, ne jen úzké skupině.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Co znamená přiměřenost výuky podle Komenského?",
              choices: [
                { id: "a", text: "Stejný obsah pro všechny bez ohledu na věk" },
                { id: "b", text: "Výuka jen pro dospělé" },
                { id: "c", text: "Přizpůsobení věku a možnostem žáka" },
                { id: "d", text: "Náhodný výběr témat" },
              ],
              correctChoiceId: "c",
              explanation:
                "Přiměřenost znamená, že výuka odpovídá věku a schopnostem dítěte. Stejný obsah pro všechny bez ohledu na vývoj tomu odporuje.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt: "Co je názorné učení podle Komenského?",
              choices: [
                { id: "a", text: "Jen čtení abstraktních textů" },
                { id: "b", text: "Učení bez kontaktu se skutečností" },
                { id: "c", text: "Výhradně opakování bez pozorování" },
                {
                  id: "d",
                  text: "Učení pozorováním, obrazy, předměty a zkušeností",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Názornost využívá přímé pozorování, obrazy a předměty, aby dítě pochopilo látku konkrétně. Abstraktní výklad bez zkušenosti jí neodpovídá.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Jakým směrem má podle Komenského postupovat učení?",
              choices: [
                { id: "a", text: "Od nejtěžšího k nejjednoduššímu" },
                { id: "b", text: "Od jednoduchého ke složitému" },
                { id: "c", text: "Bez jakéhokoli pořadí" },
                { id: "d", text: "Jen náhodným skákáním mezi tématy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Komenský zdůrazňuje systematičnost — nejprve jednodušší podklady, poté složitější látky. Začínat nejtěžším nebo chaoticky brání porozumění.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Od čeho má učitel podle Komenského vycházet při výkladu nové látky?",
              choices: [
                { id: "a", text: "Od známého k neznámému" },
                { id: "b", text: "Od úplně cizího bez návaznosti" },
                { id: "c", text: "Jen z náhodných příkladů" },
                { id: "d", text: "Výhradně z hotových pouček bez vazby" },
              ],
              correctChoiceId: "a",
              explanation:
                "Nové poznatky mají navazovat na to, co dítě už zná. Východisko z neznámého bez opory v dřívějších zkušenostech ztěžuje učení.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Jak má podle Komenského souviset školní učení s životem?",
              choices: [
                { id: "a", text: "Má být odděleno od praxe" },
                { id: "b", text: "Má být jen teoretické bez využití" },
                { id: "c", text: "Má být spojeno s reálným životem" },
                { id: "d", text: "Nemá mít žádný smysl" },
              ],
              correctChoiceId: "c",
              explanation:
                "Komenský chce, aby se v škole učilo to, co má význam v životě. Oddělení školy od reality odporuje jeho pojetí vzdělávání.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt: "Jaký postoj měl Komenský k mateřskému jazyku?",
              choices: [
                { id: "a", text: "Považoval ho za zbytečný" },
                { id: "b", text: "Zakazoval ho ve škole" },
                { id: "c", text: "Nevěnoval mu pozornost" },
                { id: "d", text: "Cenil ho ve výchově a učení" },
              ],
              correctChoiceId: "d",
              explanation:
                "Komenský zdůrazňoval význam mateřského jazyka pro přirozené učení. Odmítání nebo ignorování mateřštiny jeho pojetí nevyjadřuje.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt: "Co Komenský odmítal ve výuce?",
              choices: [
                { id: "a", text: "Názorné pomůcky" },
                {
                  id: "b",
                  text: "Bezmyšlenkovité memorování a nevhodné tresty",
                },
                { id: "c", text: "Přiměřenost věku" },
                { id: "d", text: "Všeobecné vzdělávání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Komenský kritizoval učení nazpaměť bez porozumění a tresty, které nevedou k rozvoji. Názornost, přiměřenost a všeobecné vzdělávání naopak podporoval.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Které dílo je Komenského spis o výchově a vyučování?",
              choices: [
                { id: "a", text: "Svět v obrazech" },
                { id: "b", text: "Informatorium školy mateřské" },
                { id: "c", text: "Velká didaktika" },
                { id: "d", text: "Jiný pedagogický spis" },
              ],
              correctChoiceId: "c",
              explanation:
                "Mezi Komenského významná díla v základním rozsahu patří Velká didaktika, Informatorium školy mateřské, Svět v obrazech a Brána jazyků otevřená. Velká didaktika se věnuje výchově a vyučování; ostatní díla mají jiné zaměření.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "jan-amos-komensky",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "jan-amos-komensky",
              type: "multiple-choice",
              prompt:
                "Učitelka nejprve ukáže dětem reálné předměty a obrazy, teprve potom vysvětlí pojmy. Který Komenského princip tím uplatňuje?",
              choices: [
                { id: "a", text: "Názornost" },
                { id: "b", text: "Bezmyšlenkovité memorování" },
                { id: "c", text: "Nevhodné trestání" },
                { id: "d", text: "Oddělení školy od života" },
              ],
              correctChoiceId: "a",
              explanation:
                "Použití předmětů a obrazů před abstraktním výkladem je názorné učení — dítě poznává konkrétně. Memorování, tresty nebo oddělení od života jsou opakem Komenského zásad.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Vývoj moderního školství a učitelské profese",
          summary:
            "Povinná školní docházka, profesionalizace učitelství a kompetence současného pedagoga v praxi.",
          order: 4,
          studySections: [
            {
              id: "vysvetleni-moderni-skolstvi",
              type: "explanation",
              title: "Vývoj moderního školství a učitelské profese",
              body:
                "Povinná školní docházka postupně zpřístupnila vzdělávání širším vrstvám obyvatelstva. Učitelství se profesionalizovalo a rozvíjela se odborná příprava učitelů. Role učitele se měnila od autoritativního předávání poznatků k podpoře aktivního učení. Současný pedagog potřebuje odborné, pedagogické a psychologické znalosti, umí plánovat, komunikovat s dětmi a rodiči a používat diagnostické a hodnoticí dovednosti. Pracuje s různorodou skupinou, spolupracuje s kolegy, jedná eticky, reflektuje vlastní práci a průběžně se dále vzdělává.",
            },
            {
              id: "pojmy-moderni-skolstvi",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Povinná školní docházka",
                  definition:
                    "Závazek navštěvovat školu, který rozšířil přístup ke vzdělání.",
                },
                {
                  term: "Profesionalizace",
                  definition:
                    "Postupné zvyšování odborných požadavků na učitelskou profesi.",
                },
                {
                  term: "Profesní kompetence",
                  definition:
                    "Soubor znalostí a dovedností potřebných pro výkon pedagogické profese.",
                },
                {
                  term: "Aktivní učení",
                  definition:
                    "Učení, při kterém se žák aktivně podílí na svém rozvoji.",
                },
                {
                  term: "Reflexe",
                  definition:
                    "Zamyšlení pedagoga nad vlastní praxí a jejím zdokonalováním.",
                },
                {
                  term: "Další vzdělávání",
                  definition:
                    "Průběžné rozvíjení odbornosti pedagoga po ukončení přípravy.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Jaký význam měla povinná školní docházka pro společnost?",
              choices: [
                { id: "a", text: "Zrušila veškeré školství" },
                { id: "b", text: "Rozšířila přístup ke vzdělání" },
                { id: "c", text: "Zpřístupnila vzdělání jen jedné vrstvě" },
                { id: "d", text: "Neměla vliv na dostupnost školy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Povinná školní docházka postupně otevřela vzdělávání širším vrstvám obyvatelstva. Nejde o jeho omezení ani o zrušení škol.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt: "Co znamená profesionalizace učitelství?",
              choices: [
                { id: "a", text: "Úplné vyloučení přípravy učitelů" },
                { id: "b", text: "Náhodný výběr bez odbornosti" },
                { id: "c", text: "Rostoucí odborné požadavky na učitele" },
                { id: "d", text: "Zánik učitelské profese" },
              ],
              correctChoiceId: "c",
              explanation:
                "Profesionalizace znamená, že na učitele se kladou vyšší odborné nároky a očekává se profesní příprava. Nejde o odmítnutí odbornosti.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Co je součástí profesionalizace učitelství?",
              choices: [
                { id: "a", text: "Absence jakékoli přípravy" },
                { id: "b", text: "Pouze náhodná praxe bez studia" },
                { id: "c", text: "Zákaz dalšího vzdělávání" },
                { id: "d", text: "Odborná příprava učitelů" },
              ],
              correctChoiceId: "d",
              explanation:
                "Profesionalizace zahrnuje rozvoj odborné přípravy učitelů. Bez přípravy a dalšího rozvoje profesionalizace nedává smysl.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt: "Jak se měnila role učitele v moderním školství?",
              choices: [
                { id: "a", text: "Od aktivního učení k pasivnímu předčítání" },
                {
                  id: "b",
                  text: "Od předávání poznatků k podpoře aktivního učení",
                },
                { id: "c", text: "Vůbec se neměnila" },
                { id: "d", text: "K úplnému zániku pedagogické role" },
              ],
              correctChoiceId: "b",
              explanation:
                "Učitel se více stává průvodcem aktivního učení, ne jen autoritou předávající hotové poznatky. Pasivní přednášení bez zapojení žáků je starší model.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Jaké znalosti potřebuje současný pedagog podle odborného pojetí profese?",
              choices: [
                { id: "a", text: "Pouze technické bez pedagogiky" },
                { id: "b", text: "Jen znalost rozvrhu hodin" },
                {
                  id: "c",
                  text: "Odborné, pedagogické a psychologické",
                },
                { id: "d", text: "Žádné — stačí intuice" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog potřebuje obsahovou odbornost i pedagogické a psychologické poznatky pro práci s dětmi. Samotná intuice nebo organizační detail nestačí.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Učitelka připravuje týdenní plán aktivit pro skupinu v MŠ. Kterou profesní dovednost tím uplatňuje?",
              choices: [
                { id: "a", text: "Ignorování cílů výuky" },
                { id: "b", text: "Náhodný postup bez přípravy" },
                { id: "c", text: "Odmítání spolupráce s kolegy" },
                { id: "d", text: "Plánování vzdělávací činnosti" },
              ],
              correctChoiceId: "d",
              explanation:
                "Plánování je základní profesní dovednost — pedagog promýšlí cíle, postup a podmínky pro děti. Náhodný postup bez přípravy profesionalitě neodpovídá.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Pedagog řeší s rodiči spolupráci při adaptaci dítěte. Která kompetence je klíčová?",
              choices: [
                { id: "a", text: "Vyhýbání se kontaktu s rodinou" },
                { id: "b", text: "Komunikace s dětmi a rodiči" },
                { id: "c", text: "Jednostranné rozhodování bez dialogu" },
                { id: "d", text: "Pouze písemné testy bez rozhovoru" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog musí umět komunikovat s dětmi i rodiči — sdílet informace, naslouchat a domlouvat se. Izolace od rodiny brání výchovné spolupráci.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Učitel sleduje pokrok dítěte v grafomotorice a zaznamenává pozorování. K čemu slouží diagnostické a hodnoticí dovednosti?",
              choices: [
                { id: "a", text: "Jen k trestání žáků" },
                { id: "b", text: "K nahrazení veškeré komunikace" },
                { id: "c", text: "K poznání potřeb a pokroku dítěte" },
                { id: "d", text: "K ignorování individuálních rozdílů" },
              ],
              correctChoiceId: "c",
              explanation:
                "Diagnostika a hodnocení pomáhají pochopit, jak dítě pokročilo a co potřebuje. Nejde o trestání ani o přehlížení individuálních rozdílů.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Po konfliktu ve třídě se pedagogka zamyšleně hodnotí svůj postup a konzultuje ho s kolegyní. Co z toho vyplývá?",
              choices: [
                { id: "a", text: "Reflexe je zbytečná" },
                { id: "b", text: "Spolupráce s kolegy je zakázaná" },
                { id: "c", text: "Etika s prací pedagoga nesouvisí" },
                {
                  id: "d",
                  text: "Etiku, spolupráci a reflexi",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog jedná eticky, spolupracuje s kolegy a reflektuje vlastní praxi. To patří k profesionalitě, ne k okrajovému chování.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vyvoj-moderniho-skolstvi-a-ucitelske-profese",
              type: "multiple-choice",
              prompt:
                "Učitel se účastní kurzu o podpoře inkluze ve třídě. Co tím rozvíjí?",
              choices: [
                { id: "a", text: "Další vzdělávání a profesní rozvoj" },
                { id: "b", text: "Zákaz jakékoli odbornosti" },
                { id: "c", text: "Konec pedagogické kariéry" },
                { id: "d", text: "Odmítnutí reflexe práce" },
              ],
              correctChoiceId: "a",
              explanation:
                "Průběžné další vzdělávání je součástí profesního rozvoje pedagoga. Odbornost se nekončí ukončením studia.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "reformni-pedagogika",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Reformní pedagogika",
          summary:
            "Reakce na pasivní školu, důraz na aktivní dítě a přehled sledovaných reformních směrů.",
          order: 5,
          studySections: [
            {
              id: "vysvetleni-reformni-pedagogika",
              type: "explanation",
              title: "Reformní pedagogika",
              body:
                "Reformní pedagogika vznikala jako reakce na pasivitu žáků, mechanické memorování a přílišnou autoritativnost školy. Dítě je chápáno jako aktivní účastník vzdělávání. Důležitý je respekt k individuálním potřebám, zkušenost, samostatnost a vlastní činnost. Mezi sledované směry patří Montessori pedagogika, waldorfská pedagogika, Daltonský plán, Jenský plán, projektové vyučování a pragmatická pedagogika Johna Deweyho. Každý směr je třeba posuzovat podle základní myšlenky, role dítěte a pedagoga, prostředí, přínosů, omezení a vhodnosti pro konkrétní praxi.",
            },
            {
              id: "pojmy-reformni-pedagogika",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Reformní pedagogika",
                  definition:
                    "Směr reagující na pasivitu, memorování a autoritativnost tradiční školy.",
                },
                {
                  term: "Aktivní dítě",
                  definition:
                    "Dítě jako účastník vzdělávání, ne pasivní příjemce.",
                },
                {
                  term: "Individualizace",
                  definition:
                    "Respekt k individuálním potřebám a tempu dítěte.",
                },
                {
                  term: "Zkušenost",
                  definition:
                    "Vlastní prožitek a činnost dítěte jako základ učení.",
                },
                {
                  term: "Samostatnost",
                  definition:
                    "Schopnost a prostor dítěte jednat a učit se vlastní činností.",
                },
                {
                  term: "Projektové vyučování",
                  definition:
                    "Reformní přístup založený na práci na smysluplných úkolech a projektech.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt: "Na co reformní pedagogika reagovala u žáků?",
              choices: [
                { id: "a", text: "Na přílišnou aktivitu bez školy" },
                { id: "b", text: "Na pasivitu žáků" },
                { id: "c", text: "Na úplný zákaz učení" },
                { id: "d", text: "Na neexistenci vzdělávání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Reformní pedagogika kritizovala pasivní roli žáka, který jen přijímá hotové poznatky. Cílem je aktivnější zapojení dítěte.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Co reformní pedagogika kritizovala ve způsobu učení?",
              choices: [
                { id: "a", text: "Přílišné chápání látky" },
                { id: "b", text: "Respekt k zkušenosti dítěte" },
                { id: "c", text: "Mechanické memorování" },
                { id: "d", text: "Samostatnou činnost žáka" },
              ],
              correctChoiceId: "c",
              explanation:
                "Mechanické memorování bez porozumění bylo jedním z problémů tradiční školy. Reformní přístupy kladou důraz na smysluplné učení.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Co reformní pedagogika kritizovala ve vztahu školy a žáka?",
              choices: [
                { id: "a", text: "Přílišný respekt k dítěti" },
                { id: "b", text: "Nedostatek pravidel" },
                { id: "c", text: "Zájem o individuální potřeby" },
                { id: "d", text: "Přílišnou autoritativnost školy" },
              ],
              correctChoiceId: "d",
              explanation:
                "Reformní pedagogika odmítala přílišnou autoritativnost, kdy škola jednostranně rozhoduje bez respektu k dítěti. Respekt k potřebám je naopak její zásadou.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Jak reformní pedagogika chápe dítě ve vzdělávání?",
              choices: [
                { id: "a", text: "Jako aktivního účastníka" },
                { id: "b", text: "Jako pasivního posluchače" },
                { id: "c", text: "Jako objekt bez vlastní činnosti" },
                { id: "d", text: "Jako překážku výuky" },
              ],
              correctChoiceId: "a",
              explanation:
                "Dítě se podílí na učení vlastní činností a zkušeností. Pasivní role příjemce je typická pro kritizovanou tradiční školu.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Pedagožka přizpůsobuje tempo a podporu podle potřeb jednotlivých dětí ve skupině. Který reformní princip uplatňuje?",
              choices: [
                { id: "a", text: "Jednotný postup pro všechny bez rozdílu" },
                { id: "b", text: "Ignorování rozdílů mezi dětmi" },
                { id: "c", text: "Respekt k individuálním potřebám" },
                { id: "d", text: "Pasivní memorování" },
              ],
              correctChoiceId: "c",
              explanation:
                "Reformní přístupy respektují individuální potřeby a tempo dítěte. Stejný postup bez ohledu na dítě jim odporuje.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Děti ve školce zkoumají vodu při přímé činnosti a pozorování. Co je zde důležité?",
              choices: [
                { id: "a", text: "Jen předčítání bez činnosti" },
                { id: "b", text: "Výhradně autoritativní výklad" },
                { id: "c", text: "Zákaz jakékoli aktivity" },
                { id: "d", text: "Vlastní zkušenost dítěte" },
              ],
              correctChoiceId: "d",
              explanation:
                "Reformní pedagogika zdůrazňuje zkušenost z vlastní činnosti. Učení bez prožitku a aktivity je opakem tohoto principu.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Dítě si samo volí úkol v rámci nabídky a pracuje na něm bez neustálého vedení. Který reformní důraz je patrný?",
              choices: [
                { id: "a", text: "Pasivní poslouchání" },
                { id: "b", text: "Samostatnost a vlastní činnost" },
                { id: "c", text: "Mechanické opakování" },
                { id: "d", text: "Úplná závislost na učiteli" },
              ],
              correctChoiceId: "b",
              explanation:
                "Samostatnost a vlastní činnost jsou pro reformní pedagogiku typické. Neustálá závislost na autoritě učitele jim neodpovídá.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Který výčet reformních směrů je úplný podle sledovaného základu?",
              choices: [
                {
                  id: "a",
                  text: "Montessori, memorování, kázeň, autorita",
                },
                {
                  id: "b",
                  text: "Waldorf, přednášení, testy, izolace",
                },
                {
                  id: "c",
                  text: "Montessori, Waldorf, Dalton, Jenský plán",
                },
                {
                  id: "d",
                  text: "Dalton, memorování, testy, přednášení",
                },
              ],
              correctChoiceId: "c",
              explanation:
                "Mezi reformní směry patří Montessori pedagogika, waldorfská pedagogika, Daltonský plán a Jenský plán. Neúplné nebo tradiční výčty nereprezentují sledovaný základ.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Děti ve třídě společně řeší úkol na téma svého okolí: plánují postup, pracují v činnosti, sdílejí zkušenosti a spolupracují. K jakému reformnímu kontextu to spadá?",
              choices: [
                { id: "a", text: "Pouze autoritativní přednášení bez činnosti" },
                { id: "b", text: "Jen izolované memorování pojmů" },
                {
                  id: "c",
                  text: "Projektové vyučování a pragmatická pedagogika",
                },
                { id: "d", text: "Pasivní poslouchání bez zkušenosti" },
              ],
              correctChoiceId: "c",
              explanation:
                "Smysluplný úkol řešený činností, spoluprací a zkušeností odpovídá projektovému vyučování a pragmatické pedagogice Johna Deweyho. Pasivní přednášení nebo memorování jsou opakem tohoto reformního kontextu.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "reformni-pedagogika",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "reformni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Ředitelka zvažuje zavedení reformního přístupu v mateřské škole. Jak má postupovat odborně?",
              choices: [
                { id: "a", text: "Zavést ho bez úvahy o kontextu" },
                { id: "b", text: "Posuzovat jen podle módnosti" },
                { id: "c", text: "Ignorovat potřeby dětí a týmu" },
                {
                  id: "d",
                  text: "Posoudit přínosy, omezení a vhodnost pro praxi",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Reformní směr je třeba hodnotit podle přínosů, omezení a možnosti využití v konkrétní praxi — například v mateřské škole. Bez reflexe kontextu hrozí nevhodné použití.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "skolska-soustava-ceske-republiky",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Školská soustava České republiky",
          summary:
            "Základní kategorie vzdělávací soustavy a rozdíl mezi druhem školy, stupněm vzdělání, zařízením a kvalifikací.",
          order: 6,
          studySections: [
            {
              id: "vysvetleni-skolska-soustava",
              type: "explanation",
              title: "Školská soustava České republiky",
              body:
                "Vzdělávací soustava zahrnuje předškolní vzdělávání, základní a střední vzdělávání, konzervatoře, vyšší odborné a vysokoškolské vzdělávání, zájmové vzdělávání, základní umělecké vzdělávání, školská poradenská zařízení a školská zařízení. Je důležité rozlišovat druh školy, stupeň vzdělání, školské zařízení, obor vzdělání a odbornou kvalifikaci — nejde o totéž.",
            },
            {
              id: "pojmy-skolska-soustava",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Druh školy",
                  definition:
                    "Typ školy podle zařazení ve vzdělávací soustavě.",
                },
                {
                  term: "Stupeň vzdělání",
                  definition:
                    "Úroveň dosaženého vzdělání v soustavě.",
                },
                {
                  term: "Školské zařízení",
                  definition:
                    "Instituce sloužící výchově či vzdělávání mimo běžnou školní třídu.",
                },
                {
                  term: "Obor vzdělání",
                  definition:
                    "Vymezení obsahu a zaměření studia nebo výuky.",
                },
                {
                  term: "Odborná kvalifikace",
                  definition:
                    "Předpoklady pro výkon určité profese, ne název školy.",
                },
                {
                  term: "Školské poradenské zařízení",
                  definition:
                    "Zařízení poskytující poradenskou podporu ve vzdělávání.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Kam patří předškolní vzdělávání ve vzdělávací soustavě?",
              choices: [
                { id: "a", text: "Stojí mimo jakoukoli soustavu" },
                { id: "b", text: "Je její součástí" },
                { id: "c", text: "Je totéž co vysokoškolské vzdělávání" },
                { id: "d", text: "Nemá vztah k vzdělávání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Předškolní vzdělávání je součástí vzdělávací soustavy. Nejde o oddělenou oblast bez vztahu k vzdělávání ani o vysokoškolské vzdělávání.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Dítě navštěvuje základní školu a později gymnázium. Jak to odpovídá soustavě?",
              choices: [
                { id: "a", text: "Jsou vždy totéž" },
                { id: "b", text: "Střední vzdělávání neexistuje" },
                { id: "c", text: "Jsou odlišné části soustavy" },
                { id: "d", text: "Základní vzdělávání není součástí soustavy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Základní a střední vzdělávání jsou různé části vzdělávací soustavy. Neměly by se zaměňovat jako jeden stejný celek.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Žák pokračuje po základní škole na konzervatoř. Kam tato škola patří?",
              choices: [
                { id: "a", text: "Mezi mateřské školy" },
                { id: "b", text: "Mezi školská poradenská zařízení" },
                { id: "c", text: "Mezi zájmová kroužková vzdělávání" },
                {
                  id: "d",
                  text: "Mezi samostatně rozlišované součásti soustavy",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Konzervatoř je ve vzdělávací soustavě samostatně rozlišovaná součást. Nejde o mateřskou školu ani poradenské zařízení.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Jaký je vztah vyššího odborného a vysokoškolského vzdělávání?",
              choices: [
                { id: "a", text: "Vždy znamenají totéž" },
                { id: "b", text: "Nejsou totožné" },
                { id: "c", text: "Vyšší odborné neexistuje" },
                { id: "d", text: "Vysokoškolské není vzdělávání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Vyšší odborné a vysokoškolské vzdělávání jsou v soustavě odlišné kategorie. Neměly by se automaticky zaměňovat.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Dítě navštěvuje kroužek plavání mimo běžný vyučovací rozvrh. Jak to klasifikovat?",
              choices: [
                { id: "a", text: "Jako totéž co základní škola" },
                { id: "b", text: "Jako není součástí vzdělávání" },
                { id: "c", text: "Jako odlišné od stupně formálního vzdělání" },
                { id: "d", text: "Jako náhradu vysokoškolského studia" },
              ],
              correctChoiceId: "c",
              explanation:
                "Zájmové vzdělávání je samostatná oblast — nejde o formální stupeň vzdělání jako základní nebo střední škola.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Žák se učí hru na klavír v základní umělecké škole. Co to ukazuje?",
              choices: [
                { id: "a", text: "Je to totéž co školské poradenské zařízení" },
                { id: "b", text: "Je to jen volný čas bez vzdělávání" },
                { id: "c", text: "Je to název odborné kvalifikace" },
                { id: "d", text: "Patří to mezi specifickou oblast vzdělávání" },
              ],
              correctChoiceId: "d",
              explanation:
                "Základní umělecké vzdělávání je ve vzdělávací soustavě vymezená specifická oblast. Nejde o poradenské zařízení ani o kvalifikaci.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Jakou roli mají školská poradenská zařízení?",
              choices: [
                { id: "a", text: "Jsou totéž co běžná třída" },
                { id: "b", text: "Poskytují poradenskou podporu" },
                { id: "c", text: "Nahrazují všechny školy" },
                { id: "d", text: "Vedou běžnou výuku všech předmětů" },
              ],
              correctChoiceId: "b",
              explanation:
                "Školská poradenská zařízení poskytují poradenskou podporu ve vzdělávání. Nejde o běžnou výuku v třídě ani o náhradu celé školy.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Dítě navštěvuje školní jídelnu a zároveň mateřskou školu. Co je správné?",
              choices: [
                { id: "a", text: "Každé zařízení je vždy škola" },
                { id: "b", text: "Mateřská škola není v soustavě" },
                { id: "c", text: "Škola a školské zařízení nejsou totéž" },
                { id: "d", text: "Jídelna je totéž co obor vzdělání" },
              ],
              correctChoiceId: "c",
              explanation:
                "Mateřská škola je škola, jídelna je školské zařízení — nejde o totéž. Školské zařízení podporuje provoz výchovy a vzdělávání, ale není automaticky školou.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt:
                "Studentka říká: „Stupeň vzdělání, druh školy a obor jsou totéž.“ Co je správně?",
              choices: [
                { id: "a", text: "Má pravdu — vše je totéž" },
                { id: "b", text: "Obor je totéž co školské zařízení" },
                { id: "c", text: "Druh školy neexistuje" },
                { id: "d", text: "Jde o různé pojmy" },
              ],
              correctChoiceId: "d",
              explanation:
                "Druh školy označuje typ školy, stupeň vzdělání úroveň dosaženého vzdělání a obor vzdělání jeho zaměření. Zaměňovat je chyba.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "skolska-soustava-ceske-republiky",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "skolska-soustava-ceske-republiky",
              type: "multiple-choice",
              prompt: "Co označuje odborná kvalifikace?",
              choices: [
                { id: "a", text: "Předpoklady pro výkon profese" },
                { id: "b", text: "Název školy" },
                { id: "c", text: "Název oboru vzdělání" },
                { id: "d", text: "Druh školského zařízení" },
              ],
              correctChoiceId: "a",
              explanation:
                "Odborná kvalifikace vyjadřuje, zda má člověk předpoklady pro určitou profesi. Není to název školy, oboru ani zařízení.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "vzdelavaci-politika-a-evropsky-kontext",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Vzdělávací politika a evropský kontext",
          summary:
            "Cíle vzdělávací politiky, role aktérů, rovný přístup, inkluze, celoživotní učení a evropská spolupráce.",
          order: 7,
          studySections: [
            {
              id: "vysvetleni-vzdelavaci-politika",
              type: "explanation",
              title: "Vzdělávací politika a evropský kontext",
              body:
                "Vzdělávací politika řeší cíle, podmínky a směřování vzdělávání. Na vzdělávání se podílejí stát, kraje, obce, školy a zřizovatelé. Důležitý je rovný přístup ke vzdělávání, inkluzivní vzdělávání a celoživotní učení. Vzdělávací politika sleduje kvalitu vzdělávání a profesní přípravu pedagogů. Existuje evropská spolupráce ve vzdělávání, uznávání vzdělání a kvalifikací a ve vzdělávání se uplatňují evropské hodnoty.",
            },
            {
              id: "pojmy-vzdelavaci-politika",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Vzdělávací politika",
                  definition:
                    "Soubor záměrů a opatření pro cíle a podmínky vzdělávání.",
                },
                {
                  term: "Rovný přístup",
                  definition:
                    "Snaha o dostupnost vzdělávání bez neoprávněného znevýhodnění.",
                },
                {
                  term: "Inkluzivní vzdělávání",
                  definition:
                    "Podpora účasti různorodých dětí ve společném vzdělávání.",
                },
                {
                  term: "Celoživotní učení",
                  definition:
                    "Učení pokračující i po ukončení formální školy.",
                },
                {
                  term: "Kvalita vzdělávání",
                  definition:
                    "Úroveň a účinnost vzdělávacího procesu a jeho výsledků.",
                },
                {
                  term: "Uznávání kvalifikací",
                  definition:
                    "Uznání vzdělání a kvalifikací v rámci spolupráce.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt: "Co je předmětem vzdělávací politiky?",
              choices: [
                { id: "a", text: "Jen organizace školního stravování" },
                { id: "b", text: "Pouze údržba školních budov" },
                {
                  id: "c",
                  text: "Cíle, podmínky a směřování vzdělávání",
                },
                { id: "d", text: "Výhradně mimoškolní zájmové kluby" },
              ],
              correctChoiceId: "c",
              explanation:
                "Vzdělávací politika určuje, kam má vzdělávání směřovat a za jakých podmínek probíhá. Okrajové detaily bez vztahu k vzdělávání nejsou jejím jádrem.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt: "Který aktér má roli ve vzdělávací politice?",
              choices: [
                { id: "a", text: "Nikdo — vzdělávání nemá rámec" },
                { id: "b", text: "Stát" },
                { id: "c", text: "Jen jednotlivec bez institucí" },
                { id: "d", text: "Pouze soukromý trh bez veřejné role" },
              ],
              correctChoiceId: "b",
              explanation:
                "Stát je jedním z aktérů vzdělávací politiky. Vzdělávání má společenský rámec a neprobíhá zcela mimo instituce a odpovědnost.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Kteří aktéři se podílejí na vzdělávání vedle státu?",
              choices: [
                { id: "a", text: "Nikdo jiný" },
                { id: "b", text: "Jen zahraniční firmy bez škol" },
                { id: "c", text: "Pouze rodiče bez škol" },
                {
                  id: "d",
                  text: "Kraje, obce, školy a zřizovatelé",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Na vzdělávání se podílejí také kraje, obce, školy a zřizovatelé — každý v rámci své role. Nejde o záležitost jen jedné úrovně.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Obec zvažuje podporu dostupnosti školky pro rodiny z různých sociálních poměrů. Který princip se týká?",
              choices: [
                { id: "a", text: "Záměrné znevýhodnění části dětí" },
                { id: "b", text: "Rovný přístup ke vzdělávání" },
                { id: "c", text: "Zákaz vzdělávání" },
                { id: "d", text: "Inkluze jako totéž s diskriminací" },
              ],
              correctChoiceId: "b",
              explanation:
                "Rovný přístup znamená snahu o dostupnost vzdělávání bez neoprávněného znevýhodnění. Inkluze se netýká diskriminace — jde o účast různorodých dětí ve společném vzdělávání.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Ve třídě MŠ jsou děti s různými potřebami podporované ve společné skupině. O jaký princip jde?",
              choices: [
                { id: "a", text: "Vyloučení z vzdělávání" },
                { id: "b", text: "Rovný přístup jako zákaz podpory" },
                { id: "c", text: "Inkluzivní vzdělávání" },
                { id: "d", text: "Konec celoživotního učení" },
              ],
              correctChoiceId: "c",
              explanation:
                "Inkluzivní vzdělávání podporuje účast různorodých dětí ve společném vzdělávání. Rovný přístup se týká dostupnosti, inkluze zaměření na zapojení v běžném prostředí.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt: "Co znamená celoživotní učení?",
              choices: [
                { id: "a", text: "Učení končí ukončením školy" },
                { id: "b", text: "Vzdělávání jen v dětství" },
                { id: "c", text: "Zákaz dalšího rozvoje" },
                { id: "d", text: "Učení pokračuje i po škole" },
              ],
              correctChoiceId: "d",
              explanation:
                "Celoživotní učení znamená, že člověk se učí i po ukončení formální školy. Učení neskončí posledním ročníkem.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Proč vzdělávací politika sleduje kvalitu vzdělávání?",
              choices: [
                { id: "a", text: "Kvalita je pro politiku nepodstatná" },
                { id: "b", text: "Zajímá ji úroveň a účinnost vzdělávání" },
                { id: "c", text: "Jde jen o počet žáků ve třídě" },
                { id: "d", text: "Vzdělávání nemá výsledky" },
              ],
              correctChoiceId: "b",
              explanation:
                "Kvalita vzdělávání je důležitým tématem vzdělávací politiky — souvisí s tím, jak dobře vzdělávání plní své cíle.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Jak souvisí profesní příprava pedagogů s vzdělávací politikou?",
              choices: [
                { id: "a", text: "Nemá žádný význam" },
                { id: "b", text: "Brání jakékoli spolupráci" },
                { id: "c", text: "Ovlivňuje kvalitu vzdělávání" },
                { id: "d", text: "Nahrazuje veškerou politiku" },
              ],
              correctChoiceId: "c",
              explanation:
                "Profesní příprava pedagogů je součástí zájmu vzdělávací politiky o kvalitu vzdělávání. Kvalifikace učitelů ovlivňuje podmínky výuky.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Absolventka studovala v jedné zemi a chce uplatnit kvalifikaci v jiné. Co patří do evropského kontextu?",
              choices: [
                { id: "a", text: "Zákaz jakékoli spolupráce" },
                { id: "b", text: "Ignorování kvalifikací" },
                { id: "c", text: "Konec vzdělávání v Evropě" },
                {
                  id: "d",
                  text: "Spolupráce a uznávání vzdělání či kvalifikací",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Evropská spolupráce ve vzdělávání zahrnuje také uznávání vzdělání a kvalifikací. Nejde o izolaci systémů bez vzájemného vztahu.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "vzdelavaci-politika-a-evropsky-kontext",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "vzdelavaci-politika-a-evropsky-kontext",
              type: "multiple-choice",
              prompt:
                "Škola podporuje respekt, spolupráci a odpovědnost ve výchově. Co to může odrážet?",
              choices: [
                { id: "a", text: "Odmítnutí jakýchkoli hodnot" },
                { id: "b", text: "Promítání evropských hodnot do vzdělávání" },
                { id: "c", text: "Konec vzdělávací politiky" },
                { id: "d", text: "Zákaz inkluze" },
              ],
              correctChoiceId: "b",
              explanation:
                "Evropské hodnoty se mohou promítat do principů vzdělávání — například respekt, spolupráce a odpovědnost. Nejde o vzdělávání bez hodnotového rámce.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "kurikularni-dokumenty-a-vzdelavaci-programy",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Kurikulární dokumenty a vzdělávací programy",
          summary:
            "Kurikulum, rámcový a školní vzdělávací program, plánování pedagoga a hodnocení výsledků vzdělávání.",
          order: 8,
          studySections: [
            {
              id: "vysvetleni-kurikularni-dokumenty",
              type: "explanation",
              title: "Kurikulární dokumenty a vzdělávací programy",
              body:
                "Kurikulum zahrnuje cíle, obsah, podmínky, průběh a výsledky vzdělávání. Rámcový vzdělávací program stanovuje obecný závazný rámec. Školní vzdělávací program vytváří konkrétní škola a vychází z příslušného RVP. Pedagog připravuje konkrétní vzdělávací nabídku a plán, který respektuje potřeby dětí a podmínky školy. Vzdělávací cíl vyjadřuje, čeho má být dosaženo, obsah určuje, čemu se dítě učí, očekávané výsledky popisují předpokládaný výsledek vzdělávání. Evaluace slouží k posouzení průběhu a výsledků a ke zlepšení další práce.",
            },
            {
              id: "pojmy-kurikularni-dokumenty",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Kurikulum",
                  definition:
                    "Soubor cílů, obsahu, podmínek, průběhu a výsledků vzdělávání.",
                },
                {
                  term: "Rámcový vzdělávací program",
                  definition:
                    "Obecný závazný rámec pro vzdělávání.",
                },
                {
                  term: "Školní vzdělávací program",
                  definition:
                    "Program vytvářený konkrétní školou na základě RVP.",
                },
                {
                  term: "Vzdělávací cíl",
                  definition:
                    "Vyjádření toho, čeho má být ve vzdělávání dosaženo.",
                },
                {
                  term: "Vzdělávací obsah",
                  definition:
                    "Určení toho, čemu se dítě učí.",
                },
                {
                  term: "Očekávaný výsledek",
                  definition:
                    "Popis předpokládaného výsledku vzdělávání.",
                },
                {
                  term: "Evaluace",
                  definition:
                    "Posouzení průběhu a výsledků pro zlepšení další práce.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt: "Co zahrnuje kurikulum ve vzdělávání?",
              choices: [
                { id: "a", text: "Pouze rozvrh hodin" },
                { id: "b", text: "Jen seznam předmětů bez cílů" },
                {
                  id: "c",
                  text: "Cíle, obsah, podmínky, průběh a výsledky",
                },
                { id: "d", text: "Pouze závěrečné hodnocení" },
              ],
              correctChoiceId: "c",
              explanation:
                "Kurikulum je širší než jeden dokument — zahrnuje cíle, obsah, podmínky, průběh i výsledky vzdělávání. Rozvrh, seznam předmětů nebo jen hodnocení kurikulum nenahrazují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt: "Jakou funkci má rámcový vzdělávací program?",
              choices: [
                { id: "a", text: "Nahrazuje práci každého pedagoga" },
                { id: "b", text: "Stanovuje obecný závazný rámec" },
                { id: "c", text: "Je jen nezávazný návrh bez vlivu" },
                { id: "d", text: "Popisuje pouze organizaci školní jídelny" },
              ],
              correctChoiceId: "b",
              explanation:
                "RVP určuje obecný závazný rámec pro vzdělávání. Konkrétní týdenní plán jedné třídy připravuje pedagog v návaznosti na širší dokumenty.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt: "Kdo vytváří školní vzdělávací program?",
              choices: [
                { id: "a", text: "Každý žák sám" },
                { id: "b", text: "Nikdo — ŠVP neexistuje" },
                { id: "c", text: "Pouze rodiče bez školy" },
                { id: "d", text: "Konkrétní škola" },
              ],
              correctChoiceId: "d",
              explanation:
                "ŠVP vytváří konkrétní škola podle svých podmínek a výcházejícího rámce. Nejde o individuální dokument každého žáka.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt: "Jaký je vztah RVP a ŠVP?",
              choices: [
                { id: "a", text: "RVP vychází ze ŠVP jedné třídy" },
                { id: "b", text: "ŠVP vychází z příslušného RVP" },
                { id: "c", text: "Spolu nesouvisí" },
                { id: "d", text: "Jsou vždy totéž" },
              ],
              correctChoiceId: "b",
              explanation:
                "Školní program navazuje na rámcový program — škola ho konkretizuje v rámci závazného rámce. RVP nestaví na ŠVP jednotlivé školy.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "Učitelka sestavuje týdenní nabídku aktivit pro svou skupinu. Co je její úloha?",
              choices: [
                { id: "a", text: "Ignorovat kurikulární dokumenty" },
                { id: "b", text: "Pouze opisovat RVP bez plánování" },
                {
                  id: "c",
                  text: "Připravit konkrétní vzdělávací nabídku a plán",
                },
                { id: "d", text: "Nemít žádnou roli v plánování" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog převádí rámec do konkrétní nabídky a plánu pro děti. Pasivní opisování dokumentů bez plánování praxi nenahrazuje.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "Pedagožka upravuje plán podle zájmů dětí a možností školky. Co musí plán respektovat?",
              choices: [
                { id: "a", text: "Jen svůj osobní rozvrh bez ohledu na děti" },
                { id: "b", text: "Pouze náhodu bez vazby na realitu" },
                { id: "c", text: "Výhradně počet pomůcek ve skladu" },
                { id: "d", text: "Potřeby dětí a podmínky školy" },
              ],
              correctChoiceId: "d",
              explanation:
                "Plán pedagoga musí vycházet z potřeb dětí a podmínek konkrétní školy. Ignorování dětí nebo reality prostředí plánování neodpovídá.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "V dokumentu je uvedeno, že děti mají umět spolupracovat při společné hře. Co popisuje tento záznam?",
              choices: [
                { id: "a", text: "Seznam pomůcek ve třídě" },
                { id: "b", text: "Rozvrh přestávek" },
                { id: "c", text: "Vzdělávací cíl — čeho má být dosaženo" },
                { id: "d", text: "Název školní budovy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Cíl říká, čeho chceme ve vzdělávání dosáhnout. Obsah určuje, čemu se učí, a očekávaný výsledek popisuje předpokládaný výsledek — nejde o totéž.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "Učitelka vybírá témata a aktivity, jimiž budou děti poznávat přírodu v okolí školky. Co stanovuje?",
              choices: [
                { id: "a", text: "Vzdělávací obsah — čemu se dítě učí" },
                { id: "b", text: "Jen organizační rozvrh bez obsahu" },
                { id: "c", text: "Pouze konečné známky" },
                { id: "d", text: "Název zřizovatele" },
              ],
              correctChoiceId: "a",
              explanation:
                "Obsah vymezuje, čemu se dítě učí — témata, zkušenosti a oblasti. Cíl říká, čeho má být dosaženo; obsah popisuje, co se k tomu učí.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "V programu je popsáno, že dítě po aktivitě dokáže pojmenovat základní části rostliny. Co tento popis vyjadřuje?",
              choices: [
                { id: "a", text: "Rozvrh hodin" },
                { id: "b", text: "Očekávaný výsledek vzdělávání" },
                { id: "c", text: "Pouze školní adresu" },
                { id: "d", text: "Náhodný seznam pomůcek" },
              ],
              correctChoiceId: "b",
              explanation:
                "Očekávané výsledky popisují, čeho by dítě mělo dosáhnout. Nejde o organizační údaje ani o cíl jako záměr — jde o předpokládaný výsledek učení.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "kurikularni-dokumenty-a-vzdelavaci-programy",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "kurikularni-dokumenty-a-vzdelavaci-programy",
              type: "multiple-choice",
              prompt:
                "Učitelka po projektu hodnotí, co se dětem dařilo a co upravit příště. K čemu slouží evaluace?",
              choices: [
                { id: "a", text: "Jen k trestání dětí" },
                { id: "b", text: "K zastavení dalšího plánování" },
                {
                  id: "c",
                  text: "K posouzení průběhu a výsledků a ke zlepšení práce",
                },
                { id: "d", text: "K ignorování výsledků" },
              ],
              correctChoiceId: "c",
              explanation:
                "Evaluace posuzuje průběh a výsledky a pomáhá zlepšit další práci. Nejde o trest ani o konec reflexe — má podporovat rozvoj výuky.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "hodnoceni-skoly-a-kvality-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "historicky-vyvoj-a-soucasne-trendy",
          title: "Hodnocení školy a kvality vzdělávání",
          summary:
            "Vnitřní a vnější hodnocení školy, vlastní hodnocení, hospitace, zpětná vazba a role vedení a České školní inspekce.",
          order: 9,
          studySections: [
            {
              id: "vysvetleni-hodnoceni-skoly",
              type: "explanation",
              title: "Hodnocení školy a kvality vzdělávání",
              body:
                "Hodnocení školy slouží ke kontrole i ke zlepšování její práce. Rozlišujeme vnitřní a vnější hodnocení. Vlastní hodnocení školy je součástí vnitřního hodnocení. Hospitace sleduje průběh pedagogické práce, zpětná vazba poskytuje informace pro další zlepšení. Hodnotí se výsledky vzdělávání, klima školy i podmínky vzdělávání. Vedení školy pracuje s výsledky hodnocení. Česká školní inspekce se podílí na vnějším hodnocení školy.",
            },
            {
              id: "pojmy-hodnoceni-skoly",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Vnitřní hodnocení",
                  definition:
                    "Hodnocení prováděné uvnitř školy pro zlepšení její práce.",
                },
                {
                  term: "Vnější hodnocení",
                  definition:
                    "Hodnocení z vnějšího pohledu, mimo běžnou každodenní praxi školy.",
                },
                {
                  term: "Vlastní hodnocení školy",
                  definition:
                    "Škola hodnotí svou práci jako součást vnitřního hodnocení.",
                },
                {
                  term: "Hospitace",
                  definition:
                    "Sledování průběhu pedagogické práce za účelem hodnocení a rozvoje.",
                },
                {
                  term: "Zpětná vazba",
                  definition:
                    "Informace sloužící k dalšímu zlepšení práce školy nebo pedagoga.",
                },
                {
                  term: "Klima školy",
                  definition:
                    "Atmosféra vztahů a spolupráce ve školním prostředí.",
                },
                {
                  term: "Česká školní inspekce",
                  definition:
                    "Instituce podílející se na vnějším hodnocení školy.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "K čemu slouží hodnocení školy?",
              choices: [
                { id: "a", text: "Jen k trestání zaměstnanců" },
                { id: "b", text: "Ke kontrole i ke zlepšování práce školy" },
                { id: "c", text: "K zastavení rozvoje školy" },
                { id: "d", text: "K ignorování výsledků" },
              ],
              correctChoiceId: "b",
              explanation:
                "Hodnocení školy má kontrolní i rozvojový smysl — pomáhá zjistit stav a zlepšit práci. Nejde o trest bez reflexe.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Jaký je rozdíl mezi vnitřním a vnějším hodnocením?",
              choices: [
                { id: "a", text: "Jsou vždy totéž" },
                { id: "b", text: "Vnější hodnocení neexistuje" },
                { id: "c", text: "Vnitřní probíhá ve škole, vnější z vnějšku" },
                { id: "d", text: "Vnitřní provádí jen inspekce" },
              ],
              correctChoiceId: "c",
              explanation:
                "Vnitřní hodnocení škola provádí sama, vnější přichází z vnějšího pohledu — například prostřednictvím inspekce. Nejde o totéž.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "Co je vlastní hodnocení školy?",
              choices: [
                { id: "a", text: "Totéž co vnější inspekce" },
                { id: "b", text: "Hodnocení bez reflexe" },
                { id: "c", text: "Zákaz jakékoli sebereflexe" },
                { id: "d", text: "Součást vnitřního hodnocení" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vlastní hodnocení školy je součástí vnitřního hodnocení — škola hodnotí svou práci. Vnější hodnocení je odlišný typ.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "Co sleduje hospitace?",
              choices: [
                { id: "a", text: "Jen organizaci školního stravování" },
                { id: "b", text: "Průběh pedagogické práce" },
                { id: "c", text: "Pouze administrativní evidenci" },
                { id: "d", text: "Výhradně školní rozvrh přestávek" },
              ],
              correctChoiceId: "b",
              explanation:
                "Hospitace sleduje průběh pedagogické práce v reálné situaci. Nejde o organizační nebo okrajové detaily bez vztahu k výuce.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Po hospitaci ředitelka sdělí učitelce konkrétní připomínky k vedení hodiny. Co poskytuje?",
              choices: [
                { id: "a", text: "Jen kritiku bez smyslu" },
                { id: "b", text: "Zákaz další práce" },
                { id: "c", text: "Zpětnou vazbu pro zlepšení" },
                { id: "d", text: "Ignorování průběhu výuky" },
              ],
              correctChoiceId: "c",
              explanation:
                "Zpětná vazba dává informace pro další zlepšení práce. Hospitace ji může podložit pozorováním, ale zpětná vazba je samostatný pojem zaměřený na rozvoj.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "Co patří mezi předměty hodnocení školy?",
              choices: [
                { id: "a", text: "Jen organizace školního rozvrhu" },
                { id: "b", text: "Pouze počet zaměstnanců" },
                { id: "c", text: "Výhradně školní administrativa" },
                { id: "d", text: "Výsledky vzdělávání" },
              ],
              correctChoiceId: "d",
              explanation:
                "Mezi hodnocené oblasti patří výsledky vzdělávání, klima školy a podmínky vzdělávání. Okrajové detaily bez vztahu k práci školy nejsou jádrem hodnocení.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "Co znamená hodnocení klimatu školy?",
              choices: [
                { id: "a", text: "Měření teploty ve třídě" },
                { id: "b", text: "Posouzení atmosféry a vztahů ve škole" },
                { id: "c", text: "Jen kontrolu rozvrhu hodin" },
                { id: "d", text: "Hodnocení pouze známek" },
              ],
              correctChoiceId: "b",
              explanation:
                "Klima školy se týká vztahů, spolupráce a atmosféry ve školním prostředí. Fyzická teplota nebo samotné známky klimatické hodnocení nenahrazují.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt: "Co zahrnuje hodnocení podmínek vzdělávání?",
              choices: [
                { id: "a", text: "Jen organizační harmonogram školy" },
                { id: "b", text: "Pouze počet zaměstnanců" },
                {
                  id: "c",
                  text: "Posouzení podmínek, za nichž vzdělávání probíhá",
                },
                { id: "d", text: "Výhradně výsledky sportovních soutěží" },
              ],
              correctChoiceId: "c",
              explanation:
                "Podmínky vzdělávání zahrnují prostředí a zázemí pro výuku a výchovu. Osobní nebo okrajové údaje bez vztahu k podmínkám výuky nestačí.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Ředitelka projedná výsledky vlastního hodnocení s týmem a podle nich upraví podporu učitelům. Co tím ukazuje?",
              choices: [
                { id: "a", text: "Vedení výsledky ignoruje" },
                { id: "b", text: "Hodnocení nemá následný význam" },
                { id: "c", text: "Vedení nesmí reagovat na zjištění" },
                { id: "d", text: "Vedení pracuje s výsledky hodnocení" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vedení školy má pracovat s výsledky hodnocení a promítat je do rozhodování. Ignorování zjištění by mařilo smysl hodnocení.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "historicky-vyvoj-a-soucasne-trendy",
                "hodnoceni-skoly-a-kvality-vzdelavani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "historicky-vyvoj-a-soucasne-trendy",
              lessonId: "hodnoceni-skoly-a-kvality-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Kdo se podílí na vnějším hodnocení školy?",
              choices: [
                { id: "a", text: "Česká školní inspekce" },
                { id: "b", text: "Nikdo z vnějšku" },
                { id: "c", text: "Pouze jednotliví žáci bez instituce" },
                { id: "d", text: "Výhradně rodičovská rada jako jediný orgán" },
              ],
              correctChoiceId: "a",
              explanation:
                "Česká školní inspekce se podílí na vnějším hodnocení školy. Vnitřní hodnocení probíhá ve škole samé — jde o odlišné typy hodnocení.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
      ],
    },
  ],
};
