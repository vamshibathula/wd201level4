/* eslint-disable no-undef */
const must = require("../todo");
let magnum = new Date().toLocaleDateString("en-CA");

const { all, skylink, add, leftout, kite, black } = must();

describe("Todo list acquiring tests", () => {
  beforeAll(() => {
    add({
      title: "magnum opus da celrio",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("creating the fresh todo in this  list", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "codechef solving problems merin",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("inscribing the todo as finished", () => {
    expect(all[0].completed).toBe(false);
    skylink(0);
    expect(all[0].completed).toBe(true);
  });

  test("recovering all the todos that are late ", () => {
    let Ignite = leftout();

    expect(
      Ignite.every((todo) => {
        return todo.dueDate < magnum;
      })
    ).toBe(true);
  });

  test("recovering all todos that are late for now", () => {
    let Ignite = kite();

    expect(
      Ignite.every((todo) => {
        return todo.dueDate === magnum;
      })
    ).toBe(true);
  });

  test("recovering all todos that are late for next", () => {
    let Ignite = black();

    expect(
      Ignite.every((todo) => {
        return todo.dueDate > magnum;
      })
    ).toBe(true);
  });
});
