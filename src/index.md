## A complete lifecycle management for publication

Allow any object to be in a published or drafted state.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fff',
      'primaryTextColor': '#323232',
      'primaryBorderColor': '#323232',
      'lineColor': '#323232',
      'fontFamily': 'Space Grotesk'
    }
  }
}%%
flowchart TD
    start([Launch Servable]) --> requiresMigration{A protocol requires migration?}
    requiresMigration -- Yes --> migrate[Migrate every protocol that requires migration]
    requiresMigration -- No --> doLaunch[Do Launch]
    migrate --> doLaunch[Do Launch]
```
