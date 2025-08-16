/**
 * USER THEME CONFIGURATION
 * 
 * This file now reads theme settings from the merged settings JSON file.
 * Your dashboard can easily update src/content/data/settings.json
 * without worrying about TypeScript syntax or breaking the build.
 * 
 * DASHBOARD INTEGRATION:
 * - Update: src/content/data/settings.json (themeSettings section)
 * - This file automatically reads and applies those settings
 * - No TypeScript parsing required - just pure JSON updates!
 */

import { defaultTheme, type ThemeConfig } from './theme';
import settingsData from '../content/data/settings.json';

// Extract theme settings from merged settings JSON
const jsonThemeSettings = settingsData?.[0]?.themeSettings as any || null;

// ========================================
// THEME CONFIGURATION FROM JSON DATA
// ========================================
export const userTheme: ThemeConfig = jsonThemeSettings ? {
  colors: {
    primary: jsonThemeSettings.colors.primary,
    primaryLight: jsonThemeSettings.colors.primaryLight,
    primaryDark: jsonThemeSettings.colors.primaryDark,
    secondary: jsonThemeSettings.colors.secondary,
    accent: jsonThemeSettings.colors.accent,

    // WCAG-compliant accessible variants for better contrast
    primaryAccessible: jsonThemeSettings.colors.primary,      // Use the updated primary color (Emerald 700)
    primaryAccessibleDark: jsonThemeSettings.colors.primaryDark, // Use primaryDark (Emerald 800)

    textPrimary: jsonThemeSettings.colors.textPrimary,
    textSecondary: jsonThemeSettings.colors.textSecondary,
    textMuted: jsonThemeSettings.colors.textMuted,
    textMutedAccessible: jsonThemeSettings.colors.textSecondary || jsonThemeSettings.colors.textMuted,
    textAccent: jsonThemeSettings.colors.textAccent,

    bgPrimary: jsonThemeSettings.colors.bgPrimary,
    bgSecondary: jsonThemeSettings.colors.bgSecondary,
    bgTertiary: jsonThemeSettings.colors.bgTertiary,
    bgContrastSafe: jsonThemeSettings.colors.bgSecondary || jsonThemeSettings.colors.bgTertiary,

    surfaceCard: jsonThemeSettings.colors.surfaceCard,
    surfaceOverlay: jsonThemeSettings.colors.surfaceOverlay,
    borderDefault: jsonThemeSettings.colors.borderDefault,
    borderLight: jsonThemeSettings.colors.borderLight,
    borderAccent: jsonThemeSettings.colors.borderAccent,

    // NEW: Semantic Colors (with fallbacks to existing colors)
    success: jsonThemeSettings.colors?.success || defaultTheme.colors.success,
    warning: jsonThemeSettings.colors?.warning || defaultTheme.colors.warning,
    error: jsonThemeSettings.colors?.error || defaultTheme.colors.error,
    info: jsonThemeSettings.colors?.info || defaultTheme.colors.info,

    // NEW: Contextual Surface Colors (with fallbacks)
    surfaceRaised: jsonThemeSettings.colors?.surfaceRaised || jsonThemeSettings.colors.surfaceCard,
    surfaceSunken: jsonThemeSettings.colors?.surfaceSunken || jsonThemeSettings.colors.bgTertiary,
    surfaceFloating: jsonThemeSettings.colors?.surfaceFloating || defaultTheme.colors.surfaceFloating,

    // NEW: Interactive State Colors (with fallbacks)
    stateHover: jsonThemeSettings.colors?.stateHover || defaultTheme.colors.stateHover,
    stateActive: jsonThemeSettings.colors?.stateActive || defaultTheme.colors.stateActive,
    stateFocus: jsonThemeSettings.colors?.stateFocus || jsonThemeSettings.colors.primary,
    stateDisabled: jsonThemeSettings.colors?.stateDisabled || defaultTheme.colors.stateDisabled,
  },
  typography: {
    fontHeading: jsonThemeSettings.typography.fontHeading,
    fontBody: jsonThemeSettings.typography.fontBody,
    fontMono: jsonThemeSettings.typography.fontMono,

    // Fixed Font Sizes
    textXs: jsonThemeSettings.typography.textXs,
    textSm: jsonThemeSettings.typography.textSm,
    textBase: jsonThemeSettings.typography.textBase,
    textLg: jsonThemeSettings.typography.textLg,
    textXl: jsonThemeSettings.typography.textXl,
    text2xl: jsonThemeSettings.typography.text2xl,
    text3xl: jsonThemeSettings.typography.text3xl,
    text4xl: jsonThemeSettings.typography.text4xl,

    // NEW: Fluid Typography (with fallbacks)
    textFluidXs: jsonThemeSettings.typography?.textFluidXs || defaultTheme.typography.textFluidXs,
    textFluidSm: jsonThemeSettings.typography?.textFluidSm || defaultTheme.typography.textFluidSm,
    textFluidBase: jsonThemeSettings.typography?.textFluidBase || defaultTheme.typography.textFluidBase,
    textFluidLg: jsonThemeSettings.typography?.textFluidLg || defaultTheme.typography.textFluidLg,
    textFluidXl: jsonThemeSettings.typography?.textFluidXl || defaultTheme.typography.textFluidXl,
    textFluid2xl: jsonThemeSettings.typography?.textFluid2xl || defaultTheme.typography.textFluid2xl,
    textFluid3xl: jsonThemeSettings.typography?.textFluid3xl || defaultTheme.typography.textFluid3xl,
    textFluid4xl: jsonThemeSettings.typography?.textFluid4xl || defaultTheme.typography.textFluid4xl,

    // NEW: Line Heights (with fallbacks)
    leadingTight: jsonThemeSettings.typography?.leadingTight || defaultTheme.typography.leadingTight,
    leadingSnug: jsonThemeSettings.typography?.leadingSnug || defaultTheme.typography.leadingSnug,
    leadingNormal: jsonThemeSettings.typography?.leadingNormal || defaultTheme.typography.leadingNormal,
    leadingRelaxed: jsonThemeSettings.typography?.leadingRelaxed || defaultTheme.typography.leadingRelaxed,
    leadingLoose: jsonThemeSettings.typography?.leadingLoose || defaultTheme.typography.leadingLoose,
  },
  spacing: {
    containerMaxWidth: jsonThemeSettings.spacing.containerMaxWidth,
    sectionPadding: jsonThemeSettings.spacing.sectionPadding,
    cardPadding: jsonThemeSettings.spacing.cardPadding,
    buttonPadding: jsonThemeSettings.spacing.buttonPadding,

    // NEW: Advanced Spacing Scale (with fallbacks)
    space3xs: jsonThemeSettings.spacing?.space3xs || defaultTheme.spacing.space3xs,
    space2xs: jsonThemeSettings.spacing?.space2xs || defaultTheme.spacing.space2xs,
    spaceXs: jsonThemeSettings.spacing?.spaceXs || defaultTheme.spacing.spaceXs,
    spaceSm: jsonThemeSettings.spacing?.spaceSm || defaultTheme.spacing.spaceSm,
    spaceMd: jsonThemeSettings.spacing?.spaceMd || defaultTheme.spacing.spaceMd,
    spaceLg: jsonThemeSettings.spacing?.spaceLg || defaultTheme.spacing.spaceLg,
    spaceXl: jsonThemeSettings.spacing?.spaceXl || defaultTheme.spacing.spaceXl,
    space2xl: jsonThemeSettings.spacing?.space2xl || defaultTheme.spacing.space2xl,
    space3xl: jsonThemeSettings.spacing?.space3xl || defaultTheme.spacing.space3xl,
  },
  borderRadius: {
    sm: jsonThemeSettings.borderRadius.sm,
    md: jsonThemeSettings.borderRadius.md,
    lg: jsonThemeSettings.borderRadius.lg,
    xl: jsonThemeSettings.borderRadius.xl,
    full: jsonThemeSettings.borderRadius.full,
  },
  shadows: {
    sm: jsonThemeSettings.shadows.sm,
    md: jsonThemeSettings.shadows.md,
    lg: jsonThemeSettings.shadows.lg,
    xl: jsonThemeSettings.shadows.xl,
  },
  animation: {
    duration: jsonThemeSettings.animation.duration,
    easing: jsonThemeSettings.animation.easing,
  },
  transitions: {
    pageStyle: jsonThemeSettings.transitions.pageStyle,
    speed: jsonThemeSettings.transitions.speed,
    loadingStyle: jsonThemeSettings.transitions.loadingStyle,
    reducedMotion: jsonThemeSettings.transitions.reducedMotion,
  },
} : defaultTheme; // Fallback to default theme if JSON fails to load

