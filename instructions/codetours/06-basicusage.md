# 1.) Q&A Comment with Copilot demo (Python)

- Open exercise\python\demo.py
- Show an example of Copilot suggestions by typing a Q&A Comment with the following format.
- As soon as you type the section `# Answer:` Copilot will suggest a response.

```
# Question: What are the popular JavaScript frameworks?
# Answer: <Show how Copilot generates an answer>
```

GitHub Copilot goes beyond simple autocompletion; it predicts and suggests full lines or blocks of code. Instead of one word at a time, it offers the best answers to your coding queries.

# 2.) JavaScript - Generate a revers string function

- Open exercise\javascript\demo.js
- Write a comment at the top that will accept a string and returns the string in reverse.

  `// Generate a function that will accept a string and return the string in reverse`

# 3.) Javascript - Generate a simple calculator

- Open exercise\javascript\demo.js
- Delete the existing code and comment at the top.
- Write a new comment at the top that will accept two numbers and an operator and return the result.

## Writing a vague comment.

**Vague request**
`// Generate a function that will perform calculations`

**Specific request**
`// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.`

**Additional Suggestions**
Delete the existing code, leaving the comments. Place your cursor at the end of the comment and press enter and wait until copilot generates a partial suggestion. Press Ctrl - Right Arrow to move to the next suggestion, and stop when in a suitable place. Then press Ctrl+Enter to view additional suggestions. Note that there isn't always an additional suggestion that Copilot can provide.

## 5.) Refactoring and using Developer’s intuition

As a developer, you may know another way that the code can be written, but you're not sure about the syntax. Copilot can help you with that.
Let's say you know about the eval() built-in function in JavaScript, but you're not sure how to use it. Highlight the function and press Ctrl+i.
In the inline-chat Window, type `refactor this code using eval()`, then let's see what Copilot suggests.

Let's test Copilot if it can understand my request in Tagalog.

// Gumawa ka ng function na tumatanggap ng salita o sintensya at ibalik ang bilang ng mga letra. Huwag isama ang space.
// Halimbawa: "Hello" ay may 5 na letra.

## 6.) Context from Adjacent files

Talking Point: GitHub Copilot can give better suggestions the more context you provide it. Besides using clear comments, meaningful names for functions and variables, having related files open can also help GitHub Copilot to generate more relevant suggestions.
Instructions: Close all tabs, except demo.js
Delete all contents of the file, then paste this comment at the top.
Tip: Press Alt-Z to wrap long text. (VS Code)
// Generate a function that will accept two numbers and an arithmetic operator. The function will perform the operation between the numbers and return the result.
Talking Point: Let's look again at the recommended code. I'll take a screenshot of this one, then let's compare it with another recommendation when we open another file that might influence Copilot to suggest differently.
Note: The intention is to show Copilot suggestion with and without context from a neighbouring file.
