export const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
export const textSizeClassesString = ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
export const textWeightClassesString = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9'];

export const stringNumber = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10';

export const commonArgText = {
  textSize: {
    control: {
      type: 'select',
    },
    description: 'Classes para el tamaño del texto',
    options: textSizeClassesString,
  },
  textWeight: {
    control: {
      type: 'select',
    },
    description: 'Classes para el peso del texto',
    options: textWeightClassesString,
  },
};

export const commonArgTypes = {
  backgroundColor: {
    control: {
      type: 'select',
    },
    description: 'dark, primary, danger, success, gray, neutral',
    options: ['dark', 'primary', 'danger', 'success', 'gray', 'neutral'],
  },
  margin: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  marginTop: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  marginLeft: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  marginRight: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  marginBottom: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  padding: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  paddingLeft: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  paddingTop: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  paddingRight: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  paddingBottom: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  border: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  borderBottom: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  borderTop: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  borderLeft: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
  borderRight: {
    control: {
      type: 'select',
    },
    description: stringNumber,
    options: numberArray,
  },
};
