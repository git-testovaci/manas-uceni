type CompactFormulaProps = {
  children: string;
};

export function CompactFormula({ children }: CompactFormulaProps) {
  return (
    <p className="rounded-lg bg-white/50 px-3 py-2 text-sm font-medium text-foreground/90">
      {children}
    </p>
  );
}
