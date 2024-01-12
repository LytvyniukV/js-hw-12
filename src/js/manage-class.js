const addClass = (elem, className = 'hidden') => {
  elem.classList.add(className);
};

const removeClass = (elem, className = 'hidden') => {
  elem.classList.remove(className);
};

export { addClass, removeClass };
