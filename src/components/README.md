# Component

Copy this README to your new component folder and replace these details for your component.

Describe the problem the component solves as simply as possible. It might sound silly. For example, the description of Button is "Allows user to take an action."

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | ComponentSize| Size of component |
| name * | string | The component's label. |
| borderType | BorderType| Round or soft border. Defaults to round.|

* indicates property is required

(Sort properties by most commonly used and remove this reminder when you do.)

---

## Content guidelines

Put stuff about design restrictions (dos and don'ts), best practices, and accessibility here.

## Notes for use

Optional additional help for getting component to work.

---

## Examples

### Default component

Show most bare-bones example

```
<Component name="Annie Antelope" />
```
---

## Example implementation

Use component in some certain way that shows flexibility of use

```
import Component from 'yamui/dist/components/Component';
```
```
<Component size={ComponentSize.MEDIUM} borderType={BorderType.SOFT} name="Annie Antelope" />
```
