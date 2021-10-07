const {getNewUser,mapObjectToArray} = require("./utils")

// ? synchronous test
describe("mapObjectToArray", () => {
    test("maps values to array usig callback",() => {
        const result = mapObjectToArray({age:10, height: 60}, (k,v) => {
            return v+10;
        })
        expect(result).toEqual([20,70])
    });

    test("callback gets called", () => {
        const mockCb = jest.fn();
        const result = mapObjectToArray({age:30, height: 65}, mockCb)

        expect(mockCb.mock.calls.length).toBe(2)
    })
})

describe("getNewUser()", () => {
    test("it gets user", async () => {
        const user = await getNewUser(1);

        expect(user).toBeTruthy()
        expect(user.id).toBe(1)
    })
})