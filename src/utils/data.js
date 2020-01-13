export const dataSorter = data => {
  const byId = {};
  const byName = {};

  data.forEach(item => {
    byId[item._id] = item;
    byName[item.name.en] = item;
  });

  return {
    byId,
    byName
  };
};
