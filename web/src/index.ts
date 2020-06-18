import { Configuration, NotesApi, UsersApi } from './api/generated';

async function main() {
  const conf: Configuration = { basePath: 'http://localhost:3000' };

  const notes = new NotesApi(conf);
  const users = new UsersApi(conf);

  try {
    const res = await notes.findAll({
      pagination: {
        page: 1,
        results: 30,
        count: true,
      },
    });
    console.log(res.data.items);
  } catch (err) {
    console.error(err);
  }
}

main();
