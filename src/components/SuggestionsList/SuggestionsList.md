### Examples

With no results:

```js { "props": { "data-example": "No Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '75px' }}>
  <CalloutTrigger>
    <SuggestionsList noResultsText="No results found" />
  </CalloutTrigger>
</div>
```

When loading:

```js { "props": { "data-example": "When Loading" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '75px' }}>
  <CalloutTrigger>
    <SuggestionsList
      isLoading={true}
      loadingText={'Searching for \'Cris\''}
    />
  </CalloutTrigger>
</div>
```

With results:

```js { "props": { "data-example": "When Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '275px' }}>
  <CalloutTrigger>
    <SuggestionsList
      searchText="Cris"
      loadingText={'Searching for \'Cris\''}
      onItemSelected={() => {}}
      groupedItems={[
        {
          title: 'Suggested Users',
          items: [{
            id: 1,
            imageUrl: '',
            name: 'Cristiana Cline',
            description: 'Data Analyst'
          }, {
            id: 2,
            imageUrl: '',
            name: 'Cristian Sayers',
            description: 'Front-End Developer'
          }, {
            id: 3,
            imageUrl: '',
            name: 'Johanna Cristian Lorenz',
            description: 'Information Architecture'
          }, {
            id: 4,
            imageUrl: '',
            name: 'Lidia Holloway Cristina',
            description: 'Senior Designer'
          }, {
            id: 5,
            imageUrl: '',
            name: 'Nestor Cristian Wilke',
            description: 'Product Manager'
          }]
        }
      ]}
      selectedId={2}
    />
  </CalloutTrigger>
</div>
```

With results, when loading:

```js { "props": { "data-example": "When Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '320px' }}>
  <CalloutTrigger>
    <SuggestionsList
      isLoading={true}
      searchText="Cris"
      loadingText={'Searching for \'Cris\''}
      onItemSelected={() => {}}
      groupedItems={[
        {
          title: 'Suggested Users',
          items: [{
            id: 1,
            imageUrl: '',
            name: 'Cristiana Cline',
            description: 'Data Analyst'
          }, {
            id: 2,
            imageUrl: '',
            name: 'Cristian Sayers',
            description: 'Front-End Developer'
          }, {
            id: 3,
            imageUrl: '',
            name: 'Johanna Cristian Lorenz',
            description: 'Information Architecture'
          }, {
            id: 4,
            imageUrl: '',
            name: 'Lidia Holloway Cristina',
            description: 'Senior Designer'
          }, {
            id: 5,
            imageUrl: '',
            name: 'Nestor Cristian Wilke',
            description: 'Product Manager'
          }]
        }
      ]}
      selectedId={2}
    />
  </CalloutTrigger>
</div>
```

