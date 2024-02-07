import { Box, Rating } from "@mui/material";

const ProviderStarRating = ({
  defaultValue,
  precision,
  valuePositionOnLeft = true,
  readOnly = true,
}) => {
  return (
    <Box display="flex" alignItems="center" lineHeight={0.7}>
      {valuePositionOnLeft && <Box mr={0.5}>{defaultValue}</Box>}
      <Rating
        name="half-rating"
        defaultValue={defaultValue}
        precision={precision}
        readOnly={readOnly}
        color="secondary"
      ></Rating>
      {!valuePositionOnLeft && <Box ml={0.5}>{defaultValue}</Box>}
    </Box>
  );
};

export default ProviderStarRating;
