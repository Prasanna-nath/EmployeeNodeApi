import pgPromise from "pg-promise";

const pg = pgPromise({});

export const db = pg("postgres://postgres:Prasanna@1999@localhost:5432/api");
