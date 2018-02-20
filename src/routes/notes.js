
const model = require('../../models');

module.exports = [
  {
    method: 'GET',
    path: '/getNotes',
    handler: (request, response) => {
      model.notes.findAll().then((data) => {
        const datatosend = [];
        for (let i = 0; i < data.length; i += 1) {
          const obj = {
            title: data[i].title,
            note: data[i].note,
            notesid: data[i].notesid,
          };
          datatosend.push(obj);
        }

        response(datatosend).code(200);
      });
    },

  },
  {
    method: 'POST',
    path: '/syncNotes',
    handler: (request, response) => {
      model.notes.destroy({ where: {} }).then(() => {
        // console.log('here');
        const data = JSON.parse(request.payload);
        // console.log(data);
        model.notes.bulkCreate(data).then(() => {
          console.log('done!');
          response('Data synced').code(201);
        }).catch(() => { response('Insert Failed').code(200); });
      }).catch(() => { response('Insert Failed at delete old').code(200); });
    },
  },
];
