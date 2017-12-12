### Examples

```js { "props": { "data-example": "basic" } }
<TextField
  label="First Name"
  value="Textfield filled"
  description="Small hint goes here"
/>
```

```js  { "props": { "data-example": "disabled" } }
<TextField
  value="Disabled"
  disabled
/>
```

```js  { "props": { "data-example": "with placeholder" } }
<TextField
  placeHolder="Textfield Placeholder..."
/>
```

```js  { "props": { "data-example": "with error" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
/>
```

```js  { "props": { "data-example": "with error and description" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
  description="This should not be shown"
/>
```

```js  { "props": { "data-example": "with loading spinner" } }
<TextField
  value="TODO: Spinner"
/>
```

```js  { "props": { "data-example": "with prefix" } }
<TextField
  placeHolder="your-website.com"
  prefix="http://"
/>
```

```js  { "props": { "data-example": "with suffix" } }
<TextField
  placeHolder="your e-mail"
  suffix="@contoso.com"
/>
```

Underlined Variation
```js  { "props": { "data-example": "basic underlined" } }
<TextField
  placeHolder="Textfield Placeholder..."
  underlined
/>
```

```js  { "props": { "data-example": "underlined with error" } }
<TextField
  errorMessage="Error hint goes here"
  placeHolder="Textfield Error"
  underlined
/>
```

Required:
```js  { "props": { "data-example": "required" } }
<TextField
  label={"Required Field"}
  required
/>
```

Required without a label:
```js  { "props": { "data-example": "required" } }
<TextField
  placeHolder="Required Field"
  required
/>
```

onChange:
```js
<TextField
  onChange={action('change from `onChange` example')}
/>
```

Controlled onChange with debounce:
```js
class ControlledTextField extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <TextField
        value = {this.state.value}
        onChangeDebounceTime={700}
        onChange={this.handleChange}
      />
    );
  }

  handleChange(value) {
    action('textfield changed')(value);
    this.setState({ value });
  }
}

<ControlledTextField />
```