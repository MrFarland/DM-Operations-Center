---
name: Character Name Generator
slug: character-name-generator
---
### Character Name Generator
Use the following generator to quickly generate a few names.

<input type="button" id="btnGenerate" value="Populate DropDownList" onclick="PopulateDropDownList()" />
    <hr />
    <select id="ddlCustomers">
    </select>
    <script type="text/javascript">
        function PopulateDropDownList() {
           //Build an array containing Customer records.
            var customers = [
                { CustomerId: 1, Name: "John Hammond", Country: "United States" },
                { CustomerId: 2, Name: "Mudassar Khan", Country: "India" },
                { CustomerId: 3, Name: "Suzanne Mathews", Country: "France" },
                { CustomerId: 4, Name: "Robert Schidner", Country: "Russia" }
            ];
           
            var ddlCustomers = document.getElementById("ddlCustomers");
           
            //Add the Options to the DropDownList.
            for (var i = 0; i < customers.length; i++) {
                var option = document.createElement("OPTION");
 
                //Set Customer Name in Text part.
                option.innerHTML = customers[i].Name;
 
                //Set CustomerId in Value part.
                option.value = customers[i].CustomerId;
 
                //Add the Option element to DropDownList.
                ddlCustomers.options.add(option);
            }
        }
    </script>