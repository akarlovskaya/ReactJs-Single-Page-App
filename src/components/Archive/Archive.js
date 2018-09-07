import React from 'react';
import './archive.css';

class Archive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        events: [
        {   id: 1,
            date: 'October 2017',
            city: 'Montreal',
            details: ['Speakers', 'Schedule', 'Sponsors']
        },
        {   id: 2,
            date: 'May 2017',
            city: 'Vancouver',
            details: ['Speakers', 'Schedule', 'Sponsors']
        },
        {   id: 3,
            date: 'March 2016',
            city: 'Toronto',
            details: ['Speakers', 'Schedule', 'Sponsors']
        }],
        archiveIsShown: true
    }
  }

  clickHandler = (e) => {
      const toggle = this.state.archiveIsShown;

      this.setState({
          archiveIsShown: !toggle
      });
  }


  render() {
      const [ events ] = this.state.events;
      let listOfEvents = null;

      if (this.state.archiveIsShown) {
          listOfEvents = (
              <ul  className="archive__events">
                  {
                      this.state.events.map(event => {
                          return(
                              <li key={event.id}>
                                  <ArchiveEvent
                                      eventData={event}

                                  />
                              </li>
                          )
                      })
                  }
              </ul>
          )
      }

      return (
          <div className="archive">
              <p>Semper debitis ex, id dolore accusam sed. Pro ad posse doctus, ridens prompta nam ex, cu cum suas mazim. Cu verear dissentiunt vix, ne affert graeco democritum sea. Sit nonumes verterem corrumpit id, altera latine has ex, no usu nobis propriae liberavisse. Et alienum hendrerit dissentiet sed. Wisi natum salutatus sed an. No vis reque rationibus, an alterum feugiat eum. Mei iudico salutandi vituperata ea, est ad illud harum oportere. Maluisset imperdiet torquatos eum at, ne pro tamquam oblique sententiae. Et virtute inimicus has. Quo at meis vulputate.</p>
              <p>See our events below</p>
              <button onClick={this.clickHandler} className="btn btn-primary btn-sm">
                  {
                    !this.state.archiveIsShown ? 'Show archive' : 'Hide archive'
                  }
              </button>
              {listOfEvents}
          </div>

      );
  }
}

export default Archive;

const ArchiveEvent = (props) => {
    // console.log(props.eventData);
    const { id, date, city, details } = props.eventData;

    return(
        <React.Fragment>
            <FancyWrapper>
                <h3>{`${city}, ${date}`}</h3>
            </FancyWrapper>
                <ul>
                    {
                        details.map(detail => {
                            return (
                                <li key={detail}>
                                    <a href="#">{detail}</a>
                                </li>
                            )
                        })
                    }
                </ul>

        </React.Fragment>
    )
}

// practicing to use {props.children}
function FancyWrapper(props) {
    const FancyWrapperStyle = {
        padding: '10px',
        marginBottom: '5px'
    }

    return (
        <div style={FancyWrapperStyle} className="gradient">
            {props.children}
        </div>
    )

}
