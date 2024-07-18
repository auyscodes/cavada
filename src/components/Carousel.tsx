import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { Up } from "../icons/Up";
import { Down } from "../icons/Down";
interface SlideProps {
  name: string;
  price: string;
  alt: string;
  image: string;
}
interface CarouselProps {
  slides: SlideProps[];
  options?: EmblaOptionsType;
}

export const Carousel = ({ slides, options }: CarouselProps) => {
  const [axis, setAxis] = useState<string>("x");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setAxis("y");
    } else {
      setAxis("x");
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAxis("y");
      } else {
        setAxis("x");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    /* @ts-expect-error: Ignoring this type error */
    axis: axis,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full relative p-20">
      <section className={axis == "y" ? " embla_v" : " embla_h"}>
        <div
          className={axis == "y" ? " embla__viewport_v" : " embla__viewport_h"}
          ref={emblaRef}
        >
          <div
            className={
              axis == "y" ? " embla__container_v" : " embla__container_h"
            }
          >
            {slides.map((slide: SlideProps) => (
              <div
                className={axis == "y" ? " embla__slide_v" : " embla__slide_h"}
                key={slide.image}
              >
                <div className="flex flex-col  justify-center items-center">
                  <img
                    className="rounded-full w-72 "
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
        {axis == "x" ? (
          <div className="flex flex-row gap-8 items-center justify-center mt-10">
            <div
              className="lg:absolute lg:left-3 lg:top-1/3 flex items-center justify-center w-12 h-12 rounded-full bg-white"
              onClick={scrollPrev}
            >
              <img
                src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407815a038e6291_left%20arrow.svg"
                alt="next"
              />
            </div>
            <div
              className="lg:absolute lg:right-3 lg:top-1/3 flex items-center justify-center w-12 h-12 rounded-full bg-white"
              onClick={scrollNext}
            >
              <img
                src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a4078144fa8e6292_right%20arrow.svg"
                alt="next"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-4 items-center justify-center mt-20">
            <div
              className=" flex items-center justify-center w-12 h-12 rounded-full bg-white"
              onClick={scrollPrev}
            >
              <Up className="w-6 h-6 text-gray-800 " />
            </div>
            <div
              className=" flex items-center justify-center w-12 h-12 rounded-full bg-white"
              onClick={scrollNext}
            >
              <Down className="w-6 h-6 text-gray-800 " />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
