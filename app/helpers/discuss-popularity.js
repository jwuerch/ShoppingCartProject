import Ember from 'ember';

export function discussPopularity(params/*, hash*/) {
  var discussion=params[0];
  if (discussion.get('comments').get('length') >2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"><span style="font-family:arial,sans-serif;margin-left:5px;position:relative;top:0px;">CoMmEnT CrAzY</span></span>')
  }

}

export default Ember.Helper.helper(discussPopularity);
