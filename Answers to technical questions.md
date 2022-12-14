1\. I probably spent about 10 hours in total, the initial HTML structure and Javascript call to API didn't take too long, but I spent a while on styling.

2\. I would maybe add a dropdown menu for the Country codes, or return the full country name in the result, rather than the Alpha-2 code, for a better user experience.

3\. I found the API easy to work with, I thought the data it returned was easy to read and access. The only critique I found is that it does accept any string of letters as an input and will give a 200 status but age will be 'null'. I wondered if returning a 404 would be better if the name does not exist in their data.
