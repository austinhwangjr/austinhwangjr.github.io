"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/data/projects";

export default function ImageCarousel({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // If no images, have a placeholder
  if (count === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-muted text-sm text-muted-foreground">
        Screenshot coming soon
      </div>
    );
  }

  const arrowClass = "left-auto size-8 border bg-background/80 backdrop-blur transition-opacity md:opacity-0 md:group-hover/carousel:opacity-100 focus-visible:opacity-100";

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="group/carousel relative"
      aria-label={`${title} screenshots`}
    >
      {/* Image(s) */}
      <CarouselContent className="ml-0">
        {images.map((img) => (
          <CarouselItem key={img.src} className="pl-0">
            <div className="relative aspect-video w-full bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                draggable={false}
                className={cn("select-none object-cover object-center")}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Next/Previous Arrows, Image Counter, and Dots */}
      {count > 1 && (
        <>
          <CarouselPrevious className={cn(arrowClass, "left-2")} />
          <CarouselNext className={cn(arrowClass, "right-2")} />

          <span className="absolute right-2 top-2 rounded-full border bg-background/80 px-2 py-0.5 text-xs backdrop-blur">
            {index + 1} / {count}
          </span>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-background/70 px-2 py-1.5 backdrop-blur">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "size-1.5 rounded-full transition-colors",
                  i === index ? "bg-foreground" : "bg-foreground/30"
                )}
              />
            ))}
          </div>
        </>
      )}
    </Carousel>
  );
}