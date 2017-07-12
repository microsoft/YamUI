# ScreenreaderText

This component simply hides its content from sight without hiding it from screenreaders. Use this component whenever a screenreader should be able to read aloud additional context for your UI features.

---

### Properties

(none)

---


## Content guidelines

Generally just nest text within a ScreenreaderText component. It's also possible to nest JSX, for instance if a screenreader should recognize some text as the page title you could nest an `<h1>` tag.

---

## Examples

### Basic example

```
<ScreenreaderText>This text is not visible, but will still be read aloud by a screenreader</ScreenreaderText>.
```
