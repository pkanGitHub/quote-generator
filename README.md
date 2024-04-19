# Quote Generator



# Pages

## /home-page aka just /
- Landing page.
- Prompts to get a random quote.
- Button that takes to /gen_quote.

## /gen-quote
- Generates a random quote.
  - Generate a random number between 1 and `count`, called `qnum`. Where `qnum` == id, print the quote and author.
- Not topic specific.
- Probably make the quote a variable size (like percentage) because the quotes vary so much in size.
- Button that takes to /gen_quote aka refreshes the page.

## /add-quote
- Prompts user to add their own quote to the quote pool.
- 2 textboxes: one for the quote and another for the user to enter their name.
- A dropdown box for the user to choose what topic the quote fits in (inspirational, funny, depressing, or love).
- Submit button.
  - On click, first check that none of the three inputs are null.
    - If any are null, provide error message: "Please fill out all boxes."
  - Then, check the variable `count`.
  - Add to database where id: `count`+1, and quote, author, and topic are as inputted.
  - On success, increase the variable `count` by 1 and produce a message that shows it was a success.

## /quote-list
- Gives a list of all the quotes in our database.
 
## /about
- Page with text about us!
