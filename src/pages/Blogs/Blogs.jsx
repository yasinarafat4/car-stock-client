import useSetTitle from "../../hooks/useTitle";

const Blogs = () => {
  useSetTitle("Blogs");

  return (
    <div className="p-4 dark:bg-slate-900 dark:text-slate-300">
      <h2 className="ms-4 text-start text-4xl font-bold my-5 text-[#2E5879] dark:text-slate-300">
        Frequently Asked Questions
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 dark:bg-slate-900 dark:text-slate-300"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client side?
        </div>
        <div className="collapse-content">
          <p className="mb-2">
            # An access token is a security credential that is issued to a
            client (such as a web or mobile application) after successful
            authentication. It is used to authorize and access protected
            resources on the server.
          </p>
          <p className="mb-2">
            # A refresh token is a separate token that is used to obtain a new
            access token without requiring the user to re-authenticate.
          </p>

          <p className="mb-2">
            Access tokens are typically short-lived and are sent with each
            request to the server to prove the client's identity and
            permissions. They are usually stored in the client's browser memory
            or local storage. Refresh tokens, on the other hand, are securely
            stored on the server and are only exchanged for a new access token
            when needed.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 dark:bg-slate-900 dark:text-slate-300"
      >
        <div className="collapse-title text-xl font-medium">
          2. Compare SQL and NoSQL databases.
        </div>
        <div className="collapse-content">
          <p className="mb-2">
            SQL and NoSQL are two different types of database systems.
          </p>

          <p className="mb-2 ms-2">
            # SQL databases, also known as relational databases, are based on a
            structured schema and use SQL (Structured Query Language) for
            defining and manipulating data. They provide strong data
            consistency, support complex joins, and are suitable for complex
            relationships and transactions. Examples of SQL databases include
            MySQL, PostgreSQL, and Oracle.
          </p>
          <p className="mb-2 ms-2">
            # NoSQL databases, also known as non-relational databases, do not
            use a fixed schema and are more flexible in handling unstructured
            and semi-structured data. They offer high scalability, horizontal
            scaling, and better performance for certain use cases. NoSQL
            databases come in various types, such as document databases (
            MongoDB), key-value stores (Redis), columnar databases ( Cassandra),
            and graph databases (Neo4j).
          </p>
          <p className="mb-2">
            The choice between SQL and NoSQL databases depends on the specific
            requirements of our application, such as data structure,
            scalability, and performance needs.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 dark:bg-slate-900 dark:text-slate-300"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p className="mb-2">
            # Express.js is a popular web application framework for Node.js. It
            provides a simple and minimalist approach to building web servers
            and APIs. Express.js allows us to handle HTTP requests, define
            routes, and process middleware functions for handling requests and
            responses. It is highly extensible and can be combined with various
            middleware and libraries to build robust web applications.
          </p>
          <p className="mb-2">
            # Nest.js is a progressive Node.js framework for building scalable
            and efficient server-side applications. It is built on top of
            Express.js and provides additional features and architectural
            patterns inspired by Angular. Nest.js emphasizes modularity, and
            dependency injection, and uses TypeScript as its primary language.
            It is designed to make building complex applications more structured
            and maintainable.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2 dark:bg-slate-900 dark:text-slate-300"
      >
        <div className="collapse-title text-xl font-medium">
          4. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p className="mb-2">
            MongoDB aggregate is a powerful feature in the MongoDB database that
            allows us to perform advanced data processing and analysis
            operations on the documents in a collection. It provides a way to
            perform complex queries, transformations, aggregations, and
            calculations in a single operation.
          </p>

          <p className="mb-2">
            The aggregate pipeline in MongoDB consists of multiple stages, each
            performing a specific data manipulation task. These stages can
            include operations like filtering documents, grouping data, sorting,
            projecting fields, performing calculations, joining data, and more.
          </p>

          <p className="mb-2">
            Using the aggregate framework, we can efficiently process and
            analyze large datasets, perform complex calculations, and generate
            aggregated results based on specific criteria. It provides a
            flexible and powerful tool for working with data in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
