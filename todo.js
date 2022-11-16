/* eslint-disable no-undef */
const must = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const skylink = (index) => {
    all[index].completed = true;
  };

  let magnum = new Date().toLocaleDateString("en-CA");
  // let magnum = new Date().toISOString().split("T")[0];

  const leftout = () => {
    return all.filter((todo) => {
      return todo.dueDate < magnum;
    });
  };

  const kite = () => {
    return all.filter((todo) => {
      return todo.dueDate === magnum;
    });
  };

  const black = () => {
    return all.filter((todo) => {
      return todo.dueDate > magnum;
    });
  };

  const show = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == magnum ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    skylink,
    leftout,
    kite,
    black,
    show,
  };
};

module.exports = must;

