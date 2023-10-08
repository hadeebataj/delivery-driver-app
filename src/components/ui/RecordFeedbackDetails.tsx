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
  TextField,
} from "@mui/material";
import { feedbackTypes } from "../../data/feedbackData";
import React, { useState } from "react";

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

const getStyles = (
  type: string,
  feedbackType: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      feedbackType.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

type RecordFeedbackDetailsProps = {
  isDelivered: boolean;
  selectedFeedbackTypes?:
    | never[]
    | (
        | { id: number; type: string; note: string }
        | { id: number; type: string; note?: undefined }
      )[]
    | undefined;
};

const RecordFeedbackDetails: React.FC<RecordFeedbackDetailsProps> = ({
  isDelivered,
  // selectedFeedbackTypes,
}) => {
  const [feedbackType, setFeedbackType] = useState<string[]>([]);
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

  // This field is required(*) when negative feedbackType is selected
  const displayTextBox = () => {
    return feedbackType.map((type) => (
      <TextField
        id="outlined-textarea"
        label={`Enter your feedback for ${type}`}
        placeholder={`Enter your feedback for ${type}`}
        maxRows={2}
        multiline
        sx={{
          display: "flex",
          flex: "column",
          margin: "8px 0px",
          minWidth: "100%",
        }}
      />
    ));
  };

  return (
    <Paper elevation={1} sx={{ m: "8px 0px", marginBottom: "80px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "12px" }}>
        <Typography variant="body2" color="black" align="left">
          Select your feedback types
        </Typography>
        <Typography variant="caption" color="black" align="left">
          (You can select multiple options)
        </Typography>
        <FormControl
          sx={{ m: "12px 0px", width: "100%" }}
          disabled={isDelivered}
        >
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
            disabled={isDelivered}
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
