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
                { id: "a", text: "Školní rozvrh a organizace hodin" },
                { id: "b", text: "Dědičnost a biologické předpoklady" },
                { id: "c", text: "Kulturní tradice bez vlivu biologie" },
                { id: "d", text: "Vlastní rozhodování bez vrozených dispozic" },
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
                { id: "a", text: "Dědičné geny a vrozené vlastnosti" },
                { id: "b", text: "Vnitřní motivace bez vlivu okolí" },
                { id: "c", text: "Výška a barva očí jako jediný vliv" },
                {
                  id: "d",
                  text: "Rodina, škola, vrstevníci, kultura a životní podmínky",
                },
              ],
              correctChoiceId: "d",
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
                { id: "b", text: "Pouze sledují, ale nezasahují" },
                {
                  id: "c",
                  text: "Cíleně ho podporují a vedou",
                },
                { id: "d", text: "Nahrazují veškerou vlastní aktivitu" },
              ],
              correctChoiceId: "c",
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
                {
                  id: "a",
                  text: "Je aktivním faktorem vývoje",
                },
                { id: "b", text: "Žádnou — dítě je jen pasivní" },
                { id: "c", text: "Nahrazuje vliv prostředí" },
                { id: "d", text: "Ruší působení výchovy" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Jedním faktorem — dědičností" },
                { id: "b", text: "Jedním faktorem — rodinou" },
                { id: "c", text: "Jedním faktorem — návštěvou školky" },
                {
                  id: "d",
                  text: "Souhrou dědičnosti, prostředí, výchovy i aktivity dítěte",
                },
              ],
              correctChoiceId: "d",
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
                { id: "a", text: "Potlačuje veškerou individualitu" },
                { id: "b", text: "Podporuje rozvoj osobnosti" },
                { id: "c", text: "Řeší jen biologický růst" },
                { id: "d", text: "Nahrazuje vliv prostředí" },
              ],
              correctChoiceId: "b",
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
                { id: "a", text: "Odstraňuje vliv kultury z výchovy" },
                { id: "b", text: "Zaměřuje se toliko na tělesný vývoj" },
                {
                  id: "c",
                  text: "Předává kulturní hodnoty a připravuje na život ve společnosti",
                },
                { id: "d", text: "Izoluje dítě od vrstevníků" },
              ],
              correctChoiceId: "c",
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
                {
                  id: "a",
                  text: "Rozvojem samostatnosti, znalostí a dovedností",
                },
                { id: "b", text: "Kontrolou každého kroku dítěte" },
                { id: "c", text: "Omezením vlastní aktivity dítěte" },
                { id: "d", text: "Nahrazením zájmu a iniciativy dítěte" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Musí ho vždy ignorovat" },
                { id: "b", text: "Nemá na chování žádný vliv" },
                { id: "c", text: "Snižuje odpovědnost dítěte na nulu" },
                { id: "d", text: "Může mu pomoci předcházet" },
              ],
              correctChoiceId: "d",
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
                { id: "b", text: "Vývoj a chování ovlivňuje souhra více faktorů" },
                { id: "c", text: "Chování určuje jen dědičnost" },
                { id: "d", text: "Na chování nemá vliv prostředí" },
              ],
              correctChoiceId: "b",
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
                { id: "a", text: "Nahradit veškerou praxi teorií" },
                {
                  id: "b",
                  text: "Vysvětlit vztahy mezi výchovnými jevy",
                },
                { id: "c", text: "Ignorovat souvislosti mezi jevy" },
                { id: "d", text: "Vycházet z jedné náhodné zkušenosti" },
              ],
              correctChoiceId: "b",
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
                { id: "a", text: "Protože jedna třída stačí vždy" },
                { id: "b", text: "Protože praxe neexistuje" },
                {
                  id: "c",
                  text: "Protože zobecňuje poznatky z více situací",
                },
                { id: "d", text: "Protože teorie je jen názor učitele" },
              ],
              correctChoiceId: "c",
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
                { id: "a", text: "Rozhodne za ni bez znalosti situace" },
                { id: "b", text: "Nahradí pozorování dětí" },
                { id: "c", text: "Zabrání jakékoli změně postupu" },
                {
                  id: "d",
                  text: "Poskytne oporu pro odborné rozhodnutí",
                },
              ],
              correctChoiceId: "d",
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
                { id: "b", text: "Memorování pojmů bez jednání" },
                { id: "c", text: "Tvorba učebnic bez kontaktu s dětmi" },
                { id: "d", text: "Sběr statistik bez řešení situace" },
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
                { id: "a", text: "Teorie praxi nikdy neovlivní" },
                {
                  id: "b",
                  text: "Teorie a praxe se vzájemně ovlivňují",
                },
                { id: "c", text: "Praxe teorii nemůže obohatit" },
                { id: "d", text: "Teorie a praxe jsou oddělené světy" },
              ],
              correctChoiceId: "b",
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
                { id: "a", text: "Intuice je vždy dostatečná" },
                { id: "b", text: "Praxe nepotřebuje žádnou reflexi" },
                {
                  id: "c",
                  text: "Odborné rozhodnutí nemá stát jen na intuici",
                },
                { id: "d", text: "Teorie je vždy zbytečná" },
              ],
              correctChoiceId: "c",
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
                { id: "a", text: "Všechny jsou stejný typ populárního článku" },
                { id: "b", text: "Zákon je učebnice, RVP je blog" },
                { id: "c", text: "Odborný článek je vždy neověřený post" },
                {
                  id: "d",
                  text: "Učebnice, odborný článek, zákon a RVP jsou různé typy zdrojů",
                },
              ],
              correctChoiceId: "d",
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
                { id: "d", text: "Příspěvek na blogu bez uvedeného autora" },
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
                { id: "c", text: "To, zda se mu text líbí" },
                { id: "d", text: "Vzhled obálky nebo formát souboru" },
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
                {
                  id: "a",
                  text: "Zaznamenat hlavní myšlenku a uvést zdroj",
                },
                { id: "b", text: "Kopírovat text bez kontextu" },
                { id: "c", text: "Předstírat vlastní autorství cizího textu" },
                { id: "d", text: "Vynechat jakoukoli práci se zdrojem" },
              ],
              correctChoiceId: "a",
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
                {
                  id: "a",
                  text: "Cíle, podmínky a směřování vzdělávání",
                },
                { id: "b", text: "Organizace školního stravování" },
                { id: "c", text: "Údržba školních budov" },
                { id: "d", text: "Mimoškolní zájmové kluby bez vzdělávání" },
              ],
              correctChoiceId: "a",
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
                { id: "b", text: "Jednotlivec bez institucí" },
                { id: "c", text: "Soukromý trh bez veřejné role" },
                { id: "d", text: "Stát" },
              ],
              correctChoiceId: "d",
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
                {
                  id: "b",
                  text: "Kraje, obce, školy a zřizovatelé",
                },
                { id: "c", text: "Zahraniční firmy bez škol" },
                { id: "d", text: "Rodiče bez škol a zřizovatelů" },
              ],
              correctChoiceId: "b",
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
                { id: "a", text: "Rovný přístup ke vzdělávání" },
                { id: "b", text: "Záměrné znevýhodnění části dětí" },
                { id: "c", text: "Zákaz vzdělávání" },
                { id: "d", text: "Diskriminace místo podpory" },
              ],
              correctChoiceId: "a",
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
                { id: "b", text: "Jde jen o počet žáků ve třídě" },
                {
                  id: "c",
                  text: "Zajímá ji úroveň a účinnost vzdělávání",
                },
                { id: "d", text: "Vzdělávání nemá výsledky" },
              ],
              correctChoiceId: "c",
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
                {
                  id: "a",
                  text: "Ovlivňuje kvalitu vzdělávání",
                },
                { id: "b", text: "Nemá žádný význam" },
                { id: "c", text: "Brání jakékoli spolupráci" },
                { id: "d", text: "Nahrazuje veškerou politiku" },
              ],
              correctChoiceId: "a",
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
    {
      id: "zaklady-obecne-didaktiky",
      subjectId: "obecna-pedagogika",
      title: "Základy obecné didaktiky",
      description: "Didaktika, vzdělávací cíle a obsah vzdělávání",
      order: 3,
      lessons: [
        {
          id: "co-je-didaktika",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Co je didaktika",
          summary:
            "Didaktika jako pedagogická disciplína, obecná a oborová didaktika, vztah vyučování a učení a základní didaktické otázky.",
          order: 1,
          studySections: [
            {
              id: "vysvetleni-didaktika",
              type: "explanation",
              title: "Co je didaktika",
              body:
                "Didaktika je pedagogická disciplína zabývající se vzděláváním, vyučováním a učením. Obecná didaktika řeší obecné zákonitosti vzdělávání, oborová didaktika vzdělávání v konkrétní oblasti nebo předmětu. Didaktika sleduje vztah vyučování a učení. Účastníky vzdělávacího procesu jsou pedagog a vzdělávaný jedinec. Zkoumá podmínky, průběh a výsledky vzdělávání. Řeší, koho, proč, čemu, jak, kdy, kde a s jakým výsledkem vzděláváme. Vzdělávací situaci je nutné posuzovat jako propojení cíle, obsahu, metod, podmínek a výsledků.",
            },
            {
              id: "pojmy-didaktika",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Didaktika",
                  definition:
                    "Pedagogická disciplína zabývající se vzděláváním, vyučováním a učením.",
                },
                {
                  term: "Obecná didaktika",
                  definition:
                    "Část didaktiky řešící obecné zákonitosti vzdělávání.",
                },
                {
                  term: "Oborová didaktika",
                  definition:
                    "Část didaktiky řešící vzdělávání v konkrétní oblasti nebo předmětu.",
                },
                {
                  term: "Vyučování",
                  definition:
                    "Činnost pedagoga v rámci vzdělávacího procesu.",
                },
                {
                  term: "Učení",
                  definition:
                    "Proces změny na straně vzdělávaného jedince.",
                },
                {
                  term: "Vzdělávací proces",
                  definition:
                    "Cílevědomé působení pedagoga na vzdělávaného jedince.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt: "Čím se didaktika zabývá?",
              choices: [
                { id: "a", text: "Jen organizací školního rozvrhu" },
                {
                  id: "b",
                  text: "Vzděláváním, vyučováním a učením",
                },
                { id: "c", text: "Výhradně školní administrativou" },
                { id: "d", text: "Pouze hodnocením známek" },
              ],
              correctChoiceId: "b",
              explanation:
                "Didaktika je pedagogická disciplína zaměřená na vzdělávání, vyučování a učení. Rozvrh nebo administrativa samy o sobě didaktiku nenahrazují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt: "Co řeší obecná didaktika?",
              choices: [
                { id: "a", text: "Jen výuku jednoho předmětu" },
                { id: "b", text: "Pouze školní jídelnu" },
                {
                  id: "c",
                  text: "Obecné zákonitosti vzdělávání",
                },
                { id: "d", text: "Výhradně školní dokumentaci" },
              ],
              correctChoiceId: "c",
              explanation:
                "Obecná didaktika se zabývá obecnými zákonitostmi vzdělávání. Výuka jednoho předmětu spíše spadá pod oborovou didaktiku.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt:
                "Učitelka přemýšlí, jak vést výuku matematiky v 1. ročníku. Kterou oblast didaktiky tím řeší?",
              choices: [
                { id: "a", text: "Obecnou didaktiku bez vztahu k předmětu" },
                { id: "b", text: "Pouze školní administrativu" },
                { id: "c", text: "Výhradně organizaci přestávek" },
                { id: "d", text: "Oborovou didaktiku" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vzdělávání v konkrétní oblasti nebo předmětu řeší oborová didaktika. Obecná didaktika se týká obecných zákonitostí napříč oblastmi.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt:
                "Pedagog vede hodinu a děti při ní získávají nové poznatky. Co didaktika v tomto vztahu sleduje?",
              choices: [
                { id: "a", text: "Jen barvu učebnic" },
                {
                  id: "b",
                  text: "Vztah vyučování a učení",
                },
                { id: "c", text: "Pouze počet židlí ve třídě" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "b",
              explanation:
                "Didaktika zkoumá, jak souvisí činnost pedagoga (vyučování) a změna na straně dítěte (učení). Nejde o organizační detaily bez vztahu k výuce.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt: "Kdo jsou účastníci vzdělávacího procesu?",
              choices: [
                { id: "a", text: "Jen školní inspekce" },
                { id: "b", text: "Pouze rodiče mimo školu" },
                {
                  id: "c",
                  text: "Pedagog a vzdělávaný jedinec",
                },
                { id: "d", text: "Výhradně zřizovatel školy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Vzdělávací proces probíhá mezi pedagogem a vzdělávaným jedincem. Inspekce, rodiče nebo zřizovatel nejsou účastníky v tomto základním didaktickém smyslu.",
              order: 5,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt: "Co didaktika zkoumá kromě cílů a obsahu?",
              choices: [
                { id: "a", text: "Jen jména ulic okolo školy" },
                { id: "b", text: "Pouze barvu školního auta" },
                { id: "c", text: "Výhradně počasí ve třídě" },
                {
                  id: "d",
                  text: "Podmínky, průběh a výsledky vzdělávání",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Didaktika sleduje podmínky, průběh i výsledky vzdělávání. Okrajové detaily bez vztahu k vzdělávání k jejímu předmětu nepatří.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt: "Která otázka patří mezi základní didaktické otázky?",
              choices: [
                { id: "a", text: "Jakou barvu má školní budova?" },
                {
                  id: "b",
                  text: "Čemu a jak vzděláváme?",
                },
                { id: "c", text: "Kolik je hodin v roce?" },
                { id: "d", text: "Kdo vyhrál fotbalový zápas?" },
              ],
              correctChoiceId: "b",
              explanation:
                "Didaktika řeší mimo jiné otázky čemu, jak, koho, proč, kdy, kde a s jakým výsledkem vzděláváme. Barva budovy nebo sportovní výsledek k tomu nepatří.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "co-je-didaktika",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "co-je-didaktika",
              type: "multiple-choice",
              prompt:
                "Učitelka plánuje aktivitu a zároveň promýšlí cíl, obsah, metody a podmínky. Co tím správně chápe?",
              choices: [
                {
                  id: "a",
                  text: "Vzdělávací situaci jako propojení prvků",
                },
                { id: "b", text: "Jen náhodný postup bez souvislostí" },
                { id: "c", text: "Pouze jeden izolovaný detail" },
                { id: "d", text: "Výhradně administrativní zápis" },
              ],
              correctChoiceId: "a",
              explanation:
                "Vzdělávací situaci je třeba posuzovat jako propojení cíle, obsahu, metod, podmínek a výsledků. Izolovaný detail nebo náhodný postup didaktické plánování nenahrazuje.",
              order: 8,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "vzdelavaci-cile",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Vzdělávací cíle",
          summary:
            "Význam vzdělávacího cíle, jeho typy, kvalita formulace a rozdíl mezi cílem a aktivitou.",
          order: 2,
          studySections: [
            {
              id: "vysvetleni-vzdelavaci-cile",
              type: "explanation",
              title: "Vzdělávací cíle",
              body:
                "Vzdělávací cíl vyjadřuje, čeho má být dosaženo. Cíle mohou být obecné a konkrétní, krátkodobé a dlouhodobé, poznávací, dovednostní a postojové. Cíl má být zaměřený na dítě, srozumitelný a ověřitelný. Musí navazovat na činnost i hodnocení. Aktivita sama není cílem — například malování obrázku je činnost, zatímco cílem může být rozvoj jemné motoriky, představivosti nebo rozlišování barev.",
            },
            {
              id: "pojmy-vzdelavaci-cile",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Vzdělávací cíl",
                  definition:
                    "Vyjádření toho, čeho má být ve vzdělávání dosaženo.",
                },
                {
                  term: "Obecný cíl",
                  definition: "Širší záměr vzdělávání.",
                },
                {
                  term: "Konkrétní cíl",
                  definition: "Upřesněný cíl pro konkrétní situaci.",
                },
                {
                  term: "Krátkodobý cíl",
                  definition: "Cíl pro kratší časové období.",
                },
                {
                  term: "Dlouhodobý cíl",
                  definition: "Cíl s delším časovým horizontem.",
                },
                {
                  term: "Poznávací cíl",
                  definition: "Cíl zaměřený na poznání a porozumění.",
                },
                {
                  term: "Dovednostní cíl",
                  definition: "Cíl zaměřený na získání dovednosti.",
                },
                {
                  term: "Postojový cíl",
                  definition: "Cíl zaměřený na postoje a vztahy.",
                },
                {
                  term: "Ověřitelnost cíle",
                  definition:
                    "Možnost zjistit, zda byl cíl dosažen.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt: "Co vyjadřuje vzdělávací cíl?",
              choices: [
                { id: "a", text: "Jen název pomůcky" },
                {
                  id: "b",
                  text: "Čeho má být dosaženo",
                },
                { id: "c", text: "Pouze počet dětí ve třídě" },
                { id: "d", text: "Výhradně barvu třídy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Vzdělávací cíl říká, čeho má být ve vzdělávání dosaženo. Pomůcka, počet dětí nebo barva třídy cíl nevyjadřují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Učitelka chce, aby děti uměly spolupracovat ve skupině. Jaký typ cíle tím spíše formuluje?",
              choices: [
                { id: "a", text: "Konkrétní cíl pro jednu hodinu" },
                { id: "b", text: "Pouze název aktivity" },
                {
                  id: "c",
                  text: "Obecný cíl",
                },
                { id: "d", text: "Jen organizační poznámku" },
              ],
              correctChoiceId: "c",
              explanation:
                "Schopnost spolupracovat je širší záměr — spíše obecný cíl. Konkrétní cíl by byl upřesněný pro jednu situaci, například roztřídění přírodnin podle znaku.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Dnes odpoledne má dítě rozpoznat tři typické znaky podzimu. Jaký typ cíle jde o časové hledisko?",
              choices: [
                { id: "a", text: "Dlouhodobý cíl na celý rok" },
                { id: "b", text: "Cíl bez časového vymezení" },
                { id: "c", text: "Jen popis aktivity" },
                { id: "d", text: "Krátkodobý cíl" },
              ],
              correctChoiceId: "d",
              explanation:
                "Cíl na jedno odpoledne je krátkodobý. Dlouhodobý cíl by měl delší časový horizont, například rozvoj přes celý školní rok.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Cíl zní: „Dítě rozpozná alespoň tři typické znaky podzimu.“ Jaký typ cíle to je?",
              choices: [
                { id: "a", text: "Postojový cíl" },
                {
                  id: "b",
                  text: "Poznávací cíl",
                },
                { id: "c", text: "Jen název činnosti" },
                { id: "d", text: "Dovednostní cíl" },
              ],
              correctChoiceId: "b",
              explanation:
                "Rozpoznání znaků podzimu je cíl zaměřený na poznání. Dovednostní cíl by se týkal konkrétní činnosti, postojový vztahů a postojů dítěte.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Cíl zní: „Dítě roztřídí přírodniny podle zvoleného znaku.“ Jaký typ cíle to je?",
              choices: [
                { id: "a", text: "Poznávací cíl" },
                { id: "b", text: "Postojový cíl" },
                {
                  id: "c",
                  text: "Dovednostní cíl",
                },
                { id: "d", text: "Jen popis pomůcky" },
              ],
              correctChoiceId: "c",
              explanation:
                "Roztřídění přírodnin je cíl zaměřený na dovednost — dítě něco umí provést. Poznávací cíl by se týkal spíše porozumění nebo rozpoznání.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Cíl zní: „Dítě vyjádří vlastní zkušenost s podzimem.“ Jaký typ cíle to je?",
              choices: [
                { id: "a", text: "Poznávací cíl" },
                { id: "b", text: "Dovednostní cíl bez vztahu k postoji" },
                { id: "c", text: "Jen organizační úkol" },
                { id: "d", text: "Postojový cíl" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vyjádření vlastní zkušenosti souvisí s postojem dítěte k tématu a s jeho osobním vztahováním. Čistě poznávací nebo dovednostní cíl by popisoval jiný typ výsledku.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Která formulace cíle je zaměřená na dítě?",
              choices: [
                { id: "a", text: "Učitelka přečte pohádku." },
                { id: "b", text: "Budeme si povídat o podzimu." },
                {
                  id: "c",
                  text: "Dítě rozpozná alespoň tři typické znaky podzimu.",
                },
                { id: "d", text: "Připravíme si pomůcky na stůl." },
              ],
              correctChoiceId: "c",
              explanation:
                "Cíl má být zaměřený na dítě a jeho výsledek. Věty o činnosti učitele nebo obecné povídání popisují spíše aktivitu než cíl dítěte.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Která formulace cíle je srozumitelná a ověřitelná?",
              choices: [
                { id: "a", text: "Děti se něco naučí." },
                { id: "b", text: "Bude to hezké odpoledne." },
                {
                  id: "c",
                  text: "Dítě roztřídí přírodniny podle zvoleného znaku.",
                },
                { id: "d", text: "Děti budou hodné." },
              ],
              correctChoiceId: "c",
              explanation:
                "Ověřitelný cíl lze posoudit podle konkrétního výsledku — zda dítě přírodniny roztřídilo. Vágní formulace o tom, že se děti něco naučí, ověřit nelze.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Učitelka stanoví cíl, připraví činnost a později zjišťuje, zda ho děti splnily. Co tím správně propojuje?",
              choices: [
                { id: "a", text: "Jen pomůcky a rozvrh" },
                { id: "b", text: "Pouze název aktivity" },
                { id: "c", text: "Výhradně školní jídelnu" },
                {
                  id: "d",
                  text: "Cíl s činností a hodnocením",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Cíl má navazovat na činnost i hodnocení — z cíle vychází aktivita a podle cíle se posuzuje výsledek. Pomůcky nebo jídelna tuto souvislost nenahrazují.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-cile",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-cile",
              type: "multiple-choice",
              prompt:
                "Učitelka zapisuje jako cíl: „Děti budou malovat obrázek.“ Co je správně?",
              choices: [
                {
                  id: "a",
                  text: "Malování je aktivita, ne automaticky cíl",
                },
                { id: "b", text: "Aktivita je vždy totéž co cíl" },
                { id: "c", text: "Cíl nesmí navazovat na činnost" },
                { id: "d", text: "Cíl nemá být ověřitelný" },
              ],
              correctChoiceId: "a",
              explanation:
                "Malování obrázku je činnost. Cílem může být například rozvoj jemné motoriky, představivosti nebo rozlišování barev — aktivita sama o sobě cíl nenahrazuje.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "obsah-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Obsah vzdělávání",
          summary:
            "Význam obsahu vzdělávání, jeho složky, přiměřenost a vztah k cíli a potřebám dítěte.",
          order: 3,
          studySections: [
            {
              id: "vysvetleni-obsah-vzdelavani",
              type: "explanation",
              title: "Obsah vzdělávání",
              body:
                "Obsah vzdělávání určuje, co se má dítě naučit. Zahrnuje vědomosti, dovednosti, postoje, hodnoty, návyky a kompetence. Musí odpovídat věku a potřebám dítěte, být přiměřený a navazovat na předchozí zkušenosti. Obsah může propojovat různé oblasti rozvoje. Cíl určuje výběr obsahu a obsah musí odpovídat cíli.",
            },
            {
              id: "pojmy-obsah-vzdelavani",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Obsah vzdělávání",
                  definition:
                    "To, co se má dítě ve vzdělávání naučit.",
                },
                {
                  term: "Vědomosti",
                  definition: "Poznatky, které dítě získává.",
                },
                {
                  term: "Dovednosti",
                  definition: "Schopnosti, které dítě rozvíjí.",
                },
                {
                  term: "Postoje",
                  definition: "Vztahy dítěte k jevům a situacím.",
                },
                {
                  term: "Hodnoty",
                  definition: "To, co dítě považuje za důležité.",
                },
                {
                  term: "Návyky",
                  definition: "Opakované způsoby chování.",
                },
                {
                  term: "Kompetence",
                  definition:
                    "Schopnost uplatnit znalosti a dovednosti v situaci.",
                },
                {
                  term: "Přiměřenost",
                  definition:
                    "Soulad obsahu s možnostmi a potřebami dítěte.",
                },
                {
                  term: "Návaznost",
                  definition:
                    "Propojení s předchozími zkušenostmi dítěte.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt: "Co určuje obsah vzdělávání?",
              choices: [
                { id: "a", text: "Jen barvu školní budovy" },
                {
                  id: "b",
                  text: "Co se má dítě naučit",
                },
                { id: "c", text: "Pouze počet zaměstnanců" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "b",
              explanation:
                "Obsah vzdělávání určuje, co se má dítě naučit. Rozvrh nebo organizační detaily samy obsah nevymezují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Děti se učí pojmenovat části rostliny. Kterou složku obsahu tím rozvíjejí?",
              choices: [
                { id: "a", text: "Pouze návyk" },
                { id: "b", text: "Jen postoj" },
                {
                  id: "c",
                  text: "Vědomosti",
                },
                { id: "d", text: "Výhradně kompetenci bez poznání" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pojmenování částí rostliny rozvíjí vědomosti — dítě získává poznatky. Návyk nebo postoj by popisovaly jiný typ obsahu.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Děti trénují stříhání papíru podle čáry. Kterou složku obsahu rozvíjejí?",
              choices: [
                { id: "a", text: "Pouze vědomost bez činnosti" },
                { id: "b", text: "Jen hodnotu bez činnosti" },
                { id: "c", text: "Výhradně název aktivity" },
                { id: "d", text: "Dovednosti" },
              ],
              correctChoiceId: "d",
              explanation:
                "Stříhání podle čáry rozvíjí dovednost — dítě získává schopnost konkrétní činnosti. Samotný název aktivity obsah nepopisuje.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Ve skupině rozvíjíme respekt k pravidlům společné hry. Kterou složku obsahu tím podporujeme?",
              choices: [
                { id: "a", text: "Pouze vědomost bez vztahu" },
                {
                  id: "b",
                  text: "Postoje a hodnoty",
                },
                { id: "c", text: "Jen název pomůcky" },
                { id: "d", text: "Výhradně technické vybavení" },
              ],
              correctChoiceId: "b",
              explanation:
                "Respekt k pravidlům spolupráce souvisí s postoji a hodnotami dítěte. Vědomost nebo vybavení samo o sobě tento obsah nenahrazuje.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Děti si zvykají po práci uklidit pomůcky na své místo. Kterou složku obsahu rozvíjejí?",
              choices: [
                { id: "a", text: "Pouze vědomost" },
                { id: "b", text: "Jen postoj bez chování" },
                {
                  id: "c",
                  text: "Návyky",
                },
                { id: "d", text: "Výhradně název hodiny" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pravidelné uklízení pomůcek rozvíjí návyk — opakovaný způsob chování. Postoj nebo vědomost popisují jiný typ obsahu.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Dítě použije naučené pravidlo při řešení nové úlohy ve skupině. Kterou složku obsahu rozvíjí?",
              choices: [
                { id: "a", text: "Pouze izolovanou vědomost" },
                { id: "b", text: "Jen název aktivity" },
                { id: "c", text: "Výhradně organizaci přestávek" },
                { id: "d", text: "Kompetence" },
              ],
              correctChoiceId: "d",
              explanation:
                "Uplatnění znalosti v nové situaci rozvíjí kompetenci — schopnost použít poznání a dovednost v praxi. Samotná vědomost bez uplatnění kompetenci nenahrazuje.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka volí jednoduché úlohy pro třídu tříletých dětí místo složitých textů. Co tím respektuje?",
              choices: [
                { id: "a", text: "Jen barvu pomůcek" },
                {
                  id: "b",
                  text: "Věk a potřeby dítěte",
                },
                { id: "c", text: "Pouze počet oken ve třídě" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "b",
              explanation:
                "Obsah musí odpovídat věku a potřebám dítěte. Složité texty pro tříleté děti by nebyly přiměřené jejich možnostem.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka navazuje na to, co děti už znají z domova o zvířatech, a teprve pak přidává nové poznatky. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Ignorování předchozích zkušeností" },
                { id: "b", text: "Pouze náhodný výběr témat" },
                {
                  id: "c",
                  text: "Přiměřenost a návaznost",
                },
                { id: "d", text: "Výhradně administrativní zápis" },
              ],
              correctChoiceId: "c",
              explanation:
                "Obsah má být přiměřený a navazovat na předchozí zkušenosti dítěte. Náhodný výběr nebo ignorování zkušeností didaktické návaznosti neodpovídá.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Při práci s příběhem propojuje učitelka řeč, pohyb a výtvarnou činnost. Co tím ukazuje?",
              choices: [
                { id: "a", text: "Obsah může jen jednu oblast" },
                { id: "b", text: "Obsah nesmí navazovat na cíl" },
                { id: "c", text: "Jen organizaci jídelny" },
                {
                  id: "d",
                  text: "Propojení různých oblastí rozvoje",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Obsah může propojovat různé oblasti rozvoje — například řeč, pohyb a výtvarnou činnost. Jedna izolovaná oblast není jedinou možností.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "obsah-vzdelavani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "obsah-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Cílem je rozvoj jemné motoriky, proto učitelka volí činnost se stříháním a lepením. Co tím správně propojuje?",
              choices: [
                {
                  id: "a",
                  text: "Cíl a výběr obsahu",
                },
                { id: "b", text: "Obsah bez vztahu k cíli" },
                { id: "c", text: "Jen název pomůcky" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "a",
              explanation:
                "Cíl určuje výběr obsahu a obsah musí odpovídat cíli. Stříhání a lepení jsou zvoleny proto, že podporují cíl rozvoje jemné motoriky.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "didakticke-zasady",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Didaktické zásady",
          summary:
            "Deset základních didaktických zásad a jejich uplatnění v praxi mateřské školy.",
          order: 4,
          studySections: [
            {
              id: "vysvetleni-didakticke-zasady",
              type: "explanation",
              title: "Didaktické zásady",
              body:
                "Didaktické zásady usměrňují vzdělávací práci. Patří mezi ně názornost, přiměřenost, soustavnost a návaznost, uvědomělost, aktivita dítěte, trvalost, spojení teorie s praxí, individuální přístup, vědeckost a pravdivost a zpětná vazba. Názornost znamená, že dítě poznává skutečné předměty a situace. Přiměřenost vyžaduje soulad úkolu s věkem a možnostmi dítěte. Nové učivo má navazovat na to, co dítě už zná.",
            },
            {
              id: "pojmy-didakticke-zasady",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Názornost",
                  definition:
                    "Využití skutečných předmětů, pozorování a konkrétních zážitků.",
                },
                {
                  term: "Přiměřenost",
                  definition:
                    "Soulad úkolu s věkem, zkušenostmi a možnostmi dítěte.",
                },
                {
                  term: "Soustavnost a návaznost",
                  definition:
                    "Postupné a logicky navazující vzdělávání.",
                },
                {
                  term: "Aktivita dítěte",
                  definition:
                    "Aktivní zapojení dítěte do učení a činnosti.",
                },
                {
                  term: "Individuální přístup",
                  definition:
                    "Respekt k rozdílům a potřebám jednotlivých dětí.",
                },
                {
                  term: "Zpětná vazba",
                  definition:
                    "Informace podporující další učení a zlepšení.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Dítě pozoruje, dotýká se a porovnává skutečný list s listy na obrázku. Kterou didaktickou zásadu učitelka uplatňuje?",
              choices: [
                { id: "a", text: "Trvalost" },
                { id: "b", text: "Názornost" },
                { id: "c", text: "Zpětnou vazbu" },
                { id: "d", text: "Vědeckost bez pozorování" },
              ],
              correctChoiceId: "b",
              explanation:
                "Názornost využívá skutečné předměty a smyslové poznávání. Dítě pracuje s reálným listem, ne jen s abstraktním popisem.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Učitelka zadává tříletým dětem jednoduché úkoly místo složitého psaní textu. Kterou zásadu respektuje?",
              choices: [
                { id: "a", text: "Trvalost bez ohledu na dítě" },
                { id: "b", text: "Uvědomělost bez přizpůsobení" },
                { id: "c", text: "Přiměřenost" },
                { id: "d", text: "Názornost bez vztahu k úkolu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Přiměřenost znamená, že úkol odpovídá věku, zkušenostem a možnostem dítěte. Složitý úkol pro tříleté děti by zásadu porušoval.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Nové téma o zvířatech navazuje na to, co děti už znají z domova. Kterou zásadu učitelka uplatňuje?",
              choices: [
                { id: "a", text: "Aktivitu bez návaznosti" },
                { id: "b", text: "Trvalost bez postupu" },
                { id: "c", text: "Individuální přístup bez obsahu" },
                { id: "d", text: "Soustavnost a návaznost" },
              ],
              correctChoiceId: "d",
              explanation:
                "Soustavnost a návaznost znamenají, že nové učivo navazuje na dřívější zkušenosti a poznatky dítěte. Náhodný skok bez vazby zásadu nenaplňuje.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Po činnosti se učitelka ptá, proč dítě zvolilo určitý postup. Kterou zásadu tím podporuje?",
              choices: [
                { id: "a", text: "Názornost bez reflexe" },
                { id: "b", text: "Uvědomělost" },
                { id: "c", text: "Trvalost bez porozumění" },
                { id: "d", text: "Zpětnou vazbu bez myšlení" },
              ],
              correctChoiceId: "b",
              explanation:
                "Uvědomělost podporuje, aby dítě chápalo, co dělá a proč. Samotná činnost bez reflexe uvědomělost nenahrazuje.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Děti samy skládají stavebnici podle vlastního nápadu místo pasivního poslechu. Kterou zásadu učitelka uplatňuje?",
              choices: [
                { id: "a", text: "Trvalost bez činnosti" },
                { id: "b", text: "Vědeckost bez zapojení" },
                { id: "c", text: "Aktivitu dítěte" },
                { id: "d", text: "Názornost bez účasti dítěte" },
              ],
              correctChoiceId: "c",
              explanation:
                "Aktivita dítěte znamená jeho vlastní zapojení do učení a činnosti. Pasivní poslech aktivitu dítěte nenaplňuje.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Učitelka opakovaně vrací k pravidlům spolupráce ve skupině po celý týden. Kterou zásadu tím podporuje?",
              choices: [
                { id: "a", text: "Názornost bez opakování" },
                { id: "b", text: "Individuální přístup bez návyku" },
                { id: "c", text: "Uvědomělost jen jednou" },
                { id: "d", text: "Trvalost" },
              ],
              correctChoiceId: "d",
              explanation:
                "Trvalost znamená opakované a dlouhodobější utváření poznatků, dovedností a postojů. Jednorázová zmínka bez návaznosti trvalost nenaplňuje.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Po vysvětlení o rostlinách děti zasadí semínko do hlíny a sledují růst. Kterou zásadu učitelka uplatňuje?",
              choices: [
                { id: "a", text: "Názornost bez praxe" },
                { id: "b", text: "Spojení teorie s praxí" },
                { id: "c", text: "Trvalost bez činnosti" },
                { id: "d", text: "Zpětnou vazbu bez zkušenosti" },
              ],
              correctChoiceId: "b",
              explanation:
                "Spojení teorie s praxí propojuje vysvětlení s vlastní činností a zkušeností dítěte. Samotný výklad bez praktického kroku zásadu nenaplňuje.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Učitelka upraví úkol pro dítě, které potřebuje více času a podpory. Kterou zásadu uplatňuje?",
              choices: [
                { id: "a", text: "Trvalost bez ohledu na dítě" },
                { id: "b", text: "Vědeckost bez respektu" },
                { id: "c", text: "Individuální přístup" },
                { id: "d", text: "Názornost bez rozdílů" },
              ],
              correctChoiceId: "c",
              explanation:
                "Individuální přístup respektuje rozdíly a potřeby jednotlivých dětí. Stejný úkol bez úpravy pro všechny individuální přístup nenahrazuje.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Učitelka vysvětluje, že listy na podzim opadávají, a ukazuje skutečné listí na zahradě. Kterou zásadu tím podporuje?",
              choices: [
                { id: "a", text: "Aktivitu bez pravdivosti" },
                { id: "b", text: "Trvalost bez ověření" },
                { id: "c", text: "Uvědomělost bez reality" },
                { id: "d", text: "Vědeckost a pravdivost" },
              ],
              correctChoiceId: "d",
              explanation:
                "Vědeckost a pravdivost vyžadují, aby děti dostávaly správné a ověřitelné informace v souladu s realitou. Vymyšlený nebo nepravdivý popis zásadu porušuje.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "didakticke-zasady",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "didakticke-zasady",
              type: "multiple-choice",
              prompt:
                "Po dokončení práce učitelka dítěti řekne, co se povedlo a co může zkusit jinak. Kterou zásadu uplatňuje?",
              choices: [
                { id: "a", text: "Zpětnou vazbu" },
                { id: "b", text: "Trvalost bez informace" },
                { id: "c", text: "Názornost bez hodnocení" },
                { id: "d", text: "Uvědomělost bez sdělení" },
              ],
              correctChoiceId: "a",
              explanation:
                "Zpětná vazba poskytuje dítěti informace pro další učení a zlepšení. Ticho po práci bez jakékoli reakce zpětnou vazbu nenahrazuje.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "vzdelavaci-metody",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Vzdělávací metody",
          summary:
            "Význam vzdělávací metody a hlavní typy metod v praxi mateřské školy.",
          order: 5,
          studySections: [
            {
              id: "vysvetleni-vzdelavaci-metody",
              type: "explanation",
              title: "Vzdělávací metody",
              body:
                "Metoda je způsob, jak pedagog a dítě postupují k cíli. Patří mezi ně slovní metody, názorně demonstrační metody, praktické metody, aktivizující metody, situační a problémové metody, projektová metoda, hra, experiment, pozorování, rozhovor, vyprávění, vysvětlování, nápodoba a kooperativní učení. V mateřské škole se často využívají hra, vlastní zkušenost, pohyb, manipulace s předměty, pozorování, smyslové poznávání, komunikace a tvořivá činnost.",
            },
            {
              id: "pojmy-vzdelavaci-metody",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Vzdělávací metoda",
                  definition:
                    "Způsob, jak pedagog a dítě postupují k cíli.",
                },
                {
                  term: "Slovní metody",
                  definition:
                    "Metody využívající slovo a jazyk.",
                },
                {
                  term: "Praktické metody",
                  definition:
                    "Metody založené na činnosti a zkušenosti.",
                },
                {
                  term: "Aktivizující metody",
                  definition:
                    "Metody podporující aktivní zapojení dítěte.",
                },
                {
                  term: "Projektová metoda",
                  definition:
                    "Metoda řešení úkolu v delším souvislém celku.",
                },
                {
                  term: "Hra",
                  definition:
                    "Metoda učení prostřednictvím hry.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt: "Co je vzdělávací metoda?",
              choices: [
                { id: "a", text: "Jen název pomůcky" },
                { id: "b", text: "Způsob postupu k cíli" },
                { id: "c", text: "Pouze počet dětí ve třídě" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "b",
              explanation:
                "Metoda je způsob, jak pedagog a dítě postupují k cíli. Rozvrh nebo pomůcka samy metodu nevymezují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Učitelka vypráví dětem pohádku o zvířátkách v lese. Kterou skupinu metod využívá?",
              choices: [
                { id: "a", text: "Pouze experiment" },
                { id: "b", text: "Jen manipulaci s předměty" },
                { id: "c", text: "Slovní metody" },
                { id: "d", text: "Výhradně exkurzi" },
              ],
              correctChoiceId: "c",
              explanation:
                "Vyprávění patří mezi slovní metody. Experiment nebo exkurze by šly o jiný typ postupu.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Učitelka ukazuje, jak správně držet nůžky při stříhání. Kterou skupinu metod využívá?",
              choices: [
                { id: "a", text: "Jen rozhovor bez ukázky" },
                { id: "b", text: "Pouze hru bez demonstrace" },
                { id: "c", text: "Situační metody" },
                { id: "d", text: "Názorně demonstrační metody" },
              ],
              correctChoiceId: "d",
              explanation:
                "Ukázka patří mezi názorně demonstrační metody. Samotný rozhovor bez ukázky by demonstraci nenahradil.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti samy lepí a skládají koláž z přírodnin. Kterou skupinu metod učitelka využívá?",
              choices: [
                { id: "a", text: "Pouze slovní metody" },
                { id: "b", text: "Praktické metody" },
                { id: "c", text: "Jen vyprávění" },
                { id: "d", text: "Výhradně pozorování bez činnosti" },
              ],
              correctChoiceId: "b",
              explanation:
                "Lepení a skládání je praktická činnost — patří mezi praktické metody. Čistě slovní výklad praktickou metodu nenahrazuje.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti hledají ve třídě předměty podle zadaných vlastností. Kterou skupinu metod učitelka využívá?",
              choices: [
                { id: "a", text: "Pouze vyprávění" },
                { id: "b", text: "Jen pasivní poslech" },
                { id: "c", text: "Aktivizující metody" },
                { id: "d", text: "Výhradně nápodobu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Hledání a aktivní řešení úkolu patří mezi aktivizující metody. Pasivní poslech aktivizaci nenahrazuje.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti řeší, jak uspořádat koutek tak, aby se tam všichni vešli a měli kam ukládat pomůcky. Kterou skupinu metod učitelka využívá?",
              choices: [
                { id: "a", text: "Pouze vyprávění" },
                { id: "b", text: "Jen nápodobu" },
                { id: "c", text: "Výhradně pozorování" },
                { id: "d", text: "Situační a problémové metody" },
              ],
              correctChoiceId: "d",
              explanation:
                "Řešení reálné situace nebo problému patří mezi situační a problémové metody. Samotné vyprávění problém neřeší.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Skupina několik dní připravuje výstavu o podzimu a společně ji dokončuje. Kterou metodu využívá?",
              choices: [
                { id: "a", text: "Pouze krátký rozhovor" },
                { id: "b", text: "Projektovou metodu" },
                { id: "c", text: "Jen nápodobu" },
                { id: "d", text: "Výhradně experiment" },
              ],
              correctChoiceId: "b",
              explanation:
                "Delší souvislý úkol s výsledkem je projektová metoda. Krátký rozhovor projekt nenahrazuje.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti si ve volném koutku hrají na obchod a procvičují spolupráci. Kterou metodu využívají?",
              choices: [
                { id: "a", text: "Pouze vysvětlování" },
                { id: "b", text: "Jen experiment" },
                { id: "c", text: "Hru" },
                { id: "d", text: "Výhradně pozorování" },
              ],
              correctChoiceId: "c",
              explanation:
                "Hra je ve vzdělávání metoda učení. V mateřské škole má zvláštní význam pro rozvoj a zkušenost dítěte.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti pozorují, co se stane, když do vody vloží různé předměty, a zapisují si, co vidí. Které metody učitelka kombinuje?",
              choices: [
                { id: "a", text: "Pouze vyprávění" },
                { id: "b", text: "Jen nápodobu" },
                { id: "c", text: "Výhradně rozhovor" },
                { id: "d", text: "Experiment a pozorování" },
              ],
              correctChoiceId: "d",
              explanation:
                "Zkoušení, co se stane, je experiment; sledování jevu je pozorování. Samotné vyprávění tuto zkušenost nenahrazuje.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Učitelka vysvětluje pravidla hry, vypráví krátký příběh a pak s dětmi hovoří o jejich nápadech. Které metody využívá?",
              choices: [
                { id: "a", text: "Pouze experiment" },
                { id: "b", text: "Rozhovor, vyprávění a vysvětlování" },
                { id: "c", text: "Jen manipulaci bez slova" },
                { id: "d", text: "Výhradně projekt" },
              ],
              correctChoiceId: "b",
              explanation:
                "Rozhovor, vyprávění a vysvětlování jsou slovní metody využívající jazyk a komunikaci. Experiment nebo projekt by šly o jiný postup.",
              order: 10,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti napodobují pohyb učitelky při cvičení s šátkem. Kterou metodu využívají?",
              choices: [
                { id: "a", text: "Pouze rozhovor" },
                { id: "b", text: "Jen experiment" },
                { id: "c", text: "Nápodobu" },
                { id: "d", text: "Výhradně projekt" },
              ],
              correctChoiceId: "c",
              explanation:
                "Opakování pohybu podle vzoru je nápodoba. Rozhovor nebo experiment by popisovaly jiný způsob učení.",
              order: 11,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "vzdelavaci-metody",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "vzdelavaci-metody",
              type: "multiple-choice",
              prompt:
                "Děti společně skládají velký obrázek tak, že každé přidá svůj dílek. Kterou metodu využívají?",
              choices: [
                { id: "a", text: "Kooperativní učení" },
                { id: "b", text: "Pouze individuální práci" },
                { id: "c", text: "Jen pasivní poslech" },
                { id: "d", text: "Výhradně experiment" },
              ],
              correctChoiceId: "a",
              explanation:
                "Společná práce na jednom úkolu s vzájemnou podporou je kooperativní učení. Individuální práce nebo pasivní poslech kooperaci nenahrazují.",
              order: 12,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "organizacni-formy-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Organizační formy vzdělávání",
          summary:
            "Organizační formy vzdělávání a jejich odlišení od vzdělávacích metod.",
          order: 6,
          studySections: [
            {
              id: "vysvetleni-organizacni-formy",
              type: "explanation",
              title: "Organizační formy vzdělávání",
              body:
                "Organizační forma určuje, jak je činnost uspořádána. Patří mezi ni individuální práce, práce ve dvojici, skupinová práce, společná činnost celé skupiny, spontánní, řízená a nepřímo řízená činnost, pobyt venku, exkurze, projekt a zájmová činnost. Metoda je způsob, jak se postupuje k cíli; organizační forma je způsob uspořádání činnosti. Například rozhovor je metoda, rozhovor v malé skupině kombinuje metodu s organizační formou.",
            },
            {
              id: "pojmy-organizacni-formy",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Organizační forma",
                  definition:
                    "Způsob uspořádání vzdělávací činnosti.",
                },
                {
                  term: "Individuální práce",
                  definition: "Dítě pracuje samo.",
                },
                {
                  term: "Skupinová práce",
                  definition: "Děti pracují v menší skupině.",
                },
                {
                  term: "Řízená činnost",
                  definition:
                    "Činnost vedená pedagogem podle záměru.",
                },
                {
                  term: "Spontánní činnost",
                  definition:
                    "Činnost vycházející z vlastního podnětu dítěte.",
                },
                {
                  term: "Exkurze",
                  definition:
                    "Vzdělávací činnost mimo běžné prostředí třídy.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt: "Co určuje organizační forma vzdělávání?",
              choices: [
                { id: "a", text: "Jen název pomůcky" },
                { id: "b", text: "Jak je činnost uspořádána" },
                { id: "c", text: "Pouze barvu třídy" },
                { id: "d", text: "Výhradně školní rozvrh" },
              ],
              correctChoiceId: "b",
              explanation:
                "Organizační forma určuje, jak je vzdělávací činnost uspořádána. Metoda říká, jak se postupuje k cíli — jde o odlišné pojmy.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Dítě samo dokončuje kresbu u stolu, zatímco ostatní pracují jinde. Jakou organizační formu učitelka zvolila?",
              choices: [
                { id: "a", text: "Společnou činnost celé skupiny" },
                { id: "b", text: "Skupinovou práci" },
                { id: "c", text: "Individuální práci" },
                { id: "d", text: "Exkurzi" },
              ],
              correctChoiceId: "c",
              explanation:
                "Individuální práce znamená, že dítě pracuje samo. Skupinová nebo celotřídní činnost by popisovala jiné uspořádání.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Dva děti společně skládají puzzle u jednoho stolu. Jakou organizační formu využívají?",
              choices: [
                { id: "a", text: "Individuální práci" },
                { id: "b", text: "Společnou činnost celé skupiny" },
                { id: "c", text: "Exkurzi" },
                { id: "d", text: "Práci ve dvojici" },
              ],
              correctChoiceId: "d",
              explanation:
                "Práce ve dvojici znamená, že činnost probíhá ve dvou dětech. Individuální práce nebo celá skupina by byly jiné formy.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Čtyři děti společně staví domeček ze stavebnice v koutku. Jakou organizační formu využívají?",
              choices: [
                { id: "a", text: "Individuální práci" },
                { id: "b", text: "Skupinovou práci" },
                { id: "c", text: "Pouze exkurzi" },
                { id: "d", text: "Jen spontánní činnost bez skupiny" },
              ],
              correctChoiceId: "b",
              explanation:
                "Skupinová práce znamená činnost menší skupiny dětí. Individuální práce nebo exkurze by popisovaly jiné uspořádání.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Všichni děti společně zpívají jednu písničku na koberci. Jakou organizační formu učitelka zvolila?",
              choices: [
                { id: "a", text: "Individuální práci" },
                { id: "b", text: "Práci ve dvojici" },
                { id: "c", text: "Společnou činnost celé skupiny" },
                { id: "d", text: "Jen exkurzi" },
              ],
              correctChoiceId: "c",
              explanation:
                "Společná činnost celé skupiny znamená, že všichni děti pracují nebo jednají společně. Individuální nebo dvojicová práce by byla jiná forma.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Dítě si samo zvolí hru v koutku bez přímého pokynu učitelky. Jakou činnost popisuje?",
              choices: [
                { id: "a", text: "Řízenou činnost podle pokynu" },
                { id: "b", text: "Exkurzi" },
                { id: "c", text: "Individuální práci bez volby" },
                { id: "d", text: "Spontánní činnost" },
              ],
              correctChoiceId: "d",
              explanation:
                "Spontánní činnost vychází z vlastního podnětu dítěte. Řízená činnost je vedená podle záměru pedagoga.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka připraví podněty a materiály, ale děti si samy volí, jak s nimi budou pracovat. Jakou formu využívá?",
              choices: [
                { id: "a", text: "Přímo řízenou činnost bez volby" },
                { id: "b", text: "Nepřímo řízenou činnost" },
                { id: "c", text: "Exkurzi" },
                { id: "d", text: "Jen individuální práci bez přípravy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Nepřímo řízená činnost znamená, že pedagog připraví podmínky, ale dítě má prostor pro vlastní rozhodování. Přímé řízení každého kroku by bylo jiné.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Skupina tráví dopoledne na zahradě a pozoruje přírodu. Jakou organizační formu využívá?",
              choices: [
                { id: "a", text: "Pouze individuální práci u stolu" },
                { id: "b", text: "Jen práci ve dvojici ve třídě" },
                { id: "c", text: "Pobyt venku" },
                { id: "d", text: "Výhradně zájmovou činnost mimo školu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pobyt venku je organizační forma vzdělávání mimo běžnou třídu. Exkurze by šla o výuku mimo obvyklé prostředí školy na jiném místě.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Děti několik dní pracují na společném projektu a zároveň se účastní kroužku ve volném čase školy. Jaké formy využívají?",
              choices: [
                { id: "a", text: "Pouze individuální práci" },
                { id: "b", text: "Jen řízenou činnost bez projektu" },
                { id: "c", text: "Výhradně exkurzi" },
                { id: "d", text: "Projekt a zájmovou činnost" },
              ],
              correctChoiceId: "d",
              explanation:
                "Delší společný úkol je projekt jako organizační uspořádání. Kroužek ve volném čase školy spadá pod zájmovou činnost.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "organizacni-formy-vzdelavani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "organizacni-formy-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka vede rozhovor se čtyřmi dětmi u stolu. Co je správně?",
              choices: [
                {
                  id: "a",
                  text: "Rozhovor je metoda i organizační forma bez rozdílu",
                },
                { id: "b", text: "Metoda a organizační forma jsou totéž" },
                { id: "c", text: "Rozhovor je organizační forma, ne metoda" },
                {
                  id: "d",
                  text: "Rozhovor je metoda, malá skupina je organizační forma",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Rozhovor je způsob, jak se postupuje k cíli — metoda. Rozhovor v malé skupině ukazuje, jak je činnost uspořádána — organizační forma.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "prostredky-a-podminky-vzdelavani",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Prostředky a podmínky vzdělávání",
          summary:
            "Didaktické prostředky a podmínky vzdělávání a jejich vliv na výsledek činnosti.",
          order: 7,
          studySections: [
            {
              id: "vysvetleni-prostredky-podminky",
              type: "explanation",
              title: "Prostředky a podmínky vzdělávání",
              body:
                "Didaktické prostředky zahrnují hračky, pomůcky, knihy, obrázky, přírodní materiály, hudební nástroje, digitální technologie, pracovní materiály, prostředí třídy a slova i jednání pedagoga. Podmínky vzdělávání mohou být materiální, prostorové, časové, personální, organizační, psychosociální, hygienické a bezpečnostní. Stejná činnost může mít jiný výsledek podle prostředí, času, atmosféry, počtu dětí a připravenosti pedagoga.",
            },
            {
              id: "pojmy-prostredky-podminky",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Didaktické prostředky",
                  definition:
                    "Nástroje a prostředí podporující vzdělávání.",
                },
                {
                  term: "Materiální podmínky",
                  definition:
                    "Vybavení a pomůcky pro vzdělávání.",
                },
                {
                  term: "Prostorové podmínky",
                  definition:
                    "Uspořádání a vybavení prostoru pro činnost.",
                },
                {
                  term: "Psychosociální podmínky",
                  definition:
                    "Atmosféra, vztahy a spolupráce ve skupině.",
                },
                {
                  term: "Bezpečnostní podmínky",
                  definition:
                    "Ochrana zdraví a bezpečí dětí při činnosti.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt: "Co jsou didaktické prostředky?",
              choices: [
                { id: "a", text: "Jen školní rozvrh" },
                { id: "b", text: "Nástroje podporující vzdělávání" },
                { id: "c", text: "Pouze administrativní zápis" },
                { id: "d", text: "Výhradně počet dětí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Didaktické prostředky jsou nástroje a prostředí, které podporují vzdělávání. Rozvrh nebo počet dětí samy prostředek nevymezují.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka připraví knihu s obrázky a dřevěné puzzle pro práci s dětmi. Které prostředky využívá?",
              choices: [
                { id: "a", text: "Jen personální podmínky" },
                { id: "b", text: "Pouze časové podmínky" },
                { id: "c", text: "Knihu, obrázky a pomůcky" },
                { id: "d", text: "Výhradně organizační formu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Kniha, obrázky a puzzle patří mezi didaktické prostředky — pomůcky a knihy. Personální nebo časové podmínky popisují jinou stránku vzdělávání.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Děti tvoří z žaluďů a listí a učitelka přehrává melodie na flétně. Které prostředky se využívají?",
              choices: [
                { id: "a", text: "Jen hygienické podmínky" },
                { id: "b", text: "Pouze personální podmínky" },
                { id: "c", text: "Výhradně školní rozvrh" },
                { id: "d", text: "Přírodní materiály a hudební nástroj" },
              ],
              correctChoiceId: "d",
              explanation:
                "Žaludy a listí jsou přírodní materiály, flétna hudební nástroj — obojí patří mezi didaktické prostředky. Rozvrh nebo hygiena jsou jiné kategorie.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka upraví koutek tak, aby děti měly klidné místo pro čtení a dostatek světla. Co využívá jako prostředek?",
              choices: [
                { id: "a", text: "Jen časovou podmínku" },
                { id: "b", text: "Prostředí třídy" },
                { id: "c", text: "Pouze personální podmínku" },
                { id: "d", text: "Výhradně metodu hodnocení" },
              ],
              correctChoiceId: "b",
              explanation:
                "Uspořádané prostředí třídy je didaktický prostředek. Čas nebo personál popisují podmínky, ne prostředí jako nástroj výuky.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Učitelka klidně vysvětluje postup a ukazuje, jak pracovat s materiálem. Který prostředek využívá?",
              choices: [
                { id: "a", text: "Jen hračku bez komunikace" },
                { id: "b", text: "Pouze digitální technologii" },
                { id: "c", text: "Slova a jednání pedagoga" },
                { id: "d", text: "Výhradně organizační formu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Slova a jednání pedagoga jsou didaktický prostředek. Hračka nebo technologie mohou být další prostředky, ale vysvětlení a ukázání jsou právě slova a činy pedagoga.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Ve třídě chybí dostatek stoliček a pracovní plocha je přeplněná. Které podmínky jsou narušené?",
              choices: [
                { id: "a", text: "Jen psychosociální" },
                { id: "b", text: "Pouze časové" },
                { id: "c", text: "Výhradně personální" },
                { id: "d", text: "Materiální a prostorové" },
              ],
              correctChoiceId: "d",
              explanation:
                "Nedostatek stoliček a přeplněný prostor souvisí s materiálními a prostorovými podmínkami. Čas nebo personál to samo nepopisují.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Aktivita trvá příliš krátce a chybí druhá dospělá osoba pro podporu dětí. Které podmínky jsou nedostatečné?",
              choices: [
                { id: "a", text: "Jen hygienické" },
                { id: "b", text: "Časové a personální" },
                { id: "c", text: "Pouze prostorové" },
                { id: "d", text: "Výhradně didaktické prostředky" },
              ],
              correctChoiceId: "b",
              explanation:
                "Krátký čas ovlivňuje časové podmínky, nedostatek dospělé osoby personální podmínky. Hygiena nebo prostor to v tomto případě neřeší.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Ve skupině panuje napětí a děti si navzájem nerozumí. Které podmínky jsou oslabené?",
              choices: [
                { id: "a", text: "Jen materiální" },
                { id: "b", text: "Pouze časové" },
                { id: "c", text: "Organizační a psychosociální" },
                { id: "d", text: "Výhradně bezpečnostní" },
              ],
              correctChoiceId: "c",
              explanation:
                "Napětí a nedorozumění souvisí s psychosociální atmosférou a organizací spolupráce ve skupině. Materiální vybavení to samo neřeší.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Před malováním učitelka zkontroluje, zda jsou barvy bezpečné a děti si umyjí ruce. Které podmínky sleduje?",
              choices: [
                { id: "a", text: "Jen personální" },
                { id: "b", text: "Pouze časové" },
                { id: "c", text: "Výhradně organizační formy" },
                { id: "d", text: "Hygienické a bezpečnostní" },
              ],
              correctChoiceId: "d",
              explanation:
                "Kontrola bezpečnosti barev a mytí rukou patří mezi hygienické a bezpečnostní podmínky. Personál nebo čas jsou jiné kategorie.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "prostredky-a-podminky-vzdelavani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "prostredky-a-podminky-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Stejnou hru vedla učitelka jednou v klidném koutku a podruhé v rušné místnosti s mnoha dětmi. Výsledek se lišil. Co to ukazuje?",
              choices: [
                { id: "a", text: "Podmínky nemají vliv na výsledek" },
                {
                  id: "b",
                  text: "Podmínky ovlivňují výsledek stejné činnosti",
                },
                { id: "c", text: "Cíl sám určuje výsledek bez vlivu prostředí" },
                { id: "d", text: "Organizační forma je totéž co podmínka" },
              ],
              correctChoiceId: "b",
              explanation:
                "Stejná činnost může mít jiný výsledek podle prostředí, času, atmosféry, počtu dětí a připravenosti pedagoga. Podmínky tedy výsledek ovlivňují.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "planovani-vzdelavaciho-procesu",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Plánování vzdělávacího procesu",
          summary:
            "Deset kroků plánování vzdělávacího procesu od zjištění potřeb po úpravu dalšího postupu.",
          order: 8,
          studySections: [
            {
              id: "vysvetleni-planovani",
              type: "explanation",
              title: "Plánování vzdělávacího procesu",
              body:
                "Plánování propojuje potřeby dětí, cíl, obsah, metody, organizační formy, prostředky, individualizaci, realizaci, sledování reakcí, vyhodnocení a úpravu dalšího postupu. Postupuje se od zjištění potřeb a výchozího stavu, přes stanovení cíle a výběr obsahu, volbu metod a forem, přípravu prostředků a prostředí, promyšlení individualizace, realizaci činnosti, sledování reakcí dětí, vyhodnocení výsledku až po úpravu dalšího postupu.",
            },
            {
              id: "pojmy-planovani",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Plánování",
                  definition:
                    "Promyšlený postup přípravy a vedení vzdělávání.",
                },
                {
                  term: "Výchozí stav",
                  definition:
                    "To, co děti už umí a jaké mají potřeby.",
                },
                {
                  term: "Individualizace",
                  definition:
                    "Přizpůsobení plánu konkrétním dětem.",
                },
                {
                  term: "Realizace",
                  definition:
                    "Skutečné provedení naplánované činnosti.",
                },
                {
                  term: "Vyhodnocení",
                  definition:
                    "Posouzení, zda byl dosažen zamýšlený výsledek.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Učitelka na začátku týdne pozoruje, co děti umí a co je zajímá. Který krok plánování právě dělá?",
              choices: [
                { id: "a", text: "Vyhodnocuje výsledek" },
                { id: "b", text: "Zjišťuje potřeby a výchozí stav" },
                { id: "c", text: "Realizuje činnost" },
                { id: "d", text: "Upravuje další postup" },
              ],
              correctChoiceId: "b",
              explanation:
                "První krok plánování je zjistit potřeby a výchozí stav dětí. Vyhodnocení nebo úprava postupu přicházejí až později.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Po pozorování učitelka zapíše: „Děti rozpoznají tři znaky podzimu.“ Který krok plánování právě provádí?",
              choices: [
                { id: "a", text: "Vybírá obsah" },
                { id: "b", text: "Sleduje reakce dětí" },
                { id: "c", text: "Stanovuje cíl" },
                { id: "d", text: "Připravuje prostředky" },
              ],
              correctChoiceId: "c",
              explanation:
                "Formulace toho, čeho má být dosaženo, je stanovení cíle. Výběr obsahu nebo prostředků následuje až po cíli.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "K cíli o podzimu učitelka volí práci s listím a příběh o lesním zvířátku. Který krok plánování to je?",
              choices: [
                { id: "a", text: "Realizace činnosti" },
                { id: "b", text: "Vyhodnocení výsledku" },
                { id: "c", text: "Zjištění potřeb" },
                { id: "d", text: "Výběr obsahu" },
              ],
              correctChoiceId: "d",
              explanation:
                "Volba témat a aktivit podle cíle je výběr obsahu. Realizace je až provedení v praxi.",
              order: 3,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Učitelka rozhodne, že děti budou pracovat ve skupinách a využije rozhovor. Který krok plánování provádí?",
              choices: [
                { id: "a", text: "Upravuje další postup" },
                { id: "b", text: "Zvolí metody a organizační formy" },
                { id: "c", text: "Vyhodnocuje výsledek" },
                { id: "d", text: "Zjišťuje výchozí stav" },
              ],
              correctChoiceId: "b",
              explanation:
                "Volba rozhovoru a skupinové práce je krok zvolit metody a organizační formy. Vyhodnocení nebo úprava postupu přicházejí později.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Před hodinou učitelka připraví listí, obrázky a upraví koutek. Který krok plánování to je?",
              choices: [
                { id: "a", text: "Sledování reakcí dětí" },
                { id: "b", text: "Stanovení cíle" },
                { id: "c", text: "Příprava prostředků a prostředí" },
                { id: "d", text: "Realizace činnosti" },
              ],
              correctChoiceId: "c",
              explanation:
                "Příprava pomůcek a prostředí je krok připravit prostředky a prostředí. Realizace je samotné vedení činnosti s dětmi.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Učitelka naplánuje jednodušší úkol pro dítě, které potřebuje více podpory. Který krok plánování provádí?",
              choices: [
                { id: "a", text: "Vyhodnocuje výsledek" },
                { id: "b", text: "Zjišťuje potřeby" },
                { id: "c", text: "Vybírá obsah" },
                { id: "d", text: "Promýšlí individualizaci" },
              ],
              correctChoiceId: "d",
              explanation:
                "Přizpůsobení plánu konkrétnímu dítěti je promyšlení individualizace. Zjištění potřeb je dřívější krok, vyhodnocení pozdější.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Učitelka vede připravenou aktivitu s dětmi podle plánu. Který krok plánování právě probíhá?",
              choices: [
                { id: "a", text: "Zjištění výchozího stavu" },
                { id: "b", text: "Realizace činnosti" },
                { id: "c", text: "Stanovení cíle" },
                { id: "d", text: "Úprava dalšího postupu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Skutečné vedení aktivity s dětmi je realizace činnosti. Přípravné kroky už proběhly dříve.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Během aktivity učitelka všíma pozornost, kdo se zapojuje a kdo potřebuje pomoc. Který krok plánování provádí?",
              choices: [
                { id: "a", text: "Výběr obsahu" },
                { id: "b", text: "Příprava prostředků" },
                { id: "c", text: "Sledování reakcí dětí" },
                { id: "d", text: "Stanovení cíle" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pozorování zapojení a potřeb dětí během činnosti je sledování reakcí. Vyhodnocení přichází po skončení aktivity.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Po aktivitě učitelka posoudí, zda děti dosáhly zamýšleného cíle. Který krok plánování provádí?",
              choices: [
                { id: "a", text: "Zjištění potřeb" },
                { id: "b", text: "Realizaci činnosti" },
                { id: "c", text: "Výběr obsahu" },
                { id: "d", text: "Vyhodnocení výsledku" },
              ],
              correctChoiceId: "d",
              explanation:
                "Posouzení dosažení cíle po činnosti je vyhodnocení výsledku. Sledování reakcí probíhá během aktivity.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "planovani-vzdelavaciho-procesu",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "planovani-vzdelavaciho-procesu",
              type: "multiple-choice",
              prompt:
                "Podle zjištění z hodiny učitelka změní příští postup a přidá více podpory. Který krok plánování provádí?",
              choices: [
                { id: "a", text: "Úpravu dalšího postupu" },
                { id: "b", text: "Stanovení cíle" },
                { id: "c", text: "Zjištění výchozího stavu" },
                { id: "d", text: "Realizaci činnosti" },
              ],
              correctChoiceId: "a",
              explanation:
                "Změna dalšího plánování na základě vyhodnocení je úprava dalšího postupu — poslední krok plánovacího cyklu.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "pedagogicke-hodnoceni-a-reflexe",
          subjectId: "obecna-pedagogika",
          unitId: "zaklady-obecne-didaktiky",
          title: "Pedagogické hodnocení a reflexe",
          summary:
            "Hodnocení dítěte a procesu, zpětná vazba, formativní a sumativní hodnocení a reflexe pedagoga.",
          order: 9,
          studySections: [
            {
              id: "vysvetleni-pedagogicke-hodnoceni",
              type: "explanation",
              title: "Pedagogické hodnocení a reflexe",
              body:
                "Pedagogické hodnocení se může týkat dítěte i vzdělávacího procesu. Dítě se může samo hodnotit, pedagog reflektuje vlastní práci. Zpětná vazba může být průběžná i závěrečná. Formativní hodnocení podporuje další učení, sumativní shrnuje výsledek. Popisná zpětná vazba je vhodnější než nálepkování nebo srovnávání dětí. Reflexe vede k úpravě další praxe — například zda byl dosažen cíl, zda byla aktivita vhodná a co změnit příště.",
            },
            {
              id: "pojmy-pedagogicke-hodnoceni",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Formativní hodnocení",
                  definition:
                    "Hodnocení podporující další učení a rozvoj.",
                },
                {
                  term: "Sumativní hodnocení",
                  definition:
                    "Hodnocení shrnující dosažený výsledek.",
                },
                {
                  term: "Zpětná vazba",
                  definition:
                    "Informace podporující další učení nebo zlepšení.",
                },
                {
                  term: "Sebehodnocení",
                  definition:
                    "Hodnocení vlastní práce dítěte nebo pedagoga.",
                },
                {
                  term: "Reflexe",
                  definition:
                    "Zamyšlení nad průběhem a výsledkem činnosti.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Učitelka sleduje, jak dítě roztřídilo přírodniny podle barvy. Co hodnotí?",
              choices: [
                { id: "a", text: "Jen školní rozvrh" },
                { id: "b", text: "Dítě" },
                { id: "c", text: "Pouze budovu školy" },
                { id: "d", text: "Výhradně počasí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sledování výkonu konkrétního dítěte je hodnocení dítěte. Hodnocení procesu by se týkalo průběhu celé aktivity.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Po hodině učitelka posoudí, zda byl vhodný postup a tempo aktivity. Co hodnotí?",
              choices: [
                { id: "a", text: "Jen jedno dítě" },
                { id: "b", text: "Pouze pomůcky" },
                { id: "c", text: "Vzdělávací proces" },
                { id: "d", text: "Výhradně rozvrh jídel" },
              ],
              correctChoiceId: "c",
              explanation:
                "Posouzení postupu a tempa celé aktivity je hodnocení vzdělávacího procesu. Hodnocení dítěte se zaměřuje na konkrétního žáka.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Dítě si po práci řekne: „Povedlo se mi roztřídit většinu listů.“ Co dělá?",
              choices: [
                { id: "a", text: "Hodnotí školu" },
                { id: "b", text: "Reflektuje pedagoga" },
                { id: "c", text: "Porovnává ostatní děti" },
                { id: "d", text: "Sebehodnocení" },
              ],
              correctChoiceId: "d",
              explanation:
                "Když dítě hodnotí vlastní práci, jde o sebehodnocení dítěte. Reflexe pedagoga nebo srovnávání s ostatními je něco jiného.",
              order: 3,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Po hodině se učitelka zamýšlí, zda byl její postup vhodný. Co provádí?",
              choices: [
                { id: "a", text: "Sebehodnocení dítěte" },
                { id: "b", text: "Sebereflexi pedagoga" },
                { id: "c", text: "Hodnocení školy inspekcí" },
                { id: "d", text: "Sumativní hodnocení celé školy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Zamyšlení pedagoga nad vlastní praxí je sebereflexe pedagoga. Hodnocení školy inspekcí patří do jiné oblasti.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Během činnosti učitelka dítěti řekne: „Zkus držet nůžky takto.“ Co poskytuje?",
              choices: [
                { id: "a", text: "Závěrečnou zpětnou vazbu" },
                { id: "b", text: "Sumativní hodnocení" },
                { id: "c", text: "Průběžnou zpětnou vazbu" },
                { id: "d", text: "Hodnocení celé školy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Krátká rada během práce je průběžná zpětná vazba. Závěrečná zpětná vazba přichází po dokončení činnosti.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Po skončení projektu učitelka shrne, co se dětem povedlo a co zkusit příště. Co poskytuje?",
              choices: [
                { id: "a", text: "Jen průběžnou vazbu bez shrnutí" },
                { id: "b", text: "Hodnocení školy" },
                { id: "c", text: "Pouze známku" },
                { id: "d", text: "Závěrečnou zpětnou vazbu" },
              ],
              correctChoiceId: "d",
              explanation:
                "Shrnutí po dokončení činnosti je závěrečná zpětná vazba. Průběžná vazba probíhá během práce.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Učitelka podle pozorování upraví další aktivitu, aby dítě lépe pochopilo úkol. Jaký typ hodnocení využívá?",
              choices: [
                { id: "a", text: "Sumativní hodnocení" },
                { id: "b", text: "Formativní hodnocení" },
                { id: "c", text: "Hodnocení celé školy" },
                { id: "d", text: "Pouze srovnávání dětí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Formativní hodnocení podporuje další učení a úpravu postupu. Sumativní shrnuje výsledek po ukončení celku.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Na konci týdne učitelka shrne, čeho děti za ten čas dosáhly. Jaký typ hodnocení využívá?",
              choices: [
                { id: "a", text: "Pouze formativní" },
                { id: "b", text: "Hodnocení školy" },
                { id: "c", text: "Sumativní hodnocení" },
                { id: "d", text: "Jen průběžnou vazbu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Shrnutí dosaženého výsledku po určitém období je sumativní hodnocení. Formativní podporuje průběžné učení.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Učitelka řekne: „Povedlo se ti roztřídit listy podle tvaru, zkus příště i podle barvy.“ Jaký typ zpětné vazby využívá?",
              choices: [
                { id: "a", text: "Nálepkování dítěte" },
                { id: "b", text: "Srovnání s nejlepším žákem" },
                { id: "c", text: "Pouze známku bez slova" },
                { id: "d", text: "Popisnou zpětnou vazbu" },
              ],
              correctChoiceId: "d",
              explanation:
                "Konkrétní popis toho, co se povedlo a co zkusit dál, je popisná zpětná vazba. Nálepkování nebo srovnávání jsou rizikové.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Učitelka řekne dítěti: „Jsi nejlepší ve třídě v kreslení.“ Jaké riziko tím vzniká?",
              choices: [
                { id: "a", text: "Podpora sebehodnocení" },
                { id: "b", text: "Riziko nálepkování dítěte" },
                { id: "c", text: "Popisná zpětná vazba" },
                { id: "d", text: "Formativní hodnocení" },
              ],
              correctChoiceId: "b",
              explanation:
                "Přisouzení pevné nálepky může dítě omezit a ovlivnit jeho sebevnímání. Popisná zpětná vazba je bezpečnější.",
              order: 10,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Učitelka před ostatními řekne: „Podívejte, on to umí nejlíp.“ Jaké riziko tím vzniká?",
              choices: [
                { id: "a", text: "Podpora reflexe" },
                { id: "b", text: "Sebehodnocení dítěte" },
                { id: "c", text: "Riziko srovnávání dětí" },
                { id: "d", text: "Popisná zpětná vazba" },
              ],
              correctChoiceId: "c",
              explanation:
                "Veřejné srovnávání dětí může poškodit sebevědomí a vztahy ve skupině. Hodnocení má být obezřetné a respektující.",
              order: 11,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "zaklady-obecne-didaktiky",
                "pedagogicke-hodnoceni-a-reflexe",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zaklady-obecne-didaktiky",
              lessonId: "pedagogicke-hodnoceni-a-reflexe",
              type: "multiple-choice",
              prompt:
                "Po reflexi si učitelka zapíše: „Příště zkrátím výklad a dám více času na praktickou část.“ Co tím docílí?",
              choices: [
                { id: "a", text: "Úpravu další praxe" },
                { id: "b", text: "Ignorování zjištění" },
                { id: "c", text: "Konec reflexe" },
                { id: "d", text: "Hodnocení školy inspekcí" },
              ],
              correctChoiceId: "a",
              explanation:
                "Reflexe má vést k úpravě budoucí praxe. Zápis změny pro příště ukazuje, že reflexe má praktický následek.",
              order: 12,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
      ],
    },
    {
      id: "vybrane-kapitoly-ze-socialni-pedagogiky",
      subjectId: "obecna-pedagogika",
      title: "Vybrané kapitoly ze sociální pedagogiky",
      description: "Sociální pedagogika, rodina a výchovné styly",
      order: 4,
      lessons: [
        {
          id: "socialni-pedagogika",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Sociální pedagogika",
          summary:
            "Význam sociální pedagogiky, vztah výchovy a sociálního prostředí, podpora dětí a spolupráce institucí.",
          order: 1,
          studySections: [
            {
              id: "vysvetleni-socialni-pedagogika",
              type: "explanation",
              title: "Sociální pedagogika",
              body:
                "Sociální pedagogika sleduje vztah výchovy a sociálního prostředí. Vývoj člověka ovlivňuje rodina, škola, vrstevníci i širší společnost. Sociální pedagogika podporuje děti v obtížných životních podmínkách, zabývá se prevencí sociálních problémů a podporuje spolupráci školy, rodiny a dalších institucí. Nezabývá se pouze „problémovými dětmi“ — její poznatky a postupy mají širší význam pro výchovu a vzdělávání.",
            },
            {
              id: "pojmy-socialni-pedagogika",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Sociální pedagogika",
                  definition:
                    "Oblast pedagogiky sledující vztah výchovy a sociálního prostředí.",
                },
                {
                  term: "Sociální prostředí",
                  definition:
                    "Prostředí, ve kterém dítě žije a v němž působí výchovné vlivy.",
                },
                {
                  term: "Prevence",
                  definition:
                    "Předcházení sociálním problémům a obtížím v životě dítěte.",
                },
                {
                  term: "Podpora dítěte",
                  definition:
                    "Cílená pomoc dětem v náročných životních podmínkách.",
                },
                {
                  term: "Spolupráce institucí",
                  definition:
                    "Koordinovaná spolupráce školy, rodiny a dalších institucí v zájmu dítěte.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt: "Čím se sociální pedagogika zabývá jako pedagogická oblast?",
              choices: [
                { id: "a", text: "Výhradně školním rozvrhem hodin" },
                {
                  id: "b",
                  text: "Vztahy výchovy a sociálního prostředí",
                },
                { id: "c", text: "Pouze biologickým růstem bez vlivu okolí" },
                { id: "d", text: "Jen administrativou školy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální pedagogika sleduje, jak spolu souvisí výchova a sociální prostředí, ve kterém dítě žije. Nejde o organizační detaily školy ani o biologický růst samostatně.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Učitelka přemýšlí, jak domácí situace a školní prostředí společně ovlivňují chování dítěte. Který přístup odpovídá sociální pedagogice?",
              choices: [
                { id: "a", text: "Výchova a prostředí spolu nesouvisí" },
                { id: "b", text: "Důležité je jen školní učivo" },
                {
                  id: "c",
                  text: "Výchova a sociální prostředí se vzájemně ovlivňují",
                },
                { id: "d", text: "Prostředí nemá vliv na výchovu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Sociální pedagogika vychází z toho, že výchova a sociální prostředí spolu souvisí. Dítě se formuje v kontaktu s rodinou, školou i dalšími vlivy okolí.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Které prostředí patří mezi významné vlivy vývoje dítěte v sociální pedagogice?",
              choices: [
                { id: "a", text: "Pouze počasí bez vztahu k lidem" },
                { id: "b", text: "Jen barva školních stěn" },
                { id: "c", text: "Výhradně školní jídelna" },
                {
                  id: "d",
                  text: "Rodina a škola",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Vývoj člověka ovlivňuje mimo jiné rodina a škola. Sociální pedagogika tyto vlivy zohledňuje při podpoře dítěte. Barva stěn nebo počasí samy o sobě nejsou klíčové sociální vlivy.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Dítě ve školce napodobuje chování kamarádů a zároveň přebírá hodnoty z okolí mimo rodinu. Které vlivy sociální pedagogika zohledňuje?",
              choices: [
                { id: "a", text: "Jen vnitřní orgány bez vlivu okolí" },
                {
                  id: "b",
                  text: "Vrstevníky a širší společnost",
                },
                { id: "c", text: "Pouze školní rozvrh" },
                { id: "d", text: "Výhradně hračky ve třídě" },
              ],
              correctChoiceId: "b",
              explanation:
                "Kromě rodiny a školy ovlivňují vývoj člověka také vrstevníci a širší společnost. Sociální pedagogika tyto vlivy bere v úvahu při práci s dítětem.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Dítě prožívá náročnou životní situaci a ve školce potřebuje větší porozumění a podporu. Co je úkolem sociální pedagogiky?",
              choices: [
                { id: "a", text: "Dítě ignorovat a čekat" },
                { id: "b", text: "Podporovat dítě v obtížných podmínkách" },
                { id: "c", text: "Pouze hodnotit známky" },
                { id: "d", text: "Izolovat dítě od ostatních" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální pedagogika podporuje děti v obtížných životních podmínkách. Cílem není dítě odsoudit ani izolovat, ale nabídnout vhodnou pomoc a porozumění.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Školka plánuje program pro rozvoj spolupráce ve skupině a řešení drobných konfliktů mezi dětmi. Která oblast sociální pedagogiky se tím projevuje?",
              choices: [
                { id: "a", text: "Pouze školní administrativa" },
                { id: "b", text: "Jen hodnocení známek" },
                {
                  id: "c",
                  text: "Prevence sociálních problémů",
                },
                { id: "d", text: "Výhradně úklid třídy" },
              ],
              correctChoiceId: "c",
              explanation:
                "Prevence sociálních problémů patří k úkolům sociální pedagogiky. Včasná podpora spolupráce a řešení konfliktů může předcházet větším obtížím.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "Učitelka domlouvá schůzku s rodiči a kontaktuje poradenské pracoviště kvůli podpoře dítěte. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Práci bez kontaktu s rodinou" },
                {
                  id: "b",
                  text: "Spolupráci školy, rodiny a dalších institucí",
                },
                { id: "c", text: "Pouze vlastní rozhodnutí bez informování" },
                { id: "d", text: "Izolaci dítěte od rodičů" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální pedagogika podporuje spolupráci školy, rodiny a dalších institucí. Společná koordinace pomáhá dítěti lépe než práce každého zvlášť.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-pedagogika",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-pedagogika",
              type: "multiple-choice",
              prompt:
                "K čemu slouží sociální pedagogika podle jejího širšího významu?",
              choices: [
                { id: "a", text: "Pouze dětem označeným jako problémové" },
                { id: "b", text: "Jen školní inspekci" },
                {
                  id: "c",
                  text: "Širší podpoře výchovy a vzdělávání, ne jen vybraným dětem",
                },
                { id: "d", text: "Výhradně trestání chování" },
              ],
              correctChoiceId: "c",
              explanation:
                "Sociální pedagogika se nezabývá pouze „problémovými dětmi“. Její poznatky o prostředí, prevenci a spolupráci mají význam pro výchovu a vzdělávání šířeji.",
              order: 8,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "rodina-a-jeji-funkce",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Rodina a její funkce",
          summary:
            "Funkce rodiny, různé rodinné formy a vliv rodinné situace na dítě a spolupráci se školou.",
          order: 2,
          studySections: [
            {
              id: "vysvetleni-rodina-funkce",
              type: "explanation",
              title: "Rodina a její funkce",
              body:
                "Rodina plní biologickou a reprodukční, emocionální, výchovnou, socializační, ochrannou, ekonomickou, kulturní a rekreační funkci. Existují různé rodinné formy — úplná, neúplná, rekonstruovaná rodina, náhradní rodinná péče, vícegenerační rodina i rodiny z různých kulturních prostředí. Podoby rodiny se historicky a kulturně proměňují. Rodinná situace může ovlivnit dítě i spolupráci školy s rodinou.",
            },
            {
              id: "pojmy-rodina-funkce",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Funkce rodiny",
                  definition:
                    "Úlohy, které rodina plní pro své členy a společnost.",
                },
                {
                  term: "Úplná rodina",
                  definition:
                    "Rodina, kde oba rodiče žijí společně s dětmi.",
                },
                {
                  term: "Neúplná rodina",
                  definition:
                    "Rodina, kde jeden z rodičů chybí nebo není přítomen.",
                },
                {
                  term: "Rekonstruovaná rodina",
                  definition:
                    "Rodina vzniklá po rozchodu nebo rozvodu, často s novým partnerem.",
                },
                {
                  term: "Náhradní rodinná péče",
                  definition:
                    "Péče o dítě mimo původní rodinu, například u pěstounů nebo v ústavu.",
                },
                {
                  term: "Vícegenerační rodina",
                  definition:
                    "Rodina, kde spolu žijí více generací, například prarodiče s rodiči a dětmi.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Rodina zajišťuje zrození dítěte a jeho fyzický růst v bezpečí domova. Kterou funkci rodiny to ilustruje?",
              choices: [
                { id: "a", text: "Rekreační funkci" },
                {
                  id: "b",
                  text: "Biologickou a reprodukční funkci",
                },
                { id: "c", text: "Ekonomickou funkci" },
                { id: "d", text: "Kulturní funkci" },
              ],
              correctChoiceId: "b",
              explanation:
                "Biologická a reprodukční funkce rodiny souvisí se zrozením dítěte a zajištěním jeho základních biologických potřeb. Rekreace nebo kultura jsou jiné oblasti.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Dítě se po náročném dni ve školce cítí bezpečně, když ho rodič objímá a uklidní. Která funkce rodiny je zde hlavní?",
              choices: [
                { id: "a", text: "Ekonomická funkce" },
                { id: "b", text: "Biologická funkce" },
                {
                  id: "c",
                  text: "Emocionální funkce",
                },
                { id: "d", text: "Rekreační funkce" },
              ],
              correctChoiceId: "c",
              explanation:
                "Emocionální funkce rodiny zahrnuje lásku, bezpečí a citovou podporu. Ekonomická funkce se týká zajištění materiálních potřeb, ne pocitu bezpečí.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Rodiče učí dítě dodržovat domácí pravidla a přebírat odpovědnost za drobné úkoly. Kterou funkci rodiny to ukazuje?",
              choices: [
                { id: "a", text: "Ochrannou funkci" },
                { id: "b", text: "Rekreační funkci" },
                { id: "c", text: "Ekonomickou funkci" },
                {
                  id: "d",
                  text: "Výchovnou funkci",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Výchovná funkce rodiny spočívá v vedení dítěte, učení pravidel a odpovědnosti. Ochranná funkce se více týká bezpečí a ochrany před nebezpečím.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Dítě se doma učí pozdravit hosty a chovat se slušně při společné večeři. Kterou funkci rodiny to nejlépe vystihuje?",
              choices: [
                { id: "a", text: "Biologickou funkci" },
                {
                  id: "b",
                  text: "Socializační funkci",
                },
                { id: "c", text: "Ekonomickou funkci" },
                { id: "d", text: "Rekreační funkci" },
              ],
              correctChoiceId: "b",
              explanation:
                "Socializační funkce rodiny pomáhá dítěti osvojit si chování a zvyky potřebné pro život mezi lidmi. Biologická funkce se týká zrození a péče o tělesné potřeby.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Rodiče hlídají dítě u silnice a učí ho, co je nebezpečné. Kterou funkci rodiny to představuje?",
              choices: [
                { id: "a", text: "Kulturní funkci" },
                { id: "b", text: "Ochrannou funkci" },
                { id: "c", text: "Rekreační funkci" },
                { id: "d", text: "Ekonomickou funkci" },
              ],
              correctChoiceId: "b",
              explanation:
                "Ochranná funkce rodiny zahrnuje ochranu dítěte před nebezpečím a riziky. Kulturní funkce se týká předávání tradic a hodnot, ne bezpečnosti u silnice.",
              order: 5,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Rodina zajišťuje oblečení, jídlo a základní potřeby dítěte. Kterou funkci rodiny to ilustruje?",
              choices: [
                { id: "a", text: "Emocionální funkci" },
                { id: "b", text: "Socializační funkci" },
                {
                  id: "c",
                  text: "Ekonomickou funkci",
                },
                { id: "d", text: "Rekreační funkci" },
              ],
              correctChoiceId: "c",
              explanation:
                "Ekonomická funkce rodiny zahrnuje zajištění materiálních potřeb a prostředků pro život. Emocionální funkce se týká citové podpory, ne materiálního zabezpečení.",
              order: 6,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Dítě se doma učí písničky, zvyky a tradice své rodiny. Kterou funkci rodiny to ukazuje?",
              choices: [
                { id: "a", text: "Biologickou funkci" },
                {
                  id: "b",
                  text: "Kulturní funkci",
                },
                { id: "c", text: "Ochrannou funkci" },
                { id: "d", text: "Ekonomickou funkci" },
              ],
              correctChoiceId: "b",
              explanation:
                "Kulturní funkce rodiny předává dítěti tradice, zvyky a kulturní hodnoty. Biologická funkce se týká zrození a tělesných potřeb.",
              order: 7,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Rodina společně hraje hry, chodí na výlet nebo si užívá volný čas. Kterou funkci rodiny to vystihuje?",
              choices: [
                { id: "a", text: "Výchovnou funkci" },
                { id: "b", text: "Ekonomickou funkci" },
                { id: "c", text: "Ochrannou funkci" },
                {
                  id: "d",
                  text: "Rekreační funkci",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Rekreační funkce rodiny zahrnuje společný odpočinek, hry a volnočasové aktivity. Výchovná funkce se více týká vedení a pravidel.",
              order: 8,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Ve třídě jsou děti z rodin, kde žijí oba rodiče, jen jeden rodič nebo rodina s novým partnerem po rozchodu. Jak tyto formy správně pojmenovat?",
              choices: [
                { id: "a", text: "Všechny jsou stejné funkce rodiny" },
                { id: "b", text: "Jen školní skupiny" },
                {
                  id: "c",
                  text: "Úplná, neúplná a rekonstruovaná rodina",
                },
                { id: "d", text: "Pouze náhradní péče" },
              ],
              correctChoiceId: "c",
              explanation:
                "Mezi běžné rodinné formy patří úplná rodina, neúplná rodina a rekonstruovaná rodina. Nejde o školní skupiny ani o to, že by všechny formy byly totéž.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Dítě bydlí u pěstounů nebo spolu s prarodiči a rodiči v jedné domácnosti. Které uspořádání to může představovat?",
              choices: [
                { id: "a", text: "Pouze školní třídu" },
                {
                  id: "b",
                  text: "Náhradní rodinnou péči nebo vícegenerační rodinu",
                },
                { id: "c", text: "Jen rekreační skupinu" },
                { id: "d", text: "Výhradně pracovní tým" },
              ],
              correctChoiceId: "b",
              explanation:
                "Náhradní rodinná péče zajišťuje dítě mimo původní rodinu, vícegenerační rodina sdílí domácnost více generací. Obě jsou rodinná uspořádání, ne školní skupina.",
              order: 10,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Ve školce jsou děti z rodin s různými zvyky a tradicemi a učitelka to respektuje. Co tím odráží?",
              choices: [
                { id: "a", text: "Že rodina se nikdy nemění" },
                { id: "b", text: "Že existuje jen jedna rodinná forma" },
                {
                  id: "c",
                  text: "Kulturní a historickou proměnlivost rodiny",
                },
                { id: "d", text: "Že rodina nemá vliv na dítě" },
              ],
              correctChoiceId: "c",
              explanation:
                "Podoby rodiny se historicky a kulturně proměňují a existují rodiny z různých kulturních prostředí. Pedagog to zohledňuje, aniž by jednu formu automaticky hodnotil jako lepší.",
              order: 11,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodina-a-jeji-funkce",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodina-a-jeji-funkce",
              type: "multiple-choice",
              prompt:
                "Dítě často přichází unavené a rodič má málo času na komunikaci se školkou. Co z toho plyne pro pedagoga?",
              choices: [
                {
                  id: "a",
                  text: "Rodinná situace může ovlivnit dítě i spolupráci školy s rodinou",
                },
                { id: "b", text: "Rodina nikdy neovlivňuje práci ve školce" },
                { id: "c", text: "Škola nemusí s rodinou komunikovat" },
                { id: "d", text: "Forma rodiny sama určuje úspěch dítěte" },
              ],
              correctChoiceId: "a",
              explanation:
                "Rodinná situace může ovlivnit dítě i spolupráci školy s rodinou. Pedagog to zohledňuje, ale nehodnotí automaticky jednu rodinnou formu jako horší nebo lepší.",
              order: 12,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "rodinna-vychova-a-vychovne-styly",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Rodinná výchova a výchovné styly",
          summary:
            "Výchovné styly v rodině, význam hranic a věcná spolupráce pedagoga s rodiči.",
          order: 3,
          studySections: [
            {
              id: "vysvetleni-vychovne-styly",
              type: "explanation",
              title: "Rodinná výchova a výchovné styly",
              body:
                "Autoritářský styl zdůrazňuje silnou kontrolu a poslušnost, liberální styl poskytuje mnoho volnosti a málo hranic, demokratický nebo respektující styl spojuje pravidla, respekt a přiměřenou samostatnost. Nedůslednost znamená proměnlivá nebo nepředvídatelná pravidla, přehnaná ochrana omezuje příležitosti k samostatnosti a zanedbávání znamená nedostatek potřebné péče a podpory. Hranice a pravidla pomáhají vytvářet bezpečí. Výchovné styly mohou ovlivňovat chování a prožívání dítěte. Pedagog nemá rodinu rychle odsuzovat, ale popisovat konkrétní projevy dítěte a komunikovat věcně v jeho zájmu.",
            },
            {
              id: "pojmy-vychovne-styly",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Autoritářský styl",
                  definition:
                    "Styl s důrazem na silnou kontrolu a poslušnost.",
                },
                {
                  term: "Liberální styl",
                  definition:
                    "Styl s velkou volností a málo stanovených hranic.",
                },
                {
                  term: "Demokratický styl",
                  definition:
                    "Styl spojující pravidla, respekt a přiměřenou samostatnost.",
                },
                {
                  term: "Nedůslednost",
                  definition:
                    "Proměnlivá nebo nepředvídatelná pravidla ve výchově.",
                },
                {
                  term: "Přehnaná ochrana",
                  definition:
                    "Omezení příležitostí dítěte k samostatnosti z obavy.",
                },
                {
                  term: "Zanedbávání",
                  definition:
                    "Nedostatek potřebné péče a podpory dítěte.",
                },
                {
                  term: "Hranice",
                  definition:
                    "Pravidla a limity, které pomáhají vytvářet bezpečí.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Rodič trvá na okamžité poslušnosti bez vysvětlení a dítě se bojí říct vlastní názor. Který výchovný styl to nejlépe vystihuje?",
              choices: [
                { id: "a", text: "Liberální styl" },
                {
                  id: "b",
                  text: "Autoritářský styl",
                },
                { id: "c", text: "Demokratický styl" },
                { id: "d", text: "Nedůslednost" },
              ],
              correctChoiceId: "b",
              explanation:
                "Autoritářský styl zdůrazňuje silnou kontrolu a poslušnost. Demokratický styl naopak spojuje pravidla s respektem a přiměřenou samostatností.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Dítě si může dělat téměř cokoli, rodiče málo stanovují pravidla a hranice. Který styl to popisuje?",
              choices: [
                { id: "a", text: "Autoritářský styl" },
                { id: "b", text: "Demokratický styl" },
                {
                  id: "c",
                  text: "Liberální styl",
                },
                { id: "d", text: "Zanedbávání" },
              ],
              correctChoiceId: "c",
              explanation:
                "Liberální styl poskytuje mnoho volnosti a málo hranic. Zanedbávání znamená nedostatek péče, ne nutně záměrně velkou volnost s přítomnými rodiči.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Rodiče vysvětlují pravidla, respektují dítě a zároveň mu dávají přiměřenou samostatnost. Který styl to vystihuje?",
              choices: [
                { id: "a", text: "Autoritářský styl" },
                { id: "b", text: "Liberální styl bez pravidel" },
                { id: "c", text: "Přehnaná ochrana" },
                {
                  id: "d",
                  text: "Demokratický nebo respektující styl",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Demokratický nebo respektující styl spojuje pravidla, respekt a přiměřenou samostatnost. Autoritářský styl kladě důraz hlavně na kontrolu a poslušnost.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Dnes je něco zakázané, zítra stejná věc projde bez povšimnutí a dítě neví, co platí. Co to ukazuje?",
              choices: [
                { id: "a", text: "Demokratický styl" },
                {
                  id: "b",
                  text: "Nedůslednost",
                },
                { id: "c", text: "Kulturní funkci rodiny" },
                { id: "d", text: "Spolupráci institucí" },
              ],
              correctChoiceId: "b",
              explanation:
                "Nedůslednost znamená proměnlivá nebo nepředvídatelná pravidla. Dítě pak těžko odhaduje, co se od něj očekává.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Rodič dítěti skoro vše udělá sám a nechce ho nechat zkusit obléknout se nebo uklidit hračky. Co to může představovat?",
              choices: [
                { id: "a", text: "Liberální styl s mnoha hranicemi" },
                { id: "b", text: "Přehnanou ochranu omezující samostatnost" },
                { id: "c", text: "Demokratický styl" },
                { id: "d", text: "Rekreační funkci rodiny" },
              ],
              correctChoiceId: "b",
              explanation:
                "Přehnaná ochrana omezuje příležitosti dítěte k samostatnosti. Rodič sice pečuje, ale brání dítěti vyzkoušet si věci samo.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Dítě často přichází do školky bez dostatečné péče, rodič málo reaguje na jeho potřeby doma. Co tento stav nejlépe vystihuje?",
              choices: [
                { id: "a", text: "Demokratický styl" },
                { id: "b", text: "Přehnanou ochranu" },
                {
                  id: "c",
                  text: "Zanedbávání",
                },
                { id: "d", text: "Kulturní tradici" },
              ],
              correctChoiceId: "c",
              explanation:
                "Zanedbávání znamená nedostatek potřebné péče a podpory. Nejde o demokratický styl ani o ochranu — jde o nedostatečnou péči.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Ve školce platí jasná pravidla pro hru a odchod domů. Proč jsou hranice a pravidla pro dítě důležité?",
              choices: [
                { id: "a", text: "Jen aby děti nemohly nic dělat" },
                {
                  id: "b",
                  text: "Pomáhají vytvářet bezpečí a předvídatelnost",
                },
                { id: "c", text: "Slouží pouze k trestání" },
                { id: "d", text: "Nemají žádný význam" },
              ],
              correctChoiceId: "b",
              explanation:
                "Hranice a pravidla pomáhají vytvářet bezpečí. Dítě ví, co se očekává, a cítí se jistěji než při nejasných nebo proměnlivých pravidlech.",
              order: 7,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Dítě z domova s častou nedůsledností pravidel může mít ve školce potíže s čekáním na řadu. Co z toho plyne?",
              choices: [
                { id: "a", text: "Výchovný styl nikdy neovlivňuje dítě" },
                { id: "b", text: "Jeden projev vždy dokazuje diagnózu" },
                {
                  id: "c",
                  text: "Výchovné styly mohou ovlivňovat chování a prožívání dítěte",
                },
                { id: "d", text: "Škola nemá s tím nic společného" },
              ],
              correctChoiceId: "c",
              explanation:
                "Výchovné styly mohou ovlivňovat chování a prožívání dítěte. Z jednoho projevu však nelze automaticky určit styl ani diagnózu — jde o možný vliv, ne o jistý důkaz.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Učitelka slyší o domácím prostředí dítěte a chce jednat odborně. Jaký postup je vhodný?",
              choices: [
                { id: "a", text: "Rychle odsoudit rodinu před ostatními" },
                { id: "b", text: "Rodinu ignorovat" },
                { id: "c", text: "Diagnostikovat rodinu podle jednoho chování" },
                {
                  id: "d",
                  text: "Neodsuzovat rodinu a vycházet z konkrétních projevů dítěte",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog nemá rodinu rychle odsuzovat. Má popisovat konkrétní projevy dítěte a jednat věcně, ne moralizovat ani diagnostikovat rodinu.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "rodinna-vychova-a-vychovne-styly",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "rodinna-vychova-a-vychovne-styly",
              type: "multiple-choice",
              prompt:
                "Učitelka pozve rodiče ke schůzce, popíše pozorování dítěte ve školce a domluví společný postup. Co tím uplatňuje?",
              choices: [
                {
                  id: "a",
                  text: "Věcnou spolupráci s rodiči v zájmu dítěte",
                },
                { id: "b", text: "Trestání rodičů za chování dítěte" },
                { id: "c", text: "Veřejné srovnávání rodin" },
                { id: "d", text: "Ignorování rodičů" },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagog má komunikovat věcně v zájmu dítěte a spolupracovat s rodiči. Schůzka s popisem pozorování a domluveným postupem je příkladem takové spolupráce.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "spoluprace-rodiny-a-skoly",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Spolupráce rodiny a školy",
          summary:
            "Principy spolupráce rodiny a školy: respekt, komunikace, diskrétnost a společná podpora dítěte.",
          order: 4,
          studySections: [
            {
              id: "vysvetleni-spoluprace-rodiny-skoly",
              type: "explanation",
              title: "Spolupráce rodiny a školy",
              body:
                "Spolupráce rodiny a školy má podporovat dítě. Základem je vzájemný respekt a pravidelná, srozumitelná komunikace. Pedagog sděluje konkrétní pozorování, ne nálepky, aktivně naslouchá rodičům a citlivé informace řeší diskrétně. Rozdílný názor se řeší věcně se zaměřením na potřeby dítěte. Rodiče přinášejí důležité informace o dítěti, škola srozumitelně vysvětluje své postupy a společně lze hledat podpůrné kroky.",
            },
            {
              id: "pojmy-spoluprace-rodiny-skoly",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Spolupráce rodiny a školy",
                  definition:
                    "Koordinovaná práce rodiny a školy v zájmu podpory dítěte.",
                },
                {
                  term: "Vzájemný respekt",
                  definition:
                    "Uznání role rodiny i školy při výchově a vzdělávání dítěte.",
                },
                {
                  term: "Srozumitelná komunikace",
                  definition:
                    "Pravidelná a jasná výměna informací mezi pedagogem a rodiči.",
                },
                {
                  term: "Konkrétní pozorování",
                  definition:
                    "Popis skutečných projevů dítěte místo obecných nálepek.",
                },
                {
                  term: "Diskrétnost",
                  definition:
                    "Citlivé zacházení s informacemi o dítěti a rodině.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt: "Proč má škola spolupracovat s rodinou dítěte?",
              choices: [
                { id: "a", text: "Aby škola nemusela s rodiči komunikovat" },
                {
                  id: "b",
                  text: "Aby spolupráce podporovala dítě",
                },
                { id: "c", text: "Aby rodiče nahradili pedagogy ve třídě" },
                { id: "d", text: "Aby se dítě izolovalo od rodiny" },
              ],
              correctChoiceId: "b",
              explanation:
                "Spolupráce rodiny a školy má podporovat dítě. Nejde o izolaci dítěte ani o nahrazení role pedagoga rodiči.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Rodič má jiný názor na výchovu než učitelka, ale oba chtějí dítěti pomoci. Co je základem jejich spolupráce?",
              choices: [
                { id: "a", text: "Veřejné kritizování rodiče před ostatními" },
                { id: "b", text: "Ignorování názoru druhé strany" },
                {
                  id: "c",
                  text: "Vzájemný respekt",
                },
                { id: "d", text: "Přerušení veškerého kontaktu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Základem spolupráce rodiny a školy je vzájemný respekt. Kritika nebo ignorování názoru druhé strany spolupráci nerozvíjí.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Učitelka pravidelně informuje rodiče o dění ve třídě jasně a srozumitelně. Co tím podporuje?",
              choices: [
                { id: "a", text: "Pouze školní administrativu" },
                { id: "b", text: "Tajné hodnocení bez vysvětlení" },
                { id: "c", text: "Izolaci rodičů od školky" },
                {
                  id: "d",
                  text: "Pravidelnou a srozumitelnou komunikaci",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Důležitá je pravidelná a srozumitelná komunikace mezi školou a rodinou. Rodiče pak lépe chápou, co se ve školce děje.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Na schůzce s rodiči učitelka říká: „Dítě dnes po obědě třikrát přerušilo kamaráda při vyprávění.“ Co je vhodný přístup?",
              choices: [
                { id: "a", text: "Říct rodičům, že dítě je „neposlušné“" },
                {
                  id: "b",
                  text: "Sdělit konkrétní pozorování místo nálepky",
                },
                { id: "c", text: "Mluvit jen obecně bez příkladu" },
                { id: "d", text: "Informaci zatajit" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog má sdělovat konkrétní pozorování, ne nálepky. Popis konkrétní situace pomáhá rodičům lépe porozumět a společně hledat řešení.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Rodič vypráví o domácí situaci a učitelka klade doplňující otázky bez přerušování. Co tím projevuje?",
              choices: [
                { id: "a", text: "Aktivní naslouchání rodičům" },
                { id: "b", text: "Ignorování rodiče" },
                { id: "c", text: "Okamžité odsouzení rodiny" },
                { id: "d", text: "Ukončení spolupráce" },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagog má aktivně naslouchat rodičům. Naslouchání a doplňující otázky pomáhají porozumět situaci dítěte.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Učitelka řeší citlivé informace o rodině dítěte jen s dotčenými osobami v klidu, ne před ostatními rodiči. Co respektuje?",
              choices: [
                { id: "a", text: "Veřejné šíření informací" },
                { id: "b", text: "Diskrétnost" },
                { id: "c", text: "Srovnávání rodin před třídou" },
                { id: "d", text: "Ignorování rodičů" },
              ],
              correctChoiceId: "b",
              explanation:
                "Citlivé informace se řeší diskrétně. Ochrana soukromí rodiny je součástí odborné spolupráce.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Rodič nesouhlasí s postupem učitelky při řešení konfliktu dětí. Jak má učitelka reagovat?",
              choices: [
                {
                  id: "a",
                  text: "Věcně řešit rozdílný názor se zaměřením na potřeby dítěte",
                },
                { id: "b", text: "Okamžitě ukončit spolupráci" },
                { id: "c", text: "Veřejně kritizovat rodiče" },
                { id: "d", text: "Ignorovat názor rodiče" },
              ],
              correctChoiceId: "a",
              explanation:
                "Rozdílný názor se řeší věcně a se zaměřením na potřeby dítěte. Cílem není vyhrát spor, ale najít podporu pro dítě.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Rodič informuje učitelku, že dítě doma špatně spí a ráno bývá unavené. Proč je tato informace důležitá?",
              choices: [
                { id: "a", text: "Rodiče nemají co sdělit škole" },
                { id: "b", text: "Škola nepotřebuje informace z domova" },
                {
                  id: "c",
                  text: "Rodiče mohou přinášet důležité informace o dítěti",
                },
                { id: "d", text: "Informace z domova jsou vždy nepravdivé" },
              ],
              correctChoiceId: "c",
              explanation:
                "Rodiče mohou přinášet důležité informace o dítěti, které škola sama nevidí. Spolupráce na tom staví.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Rodič se ptá, proč školka používá určitý způsob řešení konfliktů mezi dětmi. Co má učitelka udělat?",
              choices: [
                { id: "a", text: "Odmítnout odpověď bez vysvětlení" },
                { id: "b", text: "Sdělit jen obecnou nálepku" },
                { id: "c", text: "Ignorovat dotaz rodiče" },
                {
                  id: "d",
                  text: "Srozumitelně vysvětlit postupy školy",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Škola má rodičům srozumitelně vysvětlovat své postupy. Rodič pak lépe chápe, proč školka jedná určitým způsobem.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "spoluprace-rodiny-a-skoly",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "spoluprace-rodiny-a-skoly",
              type: "multiple-choice",
              prompt:
                "Dítě má ve školce i doma potíže s přechody mezi činnostmi. Učitelka s rodiči domluví společné kroky podpory. Co to ukazuje?",
              choices: [
                {
                  id: "a",
                  text: "Společné hledání podpůrných kroků",
                },
                { id: "b", text: "Ukončení spolupráce" },
                { id: "c", text: "Přenesení veškeré odpovědnosti jen na rodiče" },
                { id: "d", text: "Ignorování potřeb dítěte" },
              ],
              correctChoiceId: "a",
              explanation:
                "Spolupráce může zahrnovat společné hledání podpůrných kroků. Rodina a škola spolu hledají, co dítěti pomůže.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "socialni-znevyhodneni-a-rovne-prilezitosti",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Sociální znevýhodnění a rovné příležitosti",
          summary:
            "Sociální znevýhodnění, rovné příležitosti a individuální podpora podle potřeb dítěte.",
          order: 5,
          studySections: [
            {
              id: "vysvetleni-socialni-znevyhodneni",
              type: "explanation",
              title: "Sociální znevýhodnění a rovné příležitosti",
              body:
                "Sociální znevýhodnění může souviset s podmínkami, ve kterých dítě vyrůstá — s omezeným přístupem ke vzdělávacím příležitostem, nedostatkem materiálního zázemí, jazykovou nebo kulturní odlišností či nestabilním rodinným prostředím. Rovná příležitost neznamená vždy stejnou podporu pro všechny; některé děti potřebují odlišnou míru nebo formu podpory. Pedagog vychází z konkrétních potřeb dítěte, neposuzuje je podle předsudků a cílem podpory je umožnit zapojení a rozvoj.",
            },
            {
              id: "pojmy-socialni-znevyhodneni",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Sociální znevýhodnění",
                  definition:
                    "Obtížnější podmínky pro rozvoj dítěte související s jeho životním prostředím.",
                },
                {
                  term: "Rovné příležitosti",
                  definition:
                    "Možnost zapojení a rozvoje bez diskriminace podle předsudků.",
                },
                {
                  term: "Individuální podpora",
                  definition:
                    "Podpora přizpůsobená konkrétním potřebám dítěte.",
                },
                {
                  term: "Kulturní odlišnost",
                  definition:
                    "Rozdíly ve zvycích a prostředí, ze kterého dítě pochází.",
                },
                {
                  term: "Předsudek",
                  definition:
                    "Předem vytvořený negativní názor bez znalosti konkrétní situace dítěte.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt: "Co znamená sociální znevýhodnění v pedagogickém kontextu?",
              choices: [
                { id: "a", text: "Automaticky nízké schopnosti dítěte" },
                {
                  id: "b",
                  text: "Obtížnější podmínky související s prostředím, ve kterém dítě vyrůstá",
                },
                { id: "c", text: "Pouze špatné chování dítěte" },
                { id: "d", text: "Diagnózu, kterou stanoví učitel" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální znevýhodnění souvisí s podmínkami, ve kterých dítě vyrůstá. Nejde automaticky o nízké schopnosti ani o diagnózu pedagoga.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Dítě nemá doma dostatek podnětů pro přípravu na školní aktivity. Co může být projevem sociálního znevýhodnění?",
              choices: [
                { id: "a", text: "Vždy nízká inteligence dítěte" },
                { id: "b", text: "Pouze špatná vůle dítěte" },
                {
                  id: "c",
                  text: "Omezený přístup ke vzdělávacím příležitostem",
                },
                { id: "d", text: "Nezájem školy o dítě" },
              ],
              correctChoiceId: "c",
              explanation:
                "Sociální znevýhodnění se může projevit omezeným přístupem ke vzdělávacím příležitostem. Nejde automaticky o schopnosti nebo vůli dítěte.",
              order: 2,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Dítě nemá doma vlastní pracovní koutek ani dostatek pomůcek pro tvoření. S čím to může souviset?",
              choices: [
                { id: "a", text: "Pouze s leností dítěte" },
                { id: "b", text: "S nedostatkem materiálního zázemí" },
                { id: "c", text: "S diagnózou stanovenou učitelem" },
                {
                  id: "d",
                  text: "S tím, že dítě nechce tvořit",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální znevýhodnění může souviset s nedostatkem materiálního zázemí. Pedagog to zohledňuje, aniž by dítě automaticky považoval za méně schopné.",
              order: 3,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Dítě přichází z rodiny s jiným mateřským jazykem a zvyky než většina ve třídě. Jak to pedagog správně chápe?",
              choices: [
                { id: "a", text: "Jako automatický problém dítěte" },
                {
                  id: "b",
                  text: "Jako jazykovou a kulturní odlišnost, kterou lze respektovat a podpořit",
                },
                { id: "c", text: "Jako důvod k vyloučení ze skupiny" },
                { id: "d", text: "Jako důkaz nízkých schopností" },
              ],
              correctChoiceId: "b",
              explanation:
                "Znevýhodnění může souviset s jazykovou nebo kulturní odlišností. Odlišnost sama o sobě není problém — důležitá je podpora zapojení dítěte.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Dítě často mění bydliště a domácí režim je nestálý. S čím to může souviset v kontextu sociálního znevýhodnění?",
              choices: [
                { id: "a", text: "Pouze s biologickým věkem dítěte" },
                { id: "b", text: "S nestabilním rodinným prostředím" },
                { id: "c", text: "S tím, že dítě nechce chodit do školky" },
                { id: "d", text: "S diagnózou učitele" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální znevýhodnění může souviset s nestabilním rodinným prostředím. Pedagog to bere v úvahu při podpoře dítěte, ne jako důkaz jeho schopností.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Učitelka říká: „Všem dětem dám úplně stejnou podporu bez ohledu na jejich situaci.“ Co je na tom problematické?",
              choices: [
                { id: "a", text: "Rovná příležitost vždy znamená stejnou podporu" },
                { id: "b", text: "Podpora nikdy nemá být individuální" },
                {
                  id: "c",
                  text: "Rovná příležitost neznamená vždy stejnou podporu pro všechny",
                },
                { id: "d", text: "Děti nikdy nepotřebují odlišnou pomoc" },
              ],
              correctChoiceId: "c",
              explanation:
                "Rovná příležitost neznamená vždy stejnou podporu pro všechny. Některé děti potřebují odlišnou míru nebo formu podpory, aby se mohly rovnocenně zapojit.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Dítě potřebuje více času a pomoc při zapojení do skupinové hry než ostatní. Co to ukazuje?",
              choices: [
                { id: "a", text: "Že rovnost znamená stejnou podporu všem" },
                {
                  id: "b",
                  text: "Že některé děti potřebují odlišnou míru nebo formu podpory",
                },
                { id: "c", text: "Že dítě nemá být ve skupině" },
                { id: "d", text: "Že podpora je vždy zbytečná" },
              ],
              correctChoiceId: "b",
              explanation:
                "Některé děti potřebují odlišnou míru nebo formu podpory. Cílem je umožnit zapojení, ne všem dát naprosto stejnou pomoc bez ohledu na potřeby.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Učitelka zjišťuje, co konkrétně dítěti ve školce pomáhá a co mu brání v zapojení. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Posuzování podle předsudků" },
                { id: "b", text: "Ignorování potřeb dítěte" },
                {
                  id: "c",
                  text: "Vycházení z konkrétních potřeb dítěte",
                },
                { id: "d", text: "Srovnávání s jinými dětmi před třídou" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog má vycházet z konkrétních potřeb dítěte. Podpora se opírá o pozorování a porozumění situaci dítěte, ne o předsudky.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt:
                "Učitelka se vyhýbá předem vytvořeným názorům o dětech z určitého prostředí a posuzuje každé dítě podle jeho projevů. Co tím respektuje?",
              choices: [
                { id: "a", text: "Předsudky jako běžný postup" },
                { id: "b", text: "Veřejné srovnávání dětí" },
                { id: "c", text: "Diagnostikování rodiny" },
                {
                  id: "d",
                  text: "Neposuzování dítěte podle předsudků",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog nemá dítě posuzovat podle předsudků. Každé dítě hodnotí podle konkrétních projevů a potřeb, ne podle obecných předpokladů.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialni-znevyhodneni-a-rovne-prilezitosti",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialni-znevyhodneni-a-rovne-prilezitosti",
              type: "multiple-choice",
              prompt: "Jaký je cíl podpory dítěte v kontextu rovných příležitostí?",
              choices: [
                {
                  id: "a",
                  text: "Umožnit dítěti zapojení a rozvoj",
                },
                { id: "b", text: "Izolovat dítě od ostatních" },
                { id: "c", text: "Srovnávat děti veřejně" },
                { id: "d", text: "Omezit přístup ke vzdělávání" },
              ],
              correctChoiceId: "a",
              explanation:
                "Cílem podpory je umožnit dítěti zapojení a rozvoj. Podpora má otevírat příležitosti, ne dítě vylučovat nebo omezovat.",
              order: 10,
              difficulty: "easy",
            },
          ],
          examQuestions: [],
        },
        {
          id: "prevence-rizikoveho-chovani",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Prevence rizikového chování",
          summary:
            "Prevence rizikového chování, ochranné faktory, kompetence pedagoga a dlouhodobá podpora dětí.",
          order: 6,
          studySections: [
            {
              id: "vysvetleni-prevence-rizikoveho-chovani",
              type: "explanation",
              title: "Prevence rizikového chování",
              body:
                "Prevence má předcházet vzniku nebo rozvoji problémů. Primární prevence je zaměřena na všechny děti před vznikem problému. Včasné rozpoznání varovných signálů umožňuje dřívější podporu. Bezpečné a přijímající prostředí, jasná pravidla a důvěryhodný vztah s dospělým jsou významnými ochrannými faktory. Sociální dovednosti a smysluplné trávení volného času mohou působit preventivně. Pedagog řeší konkrétní projevy, ne dítě nálepkuje, při závažné situaci nejedná sám mimo své kompetence a spolupracuje s rodinou, školou a dalšími odborníky. Prevence má být dlouhodobá a soustavná.",
            },
            {
              id: "pojmy-prevence-rizikoveho-chovani",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Prevence",
                  definition:
                    "Předcházení vzniku nebo rozvoji problémů v chování dítěte.",
                },
                {
                  term: "Primární prevence",
                  definition:
                    "Preventivní opatření zaměřená na všechny děti před vznikem problému.",
                },
                {
                  term: "Ochranný faktor",
                  definition:
                    "Podmínka nebo vztah, který snižuje riziko problémů.",
                },
                {
                  term: "Varovný signál",
                  definition:
                    "Projev, který může upozornit na potřebu dřívější podpory.",
                },
                {
                  term: "Mezioborová spolupráce",
                  definition:
                    "Spolupráce školy, rodiny a dalších odborníků při podpoře dítěte.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt: "Co je hlavním smyslem prevence rizikového chování?",
              choices: [
                { id: "a", text: "Trestat děti za každé pochybení" },
                {
                  id: "b",
                  text: "Předcházet vzniku nebo rozvoji problémů",
                },
                { id: "c", text: "Řešit problémy až po jejich zhoršení" },
                { id: "d", text: "Nálepkovat děti předem" },
              ],
              correctChoiceId: "b",
              explanation:
                "Prevence má předcházet vzniku nebo rozvoji problémů. Nejde o trestání ani o čekání, až situace eskaluje.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Školka pravidelně podporuje spolupráci ve skupině a respektující chování u všech dětí, i když zatím nemají problémy. O jakou prevenci jde?",
              choices: [
                { id: "a", text: "O náhodnou jednorázovou akci" },
                { id: "b", text: "O trestání vybraných dětí" },
                {
                  id: "c",
                  text: "O primární prevenci zaměřenou na všechny děti",
                },
                { id: "d", text: "O řešení až po vzniku závažného problému" },
              ],
              correctChoiceId: "c",
              explanation:
                "Primární prevence je zaměřena na všechny děti před vznikem problému. Podpora spolupráce a respektu ve skupině je preventivní opatření pro celou třídu.",
              order: 2,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Učitelka si všimne, že dítě se častěji stahuje ze skupiny a reaguje podrážděně. Co je vhodný preventivní postup?",
              choices: [
                { id: "a", text: "Ignorovat změnu chování" },
                { id: "b", text: "Okamžitě dítě nálepkovat" },
                { id: "c", text: "Počkat, až situace eskaluje" },
                {
                  id: "d",
                  text: "Včas rozpoznat varovné signály a nabídnout dřívější podporu",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Včasné rozpoznání varovných signálů umožňuje dřívější podporu. Ignorování změn nebo čekání na zhoršení prevenci nenaplňuje.",
              order: 3,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Ve třídě je klidná atmosféra, děti se cítí přijímané a mohou se obrátit na dospělého. Co to představuje?",
              choices: [
                { id: "a", text: "Pouze dekoraci třídy" },
                {
                  id: "b",
                  text: "Bezpečné a přijímající prostředí jako ochranný faktor",
                },
                { id: "c", text: "Důvod k uvolnění všech pravidel" },
                { id: "d", text: "Překážku prevence" },
              ],
              correctChoiceId: "b",
              explanation:
                "Bezpečné a přijímající prostředí je významným ochranným faktorem. Dítě se v něm cítí jistěji a může lépe řešit obtíže.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Děti ve školce znají pravidla pro hru, odchod domů i řešení konfliktů. Jak pravidla pomáhají v prevenci?",
              choices: [
                { id: "a", text: "Jen ztěžují život dětem" },
                { id: "b", text: "Podporují bezpečí a předvídatelnost" },
                { id: "c", text: "Nemají žádný význam" },
                { id: "d", text: "Slouží pouze k trestání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Jasná pravidla podporují bezpečí a předvídatelnost. Dítě ví, co se očekává, a cítí se jistěji ve skupině.",
              order: 5,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Dítě se svěří učitelce, že ho ve skupině něco trápí. Co takový vztah podporuje?",
              choices: [
                { id: "a", text: "Izolaci dítěte" },
                { id: "b", text: "Nálepkování dítěte" },
                {
                  id: "c",
                  text: "Možnost dítěte vyhledat pomoc u důvěryhodného dospělého",
                },
                { id: "d", text: "Ignorování problému" },
              ],
              correctChoiceId: "c",
              explanation:
                "Důvěryhodný vztah s dospělým podporuje možnost dítěte vyhledat pomoc. Dítě se nemusí bát obrátit na někoho, komu věří.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Ve školce děti trénují domlouvání se, čekání na řadu a spolupráci při hrách. Co tím rozvíjejí?",
              choices: [
                { id: "a", text: "Pouze paměťové schopnosti" },
                {
                  id: "b",
                  text: "Sociální dovednosti pro řešení konfliktů a spolupráci",
                },
                { id: "c", text: "Jen výtvarné dovednosti" },
                { id: "d", text: "Schopnost vyhýbat se ostatním" },
              ],
              correctChoiceId: "b",
              explanation:
                "Sociální dovednosti pomáhají řešit konflikty a spolupracovat. Jejich rozvoj může působit preventivně proti rizikovému chování.",
              order: 7,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Školka nabízí dětem zajímavé aktivity v době, kdy by jinak jen čekaly bez podnětů. Jak to může působit?",
              choices: [
                { id: "a", text: "Jen jako zbytečná zátěž" },
                { id: "b", text: "Jako překážka rozvoje" },
                { id: "c", text: "Jako důvod k nálepkování dětí" },
                {
                  id: "d",
                  text: "Preventivně díky smysluplnému trávení volného času",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Smysluplné trávení volného času může působit preventivně. Dítě má podněty a strukturu, které mohou snižovat riziko nežádoucího chování.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Učitelka popisuje rodičům konkrétní situaci, kdy dítě narušilo hru, místo aby řekla, že je „problémové“. Co tím respektuje?",
              choices: [
                { id: "a", text: "Nálepkování dítěte" },
                {
                  id: "b",
                  text: "Řešení konkrétních projevů místo nálepkování",
                },
                { id: "c", text: "Ignorování chování" },
                { id: "d", text: "Veřejné ponižování dítěte" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog má řešit konkrétní projevy, ne dítě nálepkovat. Popis situace pomáhá najít podporu, obecná nálepka dítě poškozuje.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Učitelka zjistí závažnou situaci, která přesahuje její možnosti. Co má udělat?",
              choices: [
                { id: "a", text: "Jednat sama mimo své kompetence" },
                { id: "b", text: "Situaci zatajit" },
                { id: "c", text: "Ignorovat závažnost situace" },
                {
                  id: "d",
                  text: "Nehnat se jednat sám a vyhledat odbornou pomoc",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Při závažné situaci nemá pedagog jednat sám mimo své kompetence. Má vyhledat vhodnou odbornou pomoc a spolupracovat s dalšími.",
              order: 10,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Učitelka domlouvá postup s rodiči a poradenským pracovištěm kvůli podpoře dítěte. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Práci bez kontaktu s rodinou" },
                {
                  id: "b",
                  text: "Spolupráci rodiny, školy a dalších odborníků",
                },
                { id: "c", text: "Izolaci dítěte od pomoci" },
                { id: "d", text: "Jednání jen ve vlastním zájmu školy" },
              ],
              correctChoiceId: "b",
              explanation:
                "Důležitá je spolupráce rodiny, školy a dalších odborníků. Prevence a podpora jsou účinnější, když spolupracují více stran.",
              order: 11,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "prevence-rizikoveho-chovani",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "prevence-rizikoveho-chovani",
              type: "multiple-choice",
              prompt:
                "Školka po celý rok podporuje pravidla, vztahy a aktivity pro všechny děti, ne jen jednorázovou kampaň. Co to ukazuje?",
              choices: [
                {
                  id: "a",
                  text: "Dlouhodobou a soustavnou prevenci",
                },
                { id: "b", text: "Jednorázovou akci bez následku" },
                { id: "c", text: "Konec preventivní práce" },
                { id: "d", text: "Pouze reakci po problému" },
              ],
              correctChoiceId: "a",
              explanation:
                "Prevence má být dlouhodobá a soustavná, ne jednorázová. Pravidelná podpora prostředí a vztahů má větší přínos než ojedinělá akce.",
              order: 12,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "multikulturni-vychova-a-rozmanitost",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Multikulturní výchova a rozmanitost",
          summary:
            "Kulturní a jazyková rozmanitost, respekt k odlišnostem a prevence předsudků a stereotypů.",
          order: 7,
          studySections: [
            {
              id: "vysvetleni-multikulturni-vychova",
              type: "explanation",
              title: "Multikulturní výchova a rozmanitost",
              body:
                "Lidé mohou pocházet z různých kulturních a jazykových prostředí. Rozmanitost není sama o sobě problém. Multikulturní výchova podporuje respekt k odlišnostem a pomáhá předcházet předsudkům a stereotypům. Stereotyp je zjednodušená představa o skupině lidí, předsudek je předem vytvořený hodnotící postoj bez dostatečného poznání. Pedagog posuzuje konkrétní dítě, ne skupinovou nálepku. Jazyková odlišnost nemusí znamenat nižší schopnosti dítěte. Děti mají mít možnost poznávat různé způsoby života bez zesměšňování a společná činnost může podporovat vzájemné poznávání a spolupráci.",
            },
            {
              id: "pojmy-multikulturni-vychova",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Multikulturní výchova",
                  definition:
                    "Výchova podporující respekt k kulturním a jazykovým odlišnostem.",
                },
                {
                  term: "Rozmanitost",
                  definition:
                    "Různorodost kulturních a jazykových prostředí, ze kterých lidé pocházejí.",
                },
                {
                  term: "Stereotyp",
                  definition:
                    "Zjednodušená představa o skupině lidí.",
                },
                {
                  term: "Předsudek",
                  definition:
                    "Předem vytvořený hodnotící postoj bez dostatečného poznání.",
                },
                {
                  term: "Respekt k odlišnostem",
                  definition:
                    "Uznání různých způsobů života bez zesměšňování nebo vylučování.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Ve třídě jsou děti z různých kulturních a jazykových prostředí. Co to ukazuje?",
              choices: [
                { id: "a", text: "Že ve třídě nemá být žádná rozmanitost" },
                {
                  id: "b",
                  text: "Kulturní a jazykovou rozmanitost ve skupině",
                },
                { id: "c", text: "Pouze školní administrativu" },
                { id: "d", text: "Že všechny děti musí být stejné" },
              ],
              correctChoiceId: "b",
              explanation:
                "Lidé mohou pocházet z různých kulturních a jazykových prostředí. Rozmanitost je běžnou součástí skupiny, ne problémem sama o sobě.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Učitelka říká: „Odlišnosti ve třídě jsou přirozené a samy o sobě nejsou problém.“ Co tím vyjadřuje?",
              choices: [
                { id: "a", text: "Že rozmanitost je vždy překážkou" },
                { id: "b", text: "Že jedna kultura je lepší než jiná" },
                {
                  id: "c",
                  text: "Že rozmanitost není sama o sobě problém",
                },
                { id: "d", text: "Že děti mají být izolovány podle původu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Rozmanitost není sama o sobě problém. Důležitý je respektující přístup k odlišnostem, ne jejich popírání nebo hodnocení jako horších.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt: "K čemu směřuje multikulturní výchova?",
              choices: [
                { id: "a", text: "K zesměšňování odlišností" },
                { id: "b", text: "K vyloučení dětí z jiných prostředí" },
                { id: "c", text: "K podpoře jedné kultury nad ostatními" },
                {
                  id: "d",
                  text: "K respektu k odlišnostem a vzájemnému poznávání",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Multikulturní výchova podporuje respekt k odlišnostem. Cílem není vylučovat ani hodnotit jednu kulturu jako lepší.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Školka připravuje aktivity, kde děti poznávají různé zvyky a učí se o nich bez posměchu. Co tím podporuje?",
              choices: [
                { id: "a", text: "Pouze soutěžení mezi kulturami" },
                {
                  id: "b",
                  text: "Prevenci předsudků a stereotypů",
                },
                { id: "c", text: "Zesměšňování odlišností" },
                { id: "d", text: "Izolaci dětí podle původu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Multikulturní výchova pomáhá předcházet předsudkům a stereotypům. Poznávání odlišností s respektem snižuje zjednodušené soudy o druhých.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "„Všichni z této skupiny jsou stejní a chovají se vždy stejně.“ Co tato věta vystihuje?",
              choices: [
                { id: "a", text: "Individuální pozorování dítěte" },
                { id: "b", text: "Respekt k odlišnostem" },
                {
                  id: "c",
                  text: "Stereotyp — zjednodušenou představu o skupině lidí",
                },
                { id: "d", text: "Konkrétní popis chování jednoho dítěte" },
              ],
              correctChoiceId: "c",
              explanation:
                "Stereotyp je zjednodušená představa o skupině lidí. Přehlíží jednotlivce a jejich skutečné chování.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Učitelka má o dětech z určitého prostředí negativní názor, aniž by je blíže poznala. Co to ukazuje?",
              choices: [
                { id: "a", text: "Odborné pozorování" },
                { id: "b", text: "Respektující přístup" },
                { id: "c", text: "Individuální hodnocení" },
                {
                  id: "d",
                  text: "Předsudek — hodnotící postoj bez dostatečného poznání",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Předsudek je předem vytvořený hodnotící postoj bez dostatečného poznání. Pedagog má děti posuzovat podle konkrétních projevů, ne podle předpojatých soudů.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Učitelka hodnotí dítě podle jeho konkrétního chování ve školce, ne podle toho, odkud pochází. Co respektuje?",
              choices: [
                { id: "a", text: "Skupinovou nálepku" },
                {
                  id: "b",
                  text: "Individuální posuzování konkrétního dítěte",
                },
                { id: "c", text: "Stereotyp o skupině" },
                { id: "d", text: "Předsudek bez poznání" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog má posuzovat konkrétní dítě, ne skupinovou nálepku. Každé dítě je jedinec s vlastními projevy a potřebami.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Dítě teprve rozvíjí češtinu a zatím mluví méně než vrstevníci. Co z toho plyne?",
              choices: [
                { id: "a", text: "Automaticky nižší schopnosti dítěte" },
                { id: "b", text: "Důvod k vyloučení ze skupiny" },
                {
                  id: "c",
                  text: "Jazyková odlišnost nemusí znamenat nižší schopnosti",
                },
                { id: "d", text: "Důvod k posměchu před ostatními" },
              ],
              correctChoiceId: "c",
              explanation:
                "Jazyková odlišnost nemusí znamenat nižší schopnosti dítěte. Dítě může potřebovat čas a podporu, ne nálepku o schopnostech.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Děti ve školce poznávají různé zvyky a tradice bez posměchu a urážek. Co tím školka podporuje?",
              choices: [
                { id: "a", text: "Zesměšňování odlišností" },
                { id: "b", text: "Vyloučení dětí z jiných prostředí" },
                { id: "c", text: "Hodnocení jedné kultury jako lepší" },
                {
                  id: "d",
                  text: "Respektující poznávání různých způsobů života",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Děti mají mít možnost poznávat různé způsoby života bez zesměšňování. Respekt je základem multikulturní výchovy.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "multikulturni-vychova-a-rozmanitost",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "multikulturni-vychova-a-rozmanitost",
              type: "multiple-choice",
              prompt:
                "Děti společně připravují jednoduché jídlo podle různých rodinných zvyků a spolu to ochutnávají. Co taková činnost může podpořit?",
              choices: [
                {
                  id: "a",
                  text: "Vzájemné poznávání a spolupráci",
                },
                { id: "b", text: "Stereotypy o skupinách" },
                { id: "c", text: "Vyloučení některých dětí" },
                { id: "d", text: "Posměch nad odlišnostmi" },
              ],
              correctChoiceId: "a",
              explanation:
                "Společná činnost může podporovat vzájemné poznávání a spolupráci. Děti se učí respektovat odlišnosti praktickou zkušeností.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "volny-cas-a-zajmova-vychova",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Volný čas a zájmová výchova",
          summary:
            "Význam volného času, zájmové výchovy a smysluplného trávení volna v předškolním věku.",
          order: 8,
          studySections: [
            {
              id: "vysvetleni-volny-cas-zajmova-vychova",
              type: "explanation",
              title: "Volný čas a zájmová výchova",
              body:
                "Volný čas je čas, ve kterém člověk neplní povinnosti a může volit činnost. Zájmová výchova podporuje rozvoj zájmů, schopností a dovedností. Volnočasové činnosti mohou být odpočinkové, rekreační, zájmové a tvořivé a mohou mít vzdělávací a sociální význam. Smysluplný volný čas může působit preventivně. Pedagog respektuje věk, potřeby, zájmy a možnosti dítěte, nabídka činností umožňuje přiměřenou volbu a organizovaná činnost nemá odstranit prostor pro spontánní aktivitu.",
            },
            {
              id: "pojmy-volny-cas-zajmova-vychova",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Volný čas",
                  definition:
                    "Čas, ve kterém člověk neplní povinnosti a může volit činnost.",
                },
                {
                  term: "Zájmová výchova",
                  definition:
                    "Výchova podporující rozvoj zájmů, schopností a dovedností.",
                },
                {
                  term: "Rekreační činnost",
                  definition:
                    "Činnost zaměřená na odpočinek, zábavu a obnovu sil.",
                },
                {
                  term: "Tvořivá činnost",
                  definition:
                    "Činnost, při které dítě tvoří, zkouší a rozvíjí své nápady.",
                },
                {
                  term: "Spontánní aktivita",
                  definition:
                    "Aktivita, kterou dítě zvolí samo, bez přímého řízení dospělého.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt: "Co je volný čas?",
              choices: [
                { id: "a", text: "Čas plnění všech povinností bez přestávky" },
                {
                  id: "b",
                  text: "Čas, ve kterém člověk neplní povinnosti a může volit činnost",
                },
                { id: "c", text: "Pouze čas spánku v noci" },
                { id: "d", text: "Čas výhradně pro školní úkoly" },
              ],
              correctChoiceId: "b",
              explanation:
                "Volný čas je čas, ve kterém člověk neplní povinnosti a může volit činnost. Nejde jen o spánek ani o povinné úkoly.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt: "K čemu směřuje zájmová výchova?",
              choices: [
                { id: "a", text: "K potlačení zájmů dítěte" },
                { id: "b", text: "K výhradnímu plnění povinností" },
                {
                  id: "c",
                  text: "K rozvoji zájmů, schopností a dovedností",
                },
                { id: "d", text: "K odstranění veškeré volby dítěte" },
              ],
              correctChoiceId: "c",
              explanation:
                "Zájmová výchova podporuje rozvoj zájmů, schopností a dovedností. Dítě má prostor objevovat, co ho baví a v čem se rozvíjí.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Dítě po náročné aktivitě sedí v klidu s knížkou a odpočívá. Jakou volnočasovou činnost to ukazuje?",
              choices: [
                { id: "a", text: "Pouze soutěžní činnost" },
                { id: "b", text: "Povinnou školní práci" },
                { id: "c", text: "Organizovaný sport bez volby" },
                {
                  id: "d",
                  text: "Odpočinkovou činnost",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Volnočasové činnosti mohou být odpočinkové. Odpočinek je důležitou součástí smysluplného trávení volného času.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Děti se na zahradě školky hrají na prolézačce a běhají pro radost. Jakou činnost to představuje?",
              choices: [
                { id: "a", text: "Pouze povinnou výuku" },
                {
                  id: "b",
                  text: "Rekreační činnost",
                },
                { id: "c", text: "Administrativní práci" },
                { id: "d", text: "Činnost bez volnočasového významu" },
              ],
              correctChoiceId: "b",
              explanation:
                "Volnočasové činnosti mohou být rekreační — zaměřené na zábavu, pohyb a obnovu sil. Hra na zahradě je typickým příkladem.",
              order: 4,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Dítě ve volném čase modeluje z plastelíny podle vlastního nápadu. Jakou činnost to ukazuje?",
              choices: [
                { id: "a", text: "Pouze pasivní sledování" },
                { id: "b", text: "Výhradně povinnou činnost" },
                { id: "c", text: "Administrativu školy" },
                {
                  id: "d",
                  text: "Zájmovou a tvořivou činnost",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Volnočasové činnosti mohou být zájmové a tvořivé. Dítě rozvíjí své nápady a dovednosti při činnosti, kterou si samo zvolí.",
              order: 5,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Děti při společné hře učí plánovat tahy a domlouvat se s kamarády. Jaký význam má taková volnočasová činnost?",
              choices: [
                { id: "a", text: "Pouze fyzický odpočinek bez učení" },
                {
                  id: "b",
                  text: "Vzdělávací a sociální význam",
                },
                { id: "c", text: "Žádný význam pro rozvoj dítěte" },
                { id: "d", text: "Jen zábavu bez vlivu na dovednosti" },
              ],
              correctChoiceId: "b",
              explanation:
                "Volnočasové činnosti mohou mít vzdělávací a sociální význam. Dítě se učí spolupracovat a řešit situace ve hře.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Školka nabízí dětem zajímavé aktivity místo prázdného čekání bez podnětů. Co může smysluplný volný čas v školce přinést?",
              choices: [
                { id: "a", text: "Pouze zbytečnou zátěž" },
                { id: "b", text: "Preventivní přínos pro rozvoj dítěte" },
                { id: "c", text: "Důvod k nálepkování dětí" },
                { id: "d", text: "Izolaci od ostatních" },
              ],
              correctChoiceId: "b",
              explanation:
                "Smysluplný volný čas může působit preventivně. Dítě má podněty a strukturu, které podporují jeho rozvoj a zapojení.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Učitelka vybírá činnosti podle věku dětí, jejich zájmů a aktuálních možností. Co tím respektuje?",
              choices: [
                { id: "a", text: "Pouze vlastní pohodlí" },
                { id: "b", text: "Jen školní rozvrh bez ohledu na děti" },
                {
                  id: "c",
                  text: "Věk, potřeby, zájmy a možnosti dítěte",
                },
                { id: "d", text: "Jednotný program pro všechny bez rozdílu" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog má respektovat věk, potřeby, zájmy a možnosti dítěte. Nabídka činností má odpovídat tomu, co děti zvládnou a co je zajímá.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Děti si mohou vybrat mezi stavěním, kreslením nebo klidovou činností v koutku. Co nabídka umožňuje?",
              choices: [
                { id: "a", text: "Žádnou volbu — vše je povinné" },
                { id: "b", text: "Pouze jednu činnost pro všechny" },
                { id: "c", text: "Trest za jinou volbu" },
                {
                  id: "d",
                  text: "Přiměřenou volbu podle možností dítěte",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Nabídka činností má umožňovat přiměřenou volbu. Dítě se učí rozhodovat podle svých zájmů v rámci vhodných možností.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "volny-cas-a-zajmova-vychova",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "volny-cas-a-zajmova-vychova",
              type: "multiple-choice",
              prompt:
                "Školka má plánované aktivity, ale děti mají i čas na vlastní hru podle nápadu. Co je důležité zachovat?",
              choices: [
                {
                  id: "a",
                  text: "Prostor pro spontánní aktivitu vedle organizované činnosti",
                },
                { id: "b", text: "Pouze řízené činnosti bez volné hry" },
                { id: "c", text: "Úplné zrušení jakékoli struktury" },
                { id: "d", text: "Zákaz vlastní volby dítěte" },
              ],
              correctChoiceId: "a",
              explanation:
                "Organizovaná činnost nemá odstranit prostor pro spontánní aktivitu. Dítě potřebuje jak vedení, tak možnost hrát si podle vlastního nápadu.",
              order: 10,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
        {
          id: "socialne-pedagogicka-prace-pedagoga",
          subjectId: "obecna-pedagogika",
          unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
          title: "Sociálně pedagogická práce pedagoga",
          summary:
            "Každodenní sociálně pedagogická práce pedagoga: prostředí, vztahy, spolupráce a reflexe praxe.",
          order: 9,
          studySections: [
            {
              id: "vysvetleni-socialne-pedagogicka-prace",
              type: "explanation",
              title: "Sociálně pedagogická práce pedagoga",
              body:
                "Pedagog sleduje potřeby dítěte v souvislosti s jeho prostředím, vytváří bezpečné a přijímající prostředí a podporuje vztahy mezi dětmi. Předchází vylučování dítěte ze skupiny, komunikuje s rodinou věcně a respektujícím způsobem a popisuje konkrétní projevy, nehodnotí osobnost dítěte. Podporuje zapojení dítěte do činností, přizpůsobuje podporu konkrétním potřebám a spolupracuje s kolegy a dalšími odborníky. Respektuje hranice své odborné role, chrání důstojnost a soukromí dítěte a svou práci reflektuje a upravuje další postup.",
            },
            {
              id: "pojmy-socialne-pedagogicka-prace",
              type: "keyTerms",
              title: "Klíčové pojmy",
              terms: [
                {
                  term: "Sociálně pedagogická práce",
                  definition:
                    "Každodenní práce pedagoga s dětmi v souvislosti s jejich prostředím a potřebami.",
                },
                {
                  term: "Přijímající prostředí",
                  definition:
                    "Prostředí, ve kterém se dítě cítí bezpečně a respektovaně.",
                },
                {
                  term: "Individualizovaná podpora",
                  definition:
                    "Podpora přizpůsobená konkrétním potřebám dítěte.",
                },
                {
                  term: "Hranice odborné role",
                  definition:
                    "Omezení kompetencí pedagoga v závažných situacích.",
                },
                {
                  term: "Reflexe praxe",
                  definition:
                    "Zamyšlení nad vlastní prací a úprava dalšího postupu.",
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                1,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka přemýšlí, jak domácí režim a vztahy ve školce ovlivňují chování dítěte. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Posuzování jen podle věku dítěte" },
                {
                  id: "b",
                  text: "Sledování potřeb dítěte v souvislosti s jeho prostředím",
                },
                { id: "c", text: "Ignorování vlivu okolí" },
                { id: "d", text: "Diagnostikování rodiny" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog sleduje potřeby dítěte v souvislosti s jeho prostředím. Chování dítěte nelze chápat odděleně od situace, ve které žije.",
              order: 1,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                2,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Ve třídě je klidná atmosféra, děti vědí, že se na učitelku mohou obrátit. Co pedagog tím vytváří?",
              choices: [
                { id: "a", text: "Stresující a nepředvídatelné prostředí" },
                { id: "b", text: "Prostředí bez pravidel" },
                {
                  id: "c",
                  text: "Bezpečné a přijímající prostředí",
                },
                { id: "d", text: "Prostředí, kde se dítě bojí mluvit" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog vytváří bezpečné a přijímající prostředí. Dítě se v něm cítí respektované a může se lépe rozvíjet.",
              order: 2,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                3,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka podporuje děti při společné hře a pomáhá jim domlouvat se. Co je jejím úkolem?",
              choices: [
                { id: "a", text: "Izolovat děti od sebe" },
                { id: "b", text: "Podporovat vztahy mezi dětmi" },
                { id: "c", text: "Veřejně srovnávat děti" },
                {
                  id: "d",
                  text: "Bránit jakékoli spolupráci",
                },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog podporuje vztahy mezi dětmi. Pomáhá jim spolupracovat a řešit drobné neshody ve skupině.",
              order: 3,
              difficulty: "easy",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                4,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Dítě se často drží stranou a ostatní ho do her nezahrnují. Jak má pedagog reagovat?",
              choices: [
                { id: "a", text: "Vyloučení nechat bez povšimnutí" },
                { id: "b", text: "Dítě dále izolovat" },
                { id: "c", text: "Dítě veřejně pokárat" },
                {
                  id: "d",
                  text: "Předcházet vylučování dítěte ze skupiny",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog předchází vylučování dítěte ze skupiny. Včasná podpora zapojení pomáhá dítěti cítit se součástí kolektivu.",
              order: 4,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                5,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka s rodiči hovoří klidně, naslouchá a hledá společné kroky pro dítě. Co tím projevuje?",
              choices: [
                { id: "a", text: "Respektující komunikaci s rodinou" },
                { id: "b", text: "Odsuzování rodiny" },
                { id: "c", text: "Ignorování rodičů" },
                { id: "d", text: "Veřejné kritizování rodičů" },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagog komunikuje s rodinou věcně a respektujícím způsobem. Spolupráce stojí na vzájemném respektu a zájmu o dítě.",
              order: 5,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                6,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka rodičům popíše, kdy a jak dítě reagovalo ve skupině, místo aby řekla, že je „špatné“. Co respektuje?",
              choices: [
                { id: "a", text: "Hodnocení osobnosti dítěte" },
                { id: "b", text: "Nálepkování dítěte" },
                {
                  id: "c",
                  text: "Konkrétní popis projevů dítěte",
                },
                { id: "d", text: "Veřejné ponižování dítěte" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog popisuje konkrétní projevy, nehodnotí osobnost dítěte. Popis situace pomáhá najít podporu, obecná nálepka škodí.",
              order: 6,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                7,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Dítě se zpočátku bojí zapojit do skupinové aktivity. Učitelka ho jemně povzbudí a nabídne úlohu podle jeho možností. Co dělá?",
              choices: [
                { id: "a", text: "Dítě nutí do role, kterou nezvládne" },
                {
                  id: "b",
                  text: "Podporuje zapojení dítěte do činností",
                },
                { id: "c", text: "Dítě nechá trvale stranou" },
                { id: "d", text: "Dítě veřejně kritizuje" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog podporuje zapojení dítěte do činností. Postupně a s ohledem na jeho možnosti pomáhá dítěti být součástí skupiny.",
              order: 7,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                8,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka dítěti, které potřebuje více času, přizpůsobí tempo a formu pomoci. Co tím uplatňuje?",
              choices: [
                { id: "a", text: "Stejnou podporu bez ohledu na potřeby" },
                { id: "b", text: "Ignorování potřeb dítěte" },
                { id: "c", text: "Veřejné srovnávání s ostatními" },
                {
                  id: "d",
                  text: "Individualizovanou podporu podle konkrétních potřeb",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog přizpůsobuje podporu konkrétním potřebám dítěte. Každé dítě může potřebovat jinou míru nebo formu pomoci.",
              order: 8,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                9,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka po domluvě s kolegyní a poradenským pracovištěm nastaví podporu pro dítě. Co tím respektuje?",
              choices: [
                { id: "a", text: "Práci bez kontaktu s nikým dalším" },
                { id: "b", text: "Izolaci dítěte od pomoci" },
                {
                  id: "c",
                  text: "Spolupráci s kolegy a dalšími odborníky",
                },
                { id: "d", text: "Přenesení veškeré odpovědnosti na rodiče" },
              ],
              correctChoiceId: "c",
              explanation:
                "Pedagog spolupracuje s kolegy a dalšími odborníky. Sociálně pedagogická práce je účinnější, když spolupracuje více stran.",
              order: 9,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                10,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka zjistí závažnou situaci a vyhledá odbornou pomoc místo toho, aby jednala sama. Co respektuje?",
              choices: [
                { id: "a", text: "Neomezenou pravomoc ve všem" },
                { id: "b", text: "Ignorování situace" },
                { id: "c", text: "Veřejné šíření citlivých informací" },
                {
                  id: "d",
                  text: "Hranice své odborné role",
                },
              ],
              correctChoiceId: "d",
              explanation:
                "Pedagog respektuje hranice své odborné role. Při závažné situaci vyhledá vhodnou odbornou pomoc místo jednání mimo kompetence.",
              order: 10,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Učitelka řeší citlivé informace o dítěti jen s těmi, kdo je potřebují vědět, a nikdy před ostatními rodiči. Co chrání?",
              choices: [
                { id: "a", text: "Veřejné srovnávání dětí" },
                {
                  id: "b",
                  text: "Důstojnost a soukromí dítěte",
                },
                { id: "c", text: "Povinnost šířit informace všem" },
                { id: "d", text: "Ignorování potřeb dítěte" },
              ],
              correctChoiceId: "b",
              explanation:
                "Pedagog chrání důstojnost a soukromí dítěte. Citlivé informace se sdílejí diskrétně a jen v nezbytném rozsahu.",
              order: 11,
              difficulty: "medium",
            },
            {
              id: buildStudyPracticeItemId(
                "obecna-pedagogika",
                "vybrane-kapitoly-ze-socialni-pedagogiky",
                "socialne-pedagogicka-prace-pedagoga",
                12,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "vybrane-kapitoly-ze-socialni-pedagogiky",
              lessonId: "socialne-pedagogicka-prace-pedagoga",
              type: "multiple-choice",
              prompt:
                "Po týdnu si učitelka zapíše, co ve skupině fungovalo a co změní příště. Co tím uplatňuje?",
              choices: [
                {
                  id: "a",
                  text: "Reflexi práce a úpravu dalšího postupu",
                },
                { id: "b", text: "Konec odborné práce" },
                { id: "c", text: "Ignorování zkušeností" },
                { id: "d", text: "Pevné opakování bez změny" },
              ],
              correctChoiceId: "a",
              explanation:
                "Pedagog svou práci reflektuje a upravuje další postup. Zamyšlení nad praxí pomáhá lépe podporovat děti v budoucnu.",
              order: 12,
              difficulty: "medium",
            },
          ],
          examQuestions: [],
        },
      ],
    },
  ],
};
