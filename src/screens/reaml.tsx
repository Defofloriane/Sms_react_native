import Realm from 'realm';

class Contact extends Realm.Object {}
Contact.schema = {
  name: 'Contact',
  properties: {
    recordID: 'string',
    uid: 'string?',
    thumbnailPath: 'string',
    givenName: 'string',
    familyName: 'string',
    hasThumbnail: {type: 'bool', default: false},
    phoneNumber: 'string',
  },
  primaryKey: 'recordID',
};

export default new Realm({schema: [Contact]});
