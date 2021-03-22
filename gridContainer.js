class GridContainer extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          items: [
              {
                  "id":1,
                  "title":"Random Quote Generator",
                  "org":"freeCodeCamp",
                  "stack":"Web stack: CSS, HTML, React.",
                  "url":"https://codepen.io/tahsin09/full/rNWWqYq",
                  "tag":"a"
              },
              {
                  "id":2,
                  "title":"Tribute Page",
                  "org":"freeCodeCamp",
                  "stack":"A short story on A. P. J Abdul Kalam. Information retrieved from Wikipedia..",
                  "url":"https://codepen.io/tahsin09/full/ZVRYBG",
                  "tag":"b"
              },{
                  "id":3,
                  "title":"Survey Form",
                  "org":"freeCodeCamp",
                  "stack":"A survey form Design for the RESPONSIVE WEB DESIGN Project.",
                  "url":"https://codepen.io/tahsin09/full/VqVYmw",
                  "tag":"c"
              },{
                  "id":4,
                  "title":"Product Landing Page",
                  "org":"freeCodeCamp",
                  "stack":"A Product Landing Page of HP SpectreX360.",
                  "url":"https://codepen.io/tahsin09/full/axXKJo",
                  "tag":"d"
              },{
                  "id":5,
                  "title":"Technical Documentation Page",
                  "org":"freeCodeCamp",
                  "stack":"A replication of CodeCademy.",
                  "url":"https://codepen.io/tahsin09/full/zXLWOm",
                  "tag":"e"
              }
          ],
          visible: 3,
          error: false
      };
  }

  loadMore = () => {
      this.setState((prev) => {
      return {visible: prev.visible + 4};
      });
  }

  render() {
      const { items, visible } = this.state;
      const itemsList = items.slice(0, visible).map((item, index) => {
              return (
                  <div className="container tile fade-in" key={item.id}>
                      <div className={`img ${item.tag}`}></div>
                      <div className="content">
                              <h3 className="project-tile">{item.title}</h3>
                              <h4 className="orange">{item.org}</h4>
                              <p>{item.stack}</p>
                          <a href={item.url} target="_blank" className="project-tile"><button className="btn">View Project</button></a>
                      </div>
                  </div>                  
              );
              });
      const loadMore = visible < items.length && <center><button onClick={this.loadMore} type="button" className="load-more">Load more</button></center>;
          
      return (
      <div className="grid-container">
          <div className="tiles">{ itemsList }</div>
          <br/>
          { loadMore }
      </div>
      );
  }
}

ReactDOM.render(<GridContainer />, document.getElementById('grid-container'));