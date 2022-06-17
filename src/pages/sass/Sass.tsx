import "./sass.css";

export default function Sass() {
  return (
    <div className="sassContainer">
      <div className="sassTitle">
        <h1>SASS</h1>
        <div className="sassButtonRow">
          <button>Hello</button>
          <button className="success">Success</button>
          <button className="error">Error</button>
          <button className="warning">Warning</button>
        </div>
        <div className="sassCardRow">
          <div>Hello</div>
          <div className="success">Success</div>
          <div className="error">Error</div>
          <div className="warning">Warning</div>
        </div>
      </div>
    </div>
  );
}
