exports.getPosts = (req, res, next) => {
  res.status(200).json({
    // allows as to conveniently return a response with json data, with the right headers being set and so on
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/Steve.jpg',
        creator: {
          name: 'Lee',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post crated successfully!',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
