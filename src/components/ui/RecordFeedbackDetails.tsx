import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Box,
  Typography,
  Paper,
  useTheme,
  Theme,
  Chip,
} from "@mui/material";
import { feedbackTypes } from "../../data/feedbackData";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  type: string,
  feedbackType: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      feedbackType.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RecordFeedbackDetails: React.FC = () => {
  const [feedbackType, setFeedbackType] = React.useState<string[]>([]);
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof feedbackType>) => {
    const {
      target: { value },
    } = event;
    setFeedbackType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Will be displayed when negative feedbackType is selected
  const displayTextBox = () => {
    return <></>;
  };

  return (
    <Paper elevation={1} sx={{ m: "8px 0px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "12px" }}>
        <Typography variant="body2" color="black" align="left">
          Select your feedback type
        </Typography>
        <FormControl sx={{ m: "12px 0px", width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">Select</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={feedbackType}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Select" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {feedbackTypes.map((type) => (
              <MenuItem
                key={type}
                value={type}
                style={getStyles(type, feedbackType, theme)}
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "12px" }}>
        {displayTextBox()}
      </Box>
    </Paper>
  );
};

export default RecordFeedbackDetails;
