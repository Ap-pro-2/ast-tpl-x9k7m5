/**
 * Multi-Purpose Theme Configuration
 * Like WordPress themes - users can customize colors, fonts, and styling
 * Enhanced with accessibility-first color system
 */

export interface ThemeConfig {
  // Color Palette
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    
    // Accessible Color Variants
    primaryAccessible: string;      // WCAG AA compliant on light backgrounds
    primaryAccessibleDark: string;  // WCAG AA compliant for small text
    
    // Text Colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textMutedAccessible: string;    // WCAG AA compliant muted text
    textAccent: string;
    
    // Background Colors
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    bgContrastSafe: string;         // Slightly adjusted for better contrast
    
    // Surface Colors
    surfaceCard: string;
    surfaceOverlay: string;
    
    // Border Colors
    borderDefault: string;
    borderLight: string;
    borderAccent: string;
    
    // Semantic Colors (NEW)
    success: string;
    warning: string;
    error: string;
    info: string;
    
    // Contextual Surface Colors (NEW)
    surfaceRaised: string;
    surfaceSunken: string;
    surfaceFloating: string;
    
    // Interactive State Colors (NEW)
    stateHover: string;
    stateActive: string;
    stateFocus: string;
    stateDisabled: string;
  };
  
  // Typography
  typography: {
    fontHeading: string;
    fontBody: string;
    fontMono: string;
    
    // Font Sizes (Fixed)
    textXs: string;
    textSm: string;
    textBase: string;
    textLg: string;
    textXl: string;
    text2xl: string;
    text3xl: string;
    text4xl: string;
    
    // Fluid Typography (NEW)
    textFluidXs: string;
    textFluidSm: string;
    textFluidBase: string;
    textFluidLg: string;
    textFluidXl: string;
    textFluid2xl: string;
    textFluid3xl: string;
    textFluid4xl: string;
    
    // Line Heights (NEW)
    leadingTight: string;
    leadingSnug: string;
    leadingNormal: string;
    leadingRelaxed: string;
    leadingLoose: string;
  };
  
  // Spacing & Layout
  spacing: {
    containerMaxWidth: string;
    sectionPadding: string;
    cardPadding: string;
    buttonPadding: string;
    
    // Advanced Spacing Scale (NEW)
    space3xs: string;
    space2xs: string;
    spaceXs: string;
    spaceSm: string;
    spaceMd: string;
    spaceLg: string;
    spaceXl: string;
    space2xl: string;
    space3xl: string;
  };
  
  // Border Radius
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  // Shadows
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // Animation
  animation: {
    duration: string;
    easing: string;
  };
  
  // Transitions
  transitions: {
    pageStyle: string;
    speed: string;
    loadingStyle: string;
    reducedMotion: string;
  };
}

// Default Theme Configuration (Neutral - gets overridden by user theme)
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#6B7280',        // Neutral Gray-500
    primaryLight: '#9CA3AF',   // Gray-400
    primaryDark: '#4B5563',    // Gray-600
    secondary: '#6B7280',      // Gray-500
    accent: '#10B981',         // Emerald-500
    
    // Accessible variants
    primaryAccessible: '#4B5563',      // Darker gray for better contrast
    primaryAccessibleDark: '#374151',  // Even darker for small text
    
    textPrimary: '#111827',    // Gray-900
    textSecondary: '#374151',  // Gray-700
    textMuted: '#6B7280',      // Gray-500
    textMutedAccessible: '#4B5563',    // Darker gray for better contrast
    textAccent: '#6B7280',     // Neutral gray
    
    bgPrimary: '#FFFFFF',      // White
    bgSecondary: '#F9FAFB',    // Gray-50
    bgTertiary: '#F3F4F6',     // Gray-100
    bgContrastSafe: '#F8F9FA', // Slightly darker for better contrast
    
    surfaceCard: '#FFFFFF',    // White
    surfaceOverlay: '#F9FAFB', // Gray-50
    
    borderDefault: '#E5E7EB',  // Gray-200
    borderLight: '#F3F4F6',    // Gray-100
    borderAccent: '#D1D5DB',   // Gray-300
    
    // Semantic Colors (NEW)
    success: '#10B981',        // Emerald-500
    warning: '#F59E0B',        // Amber-500
    error: '#EF4444',          // Red-500
    info: '#3B82F6',           // Blue-500
    
    // Contextual Surface Colors (NEW)
    surfaceRaised: '#FFFFFF',  // White (same as surfaceCard)
    surfaceSunken: '#F3F4F6',  // Gray-100 (same as bgTertiary)
    surfaceFloating: 'rgba(255, 255, 255, 0.95)', // Semi-transparent white
    
    // Interactive State Colors (NEW)
    stateHover: 'rgba(0, 0, 0, 0.05)',     // Light overlay
    stateActive: 'rgba(0, 0, 0, 0.1)',     // Darker overlay
    stateFocus: '#6B7280',                  // Primary color for focus
    stateDisabled: 'rgba(0, 0, 0, 0.3)',   // Disabled state
  },
  
  typography: {
    fontHeading: 'system-ui, -apple-system, sans-serif',
    fontBody: 'system-ui, -apple-system, sans-serif',
    fontMono: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    
    // Fixed Font Sizes
    textXs: '0.75rem',    // 12px
    textSm: '0.875rem',   // 14px
    textBase: '1rem',     // 16px
    textLg: '1.125rem',   // 18px
    textXl: '1.25rem',    // 20px
    text2xl: '1.5rem',    // 24px
    text3xl: '1.875rem',  // 30px
    text4xl: '2.25rem',   // 36px
    
    // Fluid Typography (NEW)
    textFluidXs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    textFluidSm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    textFluidBase: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    textFluidLg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    textFluidXl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    textFluid2xl: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
    textFluid3xl: 'clamp(1.875rem, 1.5rem + 1.875vw, 3rem)',
    textFluid4xl: 'clamp(2.25rem, 1.75rem + 2.5vw, 4rem)',
    
    // Line Heights (NEW)
    leadingTight: '1.25',
    leadingSnug: '1.375',
    leadingNormal: '1.5',
    leadingRelaxed: '1.625',
    leadingLoose: '2',
  },
  
  spacing: {
    containerMaxWidth: '1200px',
    sectionPadding: '4rem 0',
    cardPadding: '1.5rem',
    buttonPadding: '0.5rem 1rem',
    
    // Advanced Spacing Scale (NEW)
    space3xs: '0.125rem',  // 2px
    space2xs: '0.25rem',   // 4px
    spaceXs: '0.5rem',     // 8px
    spaceSm: '0.75rem',    // 12px
    spaceMd: '1rem',       // 16px
    spaceLg: '1.5rem',     // 24px
    spaceXl: '2rem',       // 32px
    space2xl: '3rem',      // 48px
    space3xl: '4rem',      // 64px
  },
  
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  animation: {
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  transitions: {
    pageStyle: 'smooth',
    speed: 'medium',
    loadingStyle: 'progress',
    reducedMotion: 'respect',
  },
};

