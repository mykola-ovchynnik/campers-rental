const mainAttributes = [
  'adults',
  'transmission',
  'engine',
  'kitchen',
  'beds',
  'airConditioner',
];

const extraAttributes = [
  'airConditioner',
  'cd',
  'radio',
  'hob',
  'gas',
  'tv',
  'water',
  'microvave',
  'freezer',
  'shower',
  'toilet',
];

const displayFunctions = {
  adults: value => `${value} adults`,
  transmission: value => value,
  engine: value => value,
  kitchen: value => (value >= 1 ? 'Kitchen' : ''),
  beds: value => `${value} beds`,
  airConditioner: value => (value >= 1 ? 'AC' : ''),
};

const displayExtraFunctions = {
  airConditioner: value => (value >= 1 ? 'Air conditioner' : ''),
  cd: value => (value >= 1 ? 'CD' : ''),
  radio: value => (value >= 1 ? 'Radio' : ''),
  hob: value => (value >= 1 ? `${value} Hob` : ''),
  gas: value => (value ? 'Gas' : ''),
  tv: value => (value >= 1 ? 'TV' : ''),
  water: value => (value ? `Water` : ''),
  microwave: value => (value >= 1 ? 'Microwave' : ''),
  freezer: value => (value >= 1 ? 'Freezer' : ''),
  shower: value => (value >= 1 ? 'Shower' : ''),
  toilet: value => (value >= 1 ? 'Toilet' : ''),
};

const addMainAttributes = (camper, attributes) => {
  mainAttributes.forEach(attribute => {
    if (camper[attribute]) {
      attributes.push({
        svg: attribute,
        info: displayFunctions[attribute](camper[attribute]),
        condition: camper[attribute] !== false,
      });
    }
  });
};

const addMainDetailsAttributes = (camper, attributes) => {
  mainAttributes.forEach(attribute => {
    if (camper.details && camper.details[attribute]) {
      attributes.push({
        svg: attribute,
        info: displayFunctions[attribute](camper.details[attribute]),
        condition: camper.details[attribute] !== false,
      });
    }
  });
};

const addDetailsAttributes = (camper, attributes) => {
  extraAttributes.forEach(attribute => {
    if (camper.details && camper.details[attribute]) {
      attributes.push({
        svg: attribute,
        info: displayExtraFunctions[attribute](camper.details[attribute]),
        condition: camper.details[attribute] <= 0 ? false : true,
      });
    }
  });
};

export const getAttributes = (camper, includeDetails = false) => {
  const attributes = [];

  addMainAttributes(camper, attributes);
  addMainDetailsAttributes(camper, attributes);

  if (includeDetails && camper.details) {
    addDetailsAttributes(camper, attributes);
  }

  return attributes;
};
