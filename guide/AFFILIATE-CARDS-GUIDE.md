# Affiliate Product Cards Guide

## Quick Start

You can now easily add affiliate product cards to any blog post! Here's how:

### 1. Convert your post to `.mdx`
Change your file extension from `.md` to `.mdx` (e.g., `my-post.md` → `my-post.mdx`)

### 2. Import the Product component
Add this line at the top of your post content (after the frontmatter):

```mdx
import Product from '../../components/Product.astro';
```

### 3. Add product cards anywhere in your content

```mdx
<Product
  title="Amazing Coffee Grinder"
  description="This grinder makes perfect coffee every time with consistent results."
  price="$89.99"
  originalPrice="$129.99"
  image="https://example.com/image.jpg"
  url="https://your-affiliate-link.com"
  rating={4.5}
  reviews={1234}
  brand="CoffeeBrand"
  badge="Best Pick"
  features="Feature 1, Feature 2, Feature 3"
  pros="Pro 1, Pro 2, Pro 3"
  cons="Con 1, Con 2"
/>
```

## Product Component Properties

### Required Properties
- `title` - Product name
- `description` - Brief product description
- `price` - Current price (e.g., "$89.99")
- `image` - Product image URL
- `url` - Your affiliate link

### Optional Properties
- `originalPrice` - Original price for showing discounts
- `rating` - Star rating (1-5)
- `reviews` - Number of reviews
- `brand` - Product brand name
- `badge` - Special badge like "Best Pick", "Budget Choice"
- `features` - Comma-separated list of key features
- `pros` - Comma-separated list of pros
- `cons` - Comma-separated list of cons

## Examples

### Simple Product Card
```mdx
<Product
  title="Basic Coffee Mug"
  description="Simple ceramic mug for your daily coffee."
  price="$12.99"
  image="https://example.com/mug.jpg"
  url="https://affiliate-link.com"
/>
```

### Full-Featured Product Card
```mdx
<Product
  title="Premium Espresso Machine"
  description="Professional-grade espresso machine with built-in grinder and milk frother."
  price="$599.99"
  originalPrice="$799.99"
  image="https://example.com/espresso.jpg"
  url="https://affiliate-link.com"
  rating={4.8}
  reviews={2341}
  brand="EspressoPro"
  badge="Editor's Choice"
  features="Built-in grinder, Milk frother, Programmable settings, Stainless steel"
  pros="Excellent build quality, Great espresso, Easy to use, Good value"
  cons="Large footprint, Noisy grinder, Learning curve"
/>
```

## Content Styling Features

Your MDX files now have beautiful, theme-aware styling for all content elements:

### Headings
```mdx
# H1 - Main Title (large, bold)
## H2 - Section Headers (with underline)
### H3 - Subsections (with accent bar)
#### H4 - Sub-subsections
##### H5 - Minor headings
###### H6 - Small caps headings
```

### Lists
```mdx
- Bullet points with custom styled bullets
- Each item gets a themed dot
- Proper spacing and typography

1. Numbered lists with styled numbers
2. Each number gets a themed circle
3. Perfect for step-by-step guides
```

### Special Content Blocks
```mdx
import Callout from '../../components/Callout.astro';

<Callout type="info" title="Pro Tip">
This is an info callout with custom styling
</Callout>

<Callout type="warning" title="Important">
Warning callout for important notes
</Callout>

<Callout type="success" title="Great!">
Success callout for positive messages
</Callout>

<Callout type="error" title="Watch Out">
Error callout for things to avoid
</Callout>
```

### Text Formatting
- **Bold text** is properly themed
- *Italic text* uses accent colors
- `Inline code` has custom styling
- Links are beautifully styled with hover effects

### Blockquotes
```mdx
> This is a beautiful blockquote with custom styling
> It has a left border and special background
```

### Tables
Tables automatically get beautiful styling with proper borders, spacing, and hover effects.

## Tips for Great Product Cards

1. **Use high-quality images** - Product photos should be clear and appealing
2. **Write compelling descriptions** - Focus on benefits, not just features
3. **Be honest with pros/cons** - Builds trust with your audience
4. **Use appropriate badges** - "Best Overall", "Budget Pick", "Premium Choice"
5. **Include ratings when available** - Social proof increases conversions
6. **Keep features concise** - 3-4 key features work best

