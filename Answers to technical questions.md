1.

2-3 hours. I would like to add a pagination feature to improve the experience of the user, so the user don't to spend too much time on the request. But I think it is something that needs to be adjusted on API too so I didn't do it only in front-end. Also I think that if I could send a parameter on getByPostcode route to only get the opened restaurants it would be better so I don't need to filter it on front-end.

Maybe if the application gets bigger and with more developers involved I would setup a better code style-guide with eslint.

But I'm happy with the code a developed, with the features I did :)

2.

I like using React Hooks when I'm working with React, I think it was a great improvement that they have done in terms of performance. I could use as an example the hook `useCallback` that I used on Restaurants component:

```ts
const showEmptyMessage = useCallback(() => {
  return restaurants.length < 1 && !loading && !showError;
}, [restaurants.length, loading, showError]);
```

The function only recalculates its value if the variables on the array of dependencies change their values, so I think it's very usefull and I like to use it a lot.

Also I like using styled-components to work with CSS in JS, I think it helps with productivity while I'm developing and helps to keep the code more organized.

3.

I'll try to reproduce the error in a test environment because I think it's always better to debug there. But if it's not possible, if the error is only happening in production because of a specific characteristic I would try to use the Browser Developer Tools to help me debug what's happening, inspect some element if it's a visual bug or analyzing the network tab if it's something related to that.
