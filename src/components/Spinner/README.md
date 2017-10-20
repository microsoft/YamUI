# Spinner

A `Spinner` is an outline of a circle which animates around itself indicating to the user that things are processing. It is shown when we're unsure how long a task will take.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| ariaLabel | string | Alternative label for screen readers. |
| ariaLive | string | Politeness for label update announcement. |
| color | SpinnerColor | Color of the spinner. |
| label | string | Label displayed besides/below the spinner. |
| size | SpinnerSize | Size of spinner. |

## Examples

### Default spinner

```js
<Spinner />
```

### Large spinner

```js
<Spinner size={ SpinnerSize.LARGE } />
```

### Spinner on a dark background

```js
<Spinner color={SpinnerColor.DARK} />
```

### Spinner with label

```js
<Spinner label="Loading..." />
```
