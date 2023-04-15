### Form Data Api

# invoke formData constructor

```js
const formData = new FormData(e.currentTarget);
```

# create object from the values

```js
const data = Object.fromEntries(formData);
```

# reset the form

```js
e.currentTarget.reset();
```

# get all values

```js
const values = [...formData.values()];
```
