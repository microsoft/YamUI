# Component

Copy this `README` to your new component folder and replace these details for your component.

Describe the problem the component solves as simply as possible. It might sound silly. For example, the description of `Button` is *"Allows user to take an action"*.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | ComponentSize| Size of component |
| name * | string | The component's label. |
| borderType | BorderType| Round or soft border. Defaults to round.|

\* indicates property is required

(Sort properties by most commonly used and remove this reminder when you do.)

## Notes for use

Put stuff about design restrictions (dos and don'ts), best practices, and accessibility here.

Optional additional help for getting component to work.

## Examples

### Basic usage

Show most bare-bones example:

```js
<Component name="Annie Antelope" />
```

### Advanced usage

Use component in some certain way that shows flexibility of use:

```js
<Component
  size={ComponentSize.MEDIUM}
  borderType={BorderType.SOFT}
  name="Annie Antelope"
/>
```
