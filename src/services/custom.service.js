export const CustomService = {
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  capitalizeFirstLetter: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};
