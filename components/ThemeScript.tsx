const themeScript = `
(function () {
  try {
    var storageKey = "theme";
    var defaultTheme = "system";
    var theme = localStorage.getItem(storageKey) || defaultTheme;

    if (theme !== "light" && theme !== "dark" && theme !== "system") {
      theme = defaultTheme;
    }

    var resolvedTheme = theme;

    if (theme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  } catch (error) {}
})();
`;

export default function ThemeScript() {
  return (
    <script
      id="gx-theme-script"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}