### Notes for use

The UserPicker is a thin wrapper of Fabric's [NormalPeoplePicker](https://developer.microsoft.com/en-us/fabric#/components/peoplepicker) is used to select one or more entities, such as people or groups. Entry points for PeoplePickers are typically specialized TextField-like input fields known as a "well", which are used to search for recipients from a list. When a recipient is selected from the list, it is added to the well as a specialized Persona that can be interacted with or removed. Clicking on a Persona from the well should invoke a PersonaCard or open a profile pane for that recipient.

Only required prop is onResolveSuggestions which can be a promise or function which returns a list of the IPersona or other supplied type.

### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
const people = [
  {
    key: 1,
    imageUrl: user.imageUrl,
    imageInitials: 'PV',
    primaryText: 'Annie Lindqvist',
    secondaryText: 'Designer',
  },
  {
    key: 2,
    imageUrl: user.imageUrl,
    imageInitials: 'AR',
    primaryText: 'Aaron Reid',
    secondaryText: 'Designer',
  },
  {
    key: 3,
    imageUrl: user.imageUrl,
    imageInitials: 'AL',
    primaryText: 'Alex Lundberg',
    secondaryText: 'Software Developer',
  },
  {
    key: 4,
    imageUrl: user.imageUrl,
    imageInitials: 'RK',
    primaryText: 'Roko Kolar',
    secondaryText: 'Financial Analyst',
  },
  {
    key: 5,
    imageUrl: user.imageUrl,
    imageInitials: 'CB',
    primaryText: 'Christian Bergqvist',
    secondaryText: 'Sr. Designer',
  },
];

<UserPicker onResolveSuggestions={() => people} />
```
