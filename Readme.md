```markdown
# Problem Solving with TypeScript

This repository serves as a collection of solutions to various programming problems, implemented using TypeScript. Each file represents a distinct problem, showcasing different algorithms, data structures, and problem-solving techniques.

---

## Table of Contents

-   [Problem Solving with TypeScript](#problem-solving-with-typescript)
-   [Table of Contents](#table-of-contents)
-   [Project Structure](#project-structure)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Running Individual Problems](#running-individual-problems)
        -   [Using `ts-node-dev` (Recommended for Development)](#using-ts-node-dev-recommended-for-development)
        -   [Using `Node.js` (After Compilation)](#using-nodejs-after-compilation)
-   [Available Problems](#available-problems)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

---

## Project Structure

The project is organized with individual TypeScript files, each corresponding to a specific problem solution.

```

Problem\_solving/
├── Advanced-Sorting-by-Average-Grade.ts
├── Array-Filtering-and-Mappings.ts
├── Array-Reduction.ts
├── Find-and-Modify.ts
├── Function-Composition.ts
├── Leap-Year-Checker.ts
├── Object-Manipulation.ts
├── Sorting-Objects.ts
├── Total-Value-of-Products.ts
├── Unique-Values-From-Arrays.ts
├── tsconfig.json
└── README.md

````

-   `.ts` files: Contains the TypeScript code for each problem's solution.
-   `tsconfig.json`: TypeScript configuration file, defining compiler options for the project.
-   `README.md`: This file, providing project overview and instructions.

## Prerequisites

Before running any of the solutions, ensure you have the following installed:

* **Node.js**: A JavaScript runtime environment. You can download it from [nodejs.org](https://nodejs.org/).
    (Current version used in this project: `v22.16.0`)
* **TypeScript**: A superset of JavaScript that compiles to plain JavaScript.
    ```bash
    npm install -g typescript
    ```
* **ts-node**: A TypeScript execution environment for Node.js, enabling direct execution of TypeScript files.
    ```bash
    npm install -g ts-node
    ```
* **ts-node-dev**: A development tool that watches for changes in TypeScript files, compiles them, and restarts the Node.js application. Ideal for a smooth development workflow, especially for server-side applications.
    ```bash
    npm install -g ts-node-dev
    ```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/amdadulHQ/Problem_solving.git](https://github.com/amdadulHQ/Problem_solving.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Problem_solving
    ```
3.  **Install project dependencies (if any specific to the project, though for simple scripts, there might not be any beyond the global ones listed above):**
    ```bash
    # If your project had local dependencies, you would run:
    # npm install
    ```

### Running Individual Problems

You can run each problem solution using two methods: `ts-node-dev` for development and `node.js` for executing compiled JavaScript.

#### Using `ts-node-dev` (Recommended for Development)

This method automatically recompiles and restarts the script upon file changes, making it ideal for active development, especially when dealing with server-side logic or long-running processes. The `--respawn` flag ensures the process restarts on file changes, and `--transpile-only` speeds up development by skipping type checks.

To run a specific TypeScript file (e.g., `Advanced-Sorting-by-Average-Grade.ts`):

```bash
ts-node-dev --respawn --transpile-only Advanced-Sorting-by-Average-Grade.ts
````

If your file is named `server.ts` or `index.ts` and acts as the main entry point for a server:

```bash
ts-node-dev --respawn --transpile-only server.ts
```

Replace `Advanced-Sorting-by-Average-Grade.ts` or `server.ts` with the actual name of the `.ts` file you wish to execute.

#### Using `Node.js` (After Compilation)

This method involves explicitly compiling the TypeScript file to JavaScript first, and then running the resulting JavaScript file with Node.js. This is often used for production deployments or when you need strict control over the build output.

1.  **Compile the TypeScript file:**

    ```bash
    tsc Advanced-Sorting-by-Average-Grade.ts
    ```

    This command will generate `Advanced-Sorting-by-Average-Grade.js` in the same directory.

2.  **Execute the compiled JavaScript file:**

    ```bash
    node Advanced-Sorting-by-Average-Grade.js
    ```

    Replace `Advanced-Sorting-by-Average-Grade.js` with the name of the compiled `.js` file.

-----

## Available Problems

Here's a list of the problem solutions currently available in this repository:

  * `Advanced-Sorting-by-Average-Grade.ts`
  * `Array-Filtering-and-Mappings.ts`
  * `Array-Reduction.ts`
  * `Find-and-Modify.ts`
  * `Function-Composition.ts`
  * `Leap-Year-Checker.ts`
  * `Object-Manipulation.ts`
  * `Sorting-Objects.ts`
  * `Total-Value-of-Products.ts`
  * `Unique-Values-From-Arrays.ts`

*(You can add a brief description next to each file if you wish, e.g., "Advanced-Sorting-by-Average-Grade.ts - Demonstrates sorting an array of objects by a computed average.")*

-----

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a problem solution you'd like to add or improvements to existing ones, please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingProblem`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingProblem'`)
4.  Push to the Branch (`git push origin feature/AmazingProblem`)
5.  Open a Pull Request

-----

## License

Distributed under the MIT License. See `LICENSE` file (if you create one) for more information.

-----

## Contact

Amdadul Hoque - [rimonamdadul301@gmail.com] - [Linkedin](https://www.linkedin.com/in/Amdadul-Haque-Bhuiyan) - [GitHub Profile](https://github.com/Amdadul-HQ)


```
```