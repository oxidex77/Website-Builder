const hbs = `
<div class="container">
  <div class="row">
    <div class="col-12">
    <center><h5 class="name">{{title}}</h5></center>
      <table class="table">
        <thead>
          <tr>
            {{#each columns}}
            <th>{{this}}</th>
            {{/each}}
          </tr>
        </thead>
        <tbody>
          {{#each rows}}
          <tr>
            {{#each this}}
            <td>{{this}}</td>
            {{/each}}
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Table',
  previewImageUrl: 'https://i.imgur.com/FLu8b56.png',
  category: 'table',
  defaultData: {
    title: 'Sample Table',
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
      ['Row 1, Cell 1', 'Row 1, Cell 2','Row 1, Cell 1',],
      ['Row 2, Cell 1', 'Row 2, Cell 2','Row 1, Cell 1',],
      ['Row 1, Cell 1', 'Row 1, Cell 2','Row 1, Cell 1',]
    ]
  },
  config: {
    title: {
      type: 'string',
      name: 'Table Name',
    },
    columns: {
      type: 'string',
      name: 'Columns',
      of: {
        type: 'string',
        name: 'Column Name',
        default: '',
      },
    },
    rows: {
      type: 'string',
      name: 'Rows',
      of: {
        type: 'string',
        name: 'Cells',
        default: ['', ''],
        of: {
          type: 'string',
          name: 'Cell Value',
          default: '',
        },
      },
    },
  },
};

export default block;