// ========================================
// LUXURY THEME VARIANTS
// ========================================

// Luxury Gold Theme
export const luxuryGold: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#D4AF37',        // Rich gold
    primaryLight: '#F4E4BC',   // Light champagne
    primaryDark: '#B8860B',    // Dark goldenrod
    secondary: '#8B7355',      // Warm taupe
    accent: '#CD853F',         // Peru gold

    // Accessible variants
    primaryAccessible: '#B8860B',      // Use primaryDark for better contrast
    primaryAccessibleDark: '#996F0A',  // Even darker

    textPrimary: '#1A0F0A',    // Darker deep brown for better contrast
    textSecondary: '#2C1810',  // Dark coffee for better contrast
    textMuted: '#5D4037',      // Darker warm taupe for better contrast
    textMutedAccessible: '#4A2C17',    // Even darker muted text
    textAccent: '#B8860B',     // Darker gold accent for better contrast

    bgPrimary: '#FFFEF7',      // Cream white
    bgSecondary: '#FAF7F0',    // Warm ivory
    bgTertiary: '#F5F0E8',     // Light champagne
    bgContrastSafe: '#F2EDE3', // Slightly darker for better contrast

    surfaceCard: '#FEFDFB',    // Pure cream
    surfaceOverlay: '#F9F6F0', // Soft ivory
    surfaceRaised: '#FEFDFB',  // Same as surfaceCard
    surfaceSunken: '#F5F0E8',  // Same as bgTertiary
    surfaceFloating: 'rgba(254, 253, 251, 0.95)', // Semi-transparent cream

    borderDefault: '#E8DCC6',  // Champagne border
    borderLight: '#F0E6D2',    // Light champagne
    borderAccent: '#D4C4A8',   // Gold-toned border

    // Interactive states for gold theme
    stateHover: 'rgba(212, 175, 55, 0.1)',
    stateActive: 'rgba(212, 175, 55, 0.2)',
    stateFocus: '#D4AF37',
    stateDisabled: 'rgba(26, 15, 10, 0.3)',
  },
  typography: {
    ...defaultTheme.typography,
    fontHeading: '"Playfair Display", "Georgia", serif',
    fontBody: '"Source Sans Pro", "Helvetica Neue", sans-serif',
  },
  shadows: {
    sm: '0 2px 4px 0 rgb(212 175 55 / 0.1)',
    md: '0 4px 8px -1px rgb(212 175 55 / 0.15), 0 2px 4px -2px rgb(212 175 55 / 0.1)',
    lg: '0 10px 20px -3px rgb(212 175 55 / 0.2), 0 4px 8px -4px rgb(212 175 55 / 0.15)',
    xl: '0 20px 30px -5px rgb(212 175 55 / 0.25), 0 8px 12px -6px rgb(212 175 55 / 0.2)',
  },
};

