<h1>Done Deal - Task Management API 📌📑</h1>

<p>🔎 Done Deal is a simple Task Management API built with Node.js and Express, designed to help you efficiently manage tasks. ✅</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (v14 or higher)</li>
    <li><a href="https://www.npmjs.com/">npm</a> (Node package manager)</li>
</ul>

<h3 id="installation">Installation</h3>
<p>To get a local copy of the project up and running, follow these steps:</p>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/giuliamelao/Done-Deal.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd Done-Deal</code></pre>
    </li>
    <li>Install the required dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>(Optional) Configure environment variables if needed. You might want to create a <code>.env</code> file and set up any necessary configurations.</li>
    <li>Start the server:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h2 id="api-endpoints">API Endpoints</h2>
<p>Here are the available endpoints for the API:</p>

<h3>Authentication</h3>
<ul>
    <li><strong>POST</strong> <code>/auth/register</code>: Register a new user.</li>
    <li><strong>POST</strong> <code>/auth/login</code>: Log in with an existing user.</li>
</ul>

<h3>Task Management</h3>
<ul>
    <li><strong>GET</strong> <code>/tasks</code>: Retrieve all tasks.</li>
    <li><strong>POST</strong> <code>/tasks</code>: Create a new task.</li>
    <li><strong>GET</strong> <code>/tasks/:id</code>: Retrieve a specific task by ID.</li>
    <li><strong>PUT</strong> <code>/tasks/:id</code>: Update a specific task by ID.</li>
    <li><strong>DELETE</strong> <code>/tasks/:id</code>: Delete a specific task by ID.</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! If you would like to propose major changes, please open an issue to discuss your ideas first.</p>

<h3>How to Contribute</h3>
<ol>
    <li>Fork the repository.</li>
    <li>Create your feature branch:
        <pre><code>git checkout -b feature/YourFeature</code></pre>
    </li>
    <li>Commit your changes:
        <pre><code>git commit -m "Add your message here"</code></pre>
    </li>
    <li>Push to the branch:
        <pre><code>git push origin feature/YourFeature</code></pre>
    </li>
    <li>Open a Pull Request.</li>
</ol>

<h2 id="license">License</h2>
<p>This project is licensed under the ISC License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
