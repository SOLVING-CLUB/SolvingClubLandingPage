import { cn } from '@/app/components/ui/utils';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProjectAssetProps {
  imageUrl?: string;
  title: string;
  category: string;
  className?: string;
}

/**
 * ProjectAsset Component
 * 
 * Displays full project showcase images with backgrounds for the left side of project cards.
 * 
 * RECOMMENDED IMAGE DIMENSIONS FOR PROJECT CARDS:
 * ==============================================
 * 
 * Standard Showcase Image (For Left Side of Cards):
 * - Dimension: 1200 x 900 pixels (4:3 aspect ratio)
 * - Format: PNG (recommended) or JPEG
 * - File size: < 800KB (optimized)
 * - Notes: Full scene with mockup + styled background
 * 
 * What to include in the image:
 * - Device mockup (phone/laptop) with your project screenshot
 * - Professional background (gradient, patterns, or solid color)
 * - Optional: shadows, lighting effects, decorative elements
 * - Ensure good contrast and visual hierarchy
 * - Center the mockup in the image
 * 
 * Alternative Dimensions (also supported):
 * - 1600 x 1200 pixels (4:3) - Higher quality
 * - 1920 x 1440 pixels (4:3) - Maximum quality
 * - 800 x 600 pixels (4:3) - Minimum for web
 * 
 * CONTAINER DIMENSIONS (in viewport):
 * ==================================
 * - Card image area: ~500px wide on desktop
 * - Maintains 4:3 aspect ratio automatically
 * - Responsive on mobile (full width)
 * 
 * STYLING:
 * - Rounded corners
 * - Border with subtle color
 * - Shadow for depth
 * - Overflow hidden for clean edges
 */

export function ProjectAsset({
  imageUrl,
  title,
  category,
  className,
}: ProjectAssetProps) {
  const isWeb =
    category === 'Web App' ||
    category === 'Website' ||
    category === 'Multi Platform';

  return (
    <div
      className={cn(
        'relative w-full rounded-xl overflow-hidden',
        'border border-border shadow-lg',
        'bg-gradient-to-br from-slate-900 via-slate-950 to-black',
        className
      )}
    >
      {/* 4:3 Aspect Ratio Container (1200x900) */}
      <div className="w-full aspect-[4/3] relative">
        {imageUrl ? (
          <ImageWithFallback
            src={imageUrl}
            alt={`${title} showcase`}
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          // Fallback placeholder
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-black/50">
            <div className="text-center px-6">
              <div className="w-16 h-16 mx-auto mb-4 opacity-50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted-foreground"
                >
                  {isWeb ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  )}
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                {title}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Project Showcase
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
