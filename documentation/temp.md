I am starting to work on the next big step in the development of my DM Ops module, roll tables. Before I go down the road too far though, I wanted to get a sanity check first.

**Roll Dice**: Is it possible to call the built-in roller via javascript and store the value in a variable or call a variable that ia available publicly?

**Roll Tables**: My plan is to create the roll tables as external JSON files in "assets/data/tablename.json". Right now I have the data embedded in an array and think it'll be best to externalize it.

**Find Result**: Query the JSON table and use the roll result to locate the appropriate row. Only, I'm wondering what would be more easier and more efficient?

- ***Lo & Hi Values***: { "TableName1": [ { "lo":"01","hi":"20","html":"Text" }, ... ] }
- ***Range***: { "TableName1": [ { "range":"01-20","html":"Text" }, ... ] }

Last but not least, in addition to externalizing the tables into their own JSON files, I'm wondering if there is any benefit or drawback to creating independent js files for common functions or simply putting all of the functions into the custom.js file. I'm thinking there might be advantages to creating separate js files like:

- nameGenerator.js
- rollTable.js



Leoincendia: 