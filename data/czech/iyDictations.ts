export type IyDictation = {
  id: string;
  title: string;
  page: string;
  exercise: string;
  text: string;
};

export const PREDEFINED_IY_DICTATIONS: IyDictation[] = [
  {
    id: "strana-37-cviceni-4",
    title: "Strana 37, cvičení 4",
    page: "37",
    exercise: "4",
    text: "Eliška mi koupí zmrzlinu. Zbyněk posílá dopis babičce. Slyšíte to dobře? To byl veliký omyl. Rozhledna na kopci je vysoká. Nastrouhej sýr na pomazánku. Mirek odbyl domácí úkol. Koupíš nové mýdlo? Prosím, zavolej mamince.",
  },
];
