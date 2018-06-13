### Examples

With no results:

```js { "props": { "data-description": "no results" } }
<SuggestionsList noResultsText="No results found" />
```

When loading:

```js { "props": { "data-description": "when loading" } }
<SuggestionsList
  searchText="Cris"
  loadingText="Searching for 'Cris'"
  noResultsText="No results found"
  isLoading={true}
/>
```

With Avatar template results:

```js { "props": { "data-description": "with results", "data-action-states":"[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-suggestionsListItem\"}]" } }
const { SuggestionsListItemTemplate } = require('./types');

<SuggestionsList
  searchText="Cris"
  loadingText="Searching for 'Cris'"
  noResultsText="No results found"
  onItemSelected={action('SuggestionsList item selected')}
  groupedItems={[
    {
      title: 'Suggested Users',
      items: [{
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 1,
        name: 'Cristiana Cline',
        description: 'Data Analyst',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 2,
        name: 'Cristian Sayers',
        description: 'Front-End Developer',
        imageUrl: 'user.png',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 3,
        name: 'Johanna Cristian Rodriguez Hernandez',
        description: 'Information Architecture',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 4,
        name: 'Lidia Holloway Cristina',
        description: 'Senior Designer',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 5,
        name: 'Nestor Cristian Wilke',
        description: 'Product Manager',
        imageUrl: 'group.png',
      }],
    },
  ]}
  selectedId={2}
/>
```

With MediaSoft template results:

```js { "props": { "data-description": "with media soft results", "data-action-states":"[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-suggestionsListItem\"}]" } }
const { SuggestionsListItemTemplate } = require('./types');

<SuggestionsList
  searchText="Model"
  loadingText="Searching for 'Model'"
  noResultsText="No results found"
  onItemSelected={action('SuggestionsList item selected')}
  groupedItems={[
    {
      title: 'Suggested Groups',
      items: [{
        template: SuggestionsListItemTemplate.MEDIA_SOFT,
        id: 1,
        name: 'Model Rocket Enthusiasts',
        description: 'all the cool rocket things',
        imageUrl: 'group.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SOFT,
        id: 2,
        name: 'Model Rocket Professionals',
        description: 'All the professional rocket things',
        imageUrl: 'logo.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SOFT,
        id: 3,
        name: 'Modeling Agency Group',
        description: 'Talent acquisition, modeling contracts, all the other modeling-related things',
        imageUrl: 'user.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SOFT,
        id: 4,
        name: 'Modeling group #2',
        description: 'no group image :(',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SOFT,
        id: 5,
        name: 'Modeling group #3',
        description: 'best modeling group of all',
        imageUrl: 'logoFallback.png',
      }],
    },
  ]}
  selectedId={2}
/>
```

With MediaSquare template results:

```js { "props": { "data-description": "with media square results", "data-action-states":"[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-suggestionsListItem\"}]" } }
const { SuggestionsListItemTemplate } = require('./types');

<SuggestionsList
  searchText="Yam"
  loadingText="Searching for 'Yam'"
  noResultsText="No results found"
  onItemSelected={action('SuggestionsList item selected')}
  groupedItems={[
    {
      title: 'Suggested Web Links',
      items: [{
        template: SuggestionsListItemTemplate.MEDIA_SQUARE,
        id: 1,
        name: 'Yammer: Work Smarter, Work Together',
        description: 'https://www.yammer.com',
        imageUrl: 'logo.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SQUARE,
        id: 2,
        name: 'Yammer: Work Smarter, Work Together',
        description: 'https://www.yammer.com',
        imageUrl: 'logo.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SQUARE,
        id: 3,
        name: 'Yammer: Work Smarter, Work Together',
        description: 'https://www.yammer.com',
        imageUrl: 'logo.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SQUARE,
        id: 4,
        name: 'Yammer: Work Smarter, Work Together',
        description: 'https://www.yammer.com',
        imageUrl: 'logo.png',
      }, {
        template: SuggestionsListItemTemplate.MEDIA_SQUARE,
        id: 5,
        name: 'Yammer: Work Smarter, Work Together',
        description: 'https://www.yammer.com',
        imageUrl: 'logo.png',
      }],
    },
  ]}
  selectedId={2}
/>
```

With Text template results:

```js { "props": { "data-description": "with text results", "data-action-states":"[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-suggestionsListItem\"}]" } }
const { SuggestionsListItemTemplate } = require('./types');

<SuggestionsList
  searchText="no"
  loadingText="Searching for 'no'"
  noResultsText="No results found"
  onItemSelected={action('SuggestionsList item selected')}
  groupedItems={[
    {
      title: 'Suggested Topics',
      items: [{
        template: SuggestionsListItemTemplate.TEXT,
        id: 1,
        name: '#nobody',
      }, {
        template: SuggestionsListItemTemplate.TEXT,
        id: 2,
        name: '#northbound',
      }, {
        template: SuggestionsListItemTemplate.TEXT,
        id: 3,
        name: '#notinmyhouse',
      }, {
        template: SuggestionsListItemTemplate.TEXT,
        id: 4,
        name: '#nowayjose',
      }, {
        template: SuggestionsListItemTemplate.TEXT,
        id: 5,
        name: '#nowisthetime',
      }],
    },
  ]}
  selectedId={2}
/>
```

With avatar template results and loading more:

```js { "props": { "data-description": "with results, when loading" } }
const { SuggestionsListItemTemplate } = require('./types');

<SuggestionsList
  isLoading={true}
  searchText="Cris"
  loadingText="Searching for 'Cris'"
  onItemSelected={action('SuggestionsList item selected')}
  groupedItems={[
    {
      title: 'Suggested Users',
      items: [{
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 1,
        name: 'Cristiana Cline',
        description: 'Data Analyst',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 2,
        imageUrl: 'user.png',
        name: 'Cristian Sayers',
        description: 'Front-End Developer',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 3,
        name: 'Johanna Cristian Lorenz',
        description: 'Information Architecture',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 4,
        name: 'Lidia Holloway Cristina',
        description: 'Senior Designer',
      }, {
        template: SuggestionsListItemTemplate.AVATAR_ROUND,
        id: 5,
        imageUrl: 'group.png',
        name: 'Nestor Cristian Wilke',
        description: 'Product Manager',
      }],
    },
  ]}
  selectedId={2}
/>
```
