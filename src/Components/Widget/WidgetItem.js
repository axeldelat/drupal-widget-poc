import React from 'react';

export default class WidgetItem extends React.Component {
  render() {
    return (
      <div className='widget__card'>
        <h2>{this.props.attributes.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />
      </div>
    );
  }

}