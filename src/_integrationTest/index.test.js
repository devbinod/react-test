import moxios from "moxios";
import { testStore } from "../../Utils/index";
import {} from "../actions/index";
import { fetchPosts } from "../actions/index";

describe("fetch post action ", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("Store is updated correctly ", () => {
    const expectedState = [
      { title: "Example test 1", body: "some text" },
      { title: "Example test 2", body: "some text" },
      { title: "Example test 3", body: "some text" },
      { title: "Example test 4", body: "some text" }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
