import mock from "../utils/axios-mock";

mock.onPost("/api/messages/dashboard").reply((config) => {
  console.log(config)
  // All messages Data
  const messagesData = () => {
    let data = [];
    for (let i = 0; i < 9; i++) {
      let item = {
        id: i + 1,
        name: "Brooklyn Simmons",
        time: "23m",
        role: "Drivers",
        title: "We unlocked your documents",
        content: "Hello, Max! Yes, it is possible. For your reservation, we will ban it",
        thumbnail: "Hello, Max! Yes, it is possible. For your reservati..."
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 6,
    data: messagesData(),
  };

  return [200, data];
})