// Alternative Theme Presets
export const themePresets = {
  // Professional Blue (Default)
  professional: defaultTheme,
  
  // Dark Theme
  dark: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#60A5FA',
      primaryLight: '#93C5FD',
      primaryDark: '#3B82F6',
      
      textPrimary: '#F9FAFB',
      textSecondary: '#D1D5DB',
      textMuted: '#9CA3AF',
      textAccent: '#60A5FA',
      
      bgPrimary: '#111827',
      bgSecondary: '#1F2937',
      bgTertiary: '#374151',
      
      surfaceCard: '#1F2937',
      surfaceOverlay: '#374151',
      surfaceRaised: '#1F2937',
      surfaceSunken: '#374151',
      surfaceFloating: 'rgba(31, 41, 55, 0.95)',
      
      borderDefault: '#374151',
      borderLight: '#4B5563',
      borderAccent: '#6B7280',
      
      stateHover: 'rgba(255, 255, 255, 0.05)',
      stateActive: 'rgba(255, 255, 255, 0.1)',
      stateFocus: '#60A5FA',
      stateDisabled: 'rgba(255, 255, 255, 0.3)',
    },
  },
  
  // Green Nature Theme
  nature: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#10B981',
      primaryLight: '#34D399',
      primaryDark: '#059669',
      accent: '#F59E0B',
      textAccent: '#10B981',
      
      // Update accessible variants for nature theme
      primaryAccessible: '#059669',
      primaryAccessibleDark: '#047857',
      
      // Update state colors for nature theme
      stateFocus: '#10B981',
    },
  },
  
  // Purple Creative Theme
  creative: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#8B5CF6',
      primaryLight: '#A78BFA',
      primaryDark: '#7C3AED',
      accent: '#F59E0B',
      textAccent: '#8B5CF6',
      
      // Update accessible variants for creative theme
      primaryAccessible: '#7C3AED',
      primaryAccessibleDark: '#6D28D9',
      
      // Update state colors for creative theme
      stateFocus: '#8B5CF6',
    },
  },
  
  // Orange Warm Theme
  warm: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#F97316',
      primaryLight: '#FB923C',
      primaryDark: '#EA580C',
      accent: '#EF4444',
      textAccent: '#F97316',
      
      // Update accessible variants for warm theme
      primaryAccessible: '#EA580C',
      primaryAccessibleDark: '#C2410C',
      
      // Update state colors for warm theme
      stateFocus: '#F97316',
    },
  },
} as const;

