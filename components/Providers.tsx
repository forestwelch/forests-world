import ThemeProvider from "@/theme/ThemeProvider";
import I18nProvider from "@/i18n/I18nProvider";
import StepProvider from "@/components/StepContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <StepProvider>{children}</StepProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Providers;
