import mock from "../utils/axios-mock";

mock.onPost("/api/messages/dashboard").reply((config) => {
  console.log(config);
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
        content:
          "Hello, Max! Yes, it is possible. For your reservation, we will ban it",
        thumbnail: "Hello, Max! Yes, it is possible. For your reservati...",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 6,
    data: messagesData(),
  };

  return [200, data];
});

mock.onPost("/api/messages/detail").reply((config) => {
  console.log(config);

  // All messages Data
  const data = [
    {
      id: 1,
      type: "you",
      name: "Elisabeth Synsky",
      time: "Marth 28, 5:28 AM",
      text: "Garage Repair Ticket #60 has been created.",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7237/1d98/12e0d2d1d9fbccfb720a6e65527889a0?Expires=1620604800&Signature=fFy~b0ZyRHQsS2-~k-dUDomatzaLxS4hNQj8dgxZRYdh0sVMMqgBQwrLgqMRLJETyaz8hXf4A2T0cNqx9XmPW3v1dcbWaav15mtQzbIrnHwlE6VWuAGtgFTT2If7PSCqJ2RjWQNvmwQcYVBTIJGepZwmbMjwNdz72ehDNXst2FsO3cP1SnUZACIyWhv9z5PbjFUJbxhFhiotlCe2-tGlfduuWzGEEA6~PFruzyI-xp~5Tw5zNw~rFEeMIZOfE~CjBp-YBidzB0rQx7KfvrijRQFJynxWaPcv3CbWb9qvgzder22SD8Tw8cNomWW-0c7~oQuo0AV7QKzpnh52OuQ7Gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      seen: true,
    },
    {
      id: 2,
      type: "me",
      name: "Elisabeth Synsky",
      time: "Marth 29, 6:03 PM",
      text:
        "Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle. First PTI in the yard, if you have a Truck & Trailer you should have 30 minutes. On-Duty Status, 15 minutes for Truck and 15 minutes for Trailer.",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7237/1d98/12e0d2d1d9fbccfb720a6e65527889a0?Expires=1620604800&Signature=fFy~b0ZyRHQsS2-~k-dUDomatzaLxS4hNQj8dgxZRYdh0sVMMqgBQwrLgqMRLJETyaz8hXf4A2T0cNqx9XmPW3v1dcbWaav15mtQzbIrnHwlE6VWuAGtgFTT2If7PSCqJ2RjWQNvmwQcYVBTIJGepZwmbMjwNdz72ehDNXst2FsO3cP1SnUZACIyWhv9z5PbjFUJbxhFhiotlCe2-tGlfduuWzGEEA6~PFruzyI-xp~5Tw5zNw~rFEeMIZOfE~CjBp-YBidzB0rQx7KfvrijRQFJynxWaPcv3CbWb9qvgzder22SD8Tw8cNomWW-0c7~oQuo0AV7QKzpnh52OuQ7Gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      seen: true,
    },
    {
      id: 3,
      type: "you",
      name: "Elisabeth Synsky",
      time: "Marth 28, 5:28 AM",
      text:
        "Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle. First PTI in the yard, if you have a Truck & Trailer you should have 30 minutes. On-Duty Status, 15 minutes for Truck and 15 minutes for Trailer.",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7237/1d98/12e0d2d1d9fbccfb720a6e65527889a0?Expires=1620604800&Signature=fFy~b0ZyRHQsS2-~k-dUDomatzaLxS4hNQj8dgxZRYdh0sVMMqgBQwrLgqMRLJETyaz8hXf4A2T0cNqx9XmPW3v1dcbWaav15mtQzbIrnHwlE6VWuAGtgFTT2If7PSCqJ2RjWQNvmwQcYVBTIJGepZwmbMjwNdz72ehDNXst2FsO3cP1SnUZACIyWhv9z5PbjFUJbxhFhiotlCe2-tGlfduuWzGEEA6~PFruzyI-xp~5Tw5zNw~rFEeMIZOfE~CjBp-YBidzB0rQx7KfvrijRQFJynxWaPcv3CbWb9qvgzder22SD8Tw8cNomWW-0c7~oQuo0AV7QKzpnh52OuQ7Gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      seen: true,
    },
    {
      id: 4,
      type: "me",
      name: "Elisabeth Synsky",
      time: "Marth 29, 6:03 PM",
      text:
        "Reminder to everyone! The duration of Pre-Trip Inspections in On-Duty Status must be at least 15 minutes for each vehicle.",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7237/1d98/12e0d2d1d9fbccfb720a6e65527889a0?Expires=1620604800&Signature=fFy~b0ZyRHQsS2-~k-dUDomatzaLxS4hNQj8dgxZRYdh0sVMMqgBQwrLgqMRLJETyaz8hXf4A2T0cNqx9XmPW3v1dcbWaav15mtQzbIrnHwlE6VWuAGtgFTT2If7PSCqJ2RjWQNvmwQcYVBTIJGepZwmbMjwNdz72ehDNXst2FsO3cP1SnUZACIyWhv9z5PbjFUJbxhFhiotlCe2-tGlfduuWzGEEA6~PFruzyI-xp~5Tw5zNw~rFEeMIZOfE~CjBp-YBidzB0rQx7KfvrijRQFJynxWaPcv3CbWb9qvgzder22SD8Tw8cNomWW-0c7~oQuo0AV7QKzpnh52OuQ7Gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      seen: true,
    },
  ];

  if (config.data) {
    const request = JSON.parse(config.data);
    console.log(request);
    
    data.push(request);
  }

  return [200, data];
});
