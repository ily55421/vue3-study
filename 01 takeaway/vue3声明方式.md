
## finally I figure out the dataOptions was the data defined in appOptions that could not be understand by vue 3, in legacy vue, define data like this:

```
data() {
  return {
    foo: 1,
    bar: { name: "hi" }
  }
}
```
##  in vue 3, we should define like this:

```
setup() {
  const foo = ref(1);
  const bar = reactive({ name: "hi" });

  return { foo, bar }
}
```
## more informatioin are here. I changed my code like this:

```
setup () {
    const host =null;
    const canInject =false;
    const enabled = false;
    return {host,canInject,enabled};
  } ,
```