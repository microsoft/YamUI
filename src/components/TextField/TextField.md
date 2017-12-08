### Examples

One Line:
```js
<TextField
  label="First Name"
  value="Textfield filled"
  description="Small hint goes here"
/>
```

```js
<TextField
  value="Disabled"
  disabled
/>
```

```js
<TextField
  placeHolder="Textfield Placeholder..."
/>
```

```js
<TextField
  value="Error"
  errorMessage="Error hint goes here"
/>
```

```js
<TextField
  value="TODO: Icon"
/>
```

```js
<TextField
  value="TODO: Spinner"
/>
```

```js
<TextField
  placeHolder="your-website.com"
  prefix="http://"
/>
```

```js
<TextField
  placeHolder="your e-mail"
  suffix="@contoso.com"
/>
```

Multiple Line:
```js
<TextField
  value="This multiline has fixed height so scrollbars may appear."
  rows={3}
/>
```

```js
<TextField
  value="This multiline auto grows."
  autoAdjustHeight={true}
  rows={1}
/>
```

Underlined Variation
```js
<TextField
  prefix="hello"
  placeHolder="Textfield Placeholder..."
  underlined
/>
```

```js
<TextField
  errorMessage="Error hint goes here"
  placeHolder="Textfield Error"
  underlined
/>
```

Required:
```js
<TextField
  required
/>
```

onChange:
```js
<TextField
  onChange={action('change from `onChange` example')}
/>
```

onChange with debounce:
```js
<TextField
  onChangeDebounceTime={700}
  onChange={action('change from `onChange with debounce` example')}
/>
```