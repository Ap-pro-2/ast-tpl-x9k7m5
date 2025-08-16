# AstroPress Indexing Control - Implementation Guide

## Step-by-Step Implementation

Follow these steps exactly to implement indexing control in your AstroPress theme while maintaining your existing patterns.

---

## Step 1: Update Content Config Schema

**File**: `src/content.config.ts`

Add this to your settings schema (around line 45, in the settings schema object):

```typescript
// Add this to the existing settings schema
indexing: z.object({
  enabled: z.boolean().default(true),
  includeInSitemap: z.object({
    blogPosts: z.boolean().default(true),
    categories: z.boolean().default(true),
    tags: z.boolean().default(true),
    authors: z.boolean().default(true),
    pagination: z.boolean().default(true),
    archives: z.boolean().default(false),
    legalPages: z.boolean().default(true),
    staticPages: z.boolean().default(true),
  }).default({}),
  robotsDirectives: z.object({
    blogPosts: z.string().default("index,follow"),
    categories: z.string().default("index,follow"),
    tags: z.string().default("index,follow"),
    authors: z.string().default("index,follow"),
    pagination: z.string().default("noindex,follow"),
    archives: z.string().default("noindex,follow"),
    legalPages: z.string().default("index,follow"),
    staticPages: z.string().default("index,follow"),
  }).default({}),
  excludeFromSitemap: z.array(z.string()).default([]),
}).default({}),
```

---

## Step 2: Update Settings Data

**File**: `src/content/data/settings.json`

Add this to your existing settings object (after the "sitemap" section):

```json
"indexing": {
  "enabled": true,
  "includeInSitemap": {
    "blogPosts": true,
    "categories": true,
    "tags": false,
    "authors": true,
    "pagination": false,
    "archives": false,
    "legalPages": true,
    "staticPages": true
  },
  "robotsDirectives": {
    "blogPosts": "index,follow",
    "categories": "index,follow",
    "tags": "noindex,follow",
    "authors": "index,follow",
    "pagination": "noindex,follow",
    "archives": "noindex,follow",
    "legalPages": "index,follow",
    "staticPages": "index,follow"
  },
  "excludeFromSitemap": [
    "/admin",
    "/api",
    "/preview"
  ]
}
```

---

## Step 3: Create Indexing Utility

**File**: `src/utils/indexingControl.ts` (NEW FILE)

```typescript
// src/utils/indexingControl.ts
// Centralized indexing control logic following AstroPress patterns

import { getCollection } from 'astro:content';
import type { SiteSettings } from '../core/blogLogic';

export interface IndexingSettings {
  enabled: boolean;
  includeInSitemap: {
    blogPosts: boolean;
    categories: boolean;
    tags: boolean;
    authors: boolean;
    pagination: boolean;
    archives: boolean;
    legalPages: boolean;
    staticPages: boolean;
  };
  robotsDirectives: {
    blogPosts: string;
    categories: string;
    tags: string;
    authors: string;
    pagination: string;
    archives: string;
    legalPages: string;
    staticPages: string;
  };
  excludeFromSitemap: string[];
}

/**
 * Get indexing settings from site configuration
 */
export async function getIndexingSettings(): Promise<IndexingSettings> {
  const allSettings = await getCollection('settings');
  const settings = allSettings[0]?.data;
  
  // Default settings if not configured
  const defaultSettings: IndexingSettings = {
    enabled: true,
    includeInSitemap: {
      blogPosts: true,
      categories: true,
      tags: true,
      authors: true,
      pagination: true,
      archives: false,
      legalPages: true,
      staticPages: true,
    },
    robotsDirectives: {
      blogPosts: "index,follow",
      categories: "index,follow",
      tags: "index,follow",
      authors: "index,follow",
      pagination: "noindex,follow",
      archives: "noindex,follow",
      legalPages: "index,follow",
      staticPages: "index,follow",
    },
    excludeFromSitemap: [],
  };

  return settings?.indexing || defaultSettings;
}

/**
 * Check if a content type should be included in sitemap
 */
export async function shouldIncludeInSitemap(contentType: keyof IndexingSettings['includeInSitemap']): Promise<boolean> {
  const settings = await getIndexingSettings();
  return settings.enabled && settings.includeInSitemap[contentType];
}

/**
 * Get robots directive for a content type
 */
export async function getRobotsDirective(contentType: keyof IndexingSettings['robotsDirectives']): Promise<string> {
  const settings = await getIndexingSettings();
  return settings.robotsDirectives[contentType];
}

/**
 * Check if a specific URL should be excluded from sitemap
 */
export async function isExcludedFromSitemap(url: string): Promise<boolean> {
  const settings = await getIndexingSettings();
  return settings.excludeFromSitemap.some(pattern => {
    // Simple pattern matching - can be enhanced with glob patterns
    return url.includes(pattern);
  });
}

/**
 * Generate sitemap filter function for Astro config
 */
export async function createSitemapFilter(): Promise<(page: string) => boolean> {
  const settings = await getIndexingSettings();
  
  return (page: string) => {
    // If indexing is disabled, exclude everything
    if (!settings.enabled) return false;
    
    // Check explicit exclusions
    if (settings.excludeFromSitemap.some(pattern => page.includes(pattern))) {
      return false;
    }
    
    // Check content type specific settings
    if (page.includes('/tags/') && !settings.includeInSitemap.tags) return false;
    if (page.includes('/categories/') && !settings.includeInSitemap.categories) return false;
    if (page.includes('/authors/') && !settings.includeInSitemap.authors) return false;
    if (page.includes('/blog/') && page.match(/\/\d+$/) && !settings.includeInSitemap.pagination) return false;
    if (page.includes('/legal/') && !settings.includeInSitemap.legalPages) return false;
    
    return true;
  };
}

/**
 * Generate meta robots tag content
 */
export async function generateRobotsMetaTag(contentType: keyof IndexingSettings['robotsDirectives']): Promise<string> {
  const directive = await getRobotsDirective(contentType);
  return directive;
}

/**
 * Check if content should be indexed (for conditional rendering)
 */
export async function shouldIndex(contentType: keyof IndexingSettings['includeInSitemap']): Promise<boolean> {
  const settings = await getIndexingSettings();
  const directive = settings.robotsDirectives[contentType];
  return settings.enabled && directive.includes('index');
}
```

