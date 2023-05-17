"use client";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Chef, Place, Recipe } from "@/models";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import axios from "axios";
import "./body.css";
import { SliderButton } from "./SliderButton";

function Chefs() {
  const [chefs, setChefs] = useState<Chef[]>();

  useEffect(() => {
    axios
      .get("https://test.culinarywonderland.com/api/portal/public/chef/filter")
      .then((res) => setChefs(res.data.responseData));
  }, []);

  const settings = {
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
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
    <section id="chefs">
      {chefs && (
        <>
          <Slider {...settings} ref={slider}>
            {chefs.map((chef) => (
              <div key={chef.userId} className="chef-item">
                <Image
                  className="chef-avt rounded-full"
                  src={
                    chef.avatar?.cdnOrigin == null
                      ? "/images/Avatar.png"
                      : chef.avatar?.cdnOrigin!
                  }
                  alt="Avatar_Chef"
                  width={150}
                  height={75}
                ></Image>
                <p className="chef-name">{chef.displayName}</p>
              </div>
            ))}
          </Slider>
          {/* <button
            className="slider-btn btn-prev"
            onClick={() => slider?.current?.slickPrev()}
          >
            {"<"}
          </button>
          <button
            className="slider-btn btn-next"
            onClick={() => slider?.current?.slickNext()}
          >
            {">"}
          </button> */}
        </>
      )}
    </section>
  );
}

export function Body() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [places, setPlaces] = useState<Place[]>();
  const [insprieds, setInsprieds] = useState<any[]>();
  const [stories, setStories] = useState<any[]>();
  const [tips, setTips] = useState<any[]>();

  useEffect(() => {
    const params = {
      pageIndex: 0,
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/ACC_HOME_CORE_DIFFICULTY/fetch",
        params
      )
      .then((res) => setRecipes(res.data.responseData));
  }, []);

  useEffect(() => {
    const params = {
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/ACC_HOME_CORE_PLACE/fetch",
        params
      )
      .then((res) => setPlaces(res.data.responseData));
  }, []);

  useEffect(() => {
    const params = {
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/638d73ae9803217b8dfedd77/fetch",
        params
      )
      .then((res) => setInsprieds(res.data.responseData));
  }, []);

  useEffect(() => {
    const params = {
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/63d9e09a12176913e16b70f0/fetch",
        params
      )
      .then((res) => setStories(res.data.responseData));
  }, []);

  useEffect(() => {
    const params = {
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/ACC_HOME_CORE_VIDEO/fetch",
        params
      )
      .then((res) => setTips(res.data.responseData));
  }, []);

  return (
    <main>
      <Chefs />
      <Section
        id="recipes"
        title="Recipes you'll love"
        slideToShow={4}
        slides={recipes!}
        widthImage={700}
        heightImage={700}
      />
      <Section
        id="places"
        title="Great places to eat"
        slideToShow={4}
        slides={places!}
        widthImage={290}
        heightImage={180}
      />
      <Section
        id="inspireds"
        title="Be inspired"
        slideToShow={6}
        slides={insprieds!}
        widthImage={180}
        heightImage={180}
      />
      <Section
        id="stories"
        title="Latest stories from all chefs"
        slideToShow={4}
        slides={stories!}
        widthImage={290}
        heightImage={290}
      />
      <Section
        id="tips"
        title="Cooking tips from Chefs around the world"
        slideToShow={3}
        slides={tips!}
        widthImage={400}
        heightImage={255}
      />
    </main>
  );
}
