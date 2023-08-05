import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
 
// const connectionString = "postgres://default:eJRZ9n2Ovuzm@ep-young-cloud-718602.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require";
// const sql = postgres(connectionString, { max: 1 })
// const db = drizzle(sql);
 
const DATABASE_URL="postgres://default:eJRZ9n2Ovuzm@ep-young-cloud-718602.us-east-1.postgres.vercel-storage.com:5432/verceldb";
const runMigrate = async () => {
	if (!DATABASE_URL) {
		throw new Error('DATABASE_URL is not defined');
	}

	const connection = drizzle(postgres(`${DATABASE_URL}`, { ssl: 'require', max: 1 }));

	console.log('⏳ Running migrations...');

	const start = Date.now();

	await migrate(connection, { migrationsFolder: 'drizzle' });

	const end = Date.now();

	console.log(`✅ Migrations completed in ${end - start}ms`);

	process.exit(0);
};

runMigrate().catch((err) => {
	console.error('❌ Migration failed');
	console.error(err);
	process.exit(1);
});
