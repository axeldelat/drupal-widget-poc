import React from 'react';
import WidgetItem from './WidgetItem';

const membershipName = {
  3 : "Basic",
  4 : "Pro"
}

export default class WidgetList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      membership: 3,
    };
  }

  
  render() {
    
    
    let { data } = this.props;
    return (
      <div>
        <h1>⬇️ Widget List ⬇️</h1>
        <h2>User: {membershipName[this.state.membership]}</h2>
        <button onClick={() => this.setState({ membership: 3 })}>
          View Basic
        </button>
        <button onClick={() => this.setState({ membership: 4 })}>
          View Pro
        </button>
        {
        Boolean(data) ?
        // this.state.membership == 'Basic' ?
          // data.map(item => <WidgetItem {...item} key={item.id}/>)
          data.filter((widget) => widget?.relationships?.field_membership?.data?.meta?.drupal_internal__target_id === this.state.membership).map(item => <WidgetItem {...item} key={item.id}/>)
          :
          <div>No Widgets found.</div>
        }
      </div>
    );
  }
}