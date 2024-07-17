import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface SlideProps {
  name: string;
  price: string;
  alt: string;
  image: string;
}
interface CarouselProps {
  slides: SlideProps[];
  //   options?: EmblaOptionsType;
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto", axis: "y" });

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);

  //   const {
  //     prevBtnDisabled,
  //     nextBtnDisabled,
  //     onPrevButtonClick,
  //     onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    if (emblaApi) {
      console.log(slides); // Access API
    }
  }, []);
  return (
    <div className="w-full relative">
      <section className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className=" embla__container">
            {slides.map((slide: SlideProps) => (
              <div className="embla__slide" key={slide.image}>
                {/* <div className="embla__slide__number">{index + 1}</div> */}
                <div className="flex flex-col  justify-center items-center">
                  <img
                    className="rounded-full w-72"
                    src={slide.image}
                    alt={slide.alt}
                  />
                  <p className="mt-4 text-xl font-medium">{slide.name}</p>
                  <p className="text-lg">{slide.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute right-3 top-1/3 flex items-center justify-center w-12 h-12 rounded-full bg-white"
          onClick={scrollNext}
        >
          <img
            src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a4078144fa8e6292_right%20arrow.svg"
            alt="next"
          />
        </div>
        <div
          className="absolute left-3 top-1/3 flex items-center justify-center w-12 h-12 rounded-full bg-white"
          onClick={scrollPrev}
        >
          <img
            src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407815a038e6291_left%20arrow.svg"
            alt="next"
          />
        </div>
        {/* <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div> */}
      </section>
    </div>
  );
};