// Function to generate CSS custom properties
export function generateThemeCSS(theme: ThemeConfig): string {
  return `
    :root {
      /* Colors */
      --color-primary: ${theme.colors.primary};
      --color-primary-light: ${theme.colors.primaryLight};
      --color-primary-dark: ${theme.colors.primaryDark};
      --color-secondary: ${theme.colors.secondary};
      --color-accent: ${theme.colors.accent};
      
      /* Accessible Color Variants */
      --color-primary-accessible: ${theme.colors.primaryAccessible};
      --color-primary-accessible-dark: ${theme.colors.primaryAccessibleDark};
      
      --text-primary: ${theme.colors.textPrimary};
      --text-secondary: ${theme.colors.textSecondary};
      --text-muted: ${theme.colors.textMuted};
      --text-muted-accessible: ${theme.colors.textMutedAccessible};
      --text-accent: ${theme.colors.textAccent};
      
      --bg-primary: ${theme.colors.bgPrimary};
      --bg-secondary: ${theme.colors.bgSecondary};
      --bg-tertiary: ${theme.colors.bgTertiary};
      --bg-contrast-safe: ${theme.colors.bgContrastSafe};
      
      --surface-card: ${theme.colors.surfaceCard};
      --surface-overlay: ${theme.colors.surfaceOverlay};
      
      --border-default: ${theme.colors.borderDefault};
      --border-light: ${theme.colors.borderLight};
      --border-accent: ${theme.colors.borderAccent};
      
      /* Semantic Colors (NEW) */
      --color-success: ${theme.colors.success};
      --color-warning: ${theme.colors.warning};
      --color-error: ${theme.colors.error};
      --color-info: ${theme.colors.info};
      
      /* Contextual Surface Colors (NEW) */
      --surface-raised: ${theme.colors.surfaceRaised};
      --surface-sunken: ${theme.colors.surfaceSunken};
      --surface-floating: ${theme.colors.surfaceFloating};
      
      /* Interactive State Colors (NEW) */
      --state-hover: ${theme.colors.stateHover};
      --state-active: ${theme.colors.stateActive};
      --state-focus: ${theme.colors.stateFocus};
      --state-disabled: ${theme.colors.stateDisabled};
      
      /* Typography */
      --font-heading: ${theme.typography.fontHeading};
      --font-body: ${theme.typography.fontBody};
      --font-mono: ${theme.typography.fontMono};
      
      /* Fixed Font Sizes */
      --text-xs: ${theme.typography.textXs};
      --text-sm: ${theme.typography.textSm};
      --text-base: ${theme.typography.textBase};
      --text-lg: ${theme.typography.textLg};
      --text-xl: ${theme.typography.textXl};
      --text-2xl: ${theme.typography.text2xl};
      --text-3xl: ${theme.typography.text3xl};
      --text-4xl: ${theme.typography.text4xl};
      
      /* Fluid Typography (NEW) */
      --text-fluid-xs: ${theme.typography.textFluidXs};
      --text-fluid-sm: ${theme.typography.textFluidSm};
      --text-fluid-base: ${theme.typography.textFluidBase};
      --text-fluid-lg: ${theme.typography.textFluidLg};
      --text-fluid-xl: ${theme.typography.textFluidXl};
      --text-fluid-2xl: ${theme.typography.textFluid2xl};
      --text-fluid-3xl: ${theme.typography.textFluid3xl};
      --text-fluid-4xl: ${theme.typography.textFluid4xl};
      
      /* Line Heights (NEW) */
      --leading-tight: ${theme.typography.leadingTight};
      --leading-snug: ${theme.typography.leadingSnug};
      --leading-normal: ${theme.typography.leadingNormal};
      --leading-relaxed: ${theme.typography.leadingRelaxed};
      --leading-loose: ${theme.typography.leadingLoose};
      
      /* Spacing */
      --container-max-width: ${theme.spacing.containerMaxWidth};
      --section-padding: ${theme.spacing.sectionPadding};
      --card-padding: ${theme.spacing.cardPadding};
      --button-padding: ${theme.spacing.buttonPadding};
      
      /* Advanced Spacing Scale (NEW) */
      --space-3xs: ${theme.spacing.space3xs};
      --space-2xs: ${theme.spacing.space2xs};
      --space-xs: ${theme.spacing.spaceXs};
      --space-sm: ${theme.spacing.spaceSm};
      --space-md: ${theme.spacing.spaceMd};
      --space-lg: ${theme.spacing.spaceLg};
      --space-xl: ${theme.spacing.spaceXl};
      --space-2xl: ${theme.spacing.space2xl};
      --space-3xl: ${theme.spacing.space3xl};
      
      /* Border Radius */
      --radius-sm: ${theme.borderRadius.sm};
      --radius-md: ${theme.borderRadius.md};
      --radius-lg: ${theme.borderRadius.lg};
      --radius-xl: ${theme.borderRadius.xl};
      --radius-full: ${theme.borderRadius.full};
      
      /* Shadows */
      --shadow-sm: ${theme.shadows.sm};
      --shadow-md: ${theme.shadows.md};
      --shadow-lg: ${theme.shadows.lg};
      --shadow-xl: ${theme.shadows.xl};
      
      /* Animation */
      --animation-duration: ${theme.animation.duration};
      --animation-easing: ${theme.animation.easing};
    }
  `;
}