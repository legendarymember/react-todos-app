export const filterAndSortByStatus = (todos, status) =>
  todos
    .filter((t) => t.status === status)
    .sort((a, b) => a.createdDate - b.createdDate);
