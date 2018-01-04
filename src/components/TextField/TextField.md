### Examples

Basic
```js { "props": { "data-example": "basic" } }
<TextField
  label="First Name"
  value="Textfield filled"
  description="Small hint goes here"
/>
```

Disabled
```js { "props": { "data-example": "disabled" } }
<TextField
  value="Disabled"
  disabled
/>
```

With Placeholder
```js { "props": { "data-example": "with placeholder" } }
<TextField
  placeHolder="Textfield Placeholder..."
/>
```

With Error Message
```js { "props": { "data-example": "with error" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
/>
```

With Error Message and Description.  (NOTE: The description is hidden.)
```js { "props": { "data-example": "with error and description" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
  description="This should not be shown"
/>
```

With Prefix
```js { "props": { "data-example": "with prefix" } }
<TextField
  placeHolder="your-website.com"
  prefix="http://"
/>
```

With Suffix
```js { "props": { "data-example": "with suffix" } }
<TextField
  placeHolder="your e-mail"
  suffix="@contoso.com"
/>
```

Required:
```js { "props": { "data-example": "required" } }
<TextField
  placeHolder="Required Field"
  required
/>
```

Required with Label:
```js { "props": { "data-example": "required with label" } }
<TextField
  label={"Required Field"}
  required
/>
```

onChange:
```js { "props": { "data-example": "onChange" } }
<TextField
  onChange={action('change from `onChange` example')}
/>
```

Controlled onChange with debounce:
```js { "props": { "data-example": "controlled onChange with debounce" } }
class ControlledTextField extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <TextField
        value = {this.state.value}
        debouncedOnChangeTime={700}
        debouncedOnChange={this.handleChange}
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

Beside Button
```js { "props": { "data-example": "beside button" } }
<FixedGridRow>
  <FixedGridColumn><TextField/></FixedGridColumn>
  <FixedGridColumn fixed={true}><Button text="Submit" /></FixedGridColumn>
</FixedGridRow>
```

Underlined Variation
```js { "props": { "data-example": "basic underlined" } }
<TextField
  placeHolder="Textfield Placeholder..."
  underlined
/>
```

Underlined Variation With Error
```js { "props": { "data-example": "underlined with error" } }
<TextField
  errorMessage="Error hint goes here"
  placeHolder="Textfield Error"
  underlined
/>
```
