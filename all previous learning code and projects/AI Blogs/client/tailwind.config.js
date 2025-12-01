/** @type {import('tailwindcss').Config} */
const withOpacity = (variable) => ({
  DEFAULT: `rgb(var(${variable}) / <alpha-value>)`,
  50: `rgb(var(${variable}-50) / <alpha-value>)`,
  100: `rgb(var(${variable}-100) / <alpha-value>)`,
  200: `rgb(var(${variable}-200) / <alpha-value>)`,
  300: `rgb(var(${variable}-300) / <alpha-value>)`,
  400: `rgb(var(${variable}-400) / <alpha-value>)`,
  500: `rgb(var(${variable}-500) / <alpha-value>)`,
  600: `rgb(var(${variable}-600) / <alpha-value>)`,
  700: `rgb(var(${variable}-700) / <alpha-value>)`,
  800: `rgb(var(${variable}-800) / <alpha-value>)`,
  900: `rgb(var(${variable}-900) / <alpha-value>)`,
});

export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // page & surfaces
        bg: withOpacity('--bg'),
        surface: withOpacity('--surface'),
        card: withOpacity('--card'),
        popover: withOpacity('--popover'),
        overlay: withOpacity('--overlay'),

        // chrome / UI
        border: withOpacity('--border'),
        ring: withOpacity('--ring'),
        input: withOpacity('--input'),

        // text
        fg: withOpacity('--fg'),
        'muted-foreground': withOpacity('--muted-foreground'),
        'muted-dark': withOpacity('--muted-dark'),

        // brand / accents
        primary: withOpacity('--primary'),
        'primary-foreground': withOpacity('--primary-foreground'),
        accent: withOpacity('--accent'),
        'accent-foreground': withOpacity('--accent-foreground'),

        // footer / deep tone
        footer: withOpacity('--footer'),
        'footer-foreground': withOpacity('--footer-foreground'),

        // status tokens
        success: withOpacity('--success'),
        'success-foreground': withOpacity('--success-foreground'),
        warning: withOpacity('--warning'),
        'warning-foreground': withOpacity('--warning-foreground'),
        destructive: withOpacity('--destructive'),
        'destructive-foreground': withOpacity('--destructive-foreground'),
      },
    },
  },
  plugins: [],
}
