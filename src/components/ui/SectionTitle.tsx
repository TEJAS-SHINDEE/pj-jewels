/* =========================================================
   SECTION TITLE
   ========================================================= */

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6 text-center">
      {eyebrow && (
        <p className="mb-1 text-[9px] tracking-[0.22em] text-[#95774c]">
          {eyebrow}
        </p>
      )}

      <div className="flex items-center justify-center gap-3">
        <span className="hidden h-px w-8 bg-[#c6a167] sm:block" />
        <span className="text-[#bc8b42]">→</span>

        <h2
          className="text-[25px] text-[#59462f] sm:text-[28px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h2>

        <span className="text-[#bc8b42]">←</span>
        <span className="hidden h-px w-8 bg-[#c6a167] sm:block" />
      </div>

      {subtitle && (
        <p className="mt-0.5 text-[11px] text-[#806e59]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
