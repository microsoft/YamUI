### Examples

User picker:

```js { "props": { "data-description": "user picker" } }
const { SuggestionsListItemTemplate } = require('../SuggestionsList/SuggestionsListItemContent');


const avatarItems = [{
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
  }];

class PeoplePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [] };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { selectedItems } = this.state;

    return (
      <Picker
        onResolveSuggestions={this.getSuggestions}
        onChange={this.onChange}
        selectedItems={this.state.selectedItems}
        inputAriaLabel="People to mention"
        removeItemAriaLabel="Remove this item"
        suggestionsHeaderText="People"
        noResultsFoundText="No results found"
      />
    );
  }

  onChange(items) {
    this.setState({ selectedItems: items });
  }

  getSuggestions(filterText) {
    const items = filterText ? avatarItems.filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1) : avatarItems;

    if (!this.state.selectedItems || !this.state.selectedItems.length) {
      return items;
    }

    const selectedIds = this.state.selectedItems.map(item => item.id);
    return items.filter(item => selectedIds.indexOf(item.id) === -1);
  }
}

<PeoplePicker />
```

Group picker limited to a single item:

```js { "props": { "data-description": "group picker" } }
const { SuggestionsListItemTemplate } = require('../SuggestionsList/SuggestionsListItemContent');


const userItems = [{
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
  }];


class GroupPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [] };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { selectedItems } = this.state;

    return (
      <Picker
        onResolveSuggestions={this.getSuggestions}
        onChange={this.onChange}
        selectedItems={this.state.selectedItems}
        inputAriaLabel="Choose a group"
        removeItemAriaLabel="Remove this item"
        suggestionsHeaderText="Groups"
        noResultsFoundText="No results found"
        itemLimit={1}
      />
    );
  }

  onChange(items) {
    this.setState({ selectedItems: items });
  }

  getSuggestions(filterText) {
    const items = filterText ? userItems.filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1) : userItems;

    if (!this.state.selectedItems || !this.state.selectedItems.length) {
      return items;
    }

    const selectedIds = this.state.selectedItems.map(item => item.id);
    return items.filter(item => selectedIds.indexOf(item.id) === -1);
  }
}

<GroupPicker />
```

Tag picker which allows the current text to be added:

```js { "props": { "data-description": "tag picker" } }
const { SuggestionsListItemTemplate } = require('../SuggestionsList/SuggestionsListItemContent');


const textItems = [{
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
  }];




class TagPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [] };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { selectedItems } = this.state;

    return (
      <Picker
        onResolveSuggestions={this.getSuggestions}
        onChange={this.onChange}
        selectedItems={this.state.selectedItems}
        inputAriaLabel="Add topics"
        removeItemAriaLabel="Remove this item"
        suggestionsHeaderText="Topics"
        noResultsFoundText="No results found"
      />
    );
  }

  onChange(items) {
    this.setState({ selectedItems: items });
  }

  getSuggestions(filterText) {
    const currentTextTag = { id: `#${filterText}`, name: `#${filterText}`, template: SuggestionsListItemTemplate.TEXT };
    let items = [currentTextTag, ...(this.state.selectedItems || []), ...textItems];
    items = filterText ? items.filter(item => item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1) : items;

    if (!this.state.selectedItems || !this.state.selectedItems.length) {
      return items;
    }

    const selectedIds = this.state.selectedItems.map(item => item.id);
    return items.filter(item => selectedIds.indexOf(item.id) === -1);
  }
}

<TagPicker />
```