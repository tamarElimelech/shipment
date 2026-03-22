import { Global, Module } from "@nestjs/common"
import * as sql from 'mssql'

@Global()
@Module({
    providers: [
        {
            provide: 'mssql_pool',
            useFactory: async () => {
                try {
                    const config = {
                        user: process.env.DB_USERNAME,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                        server: process.env.DB_HOST || 'localhost',
                        port: Number(process.env.DB_PORT),
                        options: {
                            encrypt: true,
                            trustServerCertificate: true,
                        },
                        pool: {
                            max: 10,
                            min: 0,
                            idleTimeoutMillis: 30000
                        }
                    }
                    const pool = new sql.ConnectionPool(config)
                    return await pool.connect()
                }
                catch (err) {
                    console.error('Database connection failed:', err.message)
                }
            }

        }],
    exports: ['mssql_pool']
})
export class DBModule { }