import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ServersList extends Component {
  @service auth;

  @tracked user = this.auth.currentUser;
  @tracked servers = this.user.servers;
}
