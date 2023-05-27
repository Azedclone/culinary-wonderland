import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderButton } from "../SliderButton";
import Image from "next/image";
import { useRef } from "react";

interface SectionProps {
  id: string;
  title: string;
  slideToShow: number;
  slides: any[];
  widthImage: number;
  heightImage: number;
}

export function Section(props: SectionProps) {
  const settings = {
    slidesToShow: props.slideToShow,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    nextArrow: (
      <SliderButton
        direction="next"
        onClick={() => slider?.current?.slickNext()}
      />
    ),
    prevArrow: (
      <SliderButton
        direction="prev"
        onClick={() => slider?.current?.slickPrev()}
      />
    ),
  };
  const slider = useRef<Slider>(null);

  return (
    <section id={props.id}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <span className="font-light text-sm">See all</span>
      </div>
      <Slider {...settings} ref={slider}>
        {props.slides?.map((slide) => (
          <div key={slide} className="slide-item">
            <Image
              src={
                slide.thumbnail?.cdnOrigin == null
                  ? "/images/Thumbnail.png"
                  : slide.thumbnail?.cdnOrigin!
              }
              alt="thumbnail"
              width={props.widthImage}
              height={props.heightImage}
              className="slide-item-img"
            ></Image>
            <p className="slide-item-title text-sm font-semibold">
              {slide?.title}
            </p>
            <p className="text-sm font-light">{slide?.chef?.displayName}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
