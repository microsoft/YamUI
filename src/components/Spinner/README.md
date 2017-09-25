# Spinner

A Spinner is an outline of a circle which animates around itself indicating to the user that things are processing. It is shown when we're unsure how long a task will take.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| label | string | Text that will be rendered below the spinner.
| size | SpinnerSize | Size of spinner.

* indicates property is required

## Examples

### Default spinner

```
<Spinner />
```

### Large spinner

```
<Spinner size={ SpinnerSize.large } />
```

### Spinner with label

```
<Spinner label="Loading..." />
```