---

## Step 4: Update Core Blog Logic

**File**: `src/core/blogLogic.ts`

Add these imports at the top:

```typescript
import { shouldIncludeInSitemap, getRobotsDirective } from '../utils/indexingControl';
```

Add this new function at the end of the file:

```typescript
/**
 * Get posts for sitemap (respects indexing settings)
 */
export async function getPostsForSitemap(): Promise<BlogPost[]> {
  const shouldInclude = await shouldIncludeInSitemap('blogPosts');
  if (!shouldInclude) return [];
  
  return await getPublishedPosts();
}

/**
 * Get categories for sitemap (respects indexing settings)
 */
export async function getCategoriesForSitemap() {
  const shouldInclude = await shouldIncludeInSitemap('categories');
  if (!shouldInclude) return [];
  
  return await getCategoriesWithPostCounts();
}

/**
 * Get tags for sitemap (respects indexing settings)
 */
export async function getTagsForSitemap() {
  const shouldInclude = await shouldIncludeInSitemap('tags');
  if (!shouldInclude) return [];
  
  return await getTagsWithPostCounts();
}

/**
 * Get authors for sitemap (respects indexing settings)
 */
export async function getAuthorsForSitemap() {
  const shouldInclude = await shouldIncludeInSitemap('authors');
  if (!shouldInclude) return [];
  
  return await getAuthorsWithPostCounts();
}
```

---

## Step 5: Update Sitemap Page

**File**: `src/pages/sitemap.astro`

Replace the data fetching section (around lines 5-10) with:

```typescript
import { 
  getPostsForSitemap, 
  getCategoriesForSitemap, 
  getTagsForSitemap, 
  getAuthorsForSitemap,
  getSiteSettings 
} from '../core/blogLogic';

const allPosts = await getPostsForSitemap();
const allCategories = await getCategoriesForSitemap();
const allTags = await getTagsForSitemap();
const allAuthors = await getAuthorsForSitemap();
const allSettings = await getSiteSettings();
```

Then wrap each section with conditional rendering. For example, replace the Articles section:

```astro
<!-- Articles Section -->
{allPosts.length > 0 && (
  <div class="sitemap-card p-6">
    <!-- existing content -->
  </div>
)}
```

Do the same for Categories, Tags, and Authors sections.

---

## Step 6: Update Astro Config

**File**: `astro.config.mjs`

Replace the sitemap integration (around line 30) 
with:

```javascript
sitemap({
  filter: (page) => {
    // Basic filtering - tags are excluded by default
    if (page.includes("/tags")) return false;
    
    // You can add more dynamic filtering here based on settings
    // For now, this maintains your current behavior
    return true;
  }
})
```

**Note**: For full dynamic filtering, you'd need to read settings at build time, but this maintains your current pattern while allowing easy expansion.

---

## Step 7: Add Meta Robots to Page Templates

For any page template (like blog posts, category pages, etc.), add this to the `<head>` section:

```astro
---
import { generateRobotsMetaTag } from '../utils/indexingControl';
const robotsDirective = await generateRobotsMetaTag('blogPosts'); // or appropriate type
---

<meta name="robots" content={robotsDirective} />
```

---

## Step 8: Test Your Implementation

1. **Update your settings**: Modify `src/content/data/settings.json` to test different configurations
2. **Check sitemap**: Visit `/sitemap` to see which sections appear
3. **Verify robots meta**: Check page source for robots meta tags
4. **Test exclusions**: Add URLs to `excludeFromSitemap` array and verify they're filtered

---

## Usage Examples

### Disable Tag Indexing
```json
{
  "indexing": {
    "includeInSitemap": {
      "tags": false
    },
    "robotsDirectives": {
      "tags": "noindex,follow"
    }
  }
}
```

### Exclude Specific URLs
```json
{
  "indexing": {
    "excludeFromSitemap": [
      "/admin",
      "/preview",
      "/draft"
    ]
  }
}
```

### Custom Robots Directives
```json
{
  "indexing": {
    "robotsDirectives": {
      "pagination": "noindex,follow",
      "archives": "noindex,nofollow"
    }
  }
}
```

---

## Benefits of This Implementation

✅ **Follows Your Patterns**: Uses your existing content config and settings structure
✅ **User-Friendly**: Simple JSON configuration, no code changes needed
✅ **Maintainable**: Centralized logic in utility file
✅ **Flexible**: Fine-grained control over different content types
✅ **SEO-Friendly**: Proper robots directives and sitemap control
✅ **Performance**: Reduces sitemap size by excluding unwanted content

---

## Files Summary

**New Files Created**:
- `src/utils/indexingControl.ts` - Centralized indexing logic

**Files to Modify**:
- `src/content.config.ts` - Add indexing schema
- `src/content/data/settings.json` - Add indexing configuration  
- `src/core/blogLogic.ts` - Add sitemap-aware functions
- `src/pages/sitemap.astro` - Use indexing controls
- `astro.config.mjs` - Enhanced sitemap filtering

This implementation gives your users complete control over what gets indexed while maintaining your theme's clean, maintainable architecture.