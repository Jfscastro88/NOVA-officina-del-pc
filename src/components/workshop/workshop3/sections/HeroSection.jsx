import { useLanguage } from "../../../../i18n/useLanguage";
import SlideSectionFrame from "../SlideSectionFrame";

export default function HeroSection({ section }) {
  const { ui } = useLanguage();
  return (
    <SlideSectionFrame
      section={section}
      subtitle={
        <>
          <span className="block text-lg font-medium italic text-white/70 sm:text-xl">
            &ldquo;{section.tagline}&rdquo;
          </span>
          <span className="mt-4 block text-sm text-white/50">
            {ui.slides.heroHint}
          </span>
        </>
      }
    />
  );
}
