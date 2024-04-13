# Training Guide on the @workspace Command for Developers

## What is the @workspace Command?

The `@workspace` Command is a feature within Visual Studio Code that leverages AI to provide context-aware assistance to developers. It is a domain expert that can answer queries related to the specific context of your project's workspace. By understanding the files, classes, and components within your workspace, it can provide relevant suggestions, navigation help, and code fixes.

## How to Use the @workspace Command Effectively

### Step 1: Accessing the @workspace Command
To use the `@workspace` Command, you need to open the chat in Visual Studio Code and enter the `@` sign. You will then see a list of Commands, including `@workspace`, which you can select to focus the context on your project files.

### Step 2: Asking Questions
With the `@workspace` Command selected, you can ask questions about your codebase. For example, you can inquire where a specific component is being used, how to navigate to a particular class, or request explanations of certain parts of your code.

### Step 3: Understanding the Behind-the-Scenes Process
When you ask a question, the `@workspace` Command performs several steps to provide an accurate answer:
1. Indexes your project files using Blackbird and accesses GitHub's Knowledge Graph.
2. Performs a semantic search to return relevant code snippets and metadata.
3. Uses lexical text search over the local index for additional code insights.
4. Leverages VS Code's language intelligence for details like function signatures.
5. Summarizes the context and sends it to the large language model (LLM) for a response.

### Step 4: Using Slash Commands
Slash commands are shortcuts to specific functionalities provided by the `@workspace` Command. They help clarify your intent and streamline the process of getting assistance. Some examples include:
- `/explain`: Provides explanations for highlighted code or concepts.
- `/fix`: Suggests fixes for highlighted code with issues.
- `/new notebook`: Creates a new Jupyter notebook with a provided outline.

To use a slash command, simply type it in the chat, and the `@workspace` Command will interpret it within the context of your project.

### Step 5: Reviewing and Using Suggestions
Once you receive a suggestion or answer, you can review it and apply it directly to your code. The `@workspace` Command often provides actionable links or code snippets that you can insert into your files.

### Step 6: Managing Chat History
Your chat history with the `@workspace` Command is considered when providing answers. If you want to clear this history to start fresh, you can use the `clear` command. This will not affect your project files, only the chat history.

## Tips for Effective Development Workflow Integration

- **Familiarize Yourself**: Spend some time experimenting with the `@workspace` Command to understand its capabilities and limitations.
- **Be Specific**: The more context you provide in your queries, the more accurate the suggestions will be.
- **Use Slash Commands**: Leverage slash commands to quickly access the functionality you need without navigating through menus.
- **Review Suggestions**: Always review the suggestions and explanations provided to ensure they align with your project's needs.
- **Maintain a Clean History**: Clear your chat history when needed to prevent past queries from influencing current suggestions.

By integrating the `@workspace` Command into your development workflow, you can enhance your productivity and reduce the time spent searching for solutions to project-specific questions.