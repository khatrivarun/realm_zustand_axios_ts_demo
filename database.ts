import Realm from 'realm';

const CountSchema = {
  name: 'Count',
  properties: {
    _id: 'int',
    count: 'int',
  },
  primaryKey: '_id',
};

let realm: Realm;

export const initRealm = async () => {
  realm = await Realm.open({
    path: 'count',
    schema: [CountSchema],
  });
};
