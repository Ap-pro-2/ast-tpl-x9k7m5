# AstroPress Indexing Control System

## Overview
This guide explains how to implement comprehensive indexing control for your AstroPress theme, allowing users to control what content gets indexed by search engines and included in sitemaps.

## What You Need to Implement

### 1. Enhanced Settings Schema
Update your settings schema to include indexing controls for different content types.

### 2. Core Logic Updates
Modify your core blog logic to respect indexing settings when generating content.

### 3. Sitemap Logic Enhancement
Update sitemap generation to use the new indexing controls.

### 4. Astro Config Updates
Enhance the sitemap filter in astro.config.mjs to use dynamic settings.

## Implementation Steps

### Step 1: Update Settings Schema
Add indexing controls to your content config schema in `src/content.config.ts`.

### Step 2: Update Settings Data
Add the new indexing configuration to your `src/content/data/settings.json`.

### Step 3: Create Indexing Utility
Create a new utility file to handle indexing logic consistently across your theme.

### Step 4: Update Core Logic
Modify your `src/core/blogLogic.ts` to respect indexing settings.

### Step 5: Update Sitemap Pages
Modify your sitemap generation to use the new controls.

### Step 6: Update Astro Config
Make the sitemap filter dynamic based on user settings.

## Benefits

- **User Control**: Users can easily control what gets indexed without touching code
- **SEO Flexibility**: Fine-grained control over search engine visibility
- **Performance**: Reduce sitemap size by excluding unwanted content
- **Maintainable**: Centralized configuration following your existing patterns
- **Consistent**: Uses your established theme configuration system

## Files That Will Be Created/Modified

1. **New Files**:
   - `src/utils/indexingControl.ts` - Centralized indexing logic
   - `INDEXING-CONTROL-IMPLEMENTATION.md` - Step-by-step implementation guide

2. **Modified Files**:
   - `src/content.config.ts` - Enhanced settings schema
   - `src/content/data/settings.json` - New indexing configuration
   - `src/core/blogLogic.ts` - Respect indexing settings
   - `src/pages/sitemap.astro` - Use indexing controls
   - `astro.config.mjs` - Dynamic sitemap filtering

## Configuration Options

Users will be able to control:

- **Blog Posts**: Include/exclude from indexing
- **Categories**: Include/exclude category pages
- **Tags**: Include/exclude tag pages  
- **Authors**: Include/exclude author pages
- **Archive Pages**: Include/exclude date-based archives
- **Pagination**: Include/exclude paginated pages
- **Draft Content**: Handle draft visibility
- **Custom Pages**: Control static page indexing

## Usage Examples

```json
{
  "indexing": {
    "enabled": true,
    "includeInSitemap": {
      "blogPosts": true,
      "categories": true,
      "tags": false,
      "authors": true,
      "pagination": false,
      "archives": false
    },
    "robotsDirectives": {
      "blogPosts": "index,follow",
      "categories": "index,follow", 
      "tags": "noindex,follow",
      "authors": "index,follow"
    }
  }
}
```

This system maintains your theme's philosophy of being user-friendly while providing powerful control over SEO and indexing behavior.