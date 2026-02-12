# Project Assets Guide

This document outlines the recommended dimensions and specifications for project showcase images used in the SolvingClub Landing Page.

## 🎨 Project Showcase Image (For Card Left Side)

### **Primary Recommendation: 1200 x 900 pixels (4:3 Aspect Ratio)**

This is the MAIN image you need for each project. It displays on the left side of project cards.

**Specifications:**
- **Dimensions:** `1200 x 900 pixels` (4:3 aspect ratio)
- **Format:** PNG (recommended) or JPEG
- **File Size:** < 800KB (optimized for web)
- **DPI:** 72 (screen resolution)
- **Color Space:** sRGB

**What to Include in This Image:**

✅ **Full Scene Composition:**
- Device mockup (phone/laptop/browser) with your project screenshot inside
- Professional styled background (gradient, patterns, solid colors, or abstract designs)
- The device mockup should be centered or positioned aesthetically
- Add shadows, lighting effects, or decorative elements for depth
- Ensure good contrast between mockup and background

✅ **Design Guidelines:**
- Keep the composition balanced and professional
- Use your brand colors in the background if applicable
- Make sure the project interface is clearly visible in the mockup
- Add depth with shadows and highlights
- Consider adding subtle geometric shapes or patterns

✅ **Examples of Good Compositions:**
- Phone mockup on dark gradient background with glow effects
- Laptop mockup with website on gradient with floating elements
- Multiple device mockups arranged in perspective
- Device mockup with branded background and shadows

**Alternative Dimensions (Also Supported):**
- **High Quality:** `1600 x 1200 pixels` (4:3)
- **Maximum Quality:** `1920 x 1440 pixels` (4:3)
- **Minimum for Web:** `800 x 600 pixels` (4:3)

> **Important:** Always maintain the 4:3 aspect ratio for consistency across all project cards.

---

## 🖼️ Creating Your Showcase Image

### Option 1: Using Design Tools

**Figma / Adobe XD / Sketch:**
1. Create a 1200 x 900px artboard
2. Add your background (gradient, pattern, or solid color)
3. Import device mockup (phone/laptop frame)
4. Place your project screenshot inside the mockup
5. Add shadows, effects, and decorative elements
6. Export as PNG with optimization

**Recommended Resources:**
- **Mockup Generators:**
  - Figma Community - Device mockups
  - Mockuper.net
  - Smartmockups.com
  - Mockup World
  
- **Background Resources:**
  - Mesh Gradients (meshgradient.com)
  - CSS Gradient (cssgradient.io)
  - Geometric patterns
  - Abstract shapes

### Option 2: Using Online Tools

**Quick Mockup Creation:**
1. **Canva** - Create 1200x900px design
2. **Photopea** - Free Photoshop alternative
3. **Remove.bg** - Remove backgrounds if needed
4. **TinyPNG** - Optimize final image

---

## 📐 Display Dimensions (In Website)

**On Desktop:**
- Card left side: ~500px wide
- Maintains 4:3 aspect ratio (500px x 375px)
- Rounded corners with border
- Professional shadow

**On Mobile:**
- Full width of card
- Maintains 4:3 aspect ratio
- Responsive scaling

---

## 💻 Component Usage

### Using ProjectAsset Component

```tsx
import { ProjectAsset } from '@/app/components/ProjectAsset';

<ProjectAsset
  imageUrl="/project-showcase-image.png"
  title="Project Name"
  category="Mobile App" // or "Web App" or "Website"
/>
```

The component automatically:
- Maintains 4:3 aspect ratio
- Shows fallback UI if image is missing
- Applies rounded corners and shadows
- Handles responsive sizing

---

## 🎯 Example Image Composition