## Styling Notes

- Cards automatically show "Sponsored" label for transparency
- Responsive design works on all devices
- Pros/cons section is collapsible to save space
- Discount percentages are calculated automatically
- Affiliate links include proper `rel="sponsored"` attributes

## Content Strategy

### For Roundup Posts
- Use badges to differentiate products ("Best Overall", "Best Budget", "Most Stylish")
- Include 3-5 products maximum per post
- Mix price points to serve different audiences

### For Tutorial Posts
- Add relevant product recommendations throughout
- Focus on tools/equipment mentioned in the tutorial
- Keep it natural - don't force product placements

### For Review Posts
- Use the full feature set (pros, cons, rating)
- Include multiple product images if possible
- Be thorough with the description

## Legal Compliance

The component automatically:
- Adds "Sponsored" labels to all cards
- Includes proper `rel="sponsored"` attributes on links
- Opens affiliate links in new tabs

Remember to:
- Add affiliate disclosure to your posts
- Follow FTC guidelines for affiliate marketing
- Be transparent about your relationships with brands

## New Affiliate Blocks Available! 🎉

### **1. Comparison Table Block**
Perfect for comparing 2-3 products side by side:

```mdx
import Comparison from '../../components/Comparison.astro';

<Comparison
  title="Coffee Grinder Comparison"
  products={JSON.stringify([
    {
      title: "Baratza Encore",
      price: "$169.00",
      originalPrice: "$199.00",
      image: "https://example.com/baratza.jpg",
      imageAlt: "Baratza Encore Grinder",
      affiliateUrl: "https://affiliate-link.com",
      rating: 4.5,
      reviewCount: 1234,
      badge: "Best Overall",
      features: ["40 grind settings", "Conical burrs", "Easy to clean"],
      pros: ["Consistent grind", "Durable", "Great support"],
      cons: ["Can be noisy", "Takes counter space"]
    },
    {
      title: "Hario Mini Mill",
      price: "$35.00",
      image: "https://example.com/hario.jpg",
      imageAlt: "Hario Mini Mill",
      affiliateUrl: "https://affiliate-link.com",
      rating: 4.0,
      reviewCount: 892,
      badge: "Best Budget",
      features: ["Manual grinding", "Portable", "Ceramic burrs"],
      pros: ["Very affordable", "Portable", "Good for travel"],
      cons: ["Manual effort", "Small capacity", "Inconsistent"]
    }
  ])}
/>
```

### **2. Banner/CTA Block**
Eye-catching promotional banners:

```mdx
import Banner from '../../components/Banner.astro';

<!-- Default Banner -->
<Banner
  title="Limited Time Coffee Deal!"
  description="Get 25% off premium coffee beans this week only"
  ctaText="Shop Now"
  url="https://affiliate-link.com"
  discount="25% OFF"
  urgency="Ends in 3 days!"
/>

<!-- Gradient Style -->
<Banner
  title="🔥 Hot Deal Alert!"
  description="Premium espresso machine at lowest price ever"
  ctaText="Grab Deal"
  url="https://affiliate-link.com"
  style="gradient"
  size="large"
  discount="Save $200"
/>

<!-- Minimal Style -->
<Banner
  title="Recommended by Coffee Experts"
  ctaText="Learn More"
  url="https://affiliate-link.com"
  style="minimal"
  size="small"
/>
```

### **Banner Styles Available:**
- `default` - Clean theme-based design
- `gradient` - Eye-catching gradient background
- `minimal` - Subtle dashed border
- `bold` - Solid primary color background

### **Banner Sizes:**
- `small` - Compact banner
- `medium` - Standard size (default)
- `large` - Big, attention-grabbing

## Examples in Action

Check out these example posts:
- `best-dinnerware-sets-2024.mdx` - Full roundup with multiple products
- `french-press-brewing-mastery-enhanced.mdx` - Tutorial with relevant product recommendations

## All Available Affiliate Blocks:

1. **Product Cards** - Individual product recommendations
2. **Comparison Tables** - Side-by-side product comparisons
3. **Banners/CTAs** - Promotional banners and call-to-actions

Happy affiliate marketing! 🚀