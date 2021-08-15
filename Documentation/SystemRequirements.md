<div align="center">
  <h1>DM Operations Center</h1>
  <strong>System Requirements Document</strong><br/>
  August 9, 2021<br/>
  0.5<br/>
  <br/>
  by <strong>Donald Farland</strong>
  <br/>
  <a href="https://donfarland.com">donfarland.com</a> - <a href="https://twitter.com/MrFarland">@MrFarland</a>
  <br/>
  <br/>
</div>
<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#functional-user-stories">Functional User Stories</a> •
  <a href="#non-functional-user-stories">Non-functional User Stories</a>
</p>

**To create a Dungeon Master Operations Center module that provides 5th edition Dungeons & Dragons dungeon masters with access to rules, randomly generated content, and templates from within the EncounterPlus virtual tabletop application.**






## Introduction




### Purpose
This is the system requirements document for the **DM Operations Center (DOC)** module for the [EncounterPlus](https://encounter.plus/) virtual tabletop (VTT) application for 5th Edition Dungeons & Dragons (D&D5e). This document defines the basic functional and non-functional requirements for the module.




### Objectives
The objectives of this project are to create a module for the EncounterPlus VTT are to:



#### Functional Objectives
1. Create a virtual DM screen application that provides quick, efficient access to common rules used to run a D&D5e session.
2. Create tools and templates designed to help D&D5e DMs with the planning and management of their campaigns & sessions.
3. Create random content generators that allow them to create new content without leaving EncounterPlus for NPCs, shops, settlements, treasure, weather, and more.



#### Non-functional Objectives
1. Create a module that is optimized for the smaller window used by the Favorites and search browsers.
2. Ensure the interface design is responsive and adjusts to the different windows sizes available in the application.
3. Create module pages with a flash card, shorthand style that is **NOT** a word for word copy of the source material.
4. Provide base lookup tables for some generators for DMs that prefer to roll real dice or have the players roll.
5. Include references to the source materials so DMs can find more information quickly and efficiently.




### Scope
The scope of this project is to create an EncounterPlus module that provides D&D5e dungeon masters (DMs) with a variety of rules, reference materials, tools, generators, and templates designed to aid in the planning and execution of a D&D5e gaming session.

The **DOC** module is a imported into and run by the EncounterPlus VTT application on Apple iOS and Mac OS powered devices. It is not a standalone application.

*EncounterPlus, and as a result the DM Operations Center module, is not available for Android or Windows based devices.*




### Users
The **DOC** module is designed and developed for the following users:

**Dungeon Masters**. DMs will find references to common rules, lookup tables, random content generators, and templates they can use to:
- plan their D&D5e campaigns & adventures;
- reference D&D5e rules to help make rulings on situations that arise in-game;
- use roll tables and random generators to create content for their games;
- use templates to help plan their campaigns and manage their sessions.




### User Stories
This document uses **user stories** to define the functional and non-functional requirements of the module. 



#### Format
The user stories are short statements that utilize the following format:

| Format                                          | Example                                                                                                          |
|:------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| **As a USER, I want to ..., so that I can ...** | As a DM, I want to know the source for the content on a page so that I can look it up for further clarification. |



#### Priority
All user stories shall be assigned a priority to classify the importance of a given requirement to the overall project.

| Priority | Description                                                                                                             |
|:---------|:------------------------------------------------------------------------------------------------------------------------|
| High     | The requirement is critical to the functionality of the module and must be implemented as soon as possible.             |
| Medium   | The requirement is important to the functionality of the module and should be implemented as soon as is reasonable.     |
| Low      | The requirement is not essential to the functionality of the module and may be implemented at the earliest convenience. |





## Functional User Stories
Functional user stories are simple statements that define the actions the user may perform and for what purpose. All functional user stories are related to a specific functional component or module feature.




### Campaign Manager
The following user stories define the expectations and requirements for this functional component of the DM Operations Center module.



#### Common
The following user stories apply to one or more of this component's features.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Session 0 Checklist
The **Session 0 Checklist** feature is a page template that DMs can use to plan a Session 0 to ensure the players and dungeon master agree on a common set of ground rules regarding a wide range of important topics.

| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Session Planner
The **Session Planner** feature is a page template that DMs can use to plan and execute a D&D session in a manner heavily influenced by Sly Flourish's Return of the Lazy Dungeon Master.

| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Fantasy Calendar
The **Fantasy Calendar** feature is a page template that DMs can use to track the passage of time in a number of official game settings as well as in their own, homebrew world.

| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||




### Dungeon Master's Screen
The following user stories define the expectations and requirements for this functional component of the DM Operations Center module.



#### Common
The following user stories apply to one or more of this component's features.
| Name              | User Story                                                                                                       |Priority|
|:------------------|:-----------------------------------------------------------------------------------------------------------------|:-------|
| External Data     | Data should be externalized & modeled using JSON files in the assets/data directory & not included in the code.  | High   |
| External Functions| Common functions used across multiple generators should Be externalized & called to avoid duplication of code.   | Medium |




### Random Generators
The following user stories define the expectations and requirements for this functional component of the DM Operations Center module.



#### Common
The following user stories apply to one or more of this component's features.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Encounter Generator
The **Encounter Generator** feature creates randomly generated encounters for players based on their current location.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Environment| As a DM, I want to select the player's current environment so that the encounter fits the player's current location in the world.     | High   |
| Select Tier       | As a DM, I want to select the player's current tier of play so that the encounter is appropriate for their level.                     | High   |
| Option Noncombat  | As a DM, I want an option to generate noncombat options so that I can present alternate skill and social challenges.                  | Medium |
| Display Members   | As a DM, I want to see the participants (with links) so that I can quickly add them to the initiative tracker.                        | High   |
| Display Scaling   | As a DM, I want to see notes on how to adjust the balance so that I can tailor the encounter to different sized parties.              | Low    |
| Display Scenario  | As a DM, I want to see prompts for different scenarios so that I can create more engaging noncombat encounters.                       | Low    |



#### Book Generator
The **Book Generator** feature creates randomly generated books for a variety of topics.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Tier       | As a DM, I want to select the tier of play of the book's owner so that the generated books are appropriate for that owner.            | High   |
| Select Source     | As a DM, I want options for things like bookstore, library, arcanist so that I can have books themed for different sources.           | Low    |
| Option Candlekeep | As a DM, I want an option to include the books from Candlekeep Mysteries so that I can use these adventures in a different way.       | Low    |
| Multiple Choice   | As a DM, I want to see multiple choices so that I can simulate a single book, a bookstore or bookcase.                                | Medium |
| Display Title     | As a DM, I want a title so that I can relay that to the players.                                                                      | High   |
| Display Summary   | As a DM, I want a summary of the book's contents and focus so that I can relay that to the players.                                   | High   |
| Display Author    | As a DM, I want the name of the author so that I can relay that to the players.                                                       | High   |
| Display Appearance| As a DM, I want a description of the book's appearance so that I can relay that to the players.                                       | High   |
| Display Condition | As a DM, I want a description of the book's condition so that I can relay that to the players.                                        | High   |
| Display Code      | As a DM, I want to get the HTML/CSS code for the content so that I can copy/paste it into a new page in my campaign.                  | Low    |



#### Location Generator
The **Location Generator** feature creates randomly generated locations based on different criteria.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Loot Generator
The **Loot Generator** feature creates randomly generated loot for a variety of containers.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Tier       | As a DM, I want to select the tier of play of the loot's owner so that the generated loot is appropriate for that owner.              | High   |
| Select Source     | As a DM, I want options for things like backpacks, pockets, crates, etc so that I can have loot for different sources.                | High   |
| Display Items     | As a DM, I want to see a list of items (with links) appropriate to that source so that I have options for the players to find.        | High   |



#### Magic Item Generator
The **Magic Item Generator** feature creates randomly generated magic item from existing items.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Rarity     | As a DM, I want to select the rarity of the item so that I am only presented with items appropriate for the creature, area.           | High   |
| Select Type       | As a DM, I want to select the type of the item so that I can choose an item based on the type of item I want to find.                 | High   |
| Random Choice     | As a DM, I want the generator to choose an option if I do not select one so that I can focus on those choices I care about.           | Low    |
| Display Items     | As a DM, I want to see a list of items (with links) so that I can choose the best item for the situation and players.                 | High   |



#### Name Generator
The **Name Generator** feature creates randomly generated names based on various cultures and races.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Gender     | As a DM, I want to select the feminity/masculinity of the name so that I get a name that matches the preferred gender the NPC.        | High   |
| Select Culture    | As a DM, I want to select the culture of the name so that I get a name that matches the origins of the NPC.                           | High   |
| Option Child      | As a DM, I want the option to denote the NPC is a child so that the generated name uses that culture's conventions for child names.   | Medium |
| Order Names       | As a DM, I want names to reflect the first/last order of their culture so that the culture is represented accurately.                 | Medium |
| Display Names     | As a DM, I want to see a list of names based on my selected options so that I can choose the one I like the best.                     | High   |



#### NPC Generator
The **NPC Generator** feature creates randomly generated NPCs including rivals and villains.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Gender     | As a DM, I want to select the feminity/masculinity of the name so that I get a name that matches the preferred gender the NPC.        | High   |
| Select Culture    | As a DM, I want to select the culture of the name so that I get a name that matches the origins of the NPC.                           | High   |
| Select Class      | As a DM, I want to select the class of the NPC so that I can easily create a guard, gladiator, veteran, scout, etc.                   | Medium |
| Random Choice     | As a DM, I want the generator to choose an option if I do not select one so that I can focus on those choices I care about.           | Low    |
| Option Child      | As a DM, I want the option to denote the NPC is a child so that the generated name uses that culture's conventions for child names.   | Medium |
| Order Names       | As a DM, I want names to reflect the first/last order of their culture so that the culture is represented accurately.                 | Medium |
| Display Code      | As a DM, I want to get the HTML/CSS code for the content so that I can copy/paste it into a new page in my campaign.                  | Low    |



#### Plot Hook Generator
The **Plot Hook Generator** feature creates randomly generated encounters for players based on their current location.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Tier       | As a DM, I want to select the player's current tier of play so that the plot hook is appropriate for their level.                     | High   |
| Select Source     | As a DM, I want options for things like rumors, notice boards, dreams, etc so that I have options for different sources.              | Low    |
| Display Hooks     | As a DM, I want to see a list of hooks so that can choose one that I like or present multiple options.                                | High   |
| Display Code      | As a DM, I want to get the HTML/CSS code for the content so that I can copy/paste it into a new page in my campaign.                  | Low    |



#### Settlement Generator
The **Settlement Generator** feature creates randomly generated settlements with name, demographics and locations.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Type       | As a DM, I want to select the type of the settlement so that I can generate a settlement that fits the settlement size I need.        | High   |
| Select Culture    | As a DM, I want to select the culture of the settlement so that I can generate a name that matches that culture.                      | High   |
| Generate Pop.     | As a DM, I want the tool to generate a pop. based on Medival Demographics Made Easy so that I don't have know what is appropriate.    | High   |
| Generate Area     | As a DM, I want the tool to generate land area based on Medival Demographics Made Easy so that I don't have know what is appropriate. | High   |
| Select Diversity  | As a DM, I want to select a diversity preset so that I can generate realistic demographics without having to determine it manually.   | Medium |
| Adjust Diversity  | As a DM, I want to refine the racial diversity of the settlement so that I can increase or decrease representation of some races.     | Low    |
| Display Name      | As a DM, I want to generate a name based on the select culture so that it can match the region where it will be placed.               | High   |
| Display Details   | As a DM, I want to see the population, area, diversity, and trades so that I can reference it quickly if needed.                      | High   |
| Display Diversity | As a DM, I want to see the breakup of the different races so that I can describe the people in a consistent manner.                   | Medium |
| Display Trades    | As a DM, I want to see the trades available in the settlement so that I know what services are available to the players.              | Medium |
| Adjust Trades     | As a DM, I want to refine the availability of trades so that I can tailor available services to specific needs.                       | Low    |
| Display Code      | As a DM, I want to get the HTML/CSS code for the content so that I can copy/paste it into a new page in my campaign.                  | Low    |


#### Shop Generator
The **Shop Generator** feature creates randomly generated stores for players to spend their hard earned coin.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| This feature has not yet been defined.                                                                                                                           |||



#### Spellbook Generator
The **Spellbook Generator** feature creates randomly generated spellbooks with spells based on level and school.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Level      | As a DM, I want to select the maximum spell level so that the spells in the book represent the owner's highest spell level.           | High   |
| Select School     | As a DM, I want to select the school of magic for the owner so that the spellbook represent the owner's specialties.                  | High   |
| Display Owner     | As a DM, I want the name of the owner so that I can relay that to the players, if not already known.                                  | Medium |
| Display Appearance| As a DM, I want a description of the book's appearance so that I can relay that to the players.                                       | Medium |
| Display Condition | As a DM, I want a description of the book's condition so that I can relay that to the players.                                        | Medium |



#### Trap Generator
The **Trap Generator** feature creates randomly generated traps for players to encounter in various locations and settings.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Danger     | As a DM, I want to select the danger level for the trap so that I can control the impact the trap has on the party.                   | High   |
| Select Tier       | As a DM, I want to select the player's current tier of play so that the encounter is appropriate for their level.                     | High   |



#### Treasure Generator
The **Treasuer Generator** feature creates randomly generated loot of various types and from a variety of sources.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select CR Level   | As a DM, I want to select the challenge rating of the owning monster so that the loot is appropriate for it's previous owner.         | High   |
| Select Type       | As a DM, I want to select the type of loot so that I can generate loot for individuals, hoards, bookcases, desks, etc.                | High   |
| Adjust Percentages| As a DM, I want to adjust the percentge yields of money, gems, and magic items, so that I can customize the output.                   | Medium |



#### Weather Generator
The **Weather Generator** feature creates randomly generated weather for players to encounter in various environments.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Select Danger     | As a DM, I want to select the danger level for the trap so that I can control the impact the trap has on the party.                   | High   |
| Select Tier       | As a DM, I want to select the player's current tier of play so that the encounter is appropriate for their level.                     | High   |




## Non-functional User Stories
Non-functional user stories are simple statements that define the aspects of the module that do not relate to a specific component or feature. They define how the module should look, interact with other systems, be managed, etc.




### User Interface
The following user stories define the expectations and requirements for user interface for the DM Operations Center module.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Title             | As a DM, I want the title of the page to use a readable style so that I can quickly identify the name of the page I am viewing. .     | High   |
| Breadcrumbs       | As a DM, I want to know the path to the content being view so that I can locate it again or navigate up one or more levels.           | High   |
| References        | As a DM, I want to know the source and page for the content of a page so that I can look it up if I need further clarification.       | High   |
| Responsive Design | As a DM, I want the UI to adjust to the size of the window so that it is usable regardless of how I open the module.                  | High   |
| Show Table        | As a DM, I want to be able to view the underlying roll table(s) for a generator so that I can roll real dice or let the players roll. | High   |




### External Interfaces
The following user stories describe how the module should interact with external interfaces.
| Name              | User Story                                                                                                                            |Priority|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-------|
| Items             | As a DM, I want items referenced in the module to link to the compendium so that I can look up it's properties and description.       | High   |
| Monsters          | As a DM, I want monsters referenced in the module to link to the compendium so that I can look up it's properties and description.    | High   |
| Spells            | As a DM, I want spells referenced in the module to link to the compendium so that I can look up it's properties and description.      | High   |
| Missing Objects   | As a DM, I want to know if a reference item, monster, or spell is not in my compendium so that I don't waste time clicking the link.  | Medium |
| Rolls             | As a DM, I want the ability to use the in-app roller for any rolls called out on pages so that I can send them to the game log.       | High   |



### Storytelling
This component of the DM Operations Center provides a number of random generators and roll tables designed to help DMs quickly generate new events, plot hooks, villains, rivals, and other story elements.

