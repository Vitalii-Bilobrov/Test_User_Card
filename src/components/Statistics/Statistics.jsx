import css from './Statistics.module.css';

import { Component } from 'react';

export class Statistics extends Component {
  state = {
    tweets: 0,
    followers: 100500,
    follow: true,
  };

  onClick = () => {
    const { follow, followers } = this.state;

    if (follow) {
      this.setState({ followers: followers + 1, follow: !follow });
    } else {
      this.setState({ followers: followers - 1, follow: !follow });
    }
  };

  render() {
    return (
      <div className={css.StatisticsBlock}>
        <div className={css.TweetsBlock}>
          <div>777</div>
          <span>TWEETS</span>
        </div>
        <div className={css.FollowersBlock}>
          <div>{this.state.followers}</div>
          <span>FOLLOWERS</span>
        </div>
        <button
          type="button"
          onClick={this.onClick}
          className={this.state.follow ? css.Button : css.Button_green}
        >
          {this.state.follow ? 'FOLLOW' : 'FOLLOWING'}
        </button>
      </div>
    );
  }
}
