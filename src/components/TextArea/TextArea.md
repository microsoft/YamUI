### Examples

Basic
```js { "props": { "data-description": "basic" } }
<TextArea
  value="This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear."
  rows={3}
/>
```

With a description
```js { "props": { "data-description": "with description" } }
<TextArea
  value="This Textarea has a description."
  rows={3}
  description="This is the Textarea's description"
/>
```

Auto-adjust Height
```js { "props": { "data-description": "auto adjust height" } }
<TextArea
  value="This multiline auto grows. This multiline auto grows.  This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows."
  autoAdjustHeight={true}
  rows={1}
/>
```

Disabled
```js { "props": { "data-description": "disabled" } }
<TextArea
  value="This is disabled."
  disabled={true}
/>
```

Placeholder
```js { "props": { "data-description": "placeholder" } }
<TextArea
  placeHolder="This is a placeholder."
/>
```

Error
```js { "props": { "data-description": "error" } }
<TextArea
  value="This value has an error."
  errorMessage="Error Explanation"
  rows={3}
/>
```