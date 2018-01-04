### Examples

Basic
```js { "props": { "data-example": "basic" } }
<TextArea
  value="This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear. This multiline has fixed height so scrollbars may appear."
  rows={3}
/>
```

With a description
```js { "props": { "data-example": "withDescription" } }
<TextArea
  value="This multiline has fixed height so scrollbars may appear."
  rows={3}
  description="Small hint goes here"
/>
```

Auto-adjust Height
```js { "props": { "data-example": "autoAdjustHeight" } }
<TextArea
  value="This multiline auto grows. This multiline auto grows.  This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows. This multiline auto grows."
  autoAdjustHeight={true}
  rows={1}
/>
```

Disabled
```js { "props": { "data-example": "disabled" } }
<TextArea
  value="This is disabled."
  disabled={true}
/>
```

Placeholder
```js { "props": { "data-example": "placeHolder" } }
<TextArea
  placeHolder="This is a placeholder."
/>
```

Error
```js { "props": { "data-example": "error" } }
<TextArea
  value="This value has an error."
  errorMessage="Error Explanation"
  rows={3}
/>
```