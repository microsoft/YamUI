### Examples

Basic
```js { "props": { "data-description": "basic" } }
<TextField
  label="First Name"
  value="Textfield filled"
  description="Small hint goes here"
/>
```

Disabled
```js { "props": { "data-description": "disabled" } }
<TextField
  value="Disabled"
  disabled
/>
```

With JSX Description
```js { "props": { "data-description": "with jsx description" } }
<TextField
  description={(<Clickable>Click Me</Clickable>)}
/>
```

Max length
```js { "props": { "data-description": "maxLength" } }
<TextField
  value="maxLength 15"
  maxLength={15}
/>
```

With Placeholder
```js { "props": { "data-description": "with placeholder" } }
<TextField
  placeHolder="Textfield Placeholder..."
/>
```

With Error Message
```js { "props": { "data-description": "with error" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
/>
```

With Error Message and Description.  (NOTE: The description is hidden.)
```js { "props": { "data-description": "with error and description" } }
<TextField
  value="Error"
  errorMessage="Error hint goes here"
  description="This should not be shown"
/>
```

With Prefix
```js { "props": { "data-description": "with prefix" } }
<TextField
  placeHolder="your-website.com"
  prefix="http://"
/>
```

With Suffix
```js { "props": { "data-description": "with suffix" } }
<TextField
  placeHolder="your e-mail"
  suffix="@contoso.com"
/>
```

Long Prefix
```js { "props": { "data-description": "long prefix" } }
<TextField
  placeHolder="placeholder text"
  prefix="long prefix long prefix long prefix long prefix long prefix long prefix long prefix"
/>
```

Long Prefix and Suffix
```js { "props": { "data-description": "long prefix and suffix" } }
<TextField
  placeHolder="placeholder text"
  prefix="long prefix long prefix long prefix long prefix long prefix long prefix long prefix"
  suffix="long suffix long suffix long suffix long suffix long suffix long suffix long suffix"
/>
```

Short Prefix and Long Suffix
```js { "props": { "data-description": "short prefix and long suffix" } }
<TextField
  placeHolder="placeholder text"
  prefix="short prefix"
  suffix="long suffix long suffix long suffix long suffix long suffix long suffix long suffix"
/>
```

Long Prefix and Short Suffix
```js { "props": { "data-description": "long prefix and short suffix" } }
<TextField
  placeHolder="placeholder text"
  prefix="long prefix long prefix long prefix long prefix long prefix long prefix long prefix"
  suffix="short suffix"
/>
```

Required:
```js { "props": { "data-description": "required" } }
<TextField
  placeHolder="Required Field"
  required
/>
```

Required with Label:
```js { "props": { "data-description": "required with label" } }
<TextField
  label={"Required Field"}
  required
/>
```

onChange:
```js { "props": { "data-description": "onChange" } }
<TextField
  onChange={action('change from `onChange` example')}
/>
```

Controlled onChange with debounce:
```js { "props": { "data-description": "controlled onChange with debounce" } }
class ControlledTextField extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <TextField
        value={this.state.value}
        debouncedOnChange={(value) => action('textfield changed (debounced)')(value)}
        debouncedOnChangeTime={700}
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

Controlled with link in description:
```js { "props": { "data-description": "controlled with link in description" } }
class ControlledTextField extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <TextField
        componentRef={(ref) => { this.textFieldRef = ref; } }
        value={this.state.value}
        description={<Clickable onClick={() => this.textFieldRef.focus()}>Focus and place cursor at the end of the input.</Clickable>}
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

Beside Button
```js { "props": { "data-description": "beside button" } }
<FixedGridRow>
  <FixedGridColumn><TextField/></FixedGridColumn>
  <FixedGridColumn fixed={true}><Button text="Submit" /></FixedGridColumn>
</FixedGridRow>
```

Underlined Variation
```js { "props": { "data-description": "basic underlined" } }
<TextField
  placeHolder="Textfield Placeholder..."
  underlined
/>
```

Underlined Variation With Error
```js { "props": { "data-description": "underlined with error" } }
<TextField
  errorMessage="Error hint goes here"
  placeHolder="Textfield Error"
  underlined
/>
```
