export const setId = async (id) => {
  if (id)
    return {
      where: {
        id: {
          equals: id,
        },
      },
    };
};
