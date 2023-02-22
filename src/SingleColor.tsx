interface SingleColorProps {
  color: string;
}

function getContrastYIQ(hexcolor: string): string {
  let r: number = parseInt(hexcolor.slice(1, 3), 16);
  let g: number = parseInt(hexcolor.slice(3, 5), 16);
  let b: number = parseInt(hexcolor.slice(5, 7), 16);

  let yiq: number = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

const SingleColor = (props: SingleColorProps) => {
  return (
    <div className="bg-blue-500" style={{ backgroundColor: props.color }}>
      <h1 style={{ color: getContrastYIQ(props.color) }}>Hex: {props.color}</h1>
    </div>
  );
};

export default SingleColor;
