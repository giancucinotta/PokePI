export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Username is required';
  } else if (!/([a-z])\w+/.test(input.name)) {
    errors.name = 'Username is invalid';
  }
  else if (!input.hp) {
    errors.hp = 'HP is required';
  } else if (!/^([1-9]|[1-9][0-9]|[1-2][0-5][0-5])$/.test(input.hp)) {
    errors.hp = 'HP is invalid';
  }
  else if (!input.attack) {
    errors.attack = 'Attack is required';
  } else if (!/^([5-9]|[1-9][0-9]|[1][0-8][0-9]|[1][9][0])$/.test(input.attack)) {
    errors.attack = 'Attack is invalid';
  }
  else if (!input.defense) {
    errors.defense = 'Defense is required';
  } else if (!/^([5-9]|[1-9][0-9]|[1-2][0-2][0-9]|[2][3][0])$/.test(input.defense)) {
    errors.defense = 'Defense is invalid';
  }
  else if (!input.speed) {
    errors.speed = 'Speed is required';
  } else if (!/^([5-9]|[1-9][0-9]|[1][0-1][0-6])$/.test(input.speed)) {
    errors.speed = 'Speed is invalid';
  }
  else if (!input.weight) {
    errors.weight = 'Weight is required';
  } else if (!/^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/.test(input.weight)) {
    errors.weight = 'Weight is invalid';
  }
  else if (!input.height) {
    errors.height = 'Height is required';
  } else if (!/^([1-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0][0])$/.test(input.height)) {
    errors.height = 'Height is invalid';
  }
  return errors;
};