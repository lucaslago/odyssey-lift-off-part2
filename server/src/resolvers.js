const resolvers = {
  Query: {
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, args, { dataSources }, info) => {
      console.log({ parent });
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
