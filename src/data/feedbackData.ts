export const feedbackTypes = [
  "Perfect Delivery", //positive feedback
  "On Time", //positive feedback
  "Kind Customer", //positive feedback
  "Aggressive Pets",
  "Traffic",
  "Accident",
  "No Parking",
  "Package Damaged",
  "Vehicle Breakdown",
  "Rain",
  "Unruly Customer",
  "Address Not Found",
  "Incorrect/Missing Delivery Instructions",
  "Customer Not Reachable",
];

export const feedbacks = [
  {
    isFeedbackPositive: false,
    feedbackDetails: {
      id: "FDBK0827",
      feedbackRating: 3,
      feedbackType: "No Parking",
      recordedOn: "3/10/2023",
      driverName: "Mike Ross",
      image: "",
      zipCode: "NW8 9AA",
      address: "123 Abbey Road, London, NW8 9AA",
      note: "Park vehicle in the Colindale tube station parking area and walk to the next street.",
    },
  },
  {
    isFeedbackPositive: true,
    feedbackDetails: {
      id: "FDBK1234",
      feedbackRating: 4,
      feedbackType: "Perfect Delivery",
      recordedOn: "3/15/2023",
      driverName: "Alice Smith",
      image: "",
      zipCode: "EC1A 1BB",
      address: "456 Elm Street, London, EC1A 1BB",
      note: "The delivery was on time and well-handled.",
    },
  },
  {
    isFeedbackPositive: false,
    feedbackDetails: {
      id: "FDBK5678",
      feedbackRating: 2,
      feedbackType: "Package Damaged",
      recordedOn: "3/16/2023",
      driverName: "John Doe",
      image: "",
      zipCode: "SE1 2TH",
      address: "789 Oak Avenue, London, SE1 2TH",
      note: "The package was damaged due to rain. Use plastic wrap in case of rain.",
    },
  },
  {
    isFeedbackPositive: false,
    feedbackDetails: {
      id: "FDBK3456",
      feedbackRating: 1,
      feedbackType: "Unruly Customer",
      recordedOn: "3/18/2023",
      driverName: "Michael Brown",
      image: "",
      zipCode: "E14 9HE",
      address: "222 Canary Wharf, London, E14 9HE",
      note: "Avoid interacting with the customer. Seems to be always drunk.",
    },
  },
  {
    isFeedbackPositive: true,
    feedbackDetails: {
      id: "FDBK7890",
      feedbackRating: 4,
      feedbackType: "On Time",
      recordedOn: "3/19/2023",
      driverName: "Sophia Davis",
      image: "",
      zipCode: "WC2N 5DU",
      address: "333 Trafalgar Square, London, WC2N 5DU",
      note: "The customer was very helpful and assisted with unloading.",
    },
  },
];
