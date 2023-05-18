

const Blogs = () => {
    return (
        <div className="space-y-7 my-11">
          <div>
          <h1 className="font-semibold text-purple-600">
                1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h1>
            <p><span className="font-semibold  text-purple-600">Ans: </span> We can store access token and refresh token in the server side session. Access token has valid for a short amount of time. Once access token expire , client application can use refresh token to refreshing access token. Then client application get new refresh tokens.</p>
          </div>
            <div>
            <h1 className="font-semibold text-purple-600">
                2. Compare SQL and NoSQL databases?
            </h1>
            <p><span className="font-semibold text-purple-600">Ans: </span> SQL database are table based , NoSQL databases ar document , key, graph. NoSQl is better for unstractured data likes documents or JSON </p>
            </div>
            <div>
            <h1 className="font-semibold text-purple-600">
                3. What is express js? What is Nest JS?
            </h1>
            <p><span className="font-semibold text-purple-600">Ans: </span> Nest Js is a node.js framework for building server side application. It is based on javaScript. Express is a node.js web application framework . It provides a wide range a funcionality for constrating web and mobile applications</p>
            </div>
           <div>
           <h1 className="font-semibold text-purple-600">
              4. What is MongoDB aggregate and how does it work ?
            </h1>
            <p><span className="font-semibold text-purple-600">Ans: </span> Aggregation is a way of processing a large number of documents in a collection by means of passing them throght different stage. The stage is a pipeline can filter, sort modify documents that pass through the pipeline</p>
           </div>
        </div>
    );
};

export default Blogs;