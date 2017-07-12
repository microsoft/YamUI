/**
 * Temporary until Storybook has better TypeScript support
 * https://github.com/storybooks/storybook/issues/1159
 * https://github.com/storybooks/storybook/issues/1166
 * */
declare module '@storybook/addon-actions' {
  export function action(name: string, ...params: any[]): any;
}
declare module 'storybook-readme/with-readme' {
  export default function withReadme(readme: any): any;
}
