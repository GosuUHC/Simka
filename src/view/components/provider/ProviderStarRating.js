import { Box, Rating } from "@mui/material";

const ProviderStarRating = ({
  value,
  precision,
  valuePositionOnLeft = true,
  readOnly = true,
}) => {
  return (
    <Box display="flex" alignItems="center" lineHeight={0.7}>
      {valuePositionOnLeft && <Box mr={0.5}>{value}</Box>}
      <Rating
        name="half-rating"
        value={value}
        precision={precision}
        readOnly={readOnly}
        color="secondary"
      ></Rating>
      {!valuePositionOnLeft && <Box ml={0.5}>{value}</Box>}
    </Box>
  );
};

export default ProviderStarRating;