```
┌─────────────────────────────────────┐
│  1200px x 900px (4:3 ratio)        │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │   Background Layer          │   │
│  │   (Gradient/Pattern)        │   │
│  │                             │   │
│  │     ┌─────────────┐         │   │
│  │     │   Device    │         │   │
│  │     │   Mockup    │         │   │
│  │     │   with      │         │   │
│  │     │   Project   │         │   │
│  │     │   Screen    │         │   │
│  │     └─────────────┘         │   │
│  │                             │   │
│  │   Shadows & Effects         │   │
│  │                             │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## 🎨 Background Styling Tips

**Recommended Background Styles:**
1. **Gradient Backgrounds:**
   - Dark to darker gradients (professional look)
   - Brand color gradients
   - Radial or linear gradients

2. **Pattern Backgrounds:**
   - Subtle geometric patterns
   - Dot grids
   - Abstract shapes

3. **Solid Colors:**
   - Dark navy (#0F172A)
   - Deep slate (#1E293B)
   - Pure black with subtle overlay

4. **Effects to Add:**
   - Drop shadows on mockup
   - Glow effects
   - Blur elements
   - Depth with layering

---

## 📁 File Organization

Store project showcase images in the `public` folder:

```
public/
├── saral-events-user-app-showcase.png       (1200 x 900)
├── saral-events-vendor-app-showcase.png     (1200 x 900)
├── saral-events-landing-showcase.png        (1200 x 900)
├── saral-events-admin-showcase.png          (1200 x 900)
├── tuvo-showcase.png                        (1200 x 900)
├── plattr-showcase.png                      (1200 x 900)
├── jobsnext-showcase.png                    (1200 x 900)
├── pranaras-academy-showcase.png            (1200 x 900)
├── relai-world-showcase.png                 (1200 x 900)
└── travel-together-showcase.png             (1200 x 900)
```

**Naming Convention:**
- Use lowercase with hyphens
- Include "showcase" in filename
- Use descriptive project name
- Preferred format: PNG for transparency support

---

## Image Optimization

### Tools for Optimization:
1. **TinyPNG** - https://tinypng.com/
2. **ImageOptim** - https://imageoptim.com/
3. **Squoosh** - https://squoosh.app/

### Optimization Checklist:
- ✅ Compress images without losing visible quality
- ✅ Use JPEG for photos/screenshots with many colors
- ✅ Use PNG for images with transparency or sharp text
- ✅ Ensure file size is under recommended limit
- ✅ Test images on both light and dark backgrounds

---

## 📊 Quick Reference

### Main Showcase Image (Required for All Projects)

| Specification | Value |
|--------------|-------|
| **Dimensions** | 1200 x 900 pixels |
| **Aspect Ratio** | 4:3 |
| **Max File Size** | 800KB |
| **Format** | PNG (recommended) or JPEG |
| **Content** | Device mockup + styled background |
| **Location** | `public/` folder |

### Image Checklist

Before uploading, ensure your showcase image has:

- ✅ Correct dimensions (1200x900px)
- ✅ 4:3 aspect ratio maintained
- ✅ Device mockup clearly visible
- ✅ Professional background styling
- ✅ Good contrast and visibility
- ✅ Optimized file size (< 800KB)
- ✅ Proper filename (project-name-showcase.png)
- ✅ Project screenshot inside mockup is clear

---

## 💡 Design Tips & Best Practices

### Visual Consistency
1. **Background Theme:** Keep similar background styles across all projects for brand consistency
2. **Mockup Position:** Center or slightly offset your mockups consistently
3. **Color Palette:** Use consistent colors that match your brand
4. **Effects:** Apply similar shadow and lighting effects across all images

### Quality Standards
1. **Resolution:** Always work with high-resolution source images
2. **Clarity:** Ensure text in mockups is readable
3. **Export:** Use PNG for best quality, JPEG if file size is a concern
4. **Optimization:** Compress images without losing visible quality

### Content Guidelines
1. **Real Content:** Show actual project interface with realistic data
2. **Privacy:** Remove any sensitive or personal information
3. **Updated:** Keep screenshots current with latest design
4. **Professional:** Use production-ready content, not lorem ipsum

### Technical Optimization
1. **File Size:** Keep under 800KB for fast loading
2. **Format:** PNG for transparency, JPEG for photos
3. **Compression:** Use TinyPNG, ImageOptim, or Squoosh
4. **Testing:** Test images on both light and dark backgrounds

---

## 🔧 Technical Notes

- The `ProjectAsset` component automatically maintains 4:3 aspect ratio
- Images are lazy-loaded using `ImageWithFallback` for performance
- Fallback UI displays if image fails to load or is not provided
- Responsive design adapts to all screen sizes
- Border, shadow, and styling applied automatically
- No additional mockup frames needed (include in your image)

---

## 📝 Summary

**Key Takeaway:** Create ONE showcase image per project at **1200 x 900 pixels (4:3 ratio)** that includes:
1. Your device mockup (phone/laptop/browser)
2. Your project screenshot inside the mockup
3. A professional styled background
4. Shadows, effects, and visual polish

This single image will display beautifully on the left side of project cards throughout your portfolio!
