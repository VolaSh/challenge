function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  let randomPasswordData = {
    name: getRandomInt(1000),
    password: getRandomInt(1000)
  };

export default randomPasswordData;