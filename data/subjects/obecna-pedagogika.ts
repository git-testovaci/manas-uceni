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
                  text: "Proces získávání znalostí, dovedností, postojů a kompetencí",
                },
                {
                  id: "c",
                  text: "Jen organizace rozvrhu hodin",
                },
                {
                  id: "d",
                  text: "Výhradně volná hra bez učení",
                },
              ],
              correctChoiceId: "b",
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
                  text: "Výsledek nebo dosažená úroveň ze vzdělávání",
                },
                {
                  id: "c",
                  text: "Činnost učitele při vedení hodiny",
                },
                {
                  id: "d",
                  text: "Vstup dítěte do kolektivu",
                },
              ],
              correctChoiceId: "b",
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
                  text: "Cílevědomá činnost pedagoga podporující učení",
                },
                {
                  id: "c",
                  text: "Výsledek dosažený po maturitě",
                },
                {
                  id: "d",
                  text: "Jen domácí příprava žáka",
                },
              ],
              correctChoiceId: "b",
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
                  text: "Učitel učí — vyučování; žáci se mění — učení",
                },
                {
                  id: "b",
                  text: "Učitel se učí — učení; žáci vedou — vyučování",
                },
                {
                  id: "c",
                  text: "Obojí je vzdělávání",
                },
                {
                  id: "d",
                  text: "Obojí je socializace",
                },
              ],
              correctChoiceId: "a",
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
                11,
              ),
              subjectId: "obecna-pedagogika",
              unitId: "zakladni-pojmy",
              lessonId: "vychova-a-vzdelavani",
              type: "multiple-choice",
              prompt:
                "Který pojem označuje vstup člověka do společnosti a osvojování norem, rolí a vzorců chování?",
              choices: [
                { id: "a", text: "Výchova" },
                { id: "b", text: "Vzdělávání" },
                { id: "c", text: "Socializace" },
                { id: "d", text: "Edukace" },
              ],
              correctChoiceId: "c",
              explanation:
                "Socializace znamená vstup do společnosti a osvojování norem, rolí a chování. Výchova je širší cílené působení, vzdělávání je proces získávání znalostí a edukace je nadřazený pojem pro výchovné i vzdělávací procesy.",
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
                  text: "Výchova, vzdělávání, učení, vyučování a socializace se prolínají",
                },
                {
                  id: "b",
                  text: "Jde výhradně o vyučování, ostatní pojmy neplatí",
                },
                {
                  id: "c",
                  text: "Jde jen o socializaci, učení v předškolním věku není",
                },
                {
                  id: "d",
                  text: "Všechny pojmy znamenají totéž",
                },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Napodobováním a účastí na činnostech" },
                { id: "b", text: "Pouze písemnými učebnicemi" },
                { id: "c", text: "Výhradně distanční výukou" },
                { id: "d", text: "Bez vlivu okolí a lidí" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Rodina a společenství" },
                { id: "b", text: "Pouze státní úředníci" },
                { id: "c", text: "Jen profesionální sportovní trenéři" },
                { id: "d", text: "Nikdo — děti se vychovaly samy" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Předávaly znalosti a očekávané chování" },
                { id: "b", text: "Bránily jakémukoli učení" },
                { id: "c", text: "Nahrazovaly veškerou rodinnou výchovu" },
                { id: "d", text: "Měly jen okrasnou roli bez vlivu" },
              ],
              correctChoiceId: "a",
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
                { id: "c", text: "Jen podle počasí" },
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
                { id: "a", text: "Disciplína" },
                { id: "b", text: "Výhradně volná tvorba bez pravidel" },
                { id: "c", text: "Jen umělecká výchova bez řádu" },
                { id: "d", text: "Úplné vyloučení tělesné přípravy" },
              ],
              correctChoiceId: "a",
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
                {
                  id: "a",
                  text: "Tělesná odolnost a služba státu",
                },
                { id: "b", text: "Pouze rozumová hra bez těla" },
                { id: "c", text: "Jen soukromý život bez vztahu ke státu" },
                { id: "d", text: "Výhradně umělecká činnost" },
              ],
              correctChoiceId: "a",
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
                {
                  id: "a",
                  text: "Rozvoj těla, rozumu, umění a občanského života",
                },
                { id: "b", text: "Jen tělesnou přípravu pro stát" },
                { id: "c", text: "Pouze přísnou vojenskou kázeň" },
                { id: "d", text: "Výhradně práci bez vzdělání" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Sparta — kázeň a stát; Athény — rozum a občanství" },
                { id: "b", text: "Obě stejně — jen umění" },
                { id: "c", text: "Sparta — rozum; Athény — jen kázeň" },
                { id: "d", text: "Obě bez jakýchkoli cílů výchovy" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Církev" },
                { id: "b", text: "Pouze sportovní soutěže" },
                { id: "c", text: "Jen zábavní průmysl" },
                { id: "d", text: "Výhradně soukromé koníčky bez institucí" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Byly různými školními prostředími období" },
                { id: "b", text: "Všechny byly úplně stejné" },
                { id: "c", text: "Ve středověku vůbec neexistovaly" },
                { id: "d", text: "Byly jen moderní internetové školy" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Ne všem stejně — jen části populace" },
                { id: "b", text: "Povinně a rovně každému bez rozdílu" },
                { id: "c", text: "Vůbec nikomu" },
                { id: "d", text: "Jen formou zábavných her bez výuky" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Novou důležitou formu vyššího vzdělávání" },
                { id: "b", text: "Pouze předškolní zařízení pro malé děti" },
                { id: "c", text: "Jen sportovní kluby" },
                { id: "d", text: "Výhradně místa bez výuky" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Člověka a rozum" },
                { id: "b", text: "Pouze memorování bez myšlení" },
                { id: "c", text: "Výhradně tělesný výkon bez vzdělání" },
                { id: "d", text: "Úplné odmítnutí vzdělávání" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Zájem o světské vzdělávání" },
                { id: "b", text: "Zákaz jakékoli kultury" },
                { id: "c", text: "Úplný zákaz učení" },
                { id: "d", text: "Pouze izolaci od života" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Postupně se rozšiřoval na širší část společnosti" },
                { id: "b", text: "Úplně zmizel pro všechny" },
                { id: "c", text: "Zůstal navždy jen pro jednoho člověka" },
                { id: "d", text: "Přestal souviset s potřebami společnosti" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Všem lidem" },
                { id: "b", text: "Pouze vybrané vrstvě" },
                { id: "c", text: "Nikomu — škola je zbytečná" },
                { id: "d", text: "Jen dospělým bez dětí" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Přizpůsobení věku a možnostem žáka" },
                { id: "b", text: "Stejný obsah pro všechny bez ohledu na věk" },
                { id: "c", text: "Výuka jen pro dospělé" },
                { id: "d", text: "Náhodný výběr témat" },
              ],
              correctChoiceId: "a",
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
                {
                  id: "a",
                  text: "Učení pozorováním, obrazy, předměty a zkušeností",
                },
                { id: "b", text: "Jen čtení abstraktních textů" },
                { id: "c", text: "Výhradně trestání žáků" },
                { id: "d", text: "Učení bez kontaktu se skutečností" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Od jednoduchého ke složitému" },
                { id: "b", text: "Od nejtěžšího k nejjednoduššímu" },
                { id: "c", text: "Bez jakéhokoli pořadí" },
                { id: "d", text: "Jen náhodným skákáním mezi tématy" },
              ],
              correctChoiceId: "a",
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
                { id: "d", text: "Výhradně z trestů" },
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
                { id: "a", text: "Má být spojeno s reálným životem" },
                { id: "b", text: "Má být odděleno od praxe" },
                { id: "c", text: "Má být jen teoretické bez využití" },
                { id: "d", text: "Nemá mít žádný smysl" },
              ],
              correctChoiceId: "a",
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
                { id: "a", text: "Cenil ho ve výchově a učení" },
                { id: "b", text: "Považoval ho za zbytečný" },
                { id: "c", text: "Zakazoval ho ve škole" },
                { id: "d", text: "Nevěnoval mu pozornost" },
              ],
              correctChoiceId: "a",
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
                {
                  id: "a",
                  text: "Bezmyšlenkovité memorování a nevhodné tresty",
                },
                { id: "b", text: "Názorné pomůcky" },
                { id: "c", text: "Přiměřenost věku" },
                { id: "d", text: "Všeobecné vzdělávání" },
              ],
              correctChoiceId: "a",
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
                "Která díla patří mezi Komenského díla v základním rozsahu?",
              choices: [
                {
                  id: "a",
                  text: "Velká didaktika, Informatorium školy mateřské, Svět v obrazech, Brána jazyků otevřená",
                },
                {
                  id: "b",
                  text: "Jen anonymní učebnice bez autora",
                },
                { id: "c", text: "Pouze moderní internetové články" },
                { id: "d", text: "Žádná z uvedených děl" },
              ],
              correctChoiceId: "a",
              explanation:
                "Mezi Komenského významná díla patří Velká didaktika, Informatorium školy mateřské, Svět v obrazech a Brána jazyků otevřená. Ostatní možnosti neodpovídají tomuto výčtu.",
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
      ],
    },
  ],
};
