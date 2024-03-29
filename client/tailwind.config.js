/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-marine-blue": "#02295a",
        "primary-purplish-blue": "#473dff",
        "primary-pastel-blue": "#adbeff",
        "primary-light-blue": "#bfe2fd",
        "primary-starberry-red": "#ed3548",
        "neutral-cool-gray": "#9699ab",
        "neutral-light-gray": "#d6d9e6",
        "neutral-magnolia": "#f0f6ff",
        "neutral-alabaster": "#fafbff",
        "semi-transparent-grayish-color": "#7979792e",
      },
      backgroundImage: {
        "sidebar-image-mobile":
          "url('../src/components/PropertyForm/assets/alessio-soggetti-cfKC0UOZHJo-unsplash.jpg')",
        "sidebar-image-desktop":
          "url('../src/components/PropertyForm/assets/joe-beck-5rsLoz7vrng-unsplash.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
