### Examples

With no results:

```js { "props": { "data-example": "No Results" } }
const WithTarget = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '75px' }}>
  <WithTarget>
    <SuggestionsList noResultsText="No results found" />
  </WithTarget>
</div>
```

When loading:

```js { "props": { "data-example": "When Loading" } }
const WithTarget = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '75px' }}>
  <WithTarget>
    <SuggestionsList
      isLoading={true}
      loadingText={'Searching for \'Cris\''}
    />
  </WithTarget>
</div>
```

With results:

```js { "props": { "data-example": "When Results" } }
const WithTarget = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '275px' }}>
  <WithTarget>
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
  </WithTarget>
</div>
```

With results, when loading:

```js { "props": { "data-example": "When Results" } }
const WithTarget = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '320px' }}>
  <WithTarget>
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
  </WithTarget>
</div>
```