// Luxury Midnight Theme
export const luxuryMidnight: ThemeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#6366F1',        // Indigo
    primaryLight: '#818CF8',   // Light indigo
    primaryDark: '#4F46E5',    // Dark indigo
    secondary: '#64748B',      // Slate
    accent: '#F59E0B',         // Amber

    // Accessible variants for dark theme
    primaryAccessible: '#818CF8',      // Lighter indigo for dark backgrounds
    primaryAccessibleDark: '#93C5FD',  // Even lighter for small text

    textPrimary: '#F8FAFC',    // Almost white
    textSecondary: '#CBD5E1',  // Light slate
    textMuted: '#94A3B8',      // Slate gray
    textMutedAccessible: '#CBD5E1',    // Lighter muted text for dark backgrounds
    textAccent: '#6366F1',     // Indigo

    bgPrimary: '#0F172A',      // Slate 900
    bgSecondary: '#1E293B',    // Slate 800
    bgTertiary: '#334155',     // Slate 700
    bgContrastSafe: '#1E293B', // Same as secondary for dark theme

    surfaceCard: '#1E293B',    // Slate 800
    surfaceOverlay: '#334155', // Slate 700
    surfaceRaised: '#1E293B',  // Same as surfaceCard
    surfaceSunken: '#334155',  // Same as bgTertiary
    surfaceFloating: 'rgba(30, 41, 59, 0.95)', // Semi-transparent slate

    borderDefault: '#475569',  // Slate 600
    borderLight: '#64748B',    // Slate 500
    borderAccent: '#6366F1',   // Indigo

    // Interactive states for dark theme
    stateHover: 'rgba(255, 255, 255, 0.05)',
    stateActive: 'rgba(255, 255, 255, 0.1)',
    stateFocus: '#6366F1',
    stateDisabled: 'rgba(255, 255, 255, 0.3)',
  },
  typography: {
    ...defaultTheme.typography,
    fontHeading: '"Inter", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
  },
};

