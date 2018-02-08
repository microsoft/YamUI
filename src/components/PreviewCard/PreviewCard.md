### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
<PreviewCard
  name="Filename.gif"
  description="this is the file description"
  imageUrl="user.png"
/>
```

With editable description:

```js { "props": { "data-example": "editable description" } }
<PreviewCard
  name="Filename.gif"
  description="this is the file description"
  isDescriptionEditable={true}
  emptyEditableDescriptionText="Edit this description"
  imageUrl="user.png"
/>
```

With remove button:

```js { "props": { "data-example": "remove button" } }
<PreviewCard
  name="Filename.gif"
  description="this is the file description"
  imageUrl="user.png"
  onRemoveClick={action('removed')}
  removeAltText="Remove this attachment"
/>
```

With loading state:

```js { "props": { "data-example": "loading state" } }
<PreviewCard
  name="Yammer.com"
  imageUrl="user.png"
  isLoading={true}
  loadingText="Retrieving metadata..."
/>
```

With loading state and progress:

```js { "props": { "data-example": "loading with progress" } }
<PreviewCard
  name="Yammer.com"
  description="Uploading (3.4MB)"
  imageUrl="user.png"
  isLoading={true}
  loadingText="Uploading file, 70%"
  progress={.7}
/>
```

Editable with an onClick handler:

```js { "props": { "data-example": "editable with onclick" } }
<PreviewCard
  name="sunset.jpg"
  description="nice pic of a sunset i took in hawaii"
  isDescriptionEditable={true}
  emptyEditableDescriptionText="Edit this description"
  imageUrl="user.png"
  onClick={action('clicked')}
  onRemoveClick={action('removed')}
/>
```