const hbs = `
<div class="container">
  <div class="row">
    <div class="col-12">
      <h5>Contacts</h5>
      <ul>
        <li>{{contact1}}</li>
        <li>{{contact2}}</li>
        <li>{{contact3}}</li>
      </ul>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Contacts',
  previewImageUrl: 'https://i.imgur.com/Pfa93By.png',
  category: 'contacts',
  defaultData: {
    contact1: 'Email: example@example.com',
    contact2: 'Phone: +1-555-555-5555',
    contact3: 'Address: 123 Main St, Anytown USA',
  },
  config: {
    contact1: {
      type: 'string',
      name: 'Contact 1',
      default: 'Email: example@example.com',
    },
    contact2: {
      type: 'string',
      name: 'Contact 2',
      default: 'Phone: +1-555-555-5555',
    },
    contact3: {
      type: 'string',
      name: 'Contact 3',
      default: 'Address: 123 Main St, Anytown USA',
    },
  },
};

export default block;
