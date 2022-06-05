import { styled } from "../stitches.config";

const BaseLogo = styled('h1', {
  fontFamily: '$brand',
  color: "$brand",
  fontSize: "80px",
  '@sm': {
    fontSize: "100px",
  },
  '@md': {
    fontSize: "150px",
  },
  '@lg': {
    fontSize: "150px",
  },
});

function Logo() {
  return (
    <BaseLogo>search</BaseLogo>
  );
}

export default Logo;
