export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Dude thank you so much for making this, now if only it was possible to somehow get this to stay as the top discussion so that new people don't make these mistakes.",
      username: "Cluless-kun",
      userId: "1",
      parentId: null,
      createdAt: "2023-01-20T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "If I could recommend this discussion more than once, I would.",
      username: "Tony Hue",
      userId: "2",
      parentId: null,
      createdAt: "2023-01-20T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Working on it. it will eventually be linkable on the side of all discussions.",
      username: "Nebuchadnezzer (AFTP)",
      userId: "2",
      parentId: "1",
      createdAt: "2023-01-20T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "It should be up now :)",
      username: "Nebuchadnezzer (AFTP)",
      userId: "2",
      parentId: "1",
      createdAt: "2023-01-20T23:00:33.010+02:00",
    },
    
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
