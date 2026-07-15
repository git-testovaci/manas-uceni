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
      ],
    },
  ],
};
