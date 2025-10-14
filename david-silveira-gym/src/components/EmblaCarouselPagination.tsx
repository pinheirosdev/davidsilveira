import React, { useCallback, useEffect, useState } from 'react';
import type { UseEmblaCarouselType } from 'embla-carousel-react'; 
import '../styles/EmblaPagination.css'; 

type PropType = {
  emblaApi: UseEmblaCarouselType[1] | undefined;
};

const EmblaCarouselPagination: React.FC<PropType> = (props) => {
  const { emblaApi } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
          emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onInit = useCallback((api: UseEmblaCarouselType[1]) => {
    setScrollSnaps(api!.scrollSnapList()); 
  }, []);

  const onSelect = useCallback((api: UseEmblaCarouselType[1]) => {
    setSelectedIndex(api!.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onInit);
    };

  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla-dots">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={`embla-dot ${index === selectedIndex ? 'is-selected' : ''}`}
          onClick={() => scrollTo(index)}
          aria-label={`Ir para o slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default EmblaCarouselPagination;