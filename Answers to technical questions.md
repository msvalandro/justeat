1.

2. I like using React Hooks when I'm working with React, I think it was a great improvement that they have done in terms of performance. I could use as an example the hook `useCallback` that I used on Restaurants component:

```ts
const showEmptyMessage = useCallback(() => {
  return restaurants.length < 1 && !loading && !showError;
}, [restaurants.length, loading, showError]);
```

The function only recalculates its value if the variables on the array of dependencies change their values, so I think it's very usefull and I like to use it a lot.

Also I like using styled-components to work with CSS in JS, I think it helps with productivity while I'm developing and helps to keep the code more organized.

3. I'll try to reproduce the error in a test environment because I think it's always better to debug there. But if it's not possible, if the error is only happening in production because of a specific characteristic I would try to use the Browser Developer Tools to help me debug what's happening, inspect some element if it's a visual bug or analyzing the network tab if it's something related to that.
