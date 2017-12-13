### Examples

With no results:

```js { "props": { "data-example": "No Results" } }
<div style={{ minHeight: '52px' }}>
  <span id="suggested-list-1" />
  <SuggestionsList
    target="#suggested-list-1"
    noResultsText="No results found"
  />
</div>
```

When loading:

```js { "props": { "data-example": "When Loading" } }
<div style={{ minHeight: '52px' }}>
  <span id="suggested-list-2" />
  <SuggestionsList
    target="#suggested-list-2"
    isLoading={true}
    loadingText={'Searching for \'Cris\''}
  />
</div>
```

With results:

```js { "props": { "data-example": "When Results" } }
<div style={{ minHeight: '244px' }}>
  <span id="suggested-list-3" />
  <SuggestionsList
    target="#suggested-list-3"
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
<div style={{ minHeight: '297px' }}>
  <span id="suggested-list-4" />
  <SuggestionsList
    target="#suggested-list-4"
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