// ========================================
// QUICK COLOR PRESETS
// ========================================

// Uncomment and modify these for quick color changes:

// Blue Theme (Default)
// export const userTheme = {
//   ...themePresets.professional,
//   colors: {
//     ...themePresets.professional.colors,
//     primary: '#3B82F6',
//   }
// };

// Green Theme
// export const userTheme = {
//   ...themePresets.professional,
//   colors: {
//     ...themePresets.professional.colors,
//     primary: '#10B981',
//     primaryLight: '#34D399',
//     primaryDark: '#059669',
//     textAccent: '#10B981',
//   }
// };

// Purple Theme
// export const userTheme = {
//   ...themePresets.professional,
//   colors: {
//     ...themePresets.professional.colors,
//     primary: '#8B5CF6',
//     primaryLight: '#A78BFA',
//     primaryDark: '#7C3AED',
//     textAccent: '#8B5CF6',
//   }
// };

// Red Theme
// export const userTheme = {
//   ...themePresets.professional,
//   colors: {
//     ...themePresets.professional.colors,
//     primary: '#EF4444',
//     primaryLight: '#F87171',
//     primaryDark: '#DC2626',
//     textAccent: '#EF4444',
//   }
// };

// ========================================
// ADVANCED CUSTOMIZATION EXAMPLES
// ========================================

// Custom font example (using Google Fonts):
// export const userTheme = {
//   ...themePresets.professional,
//   typography: {
//     ...themePresets.professional.typography,
//     fontHeading: '"Inter", system-ui, sans-serif',
//     fontBody: '"Inter", system-ui, sans-serif',
//   }
// };

// Rounded theme example:
// export const userTheme = {
//   ...themePresets.professional,
//   borderRadius: {
//     sm: '0.5rem',
//     md: '0.75rem',
//     lg: '1rem',
//     xl: '1.5rem',
//     full: '9999px',
//   }
// };

// Minimal theme example:
// export const userTheme = {
//   ...themePresets.professional,
//   shadows: {
//     sm: 'none',
//     md: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
//     lg: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
//     xl: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
//   }
// };