import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.validateNewUser((user) => {
    new SimpleSchema({
      _id: { type: String },
      emails: { type: Array },
      'emails.$': { type: Object },
      'emails.$.address': { type: String },
      'emails.$.verified': { type: Boolean },
      createdAt: { type: Date },
      services: { type: Object, blackbox: true }
    }).validate(user);

    // Return true to allow user creation to proceed
    return true;
  });
});
