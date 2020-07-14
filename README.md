# Task: Implement Virtual Scrolling by Yourself

This is the alternative task for your [application for a developer role at Gamdom](./OPEN-JOB-POSITION.md).
It is about implementing virtual scrolling without using any library for that. If you take inspiration from existing solutions, you must be able to explain every detail in the interview.

## Must Haves

-   Your soultion must use react and typescript. Use this repository as your starting point!
-   Use the `MessageComponent` to render messages!
-   It must be able to display a list of 10k messages in less than 2 seconds (the current non-virtualized implementation just hangs forever).
-   It must be able deal with items of dynamic height.
-   It must type-check.

### Hints

You should use virtualization techniques to get the desired performance: Only render as much messages as neccessary!

Use `position: absolute` and the `top` attribute to manually position the items that you want to render. Creating divs of arbitrary large heigths is cheap (you can just set the height property of an inner div for that). Track the current scroll position to only render messages in the view port.

## Nice To Have

-   It should handle size changes of items smoothly (use the new `ResizeObserver` API for that)
-   It should offer a glitch free scrolling experience. You should solve the problem that you cannot render all elements to learn their height when you quickly scroll down to the last element. If you then scroll up and learn heights that differ from some estimated height, nothing should jump. Don't worry if you don't get this right - we will discuss this in the interview!

## Submitting your Solution

-   Just fork this repository. When you push to master, this app is published to the gh-pages branch automatically.
-   Send a link to your repository that contains your solution along your application. Ensure that your solution covers all the must haves!
