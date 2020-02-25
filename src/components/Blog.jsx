import React from "react";
import blog1 from "../Blog/InternetWork";
const Blog = () => {
  return (
    <div>
      <div class="header">
        <h1>{blog1.header}</h1>
      </div>

      <div className="article-data">
        <div>
          {blog1.questions.map(k => (
            <div>
              <h4>{k.Q}</h4>
              <p>{k.A}</p>
            </div>
          ))}
        </div>
        {blog1.keyPoints.length > 0 && (
          <ul>
            {blog1.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        )}
        <h4>Resources</h4>
        <ul>
          {blog1.resources.length > 0 &&
            blog1.resources.map((k, i) => <li key={i}>{k}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
