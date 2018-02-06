### Examples

With no results:

```js { "props": { "data-example": "No Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '50px' }}>
  <SuggestionsList noResultsText="No results found" />
</div>
```

When loading:

```js { "props": { "data-example": "When Loading" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '50px' }}>
  <SuggestionsList
    isLoading={true}
    loadingText={'Searching for \'Cris\''}
  />
</div>
```

With results:

```js { "props": { "data-example": "When Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '250px' }}>
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
</div>
```

With results, when loading:

```js { "props": { "data-example": "When Results" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '295px', position: 'relative' }}>
  <SuggestionsList
    left={0}
    top={0}
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
</div>
```

```js { "props": { "data-example": "Right alignment" } }
const CalloutTrigger = require('../../demos/CalloutTrigger');

<div style={{ minHeight: '295px', position: 'relative' }}>
  <SuggestionsList
    right={0}
    top={0}
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
</div>
```

