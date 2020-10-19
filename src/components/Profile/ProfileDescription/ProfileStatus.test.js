import React from 'react'
import * as renderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let root = renderer.create(<ProfileStatus status="new status" />).root;
        const instance = root.instance;

        expect(instance.state.status).toBe("new status");
    })
    test("span should be displayed with correct status", () => {
        let root = renderer.create(<ProfileStatus status="status" />).root;
        let span = root.findByType("span")

        expect(span.children[0]).toBe("status");
    })
    test("input shouldn`t displayed", () => {
        let root = renderer.create(<ProfileStatus status="status" />).root;

        expect(() => {
            root.findByType("input")
        }).toThrow();
    })
})