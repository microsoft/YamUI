### Examples

With no results:

```js { "props": { "data-description": "no results" } }
<SuggestionsList noResultsText="No results found" />
```

When loading:

```js { "props": { "data-description": "when loading" } }
<SuggestionsList
  isLoading={true}
  loadingText={'Searching for \'Cris\''}
/>
```

With results:

```js { "props": { "data-description": "with results", "data-action-states":"[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-suggestions-list-item\"}]" } }
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
        name: 'Johanna Cristian Rodriguez Hernandez',
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
```

With results, when loading:

```js { "props": { "data-description": "with results, when loading" } }
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
```

