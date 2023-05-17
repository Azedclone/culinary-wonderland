interface SliderButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export function SliderButton(props: SliderButtonProps) {
  const { direction, onClick } = props;

  return (
    <button className={`slider-btn btn-${direction}`} onClick={onClick}>
      {direction === "prev" ? "<" : ">"}
    </button>
  );
}
